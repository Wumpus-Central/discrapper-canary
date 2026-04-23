"use strict";
n.d(t, { A: () => A }), n(321073);
var r = n(311907),
    i = n(73153),
    s = n(198982),
    a = n(141468),
    o = n(815807),
    l = n(961350),
    u = n(994500);
class c {
    isIndexing = !1;
    isHistoricalIndexing = !1;
    isFetching = !1;
    analyticsId = null;
    error = null;
    messages = null;
    documentsIndexed = 0;
    totalResults = null;
    messageIds = new Set();
    isInitialFetchComplete = !1;
    cursor = null;
    handleSearchStart() {
        (this.isFetching = !0), (this.isIndexing = !1), (this.analyticsId = null), (this.error = null);
    }
    handleSearchIndexing() {
        (this.isInitialFetchComplete = !0),
            (this.isIndexing = !0),
            (this.isHistoricalIndexing = !0),
            (this.isFetching = !1),
            (this.error = null);
    }
    handleSearchFailure(e) {
        (this.isFetching = !1),
            (this.isIndexing = !1),
            (this.isInitialFetchComplete = !0),
            (this.isHistoricalIndexing = !1),
            (this.error = new s.LG(e)),
            (this.analyticsId = null),
            (this.documentsIndexed = 0);
    }
    handleSearchSuccess(e, t) {
        let { analyticsId: n, cursor: r, totalResults: i, doingHistoricalIndex: s, documentsIndexed: a } = e;
        (this.analyticsId = n),
            (this.isFetching = !1),
            (this.isIndexing = !1),
            (this.isInitialFetchComplete = !0),
            (this.isHistoricalIndexing = s),
            (this.error = null),
            (this.documentsIndexed = a),
            (this.cursor = r);
        let o = [...(this.messages ?? [])],
            l = [];
        return (
            t.forEach((e) => {
                this.messageIds.has(e.id) || (this.messageIds.add(e.id), o.push(e), l.push(e));
            }),
            (this.messages = o),
            (this.totalResults = i),
            l
        );
    }
}
let d = new Map(),
    _ = new Map(),
    f = new Map();
function p(e) {
    return d.get(e) ?? new c();
}
function h(e) {
    let t = p(e);
    return d.set(e, t), t;
}
function E(e, t) {
    let n = _.get(e);
    if (null == n) return !1;
    let r = t(n);
    return _.set(e, r), !0;
}
function m(e) {
    let { type: t, messageId: n, userId: r, emoji: i } = e;
    if (!(0, o.vp)(e)) return !1;
    let s = l.default.getId() === r;
    return E(n, (n) => {
        let { reactionType: r } = e;
        return "MESSAGE_REACTION_ADD" === t ? n.addReaction(i, s, e.colors, r) : n.removeReaction(i, s, r);
    });
}
class g extends r.Ay.Store {
    static displayName = "SearchMessageStore";
    initialize() {
        this.waitFor(l.default, u.A);
    }
    getMessage(e) {
        return _.get(e);
    }
    getTotalCount(e) {
        return p(e).totalResults;
    }
    getIsInitialFetchComplete(e) {
        return p(e).isInitialFetchComplete;
    }
    getIsIndexing(e) {
        return p(e).isIndexing;
    }
    getIsHistoricalIndexing(e) {
        return p(e).isHistoricalIndexing;
    }
    getDocumentsIndexed(e) {
        return p(e).documentsIndexed;
    }
    getIsFetching(e) {
        return p(e).isFetching;
    }
    getError(e) {
        return p(e).error;
    }
    getMessages(e) {
        return p(e).messages;
    }
    getCursor(e) {
        return p(e).cursor;
    }
    getAnalyticsId(e) {
        return p(e).analyticsId;
    }
    hasSearchState(e) {
        return d.has(e);
    }
}
let A = new g(i.h, {
    SEARCH_MESSAGES_START: function (e) {
        e.ids.forEach((e) => {
            h(e).handleSearchStart();
        });
    },
    SEARCH_MESSAGES_SUCCESS: function (e) {
        e.data.forEach((e) => {
            let t = h(e.id),
                n = e.messages.map((e) => {
                    let [t] = e;
                    return (0, a.rh)(t);
                });
            t.handleSearchSuccess(e, n).forEach((e) => {
                _.set(e.id, e);
                let t = f.get(e.id) ?? 0;
                f.set(e.id, t + 1);
            });
        });
    },
    SEARCH_MESSAGES_INDEXING: function (e) {
        e.ids.forEach((e) => {
            h(e).handleSearchIndexing();
        });
    },
    SEARCH_MESSAGES_FAILURE: function (e) {
        e.ids.forEach((t) => {
            h(t).handleSearchFailure(e.error);
        });
    },
    SEARCH_MESSAGES_CLEAR: function (e) {
        let t = d.get(e.id);
        if (null == t) return !1;
        t.messageIds.forEach((e) => {
            let t = f.get(e) ?? 0;
            t <= 1 ? (_.delete(e), f.delete(e)) : f.set(e, t - 1);
        }),
            d.delete(e.id);
    },
    SEARCH_MESSAGES_CLEAR_ALL: function (e) {
        (d = new Map()), (_ = new Map()), (f = new Map());
    },
    MESSAGE_UPDATE: function (e) {
        let t = e.message.id;
        if (null == t) return !1;
        let n = _.get(t);
        if (null == n) return !1;
        let r = (0, a.IU)(n, e.message);
        _.set(t, r);
    },
    MESSAGE_REACTION_ADD: m,
    MESSAGE_REACTION_ADD_MANY: function (e) {
        let { messageId: t, reactions: n } = e,
            r = l.default.getId();
        return E(t, (e) => e.addReactionBatch(n, r));
    },
    MESSAGE_REACTION_REMOVE: m,
    MESSAGE_REACTION_REMOVE_ALL: function (e) {
        let { messageId: t } = e;
        return E(t, (e) => e.set("reactions", []));
    },
    MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
        let { messageId: t, emoji: n } = e;
        return E(t, (e) => e.removeReactionsForEmoji(n));
    },
    CONNECTION_OPEN: function () {
        (d = new Map()), (_ = new Map()), (f = new Map());
    },
});

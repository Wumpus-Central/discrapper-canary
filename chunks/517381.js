"use strict";
n.d(t, { A: () => A }), n(321073);
var i = n(17928),
    r = n(228366),
    s = n(845584),
    a = n(320095),
    o = n(815807),
    l = n(495544),
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
        let { analyticsId: n, cursor: i, totalResults: r, doingHistoricalIndex: s, documentsIndexed: a } = e;
        (this.analyticsId = n),
            (this.isFetching = !1),
            (this.isIndexing = !1),
            (this.isInitialFetchComplete = !0),
            (this.isHistoricalIndexing = s),
            (this.error = null),
            (this.documentsIndexed = a),
            (this.cursor = i);
        let o = [...(this.messages ?? [])],
            l = [];
        return (
            t.forEach((e) => {
                this.messageIds.has(e.id) || (this.messageIds.add(e.id), o.push(e), l.push(e));
            }),
            (this.messages = o),
            (this.totalResults = r),
            l
        );
    }
}
let d = new Map(),
    _ = new Map(),
    f = new Map();
function h(e) {
    return d.get(e) ?? new c();
}
function p(e) {
    let t = h(e);
    return d.set(e, t), t;
}
function E(e, t) {
    let n = _.get(e);
    if (null == n) return !1;
    let i = t(n);
    return _.set(e, i), !0;
}
function m(e) {
    let { type: t, messageId: n, userId: i, emoji: r } = e;
    if (!(0, o.vp)(e)) return !1;
    let s = l.default.getId() === i;
    return E(n, (n) => {
        let { reactionType: i } = e;
        return "MESSAGE_REACTION_ADD" === t ? n.addReaction(r, s, e.colors, i) : n.removeReaction(r, s, i);
    });
}
class g extends i.Ay.Store {
    static displayName = "SearchMessageStore";
    initialize() {
        this.waitFor(l.default, u.A);
    }
    getMessage(e) {
        return _.get(e);
    }
    getTotalCount(e) {
        return h(e).totalResults;
    }
    getIsInitialFetchComplete(e) {
        return h(e).isInitialFetchComplete;
    }
    getIsIndexing(e) {
        return h(e).isIndexing;
    }
    getIsHistoricalIndexing(e) {
        return h(e).isHistoricalIndexing;
    }
    getDocumentsIndexed(e) {
        return h(e).documentsIndexed;
    }
    getIsFetching(e) {
        return h(e).isFetching;
    }
    getError(e) {
        return h(e).error;
    }
    getMessages(e) {
        return h(e).messages;
    }
    getCursor(e) {
        return h(e).cursor;
    }
    getAnalyticsId(e) {
        return h(e).analyticsId;
    }
    hasSearchState(e) {
        return d.has(e);
    }
}
let A = new g(r.h, {
    SEARCH_MESSAGES_START: function (e) {
        e.ids.forEach((e) => {
            p(e).handleSearchStart();
        });
    },
    SEARCH_MESSAGES_SUCCESS: function (e) {
        e.data.forEach((e) => {
            let t = p(e.id),
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
            p(e).handleSearchIndexing();
        });
    },
    SEARCH_MESSAGES_FAILURE: function (e) {
        e.ids.forEach((t) => {
            p(t).handleSearchFailure(e.error);
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
        let i = (0, a.IU)(n, e.message);
        _.set(t, i);
    },
    MESSAGE_REACTION_ADD: m,
    MESSAGE_REACTION_ADD_MANY: function (e) {
        let { messageId: t, reactions: n } = e,
            i = l.default.getId();
        return E(t, (e) => e.addReactionBatch(n, i));
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

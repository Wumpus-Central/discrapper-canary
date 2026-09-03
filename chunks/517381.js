n.d(t, { A: () => g }), n(321073);
var i = n(17928),
    r = n(228366),
    a = n(913122),
    s = n(320095),
    l = n(815807),
    o = n(280450),
    d = n(734057),
    c = n(994500),
    u = n(652215);
class _ {
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
            (this.error = new a.LG(e)),
            (this.analyticsId = null),
            (this.documentsIndexed = 0);
    }
    handleSearchSuccess(e, t) {
        let { analyticsId: n, cursor: i, totalResults: r, doingHistoricalIndex: a, documentsIndexed: s } = e;
        (this.analyticsId = n),
            (this.isFetching = !1),
            (this.isIndexing = !1),
            (this.isInitialFetchComplete = !0),
            (this.isHistoricalIndexing = a),
            (this.error = null),
            (this.documentsIndexed = s),
            (this.cursor = i);
        let l = [...(this.messages ?? [])],
            o = [];
        return (
            t.forEach((e) => {
                this.messageIds.has(e.id) || (this.messageIds.add(e.id), l.push(e), o.push(e));
            }),
            (this.messages = l),
            (this.totalResults = r),
            o
        );
    }
}
let E = new Map(),
    A = new Map(),
    h = new Map();
function I(e) {
    return E.get(e) ?? new _();
}
function f(e) {
    let t = I(e);
    return E.set(e, t), t;
}
function p(e, t) {
    let n = A.get(e);
    if (null == n) return !1;
    let i = t(n);
    return A.set(e, i), !0;
}
function T(e) {
    let { type: t, messageId: n, userId: i, emoji: r, channelId: a } = e;
    if (!(0, l.vp)(e)) return !1;
    let s = o.default.getId() === i,
        c = d.A.getBasicChannel(a)?.type === u.rbe.DM;
    return p(n, (n) => {
        let { reactionType: i } = e;
        return "MESSAGE_REACTION_ADD" === t
            ? n.addReaction(r, s, { colors: e.colors, reactionType: i, isDMChannel: c })
            : n.removeReaction(r, s, i);
    });
}
class m extends i.Ay.Store {
    static displayName = "SearchMessageStore";
    initialize() {
        this.waitFor(o.default, d.A, c.A);
    }
    getMessage(e) {
        return A.get(e);
    }
    getTotalCount(e) {
        return I(e).totalResults;
    }
    getIsInitialFetchComplete(e) {
        return I(e).isInitialFetchComplete;
    }
    getIsIndexing(e) {
        return I(e).isIndexing;
    }
    getIsHistoricalIndexing(e) {
        return I(e).isHistoricalIndexing;
    }
    getDocumentsIndexed(e) {
        return I(e).documentsIndexed;
    }
    getIsFetching(e) {
        return I(e).isFetching;
    }
    getError(e) {
        return I(e).error;
    }
    getMessages(e) {
        return I(e).messages;
    }
    getCursor(e) {
        return I(e).cursor;
    }
    getAnalyticsId(e) {
        return I(e).analyticsId;
    }
    hasSearchState(e) {
        return E.has(e);
    }
}
let g = new m(r.h, {
    SEARCH_MESSAGES_START: function (e) {
        e.ids.forEach((e) => {
            f(e).handleSearchStart();
        });
    },
    SEARCH_MESSAGES_SUCCESS: function (e) {
        e.data.forEach((e) => {
            let t = f(e.id),
                n = e.messages.map((e) => {
                    let [t] = e;
                    return (0, s.rh)(t);
                });
            t.handleSearchSuccess(e, n).forEach((e) => {
                A.set(e.id, e);
                let t = h.get(e.id) ?? 0;
                h.set(e.id, t + 1);
            });
        });
    },
    SEARCH_MESSAGES_INDEXING: function (e) {
        e.ids.forEach((e) => {
            f(e).handleSearchIndexing();
        });
    },
    SEARCH_MESSAGES_FAILURE: function (e) {
        e.ids.forEach((t) => {
            f(t).handleSearchFailure(e.error);
        });
    },
    SEARCH_MESSAGES_CLEAR: function (e) {
        let t = E.get(e.id);
        if (null == t) return !1;
        t.messageIds.forEach((e) => {
            let t = h.get(e) ?? 0;
            t <= 1 ? (A.delete(e), h.delete(e)) : h.set(e, t - 1);
        }),
            E.delete(e.id);
    },
    SEARCH_MESSAGES_CLEAR_ALL: function (e) {
        (E = new Map()), (A = new Map()), (h = new Map());
    },
    MESSAGE_UPDATE: function (e) {
        let t = e.message.id;
        if (null == t) return !1;
        let n = A.get(t);
        if (null == n) return !1;
        let i = (0, s.IU)(n, e.message);
        A.set(t, i);
    },
    MESSAGE_REACTION_ADD: T,
    MESSAGE_REACTION_ADD_MANY: function (e) {
        let { messageId: t, reactions: n } = e,
            i = o.default.getId();
        return p(t, (e) => e.addReactionBatch(n, i));
    },
    MESSAGE_REACTION_REMOVE: T,
    MESSAGE_REACTION_REMOVE_ALL: function (e) {
        let { messageId: t } = e;
        return p(t, (e) => e.set("reactions", []));
    },
    MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
        let { messageId: t, emoji: n } = e;
        return p(t, (e) => e.removeReactionsForEmoji(n));
    },
    CONNECTION_OPEN: function () {
        (E = new Map()), (A = new Map()), (h = new Map());
    },
});

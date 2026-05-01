n.d(t, { A: () => I }), n(321073);
var i = n(17928),
    l = n(228366),
    a = n(845584),
    r = n(320095),
    s = n(815807),
    o = n(495544),
    d = n(994500);
class u {
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
        let { analyticsId: n, cursor: i, totalResults: l, doingHistoricalIndex: a, documentsIndexed: r } = e;
        (this.analyticsId = n),
            (this.isFetching = !1),
            (this.isIndexing = !1),
            (this.isInitialFetchComplete = !0),
            (this.isHistoricalIndexing = a),
            (this.error = null),
            (this.documentsIndexed = r),
            (this.cursor = i);
        let s = [...(this.messages ?? [])],
            o = [];
        return (
            t.forEach((e) => {
                this.messageIds.has(e.id) || (this.messageIds.add(e.id), s.push(e), o.push(e));
            }),
            (this.messages = s),
            (this.totalResults = l),
            o
        );
    }
}
let c = new Map(),
    h = new Map(),
    E = new Map();
function A(e) {
    return c.get(e) ?? new u();
}
function _(e) {
    let t = A(e);
    return c.set(e, t), t;
}
function p(e, t) {
    let n = h.get(e);
    if (null == n) return !1;
    let i = t(n);
    return h.set(e, i), !0;
}
function g(e) {
    let { type: t, messageId: n, userId: i, emoji: l } = e;
    if (!(0, s.vp)(e)) return !1;
    let a = o.default.getId() === i;
    return p(n, (n) => {
        let { reactionType: i } = e;
        return "MESSAGE_REACTION_ADD" === t ? n.addReaction(l, a, e.colors, i) : n.removeReaction(l, a, i);
    });
}
class f extends i.Ay.Store {
    static displayName = "SearchMessageStore";
    initialize() {
        this.waitFor(o.default, d.A);
    }
    getMessage(e) {
        return h.get(e);
    }
    getTotalCount(e) {
        return A(e).totalResults;
    }
    getIsInitialFetchComplete(e) {
        return A(e).isInitialFetchComplete;
    }
    getIsIndexing(e) {
        return A(e).isIndexing;
    }
    getIsHistoricalIndexing(e) {
        return A(e).isHistoricalIndexing;
    }
    getDocumentsIndexed(e) {
        return A(e).documentsIndexed;
    }
    getIsFetching(e) {
        return A(e).isFetching;
    }
    getError(e) {
        return A(e).error;
    }
    getMessages(e) {
        return A(e).messages;
    }
    getCursor(e) {
        return A(e).cursor;
    }
    getAnalyticsId(e) {
        return A(e).analyticsId;
    }
    hasSearchState(e) {
        return c.has(e);
    }
}
let I = new f(l.h, {
    SEARCH_MESSAGES_START: function (e) {
        e.ids.forEach((e) => {
            _(e).handleSearchStart();
        });
    },
    SEARCH_MESSAGES_SUCCESS: function (e) {
        e.data.forEach((e) => {
            let t = _(e.id),
                n = e.messages.map((e) => {
                    let [t] = e;
                    return (0, r.rh)(t);
                });
            t.handleSearchSuccess(e, n).forEach((e) => {
                h.set(e.id, e);
                let t = E.get(e.id) ?? 0;
                E.set(e.id, t + 1);
            });
        });
    },
    SEARCH_MESSAGES_INDEXING: function (e) {
        e.ids.forEach((e) => {
            _(e).handleSearchIndexing();
        });
    },
    SEARCH_MESSAGES_FAILURE: function (e) {
        e.ids.forEach((t) => {
            _(t).handleSearchFailure(e.error);
        });
    },
    SEARCH_MESSAGES_CLEAR: function (e) {
        let t = c.get(e.id);
        if (null == t) return !1;
        t.messageIds.forEach((e) => {
            let t = E.get(e) ?? 0;
            t <= 1 ? (h.delete(e), E.delete(e)) : E.set(e, t - 1);
        }),
            c.delete(e.id);
    },
    SEARCH_MESSAGES_CLEAR_ALL: function (e) {
        (c = new Map()), (h = new Map()), (E = new Map());
    },
    MESSAGE_UPDATE: function (e) {
        let t = e.message.id;
        if (null == t) return !1;
        let n = h.get(t);
        if (null == n) return !1;
        let i = (0, r.IU)(n, e.message);
        h.set(t, i);
    },
    MESSAGE_REACTION_ADD: g,
    MESSAGE_REACTION_ADD_MANY: function (e) {
        let { messageId: t, reactions: n } = e,
            i = o.default.getId();
        return p(t, (e) => e.addReactionBatch(n, i));
    },
    MESSAGE_REACTION_REMOVE: g,
    MESSAGE_REACTION_REMOVE_ALL: function (e) {
        let { messageId: t } = e;
        return p(t, (e) => e.set("reactions", []));
    },
    MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
        let { messageId: t, emoji: n } = e;
        return p(t, (e) => e.removeReactionsForEmoji(n));
    },
    CONNECTION_OPEN: function () {
        (c = new Map()), (h = new Map()), (E = new Map());
    },
});

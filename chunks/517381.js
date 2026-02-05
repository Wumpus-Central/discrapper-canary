"use strict";
n.d(t, { A: () => L }), n(321073);
var r = n(311907),
    i = n(73153),
    a = n(198982),
    s = n(141468),
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
            (this.error = new a.LG(e)),
            (this.analyticsId = null),
            (this.documentsIndexed = 0);
    }
    handleSearchSuccess(e, t) {
        let { analyticsId: n, cursor: r, totalResults: i, doingHistoricalIndex: a, documentsIndexed: s } = e;
        (this.analyticsId = n),
            (this.isFetching = !1),
            (this.isIndexing = !1),
            (this.isInitialFetchComplete = !0),
            (this.isHistoricalIndexing = a),
            (this.error = null),
            (this.documentsIndexed = s),
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
function m(e, t) {
    let n = _.get(e);
    if (null == n) return !1;
    let r = t(n);
    return _.set(e, r), !0;
}
function g(e, t) {
    return t(p(e));
}
function E() {
    (d = new Map()), (_ = new Map()), (f = new Map());
}
function A(e) {
    e.ids.forEach((e) => {
        h(e).handleSearchStart();
    });
}
function I(e) {
    e.data.forEach((e) => {
        let t = h(e.id),
            n = e.messages.map((e) => {
                let [t] = e;
                return (0, s.rh)(t);
            });
        t.handleSearchSuccess(e, n).forEach((e) => {
            _.set(e.id, e);
            let t = f.get(e.id) ?? 0;
            f.set(e.id, t + 1);
        });
    });
}
function T(e) {
    let t = e.message.id;
    if (null == t) return !1;
    let n = _.get(t);
    if (null == n) return !1;
    let r = (0, s.IU)(n, e.message);
    _.set(t, r);
}
function y(e) {
    let { type: t, messageId: n, userId: r, emoji: i } = e;
    if (!(0, o.vp)(e)) return !1;
    let a = l.default.getId() === r;
    return m(n, (n) => {
        let { reactionType: r } = e;
        return "MESSAGE_REACTION_ADD" === t ? n.addReaction(i, a, e.colors, r) : n.removeReaction(i, a, r);
    });
}
function S(e) {
    let { messageId: t, reactions: n } = e,
        r = l.default.getId();
    return m(t, (e) => e.addReactionBatch(n, r));
}
function v(e) {
    let { messageId: t } = e;
    return m(t, (e) => e.set("reactions", []));
}
function C(e) {
    let { messageId: t, emoji: n } = e;
    return m(t, (e) => e.removeReactionsForEmoji(n));
}
function b(e) {
    e.ids.forEach((e) => {
        h(e).handleSearchIndexing();
    });
}
function N(e) {
    e.ids.forEach((t) => {
        h(t).handleSearchFailure(e.error);
    });
}
function R(e) {
    let t = d.get(e.id);
    if (null == t) return !1;
    t.messageIds.forEach((e) => {
        let t = f.get(e) ?? 0;
        t <= 1 ? (_.delete(e), f.delete(e)) : f.set(e, t - 1);
    }),
        d.delete(e.id);
}
function O(e) {
    (d = new Map()), (_ = new Map()), (f = new Map());
}
class D extends r.Ay.Store {
    static displayName = "SearchMessageStore";
    initialize() {
        this.waitFor(l.default, u.A);
    }
    getMessage(e) {
        return _.get(e);
    }
    getTotalCount(e) {
        return g(e, (e) => e.totalResults);
    }
    getIsInitialFetchComplete(e) {
        return g(e, (e) => e.isInitialFetchComplete);
    }
    getIsIndexing(e) {
        return g(e, (e) => e.isIndexing);
    }
    getIsHistoricalIndexing(e) {
        return g(e, (e) => e.isHistoricalIndexing);
    }
    getDocumentsIndexed(e) {
        return g(e, (e) => e.documentsIndexed);
    }
    getIsFetching(e) {
        return g(e, (e) => e.isFetching);
    }
    getError(e) {
        return g(e, (e) => e.error);
    }
    getMessages(e) {
        return g(e, (e) => e.messages);
    }
    getCursor(e) {
        return g(e, (e) => e.cursor);
    }
    getAnalyticsId(e) {
        return g(e, (e) => e.analyticsId);
    }
    hasSearchState(e) {
        return d.has(e);
    }
}
let L = new D(i.h, {
    SEARCH_MESSAGES_START: A,
    SEARCH_MESSAGES_SUCCESS: I,
    SEARCH_MESSAGES_INDEXING: b,
    SEARCH_MESSAGES_FAILURE: N,
    SEARCH_MESSAGES_CLEAR: R,
    SEARCH_MESSAGES_CLEAR_ALL: O,
    MESSAGE_UPDATE: T,
    MESSAGE_REACTION_ADD: y,
    MESSAGE_REACTION_ADD_MANY: S,
    MESSAGE_REACTION_REMOVE: y,
    MESSAGE_REACTION_REMOVE_ALL: v,
    MESSAGE_REACTION_REMOVE_EMOJI: C,
    CONNECTION_OPEN: E,
});

n.d(t, { Z: () => x }), n(388685), n(539854);
var r,
    i = n(442837),
    a = n(570140),
    o = n(881052),
    s = n(786761),
    l = n(995774),
    c = n(314897),
    u = n(699516);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class f {
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
            (this.error = new o.Hx(e)),
            (this.analyticsId = null),
            (this.documentsIndexed = 0);
    }
    handleSearchSuccess(e, t) {
        var n;
        let { analyticsId: r, cursor: i, totalResults: a, doingHistoricalIndex: o, documentsIndexed: s } = e;
        (this.analyticsId = r),
            (this.isFetching = !1),
            (this.isIndexing = !1),
            (this.isInitialFetchComplete = !0),
            (this.isHistoricalIndexing = o),
            (this.error = null),
            (this.documentsIndexed = s),
            (this.cursor = i);
        let l = [...(null != (n = this.messages) ? n : [])],
            c = [];
        return (
            t.forEach((e) => {
                this.messageIds.has(e.id) || (this.messageIds.add(e.id), l.push(e), c.push(e));
            }),
            (this.messages = l),
            (this.totalResults = a),
            c
        );
    }
    constructor() {
        d(this, "isIndexing", !1),
            d(this, "isHistoricalIndexing", !1),
            d(this, "isFetching", !1),
            d(this, "analyticsId", null),
            d(this, "error", null),
            d(this, "messages", null),
            d(this, "documentsIndexed", 0),
            d(this, "totalResults", null),
            d(this, "messageIds", new Set()),
            d(this, "isInitialFetchComplete", !1),
            d(this, "cursor", null);
    }
}
let p = new Map(),
    _ = new Map(),
    m = new Map();
function h(e) {
    var t;
    return null != (t = p.get(e)) ? t : new f();
}
function g(e) {
    let t = h(e);
    return p.set(e, t), t;
}
function E(e, t) {
    let n = _.get(e);
    if (null == n) return !1;
    let r = t(n);
    return _.set(e, r), !0;
}
function b(e, t) {
    return t(h(e));
}
function y() {
    (p = new Map()), (_ = new Map()), (m = new Map());
}
function O(e) {
    e.ids.forEach((e) => {
        g(e).handleSearchStart();
    });
}
function v(e) {
    e.data.forEach((e) => {
        let t = g(e.id),
            n = e.messages.map((e) => {
                let [t] = e;
                return (0, s.e5)(t);
            });
        t.handleSearchSuccess(e, n).forEach((e) => {
            var t;
            _.set(e.id, e);
            let n = null != (t = m.get(e.id)) ? t : 0;
            m.set(e.id, n + 1);
        });
    });
}
function S(e) {
    let t = e.message.id;
    if (null == t) return !1;
    let n = _.get(t);
    if (null == n) return !1;
    let r = (0, s.wi)(n, e.message);
    _.set(t, r);
}
function I(e) {
    let { type: t, messageId: n, userId: r, emoji: i } = e;
    if (!(0, l.sm)(e)) return !1;
    let a = c.default.getId() === r;
    return E(n, (n) => {
        let { reactionType: r } = e;
        return "MESSAGE_REACTION_ADD" === t ? n.addReaction(i, a, e.colors, r) : n.removeReaction(i, a, r);
    });
}
function T(e) {
    let { messageId: t, reactions: n } = e,
        r = c.default.getId();
    return E(t, (e) => e.addReactionBatch(n, r));
}
function C(e) {
    let { messageId: t } = e;
    return E(t, (e) => e.set("reactions", []));
}
function A(e) {
    let { messageId: t, emoji: n } = e;
    return E(t, (e) => e.removeReactionsForEmoji(n));
}
function N(e) {
    e.ids.forEach((e) => {
        g(e).handleSearchIndexing();
    });
}
function P(e) {
    e.ids.forEach((t) => {
        g(t).handleSearchFailure(e.error);
    });
}
function R(e) {
    let t = p.get(e.id);
    if (null == t) return !1;
    t.messageIds.forEach((e) => {
        var t;
        let n = null != (t = m.get(e)) ? t : 0;
        n <= 1 ? (_.delete(e), m.delete(e)) : m.set(e, n - 1);
    }),
        p.delete(e.id);
}
function D(e) {
    (p = new Map()), (_ = new Map()), (m = new Map());
}
class w extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(c.default, u.Z);
    }
    getMessage(e) {
        return _.get(e);
    }
    getTotalCount(e) {
        return b(e, (e) => e.totalResults);
    }
    getIsInitialFetchComplete(e) {
        return b(e, (e) => e.isInitialFetchComplete);
    }
    getIsIndexing(e) {
        return b(e, (e) => e.isIndexing);
    }
    getIsHistoricalIndexing(e) {
        return b(e, (e) => e.isHistoricalIndexing);
    }
    getDocumentsIndexed(e) {
        return b(e, (e) => e.documentsIndexed);
    }
    getIsFetching(e) {
        return b(e, (e) => e.isFetching);
    }
    getError(e) {
        return b(e, (e) => e.error);
    }
    getMessages(e) {
        return b(e, (e) => e.messages);
    }
    getCursor(e) {
        return b(e, (e) => e.cursor);
    }
    getAnalyticsId(e) {
        return b(e, (e) => e.analyticsId);
    }
    hasSearchState(e) {
        return p.has(e);
    }
}
d(w, "displayName", "SearchMessageStore");
let x = new w(a.Z, {
    SEARCH_MESSAGES_START: O,
    SEARCH_MESSAGES_SUCCESS: v,
    SEARCH_MESSAGES_INDEXING: N,
    SEARCH_MESSAGES_FAILURE: P,
    SEARCH_MESSAGES_CLEAR: R,
    SEARCH_MESSAGES_CLEAR_ALL: D,
    MESSAGE_UPDATE: S,
    MESSAGE_REACTION_ADD: I,
    MESSAGE_REACTION_ADD_MANY: T,
    MESSAGE_REACTION_REMOVE: I,
    MESSAGE_REACTION_REMOVE_ALL: C,
    MESSAGE_REACTION_REMOVE_EMOJI: A,
    CONNECTION_OPEN: y,
});

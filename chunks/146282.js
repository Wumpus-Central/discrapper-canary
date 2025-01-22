let i;
var a,
    o = r(47120);
var s = r(724458);
var l = r(442837),
    u = r(570140),
    c = r(180335);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let f = new Map(),
    p = new Map(),
    h = new Map(),
    _ = !1;
function m(e) {
    e(f), (f = new Map(f));
}
function g(e) {
    let { feedId: n, feed: r } = e;
    m((e) => e.set(n, r)), h.set(n, new Date());
}
function E(e) {
    let { feedId: n, state: r } = e;
    p.set(n, r);
}
function v() {
    f = new Map();
}
function y(e) {
    let { feedId: n } = e;
    if (!f.has(n)) return !1;
    m((e) => e.delete(n));
}
function b(e) {
    let { filters: n } = e;
    i = n;
}
function I() {
    _ = !_;
}
class T extends (a = l.ZP.Store) {
    getFeeds() {
        return f;
    }
    getFeed(e) {
        return f.get(e);
    }
    getFeedState(e) {
        return p.get(e);
    }
    getLastFeedFetchDate(e) {
        return h.get(e);
    }
    getFilters() {
        return i;
    }
    getFeedRequestId(e) {
        var n;
        return null === (n = this.getFeed(e)) || void 0 === n ? void 0 : n.request_id;
    }
    getDebugImpressionCappingDisabled() {
        return _;
    }
    getMatchingInboxEntry(e) {
        let { activity: n, userId: r, feedId: i } = e,
            a = this.getFeed(i);
        if (null == a || null == n) return;
        let o = a.entries.reduce((e, n) => (n.content.author_id === r ? [...e, n.content] : [...e]), []);
        return (0, c.vu)(o, n);
    }
}
d(T, 'displayName', 'ContentInventoryStore'),
    (n.Z = new T(u.Z, {
        CONNECTION_OPEN: v,
        CONTENT_INVENTORY_SET_FEED: g,
        CONTENT_INVENTORY_SET_FEED_STATE: E,
        CONTENT_INVENTORY_SET_FILTERS: b,
        CONTENT_INVENTORY_CLEAR_FEED: y,
        CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING: I
    }));

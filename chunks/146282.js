let i;
n.d(t, { Z: () => I }), n(47120), n(724458);
var r,
    a = n(442837),
    s = n(570140),
    o = n(180335);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let u = new Map(),
    c = new Map(),
    d = new Map(),
    f = !1;
function _(e) {
    e(u), (u = new Map(u));
}
function p(e) {
    let { feedId: t, feed: n } = e;
    _((e) => e.set(t, n)), d.set(t, new Date());
}
function h(e) {
    let { feedId: t, state: n } = e;
    c.set(t, n);
}
function m() {
    u = new Map();
}
function g(e) {
    let { feedId: t } = e;
    if (!u.has(t)) return !1;
    _((e) => e.delete(t));
}
function E(e) {
    let { filters: t } = e;
    i = t;
}
function v() {
    f = !f;
}
class y extends (r = a.ZP.Store) {
    getFeeds() {
        return u;
    }
    getFeed(e) {
        return u.get(e);
    }
    getFeedState(e) {
        return c.get(e);
    }
    getLastFeedFetchDate(e) {
        return d.get(e);
    }
    getFilters() {
        return i;
    }
    getFeedRequestId(e) {
        var t;
        return null === (t = this.getFeed(e)) || void 0 === t ? void 0 : t.request_id;
    }
    getDebugImpressionCappingDisabled() {
        return f;
    }
    getMatchingInboxEntry(e) {
        let { activity: t, userId: n, feedId: i } = e,
            r = this.getFeed(i);
        if (null == r || null == t) return;
        let a = r.entries.reduce((e, t) => (t.content.author_id === n ? [...e, t.content] : [...e]), []);
        return (0, o.vu)(a, t);
    }
}
l(y, 'displayName', 'ContentInventoryStore');
let I = new y(s.Z, {
    CONNECTION_OPEN: m,
    CONTENT_INVENTORY_SET_FEED: p,
    CONTENT_INVENTORY_SET_FEED_STATE: h,
    CONTENT_INVENTORY_SET_FILTERS: E,
    CONTENT_INVENTORY_CLEAR_FEED: g,
    CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING: v
});

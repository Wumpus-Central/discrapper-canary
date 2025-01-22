var i,
    a = r(47120);
var o = r(653041);
var s = r(442837),
    l = r(570140),
    u = r(162461);
function c(e, n, r) {
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
let d = 2592000000,
    f = 2048,
    p = () => ({
        itemImpressions: [],
        hidden: !1
    }),
    h = p(),
    _ = new Set(),
    m = new Set(),
    g = 0,
    E = !1,
    v = !1,
    y = 1000;
function b() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (!e && Date.now() < g) return;
    let n = 0,
        r = Date.now() - d;
    for (let e = 0; e < h.itemImpressions.length; e++) {
        let [i, a] = h.itemImpressions[e];
        if (a < r) n = e + 1;
        else break;
    }
    n > 0 && (h.itemImpressions = h.itemImpressions.slice(n)), h.itemImpressions.length > f && (h.itemImpressions = h.itemImpressions.slice(-f));
    let { impressionAge: i } = (0, u.m6)('ContentInventoryPersistedStore.updateImpressionCaches'),
        a = v ? y : i,
        o = new Set(),
        s = new Set(),
        l = Date.now() - a,
        c = null;
    for (let [e, n] of h.itemImpressions) n < l ? o.add(e) : null == c && (c = n + a), s.add(e);
    (_ = o), (m = s), (g = null != c ? c : 1 / 0), (E = !0);
}
function I(e) {
    let { itemIds: n } = e;
    !E && b();
    let r = Date.now(),
        i = !1;
    for (let e of n) !m.has(e) && (h.itemImpressions.push([e, r]), (i = !0));
    return b(i), i;
}
function T() {
    (h.itemImpressions = []), b(!0);
}
function S() {
    return console.log('Item impressions:', h.itemImpressions), !1;
}
function A() {
    v = !v;
}
function C() {
    h.hidden = !h.hidden;
}
class N extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        h = {
            ...h,
            ...(null != e ? e : {})
        };
    }
    getState() {
        return h;
    }
    getImpressionCappedItemIds() {
        return b(), _;
    }
    getDebugFastImpressionCappingEnabled() {
        return v;
    }
    get hidden() {
        return h.hidden;
    }
    reset() {
        h = p();
    }
}
c(N, 'displayName', 'ContentInventoryPersistedStore'),
    c(N, 'persistKey', 'ContentInventoryPersistedStore'),
    (n.Z = new N(l.Z, {
        CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS: I,
        CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS: T,
        CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS: S,
        CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING: A,
        CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: C
    }));

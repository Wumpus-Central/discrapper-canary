n.d(t, { Z: () => N }), n(47120), n(653041);
var i,
    r = n(442837),
    a = n(570140),
    s = n(70956);
function o(e, t, n) {
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
let l = 2592000000,
    u = 3 * s.Z.Millis.DAY,
    c = 2048,
    d = () => ({
        itemImpressions: [],
        hidden: !1
    }),
    f = d(),
    _ = new Set(),
    p = new Set(),
    h = 0,
    m = !1,
    g = !1,
    E = 1000;
function v() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (!e && Date.now() < h) return;
    let t = 0,
        n = Date.now() - l;
    for (let e = 0; e < f.itemImpressions.length; e++) {
        let [i, r] = f.itemImpressions[e];
        if (r < n) t = e + 1;
        else break;
    }
    t > 0 && (f.itemImpressions = f.itemImpressions.slice(t)), f.itemImpressions.length > c && (f.itemImpressions = f.itemImpressions.slice(-c));
    let i = g ? E : u,
        r = new Set(),
        a = new Set(),
        s = Date.now() - i,
        o = null;
    for (let [e, t] of f.itemImpressions) t < s ? r.add(e) : null == o && (o = t + i), a.add(e);
    (_ = r), (p = a), (h = null != o ? o : 1 / 0), (m = !0);
}
function y(e) {
    let { itemIds: t } = e;
    m || v();
    let n = Date.now(),
        i = !1;
    for (let e of t) p.has(e) || (f.itemImpressions.push([e, n]), (i = !0));
    return v(i), i;
}
function I() {
    (f.itemImpressions = []), v(!0);
}
function T() {
    return console.log('Item impressions:', f.itemImpressions), !1;
}
function b() {
    g = !g;
}
function S() {
    f.hidden = !f.hidden;
}
class A extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        f = {
            ...f,
            ...(null != e ? e : {})
        };
    }
    getState() {
        return f;
    }
    getImpressionCappedItemIds() {
        return v(), _;
    }
    getDebugFastImpressionCappingEnabled() {
        return g;
    }
    get hidden() {
        return f.hidden;
    }
    reset() {
        f = d();
    }
}
o(A, 'displayName', 'ContentInventoryPersistedStore'), o(A, 'persistKey', 'ContentInventoryPersistedStore');
let N = new A(a.Z, {
    CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS: y,
    CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS: I,
    CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS: T,
    CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING: b,
    CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: S
});

n.d(t, { Z: () => A }), n(388685), n(539854);
var r,
    i = n(442837),
    a = n(570140),
    o = n(70956);
function s(e, t, n) {
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
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
let c = 2592000000,
    u = 3 * o.Z.Millis.DAY,
    d = 2048,
    f = () => ({
        itemImpressions: [],
        hidden: !1,
    }),
    p = f(),
    _ = new Set(),
    m = new Set(),
    h = 0,
    g = !1,
    E = !1,
    b = 1000;
function y() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (!e && Date.now() < h) return;
    let t = 0,
        n = Date.now() - c;
    for (let e = 0; e < p.itemImpressions.length; e++) {
        let [r, i] = p.itemImpressions[e];
        if (i < n) t = e + 1;
        else break;
    }
    t > 0 && (p.itemImpressions = p.itemImpressions.slice(t)),
        p.itemImpressions.length > d && (p.itemImpressions = p.itemImpressions.slice(-d));
    let r = E ? b : u,
        i = new Set(),
        a = new Set(),
        o = Date.now() - r,
        s = null;
    for (let [e, t] of p.itemImpressions) t < o ? i.add(e) : null == s && (s = t + r), a.add(e);
    (_ = i), (m = a), (h = null != s ? s : 1 / 0), (g = !0);
}
function O(e) {
    let { itemIds: t } = e;
    g || y();
    let n = Date.now(),
        r = !1;
    for (let e of t) m.has(e) || (p.itemImpressions.push([e, n]), (r = !0));
    return y(r), r;
}
function v() {
    (p.itemImpressions = []), y(!0);
}
function S() {
    return console.log("Item impressions:", p.itemImpressions), !1;
}
function I() {
    E = !E;
}
function T() {
    p.hidden = !p.hidden;
}
class C extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        p = l({}, p, null != e ? e : {});
    }
    getState() {
        return p;
    }
    getImpressionCappedItemIds() {
        return y(), _;
    }
    getDebugFastImpressionCappingEnabled() {
        return E;
    }
    get hidden() {
        return p.hidden;
    }
    reset() {
        p = f();
    }
}
s(C, "displayName", "ContentInventoryPersistedStore"), s(C, "persistKey", "ContentInventoryPersistedStore");
let A = new C(a.Z, {
    CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS: O,
    CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS: v,
    CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS: S,
    CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING: I,
    CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: T,
});

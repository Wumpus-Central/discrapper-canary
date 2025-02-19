n.d(t, { Z: () => A }), n(47120), n(653041);
var r,
    i = n(442837),
    o = n(570140),
    a = n(70956);
function s(e, t, n) {
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
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
let c = 2592000000,
    u = 3 * a.Z.Millis.DAY,
    d = 2048,
    f = () => ({
        itemImpressions: [],
        hidden: !1
    }),
    p = f(),
    _ = new Set(),
    h = new Set(),
    m = 0,
    g = !1,
    E = !1,
    v = 1000;
function b() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (!e && Date.now() < m) return;
    let t = 0,
        n = Date.now() - c;
    for (let e = 0; e < p.itemImpressions.length; e++) {
        let [r, i] = p.itemImpressions[e];
        if (i < n) t = e + 1;
        else break;
    }
    t > 0 && (p.itemImpressions = p.itemImpressions.slice(t)), p.itemImpressions.length > d && (p.itemImpressions = p.itemImpressions.slice(-d));
    let r = E ? v : u,
        i = new Set(),
        o = new Set(),
        a = Date.now() - r,
        s = null;
    for (let [e, t] of p.itemImpressions) t < a ? i.add(e) : null == s && (s = t + r), o.add(e);
    (_ = i), (h = o), (m = null != s ? s : 1 / 0), (g = !0);
}
function y(e) {
    let { itemIds: t } = e;
    g || b();
    let n = Date.now(),
        r = !1;
    for (let e of t) h.has(e) || (p.itemImpressions.push([e, n]), (r = !0));
    return b(r), r;
}
function O() {
    (p.itemImpressions = []), b(!0);
}
function S() {
    return console.log('Item impressions:', p.itemImpressions), !1;
}
function I() {
    E = !E;
}
function T() {
    p.hidden = !p.hidden;
}
class N extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        p = l({}, p, null != e ? e : {});
    }
    getState() {
        return p;
    }
    getImpressionCappedItemIds() {
        return b(), _;
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
s(N, 'displayName', 'ContentInventoryPersistedStore'), s(N, 'persistKey', 'ContentInventoryPersistedStore');
let A = new N(o.Z, {
    CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS: y,
    CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS: O,
    CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS: S,
    CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING: I,
    CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: T
});

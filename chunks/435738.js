n.d(t, {
    A: () => C,
}),
    n(896048),
    n(321073);
var r,
    i = n(311907),
    a = n(73153),
    s = n(927813);

function o(e, t, n) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
let c = 2592e6,
    u = 3 * s.A.Millis.DAY,
    d = 2048,
    f = () => ({
        itemImpressions: [],
        hidden: !1,
    }),
    p = f(),
    _ = new Set(),
    h = new Set(),
    m = 0,
    g = !1,
    E = !1,
    b = 1e3;

function y() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (!e && Date.now() < m) return;
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
        s = Date.now() - r,
        o = null;
    for (let [e, t] of p.itemImpressions) t < s ? i.add(e) : null == o && (o = t + r), a.add(e);
    (_ = i), (h = a), (m = null != o ? o : 1 / 0), (g = !0);
}

function O(e) {
    let { itemIds: t } = e;
    g || y();
    let n = Date.now(),
        r = !1;
    for (let e of t) h.has(e) || (p.itemImpressions.push([e, n]), (r = !0));
    return y(r), r;
}

function A() {
    (p.itemImpressions = []), y(!0);
}

function v() {
    return console.log("Item impressions:", p.itemImpressions), !1;
}

function S() {
    E = !E;
}

function I() {
    p.hidden = !p.hidden;
}
class T extends (r = i.Ay.PersistedStore) {
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
o(T, "displayName", "ContentInventoryPersistedStore"), o(T, "persistKey", "ContentInventoryPersistedStore");
let C = new T(a.h, {
    CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS: O,
    CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS: A,
    CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS: v,
    CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING: S,
    CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: I,
});

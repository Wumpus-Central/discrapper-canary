"use strict";
n.d(t, { A: () => v }), n(321073);
var r = n(311907),
    i = n(73153),
    a = n(927813);
let s = 2592e6,
    o = 3 * a.A.Millis.DAY,
    l = 2048,
    u = () => ({ itemImpressions: [], hidden: !1 }),
    c = u(),
    d = new Set(),
    _ = new Set(),
    f = 0,
    p = !1,
    h = !1,
    m = 1e3;
function g() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (!e && Date.now() < f) return;
    let t = 0,
        n = Date.now() - s;
    for (let e = 0; e < c.itemImpressions.length; e++) {
        let [r, i] = c.itemImpressions[e];
        if (i < n) t = e + 1;
        else break;
    }
    t > 0 && (c.itemImpressions = c.itemImpressions.slice(t)),
        c.itemImpressions.length > l && (c.itemImpressions = c.itemImpressions.slice(-l));
    let r = h ? m : o,
        i = new Set(),
        a = new Set(),
        u = Date.now() - r,
        g = null;
    for (let [e, t] of c.itemImpressions) t < u ? i.add(e) : null == g && (g = t + r), a.add(e);
    (d = i), (_ = a), (f = g ?? 1 / 0), (p = !0);
}
function E(e) {
    let { itemIds: t } = e;
    p || g();
    let n = Date.now(),
        r = !1;
    for (let e of t) _.has(e) || (c.itemImpressions.push([e, n]), (r = !0));
    return g(r), r;
}
function A() {
    (c.itemImpressions = []), g(!0);
}
function I() {
    return console.log("Item impressions:", c.itemImpressions), !1;
}
function T() {
    h = !h;
}
function y() {
    c.hidden = !c.hidden;
}
class S extends r.Ay.PersistedStore {
    static displayName = "ContentInventoryPersistedStore";
    static persistKey = "ContentInventoryPersistedStore";
    initialize(e) {
        c = { ...c, ...(e ?? {}) };
    }
    getState() {
        return c;
    }
    getImpressionCappedItemIds() {
        return g(), d;
    }
    getDebugFastImpressionCappingEnabled() {
        return h;
    }
    get hidden() {
        return c.hidden;
    }
    reset() {
        c = u();
    }
}
let v = new S(i.h, {
    CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS: E,
    CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS: A,
    CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS: I,
    CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING: T,
    CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: y,
});

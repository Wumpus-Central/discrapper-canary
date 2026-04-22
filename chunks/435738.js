"use strict";
n.d(t, { A: () => h }), n(321073);
var r = n(311907),
    i = n(73153);
let s = 3 * n(927813).A.Millis.DAY,
    a = () => ({ itemImpressions: [], hidden: !1 }),
    o = a(),
    l = new Set(),
    u = new Set(),
    d = 0,
    c = !1,
    _ = !1;
function f() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (!e && Date.now() < d) return;
    let t = 0,
        n = Date.now() - 2592e6;
    for (let e = 0; e < o.itemImpressions.length; e++) {
        let [r, i] = o.itemImpressions[e];
        if (i < n) t = e + 1;
        else break;
    }
    t > 0 && (o.itemImpressions = o.itemImpressions.slice(t)),
        o.itemImpressions.length > 2048 && (o.itemImpressions = o.itemImpressions.slice(-2048));
    let r = _ ? 1e3 : s,
        i = new Set(),
        a = new Set(),
        f = Date.now() - r,
        E = null;
    for (let [e, t] of o.itemImpressions) t < f ? i.add(e) : null == E && (E = t + r), a.add(e);
    (l = i), (u = a), (d = E ?? 1 / 0), (c = !0);
}
class E extends r.Ay.PersistedStore {
    static displayName = "ContentInventoryPersistedStore";
    static persistKey = "ContentInventoryPersistedStore";
    initialize(e) {
        o = { ...o, ...(e ?? {}) };
    }
    getState() {
        return o;
    }
    getImpressionCappedItemIds() {
        return f(), l;
    }
    getDebugFastImpressionCappingEnabled() {
        return _;
    }
    get hidden() {
        return o.hidden;
    }
    reset() {
        o = a();
    }
}
let h = new E(i.h, {
    CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS: function (e) {
        let { itemIds: t } = e;
        c || f();
        let n = Date.now(),
            r = !1;
        for (let e of t) u.has(e) || (o.itemImpressions.push([e, n]), (r = !0));
        return f(r), r;
    },
    CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS: function () {
        (o.itemImpressions = []), f(!0);
    },
    CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS: function () {
        return console.log("Item impressions:", o.itemImpressions), !1;
    },
    CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING: function () {
        _ = !_;
    },
    CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: function () {
        o.hidden = !o.hidden;
    },
});

"use strict";
n.d(t, { A: () => h }), n(321073);
var i = n(17928),
    r = n(228366);
let a = 3 * n(927813).A.Millis.DAY;
function s() {
    return { itemImpressions: [], hidden: !1 };
}
let l = s(),
    o = new Set(),
    d = new Set(),
    c = 0,
    u = !1,
    _ = !1;
function E() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (!e && Date.now() < c) return;
    let t = 0,
        n = Date.now() - 2592e6;
    for (let e = 0; e < l.itemImpressions.length; e++) {
        let [i, r] = l.itemImpressions[e];
        if (r < n) t = e + 1;
        else break;
    }
    t > 0 && (l.itemImpressions = l.itemImpressions.slice(t)),
        l.itemImpressions.length > 2048 && (l.itemImpressions = l.itemImpressions.slice(-2048));
    let i = _ ? 1e3 : a,
        r = new Set(),
        s = new Set(),
        E = Date.now() - i,
        A = null;
    for (let [e, t] of l.itemImpressions) t < E ? r.add(e) : null == A && (A = t + i), s.add(e);
    (o = r), (d = s), (c = A ?? 1 / 0), (u = !0);
}
class A extends i.Ay.PersistedStore {
    static displayName = "ContentInventoryPersistedStore";
    static persistKey = "ContentInventoryPersistedStore";
    initialize(e) {
        l = { ...l, ...(e ?? {}) };
    }
    getState() {
        return l;
    }
    getImpressionCappedItemIds() {
        return E(), o;
    }
    getDebugFastImpressionCappingEnabled() {
        return _;
    }
    get hidden() {
        return l.hidden;
    }
    reset() {
        l = s();
    }
}
let h = new A(r.h, {
    CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS: function (e) {
        let { itemIds: t } = e;
        u || E();
        let n = Date.now(),
            i = !1;
        for (let e of t) d.has(e) || (l.itemImpressions.push([e, n]), (i = !0));
        return E(i), i;
    },
    CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS: function () {
        (l.itemImpressions = []), E(!0);
    },
    CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS: function () {
        return console.log("Item impressions:", l.itemImpressions), !1;
    },
    CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING: function () {
        _ = !_;
    },
    CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: function () {
        l.hidden = !l.hidden;
    },
});

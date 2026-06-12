"use strict";
n.d(t, { A: () => p }), n(321073);
var i = n(17928),
    r = n(228366);
let s = 3 * n(927813).A.Millis.DAY,
    a = () => ({ itemImpressions: [], hidden: !1 }),
    o = a(),
    l = new Set(),
    u = new Set(),
    c = 0,
    d = !1,
    _ = !1;
function h() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (!e && Date.now() < c) return;
    let t = 0,
        n = Date.now() - 2592e6;
    for (let e = 0; e < o.itemImpressions.length; e++) {
        let [i, r] = o.itemImpressions[e];
        if (r < n) t = e + 1;
        else break;
    }
    t > 0 && (o.itemImpressions = o.itemImpressions.slice(t)),
        o.itemImpressions.length > 2048 && (o.itemImpressions = o.itemImpressions.slice(-2048));
    let i = _ ? 1e3 : s,
        r = new Set(),
        a = new Set(),
        h = Date.now() - i,
        f = null;
    for (let [e, t] of o.itemImpressions) t < h ? r.add(e) : null == f && (f = t + i), a.add(e);
    (l = r), (u = a), (c = f ?? 1 / 0), (d = !0);
}
class f extends i.Ay.PersistedStore {
    static displayName = "ContentInventoryPersistedStore";
    static persistKey = "ContentInventoryPersistedStore";
    initialize(e) {
        o = { ...o, ...(e ?? {}) };
    }
    getState() {
        return o;
    }
    getImpressionCappedItemIds() {
        return h(), l;
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
let p = new f(r.h, {
    CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS: function (e) {
        let { itemIds: t } = e;
        d || h();
        let n = Date.now(),
            i = !1;
        for (let e of t) u.has(e) || (o.itemImpressions.push([e, n]), (i = !0));
        return h(i), i;
    },
    CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS: function () {
        (o.itemImpressions = []), h(!0);
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

n.d(t, { A: () => I }), n(321073);
var i = n(17928),
    a = n(228366);
let r = 3 * n(927813).A.Millis.DAY,
    s = () => ({ itemImpressions: [], hidden: !1 }),
    l = s(),
    o = new Set(),
    d = new Set(),
    c = 0,
    _ = !1,
    E = !1;
function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (!e && Date.now() < c) return;
    let t = 0,
        n = Date.now() - 2592e6;
    for (let e = 0; e < l.itemImpressions.length; e++) {
        let [i, a] = l.itemImpressions[e];
        if (a < n) t = e + 1;
        else break;
    }
    t > 0 && (l.itemImpressions = l.itemImpressions.slice(t)),
        l.itemImpressions.length > 2048 && (l.itemImpressions = l.itemImpressions.slice(-2048));
    let i = E ? 1e3 : r,
        a = new Set(),
        s = new Set(),
        u = Date.now() - i,
        A = null;
    for (let [e, t] of l.itemImpressions) t < u ? a.add(e) : null == A && (A = t + i), s.add(e);
    (o = a), (d = s), (c = A ?? 1 / 0), (_ = !0);
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
        return u(), o;
    }
    getDebugFastImpressionCappingEnabled() {
        return E;
    }
    get hidden() {
        return l.hidden;
    }
    reset() {
        l = s();
    }
}
let I = new A(a.h, {
    CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS: function (e) {
        let { itemIds: t } = e;
        _ || u();
        let n = Date.now(),
            i = !1;
        for (let e of t) d.has(e) || (l.itemImpressions.push([e, n]), (i = !0));
        return u(i), i;
    },
    CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS: function () {
        (l.itemImpressions = []), u(!0);
    },
    CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS: function () {
        return console.log("Item impressions:", l.itemImpressions), !1;
    },
    CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING: function () {
        E = !E;
    },
    CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: function () {
        l.hidden = !l.hidden;
    },
});

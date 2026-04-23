n.d(t, { A: () => A }), n(321073);
var i = n(17928),
    r = n(228366);
let a = 3 * n(927813).A.Millis.DAY,
    s = () => ({ itemImpressions: [], hidden: !1 }),
    _ = s(),
    l = new Set(),
    o = new Set(),
    E = 0,
    d = !1,
    c = !1;
function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (!e && Date.now() < E) return;
    let t = 0,
        n = Date.now() - 2592e6;
    for (let e = 0; e < _.itemImpressions.length; e++) {
        let [i, r] = _.itemImpressions[e];
        if (r < n) t = e + 1;
        else break;
    }
    t > 0 && (_.itemImpressions = _.itemImpressions.slice(t)),
        _.itemImpressions.length > 2048 && (_.itemImpressions = _.itemImpressions.slice(-2048));
    let i = c ? 1e3 : a,
        r = new Set(),
        s = new Set(),
        u = Date.now() - i,
        I = null;
    for (let [e, t] of _.itemImpressions) t < u ? r.add(e) : null == I && (I = t + i), s.add(e);
    (l = r), (o = s), (E = I ?? 1 / 0), (d = !0);
}
class I extends i.Ay.PersistedStore {
    static displayName = "ContentInventoryPersistedStore";
    static persistKey = "ContentInventoryPersistedStore";
    initialize(e) {
        _ = { ..._, ...(e ?? {}) };
    }
    getState() {
        return _;
    }
    getImpressionCappedItemIds() {
        return u(), l;
    }
    getDebugFastImpressionCappingEnabled() {
        return c;
    }
    get hidden() {
        return _.hidden;
    }
    reset() {
        _ = s();
    }
}
let A = new I(r.h, {
    CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS: function (e) {
        let { itemIds: t } = e;
        d || u();
        let n = Date.now(),
            i = !1;
        for (let e of t) o.has(e) || (_.itemImpressions.push([e, n]), (i = !0));
        return u(i), i;
    },
    CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS: function () {
        (_.itemImpressions = []), u(!0);
    },
    CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS: function () {
        return console.log("Item impressions:", _.itemImpressions), !1;
    },
    CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING: function () {
        c = !c;
    },
    CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: function () {
        _.hidden = !_.hidden;
    },
});

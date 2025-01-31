n.d(t, { Z: () => A }), n(47120), n(653041);
var i,
    r = n(442837),
    a = n(570140),
    s = n(162461);
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
    u = 2048,
    c = () => ({
        itemImpressions: [],
        hidden: !1
    }),
    d = c(),
    f = new Set(),
    _ = new Set(),
    p = 0,
    h = !1,
    m = !1,
    g = 1000;
function E() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (!e && Date.now() < p) return;
    let t = 0,
        n = Date.now() - l;
    for (let e = 0; e < d.itemImpressions.length; e++) {
        let [i, r] = d.itemImpressions[e];
        if (r < n) t = e + 1;
        else break;
    }
    t > 0 && (d.itemImpressions = d.itemImpressions.slice(t)), d.itemImpressions.length > u && (d.itemImpressions = d.itemImpressions.slice(-u));
    let { impressionAge: i } = (0, s.m6)('ContentInventoryPersistedStore.updateImpressionCaches'),
        r = m ? g : i,
        a = new Set(),
        o = new Set(),
        c = Date.now() - r,
        E = null;
    for (let [e, t] of d.itemImpressions) t < c ? a.add(e) : null == E && (E = t + r), o.add(e);
    (f = a), (_ = o), (p = null != E ? E : 1 / 0), (h = !0);
}
function v(e) {
    let { itemIds: t } = e;
    h || E();
    let n = Date.now(),
        i = !1;
    for (let e of t) _.has(e) || (d.itemImpressions.push([e, n]), (i = !0));
    return E(i), i;
}
function y() {
    (d.itemImpressions = []), E(!0);
}
function I() {
    return console.log('Item impressions:', d.itemImpressions), !1;
}
function b() {
    m = !m;
}
function T() {
    d.hidden = !d.hidden;
}
class S extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        d = {
            ...d,
            ...(null != e ? e : {})
        };
    }
    getState() {
        return d;
    }
    getImpressionCappedItemIds() {
        return E(), f;
    }
    getDebugFastImpressionCappingEnabled() {
        return m;
    }
    get hidden() {
        return d.hidden;
    }
    reset() {
        d = c();
    }
}
o(S, 'displayName', 'ContentInventoryPersistedStore'), o(S, 'persistKey', 'ContentInventoryPersistedStore');
let A = new S(a.Z, {
    CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS: v,
    CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS: y,
    CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS: I,
    CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING: b,
    CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: T
});

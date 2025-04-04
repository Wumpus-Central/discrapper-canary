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
    _ = f(),
    p = new Set(),
    h = new Set(),
    m = 0,
    g = !1,
    E = !1,
    b = 1000;
function y() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (!e && Date.now() < m) return;
    let t = 0,
        n = Date.now() - c;
    for (let e = 0; e < _.itemImpressions.length; e++) {
        let [r, i] = _.itemImpressions[e];
        if (i < n) t = e + 1;
        else break;
    }
    t > 0 && (_.itemImpressions = _.itemImpressions.slice(t)), _.itemImpressions.length > d && (_.itemImpressions = _.itemImpressions.slice(-d));
    let r = E ? b : u,
        i = new Set(),
        o = new Set(),
        a = Date.now() - r,
        s = null;
    for (let [e, t] of _.itemImpressions) t < a ? i.add(e) : null == s && (s = t + r), o.add(e);
    (p = i), (h = o), (m = null != s ? s : 1 / 0), (g = !0);
}
function v(e) {
    let { itemIds: t } = e;
    g || y();
    let n = Date.now(),
        r = !1;
    for (let e of t) h.has(e) || (_.itemImpressions.push([e, n]), (r = !0));
    return y(r), r;
}
function O() {
    (_.itemImpressions = []), y(!0);
}
function I() {
    return console.log('Item impressions:', _.itemImpressions), !1;
}
function S() {
    E = !E;
}
function T() {
    _.hidden = !_.hidden;
}
class N extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        _ = l({}, _, null != e ? e : {});
    }
    getState() {
        return _;
    }
    getImpressionCappedItemIds() {
        return y(), p;
    }
    getDebugFastImpressionCappingEnabled() {
        return E;
    }
    get hidden() {
        return _.hidden;
    }
    reset() {
        _ = f();
    }
}
s(N, 'displayName', 'ContentInventoryPersistedStore'), s(N, 'persistKey', 'ContentInventoryPersistedStore');
let A = new N(o.Z, {
    CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS: v,
    CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS: O,
    CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS: I,
    CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING: S,
    CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: T
});

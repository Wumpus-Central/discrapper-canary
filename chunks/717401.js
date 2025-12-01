n.d(t, {
    $q: () => h,
    Tl: () => _,
    YV: () => u,
    Yr: () => m,
    a5: () => p,
    cF: () => f,
    iE: () => s,
    id: () => d,
    tK: () => c,
    yX: () => l,
}),
    n(388685),
    n(361932),
    n(187205),
    n(583741);
var r = n(473749),
    i = n(223143),
    a = n(347896),
    o = n(474936);
function s() {
    let [e, t] = r.useState(),
        n = (0, a.Z)(),
        o = null == n ? void 0 : n.rewards,
        s = null == n ? void 0 : n.variants;
    null != s && (o = s.flatMap((e) => e.variants));
    let { purchases: l, hasPreviouslyFetched: c, fetchPurchasesError: u } = (0, i.c7)(),
        d = r.useRef(!1);
    return (
        r.useEffect(() => {
            c &&
                !d.current &&
                null != o &&
                (t(null == u ? o.filter((e) => null == l.get(e.skuId)) : []), (d.current = !0));
        }, [o, l, c, u]),
        null != e ? e : void 0
    );
}
function l() {
    var e;
    let t = (0, a.Z)();
    return null != (e = null == t ? void 0 : t.variants) ? e : void 0;
}
function c(e) {
    let { purchases: t } = (0, i.c7)();
    return null != e ? t.get(e) : null;
}
function u(e) {
    let t = new Map();
    return e.forEach((e) => t.set(e.skuId, e.assetId)), t;
}
function d(e, t, n) {
    let r = p(e),
        i = null != n && n.length >= 1;
    return t && r && i;
}
function f(e, t, n) {
    let r = p(e);
    return null != n && 1 === n.length && r && t;
}
function p(e) {
    return [o.Xh.PREMIUM_YEAR_TIER_2, o.Xh.PREMIUM_MONTH_TIER_2].includes(null == e ? void 0 : e.id);
}
function _(e, t) {
    if (null == e) return;
    let { reverse: n = !1, colorStops: r, defaultAngle: i = 78.98 } = null != t ? t : {},
        a = Array.isArray(e) ? e : e.gradient,
        o = Array.isArray(e) || null == e.angle ? i : e.angle;
    n && (o = (o + 180) % 360);
    let s = null != r ? a.map((e, t) => "".concat(e, " ").concat(r[t], "%")).join(", ") : a.join(", ");
    return { background: "linear-gradient(".concat(o, "deg, ").concat(s, ")") };
}
function m(e) {
    if (null != e)
        return {
            backgroundImage: "url(".concat(e, ")"),
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        };
}
function h(e, t, n) {
    if (null != e && null != t) {
        var r, i;
        let a = t.background,
            o = e.backgroundImage;
        return {
            backgroundImage: "".concat(o, ", ").concat(a),
            backgroundColor: "lightgray",
            backgroundSize: null != (r = null == n ? void 0 : n.backgroundSize) ? r : "auto 110%, auto",
            backgroundPosition: null != (i = null == n ? void 0 : n.backgroundPosition) ? i : "right 90% center, 0% 0%",
            backgroundRepeat: "no-repeat, no-repeat",
        };
    }
    return null != e ? e : null != t ? t : {};
}

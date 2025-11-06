n.d(t, {
    Tl: () => p,
    YV: () => u,
    Yr: () => h,
    a5: () => _,
    cF: () => f,
    iE: () => s,
    id: () => d,
    tK: () => c,
    yX: () => l,
}),
    n(388685),
    n(361932),
    n(187205);
var r = n(647438),
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
    let r = _(e),
        i = null != n && n.length >= 1;
    return t && r && i;
}
function f(e, t, n) {
    let r = _(e);
    return null != n && 1 === n.length && r && t;
}
function _(e) {
    return [o.Xh.PREMIUM_YEAR_TIER_2, o.Xh.PREMIUM_MONTH_TIER_2].includes(null == e ? void 0 : e.id);
}
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 78.98,
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null == e) return;
    let r = Array.isArray(e) ? e : e.gradient,
        i = Array.isArray(e) || null == e.angle ? t : e.angle;
    return n && (i = (i + 180) % 360), { background: "linear-gradient(".concat(i, "deg, ").concat(r.join(", "), ")") };
}
function h(e) {
    if (null != e)
        return {
            backgroundImage: "url(".concat(e, ")"),
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        };
}

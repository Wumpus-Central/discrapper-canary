n.d(t, { R: () => s });
var l = n(64700),
    r = n(885386),
    i = n(371794),
    a = n(218394);
function s(e, t) {
    let { shouldAnimate: n = !0 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        s = r.kt.useSetting(),
        o = (0, a.j)(),
        u = n && o && s;
    return l.useMemo(() => {
        if (e?.image_asset != null) return (0, i.YE)(e.application_id, e.image_asset, t, u ? void 0 : "webp");
    }, [t, e, u]);
}

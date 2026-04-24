n.d(t, { R: () => s });
var i = n(64700),
    l = n(253932),
    a = n(371794),
    r = n(218394);
function s(e, t) {
    let { shouldAnimate: n = !0 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        s = l.kt.useSetting(),
        o = (0, r.j)(),
        c = n && o && s;
    return i.useMemo(() => {
        if (e?.image_asset != null) return (0, a.YE)(e.application_id, e.image_asset, t, c ? void 0 : "webp");
    }, [t, e, c]);
}

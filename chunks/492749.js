n.d(t, { R: () => r });
var i = n(64700),
    l = n(253932),
    a = n(371794),
    s = n(545509);
function r(e, t) {
    let { shouldAnimate: n = !0 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = l.kt.useSetting(),
        o = (0, s.j)(),
        d = n && o && r;
    return i.useMemo(() => {
        if (e?.image_asset != null) return (0, a.YE)(e.application_id, e.image_asset, t, d ? void 0 : "webp");
    }, [t, e, d]);
}

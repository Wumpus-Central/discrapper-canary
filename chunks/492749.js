n.d(t, {
    R: () => o,
});
var r = n(64700),
    i = n(253932),
    a = n(371794),
    s = n(545509);

function o(e, t) {
    let { shouldAnimate: n = !0 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        o = i.kt.useSetting(),
        l = (0, s.j)(),
        c = n && l && o;
    return r.useMemo(() => {
        if ((null == e ? void 0 : e.image_asset) != null)
            return (0, a.YE)(e.application_id, e.image_asset, t, c ? void 0 : "webp");
    }, [t, e, c]);
}

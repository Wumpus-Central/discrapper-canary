n.d(t, { U: () => a });
var i = n(192379),
    l = n(695346),
    r = n(73346),
    s = n(834431);
function a(e, t) {
    let { shouldAnimate: n = !0 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = l.QK.useSetting(),
        o = (0, s.n)(),
        d = n && o && a;
    return i.useMemo(() => {
        if ((null == e ? void 0 : e.image_asset) != null) return (0, r._W)(e.application_id, e.image_asset, t, d ? void 0 : 'webp');
    }, [t, e, d]);
}

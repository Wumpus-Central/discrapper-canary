n.d(t, { U: () => a });
var r = n(192379),
    i = n(695346),
    l = n(73346),
    o = n(834431);
function a(e, t) {
    let { shouldAnimate: n = !0 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = i.QK.useSetting(),
        u = (0, o.n)(),
        s = n && u && a;
    return r.useMemo(() => {
        if ((null == e ? void 0 : e.image_asset) != null) return (0, l._W)(e.application_id, e.image_asset, t, s ? void 0 : 'webp');
    }, [t, e, s]);
}

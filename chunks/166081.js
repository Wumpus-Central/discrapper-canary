n.d(t, { U: () => s });
var i = n(192379),
    r = n(695346),
    l = n(73346),
    o = n(834431);
function s(e, t) {
    let { shouldAnimate: n = !0 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        s = r.QK.useSetting(),
        a = (0, o.n)(),
        u = n && a && s;
    return i.useMemo(() => {
        if ((null == e ? void 0 : e.image_asset) != null) return (0, l._W)(e.application_id, e.image_asset, t, u ? void 0 : 'webp');
    }, [t, e, u]);
}

n.d(t, { U: () => o });
var r = n(73800),
    i = n(695346),
    l = n(73346),
    a = n(834431);
function o(e, t) {
    let { shouldAnimate: n = !0 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        o = i.QK.useSetting(),
        s = (0, a.n)(),
        c = n && s && o;
    return r.useMemo(() => {
        if ((null == e ? void 0 : e.image_asset) != null) return (0, l._W)(e.application_id, e.image_asset, t, c ? void 0 : 'webp');
    }, [t, e, c]);
}

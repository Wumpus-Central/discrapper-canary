n.d(e, {
    U: function () {
        return u;
    }
});
var i = n(192379),
    r = n(695346),
    l = n(73346),
    o = n(834431);
function u(t, e) {
    let { shouldAnimate: n = !0 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        u = r.QK.useSetting(),
        a = (0, o.n)(),
        s = n && a && u;
    return i.useMemo(() => {
        if ((null == t ? void 0 : t.image_asset) != null) return (0, l._W)(t.application_id, t.image_asset, e, s ? void 0 : 'webp');
    }, [e, t, s]);
}

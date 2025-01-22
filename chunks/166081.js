e.d(n, {
    U: function () {
        return o;
    }
});
var i = e(192379),
    r = e(695346),
    l = e(73346),
    u = e(834431);
function o(t, n) {
    let { shouldAnimate: e = !0 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        o = r.QK.useSetting(),
        a = (0, u.n)(),
        s = e && a && o;
    return i.useMemo(() => {
        if ((null == t ? void 0 : t.image_asset) != null) return (0, l._W)(t.application_id, t.image_asset, n, s ? void 0 : 'webp');
    }, [n, t, s]);
}

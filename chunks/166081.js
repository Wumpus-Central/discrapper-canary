n.d(t, { U: () => s });
var r = n(473749),
    i = n(695346),
    a = n(73346),
    o = n(834431);
function s(e, t) {
    let { shouldAnimate: n = !0 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        s = i.QK.useSetting(),
        l = (0, o.n)(),
        c = n && l && s;
    return r.useMemo(() => {
        if ((null == e ? void 0 : e.image_asset) != null)
            return (0, a._W)(e.application_id, e.image_asset, t, c ? void 0 : "webp");
    }, [t, e, c]);
}

r.d(t, { A: () => o }), r(896048);
var i = r(64700),
    n = r(933725),
    a = r(849841);
function o(e, t) {
    let [r, o] = i.useState(!1),
        s = i.useCallback(async () => {
            null != e && (o(!0), await (0, n.m)(e, !0), o(!1)), null == t || t();
        }, [e, t]),
        l = (0, a.A)(e);
    return {
        isAdopting: r,
        onAdoptTag: s,
        onEditProfile: i.useCallback(() => {
            null == t || t(), l();
        }, [l, t]),
    };
}

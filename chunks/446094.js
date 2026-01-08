r.d(t, { Z: () => o }), r(388685);
var n = r(473749),
    i = r(321114),
    a = r(226746);
function o(e, t) {
    let [r, o] = n.useState(!1),
        l = n.useCallback(async () => {
            null != e && (o(!0), await (0, i.c)(e, !0), o(!1)), null == t || t();
        }, [e, t]),
        s = (0, a.Z)(e);
    return {
        isAdopting: r,
        onAdoptTag: l,
        onEditProfile: n.useCallback(() => {
            null == t || t(), s();
        }, [s, t]),
    };
}

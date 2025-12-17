n.d(t, { Z: () => o }), n(388685);
var r = n(473749),
    i = n(321114),
    a = n(226746);
function o(e, t) {
    let [n, o] = r.useState(!1),
        l = r.useCallback(async () => {
            o(!0), await (0, i.c)(e, !0), o(!1), null == t || t();
        }, [e, t]),
        c = (0, a.Z)(e);
    return {
        isAdopting: n,
        onAdoptTag: l,
        onEditProfile: r.useCallback(() => {
            null == t || t(), c();
        }, [c, t]),
    };
}

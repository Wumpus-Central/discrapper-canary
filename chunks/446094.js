n.d(t, { Z: () => o }), n(388685);
var r = n(647438),
    a = n(321114),
    i = n(226746);
function o(e, t) {
    let [n, o] = r.useState(!1),
        l = r.useCallback(async () => {
            o(!0), await (0, a.c)(e, !0), o(!1), null == t || t();
        }, [e, t]),
        s = (0, i.Z)(e);
    return {
        isAdopting: n,
        onAdoptTag: l,
        onEditProfile: r.useCallback(() => {
            null == t || t(), s();
        }, [s, t]),
    };
}

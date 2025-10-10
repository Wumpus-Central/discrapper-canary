n.d(t, { Z: () => a }), n(388685);
var r = n(647438),
    i = n(321114),
    l = n(226746);
function a(e, t) {
    let [n, a] = r.useState(!1),
        o = r.useCallback(async () => {
            a(!0), await (0, i.c)(e, !0), a(!1), null == t || t();
        }, [e, t]),
        s = (0, l.Z)(e);
    return {
        isAdopting: n,
        onAdoptTag: o,
        onEditProfile: r.useCallback(() => {
            null == t || t(), s();
        }, [s, t]),
    };
}

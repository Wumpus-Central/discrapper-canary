n.d(t, { Z: () => a }), n(388685);
var i = n(647438),
    r = n(321114),
    l = n(226746);
function a(e, t) {
    let [n, a] = i.useState(!1),
        o = i.useCallback(async () => {
            a(!0), await (0, r.c)(e, !0), a(!1), null == t || t();
        }, [e, t]),
        s = (0, l.Z)(e);
    return {
        isAdopting: n,
        onAdoptTag: o,
        onEditProfile: i.useCallback(() => {
            null == t || t(), s();
        }, [s, t]),
    };
}

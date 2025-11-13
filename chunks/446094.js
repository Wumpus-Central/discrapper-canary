n.d(t, { Z: () => l }), n(388685);
var r = n(647438),
    a = n(321114),
    i = n(226746);
function l(e, t) {
    let [n, l] = r.useState(!1),
        o = r.useCallback(async () => {
            l(!0), await (0, a.c)(e, !0), l(!1), null == t || t();
        }, [e, t]),
        s = (0, i.Z)(e);
    return {
        isAdopting: n,
        onAdoptTag: o,
        onEditProfile: r.useCallback(() => {
            null == t || t(), s();
        }, [s, t]),
    };
}

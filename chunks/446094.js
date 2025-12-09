n.d(t, { Z: () => l }), n(388685);
var r = n(473749),
    i = n(321114),
    a = n(226746);
function l(e, t) {
    let [n, l] = r.useState(!1),
        o = r.useCallback(async () => {
            l(!0), await (0, i.c)(e, !0), l(!1), null == t || t();
        }, [e, t]),
        s = (0, a.Z)(e);
    return {
        isAdopting: n,
        onAdoptTag: o,
        onEditProfile: r.useCallback(() => {
            null == t || t(), s();
        }, [s, t]),
    };
}

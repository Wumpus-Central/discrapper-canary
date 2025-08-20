n.d(t, { Z: () => o }), n(388685);
var r = n(647438),
    i = n(321114),
    a = n(226746);
function o(e, t) {
    let [n, o] = r.useState(!1),
        s = r.useCallback(async () => {
            o(!0), await (0, i.c)(e, !0), o(!1), null == t || t();
        }, [e, t]),
        l = (0, a.Z)(e);
    return {
        isAdopting: n,
        onAdoptTag: s,
        onEditProfile: r.useCallback(() => {
            null == t || t(), l();
        }, [l, t]),
    };
}

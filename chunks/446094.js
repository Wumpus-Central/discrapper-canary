n.d(t, { Z: () => o }), n(388685);
var r = n(647438),
    i = n(321114),
    l = n(226746);
function o(e, t) {
    let [n, o] = r.useState(!1),
        a = r.useCallback(async () => {
            o(!0), await (0, i.c)(e, !0), o(!1), null == t || t();
        }, [e, t]),
        s = (0, l.Z)(e);
    return {
        isAdopting: n,
        onAdoptTag: a,
        onEditProfile: r.useCallback(() => {
            null == t || t(), s();
        }, [s, t]),
    };
}

n.d(t, { Z: () => a }), n(388685);
var r = n(73800),
    i = n(300284),
    s = n(321114),
    o = n(526761);
function a(e, t) {
    let [n, a] = r.useState(!1),
        l = r.useCallback(async () => {
            a(!0), await (0, s.c)(e, !0), a(!1), null == t || t();
        }, [e, t]),
        c = (0, i.Z)({ scrollPosition: o.Y_.GUILD_TAG });
    return {
        isAdopting: n,
        onAdoptTag: l,
        onEditProfile: r.useCallback(() => {
            null == t || t(), c();
        }, [c, t])
    };
}

n.d(t, { Z: () => a }), n(388685);
var i = n(73800),
    r = n(300284),
    s = n(321114),
    l = n(526761);
function a(e, t) {
    let [n, a] = i.useState(!1),
        o = i.useCallback(async () => {
            a(!0), await (0, s.c)(e, !0), a(!1), null == t || t();
        }, [e, t]),
        c = (0, r.Z)({ scrollPosition: l.Y_.GUILD_TAG });
    return {
        isAdopting: n,
        onAdoptTag: o,
        onEditProfile: i.useCallback(() => {
            null == t || t(), c();
        }, [c, t])
    };
}

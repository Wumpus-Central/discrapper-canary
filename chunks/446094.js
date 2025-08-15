n.d(t, { Z: () => o }), n(388685);
var i = n(647438),
    r = n(300284),
    s = n(321114),
    l = n(526761);
function o(e, t) {
    let [n, o] = i.useState(!1),
        a = i.useCallback(async () => {
            o(!0), await (0, s.c)(e, !0), o(!1), null == t || t();
        }, [e, t]),
        u = (0, r.Z)({ scrollPosition: l.Y_.GUILD_TAG });
    return {
        isAdopting: n,
        onAdoptTag: a,
        onEditProfile: i.useCallback(() => {
            null == t || t(), u();
        }, [u, t]),
    };
}

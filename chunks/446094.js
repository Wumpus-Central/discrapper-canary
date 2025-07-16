(n.d(t, { Z: () => o }), n(388685));
var r = n(73800),
    i = n(300284),
    s = n(321114),
    l = n(526761);
function o(e, t) {
    let [n, o] = r.useState(!1),
        a = r.useCallback(async () => {
            (o(!0), await (0, s.c)(e, !0), o(!1), null == t || t());
        }, [e, t]),
        c = (0, i.Z)({ scrollPosition: l.Y_.GUILD_TAG });
    return {
        isAdopting: n,
        onAdoptTag: a,
        onEditProfile: r.useCallback(() => {
            (null == t || t(), c());
        }, [c, t])
    };
}

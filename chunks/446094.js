(n.d(t, { Z: () => o }), n(388685));
var r = n(73800),
    i = n(300284),
    l = n(321114),
    s = n(526761);
function o(e, t) {
    let [n, o] = r.useState(!1),
        a = r.useCallback(async () => {
            (o(!0), await (0, l.c)(e, !0), o(!1), null == t || t());
        }, [e, t]),
        c = (0, i.Z)({ scrollPosition: s.Y_.GUILD_TAG });
    return {
        isAdopting: n,
        onAdoptTag: a,
        onEditProfile: r.useCallback(() => {
            (null == t || t(), c());
        }, [c, t])
    };
}

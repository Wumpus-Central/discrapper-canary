n.d(t, { Z: () => l }), n(388685);
var r = n(73800),
    i = n(300284),
    s = n(321114),
    o = n(526761);
function l(e, t) {
    let [n, l] = r.useState(!1),
        a = r.useCallback(async () => {
            l(!0), await (0, s.c)(e, !0), l(!1), null == t || t();
        }, [e, t]),
        c = (0, i.Z)({ scrollPosition: o.Y_.GUILD_TAG });
    return {
        isAdopting: n,
        onAdoptTag: a,
        onEditProfile: r.useCallback(() => {
            null == t || t(), c();
        }, [c, t])
    };
}

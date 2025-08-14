n.d(t, { Z: () => s }), n(388685);
var r = n(73800),
    i = n(300284),
    l = n(321114),
    o = n(526761);
function s(e, t) {
    let [n, s] = r.useState(!1),
        c = r.useCallback(async () => {
            s(!0), await (0, l.c)(e, !0), s(!1), null == t || t();
        }, [e, t]),
        a = (0, i.Z)({ scrollPosition: o.Y_.GUILD_TAG });
    return {
        isAdopting: n,
        onAdoptTag: c,
        onEditProfile: r.useCallback(() => {
            null == t || t(), a();
        }, [a, t]),
    };
}

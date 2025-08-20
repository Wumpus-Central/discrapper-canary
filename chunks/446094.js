n.d(t, { Z: () => s }), n(388685);
var r = n(647438),
    i = n(300284),
    a = n(321114),
    o = n(526761);
function s(e, t) {
    let [n, s] = r.useState(!1),
        l = r.useCallback(async () => {
            s(!0), await (0, a.c)(e, !0), s(!1), null == t || t();
        }, [e, t]),
        c = (0, i.Z)({ scrollPosition: o.Y_.GUILD_TAG });
    return {
        isAdopting: n,
        onAdoptTag: l,
        onEditProfile: r.useCallback(() => {
            null == t || t(), c();
        }, [c, t]),
    };
}

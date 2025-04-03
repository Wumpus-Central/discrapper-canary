n.d(t, {
    A2: () => p,
    S3: () => d
});
var r = n(442837),
    i = n(704215),
    o = n(645041),
    l = n(271383),
    s = n(430824),
    a = n(594174),
    c = n(731722),
    u = n(981631);
function d(e) {
    return !(function (e) {
        let t = (0, o.FT)(i.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : u.lds);
        return (
            (0, r.e7)(
                [s.Z, a.default, l.ZP],
                () => {
                    var t;
                    if (null === e) return !1;
                    let n = s.Z.getGuild(e);
                    if (void 0 === n || !(0, c.u)(n) || null == n.profile) return !1;
                    let r = a.default.getCurrentUser();
                    if (void 0 === r || (null == (t = r.primaryGuild) ? void 0 : t.identityGuildId) === n.id) return !1;
                    let i = l.ZP.getMember(e, r.id);
                    return null != i && !i.isPending;
                },
                [e]
            ) && !t
        );
    })(e)
        ? null
        : 'available';
}
function p(e) {
    return null !== d(e);
}

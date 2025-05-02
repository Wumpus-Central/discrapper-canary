n.d(t, {
    A2: () => f,
    S3: () => p
});
var r = n(442837),
    i = n(704215),
    l = n(645041),
    o = n(271383),
    s = n(430824),
    a = n(594174),
    c = n(358085),
    u = n(731722),
    d = n(864133),
    h = n(981631);
function p(e) {
    let t = (function (e) {
        let t = (0, l.FT)(i.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : h.lds);
        return (
            (0, r.e7)(
                [s.Z, a.default, o.ZP],
                () => {
                    var t, n;
                    if (null === e) return !1;
                    let r = s.Z.getGuild(e);
                    if (void 0 === r || !(0, u.up)(r) || null == r.profile || null === r.profile.tag) return !1;
                    let i = a.default.getCurrentUser();
                    if (void 0 === i || ((null == (t = i.primaryGuild) ? void 0 : t.identityGuildId) === r.id && (null == (n = i.primaryGuild) ? void 0 : n.tag) === r.profile.tag)) return !1;
                    let l = o.ZP.getMember(e, i.id);
                    return null != l && !l.isPending;
                },
                [e]
            ) && !t
        );
    })(e);
    return !(function (e) {
        let t = (0, l.FT)(i.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : h.lds),
            n = (0, r.e7)([d.Z], () => (null === e ? null : d.Z.getGuildLastSeenInfo(e))),
            o = (0, r.e7)([a.default], () => {
                var e;
                return null == (e = a.default.getCurrentUser()) ? void 0 : e.primaryGuild;
            }),
            u = (0, r.e7)([s.Z], () => {
                var t, n;
                return null == (n = s.Z.getGuild(e)) || null == (t = n.profile) ? void 0 : t.tag;
            });
        if (null == u || ((null == o ? void 0 : o.identityGuildId) === e && (null == o ? void 0 : o.tag) === u)) return !1;
        let p = ((null == o ? void 0 : o.identityGuildId) === e && (null == o ? void 0 : o.tag) === null) || (0, c.isDesktop)(),
            f = null !== n && (null == n ? void 0 : n.tag) === u;
        return p && !f && t;
    })(e)
        ? t
            ? 'available'
            : null
        : 'changed';
}
function f(e) {
    return null !== p(e);
}

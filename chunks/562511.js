n.d(t, {
    A2: () => f,
    S3: () => p
});
var r = n(873546),
    i = n(442837),
    l = n(704215),
    o = n(645041),
    s = n(271383),
    a = n(430824),
    c = n(594174),
    u = n(731722),
    d = n(864133),
    h = n(981631);
function p(e) {
    let t = (function (e) {
        let t = (0, o.FT)(l.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : h.lds);
        return (
            (0, i.e7)(
                [a.Z, c.default, s.ZP],
                () => {
                    var t;
                    if (null === e) return !1;
                    let n = a.Z.getGuild(e);
                    if (void 0 === n || !(0, u.up)(n) || null == n.profile || null === n.profile.tag) return !1;
                    let r = c.default.getCurrentUser();
                    if (void 0 === r || (null == (t = r.primaryGuild) ? void 0 : t.identityGuildId) === n.id) return !1;
                    let i = s.ZP.getMember(e, r.id);
                    return null != i && !i.isPending;
                },
                [e]
            ) && !t
        );
    })(e);
    return !(function (e) {
        let t = (0, o.FT)(l.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : h.lds),
            n = (0, i.e7)([d.Z], () => (null === e ? null : d.Z.getGuildLastSeenInfo(e))),
            s = (0, i.e7)([c.default], () => {
                var e;
                return null == (e = c.default.getCurrentUser()) ? void 0 : e.primaryGuild;
            }),
            u = (0, i.e7)([a.Z], () => {
                var t, n;
                return null == (n = a.Z.getGuild(e)) || null == (t = n.profile) ? void 0 : t.tag;
            });
        if (null == u || ((null == s ? void 0 : s.identityGuildId) === e && (null == s ? void 0 : s.tag) === u)) return !1;
        let p = ((null == s ? void 0 : s.identityGuildId) === e && (null == s ? void 0 : s.tag) === null) || !r.tq,
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

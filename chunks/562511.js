n.d(t, {
    A2: () => p,
    S3: () => h
});
var r = n(442837),
    i = n(704215),
    l = n(645041),
    o = n(271383),
    s = n(430824),
    a = n(594174),
    c = n(731722),
    u = n(864133),
    d = n(981631);
function h(e) {
    let t = (function (e) {
        let t = (0, l.FT)(i.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : d.lds);
        return (
            (0, r.e7)(
                [s.Z, a.default, o.ZP],
                () => {
                    var t;
                    if (null === e) return !1;
                    let n = s.Z.getGuild(e);
                    if (void 0 === n || !(0, c.up)(n) || null == n.profile || null === n.profile.tag) return !1;
                    let r = a.default.getCurrentUser();
                    if (void 0 === r || (null == (t = r.primaryGuild) ? void 0 : t.identityGuildId) === n.id) return !1;
                    let i = o.ZP.getMember(e, r.id);
                    return null != i && !i.isPending;
                },
                [e]
            ) && !t
        );
    })(e);
    return !(function (e) {
        let t = (0, r.e7)([u.Z], () => (null === e ? null : u.Z.getGuildLastSeenInfo(e))),
            n = (0, r.e7)([a.default], () => {
                var e;
                return null == (e = a.default.getCurrentUser()) ? void 0 : e.primaryGuild;
            }),
            i = (0, r.e7)([s.Z], () => {
                var t, n;
                return null == (n = s.Z.getGuild(e)) || null == (t = n.profile) ? void 0 : t.tag;
            });
        if (null == i) return !1;
        let l = (null == n ? void 0 : n.identityGuildId) === e && (null == n ? void 0 : n.tag) === null,
            o = null !== t && (null == t ? void 0 : t.tag) === i;
        return l && !o;
    })(e)
        ? t
            ? 'available'
            : null
        : 'changed';
}
function p(e) {
    return null !== h(e);
}

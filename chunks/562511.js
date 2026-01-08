n.d(t, {
    X: () => p,
    Z: () => h,
});
var a = n(442837),
    r = n(704215),
    i = n(243778),
    l = n(645041),
    s = n(271383),
    o = n(430824),
    c = n(594174),
    d = n(731722),
    u = n(864133),
    m = n(981631);
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { shouldShow: n = !0 } = t,
        u = (0, l.FT)(r.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : m.lds),
        p = (0, a.e7)([o.Z, c.default, s.ZP], () => {
            var t, n;
            if (null === e) return !1;
            let a = o.Z.getGuild(e);
            if (void 0 === a || !(0, d.up)(a) || null == a.profile || null === a.profile.tag) return !1;
            let r = c.default.getCurrentUser();
            if (
                void 0 === r ||
                ((null == (t = r.primaryGuild) ? void 0 : t.identityGuildId) === a.id &&
                    (null == (n = r.primaryGuild) ? void 0 : n.tag) === a.profile.tag)
            )
                return !1;
            let i = s.ZP.getMember(e, r.id);
            return null != i && !i.isPending;
        }, [e]);
    return (0, i.ZT)(p && n && !u ? [r.z.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], null != e ? e : m.kod);
}
function h(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { shouldShow: l = !0 } = n,
        s = null == e ? void 0 : e.primaryGuild,
        c = null != (t = null == s ? void 0 : s.identityGuildId) ? t : null,
        d = (0, a.e7)([u.Z], () => (null === c ? null : u.Z.getGuildLastSeenInfo(c))),
        m = (0, a.e7)([o.Z], () => {
            var e, t;
            return null == (t = o.Z.getGuild(c)) || null == (e = t.profile) ? void 0 : e.tag;
        }),
        p = null != m && (null == s ? void 0 : s.identityGuildId) === c && (null == s ? void 0 : s.tag) === null,
        h = null != c && (null == d ? void 0 : d.tag) === m,
        f = null !== c && p && !h;
    return (0, i.bf)(f && l ? r.z.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 86400000 });
}

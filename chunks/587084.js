n.d(t, { L: () => m, r: () => h });
var i = n(311907),
    s = n(554146),
    l = n(932001),
    a = n(45780),
    r = n(696451),
    o = n(71393),
    d = n(287809),
    c = n(685073),
    u = n(334165),
    p = n(652215);
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { shouldShow: n = !0 } = t,
        u = (0, a.G$)(s.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? p.dJq),
        h = (0, i.bG)([o.A, d.default, r.Ay], () => {
            if (null === e) return !1;
            let t = o.A.getGuild(e);
            if (void 0 === t || !(0, c.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
            let n = d.default.getCurrentUser();
            if (void 0 === n || (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag))
                return !1;
            let i = r.Ay.getMember(e, n.id);
            return null != i && !i.isPending;
        }, [e]);
    return (0, l.ww)(h && n && !u ? [s.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? p.eGj);
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { shouldShow: n = !0 } = t,
        a = e?.primaryGuild,
        r = a?.identityGuildId ?? null,
        d = (0, i.bG)([u.A], () => (null === r ? null : u.A.getGuildLastSeenInfo(r))),
        c = (0, i.bG)([o.A], () => o.A.getGuild(r)?.profile?.tag),
        p = null != c && a?.identityGuildId === r && a?.tag === null,
        h = null != r && d?.tag === c,
        m = null !== r && p && !h;
    return (0, l.Wl)(m && n ? s.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
}

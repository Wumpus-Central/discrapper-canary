n.d(t, {
    L: () => h,
    r: () => p,
});
var a = n(311907),
    l = n(554146),
    i = n(379848),
    r = n(45780),
    s = n(696451),
    o = n(71393),
    c = n(287809),
    d = n(685073),
    u = n(334165),
    m = n(652215);

function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { shouldShow: n = !0 } = t,
        u = (0, r.G$)(l.V.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : m.dJq),
        p = (0, a.bG)([o.A, c.default, s.Ay], () => {
            var t, n;
            if (null === e) return !1;
            let a = o.A.getGuild(e);
            if (void 0 === a || !(0, d.Rg)(a) || null == a.profile || null === a.profile.tag) return !1;
            let l = c.default.getCurrentUser();
            if (
                void 0 === l ||
                ((null == (t = l.primaryGuild) ? void 0 : t.identityGuildId) === a.id &&
                    (null == (n = l.primaryGuild) ? void 0 : n.tag) === a.profile.tag)
            )
                return !1;
            let i = s.Ay.getMember(e, l.id);
            return null != i && !i.isPending;
        }, [e]);
    return (0, i.ww)(p && n && !u ? [l.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], null != e ? e : m.eGj);
}

function h(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { shouldShow: r = !0 } = n,
        s = null == e ? void 0 : e.primaryGuild,
        c = null != (t = null == s ? void 0 : s.identityGuildId) ? t : null,
        d = (0, a.bG)([u.A], () => (null === c ? null : u.A.getGuildLastSeenInfo(c))),
        m = (0, a.bG)([o.A], () => {
            var e, t;
            return null == (t = o.A.getGuild(c)) || null == (e = t.profile) ? void 0 : e.tag;
        }),
        p = null != m && (null == s ? void 0 : s.identityGuildId) === c && (null == s ? void 0 : s.tag) === null,
        h = null != c && (null == d ? void 0 : d.tag) === m,
        f = null !== c && p && !h;
    return (0, i.Wl)(f && r ? l.M.GUILD_TAG_UPDATED_COACHMARK : null, {
        cooldownDurationMs: 864e5,
    });
}

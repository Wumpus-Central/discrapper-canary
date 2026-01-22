n.d(t, {
    K: () => m,
    d: () => h,
});
var r = n(417597),
    i = n(961973),
    a = n(164956),
    s = n(734057),
    o = n(71393),
    l = n(701785),
    c = n(707167),
    u = n(978165),
    d = n(652215),
    f = n(746080);
function p(e) {
    var t;
    let n = e.id,
        r = (null != (t = l.h.getNewMemberActions(n)) ? t : []).length > 0,
        i = l.h.getEnabled(n);
    return r && e.features.has(d.GuildFeatures.COMMUNITY) && !(e.features.has(d.GuildFeatures.GUILD_ONBOARDING) && !i);
}
function _(e, t) {
    let n = t.getMutableGuildChannelsForGuild(e);
    for (let e in n) if (n[e].hasFlag(f.lx.IS_GUILD_RESOURCE_CHANNEL)) return !0;
    return !1;
}
function h(e) {
    let t = (0, u.A)(e);
    return (0, r.bG)([s.A, o.A, a.A], () => {
        if (__OVERLAY__ || e === d.ME || e === d.YYv) return !1;
        let n = o.A.getGuild(e);
        return (
            !!(null == n ? void 0 : n.features.has(d.GuildFeatures.COMMUNITY)) &&
            (a.A.isFullServerPreview(e) ? p(n) : (0, i.rs)(e) ? t || _(e, s.A) : !!(0, c.A)(n) && (t || _(e, s.A)))
        );
    }, [e, t]);
}
function m(e) {
    let t = o.A.getGuild(e),
        n = a.A.isFullServerPreview(e);
    if (null == t || __OVERLAY__ || e === d.ME || e === d.YYv) return !1;
    if (n) return p(t);
    let r =
        (0, i.rs)(e) &&
        t.features.has(d.GuildFeatures.GUILD_ONBOARDING) &&
        t.features.has(d.GuildFeatures.GUILD_SERVER_GUIDE);
    return (
        ((t.features.has(d.GuildFeatures.GUILD_ONBOARDING) && t.features.has(d.GuildFeatures.GUILD_SERVER_GUIDE)) ||
            r) &&
        t.features.has(d.GuildFeatures.COMMUNITY)
    );
}

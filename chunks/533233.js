var i = t(855986),
    l = t(628983),
    s = t(71393),
    a = t(576705),
    r = t(113783),
    o = t(597886),
    c = t(233993),
    d = t(96566),
    u = t(652215);
t.d(
    n,
    {},
    {
        A: function (e) {
            let n = (0, i.bG)([l.A], () => l.A.getStageVideoLimitBoostUpsellDismissed(e.id), [e.id]),
                t = (0, r.uy)(e.id),
                A = (0, r.zy)(e.id, o.ip.AUDIENCE),
                h = (0, d.qT)(e.id),
                m = (0, i.bG)([s.A], () => s.A.getGuild(e.guild_id), [e.guild_id]),
                g = (0, i.bG)([a.A], () => a.A.can(c.QY, e), [e]),
                x = m?.maxStageVideoChannelUsers ?? 0,
                C = null != m && m.features.has(u.GuildFeatures.COMMUNITY);
            return h && !n && g && !(!C && x > 300) && t + A >= x;
        },
    },
);

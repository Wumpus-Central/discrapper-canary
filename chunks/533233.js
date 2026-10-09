t.d(n, { A: () => A });
var i = t(17928),
    l = t(198052),
    s = t(71393),
    a = t(576705),
    r = t(113783),
    o = t(518769),
    c = t(233993),
    u = t(96566),
    d = t(652215);
function A(e) {
    let n = (0, i.bG)([l.A], () => l.A.getStageVideoLimitBoostUpsellDismissed(e.id), [e.id]),
        t = (0, r.uy)(e.id),
        A = (0, r.zy)(e.id, o.ip.AUDIENCE),
        h = (0, u.qT)(e.id),
        m = (0, i.bG)([s.A], () => s.A.getGuild(e.guild_id), [e.guild_id]),
        g = (0, i.bG)([a.A], () => a.A.can(c.QY, e), [e]),
        x = m?.maxStageVideoChannelUsers ?? 0,
        C = !(null != m && m.features.has(d.GuildFeatures.COMMUNITY)) && x > d.uaN;
    return h && !n && g && !C && t + A >= x;
}

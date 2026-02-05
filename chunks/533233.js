n.d(t, { A: () => h });
var i = n(311907),
    l = n(313961),
    s = n(71393),
    a = n(576705),
    r = n(113783),
    o = n(69407),
    d = n(233993),
    c = n(96566),
    u = n(652215);
function h(e) {
    let t = (0, i.bG)([l.A], () => l.A.getStageVideoLimitBoostUpsellDismissed(e.id), [e.id]),
        n = (0, r.uy)(e.id),
        h = (0, r.zy)(e.id, o.ip.AUDIENCE),
        A = (0, c.qT)(e.id),
        g = (0, i.bG)([s.A], () => s.A.getGuild(e.guild_id), [e.guild_id]),
        m = (0, i.bG)([a.A], () => a.A.can(d.QY, e), [e]),
        p = g?.maxStageVideoChannelUsers ?? 0,
        _ = !(null != g && g.features.has(u.GuildFeatures.COMMUNITY)) && p > u.uaN;
    return A && !t && m && !_ && n + h >= p;
}

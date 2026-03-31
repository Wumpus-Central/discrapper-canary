n.d(t, { A: () => h });
var i = n(311907),
    l = n(313961),
    s = n(71393),
    a = n(576705),
    r = n(113783),
    o = n(69407),
    c = n(233993),
    d = n(96566),
    u = n(652215);
function h(e) {
    let t = (0, i.bG)([l.A], () => l.A.getStageVideoLimitBoostUpsellDismissed(e.id), [e.id]),
        n = (0, r.uy)(e.id),
        h = (0, r.zy)(e.id, o.ip.AUDIENCE),
        A = (0, d.qT)(e.id),
        _ = (0, i.bG)([s.A], () => s.A.getGuild(e.guild_id), [e.guild_id]),
        m = (0, i.bG)([a.A], () => a.A.can(c.QY, e), [e]),
        g = _?.maxStageVideoChannelUsers ?? 0,
        p = !(null != _ && _.features.has(u.GuildFeatures.COMMUNITY)) && g > u.uaN;
    return A && !t && m && !p && n + h >= g;
}

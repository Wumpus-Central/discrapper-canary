n.d(t, { A: () => _ });
var i = n(311907),
    l = n(313961),
    a = n(71393),
    s = n(576705),
    r = n(113783),
    o = n(69407),
    c = n(233993),
    d = n(96566),
    u = n(652215);
function _(e) {
    let t = (0, i.bG)([l.A], () => l.A.getStageVideoLimitBoostUpsellDismissed(e.id), [e.id]),
        n = (0, r.uy)(e.id),
        _ = (0, r.zy)(e.id, o.ip.AUDIENCE),
        A = (0, d.qT)(e.id),
        p = (0, i.bG)([a.A], () => a.A.getGuild(e.guild_id), [e.guild_id]),
        h = (0, i.bG)([s.A], () => s.A.can(c.QY, e), [e]),
        g = p?.maxStageVideoChannelUsers ?? 0,
        m = !(null != p && p.features.has(u.GuildFeatures.COMMUNITY)) && g > u.uaN;
    return A && !t && h && !m && n + _ >= g;
}

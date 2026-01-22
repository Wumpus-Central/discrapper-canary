n.d(t, {
    A: () => f,
});
var r = n(311907),
    l = n(313961),
    i = n(71393),
    a = n(576705),
    s = n(113783),
    o = n(69407),
    c = n(233993),
    u = n(96566),
    d = n(652215);

function f(e) {
    var t;
    let n = (0, r.bG)([l.A], () => l.A.getStageVideoLimitBoostUpsellDismissed(e.id), [e.id]),
        f = (0, s.uy)(e.id),
        p = (0, s.zy)(e.id, o.ip.AUDIENCE),
        h = (0, u.qT)(e.id),
        b = (0, r.bG)([i.A], () => i.A.getGuild(e.guild_id), [e.guild_id]),
        g = (0, r.bG)([a.A], () => a.A.can(c.QY, e), [e]),
        m = null != (t = null == b ? void 0 : b.maxStageVideoChannelUsers) ? t : 0,
        A = !(null != b && b.features.has(d.GuildFeatures.COMMUNITY)) && m > d.uaN;
    return h && !n && g && !A && f + p >= m;
}

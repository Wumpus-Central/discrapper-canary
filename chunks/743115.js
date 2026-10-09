t.d(n, { l: () => d });
var i = t(477900),
    l = t(17928),
    s = t(267102),
    a = t(71393),
    r = t(576705),
    o = t(446600),
    c = t(696842),
    u = t(652215);
function d(e) {
    let { channel: n } = e,
        t = (0, s.Us)(),
        d = (0, l.bG)([r.A], () => r.A.can(u.xBc.CREATE_INSTANT_INVITE, n)),
        A = (0, l.bG)([a.A], () => a.A.getGuild(n.guild_id)),
        h = (0, l.bG)([o.A], () => o.A.getStageInstanceByChannel(n.id)),
        m = d || h?.invite_code != null;
    return null != A && m
        ? (0, i.jsx)(c.A, { size: "md", channel: n, appContext: t, analyticsLocation: u.liQ.GUILD_CHANNEL })
        : null;
}

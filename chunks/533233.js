"use strict";
n.d(t, { A: () => h });
var i = n(311907),
    s = n(313961),
    l = n(71393),
    r = n(576705),
    a = n(113783),
    o = n(69407),
    c = n(233993),
    d = n(96566),
    u = n(652215);
function h(e) {
    let t = (0, i.bG)([s.A], () => s.A.getStageVideoLimitBoostUpsellDismissed(e.id), [e.id]),
        n = (0, a.uy)(e.id),
        h = (0, a.zy)(e.id, o.ip.AUDIENCE),
        A = (0, d.qT)(e.id),
        p = (0, i.bG)([l.A], () => l.A.getGuild(e.guild_id), [e.guild_id]),
        g = (0, i.bG)([r.A], () => r.A.can(c.QY, e), [e]),
        m = p?.maxStageVideoChannelUsers ?? 0,
        _ = !(null != p && p.features.has(u.GuildFeatures.COMMUNITY)) && m > u.uaN;
    return A && !t && g && !_ && n + h >= m;
}

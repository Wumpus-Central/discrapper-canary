t.d(n, { Ay: () => f, K7: () => h });
var i = t(311907),
    l = t(855687),
    d = t(446600),
    r = t(734057),
    s = t(808728),
    a = t(71393),
    c = t(576705),
    o = t(488926),
    u = t(698441),
    _ = t(988794),
    g = t(652215);
function h(e) {
    let [n, t, i, h] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.Ay, r.A, a.A, d.A];
    if ((0, u.AZ)(e)) return !1;
    let { guild_id: f, channel_id: v } = e,
        x = e.entity_type === _.Ps.EXTERNAL ? n.getDefaultChannel(e.guild_id) : t.getChannel(v),
        m = i.getGuild(f),
        p = h.getStageInstanceByChannel(v);
    return (
        !!(0, l.K)(c.A, m, x, p) &&
        null != x &&
        (function (e) {
            let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.A],
                { entityType: t, channelId: i } =
                    "entity_type" in e ? { entityType: e.entity_type, channelId: e.channel_id } : e;
            if (t === _.Ps.EXTERNAL) return !0;
            let l = n.getChannel(i);
            return null != l && o.MJ(g.xBc.VIEW_CHANNEL, l);
        })(e, [t])
    );
}
function f(e) {
    return (0, i.bG)([s.Ay, r.A, a.A, d.A], () => h(e, [s.Ay, r.A, a.A, d.A]), [e]);
}

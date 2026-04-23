n.d(t, { Ay: () => f, K7: () => h });
var l = n(17928),
    i = n(855687),
    r = n(446600),
    a = n(734057),
    s = n(808728),
    d = n(71393),
    c = n(576705),
    o = n(488926),
    u = n(698441),
    _ = n(988794),
    g = n(652215);
function h(e) {
    let [t, n, l, h] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.Ay, a.A, d.A, r.A];
    if ((0, u.AZ)(e)) return !1;
    let { guild_id: f, channel_id: x } = e,
        v = e.entity_type === _.Ps.EXTERNAL ? t.getDefaultChannel(e.guild_id) : n.getChannel(x),
        m = l.getGuild(f),
        p = h.getStageInstanceByChannel(x);
    return (
        !!(0, i.K)(c.A, m, v, p) &&
        null != v &&
        (function (e) {
            let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.A],
                { entityType: n, channelId: l } =
                    "entity_type" in e ? { entityType: e.entity_type, channelId: e.channel_id } : e;
            if (n === _.Ps.EXTERNAL) return !0;
            let i = t.getChannel(l);
            return null != i && o.MJ(g.xBc.VIEW_CHANNEL, i);
        })(e, [n])
    );
}
function f(e) {
    return (0, l.bG)([s.Ay, a.A, d.A, r.A], () => h(e, [s.Ay, a.A, d.A, r.A]), [e]);
}

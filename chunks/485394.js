n.d(t, {
    Ay: () => _,
    K7: () => h,
}),
    n(896048);
var l = n(311907),
    a = n(855687),
    i = n(446600),
    c = n(734057),
    r = n(808728),
    s = n(71393),
    d = n(576705),
    u = n(488926),
    o = n(698441),
    f = n(988794),
    b = n(652215);
function h(e) {
    let [t, n, l, h] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.Ay, c.A, s.A, i.A];
    if ((0, o.AZ)(e)) return !1;
    let { guild_id: _, channel_id: m } = e,
        x = e.entity_type === f.Ps.EXTERNAL ? t.getDefaultChannel(e.guild_id) : n.getChannel(m),
        v = l.getGuild(_),
        g = h.getStageInstanceByChannel(m);
    return (
        !!(0, a.K)(d.A, v, x, g) &&
        null != x &&
        (function (e) {
            let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [c.A],
                { entityType: n, channelId: l } =
                    "entity_type" in e
                        ? {
                              entityType: e.entity_type,
                              channelId: e.channel_id,
                          }
                        : e;
            if (n === f.Ps.EXTERNAL) return !0;
            let a = t.getChannel(l);
            return null != a && u.MJ(b.xBc.VIEW_CHANNEL, a);
        })(e, [n])
    );
}
function _(e) {
    return (0, l.bG)([r.Ay, c.A, s.A, i.A], () => h(e, [r.Ay, c.A, s.A, i.A]), [e]);
}

t.d(e, { Ay: () => s, K7: () => g });
var i = t(17928),
    l = t(855687),
    A = t(446600),
    u = t(734057),
    a = t(808728),
    d = t(71393),
    h = t(576705),
    r = t(488926),
    c = t(698441),
    y = t(988794),
    p = t(652215);
function g(n) {
    let [e, t, i, g] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.Ay, u.A, d.A, A.A];
    if ((0, c.AZ)(n)) return !1;
    let { guild_id: s, channel_id: _ } = n,
        o = n.entity_type === y.Ps.EXTERNAL ? e.getDefaultChannel(n.guild_id) : t.getChannel(_),
        C = i.getGuild(s),
        f = g.getStageInstanceByChannel(_);
    return (
        !!(0, l.K)(h.A, C, o, f) &&
        null != o &&
        (function (n) {
            let [e] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [u.A],
                { entityType: t, channelId: i } =
                    "entity_type" in n ? { entityType: n.entity_type, channelId: n.channel_id } : n;
            if (t === y.Ps.EXTERNAL) return !0;
            let l = e.getChannel(i);
            return null != l && r.MJ(p.xBc.VIEW_CHANNEL, l);
        })(n, [t])
    );
}
function s(n) {
    return (0, i.bG)([a.Ay, u.A, d.A, A.A], () => g(n, [a.Ay, u.A, d.A, A.A]), [n]);
}

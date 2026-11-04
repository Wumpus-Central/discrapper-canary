var i = t(855986),
    l = t(855687),
    A = t(446600),
    u = t(734057),
    a = t(808728),
    d = t(71393),
    h = t(576705),
    r = t(488926),
    c = t(698441),
    p = t(988794),
    g = t(652215);
function s(n) {
    let [e, t, i, s] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.A, u.A, d.A, A.A];
    if ((0, c.AZ)(n)) return !1;
    let { guild_id: y, channel_id: _ } = n,
        o = n.entity_type === p.Ps.EXTERNAL ? e.getDefaultChannel(n.guild_id) : t.getChannel(_),
        C = i.getGuild(y),
        f = s.getStageInstanceByChannel(_);
    return (
        !!(0, l.K)(h.A, C, o, f) &&
        null != o &&
        (function (n) {
            let [e] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [u.A],
                { entityType: t, channelId: i } =
                    "entity_type" in n ? { entityType: n.entity_type, channelId: n.channel_id } : n;
            if (t === p.Ps.EXTERNAL) return !0;
            let l = e.getChannel(i);
            return null != l && r.MJ(g.xBc.VIEW_CHANNEL, l);
        })(n, [t])
    );
}
t.d(
    e,
    {},
    {
        Ay: function (n) {
            return (0, i.bG)([a.A, u.A, d.A, A.A], () => s(n, [a.A, u.A, d.A, A.A]), [n]);
        },
        K7: s,
    },
);

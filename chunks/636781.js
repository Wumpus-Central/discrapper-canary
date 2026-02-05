n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var r = n(92674),
    a = n(311907),
    l = n(397927),
    s = n(450510),
    o = n(808728),
    d = n(576705),
    c = n(606748),
    u = n(215307),
    A = n(48686),
    h = n(652215);
function _(e) {
    let { channel: t, guild: n } = e,
        o = (0, a.bG)([s.HP], () => s.HP.hasHotspot(s._2.HUB_STUDY_ROOM_NOTICE)),
        d = (0, A.Q)(t.guild_id),
        h = (0, l.zhh)({ maxHeight: 300 * !d, overflow: "hidden", delay: 400 });
    return (0, i.jsx)(r.animated.div, {
        style: h,
        children: o
            ? (0, i.jsx)(c.A, { channel: t, guild: n })
            : (0, i.jsx)(u.A, { name: `📚☕ ${t.name}`, channel: t }),
    });
}
let m = function (e) {
    let { guild: t } = e,
        n = (0, a.bG)([o.Ay], () => o.Ay.getChannels(t.id)[o.vM][0]),
        r = (0, a.bG)([d.A], () => null != n && d.A.can(h.xBc.CONNECT, n.channel));
    return t.features.has(h.GuildFeatures.HUB) && null != n && r
        ? (0, i.jsx)(_, { channel: n.channel, guild: t })
        : null;
};

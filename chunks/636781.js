n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var a = n(687498),
    l = n(311907),
    r = n(397927),
    s = n(47167),
    o = n(450510),
    d = n(808728),
    c = n(576705),
    u = n(606748),
    A = n(215307),
    h = n(48686),
    _ = n(652215);
function m(e) {
    let { channel: t, guild: n } = e,
        d = (0, l.bG)([o.HP], () => o.HP.hasHotspot(o._2.HUB_STUDY_ROOM_NOTICE)),
        c = (0, h.Q)(t.guild_id),
        _ = (0, s.Ay)(t),
        m = (0, r.zhh)({ maxHeight: 300 * !c, overflow: "hidden", delay: 400 });
    return (0, i.jsx)(a.animated.div, {
        style: m,
        children: d ? (0, i.jsx)(u.A, { channel: t, guild: n }) : (0, i.jsx)(A.A, { name: `📚☕ ${_}`, channel: t }),
    });
}
let g = function (e) {
    let { guild: t } = e,
        n = (0, l.bG)([d.Ay], () => d.Ay.getChannels(t.id)[d.vM][0]),
        a = (0, l.bG)([c.A], () => null != n && c.A.can(_.xBc.CONNECT, n.channel));
    return t.features.has(_.GuildFeatures.HUB) && null != n && a
        ? (0, i.jsx)(m, { channel: n.channel, guild: t })
        : null;
};

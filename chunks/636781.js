n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var r = n(517738),
    a = n(311907),
    l = n(717421),
    s = n(47167),
    o = n(450510),
    d = n(808728),
    u = n(576705),
    c = n(606748),
    A = n(215307),
    h = n(48686),
    _ = n(652215);
function E(e) {
    let { channel: t, guild: n } = e,
        d = (0, a.bG)([o.HP], () => o.HP.hasHotspot(o._2.HUB_STUDY_ROOM_NOTICE)),
        u = (0, h.Q)(t.guild_id),
        _ = (0, s.Ay)(t),
        E = (0, l.z)({ maxHeight: 300 * !u, overflow: "hidden", delay: 400 });
    return (0, i.jsx)(r.animated.div, {
        style: E,
        children: d ? (0, i.jsx)(c.A, { channel: t, guild: n }) : (0, i.jsx)(A.A, { name: `📚☕ ${_}`, channel: t }),
    });
}
let p = function (e) {
    let { guild: t } = e,
        n = (0, a.bG)([d.Ay], () => d.Ay.getChannels(t.id)[d.vM][0]),
        r = (0, a.bG)([u.A], () => null != n && u.A.can(_.xBc.CONNECT, n.channel));
    return t.features.has(_.GuildFeatures.HUB) && null != n && r
        ? (0, i.jsx)(E, { channel: n.channel, guild: t })
        : null;
};

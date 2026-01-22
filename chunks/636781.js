n.d(t, {
    A: () => A,
});
var r = n(627968);
n(64700);
var i = n(108531),
    l = n(311907),
    a = n(397927),
    s = n(450510),
    o = n(808728),
    c = n(576705),
    u = n(606748),
    d = n(215307),
    p = n(48686),
    f = n(652215);

function h(e) {
    let { channel: t, guild: n } = e,
        o = (0, l.bG)([s.HP], () => s.HP.hasHotspot(s._2.HUB_STUDY_ROOM_NOTICE)),
        c = (0, p.Q)(t.guild_id),
        f = (0, a.zhh)({
            maxHeight: 300 * !c,
            overflow: "hidden",
            delay: 400,
        });
    return (0, r.jsx)(i.animated.div, {
        style: f,
        children: o
            ? (0, r.jsx)(u.A, {
                  channel: t,
                  guild: n,
              })
            : (0, r.jsx)(d.A, {
                  name: "\uD83D\uDCDA☕ ".concat(t.name),
                  channel: t,
              }),
    });
}
let A = function (e) {
    let { guild: t } = e,
        n = (0, l.bG)([o.Ay], () => o.Ay.getChannels(t.id)[o.vM][0]),
        i = (0, l.bG)([c.A], () => null != n && c.A.can(f.xBc.CONNECT, n.channel));
    return t.features.has(f.GuildFeatures.HUB) && null != n && i
        ? (0, r.jsx)(h, {
              channel: n.channel,
              guild: t,
          })
        : null;
};

e.d(t, { Z: () => h });
var i = e(54381);
e(473749);
var l = e(442837),
    r = e(828214),
    a = e(287734),
    s = e(208049),
    c = e(893663),
    o = e(496675),
    d = e(944486),
    u = e(981631),
    Z = e(388032);
function h(n, t) {
    let e = (0, l.e7)([o.Z], () => o.Z.can(u.Plq.CONNECT, n), [n]),
        h = (0, l.e7)([d.Z], () => d.Z.getVoiceChannelId()),
        g = (0, c.tT)(t),
        f = h === n.id;
    return n.isGuildVocal() && e && null != g && !f
        ? (0, i.jsx)(r.sN, {
              id: "join-muted-custom-join-sound",
              label: Z.intl.string(Z.t.saLMWc),
              action: () => {
                  (0, s.Db)(n.id), a.default.selectVoiceChannel(n.id);
              },
          })
        : null;
}

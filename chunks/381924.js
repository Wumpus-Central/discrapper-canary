i.d(t, { Z: () => h });
var e = i(200651);
i(192379);
var l = i(442837),
    a = i(828214),
    d = i(287734),
    r = i(208049),
    s = i(893663),
    c = i(496675),
    o = i(944486),
    u = i(981631),
    Z = i(388032);
function h(n, t) {
    let i = (0, l.e7)([c.Z], () => c.Z.can(u.Plq.CONNECT, n), [n]),
        h = (0, l.e7)([o.Z], () => o.Z.getVoiceChannelId()),
        x = (0, s.tT)(t),
        g = h === n.id;
    return n.isGuildVocal() && i && null != x && !g
        ? (0, e.jsx)(a.sN, {
              id: 'join-muted-custom-join-sound',
              label: Z.intl.string(Z.t.saLMWV),
              action: () => {
                  (0, r.Db)(n.id), d.default.selectVoiceChannel(n.id);
              }
          })
        : null;
}

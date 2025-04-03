n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(828214),
    o = n(287734),
    c = n(208049),
    a = n(893663),
    s = n(496675),
    u = n(944486),
    d = n(981631),
    Z = n(388032);
function f(e, t) {
    let n = (0, i.e7)([s.Z], () => s.Z.can(d.Plq.CONNECT, e), [e]),
        f = (0, i.e7)([u.Z], () => u.Z.getVoiceChannelId()),
        b = (0, a.tT)(t),
        O = f === e.id;
    return e.isGuildVocal() && n && null != b && !O
        ? (0, r.jsx)(l.sN, {
              id: 'join-muted-custom-join-sound',
              label: Z.NW.string(Z.t.saLMWV),
              action: () => {
                  (0, c.Db)(e.id), o.default.selectVoiceChannel(e.id);
              }
          })
        : null;
}

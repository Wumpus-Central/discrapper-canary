n.d(t, { Z: () => f });
var i = n(255367);
n(73800);
var r = n(442837),
    l = n(828214),
    a = n(287734),
    o = n(208049),
    c = n(893663),
    s = n(496675),
    u = n(944486),
    d = n(981631),
    Z = n(388032);
function f(e, t) {
    let n = (0, r.e7)([s.Z], () => s.Z.can(d.Plq.CONNECT, e), [e]),
        f = (0, r.e7)([u.Z], () => u.Z.getVoiceChannelId()),
        g = (0, c.tT)(t),
        h = f === e.id;
    return e.isGuildVocal() && n && null != g && !h
        ? (0, i.jsx)(l.sN, {
              id: 'join-muted-custom-join-sound',
              label: Z.intl.string(Z.t.saLMWV),
              action: () => {
                  ((0, o.Db)(e.id), a.default.selectVoiceChannel(e.id));
              }
          })
        : null;
}

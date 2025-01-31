n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    s = n(196051),
    r = n(441729),
    o = n(388032);
function d(e, t) {
    let n = (0, l.e7)([r.Z], () => r.Z.isSpeakingMessage(t.id, e.id), [t, e]);
    return '' === e.content
        ? null
        : (0, i.jsx)(a.sNh, {
              id: 'tts',
              label: n ? o.intl.string(o.t.CJ30BA) : o.intl.string(o.t.yGLjXF),
              icon: a.J2R,
              action: () => (n ? (0, s.NB)() : (0, s.LA)(t, e))
          });
}

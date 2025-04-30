n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    a = n(196051),
    o = n(441729),
    s = n(388032);
function c(e, t) {
    let n = (0, r.e7)([o.Z], () => o.Z.isSpeakingMessage(t.id, e.id), [t, e]);
    return '' === e.content
        ? null
        : (0, i.jsx)(l.sNh, {
              id: 'tts',
              label: n ? s.intl.string(s.t.CJ30BA) : s.intl.string(s.t.yGLjXF),
              icon: l.J2R,
              action: () => (n ? (0, a.NB)() : (0, a.LA)(t, e))
          });
}

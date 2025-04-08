n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    l = n(196051),
    o = n(441729),
    s = n(388032);
function c(e, t) {
    let n = (0, i.e7)([o.Z], () => o.Z.isSpeakingMessage(t.id, e.id), [t, e]);
    return '' === e.content
        ? null
        : (0, r.jsx)(a.sNh, {
              id: 'tts',
              label: n ? s.NW.string(s.t.CJ30BA) : s.NW.string(s.t.yGLjXF),
              icon: a.J2R,
              action: () => (n ? (0, l.NB)() : (0, l.LA)(t, e))
          });
}

n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(481060),
    o = n(196051),
    s = n(441729),
    l = n(388032);
function c(e, t) {
    let n = (0, i.e7)([s.Z], () => s.Z.isSpeakingMessage(t.id, e.id), [t, e]);
    return '' === e.content
        ? null
        : (0, r.jsx)(a.sNh, {
              id: 'tts',
              label: n ? l.intl.string(l.t.CJ30BA) : l.intl.string(l.t.yGLjXF),
              icon: a.J2R,
              action: () => (n ? (0, o.NB)() : (0, o.LA)(t, e))
          });
}

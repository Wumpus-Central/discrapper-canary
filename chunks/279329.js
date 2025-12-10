n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(481060),
    o = n(196051),
    a = n(441729),
    s = n(388032);
function c(e, t) {
    let n = (0, i.e7)([a.Z], () => a.Z.isSpeakingMessage(t.id, e.id), [t, e]);
    return "" === e.content
        ? null
        : (0, r.jsx)(l.sNh, {
              id: "tts",
              label: n ? s.intl.string(s.t.CJ30BP) : s.intl.string(s.t.yGLjXF),
              icon: l.J2R,
              action: () => (n ? (0, o.NB)() : (0, o.LA)(t, e)),
          });
}

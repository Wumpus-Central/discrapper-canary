n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(481060),
    a = n(196051),
    o = n(441729),
    s = n(388032);
function c(e, t) {
    let n = (0, i.e7)([o.Z], () => o.Z.isSpeakingMessage(t.id, e.id), [t, e]);
    return "" === e.content
        ? null
        : (0, r.jsx)(l.sNh, {
              id: "tts",
              label: n ? s.intl.string(s.t.CJ30BP) : s.intl.string(s.t.yGLjXF),
              icon: l.J2R,
              action: () => (n ? (0, a.NB)() : (0, a.LA)(t, e)),
          });
}

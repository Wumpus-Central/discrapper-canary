n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(481060),
    o = n(196051),
    a = n(441729),
    c = n(388032);
function s(e, t) {
    let n = (0, i.e7)([a.Z], () => a.Z.isSpeakingMessage(t.id, e.id), [t, e]);
    return "" === e.content
        ? null
        : (0, r.jsx)(l.sNh, {
              id: "tts",
              label: n ? c.intl.string(c.t.CJ30BP) : c.intl.string(c.t.yGLjXF),
              icon: l.J2R,
              action: () => (n ? (0, o.NB)() : (0, o.LA)(t, e)),
          });
}

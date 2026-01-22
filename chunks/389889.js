n.d(t, { A: () => s });
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    o = n(54570),
    a = n(8880),
    c = n(985018);
function s(e, t) {
    let n = (0, l.bG)([a.A], () => a.A.isSpeakingMessage(t.id, e.id), [t, e]);
    return "" === e.content
        ? null
        : (0, r.jsx)(i.Drp, {
              id: "tts",
              label: n ? c.intl.string(c.t.CJ30BP) : c.intl.string(c.t.yGLjXF),
              icon: i._Ft,
              action: () => (n ? (0, o.pr)() : (0, o.kP)(t, e)),
          });
}

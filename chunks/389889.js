n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(477782),
    r = n(556112),
    s = n(54570),
    o = n(8880),
    d = n(985018);
function c(e, t) {
    let n = (0, l.bG)([o.A], () => o.A.isSpeakingMessage(t.id, e.id), [t, e]);
    return "" === e.content
        ? null
        : (0, i.jsx)(a.Dr, {
              id: "tts",
              label: n ? d.intl.string(d.t.CJ30BP) : d.intl.string(d.t.yGLjXF),
              leadingAccessory: { type: "icon", icon: r._ },
              icon: r._,
              action: () => (n ? (0, s.pr)() : (0, s.kP)(t, e)),
          });
}

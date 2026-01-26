n.d(t, {
    A: () => s,
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(54570),
    o = n(8880),
    c = n(985018);

function s(e, t) {
    let n = (0, i.bG)([o.A], () => o.A.isSpeakingMessage(t.id, e.id), [t, e]);
    return "" === e.content
        ? null
        : (0, r.jsx)(l.Drp, {
              id: "tts",
              label: n ? c.intl.string(c.t.CJ30BP) : c.intl.string(c.t.yGLjXF),
              leadingAccessory: {
                  type: "icon",
                  icon: l._Ft,
              },
              icon: l._Ft,
              action: () => (n ? (0, a.pr)() : (0, a.kP)(t, e)),
          });
}

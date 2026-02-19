"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    r = n(964404),
    a = n(469707),
    o = n(513963),
    c = n(951829),
    d = n(985018);
function u(e, t) {
    let [n, u, h] = (0, a.A)(e, t),
        A = (0, s.bG)([r.Ay], () => r.Ay.disableHideSelfStreamAndVideoConfirmationAlert);
    return n
        ? (0, i.jsx)(l.sLh, {
              id: "self-stream-hide",
              label: d.intl.string(d.t.aol7iW),
              checked: !u,
              action: () => {
                  if (A || u) return h(!u);
                  (0, l.qfG)((e) => (0, i.jsx)(o.A, { ...e, type: c.f.STREAM, onConfirm: () => h(!u) }));
              },
          })
        : null;
}

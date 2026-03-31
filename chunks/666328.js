n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(397927),
    a = n(964404),
    r = n(469707),
    o = n(513963),
    c = n(951829),
    d = n(985018);
function u(e, t) {
    let [n, u, h] = (0, r.A)(e, t),
        A = (0, l.bG)([a.Ay], () => a.Ay.disableHideSelfStreamAndVideoConfirmationAlert);
    return n
        ? (0, i.jsx)(s.sLh, {
              id: "self-stream-hide",
              label: d.intl.string(d.t.aol7iW),
              checked: !u,
              action: () => {
                  if (A || u) return h(!u);
                  (0, s.qfG)((e) => (0, i.jsx)(o.A, { ...e, type: c.f.STREAM, onConfirm: () => h(!u) }));
              },
          })
        : null;
}

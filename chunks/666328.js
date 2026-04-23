t.d(n, { A: () => A });
var l = t(627968);
t(64700);
var i = t(311907),
    a = t(192308),
    s = t(477782),
    r = t(964404),
    o = t(469707),
    c = t(513963),
    u = t(951829),
    d = t(985018);
function A(e, n) {
    let [t, A, h] = (0, o.A)(e, n),
        p = (0, i.bG)([r.Ay], () => r.Ay.disableHideSelfStreamAndVideoConfirmationAlert);
    return t
        ? (0, l.jsx)(s.sL, {
              id: "self-stream-hide",
              label: d.intl.string(d.t.aol7iW),
              checked: !A,
              action: () => {
                  if (p || A) return h(!A);
                  (0, a.openModal)((e) => (0, l.jsx)(c.A, { ...e, type: u.f.STREAM, onConfirm: () => h(!A) }));
              },
          })
        : null;
}

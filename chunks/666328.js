n.d(t, { A: () => A });
var i = n(477900);
n(582128);
var r = n(17928),
    l = n(192308),
    a = n(477782),
    d = n(742023),
    u = n(469707),
    o = n(513963),
    s = n(951829),
    c = n(375708);
function A(e, t) {
    let [n, A, f] = (0, u.A)(e, t),
        p = (0, r.bG)([d.Ay], () => d.Ay.disableHideSelfStreamAndVideoConfirmationAlert);
    return n
        ? (0, i.jsx)(a.sL, {
              id: "self-stream-hide",
              label: c.intl.string(c.t.aol7iW),
              checked: !A,
              action: function () {
                  if (p || A) return f(!A);
                  (0, l.openModal)((e) => (0, i.jsx)(o.A, { ...e, type: s.f.STREAM, onConfirm: () => f(!A) }));
              },
          })
        : null;
}

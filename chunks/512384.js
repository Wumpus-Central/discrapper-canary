n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var l = n(399606),
    i = n(481060),
    a = n(351780),
    o = n(170248);
function u(e) {
    let { isShaking: t, shakeLocation: n, children: u, className: s } = e,
        c = (0, o.Z)(n);
    return (0, l.e7)([a.Z], () => a.Z.isEnabled({ shakeLocation: n }))
        ? (0, r.jsx)(i.UkV, {
              isShaking: t,
              intensity: c,
              className: s,
              children: u
          })
        : u;
}

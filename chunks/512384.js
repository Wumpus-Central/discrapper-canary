n.d(t, { Z: () => l });
var r = n(255367);
n(73800);
var i = n(399606),
    a = n(481060),
    o = n(351780),
    s = n(170248);
function l(e) {
    let { isShaking: t, shakeLocation: n, children: l, className: c } = e,
        u = (0, s.Z)(n);
    return (0, i.e7)([o.Z], () => o.Z.isEnabled({ shakeLocation: n }))
        ? (0, r.jsx)(a.UkV, {
              isShaking: t,
              intensity: u,
              className: c,
              children: l
          })
        : l;
}

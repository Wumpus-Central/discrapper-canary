n.d(t, { Z: () => s });
var r = n(951288);
n(647438);
var i = n(399606),
    l = n(481060),
    a = n(351780),
    o = n(170248);
function s(e) {
    let { isShaking: t, shakeLocation: n, children: s, className: c } = e,
        u = (0, o.Z)(n);
    return (0, i.e7)([a.Z], () => a.Z.isEnabled({ shakeLocation: n }))
        ? (0, r.jsx)(l.UkV, {
              isShaking: t,
              intensity: u,
              className: c,
              children: s,
          })
        : s;
}

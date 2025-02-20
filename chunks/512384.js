n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var l = n(399606),
    i = n(481060),
    a = n(351780),
    o = n(170248);
function s(e) {
    let { isShaking: t, shakeLocation: n, children: s, className: c } = e,
        u = (0, o.Z)(n);
    return (0, l.e7)([a.Z], () => a.Z.isEnabled({ shakeLocation: n }))
        ? (0, r.jsx)(i.UkV, {
              isShaking: t,
              intensity: u,
              className: c,
              children: s
          })
        : (0, r.jsx)(r.Fragment, { children: s });
}

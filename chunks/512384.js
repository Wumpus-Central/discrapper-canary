n.d(t, { Z: () => o });
var l = n(200651);
n(192379);
var i = n(399606),
    r = n(481060),
    a = n(351780),
    s = n(170248);
function o(e) {
    let { isShaking: t, shakeLocation: n, children: o, className: u } = e,
        c = (0, s.Z)(n);
    return (0, i.e7)([a.Z], () => a.Z.isEnabled({ shakeLocation: n }))
        ? (0, l.jsx)(r.UkV, {
              isShaking: t,
              intensity: c,
              className: u,
              children: o
          })
        : (0, l.jsx)(l.Fragment, { children: o });
}

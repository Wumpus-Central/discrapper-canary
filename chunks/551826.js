n.d(t, { A: () => o });
var l = n(627968);
n(64700);
var r = n(417597),
    i = n(397927),
    a = n(3137),
    s = n(208343);
function o(e) {
    let { isShaking: t, shakeLocation: n, children: o, className: c } = e,
        u = (0, s.A)(n);
    return (0, r.bG)([a.A], () => a.A.isEnabled({ shakeLocation: n }))
        ? (0, l.jsx)(i.bfh, {
              isShaking: t,
              intensity: u,
              className: c,
              children: o,
          })
        : o;
}

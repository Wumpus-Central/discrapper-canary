n.d(t, { A: () => o });
var i = n(477900);
n(582128);
var l = n(702841),
    r = n(568602),
    s = n(3137),
    a = n(208343);
function o(e) {
    let { isShaking: t, shakeLocation: n, children: o, className: u } = e,
        d = (0, a.A)(n);
    return (0, l.bG)([s.A], () => s.A.isEnabled({ shakeLocation: n }))
        ? (0, i.jsx)(r.b, { isShaking: t, intensity: d, className: u, children: o })
        : o;
}

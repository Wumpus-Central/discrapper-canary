n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var l = n(702841),
    s = n(568602),
    r = n(3137),
    a = n(208343);
function u(e) {
    let { isShaking: t, shakeLocation: n, children: u, className: o } = e,
        d = (0, a.A)(n);
    return (0, l.bG)([r.A], () => r.A.isEnabled({ shakeLocation: n }))
        ? (0, i.jsx)(s.b, { isShaking: t, intensity: d, className: o, children: u })
        : u;
}

n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var a = n(702841),
    r = n(568602),
    l = n(3137),
    s = n(208343);
function o(e) {
    let { isShaking: t, shakeLocation: n, children: o, className: c } = e,
        d = (0, s.A)(n);
    return (0, a.bG)([l.A], () => l.A.isEnabled({ shakeLocation: n }))
        ? (0, i.jsx)(r.b, { isShaking: t, intensity: d, className: c, children: o })
        : o;
}

n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var l = n(417597),
    a = n(568602),
    s = n(3137),
    r = n(208343);
function o(e) {
    let { isShaking: t, shakeLocation: n, children: o, className: c } = e,
        d = (0, r.A)(n);
    return (0, l.bG)([s.A], () => s.A.isEnabled({ shakeLocation: n }))
        ? (0, i.jsx)(a.b, { isShaking: t, intensity: d, className: c, children: o })
        : o;
}

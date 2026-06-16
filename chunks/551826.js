"use strict";
n.d(t, { A: () => l });
var i = n(627968);
n(64700);
var r = n(702841),
    s = n(568602),
    a = n(3137),
    o = n(208343);
function l(e) {
    let { isShaking: t, shakeLocation: n, children: l, className: u } = e,
        c = (0, o.A)(n);
    return (0, r.bG)([a.A], () => a.A.isEnabled({ shakeLocation: n }))
        ? (0, i.jsx)(s.b, { isShaking: t, intensity: c, className: u, children: l })
        : l;
}

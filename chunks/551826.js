"use strict";
n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var r = n(702841),
    a = n(568602),
    s = n(3137),
    l = n(208343);
function o(e) {
    let { isShaking: t, shakeLocation: n, children: o, className: d } = e,
        c = (0, l.A)(n);
    return (0, r.bG)([s.A], () => s.A.isEnabled({ shakeLocation: n }))
        ? (0, i.jsx)(a.b, { isShaking: t, intensity: c, className: d, children: o })
        : o;
}

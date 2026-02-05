"use strict";
n.d(t, { A: () => p });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(736653),
    o = n(775602),
    l = n(607470),
    u = n(200430),
    c = n(154057),
    d = n(236806),
    _ = n(988297),
    f = n(613702);
function p(e) {
    let { className: t } = e,
        n = (0, i.bG)([o.A], () => o.A.useReducedMotion),
        p = (0, s.Ay)(),
        h = (0, a.qB1)(p);
    if (n) {
        let e = h ? _.A : c.A;
        return (0, r.jsxs)("div", {
            className: t,
            children: [(0, r.jsx)("div", { className: u.YL }), (0, r.jsx)("img", { src: e, alt: "" })],
        });
    }
    let m = h ? f.A : d.A;
    return (0, r.jsxs)("div", {
        className: t,
        children: [
            (0, r.jsx)("div", { className: u.YL }),
            (0, r.jsx)(
                l.A,
                { muted: !0, autoPlay: !0, playsInline: !0, loop: !0, children: (0, r.jsx)("source", { src: m }) },
                m,
            ),
        ],
    });
}

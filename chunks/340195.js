"use strict";
n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(397927),
    a = n(736653),
    o = n(775602),
    l = n(607470),
    u = n(676279),
    c = n(750572),
    d = n(154057),
    _ = n(236806),
    f = n(988297),
    p = n(613702);
function h(e) {
    let { className: t } = e,
        n = (0, i.bG)([o.A], () => o.A.useReducedMotion),
        h = (0, a.Ay)(),
        m = (0, s.qB1)(h);
    if (n || (0, u.nr)()) {
        let e = m ? f.A : d.A;
        return (0, r.jsxs)("div", {
            className: t,
            children: [(0, r.jsx)("div", { className: c.YL }), (0, r.jsx)("img", { src: e, alt: "" })],
        });
    }
    let E = m ? p.A : _.A;
    return (0, r.jsxs)("div", {
        className: t,
        children: [
            (0, r.jsx)("div", { className: c.YL }),
            (0, r.jsx)(
                l.A,
                { muted: !0, autoPlay: !0, playsInline: !0, loop: !0, children: (0, r.jsx)("source", { src: E }) },
                E,
            ),
        ],
    });
}

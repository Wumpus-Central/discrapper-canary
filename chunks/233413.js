n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(966275),
    a = n(280582);
let o = function (e) {
    let { className: t, hasCooldown: s, isCanceled: o, useReducedMotion: d } = e;
    return (0, i.jsxs)("div", {
        className: l()(a.sn, t),
        children: [
            o
                ? (0, i.jsx)("img", { className: l()(a.$J, a.qX), src: n(66469), alt: "" })
                : (0, i.jsx)(r.A, { className: a.$J, boostInCooldown: s, useReducedMotion: d }),
            !o && s && (0, i.jsx)("img", { className: a.De, src: n(994937), alt: "" }),
        ],
    });
};

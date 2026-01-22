n.d(t, {
    A: () => l,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(432334),
    o = n(680020);
let l = function (e) {
    let { className: t, hasCooldown: i, isCanceled: l, useReducedMotion: c } = e;
    return (0, r.jsxs)("div", {
        className: a()(o.sn, t),
        children: [
            l
                ? (0, r.jsx)("img", {
                      className: a()(o.$J, o.qX),
                      src: n(208294),
                      alt: "",
                  })
                : (0, r.jsx)(s.A, {
                      className: o.$J,
                      boostInCooldown: i,
                      useReducedMotion: c,
                  }),
            !l &&
                i &&
                (0, r.jsx)("img", {
                    className: o.De,
                    src: n(595454),
                    alt: "",
                }),
        ],
    });
};

n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    a = n(303136),
    s = n(778827),
    o = n(181713);
let d = (e) => {
    let { className: t, isAnimated: n = !1, questName: r } = e,
        d = n ? o.A : o.A + "?format=webp";
    return (0, i.jsx)("div", {
        className: l()(s.k, t),
        children: n
            ? (0, i.jsx)(a.A, {
                  preload: "auto",
                  className: s.L,
                  children: (0, i.jsx)("source", { src: d, type: "video/webm" }),
              })
            : (0, i.jsx)("img", { className: s.L, src: d, alt: r }),
    });
};

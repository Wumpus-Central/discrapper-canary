s.d(t, { A: () => c });
var n = s(627968);
s(64700);
var l = s(503698),
    a = s.n(l),
    r = s(303136),
    i = s(265234),
    o = s(181713);
let c = (e) => {
    let { className: t, isAnimated: s = !1, questName: l } = e,
        c = s ? o.A : o.A + "?format=webp";
    return (0, n.jsx)("div", {
        className: a()(i.k, t),
        children: s
            ? (0, n.jsx)(r.A, {
                  preload: "auto",
                  className: i.L,
                  children: (0, n.jsx)("source", { src: c, type: "video/webm" }),
              })
            : (0, n.jsx)("img", { className: i.L, src: c, alt: l }),
    });
};

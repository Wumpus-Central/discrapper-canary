n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(607470),
    s = n(778827),
    o = n(181713);
let c = (e) => {
    let { className: t, isAnimated: n = !1, questName: i } = e,
        c = n ? o.A : o.A + "?format=webp";
    return (0, r.jsx)("div", {
        className: l()(s.k, t),
        children: n
            ? (0, r.jsx)(a.A, {
                  autoPlay: !0,
                  loop: !0,
                  muted: !0,
                  preload: "auto",
                  playsInline: !0,
                  className: s.L,
                  controls: !1,
                  children: (0, r.jsx)("source", {
                      src: c,
                      type: "video/webm",
                  }),
              })
            : (0, r.jsx)("img", {
                  className: s.L,
                  src: c,
                  alt: i,
              }),
    });
};

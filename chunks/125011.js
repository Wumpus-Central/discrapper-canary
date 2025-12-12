n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(70097),
    s = n(883079),
    o = n(201284);
let c = (e) => {
    let { className: t, isAnimated: n = !1, questName: i } = e,
        c = n ? o.Z : o.Z + "?format=webp";
    return (0, r.jsx)("div", {
        className: l()(s.container, t),
        children: n
            ? (0, r.jsx)(a.Z, {
                  autoPlay: !0,
                  loop: !0,
                  muted: !0,
                  preload: "auto",
                  playsInline: !0,
                  className: s.asset,
                  controls: !1,
                  children: (0, r.jsx)("source", {
                      src: c,
                      type: "video/webm",
                  }),
              })
            : (0, r.jsx)("img", {
                  className: s.asset,
                  src: c,
                  alt: i,
              }),
    });
};

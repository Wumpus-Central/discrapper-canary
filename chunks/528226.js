t.d(r, { A: () => c });
var d = t(627968);
t(64700);
var l = t(988064);
let c = (e) => {
    let { bannerSrc: r, logoSrc: t, backgroundColor: c, children: o } = e;
    return (0, d.jsxs)("div", {
        className: l.ZK,
        style: { backgroundImage: `url(${r})`, backgroundColor: c },
        children: [
            null != t && (0, d.jsx)("img", { src: t, className: l.wm, alt: "" }),
            null != o && (0, d.jsx)("div", { className: l.Y_, children: o }),
        ],
    });
};

"use strict";
n.d(t, { A: () => a });
var r = n(627968);
n(64700);
var i = n(988064);
let a = (e) => {
    let { bannerSrc: t, logoSrc: n, backgroundColor: a, children: s } = e;
    return (0, r.jsxs)("div", {
        className: i.ZK,
        style: { backgroundImage: `url(${t})`, backgroundColor: a },
        children: [
            null != n && (0, r.jsx)("img", { src: n, className: i.wm, alt: "" }),
            null != s && (0, r.jsx)("div", { className: i.Y_, children: s }),
        ],
    });
};

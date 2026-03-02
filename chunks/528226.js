t.d(l, { A: () => a });
var r = t(627968);
t(64700);
var o = t(506456),
    n = t(988064);
let a = (e) => {
    let { bannerSrc: l, logoSrc: t, backgroundColor: a, children: i } = e,
        d = (0, o.A)(l.src),
        s = (0, o.A)(t?.src);
    return (0, r.jsxs)("div", {
        className: n.ZK,
        style: { backgroundImage: `url(${d})`, backgroundColor: a },
        children: [
            null != s && (0, r.jsx)("img", { src: s, alt: t?.alt ?? "", className: n.wm }),
            null != i && (0, r.jsx)("div", { className: n.Y_, children: i }),
        ],
    });
};

n.d(t, { Z: () => a });
var r = n(54381);
n(473749);
var i = n(306278);
let a = (e) => {
    let { bannerSrc: t, logoSrc: n, backgroundColor: a, children: o } = e;
    return (0, r.jsxs)("div", {
        className: i.hero,
        style: {
            backgroundImage: "url(".concat(t, ")"),
            backgroundColor: a,
        },
        children: [
            null != n &&
                (0, r.jsx)("img", {
                    src: n,
                    className: i.logo,
                    alt: "",
                }),
            null != o &&
                (0, r.jsx)("div", {
                    className: i.children,
                    children: o,
                }),
        ],
    });
};

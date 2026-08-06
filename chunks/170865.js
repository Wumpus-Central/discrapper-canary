n.d(t, { A: () => a });
var i = n(477900),
    l = n(582128);
function a(e) {
    let { className: t } = e,
        n = l.useId(),
        a = `${n}-paint`;
    return (0, i.jsxs)("svg", {
        className: t,
        viewBox: "0 0 206 209",
        preserveAspectRatio: "xMidYMid slice",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, i.jsx)("rect", { width: "206", height: "209", fill: `url(#${a})`, fillOpacity: "0.05" }),
            (0, i.jsx)("defs", {
                children: (0, i.jsxs)("linearGradient", {
                    id: a,
                    x1: "163.59",
                    y1: "127.562",
                    x2: "102.223",
                    y2: "104.055",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        (0, i.jsx)("stop", { stopOpacity: "0" }),
                        (0, i.jsx)("stop", { offset: "0.176296", stopColor: "white", stopOpacity: "0.75" }),
                        (0, i.jsx)("stop", { offset: "1", stopOpacity: "0" }),
                    ],
                }),
            }),
        ],
    });
}

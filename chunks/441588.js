t.r(s), t.d(s, { default: () => d });
var i = t(627968);
t(64700);
var r = t(140735),
    l = t(772958);
function d() {
    return (
        (0, l.ur)(document.body),
        (0, i.jsx)(r.A, {
            children: (0, i.jsx)("svg", {
                "aria-hidden": !0,
                children: (0, i.jsxs)("filter", {
                    id: "violation-overlay",
                    x: "0",
                    y: "0",
                    width: "100%",
                    height: "100%",
                    children: [
                        (0, i.jsx)("feFlood", { floodColor: "#ff0000", floodOpacity: "0.3", result: "floodFill" }),
                        (0, i.jsx)("feBlend", { in: "SourceGraphic", in2: "floodFill", mode: "overlay" }),
                    ],
                }),
            }),
        })
    );
}

d.r(o),
    d.d(o, {
        default: () => s,
    });
var e = d(627968);
d(64700);
var l = d(397927),
    r = d(772958);

function s() {
    return (
        (0, r.ur)(document.body),
        (0, e.jsx)(l.AC4, {
            children: (0, e.jsx)("svg", {
                "aria-hidden": !0,
                children: (0, e.jsxs)("filter", {
                    id: "violation-overlay",
                    x: "0",
                    y: "0",
                    width: "100%",
                    height: "100%",
                    children: [
                        (0, e.jsx)("feFlood", {
                            floodColor: "#ff0000",
                            floodOpacity: "0.3",
                            result: "floodFill",
                        }),
                        (0, e.jsx)("feBlend", {
                            in: "SourceGraphic",
                            in2: "floodFill",
                            mode: "overlay",
                        }),
                    ],
                }),
            }),
        })
    );
}

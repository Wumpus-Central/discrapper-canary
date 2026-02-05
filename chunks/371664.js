i.d(t, { A: () => l });
var n = i(627968);
i(64700);
var s = i(953727);
function l(e) {
    let { width: t = 80, height: i = 20, color: l = "currentColor", foreground: a, ...r } = e;
    return (0, n.jsxs)("svg", {
        ...(0, s.A)(r),
        width: t,
        height: i,
        viewBox: `0 0 ${t} ${i}`,
        children: [
            (0, n.jsx)("pattern", {
                id: "pill-frame-pattern",
                width: 8 / t,
                height: "1",
                children: (0, n.jsx)("path", {
                    d: "m0 0h8v20h-8zm4 2c-1.1045695 0-2 .8954305-2 2v12c0 1.1045695.8954305 2 2 2s2-.8954305 2-2v-12c0-1.1045695-.8954305-2-2-2z",
                    fillRule: "evenodd",
                    fill: l,
                    className: a,
                }),
            }),
            (0, n.jsx)("rect", { fill: "url(#pill-frame-pattern)", height: "100%", width: "100%" }),
        ],
    });
}

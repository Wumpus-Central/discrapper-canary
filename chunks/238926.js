h.d(v, { E: () => D });
var g = h(627968);
h(64700);
var B = h(996682),
    C = h(211974);
let f = ["#003E22", "#027D46", "#14A95C"],
    M = [0.1, 0.25, 0.45],
    H = [
        { base: 5, tint: 1 },
        { base: 3, tint: 1 },
        { base: 3, tint: 1 },
    ],
    Q = ["#FD7531", "#FFAE49", "#FFC781"],
    w = [0.45, 0.6, 0.75],
    t = [
        { base: 5, tint: 1 },
        { base: 3, tint: 1 },
        { base: 3, tint: 1 },
    ],
    D = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: D, secondaryTintColor: l, ...V } = A,
            { primaryColorsTransformed: s, secondaryColorsTransformed: a } = (0, C.V)({
                primaryBaseColors: f,
                primaryTintColor: D,
                primaryTintLuminances: M,
                primaryLuminanceWeights: H,
                secondaryBaseColors: Q,
                secondaryTintColor: l,
                secondaryTintLuminances: w,
                secondaryLuminanceWeights: t,
            });
        return (0, g.jsxs)("svg", {
            ...(0, B.A)(V),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", {
                    d: "M7 6h-2v-1h1v-1h1v2ZM10 5h1v1h-2v-2h1v1ZM5 5h-1v-1h1v1ZM12 5h-1v-1h1v1ZM4 4h-1v-1h1v1ZM13 4h-1v-1h1v1Z",
                    fill: s[0],
                }),
                (0, g.jsx)("path", { d: "M8 9h-1V4h1v5Z", fill: s[2] }),
                (0, g.jsx)("path", {
                    d: "M6 3h1v1h-1v1h-1v-1h-1v1H2V2h4v1Zm-3 1h1v-1h-1v1Z",
                    fill: s[2],
                    fillRule: "evenodd",
                }),
                (0, g.jsx)("path", { d: "M14 3h-2v1h-1v1h-1v-2h1V2h3v1Z", fill: s[2] }),
                (0, g.jsx)("path", {
                    d: "M9 9h-1V4h1v5ZM5 6h-2v-1h2v1ZM15 4h-1v1h-1v1h-2v-1h1v-1h1v-1h1V2h1v2Z",
                    fill: s[1],
                }),
                (0, g.jsx)("path", { d: "M13 11v1H3v-1h10Z", fill: a?.[0] ?? "#FD7531" }),
                (0, g.jsx)("path", {
                    d: "M4 14h-1v-2h1v2ZM5 11h-2v-1h2v1ZM2 4H1V2h1v2ZM10 4h-1v-1h1v1ZM11 3h-1V2h1v1ZM5 2H2V1h3v1ZM14 2H11V1h3v1Z",
                    fill: "white",
                }),
                (0, g.jsx)("path", { d: "M12 14H4v-2h8v2ZM13 11H5v-1h8v1Z", fill: a?.[2] ?? "#FFC781" }),
                (0, g.jsx)("path", { d: "M12 14v1H4v-1h8ZM13 14h-1v-2h1v2Z", fill: a?.[1] ?? "#FFAE49" }),
                (0, g.jsx)("path", {
                    d: "M12 15v1H4v-1h8ZM4 15h-1v-1h1v1ZM13 15h-1v-1h1v1ZM7 9h2V6h4v1H10v2h4v5h-1V10H3v4H2V9h4v-2H3v-1h4v3ZM3 6H2v-1h1v1ZM14 6h-1v-1h1v1ZM2 5H1v-1h1v1ZM15 5h-1v-1h1v1ZM1 4H0V2h1v2ZM9 4h-2v-1h2v1ZM16 4h-1V2h1v2ZM7 3h-1V2h1v1ZM10 3h-1V2h1v1ZM2 2H1V1h1v1ZM6 2h-1V1h1v1ZM11 2h-1V1h1v1ZM15 2h-1V1h1v1ZM5 1H2V0h3v1ZM14 1H11V0h3v1Z",
                    fill: "black",
                }),
            ],
        });
    };

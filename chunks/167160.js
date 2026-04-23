h.d(v, { W: () => D });
var g = h(627968);
h(64700);
var B = h(996682),
    C = h(211974);
let f = ["#4282D8", "#54cfff", "#f0f0f0"],
    M = ["#6c9ca6", "#9af4dc", "#f0f0f0"],
    H = [0.1, 0.35, 1],
    Q = [
        { base: 8, tint: 1 },
        { base: 6, tint: 1 },
        { base: 8, tint: 1 },
    ],
    w = [0.1, 0.6, 1],
    t = [
        { base: 4, tint: 1 },
        { base: 1, tint: 1 },
        { base: 8, tint: 1 },
    ],
    D = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: D, secondaryTintColor: l, ...V } = A,
            { primaryColorsTransformed: s, secondaryColorsTransformed: a } = (0, C.V)({
                primaryBaseColors: f,
                primaryTintColor: D,
                primaryTintLuminances: H,
                primaryLuminanceWeights: Q,
                secondaryBaseColors: M,
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
                    d: "M11 10h1V9h3V8h-3V7h-1V4h2V3h-3v1H7V3H6V2H4v1H3v1H2v1H1v6h1v1h1v1h1v-2h4v1H7v1h1v1h2v-1h3v-1h-2v-2Z",
                    fill: s[1],
                }),
                (0, g.jsx)("path", {
                    d: "M9 11H8v1h1v-1ZM13 12h-1v1h1v-1ZM15 8h-1v1h1V8ZM12 7h-1v1h1V7ZM3 10H2v1h1v-1ZM4 11H3v2h1v-2ZM10 13H7v1h3v-1ZM10 10H9v1h1v-1Z",
                    fill: s[0],
                }),
                (0, g.jsx)("path", {
                    d: "M9 0H8v1h1V0ZM10 1H9v1h1V1ZM8 1H4v1h4V1ZM4 2H3v1h1V2ZM7 2H6v1h1V2ZM8 3H7v1h1V3ZM10 3H9v1h1V3ZM13 2h-3v1h3V2ZM14 3h-1v1h1V3ZM3 3H2v1h1V3ZM2 4H1v1h1V4ZM1 5H0v6h1V5ZM3 6H2v4h1V6ZM4 5H3v1h1V5ZM9 4H4v1h5V4Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", { d: "M9 4H8v2h1V4ZM13 4h-2v1h2V4Z", fill: "#000" }),
                (0, g.jsx)("path", {
                    d: "M12 4h-1v3h1V4ZM15 7h-3v1h3V7ZM16 8h-1v1h1V8ZM10 6H9v4h1V6ZM15 9h-3v1h3V9ZM12 10h-1v2h1v-2Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", {
                    d: "M13 11h-2v1h2v-1ZM14 12h-1v1h1v-1ZM13 13h-3v1h3v-1ZM10 14H6v1h4v-1ZM8 11H4v1h4v-1ZM6 15H5v1h1v-1ZM5 14H4v1h1v-1ZM4 13H3v1h1v-1ZM5 12H4v1h1v-1ZM7 12H6v1h1v-1ZM3 12H2v1h1v-1ZM2 11H1v1h1v-1ZM4 10H3v1h1v-1ZM9 10H8v1h1v-1Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", { d: "M9 6H8V5H4v1H3v4h1v1h4v-1h1V6Z", fill: a[1] }),
                (0, g.jsx)("path", { d: "M8 10H4v1h4v-1ZM4 9H3v1h1V9ZM9 9H8v1h1V9Z", fill: a[0] }),
                (0, g.jsx)("path", { d: "M4 6H3v1h1V6ZM6 7H5v1h1V7ZM8 5H4v1h4V5Z", fill: a[2] }),
                (0, g.jsx)("path", { d: "M8 13H7v1h1v-1Z", fill: "#000" }),
                (0, g.jsx)("path", {
                    d: "M2 5H1v2h1V5ZM4 3H3v1h1V3ZM6 2H4v1h2V2ZM13 3h-3v1h3V3ZM9 1H8v1H7v1h1v1h1V3h1V2H9V1ZM6 12H5v1H4v1h1v1h1v-1h1v-1H6v-1Z",
                    fill: s[2],
                }),
            ],
        });
    };

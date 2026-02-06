h.d(v, { i: () => Q });
var g = h(627968);
h(64700);
var B = h(996682),
    C = h(211974);
let f = ["#4E0B11", "#730E17", "#AC1F2B", "#EB2823", "#FF514C"],
    M = [0.17, 0.25, 0.4, 0.53, 0.65],
    H = [
        { base: 5, tint: 1 },
        { base: 3, tint: 1 },
        { base: 3, tint: 1 },
        { base: 3, tint: 1 },
        { base: 3, tint: 1 },
    ],
    Q = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: Q, ...w } = A,
            { primaryColorsTransformed: t } = (0, C.V)({
                primaryBaseColors: f,
                primaryTintColor: Q,
                primaryTintLuminances: M,
                primaryLuminanceWeights: H,
            });
        return (0, g.jsxs)("svg", {
            ...(0, B.A)(w),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", {
                    d: "M5 12h-1v-1h1v1ZM7 12h-1v-2h-1v-1h1V6h1v6ZM5 9h-1v-1h1v1ZM4 8h-1v-1h1v1ZM3 7H2v-1h1v1Z",
                    fill: t[1],
                }),
                (0, g.jsx)("path", {
                    d: "M5 12v-1h-1v-1H2V7h1v1h1v-1h-1v-1h2v1h1v2h-1v-1h-1v1h1v1h1v3H3v-1h2ZM7 6h-1v-1h1v1ZM8 3h-1V2h1v1Z",
                    fill: t[4],
                }),
                (0, g.jsx)("path", {
                    d: "M9 13h-1V4h1v3h1v1h-1v2h1v1h-1v2ZM12 12h-1v-1h1v1ZM11 10h-1v-1h1v1ZM12 9h-1v-1h1v1ZM13 8h-1v-1h1v1ZM14 7h-1v-1h1v1ZM10 4h-1v-1h1v1Z",
                    fill: t[0],
                }),
                (0, g.jsx)("path", {
                    d: "M2 14H1v-1h1v1ZM3 13H2v-1h1v1ZM4 12h-1v-1h1v1ZM4 6H2v2H1V5h3v1ZM12 7h-1v-1h1v1ZM13 6h-1v-1h1v1ZM7 5h-1V2h1v3ZM9 2h-2V1h2v1Z",
                    fill: "white",
                }),
                (0, g.jsx)("path", { d: "M15 13v1H10v-1h5ZM14 10h-2v-1h2v1ZM15 8h-1v-1h1v1Z", fill: t[2] }),
                (0, g.jsx)("path", {
                    d: "M8 15h-1V3h1V2h2v1h-1v1h-1v11ZM5 14H2v-1h3v1ZM12 11h-1v1h1v-1h1v1h1v1H9v-2h1v-1h1v-1h1v2Z",
                    fill: t[3],
                }),
                (0, g.jsx)("path", {
                    d: "M12 8h-1v1h-1v1h-1v-2h1v-1h2v1ZM14 9h-2v-1h1v-1h1v2ZM10 7h-1V4h1v3ZM13 7h-1v-1h1v1ZM15 7h-1v-1h-1v-1h2v2Z",
                    fill: t[3],
                }),
                (0, g.jsx)("path", {
                    d: "M7 15h1v-2h2v1h-1v2H6v-2h-1v-1h1v-1h1v3ZM5 15H1v-1h4v1ZM15 15H10v-1h5v1ZM1 14H0v-1h1v1ZM16 14h-1v-1h1v1ZM2 13H1v-1h1v1ZM15 13h-1v-1h1v1ZM4 11h-1v1H2v-2h2v1ZM14 12h-1v-1h-1v-1h2v2ZM2 10H1v-2h1v2ZM15 10h-1v-2h1v2ZM4 5H1v3H0V4h4v1ZM11 5h1v-1h4v4h-1V5H12v1h-1v1h-1V2h1v3ZM6 7h-1v-1h-1v-1h1V2h1v5ZM7 2h-1V1h1v1ZM10 2h-1V1h1v1ZM9 1h-2V0h2v1Z",
                    fill: "black",
                }),
            ],
        });
    };

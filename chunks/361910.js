h.d(v, { m: () => Q });
var g = h(627968);
h(64700);
var B = h(996682),
    C = h(211974);
let f = ["#B3269C", "#FF4CD2", "#FF7CDE", "#FD99E9"],
    M = [0.25, 0.5, 0.6, 0.7],
    H = [
        { base: 5, tint: 1 },
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
                (0, g.jsx)("path", { d: "M9 10h-2v-2h2v2Z", fill: "#FCF4A9" }),
                (0, g.jsx)("path", {
                    d: "M9 10v1h-2v-1h2ZM5 10h-1v-1h1v1ZM7 10h-1v-2h1v2ZM10 10h-1v-2h1v2ZM12 10h-1v-1h1v1ZM9 8h-2v-1h2v1ZM6 6h-1v-1h1v1ZM11 6h-1v-1h1v1Z",
                    fill: t[0],
                }),
                (0, g.jsx)("path", {
                    d: "M9 13h-1v-1h1v1ZM7 12h-1v-1h1v1ZM10 12h-1v-1h1v1ZM6 11h-1v-1h1v1ZM11 11h-1v-1h1v1ZM6 8h-1v-2h1v2ZM11 8h-1v-1h-1v-1h2v2Z",
                    fill: t[2],
                }),
                (0, g.jsx)("path", { d: "M8 15h-1v-1h1v1ZM5 3h-1v1h-1V2h2v1Z", fill: "#0E7941" }),
                (0, g.jsx)("path", { d: "M9 15h-1v-1h1v1ZM13 4h-1v-1h-1V2h2v2Z", fill: "#054725" }),
                (0, g.jsx)("path", {
                    d: "M11 15h-1v-1h1v1ZM3 14H2V11h1v3ZM10 14h-1v-1h1v1ZM4 11h-1v-1h1v1ZM2 8H1V5h2v1H2v2ZM7 7h-1v-1h1v1ZM15 6H12v-1h3v1ZM8 2h-1V1h1v1Z",
                    fill: "white",
                }),
                (0, g.jsx)("path", {
                    d: "M5 11h1v1h2v1h-1v1h-1v1H3v-1h1v-1h-1v-2h1v-1h1v1ZM13 11h1v3h-1v-1h-1v1h1v1h-2v-1h-1v-1h-1v-1h1v-1h1v-1h2v1ZM5 9H2V6h1v-1h2v4ZM12 6h3v2h-1v1H11V5h1v1ZM9 2h1v1h1v2h-1v1H6v-1h-1v-2h1V2h2V1h1v1Z",
                    fill: t[3],
                }),
                (0, g.jsx)("path", {
                    d: "M3 15H2v-1h1v1ZM14 15h-1v-1h1v1ZM4 14h-1v-1h1v1ZM13 14h-1v-1h1v1ZM9 12h-2v-1h2v1ZM7 11h-1v-1h1v1ZM10 11h-1v-1h1v1ZM6 10h-1v-2h1v2ZM11 10h-1v-2h1v2ZM7 8h-1v-1h1v1ZM10 8h-1v-1h1v1ZM9 7h-2v-1h2v1Z",
                    fill: t[1],
                }),
                (0, g.jsx)("path", {
                    d: "M6 16H2v-1h4v1ZM9 16h-2v-1h2v1ZM14 15v1H10v-1h4ZM4 10h-1v1H2v4H1V10h1v-1h2v1ZM7 15h-1v-1h1v1ZM10 15h-1v-1h1v1ZM14 10h1v5h-1V11h-1v-1h-1v-1h2v1ZM9 14h-2v-1h2v1ZM2 9H1v-1h1v1ZM15 9h-1v-1h1v1ZM5 2h-2v2h1v-1h1v2H1v3H0V4h2V1h3v1ZM14 4h2v4h-1V5H11v-2h1v1h1V2h-2V1h3v3ZM6 3h-1V2h1v1ZM11 3h-1V2h1v1ZM7 2h-1V1h1v1ZM10 2h-1V1h1v1ZM9 1h-2V0h2v1Z",
                    fill: "black",
                }),
            ],
        });
    };

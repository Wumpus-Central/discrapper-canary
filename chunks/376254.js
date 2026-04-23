h.d(v, { I: () => Q });
var g = h(627968);
h(64700);
var B = h(996682),
    C = h(211974);
let f = ["#57595f", "#847d8b", "#d1cdd5"],
    M = [0, 0.12, 0.6],
    H = [
        { base: 10, tint: 1 },
        { base: 5, tint: 1 },
        { base: 2, tint: 1 },
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
                    d: "M14 4V3h-1V2h-1V1H4v1H3v1H2v1H1v6h1v1h1v1h1v2h1v1h6v-1h1v-2h1v-1h1v-1h1V4h-1Z",
                    fill: t[2],
                }),
                (0, g.jsx)("path", {
                    d: "M4 1H3v1h1V1ZM3 2H2v1h1V2ZM2 3H1v1h1V3ZM4 12H3v2h1v-2ZM3 11H2v1h1v-1ZM5 14H4v1h1v-1ZM2 10H1v1h1v-1Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", { d: "M4 11H3v1h1v-1ZM5 13H4v1h1v-1ZM3 10H2v1h1v-1ZM7 7H4v3h3V7Z", fill: t[1] }),
                (0, g.jsx)("path", { d: "M7 8H5v2h2V8Z", fill: t[0] }),
                (0, g.jsx)("path", { d: "M12 7H9v3h3V7Z", fill: t[1] }),
                (0, g.jsx)("path", { d: "M12 8h-2v2h2V8Z", fill: t[0] }),
                (0, g.jsx)("path", { d: "M12 12.01h1v-1h-1v1ZM11 14.01h1v-1h-1v1ZM13 11.01h1v-1h-1v1Z", fill: t[1] }),
                (0, g.jsx)("path", { d: "M1 4H0v6h1V4Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M2 4H1v6h1V4Z", fill: "#fff" }),
                (0, g.jsx)("path", {
                    d: "M12 2.01h1v-1h-1v1ZM13 3.01h1v-1h-1v1ZM14 4.01h1v-1h-1v1ZM12 14.01h1v-2h-1v2ZM13 12.01h1v-1h-1v1ZM11 15.01h1v-1h-1v1ZM14 11.01h1v-1h-1v1ZM15 10.01h1v-6h-1v6Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", { d: "M14 10.01h1v-6h-1v6Z", fill: t[1] }),
                (0, g.jsx)("path", { d: "M4 0v1h8V0H4Z", fill: "#000" }),
                (0, g.jsx)("path", {
                    d: "M4 2H3v1h1V2ZM3 3H2v1h1V3ZM4 4H3v1h1V4ZM12 3.01h1v-1h-1v1ZM13 4.01h1v-1h-1v1ZM4 1v1h8V1H4Z",
                    fill: "#fff",
                }),
                (0, g.jsx)("path", { d: "M5 15v1h6v-1H5Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M5 14v1h6v-1H5Z", fill: t[1] }),
                (0, g.jsx)("path", { d: "M7 13H6v2h1v-2ZM10 13H9v2h1v-2Z", fill: t[0] }),
            ],
        });
    };

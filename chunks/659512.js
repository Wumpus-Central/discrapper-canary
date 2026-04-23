h.d(v, { J: () => h5 });
var g = h(627968),
    B = h(64700),
    C = h(996682),
    f = h(310784),
    M = h.n(f);
function H(A, v, h) {
    if (!M().valid(v)) return A.map(() => "#000000");
    let g = M()(v),
        B = g.luminance();
    return A.map((A, v) => g.luminance((A * h[v].base + B * h[v].tint) / (h[v].base + h[v].tint)).hex());
}
function Q(A) {
    let {
            primaryBaseColors: v,
            primaryTintColor: h,
            primaryTintLuminances: g,
            primaryLuminanceWeights: B,
            secondaryBaseColors: C,
            secondaryTintColor: f,
            secondaryTintLuminances: M,
            secondaryLuminanceWeights: Q,
        } = A,
        w = null != h ? H(g, h, B) : v,
        t = [];
    return (
        null != C && null != M && null != Q && (t = null != f ? H(M, f, Q) : C),
        { primaryColorsTransformed: w, secondaryColorsTransformed: t }
    );
}
let w = ["#E79418", "#FAE330"],
    t = [0.5, 0.75],
    D = [
        { base: 5, tint: 1 },
        { base: 3, tint: 1 },
    ],
    l = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, ...f } = A,
            { primaryColorsTransformed: M } = Q({
                primaryBaseColors: w,
                primaryTintColor: B,
                primaryTintLuminances: t,
                primaryLuminanceWeights: D,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(f),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", {
                    d: "M8 5v1H5v-1h3ZM5 5h-1v-1h1v1ZM11 5h-1v-1h1v1ZM4 4h-1V2h1v2ZM10 4h-1v-1h1v1ZM9 3h-1V2h1v1ZM8 2h-1V1h1v1Z",
                    fill: "#B7DBF6",
                }),
                (0, g.jsx)("path", { d: "M9 6h-1v-1H5v-1h-1V1h2v1h1v1h1v1h1v2ZM13 7h1v1h-1z", fill: "white" }),
                (0, g.jsx)("path", { d: "M13 8h1v1h-2v-2h1v1Z", fill: "#B7DBF6" }),
                (0, g.jsx)("path", {
                    d: "M4 11h-1v-1h1v1ZM6 11h-1v-1h1v1ZM10 11h-1v-1h-1V7h1v-1h1v5ZM7 10h-1v-1h1v1ZM4 9h-1v-1h1v1ZM7 8h-1v1h-1v-2h2v1ZM4 7h-1v-1h1v1Z",
                    fill: M[1],
                }),
                (0, g.jsx)("path", {
                    d: "M7 13h-2v-2h1v-1h1v3ZM9 11h2v1h-1v1h-2V10h1v1ZM4 12h-1v-1h1v1ZM4 8h-1v1h1v1h-1v1H2V7h2v1ZM6 10h-1v-1h1v1ZM7 9h-1v-1h1v1Z",
                    fill: M[0],
                }),
                (0, g.jsx)("path", { d: "M5 16h-1v-1h1v1ZM8 16h-1v-1h1v1Z", fill: "black" }),
                (0, g.jsx)("path", {
                    d: "M12 5h1v-2h1v2h1v1h1v5h-1v1H12v2h-1v-1h-1v1h-1v1h-1v-1h-2v1h-1v-1h-1v-1h-1v-1h1V6h-1v-2h1v1h1v1h4v-2h1v1h1v-1h-1v-1h1V2h1v3ZM5 13h2V7h-2v6Zm4-6h-1v6h2v-1h1v-1h-1V6h-1v1Zm3 2h2v-2h-2v2Z",
                    fill: "black",
                    fillRule: "evenodd",
                }),
                (0, g.jsx)("path", {
                    d: "M11 15h-1v-1h1v1ZM3 12H2v-1h1v1ZM2 11H1v-2H0v-1h1v-1h1v4ZM3 7H2v-1h1v1ZM3 4H2V2h1v2ZM9 4h-1v-1h1v1ZM8 3h-1V2h1v1ZM10 3h-1V2h1v1ZM15 3h-1V2h1v1ZM4 2h-1V1h1v1ZM7 2h-1V1h1v1ZM9 2h-1V1h1v1ZM13 2h-1V1h1v1ZM6 1h-2V0h2v1ZM8 1h-1V0h1v1Z",
                    fill: "black",
                }),
            ],
        });
    },
    V = ["#B3269C", "#FF4CD2", "#FF7CDE", "#FD99E9"],
    s = [0.25, 0.5, 0.6, 0.7],
    Z = [
        { base: 5, tint: 1 },
        { base: 3, tint: 1 },
        { base: 3, tint: 1 },
        { base: 3, tint: 1 },
    ],
    i = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, ...f } = A,
            { primaryColorsTransformed: M } = Q({
                primaryBaseColors: V,
                primaryTintColor: B,
                primaryTintLuminances: s,
                primaryLuminanceWeights: Z,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(f),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", { d: "M9 10h-2v-2h2v2Z", fill: "#FCF4A9" }),
                (0, g.jsx)("path", {
                    d: "M9 10v1h-2v-1h2ZM5 10h-1v-1h1v1ZM7 10h-1v-2h1v2ZM10 10h-1v-2h1v2ZM12 10h-1v-1h1v1ZM9 8h-2v-1h2v1ZM6 6h-1v-1h1v1ZM11 6h-1v-1h1v1Z",
                    fill: M[0],
                }),
                (0, g.jsx)("path", {
                    d: "M9 13h-1v-1h1v1ZM7 12h-1v-1h1v1ZM10 12h-1v-1h1v1ZM6 11h-1v-1h1v1ZM11 11h-1v-1h1v1ZM6 8h-1v-2h1v2ZM11 8h-1v-1h-1v-1h2v2Z",
                    fill: M[2],
                }),
                (0, g.jsx)("path", { d: "M8 15h-1v-1h1v1ZM5 3h-1v1h-1V2h2v1Z", fill: "#0E7941" }),
                (0, g.jsx)("path", { d: "M9 15h-1v-1h1v1ZM13 4h-1v-1h-1V2h2v2Z", fill: "#054725" }),
                (0, g.jsx)("path", {
                    d: "M11 15h-1v-1h1v1ZM3 14H2V11h1v3ZM10 14h-1v-1h1v1ZM4 11h-1v-1h1v1ZM2 8H1V5h2v1H2v2ZM7 7h-1v-1h1v1ZM15 6H12v-1h3v1ZM8 2h-1V1h1v1Z",
                    fill: "white",
                }),
                (0, g.jsx)("path", {
                    d: "M5 11h1v1h2v1h-1v1h-1v1H3v-1h1v-1h-1v-2h1v-1h1v1ZM13 11h1v3h-1v-1h-1v1h1v1h-2v-1h-1v-1h-1v-1h1v-1h1v-1h2v1ZM5 9H2V6h1v-1h2v4ZM12 6h3v2h-1v1H11V5h1v1ZM9 2h1v1h1v2h-1v1H6v-1h-1v-2h1V2h2V1h1v1Z",
                    fill: M[3],
                }),
                (0, g.jsx)("path", {
                    d: "M3 15H2v-1h1v1ZM14 15h-1v-1h1v1ZM4 14h-1v-1h1v1ZM13 14h-1v-1h1v1ZM9 12h-2v-1h2v1ZM7 11h-1v-1h1v1ZM10 11h-1v-1h1v1ZM6 10h-1v-2h1v2ZM11 10h-1v-2h1v2ZM7 8h-1v-1h1v1ZM10 8h-1v-1h1v1ZM9 7h-2v-1h2v1Z",
                    fill: M[1],
                }),
                (0, g.jsx)("path", {
                    d: "M6 16H2v-1h4v1ZM9 16h-2v-1h2v1ZM14 15v1H10v-1h4ZM4 10h-1v1H2v4H1V10h1v-1h2v1ZM7 15h-1v-1h1v1ZM10 15h-1v-1h1v1ZM14 10h1v5h-1V11h-1v-1h-1v-1h2v1ZM9 14h-2v-1h2v1ZM2 9H1v-1h1v1ZM15 9h-1v-1h1v1ZM5 2h-2v2h1v-1h1v2H1v3H0V4h2V1h3v1ZM14 4h2v4h-1V5H11v-2h1v1h1V2h-2V1h3v3ZM6 3h-1V2h1v1ZM11 3h-1V2h1v1ZM7 2h-1V1h1v1ZM10 2h-1V1h1v1ZM9 1h-2V0h2v1Z",
                    fill: "black",
                }),
            ],
        });
    },
    a = ["#847D8B", "#D1CDD5"],
    E = [0.2, 0.65],
    d = [
        { base: 4, tint: 1 },
        { base: 3, tint: 1 },
    ],
    I = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, ...f } = A,
            { primaryColorsTransformed: M } = Q({
                primaryBaseColors: a,
                primaryTintColor: B,
                primaryTintLuminances: E,
                primaryLuminanceWeights: d,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(f),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsxs)("g", {
                    clipPath: "url(#clip0_290_14574)",
                    children: [
                        (0, g.jsx)("path", {
                            d: "M13 8V6H14V4H15V1H11V3H10V7H11V8H5V7H6V3H5V1H1V4H2V6H3V8H4V9H3V10H2V12H1V14H2V15H14V14H15V12H14V10H13V9H12V8H13Z",
                            fill: M[1],
                        }),
                        (0, g.jsx)("path", { d: "M5 8H4V6H3V4H2V2H4V4H5V8Z", fill: "#FF7FC0" }),
                        (0, g.jsx)("path", { d: "M12 8H11V4H12V2H14V4H13V6H12V8Z", fill: "#FF7FC0" }),
                        (0, g.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M9 11H10V12H11V13H12V15H4V13H5V12H6V11H7V9H9V11Z",
                            fill: "white",
                        }),
                        (0, g.jsx)("path", { d: "M9 12V13H7V12H9Z", fill: "#FF1B90" }),
                        (0, g.jsx)("path", { d: "M14 15V16H2V15H14Z", fill: "black" }),
                        (0, g.jsx)("path", { d: "M2 15H1V14H2V15Z", fill: "black" }),
                        (0, g.jsx)("path", { d: "M15 15H14V14H15V15Z", fill: "black" }),
                        (0, g.jsx)("path", { d: "M2 14H1V13H2V14Z", fill: M[0] }),
                        (0, g.jsx)("path", { d: "M15 14H14V13H15V14Z", fill: M[0] }),
                        (0, g.jsx)("path", { d: "M1 14H0V12H1V14Z", fill: "black" }),
                        (0, g.jsx)("path", { d: "M16 14H15V12H16V14Z", fill: "black" }),
                        (0, g.jsx)("path", { d: "M2 12H1V10H2V12Z", fill: "black" }),
                        (0, g.jsx)("path", { d: "M15 12H14V10H15V12Z", fill: "black" }),
                        (0, g.jsx)("path", { d: "M3 10H2V9H3V10Z", fill: "black" }),
                        (0, g.jsx)("path", { d: "M14 10H13V9H14V10Z", fill: "black" }),
                        (0, g.jsx)("path", { d: "M4 9H3V8H4V9Z", fill: "black" }),
                        (0, g.jsx)("path", { d: "M13 9H12V8H13V9Z", fill: "black" }),
                        (0, g.jsx)("path", { d: "M3 8H2V6H3V8Z", fill: "black" }),
                        (0, g.jsx)("path", { d: "M7 7H9V3H10V7H11V8H5V7H6V3H7V7Z", fill: "black" }),
                        (0, g.jsx)("path", { d: "M14 8H13V6H14V8Z", fill: "black" }),
                        (0, g.jsx)("path", { d: "M2 6H1V4H2V6Z", fill: "black" }),
                        (0, g.jsx)("path", { d: "M15 6H14V4H15V6Z", fill: "black" }),
                        (0, g.jsx)("path", { d: "M1 4H0V1H1V4Z", fill: "black" }),
                        (0, g.jsx)("path", { d: "M16 4H15V1H16V4Z", fill: "black" }),
                        (0, g.jsx)("path", { d: "M6 3H5V1H6V3Z", fill: "black" }),
                        (0, g.jsx)("path", { d: "M11 3H10V1H11V3Z", fill: "black" }),
                        (0, g.jsx)("path", { d: "M5 1H1V0H5V1Z", fill: "black" }),
                        (0, g.jsx)("path", { d: "M15 1H11V0H15V1Z", fill: "black" }),
                        (0, g.jsx)("path", { d: "M6 12H5V10H6V12Z", fill: "black" }),
                        (0, g.jsx)("path", { d: "M11 12H10V10H11V12Z", fill: "black" }),
                        (0, g.jsx)("path", { d: "M14 14H12V15H14V14Z", fill: M[0] }),
                        (0, g.jsx)("path", { d: "M4 14H2V15H4V14Z", fill: M[0] }),
                    ],
                }),
                (0, g.jsx)("defs", {
                    children: (0, g.jsx)("clipPath", {
                        id: "clip0_290_14574",
                        children: (0, g.jsx)("rect", { width: "16", height: "16", fill: "white" }),
                    }),
                }),
            ],
        });
    },
    e = ["#0DA9FE", "#9AF2FF"],
    n = [0.45, 0.7],
    r = [
        { base: 3, tint: 1 },
        { base: 3, tint: 1 },
    ],
    P = ["#5C0084"],
    p = [0.2],
    o = [{ base: 3, tint: 1 }],
    x = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, secondaryTintColor: f, ...M } = A,
            { primaryColorsTransformed: H, secondaryColorsTransformed: w } = Q({
                primaryBaseColors: e,
                primaryTintColor: B,
                primaryTintLuminances: n,
                primaryLuminanceWeights: r,
                secondaryBaseColors: P,
                secondaryTintColor: f,
                secondaryTintLuminances: p,
                secondaryLuminanceWeights: o,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(M),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", { d: "M7 5h1v1h-1z", fill: "white" }),
                (0, g.jsx)("path", {
                    d: "M6 10h1v1h-1v1h-1v1H2v-1h1v-1H2v1H1v-2h1v-1h4v1ZM14 10h1v2h-1v-1h-1v1h1v1H11v-1h-1v-1h-1v-1h1v-1h4v1ZM6 8H2V5h1v-1h3v4ZM13 5h1v3H10V4h3v1Z",
                    fill: H[0],
                }),
                (0, g.jsx)("path", {
                    d: "M5 14H2v-1h3v1ZM14 13v1H11v-1h3ZM2 13H1v-1h1v1ZM6 13h-1v-1h1v1ZM11 13h-1v-1h1v1ZM15 13h-1v-1h1v1ZM3 12H2v-1h1v1ZM7 12h-1v-1h1v1ZM10 12h-1v-1h1v1ZM14 12h-1v-1h1v1ZM2 6H1v-1h1v1ZM15 6h-1v-1h1v1ZM5 4h-2v1H2v-2h3v1ZM14 5h-1v-1h-2v-1h3v2Z",
                    fill: H[1],
                }),
                (0, g.jsx)("path", {
                    d: "M4 15H2v-1h2v1ZM14 14v1h-2v-1h2ZM2 14H1v-1h1v1ZM15 14h-1v-1h1v1ZM7 10h-1v-1h1v1ZM10 10h-1v-1h1v1ZM6 9H3v-1h3v1ZM13 9H10v-1h3v1ZM3 2h1v1H2v2H1V1h2v1ZM15 5h-1v-2h-2V2h1V1h2v4Z",
                    fill: w?.[0] ?? P[0],
                }),
                (0, g.jsx)("path", {
                    d: "M4 16H2v-1h2v1ZM14 16h-2v-1h2v1ZM2 15H1v-1h1v1ZM5 15h-1v-1h1v1ZM12 15h-1v-1h1v1ZM15 15h-1v-1h1v1ZM1 14H0V10h1v4ZM6 14h-1v-1h1v1Z",
                    fill: "black",
                }),
                (0, g.jsx)("path", {
                    d: "M9 4h1v5h-1v3h1v1h-1v1h-2v-1h-1v-1h1V9h-1V4h1v-1h2v1Zm-2 2h1v-1h-1v1Z",
                    fill: "#000",
                    fillRule: "evenodd",
                }),
                (0, g.jsx)("path", {
                    d: "M11 14h-1v-1h1v1ZM16 14h-1V10h1v4ZM2 10H1v-1h1v1ZM15 10h-1v-1h1v1ZM3 9H2v-1h1v1ZM14 9h-1v-1h1v1ZM1 6h1v2H1v-1H0V1h1v5ZM16 7h-1v1h-1v-2h1V1h1v6ZM6 4h-1v-1h1v1ZM11 4h-1v-1h1v1ZM5 3h-1V2h1v1ZM7 3h-1V1h1v2ZM10 3h-1V1h1v2ZM12 3h-1V2h1v1ZM4 2h-1V1h1v1ZM13 2h-1V1h1v1ZM3 1H1V0h2v1ZM6 1h-1V0h1v1ZM11 1h-1V0h1v1ZM15 1h-2V0h2v1Z",
                    fill: "black",
                }),
            ],
        });
    },
    L = ["#353639", "#74767F", "#D1CDD5"],
    b = [0.1, 0.4, 0.7],
    c = [
        { base: 10, tint: 1 },
        { base: 4, tint: 1 },
        { base: 6, tint: 1 },
    ],
    j = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, ...f } = A,
            { primaryColorsTransformed: M } = Q({
                primaryBaseColors: L,
                primaryTintColor: B,
                primaryTintLuminances: b,
                primaryLuminanceWeights: c,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(f),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", {
                    d: "M2 1H4V2H5V3H6V4H10V3H11V2H12V1H14V6H15V13H14V14H13V15H3V14H2V13H1V6H2V1Z",
                    fill: M[1],
                }),
                (0, g.jsx)("path", { d: "M13 15V16H3V15H13Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M14 15H13V14H14V15Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M14 14H13V13H14V14Z", fill: M[2] }),
                (0, g.jsx)("path", { d: "M3 14H2V13H3V14Z", fill: M[2] }),
                (0, g.jsx)("path", { d: "M3 15H2V14H3V15Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M5 2H4V1H5V2Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M6 3H5V2H6V3Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M4 1H2V0H4V1Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M11 1H12V2H11V1Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M10 2H11V3H10V2Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M10 10H11V11H10V10Z", fill: "white" }),
                (0, g.jsx)("path", { d: "M9 11H12V12H9V11Z", fill: "white" }),
                (0, g.jsx)("path", { d: "M4 11H7V12H4V11Z", fill: "white" }),
                (0, g.jsx)("path", { d: "M4 12H12V13H4V12Z", fill: "white" }),
                (0, g.jsx)("path", { d: "M3 13.0005H13V14.0005H3V13.0005Z", fill: "white" }),
                (0, g.jsx)("path", { d: "M5 10H6V11H5V10Z", fill: "white" }),
                (0, g.jsx)("path", { d: "M6 9.00024H9.99999V10.0002H6V9.00024Z", fill: "white" }),
                (0, g.jsx)("path", { d: "M12 0H14V1H12V0Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M10 4H6V3H10V4Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M15 14H14V13H15V14Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M14 13H13V12H14V13Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M2 14H1V13H2V14Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M3 13H2V12H3V13Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M16 13H15V6H16V13Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M15 6H14V0H15V6Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M2 6H1V0H2V6Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M1 13H0V6H1V13Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M10 2.99976H11V5.99976H10V2.99976Z", fill: M[0] }),
                (0, g.jsx)("path", { d: "M5 2.99976H6V5.99976H5V2.99976Z", fill: M[0] }),
                (0, g.jsx)("path", { d: "M7 3.99976H9V6.99983H7V3.99976Z", fill: M[0] }),
                (0, g.jsx)("path", { d: "M12 3H13V4H12V3Z", fill: "#FF7FC0" }),
                (0, g.jsx)("path", { d: "M13 2H14V5H13V2Z", fill: "#FF7FC0" }),
                (0, g.jsx)("path", { d: "M12 8.99994H11V7H12V8.99994Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M5 8.99994H4V7H5V8.99994Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M4 4H3V3H4V4Z", fill: "#FF7FC0" }),
                (0, g.jsx)("path", { d: "M3 5H2V2H3V5Z", fill: "#FF7FC0" }),
                (0, g.jsx)("path", { d: "M15 11H12V10H15V11Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M4 11H1V10H4V11Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M13 14H3V15H13V14Z", fill: M[2] }),
                (0, g.jsx)("path", { d: "M10 11H6V10H10V11Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M8.99999 12H7V11H8.99999V12Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M9 9H7V7H9V9Z", fill: "white" }),
            ],
        });
    },
    X = ["#05562C", "#1DAA5A"],
    F = [0.25, 0.45],
    G = [
        { base: 5, tint: 1 },
        { base: 3, tint: 1 },
    ],
    y = ["#E6CF1E"],
    Y = [0.7],
    T = [{ base: 3, tint: 1 }],
    u = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, secondaryTintColor: f, ...M } = A,
            { primaryColorsTransformed: H, secondaryColorsTransformed: w } = Q({
                primaryBaseColors: X,
                primaryTintColor: B,
                primaryTintLuminances: F,
                primaryLuminanceWeights: G,
                secondaryBaseColors: y,
                secondaryTintColor: f,
                secondaryTintLuminances: Y,
                secondaryLuminanceWeights: T,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(M),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", {
                    d: "M3 14H2v-1h1v1ZM2 13H1v-1h1v1ZM5 13h-2v-1H2v-1h3v2ZM12 10h2v1h-1v2h-2v-1h-1v-2h1v-1h1v1ZM15 12h-1v-1h1v1ZM7 5h-1v-1h-1v3h2v1h-1v2h-1v-1h-1V3h1V2h1V1h1v4ZM11 5h1v1h-1v1h-1V4h1v1ZM10 4h-1v-1h1v1Z",
                    fill: H[1],
                }),
                (0, g.jsx)("path", {
                    d: "M15 11h-1v-1h1v1ZM14 10h-2v-1h2v1ZM12 5h-1v-1h1v1ZM11 4h-1v-1h1v1ZM10 3h-1V2h1v1ZM9 2h-2V1h2v1Z",
                    fill: "white",
                }),
                (0, g.jsx)("path", {
                    d: "M4 14h-1v-1h1v1ZM3 13H2v-1h1v1ZM5 10h1v2h-1v-1h-1v-2h1v1ZM12 9h-1v1h-1V7h1v-1h1v3ZM6 5h1v2h-2V4h1v1ZM9 4h-2V2h2v2Z",
                    fill: H[0],
                }),
                (0, g.jsx)("path", {
                    d: "M10 12h1v1h3v-1h1v2h-1v1H11v-1h-1v-1h-1V5h-1v5h-1v3h-1v1h-1v1H2v-1h2v-1h1v-1h1V8h1V4h3v8ZM2 14H1v-1h1v1Z",
                    fill: w?.[0] ?? y[0],
                }),
                (0, g.jsx)("path", {
                    d: "M5 16H2v-1h3v1ZM14 15v1H11v-1h3ZM2 15H1v-1h1v1ZM6 15h-1v-1h1v1ZM11 15h-1v-1h1v1ZM15 15h-1v-1h1v1ZM1 14H0v-2h1v2ZM7 14h-1v-1h1v1ZM10 14h-1v-1h1v1ZM16 14h-1V10h1v4ZM9 13h-2V10h1V5h1v8ZM14 13h-1v-2h1v2ZM2 12H1v-1h1v1ZM4 11H2v-1h1V3h1v8ZM15 10h-1v-1h1v1ZM13 8h1v1h-2V4h1v4ZM16 9h-1v-2h1v2ZM15 7h-1v-1h1v1ZM12 4h-1v-1h1v1ZM5 3h-1V2h1v1ZM11 3h-1V2h1v1ZM6 2h-1V1h1v1ZM10 2h-1V1h1v1ZM9 1H6V0h3v1Z",
                    fill: "black",
                }),
            ],
        });
    },
    N = ["#006638", "#29BB21", "#35ED3B"],
    K = [0.2, 0.43, 0.57],
    z = [
        { base: 5, tint: 1 },
        { base: 3, tint: 1 },
        { base: 3, tint: 1 },
    ],
    O = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, ...f } = A,
            { primaryColorsTransformed: M } = Q({
                primaryBaseColors: N,
                primaryTintColor: B,
                primaryTintLuminances: K,
                primaryLuminanceWeights: z,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(f),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", {
                    d: "M6 13h-1v-1h1v1ZM2 11H1v-2h1v2ZM4 6H2v1H1v-2h3v1ZM14 6h-2v-1h2v1ZM7 2h-1v2h-1V1h2v1ZM11 2h-2V1h2v1Z",
                    fill: "white",
                }),
                (0, g.jsx)("path", {
                    d: "M9 12h1v2H5v-1h1v-2h3v1ZM14 7h-1v2h1v2h-2v-1h-1v-1h-1v-2h1v-1h3v1ZM5 10H2V6h3v4ZM10 4h-1v1H6V2h4v2Z",
                    fill: M[2],
                }),
                (0, g.jsx)("path", {
                    d: "M7 15h-2v-1h2v1ZM10 14v-2h1v3h-2v-1h1ZM10 12h-1v-1h1v1ZM4 11H2v-1h2v1ZM9 11h-2v-1h2v1ZM15 11h-1v-2h1v2ZM6 9h-1v-2h1v2ZM14 9h-1v-2h1v2ZM15 7h-1v-2h1v2ZM9 6h-2v-1h2v1ZM10 5h-1v-1h1v1ZM11 4h-1V2h1v2Z",
                    fill: M[1],
                }),
                (0, g.jsx)("path", {
                    d: "M15 15h-1v-1h1v1ZM14 14h-1v-1h1v1ZM13 13h-1v-1h1v1ZM5 12h-1v-1h1v1ZM12 12h-1v-1h1v1ZM6 11h-1v-1h1v1ZM11 11h-1v-1h1v1ZM7 10h-1v-1h1v1ZM10 10h-1v-1h1v1ZM9 9h-2v-2h2v2ZM7 7h-1v-1h1v1ZM10 7h-1v-1h1v1ZM6 6h-1v-1h1v1ZM11 6h-1v-1h1v1ZM5 5h-1v-1h1v1ZM12 5h-1v-1h1v1Z",
                    fill: M[0],
                }),
                (0, g.jsx)("path", {
                    d: "M7 16h-2v-1h2v1ZM11 16h-2v-1h2v1ZM15 15v-1h1v2h-2v-1h1ZM5 15h-1V12h1v3ZM9 15h-2v-1h2v1ZM12 13h1v1h-1v1h-1V12h1v1ZM14 15h-1v-1h1v1ZM15 14h-1v-1h1v1Z",
                    fill: "black",
                }),
                (0, g.jsx)("path", {
                    d: "M15 12h-1v1h-1v-1h-1v-1h3v1ZM4 12H1v-1h3v1ZM6 12h-1v-1h1v1ZM11 12h-1v-1h1v1ZM1 11H0v-2h1v2ZM5 11h-1v-1h1v1ZM7 11h-1v-1h1v1ZM10 11h-1v-1h1v1ZM12 11h-1v-1h1v1ZM16 11h-1v-2h1v2ZM6 10h-1v-1h1v1ZM9 10h-2v-1h2v1ZM11 10h-1v-1h1v1ZM2 9H1v-2h1v2ZM7 9h-1v-2h1v2ZM10 9h-1v-2h1v2ZM15 9h-1v-2h1v2ZM1 7H0v-2h1v2ZM6 7h-1v-1h1v1ZM9 7h-2v-1h2v1ZM11 7h-1v-1h1v1ZM16 7h-1v-2h1v2ZM5 6h-1v-1h1v1ZM7 6h-1v-1h1v1ZM10 6h-1v-1h1v1ZM12 6h-1v-1h1v1ZM4 5H1v-1h3v1ZM6 5h-1v-1h1v1ZM11 5h-1v-1h1v1ZM15 5H12v-1h3v1ZM5 4h-1V1h1v3ZM12 4h-1V1h1v3ZM9 2h-2V1h2v1ZM7 1h-2V0h2v1ZM11 1h-2V0h2v1Z",
                    fill: "black",
                }),
            ],
        });
    },
    k = ["#be0351", "#ff2c52", "#f0f0f0"],
    J = ["#4282d8", "#47baff", "#f0f0f0"],
    m = [0.1, 0.25, 1],
    W = [
        { base: 3, tint: 1 },
        { base: 2, tint: 1 },
        { base: 2, tint: 1 },
    ],
    U = [0.1, 0.25, 1],
    R = [
        { base: 3, tint: 1 },
        { base: 2, tint: 1 },
        { base: 2, tint: 1 },
    ],
    S = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, secondaryTintColor: f, ...M } = A,
            { primaryColorsTransformed: H, secondaryColorsTransformed: w } = Q({
                primaryBaseColors: k,
                primaryTintColor: B,
                primaryTintLuminances: m,
                primaryLuminanceWeights: W,
                secondaryBaseColors: J,
                secondaryTintColor: f,
                secondaryTintLuminances: U,
                secondaryLuminanceWeights: R,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(M),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", { d: "M10 4V3H9V1H7v2H6v1H5v1h1v1h1v1h2V6h1V5h1V4h-1Z", fill: w[1] }),
                (0, g.jsx)("path", { d: "M10 12v1H9v2H7v-2H6v-1H5v-1h1v-1h1V9h2v1h1v1h1v1h-1Z", fill: H[1] }),
                (0, g.jsx)("path", { d: "M7 0v1h2V0H7Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M7 1v1h2V1H7Z", fill: w[2] }),
                (0, g.jsx)("path", { d: "M7 6v1h2V6H7Z", fill: w[0] }),
                (0, g.jsx)("path", { d: "M7 1H6v2h1V1ZM1 7H0v2h1V7ZM3 7V6H1v1h2ZM6 3H5v1h1V3Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M6 4H5v1h1V4ZM7 3H6v1h1V3Z", fill: w[2] }),
                (0, g.jsx)("path", { d: "M7 9v1h2V9H7Z", fill: w[2] }),
                (0, g.jsx)("path", { d: "M7 14v1h2v-1H7ZM7 12H6v1h1v-1ZM6 11H5v1h1v-1Z", fill: H[0] }),
                (0, g.jsx)("path", { d: "M7 10H6v1h1v-1Z", fill: w[2] }),
                (0, g.jsx)("path", { d: "M9 13h1v-1H9v1ZM10 12h1v-1h-1v1ZM9 11h1v-1H9v1Z", fill: H[0] }),
                (0, g.jsx)("path", { d: "M8 4H7v1h1V4Z", fill: w[2] }),
                (0, g.jsx)("path", { d: "M10 5H9v1h1V5ZM11 4h-1v1h1V4Z", fill: w[0] }),
                (0, g.jsx)("path", { d: "M12 10h1V9h2V7h-2V6h-1V5h-1v1h-1v1H9v2h1v1h1v1h1v-1Z", fill: "#C7C7C7" }),
                (0, g.jsx)("path", { d: "M15 7h-1v2h1V7Z", fill: "#707070" }),
                (0, g.jsx)("path", { d: "M12 6V5h-1v1h1ZM11 7V6h-1v1h1Z", fill: "#fff" }),
                (0, g.jsx)("path", {
                    d: "M11 10V9h-1v1h1ZM10 9V8H9v1h1ZM13 10V9h-1v1h1ZM12 11v-1h-1v1h1Z",
                    fill: "#707070",
                }),
                (0, g.jsx)("path", { d: "M4 10H3V9H1V7h2V6h1V5h1v1h1v1h1v2H6v1H5v1H4v-1Z", fill: "#C7C7C7" }),
                (0, g.jsx)("path", { d: "M1 9h1V7H1v2Z", fill: "#fff" }),
                (0, g.jsx)("path", { d: "M6 9h1V7H6v2Z", fill: "#707070" }),
                (0, g.jsx)("path", { d: "M5 6V5H4v1h1ZM4 7V6H3v1h1ZM5 8V7H4v1h1Z", fill: "#fff" }),
                (0, g.jsx)("path", { d: "M6 10V9H5v1h1ZM5 11v-1H4v1h1Z", fill: "#707070" }),
                (0, g.jsx)("path", {
                    d: "M5 4H4v1h1V4ZM6 5H5v1h1V5ZM7 6H6v1h1V6ZM9 7H7v2h2V7ZM10 9H9v1h1V9ZM11 10h-1v1h1v-1ZM4 5H3v1h1V5ZM9 16v-1H7v1h2ZM7 13H6v2h1v-2ZM1 9v1h2V9H1ZM6 12H5v1h1v-1ZM5 11H4v1h1v-1ZM4 10H3v1h1v-1ZM9 3h1V1H9v2ZM15 9h1V7h-1v2ZM15 7V6h-2v1h2ZM10 4h1V3h-1v1ZM11 5h1V4h-1v1ZM10 6h1V5h-1v1ZM9 7h1V6H9v1ZM6 10h1V9H6v1ZM5 11h1v-1H5v1Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", {
                    d: "M11 5h1V4h-1v1ZM12 6h1V5h-1v1ZM9 15h1v-2H9v2ZM13 9v1h2V9h-2ZM10 13h1v-1h-1v1ZM11 12h1v-1h-1v1ZM12 11h1v-1h-1v1Z",
                    fill: "#000",
                }),
            ],
        });
    },
    q = ["#3f581a", "#7fb134", "#bcef42", "#f0f0f0"],
    _ = ["#008456", "#6be473", "#f0f0f0"],
    $ = [0.05, 0.35, 0.7, 1],
    AA = [
        { base: 8, tint: 1 },
        { base: 4, tint: 1 },
        { base: 2, tint: 1 },
        { base: 4, tint: 1 },
    ],
    Av = [0.15, 0.6, 1],
    Ah = [
        { base: 3, tint: 1 },
        { base: 2, tint: 1 },
        { base: 4, tint: 1 },
    ],
    Ag = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, secondaryTintColor: f, ...M } = A,
            { primaryColorsTransformed: H, secondaryColorsTransformed: w } = Q({
                primaryBaseColors: q,
                primaryTintColor: B,
                primaryTintLuminances: $,
                primaryLuminanceWeights: AA,
                secondaryBaseColors: _,
                secondaryTintColor: f,
                secondaryTintLuminances: Av,
                secondaryLuminanceWeights: Ah,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(M),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", {
                    d: "M9 1H7v4h2V1ZM11 7V6h-1V5H6v1H5v1H1v2h4v1h1v1h1v4h2v-4h1v-1h1V9h4V7h-4Z",
                    fill: H[2],
                }),
                (0, g.jsx)("path", {
                    d: "M4 0H3v1h1V0ZM6 5H5v1h1V5ZM11 5h-1v1h1V5ZM13 0h-1v1h1V0ZM14 1h-1v1h1V1ZM15 2h-1v1h1V2ZM16 3h-1v1h1V3ZM9 0H7v1h2V0Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", { d: "M9 1H7v1h2V1Z", fill: H[3] }),
                (0, g.jsx)("path", { d: "M9 3H7v1h2V3ZM9 4H7v1h2V4Z", fill: H[1] }),
                (0, g.jsx)("path", { d: "M9 12H7v1h2v-1Z", fill: H[3] }),
                (0, g.jsx)("path", { d: "M9 14H7v1h2v-1ZM9 11H7v1h2v-1Z", fill: H[1] }),
                (0, g.jsx)("path", { d: "M9 6H7v1h2V6ZM9 9H7v1h2V9ZM10 7H9v2h1V7Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M12 7h-1v2h1V7Z", fill: H[1] }),
                (0, g.jsx)("path", { d: "M7 7H6v2h1V7Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M6 6H5v2h1V6Z", fill: H[3] }),
                (0, g.jsx)("path", { d: "M3 1H2v1h1V1Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M3 1v1H2v1H1v1h3V1H3Z", fill: w[1] }),
                (0, g.jsx)("path", { d: "M4 1H3v1h1V1ZM3 2H2v1h1V2Z", fill: w[2] }),
                (0, g.jsx)("path", { d: "M4 3H1v1h3V3Z", fill: w[0] }),
                (0, g.jsx)("path", { d: "M12 12v3h1v-1h1v-1h1v-1h-3ZM1 12v1h1v1h1v1h1v-3H1Z", fill: w[1] }),
                (0, g.jsx)("path", { d: "M4 12H1v1h3v-1Z", fill: w[2] }),
                (0, g.jsx)("path", { d: "M3 13v2h1v-2H3Z", fill: w[0] }),
                (0, g.jsx)("path", { d: "M14 3V2h-1V1h-1v3h3V3h-1Z", fill: w[1] }),
                (0, g.jsx)("path", { d: "M13 1h-1v1h1V1Z", fill: w[2] }),
                (0, g.jsx)("path", { d: "M13 7h-1v1h1V7Z", fill: H[3] }),
                (0, g.jsx)("path", { d: "M15 8h-3v1h3V8Z", fill: H[1] }),
                (0, g.jsx)("path", { d: "M15 3h-3v1h3V3Z", fill: w[0] }),
                (0, g.jsx)("path", {
                    d: "M2 2H1v1h1V2ZM7 1H6v4h1V1ZM10 1H9v4h1V1ZM16 7h-1v2h1V7ZM15 6h-4v1h4V6ZM15 9h-4v1h4V9ZM1 7H0v2h1V7ZM5 6H1v1h4V6Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", { d: "M4 7H1v2h1V8h2V7Z", fill: H[3] }),
                (0, g.jsx)("path", { d: "M5 9H1v1h4V9ZM1 3H0v1h1V3ZM4 15H3v1h1v-1ZM6 10H5v1h1v-1Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M4 8H3v1h1V8ZM5 7H4v2h1V7Z", fill: H[1] }),
                (0, g.jsx)("path", { d: "M5 7H4v2h1V7Z", fill: H[0] }),
                (0, g.jsx)("path", { d: "M10 10H6v1h4v-1Z", fill: H[1] }),
                (0, g.jsx)("path", { d: "M10 5H6v1h4V5Z", fill: H[3] }),
                (0, g.jsx)("path", { d: "M11 10h-1v1h1v-1Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M11 9h-1v1h1V9Z", fill: H[1] }),
                (0, g.jsx)("path", {
                    d: "M13 15h-1v1h1v-1ZM14 14h-1v1h1v-1ZM15 13h-1v1h1v-1ZM16 12h-1v1h1v-1ZM9 15H7v1h2v-1ZM3 14H2v1h1v-1ZM2 13H1v1h1v-1ZM7 11H6v4h1v-4ZM10 11H9v4h1v-4ZM4 4H1v1h4V1H4v3ZM12 4V1h-1v4h4V4h-3Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", { d: "M1 11v1h3v3h1v-4H1ZM11 11v4h1v-3h3v-1h-4ZM1 12H0v1h1v-1Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M13 14h-1v1h1v-1ZM14 13h-1v1h1v-1ZM15 12h-1v1h1v-1Z", fill: w[0] }),
                (0, g.jsx)("path", { d: "M13 12h-1v1h1v-1Z", fill: w[2] }),
                (0, g.jsx)("path", { d: "M9 7H7v2h2V7Z", fill: H[1] }),
                (0, g.jsx)("path", { d: "M9 4H7v1h2V4ZM9 11H7v1h2v-1ZM12 7h-1v2h1V7Z", fill: H[0] }),
            ],
        });
    },
    AB = ["#FFB84B", "#FFE361"],
    AC = [0.56, 0.77],
    Af = [
        { base: 3, tint: 1 },
        { base: 3, tint: 1 },
    ],
    AM = ["#FF1C90", "#FF7FC0"],
    AH = [0.2, 0.4],
    AQ = [
        { base: 7, tint: 1 },
        { base: 3, tint: 1 },
    ],
    Aw = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, secondaryTintColor: f, ...M } = A,
            { primaryColorsTransformed: H, secondaryColorsTransformed: w } = Q({
                primaryBaseColors: AB,
                primaryTintColor: B,
                primaryTintLuminances: AC,
                primaryLuminanceWeights: Af,
                secondaryBaseColors: AM,
                secondaryTintColor: f,
                secondaryTintLuminances: AH,
                secondaryLuminanceWeights: AQ,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(M),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", {
                    d: "M0.999985 2V14H1.99998V15H14V14H15V2H14V3H13V4H11V3H9.99998V2H8.99998V1H6.99998V2H5.99998V3H4.99998V4H2.99998V3H1.99998V2H0.999985Z",
                    fill: H[1],
                }),
                (0, g.jsx)("path", { d: "M0.999985 3H1.99998L1.99998 2L0.999985 2L0.999985 3Z", fill: "white" }),
                (0, g.jsx)("path", { d: "M1.99998 4H2.99998V3H1.99998V4Z", fill: "white" }),
                (0, g.jsx)("path", { d: "M4.99998 4H5.99998V3H4.99998V4Z", fill: "white" }),
                (0, g.jsx)("path", { d: "M9.99998 4H11V3H9.99998V4Z", fill: "white" }),
                (0, g.jsx)("path", {
                    d: "M9 2.00002V1.00002H7V2.00002H6V3.00002H7V5.00002H9V3.00002H10V2.00002H9Z",
                    fill: "white",
                }),
                (0, g.jsx)("path", { d: "M2 5.00002V4.00002H1V13H2V14H3V5.00002H2Z", fill: "white" }),
                (0, g.jsx)("path", { d: "M13 5.00002V4.00002H14V15H12V5.00002H13Z", fill: H[0] }),
                (0, g.jsx)("path", { d: "M4.99999 5.00002H3V15H4.99999V5.00002Z", fill: H[0] }),
                (0, g.jsx)("path", { d: "M6.99998 15H8.99998V13H6.99998V15Z", fill: "white" }),
                (0, g.jsx)("path", {
                    d: "M10 7.00002V6.00002H9V5.00002H7V6.00002H6V7.00002H5V8.00001H6V11H7V12H9V11H10V8.00001H11V7.00002H10Z",
                    fill: w[0],
                }),
                (0, g.jsx)("path", { d: "M6.99998 12H8.99998V10H6.99998V12Z", fill: w[1] }),
                (0, g.jsx)("path", { d: "M9 7.00002V6.00002H7V7.00002H6V9.00001H10V7.00002H9Z", fill: w[1] }),
                (0, g.jsx)("path", { d: "M6.99998 9.00002H8.99998V7.00002H6.99998V9.00002Z", fill: "white" }),
                (0, g.jsx)("path", { d: "M0.999985 15H1.99998L1.99998 14H0.999985L0.999985 15Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M1.99998 3H2.99998V2L1.99998 2V3Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M4.99998 3H5.99998V2L4.99998 2V3Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M5.99998 2L6.99998 2V1L5.99998 1V2Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M6.99998 1L8.99998 1V0L6.99998 0V1Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M2.99998 4L4.99998 4V3H2.99998V4Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M8.99998 2L9.99998 2V1L8.99998 1V2Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M9.99998 3H11V2L9.99998 2V3Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M13 3H14V2L13 2V3Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M11 4L13 4V3H11V4Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M14 15H15V14H14V15Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M1 1.00002V1.52588e-05H0V14H1V2.00002H2V1.00002H1Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M15 1.52588e-05V1.00002H14V2.00002H15V14H16V1.52588e-05H15Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M14 15H1.99998V16H14V15Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M6.99998 13H8.99998V12H6.99998V13Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M8.99998 12H9.99998V11H8.99998V12Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M5.99998 12H6.99998V11H5.99998V12Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M4.99998 11H5.99998V8H4.99998V11Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M9.99998 11H11V8H9.99998V11Z", fill: "black" }),
            ],
        });
    },
    At = ["#4282D8", "#00BBFF"],
    AD = [0.15, 0.42],
    Al = [
        { base: 7, tint: 1 },
        { base: 3, tint: 1 },
    ],
    AV = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, ...f } = A,
            { primaryColorsTransformed: M } = Q({
                primaryBaseColors: At,
                primaryTintColor: B,
                primaryTintLuminances: AD,
                primaryLuminanceWeights: Al,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(f),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", {
                    d: "M12 2H4V3H3V4H2V5H1V8H2V9H3V10H4V11H5V12H6V13H7V14H9V13H10V12H11V11H12V10H13V9H14V8H15V5H14V4H13V3H12V2Z",
                    fill: M[1],
                }),
                (0, g.jsx)("path", { d: "M8 13H7V14H8V13Z", fill: M[0] }),
                (0, g.jsx)("path", { d: "M7 12H6V13H7V12Z", fill: M[0] }),
                (0, g.jsx)("path", { d: "M6 11H5V12H6V11Z", fill: M[0] }),
                (0, g.jsx)("path", { d: "M5 10H4V11H5V10Z", fill: M[0] }),
                (0, g.jsx)("path", { d: "M4 9H3V10H4V9Z", fill: M[0] }),
                (0, g.jsx)("path", { d: "M3 8H2V9H3V8Z", fill: M[0] }),
                (0, g.jsx)("path", { d: "M2 7H1V8H2V7Z", fill: M[0] }),
                (0, g.jsx)("path", { d: "M4 3H3V4H4V3Z", fill: "white" }),
                (0, g.jsx)("path", { d: "M3 4H2V5H3V4Z", fill: "white" }),
                (0, g.jsx)("path", {
                    d: "M12 7.00001V8.00001H11V9.00001H9.99997V10H8.99997V11H7.99997V13H8.99997V12H9.99997V11H11V10H12V9.00001H13V8.00001H14V7.00001H12Z",
                    fill: M[0],
                }),
                (0, g.jsx)("path", {
                    opacity: "0.5",
                    d: "M4 7.00001V8.00001H5V9.00001H6V10H7V11H8V13H7V12H6V11H5V10H4V9.00001H3V8.00001H2V7.00001H4Z",
                    fill: "white",
                }),
                (0, g.jsx)("path", { d: "M2 5H1V7.00001H2V5Z", fill: "white" }),
                (0, g.jsx)("path", { d: "M4 2V3L12 3V2L4 2Z", fill: "white" }),
                (0, g.jsx)("path", {
                    d: "M7.99802 6.99598V10.996H6.99802V9.99598H5.99802V8.99598H4.99802V7.99598H3.99802V6.99598H7.99802Z",
                    fill: "white",
                }),
                (0, g.jsx)("path", {
                    d: "M7.99802 6.99598H11.998V5.99598H10.998V4.99598H9.99802V3.99598H8.99802V2.99598H7.99802V6.99598Z",
                    fill: "white",
                }),
                (0, g.jsx)("path", {
                    opacity: "0.5",
                    d: "M14.998 4.99598V6.99598H11.998V2.99598H12.998V3.99598H13.998V4.99598H14.998Z",
                    fill: "white",
                }),
                (0, g.jsx)("path", {
                    d: "M3.99997 3.00001V6.00001H4.99997V5.00001H5.99997V4.00001H6.99997V3.00001H3.99997Z",
                    fill: M[0],
                }),
                (0, g.jsx)("path", { d: "M2 4H1V5H2V4Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M2 8H1V9H2V8Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M3 9H2V10H3V9Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M4 10H3V11H4V10Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M5 11H4V12H5V11Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M6 12H5V13H6V12Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M7 13H6V14H7V13Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M3 3H2V4H3V3Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M4 2H3V3H4V2Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M14 5H15V4H14V5Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M14 9H15V8H14V9Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M13 10H14V9H13V10Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M12 11H13V10H12V11Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M11 12H12V11H11V12Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M10 13H11V12H10V13Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M9 14H10V13H9V14Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M13 4H14V3H13V4Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M12 3H13V2L12 2V3Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M1 5H0V8H1V5Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M16 5H15V8H16V5Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M7 14V15H9V14H7Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M4 1V2L12 2V1L4 1Z", fill: "black" }),
            ],
        });
    },
    As = ["#705224", "#F6A830"],
    AZ = ["#FFE880"],
    Ai = [0.05, 0.4],
    Aa = [
        { base: 5, tint: 1 },
        { base: 3, tint: 1 },
    ],
    AE = [0.8],
    Ad = [{ base: 6, tint: 1 }],
    AI = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, secondaryTintColor: f, ...M } = A,
            { primaryColorsTransformed: H, secondaryColorsTransformed: w } = Q({
                primaryBaseColors: As,
                primaryTintColor: B,
                primaryTintLuminances: Ai,
                primaryLuminanceWeights: Aa,
                secondaryBaseColors: AZ,
                secondaryTintColor: f,
                secondaryTintLuminances: AE,
                secondaryLuminanceWeights: Ad,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(M),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", {
                    d: "M3 2.00002V5.00002H11V6.00001H9.99997V7.00001H8.99997V8.00001L15 8.00001V10H14V11H8V14H1V10V4.00002H2V2.00002H3Z",
                    fill: H[1],
                }),
                (0, g.jsx)("path", {
                    d: "M8 8.00002V9.00002H7V11H6V12H3V11H2V10H1V14H8V11H14V10H15V8.00002H8Z",
                    fill: w[0],
                }),
                (0, g.jsx)("path", { d: "M9 12H8V14H9V12Z", fill: "#FF1C90" }),
                (0, g.jsx)("path", { d: "M7.99997 2.00002H6.99997V4.00002H7.99997V2.00002Z", fill: H[1] }),
                (0, g.jsx)("path", { d: "M5 2.00002V1.00002L3 1.00002V2.00002H5Z", fill: H[1] }),
                (0, g.jsx)("path", { d: "M4 5H6V2L4 2L4 5Z", fill: "#FF7FC0" }),
                (0, g.jsx)("path", { d: "M8 4H10V2H8V4Z", fill: "#FF7FC0" }),
                (0, g.jsx)("path", { d: "M9 12V15H11V12H9Z", fill: "#FF7FC0" }),
                (0, g.jsx)("path", { d: "M12 8V9H13V10H15V8H12Z", fill: H[0] }),
                (0, g.jsx)("path", { d: "M9 1.00002H8V2.00002H9V1.00002Z", fill: H[1] }),
                (0, g.jsx)("path", { d: "M10 1.00002H9V2.00002H10V1.00002Z", fill: "#FF7FC0" }),
                (0, g.jsx)("path", { d: "M12 6.00002H11V7.00002H12V6.00002Z", fill: H[1] }),
                (0, g.jsx)("path", { d: "M9 14H1V15H9V14Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M1 14L1 4.00002H0L0 14H1Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M2 2.00002H1V4.00002H2V2.00002Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M4 2.00002H3V5.00002H4V2.00002Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M11 16V15H9V16H11Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M6 9H7V6H6V9Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M3 1.00002H2V2.00002H3V1.00002Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M8 1.00002H7V2.00002H8V1.00002Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M3 5.00002H2V6.00002H3V5.00002Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M12 5.00002H11V6.00002H12V5.00002Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M14 10V11H7.99997V12H11V15H12V13H13V12H15V10H14Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M13 7V6H12V7H11V6H9.99997V7H8.99997V8H15V10H16V7H13Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M2.99997 0V1H4.99997V2H5.99997V0H2.99997Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M7.99997 0V1H9.99997V4H6.99997V2H5.99997V5H11V0H7.99997Z", fill: "black" }),
            ],
        });
    },
    Ae = ["#008456", "#6BE473"],
    An = [0.17, 0.6],
    Ar = [
        { base: 5, tint: 1 },
        { base: 3, tint: 1 },
    ],
    AP = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, ...f } = A,
            { primaryColorsTransformed: M } = Q({
                primaryBaseColors: Ae,
                primaryTintColor: B,
                primaryTintLuminances: An,
                primaryLuminanceWeights: Ar,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(f),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", { d: "M16 11.9295V9H15V11.9295H16Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M16 12V9H15V12H16Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M1 7L1 4H0L0 7H1Z", fill: "black" }),
                (0, g.jsx)("path", {
                    d: "M15 7V3H11V1H5.00002V3H2.00002V4H1.00002V7H2.00002V8H5.00002V9H1.00002V13H5.00002V15H11V13H14V12H15V9H14V8H11V7H15Z",
                    fill: M[1],
                }),
                (0, g.jsx)("path", { d: "M15 12H14V13H15V12Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M13 9H12V10H13V9Z", fill: "white" }),
                (0, g.jsx)("path", { d: "M12 8H8V9H12V8Z", fill: "white" }),
                (0, g.jsx)("path", { d: "M5 3H2V4H5V3Z", fill: "white" }),
                (0, g.jsx)("path", { d: "M7 9H6V10H7V9Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M8 6H7V7H8V6Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M8 5H7V6H8V5Z", fill: M[0] }),
                (0, g.jsx)("path", { d: "M7 10H6V11H7V10Z", fill: M[0] }),
                (0, g.jsx)("path", { d: "M6 9H5V10H6V9Z", fill: M[0] }),
                (0, g.jsx)("path", { d: "M9 6H8V7H9V6Z", fill: M[0] }),
                (0, g.jsx)("path", { d: "M2 3H1V4H2V3Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M2 4H1V5H2V4Z", fill: "white" }),
                (0, g.jsx)("path", {
                    d: "M11 13V15H5.00002V13H1.00002V9H6.00002V8H2.00002V7H1.00002V8H1.52588e-05V14H4.00002V16H12V14H14V13H11Z",
                    fill: "black",
                }),
                (0, g.jsx)("path", { d: "M13 3V7H15V3H13Z", fill: M[0] }),
                (0, g.jsx)("path", { d: "M9 1V3H11V1L9 1Z", fill: M[0] }),
                (0, g.jsx)("path", { d: "M9 13V15H11V13H9Z", fill: M[0] }),
                (0, g.jsx)("path", { d: "M14 9V8H12V9H13V12H12V13H14V12H15V9H14Z", fill: M[0] }),
                (0, g.jsx)("path", {
                    d: "M12 5V4H11V3H9.00002V1H5.00002V2H7.00002V3H8.00002V4H9.00002V5H10V6H11V7H13V5H12Z",
                    fill: "white",
                }),
                (0, g.jsx)("path", {
                    d: "M9.00002 12V11H8.00002V10H7.00002V11H6.00002V10H5.00002V9H1.00002V10H4.00002V11H5.00002V12H6.00002V13H7.00002V14H8.00002V15H9.00002V13H10V12H9.00002Z",
                    fill: "white",
                }),
                (0, g.jsx)("path", {
                    d: "M12 2V0H4.00002V2H2.00002V3H5.00002V1H11V3H12H15V7H8.00002V8H14V9H15V8H16V2H12Z",
                    fill: "black",
                }),
            ],
        });
    },
    Ap = ["#ba3500", "#fd6214", "#f0f0f0"],
    Ao = [0.1, 0.3, 1],
    Ax = [
        { base: 3, tint: 1 },
        { base: 3, tint: 1 },
        { base: 10, tint: 1 },
    ],
    AL = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, ...f } = A,
            { primaryColorsTransformed: M } = Q({
                primaryBaseColors: Ap,
                primaryTintColor: B,
                primaryTintLuminances: Ao,
                primaryLuminanceWeights: Ax,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(f),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", {
                    d: "M13 6V4h-1V1h-1v1h-1v1H9v1H8v1H3v1H2v2H1v4h1v1h1v1h1v1h8v-1h1v-1h1V6h-1Z",
                    fill: M[1],
                }),
                (0, g.jsx)("path", { d: "M0 8v4h1V8H0ZM15 9v3h1V9h-1ZM14 6v3h1V6h-1ZM13 4v2h1V4h-1Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M14 9v3h1V9h-1ZM13 6v3h1V6h-1ZM12 4v2h1V4h-1Z", fill: M[0] }),
                (0, g.jsx)("path", {
                    d: "M1 6v2h1V6H1ZM7 3H6v1h1V3ZM9 3H8v1h1V3ZM8 4H7v1h1V4ZM2 5v1h1V5H2ZM1 12v1h1v-1H1ZM2 13v1h1v-1H2ZM3 14v1h1v-1H3ZM14 12v1h1v-1h-1ZM13 13v1h1v-1h-1ZM12 14v1h1v-1h-1ZM4 15v1h8v-1H4ZM3 4v1h1V4H3ZM4 3v1h1V3H4ZM5 2v1h1V2H5ZM9 2v1h1V2H9ZM10 1v1h1V1h-1ZM11 0v1h1V0h-1Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", {
                    d: "M11 1v1h1V1h-1ZM10 2v1h1V2h-1ZM9 3v1h1V3H9ZM8 4v1h1V4H8ZM5 3v1h1V3H5ZM4 4v1h1V4H4ZM6 4v1h1V4H6Z",
                    fill: M[2],
                }),
                (0, g.jsx)("path", { d: "M5 4v1h1V4H5Z", fill: M[1] }),
                (0, g.jsx)("path", {
                    opacity: ".5",
                    d: "M11 4v1h1V4h-1ZM12 9V8h-1V6h-1v1H9v1H6V7H5v2H3v2h1v2h1v1h6v-1h1v-2h1V9h-1Z",
                    fill: "#fff",
                }),
                (0, g.jsx)("path", { d: "M3 5v1h1V5H3ZM2 6v2h1V6H2ZM4 8v1h1V8H4Z", fill: M[2] }),
                (0, g.jsx)("path", {
                    d: "M2 12v1h1v-1H2ZM3 13v1h1v-1H3ZM12 13v1h1v-1h-1ZM13 12v1h1v-1h-1ZM4 14v1h8v-1H4Z",
                    fill: M[0],
                }),
                (0, g.jsx)("path", { d: "M1 8v2h1V8H1ZM11 10h-1V9H6v1H5v2h1v1h4v-1h1v-2Z", fill: M[2] }),
                (0, g.jsx)("path", { d: "M12 1v3h1V1h-1Z", fill: "#000" }),
            ],
        });
    },
    Ab = ["#ff1c90", "#ff7fc0", "#f0f0f0"],
    Ac = ["#008456", "#6be473", "#f0f0f0"],
    Aj = [0.1, 0.45, 1],
    AX = [
        { base: 8, tint: 1 },
        { base: 4, tint: 1 },
        { base: 6, tint: 1 },
    ],
    AF = [0.1, 0.35, 1],
    AG = [
        { base: 8, tint: 1 },
        { base: 4, tint: 1 },
        { base: 6, tint: 1 },
    ],
    Ay = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, secondaryTintColor: f, ...M } = A,
            { primaryColorsTransformed: H, secondaryColorsTransformed: w } = Q({
                primaryBaseColors: Ab,
                primaryTintColor: B,
                primaryTintLuminances: Aj,
                primaryLuminanceWeights: AX,
                secondaryBaseColors: Ac,
                secondaryTintColor: f,
                secondaryTintLuminances: AF,
                secondaryLuminanceWeights: AG,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(M),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", {
                    d: "M15 2h-1V1h-3v3h-1V2H9V1H7v1H6v2H5V1H2v1H1v4h1v1h2v1h1v2h1v1h1v1h2v-1h1v-1h1V8h1V7h2V6h1V2Z",
                    fill: H[1],
                }),
                (0, g.jsx)("path", {
                    d: "M9 0H7v1h2V0ZM5 0H2v1h3V0ZM14 0h-3v1h3V0ZM15 1h-1v1h1V1ZM16 2h-1v4h1V2ZM10 1H9v1h1v2h1V1h-1ZM5 1v3h1V2h1V1H5ZM2 1H1v1h1V1ZM1 2H0v4h1V2ZM2 6H1v1h1V6ZM4 7H2v1h2V7ZM14 7h-2v1h2V7ZM15 6h-1v1h1V6ZM12 9V8h-1v2h4V9h-3ZM4 8v1H1v1h4V8H4ZM1 10H0v4h1v-4ZM2 14H1v1h1v-1ZM14 15H2v1h12v-1ZM15 14h-1v1h1v-1ZM16 10h-1v4h1v-4ZM6 10H5v1h1v-1ZM7 11H6v1h1v-1ZM10 11H9v1h1v-1ZM11 10h-1v1h1v-1ZM9 12H7v1h2v-1Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", { d: "M11 10v1h-1v1H9v1H7v-1H6v-1H5v-1H1v4h1v1h12v-1h1v-4h-4Z", fill: w[1] }),
                (0, g.jsx)("path", {
                    d: "M4 12H3v1h1v-1ZM3 11H2v1h1v-1ZM12 14v-1h-1v1H9v-1H7v1H5v-1H4v1H2v1h12v-1h-2ZM13 12h-1v1h1v-1ZM14 11h-1v1h1v-1ZM15 13h-1v1h1v-1Z",
                    fill: w[0],
                }),
                (0, g.jsx)("path", {
                    d: "M6 9H5v1h1V9ZM7 10H6v1h1v-1ZM10 10H9v1h1v-1ZM11 9h-1v1h1V9ZM12 7h-1v1h1V7ZM14 6h-1v1h1V6ZM15 4h-1v2h1V4ZM9 11H7v1h2v-1Z",
                    fill: H[0],
                }),
                (0, g.jsx)("path", {
                    d: "M10 12H9v1h1v-1ZM11 11h-1v1h1v-1ZM12 10h-1v1h1v-1ZM1 10v2h1v-1h3v-1H1Z",
                    fill: w[2],
                }),
                (0, g.jsx)("path", {
                    d: "M2 2H1v2h1V2ZM5 1H2v1h3V1ZM7 2H6v1h1V2ZM9 1H7v1h2V1ZM12 1h-1v2h1V2h2V1h-2Z",
                    fill: H[2],
                }),
            ],
        });
    };
var AY = h(132500);
let AT = ["#be0351", "#ff2c52", "#f0f0f0"],
    Au = ["#ffb84b", "#ffe361", "#f0f0f0"],
    AN = [0.3, 0.4, 1],
    AK = [
        { base: 8, tint: 1 },
        { base: 3, tint: 1 },
        { base: 2, tint: 1 },
    ],
    Az = [0.3, 0.5, 1],
    AO = [
        { base: 8, tint: 1 },
        { base: 3, tint: 1 },
        { base: 2, tint: 1 },
    ],
    Ak = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: f, secondaryTintColor: M, ...H } = A,
            w = B.useMemo(() => `badge-force-gradient-${(0, AY.A)()}`, []),
            { primaryColorsTransformed: t, secondaryColorsTransformed: D } = Q({
                primaryBaseColors: AT,
                primaryTintColor: f,
                primaryTintLuminances: AN,
                primaryLuminanceWeights: AK,
                secondaryBaseColors: Au,
                secondaryTintColor: M,
                secondaryTintLuminances: Az,
                secondaryLuminanceWeights: AO,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(H),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", {
                    d: "M7 0H4v1h3V0ZM11 1H7v1h4V1ZM9 6H8v4h1V6ZM1 5H0v6h1V5ZM15 2h-4v1h4V2Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", { d: "M7 1H4v1h3V1ZM11 2H7v1h4V2Z", fill: D[2] }),
                (0, g.jsx)("path", { d: "M15 3h-4v1h4V3Z", fill: t[2] }),
                (0, g.jsx)("path", { d: "M7 15H4v1h3v-1Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M6 14v-1H5v-2H4V5h1V3h1V2H4v1H2v4H1v4h1v2h1v1h1v1h3v-1H6Z", fill: D[1] }),
                (0, g.jsx)("path", { d: "M7 14H4v1h3v-1Z", fill: D[0] }),
                (0, g.jsx)("path", { d: "M11 14H7v1h4v-1Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M10 13v-1H9v-2H8V6h1V4h1V3H7v1H6v3H5v4h1v2h1v1h4v-1h-1Z", fill: D[1] }),
                (0, g.jsx)("path", {
                    d: "M15 13h-4v1h4v-1ZM4 1H3v1h1V1ZM3 2H2v1h1V2ZM2 3H1v2h1V3ZM16 3h-1v1h1V3ZM15 4h-1v1h1V4ZM14 5h-1v2h1V5ZM16 12h-1v1h1v-1ZM15 11h-1v1h1v-1ZM14 9h-1v2h1V9ZM13 7h-1v2h1V7ZM4 14H3v1h1v-1ZM3 13H2v1h1v-1ZM2 11H1v2h1v-2ZM5 5H4v6h1V5ZM7 2H6v1h1V2ZM6 3H5v2h1V3Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", { d: "M2 5H1v2h1V5ZM6 5H5v2h1V5Z", fill: D[2] }),
                (0, g.jsx)("path", { d: "M5 3H4v2h1V3Z", fill: D[0] }),
                (0, g.jsx)("path", { d: "M11 3h-1v1h1V3Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M4 2H3v1h1V2Z", fill: D[2] }),
                (0, g.jsx)("path", {
                    d: "M6 2H5v1h1V2ZM9 4H8v2h1V4ZM10 3H9v1h1V3ZM5 11H4v1h1v-1ZM4 13H3v1h1v-1ZM3 11H2v2h1v-2ZM8 13v-1H7v-1H6v2h1v1h4v-1H8ZM9 10H8v1h1v-1Z",
                    fill: D[0],
                }),
                (0, g.jsx)("path", {
                    d: "M10 13v-1H9v-2H8V6h1V4h1V3H7v1H6v3H5v4h1v2h1v1h4v-1h-1Z",
                    fill: `url(#${w})`,
                }),
                (0, g.jsx)("path", { d: "M14 12v-1h-1V9h-1V7h1V5h1V4h-3v1h-1v1H9v4h1v2h1v1h4v-1h-1Z", fill: t[1] }),
                (0, g.jsx)("path", {
                    d: "M13 5h-1v2h1V5ZM14 4h-1v1h1V4ZM13 9h-1v1h1V9ZM12 12v-1h-2v1h1v1h4v-1h-3Z",
                    fill: t[0],
                }),
                (0, g.jsx)("path", { d: "M3 3H2v1h1V3ZM3 7H2v1h1V7ZM7 3H6v1h1V3Z", fill: D[2] }),
                (0, g.jsx)("path", { d: "M11 4h-1v1h1V4ZM10 6H9v1h1V6Z", fill: t[2] }),
                (0, g.jsx)("path", {
                    d: "M10 4H9v2h1V4ZM7 13H6v1h1v-1ZM6 11H5v2h1v-2ZM11 12h-1v1h1v-1ZM10 10H9v2h1v-2Z",
                    fill: "#000",
                }),
                (0, g.jsx)("defs", {
                    children: (0, g.jsxs)("radialGradient", {
                        id: w,
                        cx: "0.75",
                        cy: "0.5",
                        r: "1",
                        fx: "0.75",
                        fy: "0.5",
                        children: [
                            (0, g.jsx)("stop", { stopColor: t[1], offset: "30%" }),
                            (0, g.jsx)("stop", { stopColor: D[1], offset: "70%" }),
                        ],
                    }),
                }),
            ],
        });
    },
    AJ = ["#008456", "#6BE473"],
    Am = [0.2, 0.5],
    AW = [
        { base: 5, tint: 1 },
        { base: 3, tint: 1 },
    ],
    AU = ["#FFB84B", "#FFE361"],
    AR = [0.4, 0.8],
    AS = [
        { base: 5, tint: 1 },
        { base: 3, tint: 1 },
    ],
    Aq = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, secondaryTintColor: f, ...M } = A,
            { primaryColorsTransformed: H, secondaryColorsTransformed: w } = Q({
                primaryBaseColors: AJ,
                primaryTintColor: B,
                primaryTintLuminances: Am,
                primaryLuminanceWeights: AW,
                secondaryBaseColors: AU,
                secondaryTintColor: f,
                secondaryTintLuminances: AR,
                secondaryLuminanceWeights: AS,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(M),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", {
                    d: "M9 2V3H7V2H3V3H2V7H1V12H2V13H4V14H12V13H14V12H15V7H14V3H13V2H9Z",
                    fill: H[1],
                }),
                (0, g.jsx)("path", { d: "M13 3V2H10V3H13Z", fill: "white" }),
                (0, g.jsx)("path", { d: "M13 7V6H10V7H13Z", fill: "white" }),
                (0, g.jsx)("path", { d: "M14 6V3H13V6H14Z", fill: "white" }),
                (0, g.jsx)("path", { d: "M10 6V3H9V6H10Z", fill: "white" }),
                (0, g.jsx)("path", { d: "M6 3V2H3V3H6Z", fill: "white" }),
                (0, g.jsx)("path", { d: "M6 7V6H3V7H6Z", fill: "white" }),
                (0, g.jsx)("path", { d: "M7 6V3H6V6H7Z", fill: "white" }),
                (0, g.jsx)("path", { d: "M3 6V3H2V6H3Z", fill: "white" }),
                (0, g.jsx)("path", { d: "M3.00002 10V12H4.00002V13H12V12H13V10H3.00002Z", fill: w[1] }),
                (0, g.jsx)("path", { d: "M12 13H4V14H12V13Z", fill: w[0] }),
                (0, g.jsx)("path", { d: "M13 13V12H12V13H13Z", fill: w[0] }),
                (0, g.jsx)("path", { d: "M4 13V12H3.00001V13H4Z", fill: w[0] }),
                (0, g.jsx)("path", { d: "M14 13V12H13V13H14Z", fill: H[0] }),
                (0, g.jsx)("path", { d: "M3.00002 13V12H2.00001V13H3.00002Z", fill: H[0] }),
                (0, g.jsx)("path", { d: "M15 11H14V12H15V11Z", fill: H[0] }),
                (0, g.jsx)("path", { d: "M2 11H1V12H2V11Z", fill: H[0] }),
                (0, g.jsx)("path", { d: "M14 14V13H12V14H14Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M9 3V2H7V3H9Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M13 2V1L9 1V2H13Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M7 2V1L3 1V2H7Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M4 14V13H2V14H4Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M15 12H14V13H15V12Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M14 2H13V3H14V2Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M3 2H2V3H3V2Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M2 12H1V13H2V12Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M12 14H4V15H12V14Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M16 12V6.99998H15V12H16Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M15 7V3H14V7H15Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M2 7L2 3H1L1 7H2Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M1 12L1 6.99998H0L0 12H1Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M13 6V3H10V6H13Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M6 6V3H3V6H6Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M13 9H3V10H13V9Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M14 8H13V9H14V8Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M7 7H6V8H7V7Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M10 7H9V8H10V7Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M3 8H2V9H3V8Z", fill: "black" }),
            ],
        });
    },
    A_ = ["#ff1c90", "#ff7fc0", "#ffa5d3", "#f0f0f0"],
    A$ = ["#816bee", "#b79cf8", "#cdbafa", "#f0f0f0"],
    A1 = [0.1, 0.3, 0.5, 0.9],
    A0 = [
        { base: 8, tint: 1 },
        { base: 4, tint: 1 },
        { base: 3, tint: 1 },
        { base: 4, tint: 1 },
    ],
    A9 = [0.1, 0.3, 0.5, 0.9],
    A2 = [
        { base: 8, tint: 1 },
        { base: 4, tint: 1 },
        { base: 3, tint: 1 },
        { base: 4, tint: 1 },
    ],
    A3 = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, secondaryTintColor: f, ...M } = A,
            { primaryColorsTransformed: H, secondaryColorsTransformed: w } = Q({
                primaryBaseColors: A_,
                primaryTintColor: B,
                primaryTintLuminances: A1,
                primaryLuminanceWeights: A0,
                secondaryBaseColors: A$,
                secondaryTintColor: f,
                secondaryTintLuminances: A9,
                secondaryLuminanceWeights: A2,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(M),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", { d: "M13 8v1h-1v1h-1V3h-1V2H9V1H8v14h6v-1h-2v-1h1v-1h1v-1h1V8h-2Z", fill: w[1] }),
                (0, g.jsx)("path", { d: "M7 1v1H6v1H5v8H3v-1H1v4h1v1h6V1H7Z", fill: H[1] }),
                (0, g.jsx)("path", { d: "M9 0H7v1h2V0ZM7 1H6v1h1V1Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M9 1H7v1h2V1ZM7 2H6v1h1V2ZM7 6H6v1h1V6Z", fill: H[3] }),
                (0, g.jsx)("path", { d: "M5 12H4v1h1v-1Z", fill: H[2] }),
                (0, g.jsx)("path", { d: "M6 12H5v1h1v-1ZM2 13H1v1h1v-1ZM8 14H2v1h6v-1Z", fill: H[0] }),
                (0, g.jsx)("path", {
                    d: "M4 13H3v1h1v-1ZM3 12H2v1h1v-1ZM6 10V8H5v3h1v3h1v-4H6ZM7 2v3H6v1h1v3h1V2H7Z",
                    fill: H[2],
                }),
                (0, g.jsx)("path", { d: "M14 8h-1v1h1V8ZM13 9h-1v1h1V9Z", fill: w[3] }),
                (0, g.jsx)("path", { d: "M5 11H3v1h2v-1ZM3 10H1v1h2v-1Z", fill: H[3] }),
                (0, g.jsx)("path", { d: "M2 12v-2H1v2h1Z", fill: H[3] }),
                (0, g.jsx)("path", { d: "M11 3h-1v1h1V3Z", fill: w[2] }),
                (0, g.jsx)("path", { d: "M6 3H5v3h1V3Z", fill: H[3] }),
                (0, g.jsx)("path", {
                    d: "M10 1H9v1h1V1ZM11 2h-1v1h1V2ZM6 11H5v1h1v-1ZM15 11h-1v1h1v-1ZM13 12v1h-1v1h2v-2h-1ZM14 14v1H2v1h13v-2h-1ZM2 14H1v1h1v-1ZM16 7h-3v1h3V7ZM3 9H0v1h3V9Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", {
                    d: "M1 14V9H0v5h1ZM16 11V8h-1v3h1ZM6 2H5v1h1V2ZM4 3v7H3v1h2V3H4ZM12 8V3h-1v7h1V9h1V8h-1Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", {
                    d: "M9 2H8v2h1V2ZM10 6V4H9v4h1v1h1V6h-1ZM12 10h-1v1h1v-1ZM9 10H8v3h1v-3ZM11 13h-1v1h1v-1ZM11 11h-1v1h1v-1ZM12 12h-1v1h1v-1Z",
                    fill: w[2],
                }),
                (0, g.jsx)("path", { d: "M12 14v-1h-1v1H8v1h6v-1h-2ZM13 12h-1v1h1v-1ZM14 11h-1v1h1v-1Z", fill: w[0] }),
            ],
        });
    },
    A4 = ["#87553B", "#B88166"],
    A8 = [0.2, 0.5],
    A7 = [
        { base: 7, tint: 1 },
        { base: 3, tint: 1 },
    ],
    A6 = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, ...f } = A,
            { primaryColorsTransformed: M } = Q({
                primaryBaseColors: A4,
                primaryTintColor: B,
                primaryTintLuminances: A8,
                primaryLuminanceWeights: A7,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(f),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", { d: "M15 6H13V8H15V6Z", fill: M[1] }),
                (0, g.jsx)("path", { d: "M2.99998 6H0.999985V8H2.99998V6Z", fill: M[1] }),
                (0, g.jsx)("path", { d: "M9.99998 14H5.99998V5H6.99998V4H8.99998V5H9.99998V14Z", fill: M[1] }),
                (0, g.jsx)("path", { d: "M10 6V7H9V10H11V11H12V6H10Z", fill: M[0] }),
                (0, g.jsx)("path", { d: "M6 6V7H7V10H5V11H4V6H6Z", fill: M[0] }),
                (0, g.jsx)("path", { d: "M9.99998 12H5.99998V13H9.99998V12Z", fill: M[0] }),
                (0, g.jsx)("path", { d: "M15 7H13V8H15V7Z", fill: M[0] }),
                (0, g.jsx)("path", { d: "M2.99998 7H0.999985V8H2.99998V7Z", fill: M[0] }),
                (0, g.jsx)("path", { d: "M8.99998 14H6.99998V15H8.99998V14Z", fill: M[0] }),
                (0, g.jsx)("path", { d: "M9.99998 4H8.99998V5H9.99998V4Z", fill: "#D1CDD5" }),
                (0, g.jsx)("path", { d: "M6.99998 4H5.99998V5H6.99998V4Z", fill: "#D1CDD5" }),
                (0, g.jsx)("path", { d: "M11 5H9.99998V6H11V5Z", fill: "#D1CDD5" }),
                (0, g.jsx)("path", { d: "M5.99998 5H4.99998V6H5.99998V5Z", fill: "#D1CDD5" }),
                (0, g.jsx)("path", {
                    d: "M5.99998 5H3.99998V3H2.99998V2H1.99998V1H4.99998V2H5.99998V5Z",
                    fill: "white",
                }),
                (0, g.jsx)("path", { d: "M9.99998 5H12V3H13V2H14V1H11V2H9.99998V5Z", fill: "white" }),
                (0, g.jsx)("path", { d: "M12 2H11V3H12V2Z", fill: "#D1CDD5" }),
                (0, g.jsx)("path", { d: "M4.99998 2H3.99998V3H4.99998V2Z", fill: "#D1CDD5" }),
                (0, g.jsx)("path", { d: "M4.99998 0H1.99998V1H4.99998V0Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M14 0H11V1H14V0Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M5.99998 9V7H4.99999V9H5.99998Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M11 9V7H9.99999V9H11Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M8.99998 12H6.99998V13H8.99998V12Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M8.99998 10H6.99998V11H8.99998V10Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M13 5V3H12V5H11V6H12V11H13V9H15V8H13V6H15V8H16V5H13Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M5 5H4V3H3V5H0V8H1V6H3V8H1V9H3V11H4V6H5V5Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M11 11V10H10V14H11V12H12V11H11Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M9.99998 14H8.99998V15H9.99998V14Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M7 15V14H6V15H5V16H9V15H7Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M5 10V11H4V12H5V14H6V10H5Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M2 2V1H1V3H3V2H2Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M5.99998 1H4.99998V2H5.99998V1Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M9 2V3H7V2H6V4H10V2H9Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M11 1H9.99998V2H11V1Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M14 1V2H13V3H15V1H14Z", fill: "black" }),
            ],
        });
    },
    A5 = ["#ff1b90", "#ff7fc0", "#f0f0f0"],
    vA = [0.2, 0.52, 1],
    vv = [
        { base: 3, tint: 1 },
        { base: 2, tint: 1 },
        { base: 5, tint: 1 },
    ],
    vh = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, ...f } = A,
            { primaryColorsTransformed: M } = Q({
                primaryBaseColors: A5,
                primaryTintColor: B,
                primaryTintLuminances: vA,
                primaryLuminanceWeights: vv,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(f),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", {
                    d: "M7 2v1h2V2H7ZM9 1v1h4V1H9ZM13 2v1h1V2h-1ZM14 3v1h1V3h-1ZM15 4v5h1V4h-1ZM14 9v2h1V9h-1ZM13 11v1h1v-1h-1ZM11 12v1h2v-1h-2ZM9 13v1h2v-1H9ZM7 14v1h2v-1H7Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", {
                    d: "M15 4h-1V3h-1V2H9v1H7V2H3v1H2v1H1v5h1v2h1v1h2v1h2v1h2v-1h2v-1h2v-1h1V9h1V4Z",
                    fill: M[1],
                }),
                (0, g.jsx)("path", {
                    d: "M15 4h-1v5h1V4ZM14 9h-1v2h1V9ZM3 9H2v2h1V9ZM13 11h-2v1h2v-1ZM11 12H9v1h2v-1ZM9 13H7v1h2v-1ZM7 12H5v1h2v-1ZM5 11H3v1h2v-1Z",
                    fill: M[0],
                }),
                (0, g.jsx)("path", {
                    d: "M3 1v1h4V1H3ZM2 2v1h1V2H2ZM1 3v1h1V3H1ZM0 4v5h1V4H0ZM1 9v2h1V9H1ZM2 11v1h1v-1H2ZM3 12v1h2v-1H3ZM5 13v1h2v-1H5Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", { d: "M3 2v1h4V2H3ZM9 2v1h4V2H9ZM7 3v1h2V3H7Z", fill: M[2] }),
                (0, g.jsx)("path", {
                    opacity: ".6",
                    d: "M11 6V5H9v1H7V5H5v1H4v3h1v1h2.01v1h2v-1H11V9h1V6h-1Z",
                    fill: "#fff",
                }),
                (0, g.jsx)("path", { d: "M13 3v1h1V3h-1ZM2 3v1h1V3H2ZM3 4v1h1V4H3ZM1 4v2h1V4H1Z", fill: M[2] }),
            ],
        });
    },
    vg = ["#ba3500", "#fd6214", "#ffb84b", "#f0f0f0"],
    vB = ["#35363a", "#57595f", "#d8d8d8"],
    vC = [0.05, 0.15, 0.4, 0.9],
    vf = [
        { base: 8, tint: 1 },
        { base: 5, tint: 1 },
        { base: 3, tint: 1 },
        { base: 8, tint: 1 },
    ],
    vM = [0.05, 0.3, 0.95],
    vH = [
        { base: 2, tint: 1 },
        { base: 4, tint: 1 },
        { base: 4, tint: 1 },
    ],
    vQ = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, secondaryTintColor: f, ...M } = A,
            { primaryColorsTransformed: H, secondaryColorsTransformed: w } = Q({
                primaryBaseColors: vg,
                primaryTintColor: B,
                primaryTintLuminances: vC,
                primaryLuminanceWeights: vf,
                secondaryBaseColors: vB,
                secondaryTintColor: f,
                secondaryTintLuminances: vM,
                secondaryLuminanceWeights: vH,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(M),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", {
                    d: "M14 7V6h-1v1h-3V6H9V3h1V2H7v4H6v1H1v2h1v1h1V9h3v1h1v3H6v1h1v1h2v-1h1v-1H9v-3h1V9h3v1h1V9h1V7h-1Z",
                    fill: H[2],
                }),
                (0, g.jsx)("path", {
                    d: "M9 0H7v1h2V0ZM6 2H3v1h3V2ZM3 3H2v3h1V3ZM7 3H6v3h1V3ZM10 3H9v3h1V3ZM14 3h-1v3h1V3ZM13 2h-3v1h3V2ZM6 6H3v1h3V6ZM13 6h-3v1h3V6ZM7 1H6v1h1V1Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", {
                    d: "M6 3H5v1h1V3ZM5 4H4v1h1V4ZM13 3h-1v1h1V3ZM12 4h-1v1h1V4ZM13 10h-1v1h1v-1ZM12 11h-1v1h1v-1ZM6 10H5v1h1v-1ZM5 11H4v1h1v-1Z",
                    fill: w[1],
                }),
                (0, g.jsx)("path", { d: "M10 1H9v1h1V1ZM1 7H0v2h1V7Z", fill: "#000" }),
                (0, g.jsx)("path", {
                    d: "M5 4v1H3v1h3V4H5ZM12 4v1h-2v1h3V4h-1ZM5 11v1H3v1h3v-2H5ZM12 11v1h-2v1h3v-2h-1Z",
                    fill: w[0],
                }),
                (0, g.jsx)("path", { d: "M2 9H1v1h1V9ZM2 6H1v1h1V6ZM16 7h-1v2h1V7Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M15 7h-1v2h1V7Z", fill: H[0] }),
                (0, g.jsx)("path", { d: "M2 7H1v2h1V7Z", fill: H[3] }),
                (0, g.jsx)("path", { d: "M15 6h-1v1h1V6ZM15 9h-1v1h1V9Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M14 9h-1v1h1V9ZM7 9H6v1h1V9ZM3 9H2v1h1V9ZM10 9H9v1h1V9Z", fill: H[0] }),
                (0, g.jsx)("path", {
                    d: "M9 15H7v1h2v-1ZM6 13H3v1h3v-1ZM3 10H2v3h1v-3ZM7 10H6v3h1v-3ZM10 10H9v3h1v-3ZM14 10h-1v3h1v-3ZM13 13h-3v1h3v-1ZM6 9H3v1h3V9ZM13 9h-3v1h3V9Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", { d: "M6 8H3v1h3V8ZM13 8h-3v1h3V8Z", fill: H[0] }),
                (0, g.jsx)("path", { d: "M7 14H6v1h1v-1ZM10 14H9v1h1v-1Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M9 14H7v1h2v-1Z", fill: H[0] }),
                (0, g.jsx)("path", { d: "M9 1H7v1h2V1ZM7 2H6v1h1V1Z", fill: H[3] }),
                (0, g.jsx)("path", { d: "M10 13H9v1h1v-1Z", fill: H[0] }),
                (0, g.jsx)("path", {
                    d: "M5 3H3v2h1V4h1V3ZM12 3h-2v2h1V4h1V3ZM5 10H3v2h1v-1h1v-1ZM12 10h-2v2h1v-1h1v-1Z",
                    fill: w[2],
                }),
                (0, g.jsx)("path", {
                    d: "M9 5V4H8V2H7v3h2ZM9 6H8v1H7v1H6v1h1v2h1v3h1v-4H8V8h2V7H9V6ZM14 7h-1v1h1V7Z",
                    fill: H[1],
                }),
                (0, g.jsx)("path", { d: "M7 6H6v1h1V6ZM3 7H2v1h1V7ZM5 7H4v1h1V7Z", fill: H[1] }),
            ],
        });
    },
    vw = ["#4a8359", "#7fb134", "#bcef42", "#f0f0f0"],
    vt = [0.1, 0.2, 0.6, 0.9],
    vD = [
        { base: 4, tint: 1 },
        { base: 3, tint: 1 },
        { base: 3, tint: 1 },
        { base: 10, tint: 1 },
    ],
    vl = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, ...f } = A,
            { primaryColorsTransformed: M } = Q({
                primaryBaseColors: vw,
                primaryTintColor: B,
                primaryTintLuminances: vt,
                primaryLuminanceWeights: vD,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(f),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", { d: "M15 2V1H9v1H3v5H1v5h12V7h2V2Z", fill: M[2] }),
                (0, g.jsx)("path", { d: "M11 13v-1H5v1h6Z", fill: M[1] }),
                (0, g.jsx)("path", { d: "M15 2V1H9v1h6ZM9 3V2H5v1h4Z", fill: "#fff" }),
                (0, g.jsx)("path", { d: "M3 11v1h2v-1H3ZM13 10h-1v2h1v-2ZM15 5h-1v2h1V5ZM14 7h-1v3h1V7Z", fill: M[1] }),
                (0, g.jsx)("path", { d: "M16 1h-1v6h1V1Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M3 9H2v6h1V9Z", fill: M[0] }),
                (0, g.jsx)("path", {
                    d: "M15 0H9v1h6V0ZM11 13H5v1h6v-1ZM9 1H5v1h4V1ZM5 2H3v1h2V2ZM3 3H2v2h1V3ZM1 7H0v5h1v3h1v-3H1V7h1V5H1v2ZM13 12h-2v1h2v-1ZM14 10h-1v2h1v-2h1V7h-1v3ZM4 13h1v-1H3v3h1v-2ZM3 15H2v1h1v-1Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", { d: "M2 7h1V5H2v2ZM1 9h1V7H1v2ZM5 3H3v2h1V4h1V3Z", fill: "#fff" }),
                (0, g.jsx)("path", {
                    d: "M4 8h2V7H4v1ZM6 7h2V6H6v1ZM8 6h2V5H8v1ZM10 5h1V4h-1v1ZM11 4h1V3h-1v1Z",
                    fill: M[0],
                }),
                (0, g.jsx)("path", { d: "M5 4v1h1V4H5Z", fill: "#fff" }),
                (0, g.jsx)("path", { d: "M3 8v1h1V8H3Z", fill: M[0] }),
            ],
        });
    },
    vV = ["#ffb84b", "#ffe361", "#f0f0f0"],
    vs = [0.15, 0.5, 0.9],
    vZ = [
        { base: 5, tint: 1 },
        { base: 3, tint: 2 },
        { base: 10, tint: 1 },
    ],
    vi = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, ...f } = A,
            { primaryColorsTransformed: M } = Q({
                primaryBaseColors: vV,
                primaryTintColor: B,
                primaryTintLuminances: vs,
                primaryLuminanceWeights: vZ,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(f),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", {
                    d: "M5 6H4v1H2v2h6v2H7v1H6v1H5v1H4v1h2v-1h1v-1h1v-1h1v-1h2v-1h1V9h2V7H7V6h1V5h1V4h1V3H8v1H7v1H5v1Z",
                    fill: M[1],
                }),
                (0, g.jsx)("path", { d: "M1 7H0v2h1V7Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M2 7H1v2h1V7Z", fill: M[2] }),
                (0, g.jsx)("path", { d: "M16 7h-1v2h1V7ZM3 6H1v1h2V6ZM6 4H4v1h2V4ZM4 5H3v1h1V5Z", fill: "#000" }),
                (0, g.jsx)("path", {
                    d: "M4 6H3v1h1V6ZM5 5H4v1h1V5ZM6 6H5v1h1V6ZM7 4H6v1h1V4ZM8 3H7v1h1V3ZM8 10H7v1h1v-1ZM7 11H6v1h1v-1ZM6 12H5v1h1v-1ZM5 13H4v1h1v-1ZM4 14H3v1h1v-1Z",
                    fill: M[2],
                }),
                (0, g.jsx)("path", {
                    d: "M12 2h-1v1h1V2ZM13 9h-1v1h1V9ZM12 10h-1v1h1v-1ZM10 11H9v1h1v-1ZM9 12H8v1h1v-1ZM15 8h-1v1h1V8Z",
                    fill: M[0],
                }),
                (0, g.jsx)("path", { d: "M15 7h-1v1h1V7Z", fill: M[2] }),
                (0, g.jsx)("path", { d: "M11 3h-1v1h1V3ZM10 4H9v1h1V4ZM9 5H8v1h1V5ZM8 6H7v1h1V6Z", fill: M[0] }),
                (0, g.jsx)("path", { d: "M10 2H9v1h1V2Z", fill: M[2] }),
                (0, g.jsx)("path", { d: "M9 2H7v1h2V2ZM7 3H6v1h1V3ZM13 0h-3v1h3V0Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M13 1h-3v1h3V1Z", fill: M[2] }),
                (0, g.jsx)("path", {
                    d: "M15 6H8v1h7V6ZM10 1H9v1h1V1ZM14 1h-1v1h1V1ZM13 2h-1v1h1V2ZM12 3h-1v1h1V3ZM11 4h-1v1h1V4ZM10 5H9v1h1V5ZM15 9h-2v1h2V9ZM12 11h-2v1h2v-1ZM13 10h-1v1h1v-1ZM9 13H7v1h2v-1ZM10 12H9v1h1v-1ZM6 15H3v1h3v-1ZM8 9H1v1h7V9ZM7 14H6v1h1v-1ZM3 14H2v1h1v-1ZM4 13H3v1h1v-1ZM5 12H4v1h1v-1ZM6 11H5v1h1v-1ZM7 10H6v1h1v-1Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", { d: "M11 2h-1v1h1V2Z", fill: M[1] }),
            ],
        });
    },
    va = ["#4E0B11", "#730E17", "#AC1F2B", "#EB2823", "#FF514C"],
    vE = [0.17, 0.25, 0.4, 0.53, 0.65],
    vd = [
        { base: 5, tint: 1 },
        { base: 3, tint: 1 },
        { base: 3, tint: 1 },
        { base: 3, tint: 1 },
        { base: 3, tint: 1 },
    ],
    vI = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, ...f } = A,
            { primaryColorsTransformed: M } = Q({
                primaryBaseColors: va,
                primaryTintColor: B,
                primaryTintLuminances: vE,
                primaryLuminanceWeights: vd,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(f),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", {
                    d: "M5 12h-1v-1h1v1ZM7 12h-1v-2h-1v-1h1V6h1v6ZM5 9h-1v-1h1v1ZM4 8h-1v-1h1v1ZM3 7H2v-1h1v1Z",
                    fill: M[1],
                }),
                (0, g.jsx)("path", {
                    d: "M5 12v-1h-1v-1H2V7h1v1h1v-1h-1v-1h2v1h1v2h-1v-1h-1v1h1v1h1v3H3v-1h2ZM7 6h-1v-1h1v1ZM8 3h-1V2h1v1Z",
                    fill: M[4],
                }),
                (0, g.jsx)("path", {
                    d: "M9 13h-1V4h1v3h1v1h-1v2h1v1h-1v2ZM12 12h-1v-1h1v1ZM11 10h-1v-1h1v1ZM12 9h-1v-1h1v1ZM13 8h-1v-1h1v1ZM14 7h-1v-1h1v1ZM10 4h-1v-1h1v1Z",
                    fill: M[0],
                }),
                (0, g.jsx)("path", {
                    d: "M2 14H1v-1h1v1ZM3 13H2v-1h1v1ZM4 12h-1v-1h1v1ZM4 6H2v2H1V5h3v1ZM12 7h-1v-1h1v1ZM13 6h-1v-1h1v1ZM7 5h-1V2h1v3ZM9 2h-2V1h2v1Z",
                    fill: "white",
                }),
                (0, g.jsx)("path", { d: "M15 13v1H10v-1h5ZM14 10h-2v-1h2v1ZM15 8h-1v-1h1v1Z", fill: M[2] }),
                (0, g.jsx)("path", {
                    d: "M8 15h-1V3h1V2h2v1h-1v1h-1v11ZM5 14H2v-1h3v1ZM12 11h-1v1h1v-1h1v1h1v1H9v-2h1v-1h1v-1h1v2Z",
                    fill: M[3],
                }),
                (0, g.jsx)("path", {
                    d: "M12 8h-1v1h-1v1h-1v-2h1v-1h2v1ZM14 9h-2v-1h1v-1h1v2ZM10 7h-1V4h1v3ZM13 7h-1v-1h1v1ZM15 7h-1v-1h-1v-1h2v2Z",
                    fill: M[3],
                }),
                (0, g.jsx)("path", {
                    d: "M7 15h1v-2h2v1h-1v2H6v-2h-1v-1h1v-1h1v3ZM5 15H1v-1h4v1ZM15 15H10v-1h5v1ZM1 14H0v-1h1v1ZM16 14h-1v-1h1v1ZM2 13H1v-1h1v1ZM15 13h-1v-1h1v1ZM4 11h-1v1H2v-2h2v1ZM14 12h-1v-1h-1v-1h2v2ZM2 10H1v-2h1v2ZM15 10h-1v-2h1v2ZM4 5H1v3H0V4h4v1ZM11 5h1v-1h4v4h-1V5H12v1h-1v1h-1V2h1v3ZM6 7h-1v-1h-1v-1h1V2h1v5ZM7 2h-1V1h1v1ZM10 2h-1V1h1v1ZM9 1h-2V0h2v1Z",
                    fill: "black",
                }),
            ],
        });
    },
    ve = ["#FFB84B", "#FFE361"],
    vn = [0.5, 0.77],
    vr = [
        { base: 5, tint: 1 },
        { base: 3, tint: 1 },
    ],
    vP = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, ...f } = A,
            { primaryColorsTransformed: M } = Q({
                primaryBaseColors: ve,
                primaryTintColor: B,
                primaryTintLuminances: vn,
                primaryLuminanceWeights: vr,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(f),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", {
                    d: "M1.99999 15V14H0.999985V9H1.99999V8H2.99999V7H3.99999V6H12V7H13V8H14V9H15V14H14V15H1.99999Z",
                    fill: M[1],
                }),
                (0, g.jsx)("path", { d: "M14 15H1.99999V16H14V15Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M3.00002 1V2H4.00002V3H12V2H13V1H3.00002Z", fill: M[1] }),
                (0, g.jsx)("path", { d: "M0.999996 15H2V14H0.999996L0.999996 15Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M0.999996 9H2V8H0.999996L0.999996 9Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M1.99999 9H2.99999V8H1.99999V9Z", fill: "white" }),
                (0, g.jsx)("path", { d: "M2.99999 8H3.99999V7H2.99999V8Z", fill: "white" }),
                (0, g.jsx)("path", { d: "M3.99999 7H4.99999V6H3.99999V7Z", fill: M[0] }),
                (0, g.jsx)("path", { d: "M11 7H12V6H11V7Z", fill: M[0] }),
                (0, g.jsx)("path", { d: "M8.99999 12H9.99999V8H8.99999V12Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M5.99999 12H6.99999L6.99999 8H5.99999V12Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M14 10H15V9H14V10Z", fill: M[0] }),
                (0, g.jsx)("path", { d: "M1.99999 8H2.99999V7H1.99999V8Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M2.99999 7H3.99999V6H2.99999V7Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M2.99999 3H3.99999V2L2.99999 2V3Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M3.99999 2L6.99999 2V1L3.99999 1V2Z", fill: "white" }),
                (0, g.jsx)("path", { d: "M0.999985 9L0.999985 12H1.99998L1.99998 9H0.999985Z", fill: "white" }),
                (0, g.jsx)("path", { d: "M8.99999 12H6.99999V13H8.99999V12Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M8.99999 7H6.99999V8H8.99999V7Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M8.99999 8H6.99999V12H8.99999V8Z", fill: M[0] }),
                (0, g.jsx)("path", { d: "M2 14V12H1V14H2Z", fill: M[0] }),
                (0, g.jsx)("path", { d: "M15 14V12H14V14H15Z", fill: M[0] }),
                (0, g.jsx)("path", { d: "M1.99999 15L14 15V13L1.99999 13V15Z", fill: M[0] }),
                (0, g.jsx)("path", { d: "M0 14H1L1 9H0L0 14Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M15 14H14V15H15V14Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M15 8H14V9H15V8Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M14 7H13V8H14V7Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M13 6H12V7H13V6Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M13 2H12V3H13V2Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M13 0H3.00002H2.99996H2.00002V2H3.00002V1H13V2H14V0H13Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M12 3V2L4.00002 2V3L12 3Z", fill: M[0] }),
                (0, g.jsx)("path", { d: "M5 4V6H11V4H5Z", fill: "#AD7A60" }),
                (0, g.jsx)("path", { d: "M16 9H15V14H16V9Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M4.00002 3V6H5.00002V4H11V6H12V3H4.00002Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M8.99999 8H6.99999V9H8.99999V8Z", fill: "white" }),
            ],
        });
    },
    vp = ["#816bee", "#b79cf8", "#f0f0f0"],
    vo = [0.15, 0.45, 0.9],
    vx = [
        { base: 5, tint: 1 },
        { base: 3, tint: 1 },
        { base: 5, tint: 1 },
    ],
    vL = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, ...f } = A,
            { primaryColorsTransformed: M } = Q({
                primaryBaseColors: vp,
                primaryTintColor: B,
                primaryTintLuminances: vo,
                primaryLuminanceWeights: vx,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(f),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", {
                    d: "M14 5V3h-1V2h-1V1h-2v1h1v1h1v4h-1v1h-1v1H6V8H5V7H4V3h1V2h1V1H4v1H3v1H2v2H1v6h1v2h1v1h2v1h6v-1h2v-1h1v-2h1V5h-1Z",
                    fill: M[1],
                }),
                (0, g.jsx)("path", { d: "M6 0H4v1h2V0ZM2 3H1v2h1V3ZM5 3H4v4h1V3ZM10 8H6v1h4V8Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M10 9H6v1h4V9Z", fill: M[2] }),
                (0, g.jsx)("path", { d: "M1 5H0v6h1V5ZM11 15H5v1h6v-1Z", fill: "#000" }),
                (0, g.jsx)("path", {
                    d: "M2 10H1v1h1v-1ZM13 12h-2v1H5v-1H3v-1H2v2h1v1h2v1h6v-1h2v-1h1v-2h-1v1ZM15 10h-1v1h1v-1Z",
                    fill: M[0],
                }),
                (0, g.jsx)("path", { d: "M4 1H3v1h1V1ZM3 2H2v1h1V2Z", fill: "#000" }),
                (0, g.jsx)("path", {
                    d: "M6 1H4v1h2V1ZM4 2H3v1h1V2ZM3 3H2v1h1V3ZM2 5H1v1h1V5ZM3 6H2v1h1V6ZM5 7H4v1h1V7ZM6 8H5v1h1V8ZM12 7h-1v1h1V7ZM11 1h-1v1h1V1ZM11 8h-1v1h1V8Z",
                    fill: M[2],
                }),
                (0, g.jsx)("path", {
                    d: "M7 1H6v1h1V1ZM6 2H5v1h1V2ZM6 7H5v1h1V7ZM2 11H1v2h1v-2ZM3 13H2v1h1v-1ZM12 0h-2v1h2V0ZM13 14h-2v1h2v-1ZM5 14H3v1h2v-1ZM15 3h-1v2h1V3ZM12 3h-1v4h1V3ZM16 5h-1v6h1V5ZM13 1h-1v1h1V1ZM14 2h-1v1h1V2ZM10 1H9v1h1V1ZM11 2h-1v1h1V2ZM11 7h-1v1h1V7ZM15 11h-1v2h1v-2ZM14 13h-1v1h1v-1Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", { d: "M5 2H4v1h1V2Z", fill: M[1] }),
            ],
        });
    },
    vb = ["#003E22", "#027D46", "#14A95C"],
    vc = [0.1, 0.25, 0.45],
    vj = [
        { base: 5, tint: 1 },
        { base: 3, tint: 1 },
        { base: 3, tint: 1 },
    ],
    vX = ["#FD7531", "#FFAE49", "#FFC781"],
    vF = [0.45, 0.6, 0.75],
    vG = [
        { base: 5, tint: 1 },
        { base: 3, tint: 1 },
        { base: 3, tint: 1 },
    ],
    vy = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, secondaryTintColor: f, ...M } = A,
            { primaryColorsTransformed: H, secondaryColorsTransformed: w } = Q({
                primaryBaseColors: vb,
                primaryTintColor: B,
                primaryTintLuminances: vc,
                primaryLuminanceWeights: vj,
                secondaryBaseColors: vX,
                secondaryTintColor: f,
                secondaryTintLuminances: vF,
                secondaryLuminanceWeights: vG,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(M),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", {
                    d: "M7 6h-2v-1h1v-1h1v2ZM10 5h1v1h-2v-2h1v1ZM5 5h-1v-1h1v1ZM12 5h-1v-1h1v1ZM4 4h-1v-1h1v1ZM13 4h-1v-1h1v1Z",
                    fill: H[0],
                }),
                (0, g.jsx)("path", { d: "M8 9h-1V4h1v5Z", fill: H[2] }),
                (0, g.jsx)("path", {
                    d: "M6 3h1v1h-1v1h-1v-1h-1v1H2V2h4v1Zm-3 1h1v-1h-1v1Z",
                    fill: H[2],
                    fillRule: "evenodd",
                }),
                (0, g.jsx)("path", { d: "M14 3h-2v1h-1v1h-1v-2h1V2h3v1Z", fill: H[2] }),
                (0, g.jsx)("path", {
                    d: "M9 9h-1V4h1v5ZM5 6h-2v-1h2v1ZM15 4h-1v1h-1v1h-2v-1h1v-1h1v-1h1V2h1v2Z",
                    fill: H[1],
                }),
                (0, g.jsx)("path", { d: "M13 11v1H3v-1h10Z", fill: w?.[0] ?? "#FD7531" }),
                (0, g.jsx)("path", {
                    d: "M4 14h-1v-2h1v2ZM5 11h-2v-1h2v1ZM2 4H1V2h1v2ZM10 4h-1v-1h1v1ZM11 3h-1V2h1v1ZM5 2H2V1h3v1ZM14 2H11V1h3v1Z",
                    fill: "white",
                }),
                (0, g.jsx)("path", { d: "M12 14H4v-2h8v2ZM13 11H5v-1h8v1Z", fill: w?.[2] ?? "#FFC781" }),
                (0, g.jsx)("path", { d: "M12 14v1H4v-1h8ZM13 14h-1v-2h1v2Z", fill: w?.[1] ?? "#FFAE49" }),
                (0, g.jsx)("path", {
                    d: "M12 15v1H4v-1h8ZM4 15h-1v-1h1v1ZM13 15h-1v-1h1v1ZM7 9h2V6h4v1H10v2h4v5h-1V10H3v4H2V9h4v-2H3v-1h4v3ZM3 6H2v-1h1v1ZM14 6h-1v-1h1v1ZM2 5H1v-1h1v1ZM15 5h-1v-1h1v1ZM1 4H0V2h1v2ZM9 4h-2v-1h2v1ZM16 4h-1V2h1v2ZM7 3h-1V2h1v1ZM10 3h-1V2h1v1ZM2 2H1V1h1v1ZM6 2h-1V1h1v1ZM11 2h-1V1h1v1ZM15 2h-1V1h1v1ZM5 1H2V0h3v1ZM14 1H11V0h3v1Z",
                    fill: "black",
                }),
            ],
        });
    },
    vY = ["#7fb134", "#bcef42", "#f0f0f0"],
    vT = ["#816bee", "#b79cf8"],
    vu = [0.1, 0.6, 0.95],
    vN = [
        { base: 8, tint: 1 },
        { base: 4, tint: 1 },
        { base: 8, tint: 1 },
    ],
    vK = [0.1, 0.3],
    vz = [
        { base: 8, tint: 1 },
        { base: 6, tint: 1 },
    ],
    vO = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, secondaryTintColor: f, ...M } = A,
            { primaryColorsTransformed: H, secondaryColorsTransformed: w } = Q({
                primaryBaseColors: vY,
                primaryTintColor: B,
                primaryTintLuminances: vu,
                primaryLuminanceWeights: vN,
                secondaryBaseColors: vT,
                secondaryTintColor: f,
                secondaryTintLuminances: vK,
                secondaryLuminanceWeights: vz,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(M),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", {
                    d: "M14 4V3h-1V2h-1V1H6v1H4v1H3v1H2v2H1v5h1v1h1v1h1v1h1v1h5v-1h2v-1h1v-1h1v-2h1V4h-1Z",
                    fill: H[1],
                }),
                (0, g.jsx)("path", { d: "M15 1h-2v1h2V1Z", fill: H[2] }),
                (0, g.jsx)("path", { d: "M3 13H1v1h2v-1Z", fill: H[1] }),
                (0, g.jsx)("path", { d: "M4 14H1v1h3v-1Z", fill: H[0] }),
                (0, g.jsx)("path", { d: "M15 8h-1v2h1V8Z", fill: w[0] }),
                (0, g.jsx)("path", { d: "M12 1H6v1h6V1Z", fill: H[2] }),
                (0, g.jsx)("path", { d: "M12 2H6v1h6V2Z", fill: w[1] }),
                (0, g.jsx)("path", { d: "M10 14H5v1h5v-1Z", fill: w[0] }),
                (0, g.jsx)("path", { d: "M15 2h-1v1h1V2Z", fill: H[1] }),
                (0, g.jsx)("path", { d: "M6 5H5v1h1V5ZM3 4H2v1h1V4ZM4 3H3v1h1V3Z", fill: H[2] }),
                (0, g.jsx)("path", { d: "M6 3H5v1h1V3ZM13 3h-1v1h1V3Z", fill: w[1] }),
                (0, g.jsx)("path", { d: "M5 2H4v1h1V2ZM7 6H6v1h1V6ZM2 12H1v1h1v-1Z", fill: H[2] }),
                (0, g.jsx)("path", { d: "M14 11h-1v1h1v-1ZM13 12h-1v1h1v-1ZM12 13h-1v1h1v-1Z", fill: w[0] }),
                (0, g.jsx)("path", {
                    d: "M15 1v2h-1V2h-1v1h1v1h1v6h1V1h-1ZM3 3H2v1h1V3ZM4 2h2V1H4v1H3v1h1V2ZM15 10h-1v2h1v-2ZM2 4H1v2h1V4ZM12 14h-2v1h2v-1ZM14 12h-1v1h1v-1ZM3 12H2v1h1v-1ZM4 13H3v1h1v-1ZM2 11H1v1h1v-1ZM13 13h-1v1h1v-1ZM1 6H0v9h1V6Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", { d: "M12 2h1V1h2V0H6v1h6v1ZM5 15v-1H4v1H1v1h9v-1H5Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M2 6H1v2h1V6Z", fill: H[2] }),
                (0, g.jsx)("path", {
                    d: "M10 6H8v1h2V6ZM9 10H7v1h2v-1ZM11 7h-1v2h1V7ZM3 11h2v-1H4V5H3v6ZM11 4H7v1h4V4ZM10 12H6v1h4v-1ZM15 5h-1v3h1V5ZM2 8H1v3h1V8ZM5 4H4v1h1V4ZM8 7H7v1h1V7ZM7 9H6v1h1V9ZM6 11H5v1h1v-1ZM10 9H9v1h1V9ZM11 11h-1v1h1v-1ZM12 10h-1v1h1v-1ZM7 6V5H6v1H5v3h1V6h1ZM14 4h-1v1h1V4ZM12 5h-1v1h1V5ZM13 6h-1v4h1V6ZM3 11H2v1h1v-1ZM4 12H3v1h1v-1ZM5 13H4v1h1v-1Z",
                    fill: w[1],
                }),
            ],
        });
    },
    vk = ["#57595f", "#847d8b", "#d1cdd5"],
    vJ = [0, 0.12, 0.6],
    vm = [
        { base: 10, tint: 1 },
        { base: 5, tint: 1 },
        { base: 2, tint: 1 },
    ],
    vW = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, ...f } = A,
            { primaryColorsTransformed: M } = Q({
                primaryBaseColors: vk,
                primaryTintColor: B,
                primaryTintLuminances: vJ,
                primaryLuminanceWeights: vm,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(f),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", {
                    d: "M14 4V3h-1V2h-1V1H4v1H3v1H2v1H1v6h1v1h1v1h1v2h1v1h6v-1h1v-2h1v-1h1v-1h1V4h-1Z",
                    fill: M[2],
                }),
                (0, g.jsx)("path", {
                    d: "M4 1H3v1h1V1ZM3 2H2v1h1V2ZM2 3H1v1h1V3ZM4 12H3v2h1v-2ZM3 11H2v1h1v-1ZM5 14H4v1h1v-1ZM2 10H1v1h1v-1Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", { d: "M4 11H3v1h1v-1ZM5 13H4v1h1v-1ZM3 10H2v1h1v-1ZM7 7H4v3h3V7Z", fill: M[1] }),
                (0, g.jsx)("path", { d: "M7 8H5v2h2V8Z", fill: M[0] }),
                (0, g.jsx)("path", { d: "M12 7H9v3h3V7Z", fill: M[1] }),
                (0, g.jsx)("path", { d: "M12 8h-2v2h2V8Z", fill: M[0] }),
                (0, g.jsx)("path", { d: "M12 12.01h1v-1h-1v1ZM11 14.01h1v-1h-1v1ZM13 11.01h1v-1h-1v1Z", fill: M[1] }),
                (0, g.jsx)("path", { d: "M1 4H0v6h1V4Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M2 4H1v6h1V4Z", fill: "#fff" }),
                (0, g.jsx)("path", {
                    d: "M12 2.01h1v-1h-1v1ZM13 3.01h1v-1h-1v1ZM14 4.01h1v-1h-1v1ZM12 14.01h1v-2h-1v2ZM13 12.01h1v-1h-1v1ZM11 15.01h1v-1h-1v1ZM14 11.01h1v-1h-1v1ZM15 10.01h1v-6h-1v6Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", { d: "M14 10.01h1v-6h-1v6Z", fill: M[1] }),
                (0, g.jsx)("path", { d: "M4 0v1h8V0H4Z", fill: "#000" }),
                (0, g.jsx)("path", {
                    d: "M4 2H3v1h1V2ZM3 3H2v1h1V3ZM4 4H3v1h1V4ZM12 3.01h1v-1h-1v1ZM13 4.01h1v-1h-1v1ZM4 1v1h8V1H4Z",
                    fill: "#fff",
                }),
                (0, g.jsx)("path", { d: "M5 15v1h6v-1H5Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M5 14v1h6v-1H5Z", fill: M[1] }),
                (0, g.jsx)("path", { d: "M7 13H6v2h1v-2ZM10 13H9v2h1v-2Z", fill: M[0] }),
            ],
        });
    },
    vU = ["#35363a", "#57595f", "#d8d8d8"],
    vR = ["#847d8b", "#d1cdd5", "#f0f0f0"],
    vS = [0.05, 0.2, 0.95],
    vq = [
        { base: 4, tint: 1 },
        { base: 2, tint: 1 },
        { base: 3, tint: 1 },
    ],
    v_ = [0.2, 0.5, 0.95],
    v$ = [
        { base: 4, tint: 1 },
        { base: 2, tint: 1 },
        { base: 3, tint: 1 },
    ],
    v1 = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, secondaryTintColor: f, ...M } = A,
            { primaryColorsTransformed: H, secondaryColorsTransformed: w } = Q({
                primaryBaseColors: vU,
                primaryTintColor: B,
                primaryTintLuminances: vS,
                primaryLuminanceWeights: vq,
                secondaryBaseColors: vR,
                secondaryTintColor: f,
                secondaryTintLuminances: v_,
                secondaryLuminanceWeights: v$,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(M),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", {
                    d: "M13 3V2h-2v1h-1V2H9V1H7v1H6v1H5V2H3v1H2v4h2v1h1V7h6v1h1V7h2V3h-1Z",
                    fill: w[1],
                }),
                (0, g.jsx)("path", { d: "M14 9V8h-4V7H6v1H2v1H1v3h1v1h4v1h1v1h2v-1h1v-1h4v-1h1V9h-1Z", fill: H[1] }),
                (0, g.jsx)("path", {
                    d: "M9 0H7v1h2V0ZM7 1H6v1h1V1ZM10 1H9v1h1V1ZM13 1h-2v1h2V1ZM14 2h-1v1h1V2ZM11 2h-1v1h1V2ZM6 2H5v1h1V2ZM5 1H3v1h2V1ZM2 3H1v4h1V3ZM3 2H2v1h1V2ZM2 8H1v1h1V8ZM1 9H0v3h1V9ZM2 12H1v1h1v-1ZM6 13H2v1h4v-1ZM7 14H6v1h1v-1ZM9 15H7v1h2v-1ZM10 14H9v1h1v-1ZM14 13h-4v1h4v-1ZM15 12h-1v1h1v-1ZM16 9h-1v3h1V9ZM15 8h-1v1h1V8ZM15 3h-1v4h1V3ZM5 8H4v1h1V8ZM6 7H5v1h1V7ZM10 6H6v1h4V6ZM11 7h-1v1h1V7ZM12 8h-1v1h1V8ZM13 7h-1v1h2V7h-1ZM3 7H2v1h2V7H3Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", {
                    d: "M2 11H1v1h1v-1ZM3 12H2v1h1v-1ZM7 13H6v1h1v-1ZM10 13H9v1h1v-1ZM9 14H7v1h2v-1ZM14 12h-1v1h1v-1ZM15 9h-1v3h1V9Z",
                    fill: H[0],
                }),
                (0, g.jsx)("path", {
                    d: "M3 6H2v1h1V6ZM5 7H4v1h1V7ZM12 7h-1v1h1V7ZM6 6H5v1h1V6ZM11 6h-1v1h1V6Z",
                    fill: w[0],
                }),
                (0, g.jsx)("path", { d: "M12 7h-1v1h1V7ZM10 5H6v1h4V5ZM14 4h-1v3h1V4Z", fill: w[0] }),
                (0, g.jsx)("path", {
                    d: "M4 4H3v1h1V4ZM3 3H2v1h1V3ZM5 2H3v1h2V2ZM7 2H6v1h1V2ZM9 1H7v1h2V1ZM10 2H9v1h1V2ZM13 2h-2v1h2V2ZM14 3h-1v1h1V3Z",
                    fill: w[2],
                }),
                (0, g.jsx)("path", {
                    d: "M2 9H1v1h1V9ZM3 8H2v1h1V8ZM6 8H5v1h1V8ZM10 7H6v1h4V7ZM12 9h-1v1h1V9ZM14 8h-2v1h2V8Z",
                    fill: H[2],
                }),
            ],
        });
    },
    v0 = ["#7E1B1B", "#C7531A"],
    v9 = [0.25, 0.45],
    v2 = [
        { base: 5, tint: 1 },
        { base: 3, tint: 1 },
    ],
    v3 = ["#B86F00", "#E6D23B"],
    v4 = [0.5, 0.75],
    v8 = [
        { base: 5, tint: 1 },
        { base: 3, tint: 1 },
    ],
    v7 = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, secondaryTintColor: f, ...M } = A,
            { primaryColorsTransformed: H, secondaryColorsTransformed: w } = Q({
                primaryBaseColors: v0,
                primaryTintColor: B,
                primaryTintLuminances: v9,
                primaryLuminanceWeights: v2,
                secondaryBaseColors: v3,
                secondaryTintColor: f,
                secondaryTintLuminances: v4,
                secondaryLuminanceWeights: v8,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(M),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", {
                    d: "M9 13h-1v-1h1v1ZM8 12h-1v-1h1v1ZM7 11h-1v-2h1v2ZM12 10h-1v-1h1v1ZM11 9h-1v-1h1v1ZM13 9h-1v-1h1v1ZM12 8h-1v-1h1v1ZM2 6H1v-1h1v1ZM8 5h-2v-1h2v1ZM4 2h-1V1h1v1Z",
                    fill: "white",
                }),
                (0, g.jsx)("path", {
                    d: "M8 13h-1v-1h1v1ZM12 12v-1h1v-1h1V7h-1v-1h-1v-1H8v-1h5v1h1v1h1v6h-2v1H9v-1h3ZM7 12h-1v-1h1v1Z",
                    fill: H[1],
                }),
                (0, g.jsx)("path", { d: "M10 10h2v1H8v-2h1v-1h1v2ZM13 10h-1v-1h1v1Z", fill: H[1] }),
                (0, g.jsx)("path", {
                    d: "M12 7H9v1h-1v1h-2v-1h1v-1h1v-1h4v1ZM13 8h-1v-1h1v1ZM8 6h-1v-1h1v1Z",
                    fill: H[1],
                }),
                (0, g.jsx)("path", {
                    d: "M13 13v1H7v-1h6ZM7 13h-1v-1h1v1ZM14 13h-1v-1h1v1ZM6 12h-1V9h1v3ZM12 12H8v-1h4v1ZM8 11h-1v-2h1v2ZM13 11h-1v-1h1v1ZM11 10h-1v-1h1v1ZM14 10h-1V7h1v3ZM9 9h-1v-1h1v1ZM12 9h-1v-1h1v1ZM11 8h-2v-1h2v1ZM8 7h-1v-1h1v1ZM13 7h-1v-1h1v1ZM12 6H8v-1h4v1Z",
                    fill: H[0],
                }),
                (0, g.jsx)("path", {
                    d: "M5 15h-1v-1h1v1ZM4 14h-1v-1h1v1ZM3 13H2v-1h1v1ZM3 5h2v1h1v2H2v4H1V6h1V2h1v3Z",
                    fill: w?.[1] ?? v3[1],
                }),
                (0, g.jsx)("path", {
                    d: "M5 13h1v1h-1v-1ZM7 15h-2v-1h2v1ZM15 14v1h-2v-1h2ZM3 9h1v1h1v4h-1v-1h-1v-1H2V8h1v1ZM5 4h-1v-1h1v1ZM6 3h-1V2h1v1ZM7 2h-1V1h1v1Z",
                    fill: w?.[0] ?? v3[0],
                }),
                (0, g.jsx)("path", {
                    d: "M13 15h2v-1h1v2H4v-1h3v-1h6v1ZM4 15h-1v-1h1v1ZM3 14H2v-1h1v1ZM7 14h-1v-1h1v1ZM15 14h-2v-1h1v-1h1v2ZM2 13H1v-1h1v1ZM6 13h-1v-1h1v1ZM1 12H0V5h1v7ZM16 12h-1V6h1v6ZM6 9h-1v1h-1v-1h-1v-1h3v1ZM5 1h1V0h2v2h-1V1h-1v1h-1v1h-1v1h1v-1h1V2h1v1h6v1H6v1h1v3h-1v-2h-1v-1h-2V2h1V1h-1V0h2v1ZM15 6h-1v-1h1v1ZM2 5H1V2h1v3ZM14 5h-1v-1h1v1ZM3 2H2V1h1v1Z",
                    fill: "black",
                }),
            ],
        });
    },
    v6 = ["#4282D8", "#54cfff", "#f0f0f0"],
    v5 = ["#6c9ca6", "#9af4dc", "#f0f0f0"],
    hA = [0.1, 0.35, 1],
    hv = [
        { base: 8, tint: 1 },
        { base: 6, tint: 1 },
        { base: 8, tint: 1 },
    ],
    hh = [0.1, 0.6, 1],
    hg = [
        { base: 4, tint: 1 },
        { base: 1, tint: 1 },
        { base: 8, tint: 1 },
    ],
    hB = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, secondaryTintColor: f, ...M } = A,
            { primaryColorsTransformed: H, secondaryColorsTransformed: w } = Q({
                primaryBaseColors: v6,
                primaryTintColor: B,
                primaryTintLuminances: hA,
                primaryLuminanceWeights: hv,
                secondaryBaseColors: v5,
                secondaryTintColor: f,
                secondaryTintLuminances: hh,
                secondaryLuminanceWeights: hg,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(M),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", {
                    d: "M11 10h1V9h3V8h-3V7h-1V4h2V3h-3v1H7V3H6V2H4v1H3v1H2v1H1v6h1v1h1v1h1v-2h4v1H7v1h1v1h2v-1h3v-1h-2v-2Z",
                    fill: H[1],
                }),
                (0, g.jsx)("path", {
                    d: "M9 11H8v1h1v-1ZM13 12h-1v1h1v-1ZM15 8h-1v1h1V8ZM12 7h-1v1h1V7ZM3 10H2v1h1v-1ZM4 11H3v2h1v-2ZM10 13H7v1h3v-1ZM10 10H9v1h1v-1Z",
                    fill: H[0],
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
                (0, g.jsx)("path", { d: "M9 6H8V5H4v1H3v4h1v1h4v-1h1V6Z", fill: w[1] }),
                (0, g.jsx)("path", { d: "M8 10H4v1h4v-1ZM4 9H3v1h1V9ZM9 9H8v1h1V9Z", fill: w[0] }),
                (0, g.jsx)("path", { d: "M4 6H3v1h1V6ZM6 7H5v1h1V7ZM8 5H4v1h4V5Z", fill: w[2] }),
                (0, g.jsx)("path", { d: "M8 13H7v1h1v-1Z", fill: "#000" }),
                (0, g.jsx)("path", {
                    d: "M2 5H1v2h1V5ZM4 3H3v1h1V3ZM6 2H4v1h2V2ZM13 3h-3v1h3V3ZM9 1H8v1H7v1h1v1h1V3h1V2H9V1ZM6 12H5v1H4v1h1v1h1v-1h1v-1H6v-1Z",
                    fill: H[2],
                }),
            ],
        });
    },
    hC = ["#4282d8", "#47baff", "#b5e3ff", "#f0f0f0"],
    hf = ["#816bee", "#b79cf8", "#f0f0f0"],
    hM = [0.1, 0.4, 0.8, 1],
    hH = [
        { base: 8, tint: 1 },
        { base: 2, tint: 1 },
        { base: 8, tint: 1 },
        { base: 8, tint: 1 },
    ],
    hQ = [0.1, 0.5, 1],
    hw = [
        { base: 4, tint: 1 },
        { base: 1, tint: 1 },
        { base: 8, tint: 1 },
    ],
    ht = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, secondaryTintColor: f, ...M } = A,
            { primaryColorsTransformed: H, secondaryColorsTransformed: w } = Q({
                primaryBaseColors: hC,
                primaryTintColor: B,
                primaryTintLuminances: hM,
                primaryLuminanceWeights: hH,
                secondaryBaseColors: hf,
                secondaryTintColor: f,
                secondaryTintLuminances: hQ,
                secondaryLuminanceWeights: hw,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(M),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", {
                    d: "M14 7V6h-2V5h-1V4h-1V2H9V1H7v1H6v2H5v1H4v1H2v1H1v2h1v1h2v1h1v1h1v2h1v1h2v-1h1v-2h1v-1h1v-1h2V9h1V7h-1Z",
                    fill: H[1],
                }),
                (0, g.jsx)("path", { d: "M11 7H9V6H7v1H5v2h2v1h2V9h2V7Z", fill: H[2] }),
                (0, g.jsx)("path", { d: "M3 0H1v1h2V0ZM5 1H3v1h2V1ZM4 5H2v1h2V5ZM1 1H0v2h1V1Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M3 1H1v2h1V2h1V1Z", fill: w[2] }),
                (0, g.jsx)("path", {
                    d: "M1 7H0v2h1V7ZM16 1h-1v2h1V1ZM15 3h-1v2h1V3ZM2 3H1v2h1V3ZM6 2H5v2h1V2ZM11 2h-1v2h1V2ZM7 1H6v1h1V1Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", {
                    d: "M7 2H6v1h1V2ZM8 3H7v1h1V3ZM5 5H4v1h1V5ZM3 6H2v1h1V6ZM2 7H1v1h1V7Z",
                    fill: H[3],
                }),
                (0, g.jsx)("path", { d: "M3 15v-1h2v-2H4v-1H2v2H1v2h2Z", fill: w[1] }),
                (0, g.jsx)("path", { d: "M2 13H1v1h1v-1Z", fill: w[2] }),
                (0, g.jsx)("path", { d: "M5 4H4v1h1V4Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M5 2H2v3h2V4h1V2ZM14 5V2h-3v2h1v1h2Z", fill: w[1] }),
                (0, g.jsx)("path", { d: "M5 2H4v2h1V2ZM4 4H3v1h1V4ZM14 3h-1v2h1V3ZM15 2h-1v1h1V2Z", fill: w[0] }),
                (0, g.jsx)("path", { d: "M13 15v-1h-2v-2h1v-1h2v2h1v2h-2Z", fill: w[1] }),
                (0, g.jsx)("path", { d: "M15 13h-1v1h1v-1ZM14 11h-1v1h1v-1Z", fill: w[0] }),
                (0, g.jsx)("path", {
                    d: "M2 6H1v1h1V6ZM16 7h-1v2h1V7ZM15 6h-1v1h1V6ZM10 1H9v1h1V1ZM12 4h-1v1h1V4ZM9 0H7v1h2V0Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", { d: "M9 1H7v1h2V1ZM9 7H7v2h2V7Z", fill: H[3] }),
                (0, g.jsx)("path", { d: "M15 1h-2v1h2V1ZM13 2h-2v1h2V2Z", fill: w[2] }),
                (0, g.jsx)("path", {
                    d: "M9 5H7v1h2V5ZM9 10H7v1h2v-1ZM15 0h-2v1h2V0ZM13 1h-2v1h2V1ZM14 5h-2v1h2V5ZM3 15H1v1h2v-1ZM5 14H3v1h2v-1ZM4 10H2v1h2v-1ZM1 13H0v2h1v-2ZM16 13h-1v2h1v-2ZM15 11h-1v2h1v-2ZM2 11H1v2h1v-2ZM6 12H5v2h1v-2ZM11 12h-1v2h1v-2ZM7 14H6v1h1v-1ZM5 11H4v1h1v-1Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", { d: "M5 12H4v2h1v-2ZM4 11H3v1h1v-1Z", fill: w[0] }),
                (0, g.jsx)("path", {
                    d: "M2 9H1v1h1V9ZM5 7H4v2h1V7ZM7 6H5v1h2V6ZM7 9H5v1h2V9ZM12 7h-1v2h1V7ZM11 6H9v1h2V6ZM11 9H9v1h2V9ZM15 9h-1v1h1V9Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", {
                    d: "M15 7h-1v2h1V7ZM14 6h-1v1h1V6ZM14 9h-1v1h1V9ZM12 9h-1v1h1V9ZM9 11H7v1h2v-1ZM10 10H9v1h1v-1ZM7 10H6v1h1v-1ZM9 14H7v1h2v-1ZM10 13H9v1h1v-1ZM7 13H6v1h1v-1ZM5 9H4v1h1V9ZM2 8H1v1h1V8ZM3 9H2v1h1V9Z",
                    fill: H[0],
                }),
                (0, g.jsx)("path", {
                    d: "M10 14H9v1h1v-1ZM12 11h-1v1h1v-1ZM9 15H7v1h2v-1ZM15 15h-2v1h2v-1ZM13 14h-2v1h2v-1ZM14 10h-2v1h2v-1Z",
                    fill: "#000",
                }),
            ],
        });
    },
    hD = ["#950123", "#DA1846"],
    hl = [0.2, 0.45],
    hV = [
        { base: 5, tint: 1 },
        { base: 3, tint: 1 },
    ],
    hs = ["#1F1F1F"],
    hZ = [0.15],
    hi = [{ base: 5, tint: 1 }],
    ha = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, secondaryTintColor: f, ...M } = A,
            { primaryColorsTransformed: H, secondaryColorsTransformed: w } = Q({
                primaryBaseColors: hD,
                primaryTintColor: B,
                primaryTintLuminances: hl,
                primaryLuminanceWeights: hV,
                secondaryBaseColors: hs,
                secondaryTintColor: f,
                secondaryTintLuminances: hZ,
                secondaryLuminanceWeights: hi,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(M),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", {
                    d: "M7 11h-1v-1h1v1ZM10 11h-1v-1h1v1ZM9 10h-2v-1h2v1ZM10 5h-1v1h-2v-1h-1v-2h4v2Z",
                    fill: H[1],
                }),
                (0, g.jsx)("path", {
                    d: "M9 12h-2v-2h2v2ZM6 6h1v1h2v-1h1v-1h1v3h-1v1h-1v-1h-2v1h-1v-1h-1V5h1v1Z",
                    fill: w?.[0] ?? "#1F1F1F",
                }),
                (0, g.jsx)("path", {
                    d: "M9 13v1h-2v-1h2ZM7 12h-1v-1h1v1ZM10 12h-1v-1h1v1ZM9 7h-2v-1h2v1ZM7 6h-1v-1h1v1ZM10 6h-1v-1h1v1ZM6 5h-1v-1h1v1ZM11 5h-1v-1h1v1Z",
                    fill: H[0],
                }),
                (0, g.jsx)("path", { d: "M7 14h-1v-1h1v1ZM10 14h-1v-1h1v1Z", fill: "#35ED7E" }),
                (0, g.jsx)("path", {
                    d: "M3 7h1V4h1v4h1v1h1v1h-1v2h4v-2h-1v-1h1v-1h1V4h1v3h1V3h1v1h1v3h-1v1h-1v1h-1v1h-1v1h1v-1h2v-1h2v1h-1v1h-1v1h-2v1h2v1h1v1h1v1h-2v-1h-2v-1h-2v-1H6v1h-2v1H2v1H0v-1h1v-1h1v-1h2v-1H2v-1H1v-1H0v-1h2v1h2v-1h-1v-1H2v-1H1V4h1v-1h1v4Zm1 4h1v-1h-1v1Z",
                    fill: "black",
                    fillRule: "evenodd",
                }),
                (0, g.jsx)("path", {
                    d: "M10 16h-1v-1h-2v1h-1v-2h4v2ZM9 9h-2v-1h2v1ZM6 4h-1v-1h1v1ZM11 4h-1v-1h1v1ZM4 3h-1V2h1v1ZM9 2h1v1H6V2h2V0h1v2ZM13 3h-1V2h1v1Z",
                    fill: "black",
                }),
            ],
        });
    },
    hE = ["#ffb84b", "#ffe361", "#f0f0f0"],
    hd = ["#ba3500", "#fd6214", "#f0f0f0"],
    hI = [0.07, 0.45, 1],
    he = [
        { base: 4, tint: 1 },
        { base: 3, tint: 1 },
        { base: 8, tint: 1 },
        { base: 8, tint: 1 },
    ],
    hn = [0.1, 0.4, 1],
    hr = [
        { base: 2, tint: 1 },
        { base: 1, tint: 2 },
        { base: 4, tint: 1 },
    ],
    hP = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, secondaryTintColor: f, ...M } = A,
            { primaryColorsTransformed: H, secondaryColorsTransformed: w } = Q({
                primaryBaseColors: hE,
                primaryTintColor: B,
                primaryTintLuminances: hI,
                primaryLuminanceWeights: he,
                secondaryBaseColors: hd,
                secondaryTintColor: f,
                secondaryTintLuminances: hn,
                secondaryLuminanceWeights: hr,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(M),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", {
                    d: "M14 6v1h-3V6h-1V5H9V2h1V1H1v1h2v1h1v1h2v2H5v1H4v2H3v2H2v2H1v2h3v-1h2v-1h1v-1h1v-1h2v-1h1V9h1v1h1v1h1v1h1V6h-1Z",
                    fill: H[1],
                }),
                (0, g.jsx)("path", {
                    d: "M14 0h-3v1h3V0ZM4 15H1v1h3v-1ZM6 14H4v1h2v-1ZM3 2H1v1h2V2ZM4 4v1h1v1h1V4H4ZM4 7H3v2h1V7ZM3 9H2v2h1V9ZM2 11H1v2h1v-2ZM1 13H0v2h1v-2ZM10 11H8v1h2v-1ZM10 0H1v1h9V0Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", { d: "M10 1H1v1h9V1Z", fill: H[2] }),
                (0, g.jsx)("path", { d: "M14 6h-3v1h3V6ZM11 1h-1v1h1V1Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M11 2h-1v2h1V2ZM14 1h-3v1h3V1Z", fill: w[2] }),
                (0, g.jsx)("path", { d: "M14 5h-3v1h3V5Z", fill: w[0] }),
                (0, g.jsx)("path", {
                    d: "M1 1H0v1h1V1ZM4 3H3v1h1V3ZM5 6H4v1h1V6ZM15 1h-1v1h1V1ZM16 2h-1v3h1V2Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", { d: "M15 2h-1v3h1V2Z", fill: w[0] }),
                (0, g.jsx)("path", { d: "M16 6h-1v6h1V6Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M15 6h-1v6h1V6Z", fill: H[0] }),
                (0, g.jsx)("path", { d: "M15 5h-1v1h1V5ZM10 2H9v3h1V2ZM11 5h-1v1h1V5Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M11 4h-1v1h1V4Z", fill: w[0] }),
                (0, g.jsx)("path", { d: "M7 13H6v1h1v-1Z", fill: "#000" }),
                (0, g.jsx)("path", {
                    d: "M10 7v1H9v1H8v1H7v1H6v1H5v1H4v1h2v-1h1v-1h1v-1h2v-1h1V7h-1ZM4 14H3v1h1v-1Z",
                    fill: H[0],
                }),
                (0, g.jsx)("path", { d: "M8 12H7v1h1v-1Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M5 7H4v1h1V7ZM6 6H5v1h1V6Z", fill: H[2] }),
                (0, g.jsx)("path", { d: "M7 5H6v1h1V5ZM8 4H7v1h1V4Z", fill: H[0] }),
                (0, g.jsx)("path", { d: "M6 8H5v1h1V8ZM4 9H3v1h1V9ZM3 11H2v1h1v-1ZM2 13H1v1h1v-1Z", fill: H[2] }),
                (0, g.jsx)("path", {
                    d: "M11 10h-1v1h1v-1ZM12 9h-1v1h1V9ZM13 10h-1v1h1v-1ZM14 11h-1v1h1v-1ZM15 12h-1v1h1v-1Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", { d: "M14 2h-3v3h3V2Z", fill: w[1] }),
            ],
        });
    },
    hp = ["#ffb84b", "#ffe361", "#f0f0f0"],
    ho = ["#847d8b", "#d1cdd5", "#f0f0f0"],
    hx = [0.1, 0.4, 0.7],
    hL = [
        { base: 5, tint: 1 },
        { base: 4, tint: 1 },
        { base: 3, tint: 1 },
    ],
    hb = [0.3, 0.9, 1],
    hc = [
        { base: 4, tint: 1 },
        { base: 3, tint: 1 },
        { base: 8, tint: 1 },
    ],
    hj = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, secondaryTintColor: f, ...M } = A,
            { primaryColorsTransformed: H, secondaryColorsTransformed: w } = Q({
                primaryBaseColors: hp,
                primaryTintColor: B,
                primaryTintLuminances: hx,
                primaryLuminanceWeights: hL,
                secondaryBaseColors: ho,
                secondaryTintColor: f,
                secondaryTintLuminances: hb,
                secondaryLuminanceWeights: hc,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(M),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", { d: "M11 1v1h-1v1H9v1H8v1H7v2H6v1h2v2h1V9h2V8h1V7h1V6h1V5h1V1h-4Z", fill: w[1] }),
                (0, g.jsx)("path", { d: "M3 9h1v1h2v2h1v1h2v1h2v-2H9v-1H8v-1H7V9H6V8H5V7H4V5H2v2h1v2Z", fill: H[1] }),
                (0, g.jsx)("path", { d: "M5 11H3v2h2v-2ZM3 13H1v2h2v-2Z", fill: H[1] }),
                (0, g.jsx)("path", {
                    d: "M11 1h-1v1h1V1ZM10 2H9v1h1V2ZM9 3H8v1h1V3ZM8 4H7v1h1V4ZM7 5H6v2h1V5ZM5 5H4v2h1V5ZM2 5H1v2h1V5ZM3 7H2v2h1V7ZM11 9H9v1h2V9ZM11 11H9v1h2v-1ZM12 12h-1v2h1v-2Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", { d: "M15 1h-1v4h1V1Z", fill: w[0] }),
                (0, g.jsx)("path", { d: "M1 13H0v2h1v-2ZM11 14H9v1h2v-1ZM9 13H7v1h2v-1Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M5 12H3v1h2v-1ZM3 14H1v1h2v-1Z", fill: H[0] }),
                (0, g.jsx)("path", {
                    d: "M3 14v1h1v-1h1v-1H3v1ZM6 12v-2H4V9H3v2h2v2h2v-1H6ZM3 12v-1H2v1H1v1h2v-1ZM3 15H1v1h2v-1ZM4 4H2v1h2V4ZM7 9v1h1V8H6v1h1Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", {
                    d: "M13 3h-1v1h1V3ZM12 4h-1v1h1V4ZM11 5h-1v1h1V5ZM10 6H9v1h1V6ZM9 7H8v1h1V7Z",
                    fill: w[0],
                }),
                (0, g.jsx)("path", { d: "M7 7H6v1h1V7Z", fill: w[2] }),
                (0, g.jsx)("path", {
                    d: "M4 8H3v1h1V8ZM3 6H2v1h1V6ZM5 9H4v1h1V9ZM7 11H6v1h1v-1ZM8 12H7v1h1v-1ZM10 13H9v1h1v-1Z",
                    fill: H[0],
                }),
                (0, g.jsx)("path", {
                    d: "M9 10H8v1h1v-1ZM6 7H5v1h1V7ZM15 5h-1v1h1V5ZM14 6h-1v1h1V6ZM13 7h-1v1h1V7ZM12 8h-1v1h1V8ZM11 0v1h4v4h1V0h-5Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", {
                    d: "M11 12h-1v1h1v-1ZM9 11H8v1h1v-1ZM8 10H7v1h1v-1ZM7 9H6v1h1V9ZM6 8H5v1h1V8ZM5 7H4v1h1V7Z",
                    fill: H[2],
                }),
                (0, g.jsx)("path", { d: "M8 5H7v1h3V5H9V4H8v1ZM10 2v1H9v1h3V3h-1V2h-1ZM14 1h-3v1h3V1Z", fill: w[2] }),
                (0, g.jsx)("path", {
                    d: "M14 5h-1v1h1V5ZM13 6h-1v1h1V6ZM12 7h-1v1h1V7ZM11 8h-1v1h1V8ZM9 9H8v1h1V9Z",
                    fill: w[0],
                }),
                (0, g.jsx)("path", { d: "M4 5H3v1h1V5ZM4 11H3v1h1v-1ZM2 13H1v1h1v-1Z", fill: H[2] }),
            ],
        });
    },
    hX = ["#be0351", "#ff2c52"],
    hF = ["#ffb84b", "#ffe361"],
    hG = [0.12, 0.25],
    hy = [
        { base: 5, tint: 1 },
        { base: 4, tint: 1 },
    ],
    hY = [0.4, 0.8],
    hT = [
        { base: 5, tint: 1 },
        { base: 4, tint: 1 },
    ],
    hu = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, secondaryTintColor: f, ...M } = A,
            { primaryColorsTransformed: H, secondaryColorsTransformed: w } = Q({
                primaryBaseColors: hX,
                primaryTintColor: B,
                primaryTintLuminances: hG,
                primaryLuminanceWeights: hy,
                secondaryBaseColors: hF,
                secondaryTintColor: f,
                secondaryTintLuminances: hY,
                secondaryLuminanceWeights: hT,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(M),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", { d: "M11 12v-2h-1V9H6v1H5v2H4v3h8v-3h-1Z", fill: w[1] }),
                (0, g.jsx)("path", { d: "M14 3V2h-2V1H4v1H2v1H1v6h1v1h2V9h8v1h2V9h1V3h-1Z", fill: H[1] }),
                (0, g.jsx)("path", { d: "M12 0H4v1h8V0Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M12 1H4v1h8V1ZM4 2H2v1h2V2ZM14 2h-2v1h2V2Z", fill: "#fff" }),
                (0, g.jsx)("path", { d: "M12 15H4v1h8v-1ZM1 3H0v6h1V3ZM4 1H2v1h2V1Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M2 7V3H1v6h2V7H2Z", fill: "#fff" }),
                (0, g.jsx)("path", { d: "M15 3h-1v6h1V3Z", fill: H[0] }),
                (0, g.jsx)("path", { d: "M15 6h-2v2h2V6ZM12 2h-2v2h2V2Z", fill: "#fff" }),
                (0, g.jsx)("path", { opacity: ".5", d: "M15 6h-1v2h1V6Z", fill: H[0] }),
                (0, g.jsx)("path", { d: "M10 7H6v1h4V7ZM12 8h-2v1h2V8ZM6 8H4v1h2V8Z", fill: H[0] }),
                (0, g.jsx)("path", { d: "M6 10H5v2h1v-2Z", fill: "#fff" }),
                (0, g.jsx)("path", { d: "M11 10h-1v2h1v-2ZM11 12v2H4v1h8v-3h-1Z", fill: w[0] }),
                (0, g.jsx)("path", { d: "M5 12H4v2h1v-2Z", fill: "#fff" }),
                (0, g.jsx)("path", { d: "M4 9H2v1h2V9ZM14 9h-2v1h2V9Z", fill: H[0] }),
                (0, g.jsx)("path", { d: "M8 6H6v2h2V6Z", fill: "#fff" }),
                (0, g.jsx)("path", { opacity: ".5", d: "M8 7H6v1h2V7Z", fill: H[0] }),
                (0, g.jsx)("path", { d: "M10 8H6v1h4V8Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M10 9H6v1h4V9Z", fill: "#fff" }),
                (0, g.jsx)("path", { d: "M2 2H1v1h1V2Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M5 3H4v1h1V3Z", fill: "#fff" }),
                (0, g.jsx)("path", {
                    d: "M4 12H3v3h1v-3ZM5 10h1V9H4v1H2v1h2v1h1v-2ZM2 9H1v1h1V9ZM16 3h-1v6h1V3ZM14 1h-2v1h2V1ZM15 2h-1v1h1V2ZM14 10h-2V9h-2v1h1v2h1v3h1v-3h-1v-1h2v-1h1V9h-1v1Z",
                    fill: "#000",
                }),
            ],
        });
    },
    hN = ["#FD6214", "#FFB84B", "#FFE361"],
    hK = [0.3, 0.56, 0.77],
    hz = [
        { base: 5, tint: 1 },
        { base: 3, tint: 1 },
        { base: 3, tint: 1 },
    ],
    hO = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, ...f } = A,
            { primaryColorsTransformed: M } = Q({
                primaryBaseColors: hN,
                primaryTintColor: B,
                primaryTintLuminances: hK,
                primaryLuminanceWeights: hz,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(f),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", {
                    d: "M4.99998 8.99999V10H7V13H4V15H12V13H9V10H11V8.99999H12V7.99999H14V6.99999H15V3.99999H14V2.99999H12V1H4V3H2V3.99999H0.999985V6.99999H1.99998V7.99999H3.99998V8.99999H4.99998Z",
                    fill: M[2],
                }),
                (0, g.jsx)("path", { d: "M12 15H3.99998V16H12V15Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M12 14H3.99998V15H12V14Z", fill: M[1] }),
                (0, g.jsx)("path", { d: "M13 13H12V15H13V13Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M3.99998 8.99998V7.99998H1.99998V8.99998H3.99998Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M3.99998 13H2.99998V15H3.99998V13Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M5 10V11H6V12H4V13H7V10H5Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M0 6.99998H1L1 3.99998H0L0 6.99998Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M1 6.99998H2L2 3.99998H1L1 6.99998Z", fill: "white" }),
                (0, g.jsx)("path", { d: "M5 7.99998H6L6 3.99998H5V7.99998Z", fill: M[0] }),
                (0, g.jsx)("path", { d: "M3 6.99998H4L4 3.99998H3L3 6.99998Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M12 6.99998H13V3.99998H12V6.99998Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M12 8H11V7H9V8H7V10H8V13H9V10H11V9H12V8Z", fill: M[1] }),
                (0, g.jsx)("path", { d: "M4.99998 8.99998H3.99998V9.99998H4.99998V8.99998Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M4.99998 7.99998H3.99998V8.99998H4.99998V7.99998Z", fill: M[1] }),
                (0, g.jsx)("path", { d: "M5.99998 8.99998H4.99998V9.99998H5.99998V8.99998Z", fill: M[1] }),
                (0, g.jsx)("path", { d: "M6.99998 7.99998H5.99998V8.99998H6.99998V7.99998Z", fill: M[0] }),
                (0, g.jsx)("path", { d: "M6.99998 6.99998H5.99998V7.99998H6.99998V6.99998Z", fill: M[1] }),
                (0, g.jsx)("path", { d: "M11 6.99998H10V7.99998H11V6.99998Z", fill: M[0] }),
                (0, g.jsx)("path", { d: "M14 6.99998H12V7.99998H14V6.99998Z", fill: M[1] }),
                (0, g.jsx)("path", { d: "M10 7.99998H9V8.99998H10V7.99998Z", fill: M[0] }),
                (0, g.jsx)("path", { d: "M11 2H10V6.99999H11V2Z", fill: M[1] }),
                (0, g.jsx)("path", { d: "M5.99998 2H4.99998V3.99999H5.99998V2Z", fill: M[2] }),
                (0, g.jsx)("path", { d: "M14 3.99998V2.99998H12V3.99998H14Z", fill: "white" }),
                (0, g.jsx)("path", { d: "M8 10H7V12H8V10Z", fill: "white" }),
                (0, g.jsx)("path", { d: "M1.99998 6.99998H0.999985V7.99998H1.99998V6.99998Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M3 7V4H2V8H4V7H3Z", fill: M[1] }),
                (0, g.jsx)("path", { d: "M1.99998 2.99998H0.999985V3.99998H1.99998V2.99998Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M10 12V11H11V10H9V13H12V12H10Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M14 8.99998V7.99998H12V8.99998H14Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M16 3.99998H15V6.99998H16V3.99998Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M14 3.99998H13V6.99998H14V3.99998Z", fill: M[1] }),
                (0, g.jsx)("path", { d: "M13 2V0H3V2H2V3H4V1H12V3H14V2H13Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M11 9.99998H12V8.99998H11V9.99998Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M14 7.99998H15V6.99998H14V7.99998Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M14 3.99998H15V2.99998H14V3.99998Z", fill: "black" }),
                (0, g.jsx)("path", { d: "M7 13H4V14H7V13Z", fill: "white" }),
                (0, g.jsx)("path", { d: "M4 1V8H5V2H6V7H7V2H12V1H4Z", fill: "white" }),
            ],
        });
    },
    hk = ["#4282d8", "#0abbff", "#ffffff"],
    hJ = [0.1, 0.32, 1],
    hm = [
        { base: 3, tint: 1 },
        { base: 3, tint: 1 },
        { base: 10, tint: 1 },
    ],
    hW = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, ...f } = A,
            { primaryColorsTransformed: M } = Q({
                primaryBaseColors: hk,
                primaryTintColor: B,
                primaryTintLuminances: hJ,
                primaryLuminanceWeights: hm,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(f),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", {
                    d: "M13 6V5h-1V4h-1V3h-1V2H9V1H7v1H6v1H5v1H4v1H3v1H2v2H1v5h1v1h2v1h8v-1h2v-1h1V8h-1V6h-1Z",
                    fill: M[1],
                }),
                (0, g.jsx)("path", {
                    d: "M7 0v1h2V0H7ZM6 1v1h1V1H6ZM9 1v1h1V1H9ZM10 2v1h1V2h-1ZM11 3v1h1V3h-1ZM12 4v1h1V4h-1ZM13 5v1h1V5h-1ZM14 6v2h1V6h-1ZM1 6v2h1V6H1ZM0 8v5h1V8H0ZM15 8v5h1V8h-1ZM5 2v1h1V2H5ZM4 3v1h1V3H4ZM3 4v1h1V4H3ZM2 5v1h1V5H2ZM1 13v1h1v-1H1ZM14 13v1h1v-1h-1ZM4 15v1h8v-1H4Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", { d: "M4 14v1h8v-1H4Z", fill: M[0] }),
                (0, g.jsx)("path", { d: "M2 14v1h2v-1H2ZM14 15v-1h-2v1h2Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M7 1v1h2V1H7Z", fill: M[2] }),
                (0, g.jsx)("path", {
                    opacity: ".5",
                    d: "M11 8V7h-1V6H9V5H7v1H6v1H5v1H4v3h1v1h6v-1h1V8h-1Z",
                    fill: "#fff",
                }),
                (0, g.jsx)("path", {
                    d: "M6 2v1h1V2H6ZM5 3v1h1V3H5ZM6 4v1h1V4H6ZM4 4v1h1V4H4ZM3 5v1h1V5H3ZM2 6v2h1V6H2ZM1 8v2h1V8H1Z",
                    fill: M[2],
                }),
                (0, g.jsx)("path", {
                    d: "M12 5v1h1V5h-1ZM13 6v2h1V6h-1ZM14 8v4h-1v1h-1v1h2v-1h1V8h-1ZM2 14h2v-1H2v1Z",
                    fill: M[0],
                }),
            ],
        });
    },
    hU = ["#480733", "#800E6F", "#E011AC"],
    hR = [0.1, 0.3, 0.55],
    hS = [
        { base: 5, tint: 1 },
        { base: 3, tint: 1 },
        { base: 3, tint: 1 },
    ],
    hq = ["#096A4C", "#2DC92D"],
    h_ = [0.25, 0.55],
    h$ = [
        { base: 5, tint: 1 },
        { base: 3, tint: 1 },
    ],
    h1 = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, secondaryTintColor: f, ...M } = A,
            { primaryColorsTransformed: H, secondaryColorsTransformed: w } = Q({
                primaryBaseColors: hU,
                primaryTintColor: B,
                primaryTintLuminances: hR,
                primaryLuminanceWeights: hS,
                secondaryBaseColors: hq,
                secondaryTintColor: f,
                secondaryTintLuminances: h_,
                secondaryLuminanceWeights: h$,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(M),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", {
                    d: "M2 12h1v1h1v1h1v-1h1v1h1v1H3v-1H2v-1H1V10h1v2Zm3 1h-1v-1h1v1ZM11 2H6v1h-1v1h-1v8h-1V3h1V2h1V1h6v1Z",
                    fill: w?.[1] ?? hq[1],
                }),
                (0, g.jsx)("path", {
                    d: "M2 10H1v-1h1v1ZM8 10h-1v-1h1v1ZM9 7h-1V4h1v3ZM10 4h-1v-1h1v1Z",
                    fill: "white",
                }),
                (0, g.jsx)("path", {
                    d: "M8 11h-1v-1h1v1ZM9 10h-1v-1h1v1ZM14 10h-2v-1h2v1ZM10 9h-1v-1h1v1ZM12 9h-1v-1h1v1ZM11 8h-1v-2h1v2ZM12 6h-1V3h1v3Z",
                    fill: H[0],
                }),
                (0, g.jsx)("path", { d: "M11 9h1v1h-1v1H8v-1h1v-1h1v-1h1v1Z", fill: H[1] }),
                (0, g.jsx)("path", {
                    d: "M14 10v-1h1v2H12v-1h2ZM11 6h-1v2h-1v1h-1v-2h1V4h1v-1h1v3ZM13 4h1v5h-2v-1h-1v-2h1V3h1v1Z",
                    fill: H[2],
                }),
                (0, g.jsx)("path", {
                    d: "M5 14h-1v-1h1v1ZM4 13h-1v-1h1v1ZM3 12H2v-1h1v1ZM12 3H9V2h3v1Z",
                    fill: w?.[0] ?? hq[0],
                }),
                (0, g.jsx)("path", { d: "M2 14h1v1h4v-1h1v2H2v-1H1v-2h1v1Z", fill: "black" }),
                (0, g.jsx)("path", {
                    d: "M7 14h-1v-1h1v1ZM3 11H2v-2H1v4H0V7h1v1h1V3h1v8ZM6 13h-1v-1h1v1ZM5 12h-1V4h1v8ZM11 12H7v-1h4v1ZM15 12H12v-1h3v1ZM7 11h-1v-2h1v2ZM12 11h-1v-1h1v1ZM16 11h-1v-2h1v2ZM8 9h-1V4h1v5ZM15 9h-1V4h1v5ZM6 4h-1v-1h1v1ZM9 4h-1v-1h-2V2h3v2ZM14 4h-1v-1h1v1ZM4 3h-1V2h1v1ZM13 3h-1V2h1v1ZM5 2h-1V1h1v1ZM12 2h-1V1h1v1ZM11 1H5V0h6v1Z",
                    fill: "black",
                }),
            ],
        });
    },
    h0 = ["#816bee", "#b79cf8", "#f0f0f0"],
    h9 = ["#6c9ca6", "#9af4dc", "#f0f0f0"],
    h2 = [0.07, 0.35, 1],
    h3 = [
        { base: 4, tint: 1 },
        { base: 1, tint: 1 },
        { base: 8, tint: 1 },
        { base: 6, tint: 1 },
    ],
    h4 = [0.2, 0.75, 1],
    h8 = [
        { base: 2, tint: 1 },
        { base: 1, tint: 1 },
        { base: 6, tint: 1 },
    ],
    h7 = (A) => {
        let { width: v = 24, height: h = 24, primaryTintColor: B, secondaryTintColor: f, ...M } = A,
            { primaryColorsTransformed: H, secondaryColorsTransformed: w } = Q({
                primaryBaseColors: h0,
                primaryTintColor: B,
                primaryTintLuminances: h2,
                primaryLuminanceWeights: h3,
                secondaryBaseColors: h9,
                secondaryTintColor: f,
                secondaryTintLuminances: h4,
                secondaryLuminanceWeights: h8,
            });
        return (0, g.jsxs)("svg", {
            ...(0, C.A)(M),
            width: v,
            height: h,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                (0, g.jsx)("path", {
                    d: "M14 4V3h-2V1H8v1H7v1H6V2H3v1H2v4H1v3h1V9h1V8h5V6h1V5h5v1h1V4h-1Z",
                    fill: H[1],
                }),
                (0, g.jsx)("path", { d: "M9 6v1H8v2h1v2h2v1h3v-1h1V6H9Z", fill: w[1] }),
                (0, g.jsx)("path", { d: "M4 10v4h1v1h3v-1h1v-4H4Z", fill: w[1] }),
                (0, g.jsx)("path", {
                    d: "M8 14H5v1h3v-1ZM14 11h-3v1h3v-1ZM15 10h-1v1h1v-1ZM9 13H8v1h1v-1Z",
                    fill: w[0],
                }),
                (0, g.jsx)("path", { d: "M9 7H8v1h1V7ZM11 8h-1v1h1V8ZM14 6H9v1h5V6Z", fill: w[2] }),
                (0, g.jsx)("path", { d: "M8 1H7v1h1V1ZM15 3h-1v1h1V3ZM14 8h-1v2h1V8ZM9 6H8v1h1V6Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M9 5H8v1h1V5Z", fill: H[0] }),
                (0, g.jsx)("path", { d: "M3 9H2v1h1V9ZM7 13H6v1h1v-1ZM6 12H5v1h1v-1Z", fill: "#000" }),
                (0, g.jsx)("path", {
                    d: "M6 12H5v1h1v-1ZM13 10h-1v1h1v-1ZM12 9h-1v1h1V9ZM5 14H4v1h1v-1ZM9 14H8v1h1v-1ZM2 10H1v1h1v-1ZM3 14H2v1h1v-1ZM2 15H1v1h1v-1ZM15 4v2h-1v1h1v4h1V4h-1ZM13 2V1h-1v2h2V2h-1ZM6 1H3v1h3V1ZM13 7h-3v1h3V7ZM7 10H4v1h3v-1ZM8 15H5v1h3v-1ZM7 2H6v1h1V2ZM3 2H2v1h1V2Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", {
                    d: "M6 2H3v1h3V2ZM7 3H6v1h1V3ZM4 5H3v1h1V5ZM2 7H1v1h1V7ZM3 3H2v1h1V3Z",
                    fill: H[2],
                }),
                (0, g.jsx)("path", {
                    d: "M14 12h-3v1h3v-1ZM10 11V8H9v1H8v1h1v4h1v-2h1v-1h-1ZM15 11h-1v1h1v-1ZM2 3H1v4h1V3ZM1 7H0v3h1V7ZM4 11H3v3h1v-3ZM8 11H7v2h1v-2ZM1 11H0v4h1v-4ZM12 0H8v1h4V0Z",
                    fill: "#000",
                }),
                (0, g.jsx)("path", { d: "M8 2H7v1h1V2ZM12 1H8v1h4V1Z", fill: H[2] }),
                (0, g.jsx)("path", { d: "M14 5H9v1h5V5Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M14 4V3h-1v1H9v1h5v1h1V4h-1Z", fill: H[0] }),
                (0, g.jsx)("path", { d: "M5 11H4v1h1v-1Z", fill: w[2] }),
                (0, g.jsx)("path", { d: "M7 6v1H3v1h5V6H7Z", fill: H[0] }),
                (0, g.jsx)("path", { d: "M7 7v1H3v1h5V7H7Z", fill: "#000" }),
                (0, g.jsx)("path", { d: "M3 8H2v1h1V8ZM2 9H1v1h1V9Z", fill: H[0] }),
                (0, g.jsx)("path", { d: "M3 9v1H2v1H1v4h1v-1h1v-3h1v-1h4V9H3Z", fill: w[1] }),
                (0, g.jsx)("path", { d: "M3 10H2v1h1v-1ZM2 11H1v1h1v-1Z", fill: w[2] }),
                (0, g.jsx)("path", { d: "M3 13H2v1h1v-1ZM2 14H1v1h1v-1Z", fill: w[0] }),
                (0, g.jsx)("path", { d: "M8 9H3v1h5V9Z", fill: w[2] }),
            ],
        });
    };
var h6 = h(743981);
let h5 = (A) => {
    let { badge: v, primaryTintColor: h, secondaryTintColor: B, ...C } = A;
    switch (v) {
        case h6.bl.SWORD:
            return (0, g.jsx)(hj, { primaryTintColor: h, secondaryTintColor: B, ...C });
        case h6.bl.WATER_DROP:
            return (0, g.jsx)(hW, { primaryTintColor: h, ...C });
        case h6.bl.SKULL:
            return (0, g.jsx)(vW, { primaryTintColor: h, ...C });
        case h6.bl.TOADSTOOL:
            return (0, g.jsx)(hu, { primaryTintColor: h, secondaryTintColor: B, ...C });
        case h6.bl.MOON:
            return (0, g.jsx)(vL, { primaryTintColor: h, ...C });
        case h6.bl.LIGHTNING:
            return (0, g.jsx)(vi, { primaryTintColor: h, ...C });
        case h6.bl.LEAF:
            return (0, g.jsx)(vl, { primaryTintColor: h, ...C });
        case h6.bl.HEART:
            return (0, g.jsx)(vh, { primaryTintColor: h, ...C });
        case h6.bl.FIRE:
            return (0, g.jsx)(AL, { primaryTintColor: h, ...C });
        case h6.bl.COMPASS:
            return (0, g.jsx)(S, { primaryTintColor: h, secondaryTintColor: B, ...C });
        case h6.bl.CROSSHAIRS:
            return (0, g.jsx)(Ag, { primaryTintColor: h, secondaryTintColor: B, ...C });
        case h6.bl.FLOWER:
            return (0, g.jsx)(Ay, { primaryTintColor: h, secondaryTintColor: B, ...C });
        case h6.bl.FORCE:
            return (0, g.jsx)(Ak, { primaryTintColor: h, secondaryTintColor: B, ...C });
        case h6.bl.GEM:
            return (0, g.jsx)(A3, { primaryTintColor: h, secondaryTintColor: B, ...C });
        case h6.bl.LAVA:
            return (0, g.jsx)(vQ, { primaryTintColor: h, secondaryTintColor: B, ...C });
        case h6.bl.PSYCHIC:
            return (0, g.jsx)(vO, { primaryTintColor: h, secondaryTintColor: B, ...C });
        case h6.bl.SMOKE:
            return (0, g.jsx)(v1, { primaryTintColor: h, secondaryTintColor: B, ...C });
        case h6.bl.SNOW:
            return (0, g.jsx)(hB, { primaryTintColor: h, secondaryTintColor: B, ...C });
        case h6.bl.SOUND:
            return (0, g.jsx)(ht, { primaryTintColor: h, secondaryTintColor: B, ...C });
        case h6.bl.SUN:
            return (0, g.jsx)(hP, { primaryTintColor: h, secondaryTintColor: B, ...C });
        case h6.bl.WIND:
            return (0, g.jsx)(h7, { primaryTintColor: h, secondaryTintColor: B, ...C });
        case h6.bl.BUNNY:
            return (0, g.jsx)(I, { primaryTintColor: h, ...C });
        case h6.bl.DOG:
            return (0, g.jsx)(AI, { primaryTintColor: h, secondaryTintColor: B, ...C });
        case h6.bl.FROG:
            return (0, g.jsx)(Aq, { primaryTintColor: h, secondaryTintColor: B, ...C });
        case h6.bl.GOAT:
            return (0, g.jsx)(A6, { primaryTintColor: h, ...C });
        case h6.bl.CAT:
            return (0, g.jsx)(j, { primaryTintColor: h, ...C });
        case h6.bl.DIAMOND:
            return (0, g.jsx)(AV, { primaryTintColor: h, ...C });
        case h6.bl.CROWN:
            return (0, g.jsx)(Aw, { primaryTintColor: h, secondaryTintColor: B, ...C });
        case h6.bl.TROPHY:
            return (0, g.jsx)(hO, { primaryTintColor: h, ...C });
        case h6.bl.MONEY_BAG:
            return (0, g.jsx)(vP, { primaryTintColor: h, ...C });
        case h6.bl.DOLLAR_SIGN:
            return (0, g.jsx)(AP, { primaryTintColor: h, ...C });
        case h6.bl.CLOVER:
            return (0, g.jsx)(O, { primaryTintColor: h, ...C });
        case h6.bl.BLOSSOM:
            return (0, g.jsx)(i, { primaryTintColor: h, ...C });
        case h6.bl.POTTED_PLANT:
            return (0, g.jsx)(vy, { primaryTintColor: h, secondaryTintColor: B, ...C });
        case h6.bl.MAPLE:
            return (0, g.jsx)(vI, { primaryTintColor: h, ...C });
        case h6.bl.WILTED_FLOWER:
            return (0, g.jsx)(h1, { primaryTintColor: h, secondaryTintColor: B, ...C });
        case h6.bl.BUTTERFLY:
            return (0, g.jsx)(x, { primaryTintColor: h, secondaryTintColor: B, ...C });
        case h6.bl.SNAIL:
            return (0, g.jsx)(v7, { primaryTintColor: h, secondaryTintColor: B, ...C });
        case h6.bl.CATERPILLAR:
            return (0, g.jsx)(u, { primaryTintColor: h, secondaryTintColor: B, ...C });
        case h6.bl.SPIDER:
            return (0, g.jsx)(ha, { primaryTintColor: h, secondaryTintColor: B, ...C });
        case h6.bl.BEE:
            return (0, g.jsx)(l, { primaryTintColor: h, ...C });
    }
    return null;
};

s.d(t, { A: () => i });
var r = s(627968);
s(64700);
var a = s(953727);
let i = (e) => {
    let { className: t, backgroundColor: s, backgroundCircleSize: i, ...n } = e;
    return (0, r.jsxs)("svg", {
        width: "100%",
        height: "100%",
        viewBox: "0 0 100 100",
        fill: "none",
        style: { overflow: "visible" },
        xmlns: "http://www.w3.org/2000/svg",
        ...(0, a.A)({ ...n }),
        children: [
            (0, r.jsx)("circle", { r: i ?? "40%", cx: "50%", cy: "50%", className: s }),
            (0, r.jsxs)("g", {
                transform: "translate(50, 50) scale(0.6) translate(-51, -52)",
                children: [
                    (0, r.jsx)("path", {
                        d: "M52.0002 11.7556L28.3402 35.4156V68.6956L52.0002 92.3556L75.6602 68.6956V35.4156L52.0002 11.7556ZM63.8302 63.7556L52.0002 75.6289L40.1702 63.7989V40.3122L52.0002 28.4822L63.8302 40.3122V63.7556Z",
                        fill: "#FF6BFA",
                        className: t,
                    }),
                    (0, r.jsx)("path", {
                        d: "M40.1702 40.3122V63.7989L52.0002 75.6289L63.8302 63.7989V40.3122L52.0002 28.4822L40.1702 40.3122Z",
                        fill: "#FFDEF9",
                    }),
                    (0, r.jsx)("path", {
                        d: "M52.0002 11.7556V28.4822L63.8302 40.3122L75.6602 35.4156L52.0002 11.7556Z",
                        fill: "#FFB0FF",
                    }),
                ],
            }),
        ],
    });
};

"use strict";
n.r(t), n.d(t, { BadgeImageWithProgressCircle: () => _, default: () => f });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(366010),
    o = n(834730),
    l = n(736653),
    u = n(905545);
let c = (e) => {
    let {
            innerRingPercent: t,
            outerRingColor: n = "currentColor",
            innerRingColor: r = "currentColor",
            strokeWidth: s = 4,
            children: a,
            backgroundCircleColor: o,
            backgroundCircleBlurAmount: l = 0,
        } = e,
        c = Math.min(Math.max(t, 0), 100),
        d = (100 - s) / 2,
        _ = d * Math.PI * 2,
        f = (100 - s) / 2,
        h = f * Math.PI * 2;
    return (0, i.jsxs)("div", {
        className: u.kL,
        children: [
            (0, i.jsx)("svg", {
                viewBox: "0 0 100 100",
                className: u.DT,
                style: null != l ? { "--custom-backdrop-blur-amount": `${l}px` } : void 0,
                children: (0, i.jsx)("circle", { cx: 50, cy: 50, r: 50, fill: o }),
            }),
            (0, i.jsxs)("svg", {
                viewBox: "0 0 100 100",
                className: u.JW,
                children: [
                    (0, i.jsx)("circle", {
                        cx: 50,
                        cy: 50,
                        r: d,
                        strokeWidth: s,
                        stroke: n,
                        fill: "none",
                        strokeLinecap: "round",
                        transform: "rotate(-90 50 50)",
                        style: { strokeDasharray: _ },
                    }),
                    (0, i.jsx)("circle", {
                        cx: 50,
                        cy: 50,
                        r: f,
                        strokeWidth: s,
                        stroke: r,
                        fill: "none",
                        strokeLinecap: "round",
                        transform: "rotate(-90 50 50)",
                        style: { strokeDasharray: h, strokeDashoffset: (1 - c / 100) * h },
                    }),
                ],
            }),
            null != a && (0, i.jsx)("div", { className: u.Lw, children: a }),
        ],
    });
};
var d = n(255041);
let _ = (e) => {
        let {
                src: t,
                alt: n,
                progressCircleText: r,
                progressCirclePercent: u,
                progressCircleUrgency: _,
                compact: f = !1,
            } = e,
            h = (0, l.Ay)();
        return (0, i.jsxs)("div", {
            className: s()(d.mI, { [d.oE]: f }),
            children: [
                (0, i.jsx)("img", { alt: n, src: t, className: d.pq }),
                null != r &&
                    null != u &&
                    null != _ &&
                    (0, i.jsx)("div", {
                        className: d.$t,
                        children: (0, i.jsx)(c, {
                            innerRingPercent: u,
                            outerRingColor: "critical" === _ ? "var(--red-new-74)" : "var(--opacity-orange-36)",
                            innerRingColor: "critical" === _ ? "var(--red-new-43)" : "var(--opacity-orange-96)",
                            strokeWidth: 7,
                            backgroundCircleColor: (0, a.M)(h) ? "var(--opacity-black-72)" : "var(--opacity-white-72)",
                            backgroundCircleBlurAmount: 2,
                            children: (0, i.jsx)(o.E, {
                                variant: "text-sm/semibold",
                                color: "text-subtle",
                                children: r,
                            }),
                        }),
                    }),
            ],
        });
    },
    f = _;

n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    r = n(554146),
    s = n(366999),
    o = n(160761),
    d = n(953727),
    c = n(774774),
    u = n(408643);
let A = "premium_tier_gradient",
    h = "smaller_sparkle_gradient";
function _(e) {
    let { width: t = 14, height: n = 15, color: l = "white", foreground: a, ...r } = e;
    return (0, i.jsxs)("svg", {
        ...(0, d.A)({ ...r }),
        preserveAspectRatio: "none",
        width: t,
        height: n,
        viewBox: "0 0 14 15",
        className: a,
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, i.jsx)("defs", {
                children: (0, i.jsxs)("linearGradient", {
                    id: A,
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "0%",
                    children: [
                        (0, i.jsx)("stop", { offset: "0%", stopColor: "#8547C6" }),
                        (0, i.jsx)("stop", { offset: "50%", stopColor: "#B845C1" }),
                        (0, i.jsx)("stop", { offset: "100%", stopColor: "#AB5D8A" }),
                    ],
                }),
            }),
            (0, i.jsxs)("linearGradient", {
                id: h,
                x1: "-4.95474",
                y1: "5.44067",
                x2: "11.2384",
                y2: "8.58386",
                gradientUnits: "userSpaceOnUse",
                children: [
                    (0, i.jsx)("stop", { stopColor: "#8547C6" }),
                    (0, i.jsx)("stop", { offset: "0.52899", stopColor: "#B845C1" }),
                    (0, i.jsx)("stop", { offset: "1", stopColor: "#AB5D8A" }),
                ],
            }),
            (0, i.jsx)("path", {
                d: "M8.59403 1.52779C8.04647 0.0480288 5.95353 0.0480288 5.40597 1.52779L4.56476 3.8011C4.36219 4.34854 3.93057 4.78016 3.38313 4.98273L1.10982 5.82394C-0.36994 6.3715 -0.36994 8.46444 1.10982 9.012L3.38313 9.8532C3.93057 10.0558 4.36219 10.4874 4.56476 11.0348L5.40597 13.3081C5.95353 14.7879 8.04647 14.7879 8.59403 13.3081L9.43524 11.0348C9.63781 10.4874 10.0694 10.0558 10.6169 9.8532L12.8902 9.012C14.3699 8.46444 14.3699 6.3715 12.8902 5.82394L10.6169 4.98273C10.0694 4.78016 9.63781 4.34854 9.43524 3.8011L8.59403 1.52779Z",
                fill: l,
            }),
        ],
    });
}
function m(e) {
    let { className: t, startsAt: n, endsAt: l, messageStyle: d, upperCase: m, showSparkles: p } = e,
        [g] = (0, o.Bo)(r.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL, {
            showAfterTimestamp: n.valueOf(),
            cooldownDurationMs: 0,
        }),
        E = (0, s.Ay)(l, d);
    return "" === E
        ? null
        : (m && (E = E.toUpperCase()),
          (0, i.jsxs)("div", {
              className: a()(t, u.Iv),
              children: [
                  p
                      ? (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(_, { foreground: u.QX, color: `url(#${h})` }),
                                (0, i.jsx)(_, { foreground: u.J0, color: `url(#${A})` }),
                            ],
                        })
                      : null,
                  (0, i.jsx)(c.e4, {
                      text: E,
                      colorOptions:
                          g === r.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL
                              ? c.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL
                              : c.at.PREMIUM_TIER_2_GREY_FILL,
                  }),
              ],
          }));
}

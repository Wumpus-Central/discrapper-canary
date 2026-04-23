a.d(l, { A: () => m });
var t = a(627968);
a(64700);
var s = a(503698),
    i = a.n(s),
    n = a(554146),
    c = a(366999),
    h = a(160761),
    r = a(953727),
    o = a(774774),
    d = a(626736);
let v = "premium_tier_gradient",
    g = "smaller_sparkle_gradient";
function p(e) {
    let { width: l = 14, height: a = 15, color: s = "white", foreground: i, ...n } = e;
    return (0, t.jsxs)("svg", {
        ...(0, r.A)({ ...n }),
        preserveAspectRatio: "none",
        width: l,
        height: a,
        viewBox: "0 0 14 15",
        className: i,
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, t.jsx)("defs", {
                children: (0, t.jsxs)("linearGradient", {
                    id: v,
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "0%",
                    children: [
                        (0, t.jsx)("stop", { offset: "0%", stopColor: "#8547C6" }),
                        (0, t.jsx)("stop", { offset: "50%", stopColor: "#B845C1" }),
                        (0, t.jsx)("stop", { offset: "100%", stopColor: "#AB5D8A" }),
                    ],
                }),
            }),
            (0, t.jsxs)("linearGradient", {
                id: g,
                x1: "-4.95474",
                y1: "5.44067",
                x2: "11.2384",
                y2: "8.58386",
                gradientUnits: "userSpaceOnUse",
                children: [
                    (0, t.jsx)("stop", { stopColor: "#8547C6" }),
                    (0, t.jsx)("stop", { offset: "0.52899", stopColor: "#B845C1" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#AB5D8A" }),
                ],
            }),
            (0, t.jsx)("path", {
                d: "M8.59403 1.52779C8.04647 0.0480288 5.95353 0.0480288 5.40597 1.52779L4.56476 3.8011C4.36219 4.34854 3.93057 4.78016 3.38313 4.98273L1.10982 5.82394C-0.36994 6.3715 -0.36994 8.46444 1.10982 9.012L3.38313 9.8532C3.93057 10.0558 4.36219 10.4874 4.56476 11.0348L5.40597 13.3081C5.95353 14.7879 8.04647 14.7879 8.59403 13.3081L9.43524 11.0348C9.63781 10.4874 10.0694 10.0558 10.6169 9.8532L12.8902 9.012C14.3699 8.46444 14.3699 6.3715 12.8902 5.82394L10.6169 4.98273C10.0694 4.78016 9.63781 4.34854 9.43524 3.8011L8.59403 1.52779Z",
                fill: s,
            }),
        ],
    });
}
function m(e) {
    let { className: l, startsAt: a, endsAt: s, messageStyle: r, upperCase: m, showSparkles: f } = e,
        [w] = (0, h.Bo)(n.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL, {
            showAfterTimestamp: a.valueOf(),
            cooldownDurationMs: 0,
        }),
        x = (0, c.Ay)(s, r);
    return "" === x
        ? null
        : (m && (x = x.toUpperCase()),
          (0, t.jsxs)("div", {
              className: i()(l, d.Iv),
              children: [
                  f
                      ? (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsx)(p, { foreground: d.QX, color: `url(#${g})` }),
                                (0, t.jsx)(p, { foreground: d.J0, color: `url(#${v})` }),
                            ],
                        })
                      : null,
                  (0, t.jsx)(o.e4, {
                      text: x,
                      colorOptions:
                          w === n.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL
                              ? o.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL
                              : o.at.PREMIUM_TIER_2_GREY_FILL,
                  }),
              ],
          }));
}

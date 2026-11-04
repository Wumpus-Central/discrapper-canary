var n = r(477900),
    s = r(582128),
    t = r(503698),
    a = r.n(t),
    i = r(866665),
    o = r(36075),
    c = r(315886);
function u(e) {
    let { color: l, colors: r, className: t, background: i = !0, hoverOverride: u } = e,
        [d, x] = s.useState(!1),
        p = r?.primaryColor ?? l,
        {
            hasGradient: m,
            stops: h,
            gradientId: j,
            animatedGradientId: f,
        } = (0, o.RM)(p, r?.secondaryColor, r?.tertiaryColor);
    return null == p
        ? null
        : (0, n.jsxs)("svg", {
              className: a()(c.JW, t),
              viewBox: "0 0 20 20",
              fill: "none",
              onMouseEnter: () => {
                  x(!0);
              },
              onMouseLeave: () => {
                  x(!1);
              },
              children: [
                  m &&
                      (0, n.jsxs)("defs", {
                          children: [
                              (0, n.jsx)("linearGradient", {
                                  id: j,
                                  x1: "0%",
                                  y1: "0%",
                                  x2: "100%",
                                  y2: "0%",
                                  spreadMethod: "reflect",
                                  children: h,
                              }),
                              (0, n.jsxs)("linearGradient", {
                                  id: f,
                                  x1: "0%",
                                  y1: "0%",
                                  x2: "100%",
                                  y2: "0%",
                                  spreadMethod: "reflect",
                                  children: [
                                      h,
                                      (0, n.jsx)("animate", {
                                          attributeName: "x1",
                                          from: "0%",
                                          to: "200%",
                                          dur: "3s",
                                          repeatCount: "indefinite",
                                      }),
                                      (0, n.jsx)("animate", {
                                          attributeName: "x2",
                                          from: "100%",
                                          to: "300%",
                                          dur: "3s",
                                          repeatCount: "indefinite",
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  i &&
                      (0, n.jsx)("path", {
                          className: c.Tp,
                          d: "M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V16C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V4Z",
                      }),
                  (0, n.jsx)("circle", { className: c.tH, cx: "10", cy: "10", r: "6" }),
                  (0, n.jsx)("circle", { className: c.NA, cx: "10", cy: "10", r: "6", fill: m ? `url(#${j})` : p }),
                  (0, n.jsx)("circle", {
                      className: c.Om,
                      cx: "10",
                      cy: "10",
                      r: "5",
                      fill: m ? `url(#${u || d ? f : j})` : p,
                  }),
              ],
          });
}
r.d(
    l,
    {},
    {
        R: function (e) {
            let { color: l, colors: r, className: s } = e,
                { gradientStyle: t, gradientClassname: i } = (0, o.v5)({ colorStrings: r, roleStyle: "dot" });
            if (null == l && null == r) return null;
            let u = null != r && null != r.primaryColor && null != r.secondaryColor,
                d = { ...(u ? t : { backgroundColor: l ?? void 0 }) };
            return (0, n.jsx)("span", { className: a()(c.Ni, s, { [i]: u }), style: d });
        },
        W: function (e) {
            let { color: l, colors: r, name: s, tooltip: t = !0 } = e;
            return null == l && null == r
                ? null
                : t
                  ? (0, n.jsx)(i.m, {
                        __unsupportedReactNodeAsText: s,
                        children: (0, n.jsx)("span", { "aria-hidden": !0, children: (0, n.jsx)(u, { ...e }) }),
                    })
                  : (0, n.jsx)(u, { ...e });
        },
    },
);

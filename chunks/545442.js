"use strict";
n.d(t, { R: () => _, W: () => d });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(990078),
    l = n(521100),
    u = n(746413);
function c(e) {
    let { color: t, colors: n, className: s, background: o = !0, hoverOverride: c } = e,
        [d, _] = r.useState(!1),
        f = n?.primaryColor ?? t,
        {
            hasGradient: h,
            stops: p,
            gradientId: E,
            animatedGradientId: m,
        } = (0, l.RM)(f, n?.secondaryColor, n?.tertiaryColor);
    return null == f
        ? null
        : (0, i.jsxs)("svg", {
              className: a()(u.JW, s),
              viewBox: "0 0 20 20",
              fill: "none",
              onMouseEnter: () => {
                  _(!0);
              },
              onMouseLeave: () => {
                  _(!1);
              },
              children: [
                  h &&
                      (0, i.jsxs)("defs", {
                          children: [
                              (0, i.jsx)("linearGradient", {
                                  id: E,
                                  x1: "0%",
                                  y1: "0%",
                                  x2: "100%",
                                  y2: "0%",
                                  spreadMethod: "reflect",
                                  children: p,
                              }),
                              (0, i.jsxs)("linearGradient", {
                                  id: m,
                                  x1: "0%",
                                  y1: "0%",
                                  x2: "100%",
                                  y2: "0%",
                                  spreadMethod: "reflect",
                                  children: [
                                      p,
                                      (0, i.jsx)("animate", {
                                          attributeName: "x1",
                                          from: "0%",
                                          to: "200%",
                                          dur: "3s",
                                          repeatCount: "indefinite",
                                      }),
                                      (0, i.jsx)("animate", {
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
                  o &&
                      (0, i.jsx)("path", {
                          className: u.Tp,
                          d: "M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V16C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V4Z",
                      }),
                  (0, i.jsx)("circle", { className: u.tH, cx: "10", cy: "10", r: "6" }),
                  (0, i.jsx)("circle", { className: u.NA, cx: "10", cy: "10", r: "6", fill: h ? `url(#${E})` : f }),
                  (0, i.jsx)("circle", {
                      className: u.Om,
                      cx: "10",
                      cy: "10",
                      r: "5",
                      fill: h ? `url(#${c || d ? m : E})` : f,
                  }),
              ],
          });
}
function d(e) {
    let { color: t, colors: n, name: r, tooltip: s = !0 } = e;
    return null == t && null == n
        ? null
        : s
          ? (0, i.jsx)(o.m, {
                __unsupportedReactNodeAsText: r,
                children: (0, i.jsx)("span", { "aria-hidden": !0, children: (0, i.jsx)(c, { ...e }) }),
            })
          : (0, i.jsx)(c, { ...e });
}
function _(e) {
    let { color: t, colors: n, className: r } = e,
        { gradientStyle: s, gradientClassname: o } = (0, l.v5)({ colorStrings: n, roleStyle: "dot" });
    if (null == t && null == n) return null;
    let c = null != n && null != n.primaryColor && null != n.secondaryColor,
        d = { ...(c ? s : { backgroundColor: t ?? void 0 }) };
    return (0, i.jsx)("span", { className: a()(u.Ni, r, { [o]: c }), style: d });
}

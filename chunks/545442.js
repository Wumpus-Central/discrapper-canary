"use strict";
n.d(t, { R: () => _, W: () => d });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(990078),
    l = n(36075),
    u = n(707616);
function c(e) {
    let { color: t, colors: n, className: a, background: o = !0, hoverOverride: c } = e,
        [d, _] = i.useState(!1),
        f = n?.primaryColor ?? t,
        {
            hasGradient: p,
            stops: h,
            gradientId: m,
            animatedGradientId: g,
        } = (0, l.RM)(f, n?.secondaryColor, n?.tertiaryColor);
    return null == f
        ? null
        : (0, r.jsxs)("svg", {
              className: s()(u.JW, a),
              viewBox: "0 0 20 20",
              fill: "none",
              onMouseEnter: () => {
                  _(!0);
              },
              onMouseLeave: () => {
                  _(!1);
              },
              children: [
                  p &&
                      (0, r.jsxs)("defs", {
                          children: [
                              (0, r.jsx)("linearGradient", {
                                  id: m,
                                  x1: "0%",
                                  y1: "0%",
                                  x2: "100%",
                                  y2: "0%",
                                  spreadMethod: "reflect",
                                  children: h,
                              }),
                              (0, r.jsxs)("linearGradient", {
                                  id: g,
                                  x1: "0%",
                                  y1: "0%",
                                  x2: "100%",
                                  y2: "0%",
                                  spreadMethod: "reflect",
                                  children: [
                                      h,
                                      (0, r.jsx)("animate", {
                                          attributeName: "x1",
                                          from: "0%",
                                          to: "200%",
                                          dur: "3s",
                                          repeatCount: "indefinite",
                                      }),
                                      (0, r.jsx)("animate", {
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
                      (0, r.jsx)("path", {
                          className: u.Tp,
                          d: "M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V16C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V4Z",
                      }),
                  (0, r.jsx)("circle", { className: u.tH, cx: "10", cy: "10", r: "6" }),
                  (0, r.jsx)("circle", { className: u.NA, cx: "10", cy: "10", r: "6", fill: p ? `url(#${m})` : f }),
                  (0, r.jsx)("circle", {
                      className: u.Om,
                      cx: "10",
                      cy: "10",
                      r: "5",
                      fill: p ? `url(#${c || d ? g : m})` : f,
                  }),
              ],
          });
}
function d(e) {
    let { color: t, colors: n, name: i, tooltip: a = !0 } = e;
    return null == t && null == n
        ? null
        : a
          ? (0, r.jsx)(o.m, {
                __unsupportedReactNodeAsText: i,
                children: (0, r.jsx)("span", { "aria-hidden": !0, children: (0, r.jsx)(c, { ...e }) }),
            })
          : (0, r.jsx)(c, { ...e });
}
function _(e) {
    let { color: t, colors: n, className: i } = e,
        { gradientStyle: a, gradientClassname: o } = (0, l.v5)({ colorStrings: n, roleStyle: "dot" });
    if (null == t && null == n) return null;
    let c = null != n && null != n.primaryColor && null != n.secondaryColor,
        d = { ...(c ? a : { backgroundColor: t ?? void 0 }) };
    return (0, r.jsx)("span", { className: s()(u.Ni, i, { [o]: c }), style: d });
}

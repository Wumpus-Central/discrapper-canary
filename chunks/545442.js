"use strict";
n.d(t, { R: () => _, W: () => u });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(866665),
    o = n(36075),
    d = n(595925);
function c(e) {
    let { color: t, colors: n, className: a, background: l = !0, hoverOverride: c } = e,
        [u, _] = r.useState(!1),
        E = n?.primaryColor ?? t,
        {
            hasGradient: A,
            stops: h,
            gradientId: I,
            animatedGradientId: f,
        } = (0, o.RM)(E, n?.secondaryColor, n?.tertiaryColor);
    return null == E
        ? null
        : (0, i.jsxs)("svg", {
              className: s()(d.JW, a),
              viewBox: "0 0 20 20",
              fill: "none",
              onMouseEnter: () => {
                  _(!0);
              },
              onMouseLeave: () => {
                  _(!1);
              },
              children: [
                  A &&
                      (0, i.jsxs)("defs", {
                          children: [
                              (0, i.jsx)("linearGradient", {
                                  id: I,
                                  x1: "0%",
                                  y1: "0%",
                                  x2: "100%",
                                  y2: "0%",
                                  spreadMethod: "reflect",
                                  children: h,
                              }),
                              (0, i.jsxs)("linearGradient", {
                                  id: f,
                                  x1: "0%",
                                  y1: "0%",
                                  x2: "100%",
                                  y2: "0%",
                                  spreadMethod: "reflect",
                                  children: [
                                      h,
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
                  l &&
                      (0, i.jsx)("path", {
                          className: d.Tp,
                          d: "M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V16C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V4Z",
                      }),
                  (0, i.jsx)("circle", { className: d.tH, cx: "10", cy: "10", r: "6" }),
                  (0, i.jsx)("circle", { className: d.NA, cx: "10", cy: "10", r: "6", fill: A ? `url(#${I})` : E }),
                  (0, i.jsx)("circle", {
                      className: d.Om,
                      cx: "10",
                      cy: "10",
                      r: "5",
                      fill: A ? `url(#${c || u ? f : I})` : E,
                  }),
              ],
          });
}
function u(e) {
    let { color: t, colors: n, name: r, tooltip: a = !0 } = e;
    return null == t && null == n
        ? null
        : a
          ? (0, i.jsx)(l.m, {
                __unsupportedReactNodeAsText: r,
                children: (0, i.jsx)("span", { "aria-hidden": !0, children: (0, i.jsx)(c, { ...e }) }),
            })
          : (0, i.jsx)(c, { ...e });
}
function _(e) {
    let { color: t, colors: n, className: r } = e,
        { gradientStyle: a, gradientClassname: l } = (0, o.v5)({ colorStrings: n, roleStyle: "dot" });
    if (null == t && null == n) return null;
    let c = null != n && null != n.primaryColor && null != n.secondaryColor,
        u = { ...(c ? a : { backgroundColor: t ?? void 0 }) };
    return (0, i.jsx)("span", { className: s()(d.Ni, r, { [l]: c }), style: u });
}

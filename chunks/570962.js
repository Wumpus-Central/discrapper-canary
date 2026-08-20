"use strict";
n.d(t, { A: () => A });
var i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    s = n(661531),
    l = n(408278),
    o = n(789645),
    d = n(87221),
    c = n(834730),
    u = n(191096),
    _ = n(375708),
    E = n(123502);
function A(e) {
    let { obscured: t, children: n, className: r, contentClassName: A, heading: h, description: I, onClose: f } = e;
    return t
        ? (0, i.jsx)(u.OB.Provider, {
              value: u.Wl,
              children: (0, i.jsxs)("div", {
                  className: a()(E.kL, r),
                  children: [
                      (0, i.jsx)("div", { className: a()(E.Qs, A), inert: !0, "aria-hidden": "true", children: n }),
                      null != f &&
                          (0, i.jsx)("div", {
                              className: E.b,
                              children: (0, i.jsx)(l.K, {
                                  icon: o.P,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  onClick: () => f(),
                                  "aria-label": _.intl.string(_.t.cpT0Cq),
                              }),
                          }),
                      (0, i.jsxs)("div", {
                          className: E.$e,
                          role: "status",
                          children: [
                              (0, i.jsx)(d.D, { size: "lg", color: s.A.colors.TEXT_DEFAULT }),
                              (0, i.jsx)(c.E, {
                                  tag: "div",
                                  variant: "heading-md/semibold",
                                  color: "text-strong",
                                  children: h ?? _.intl.string(_.t.xC8Saf),
                              }),
                              (0, i.jsx)(c.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: I ?? _.intl.string(_.t["0fc/DG"]),
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : n;
}

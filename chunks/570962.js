"use strict";
n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(661531),
    o = n(408278),
    l = n(789645),
    u = n(87221),
    c = n(834730),
    d = n(191096),
    _ = n(375708),
    h = n(517521);
function f(e) {
    let { obscured: t, children: n, className: r, contentClassName: f, heading: p, description: E, onClose: m } = e;
    return t
        ? (0, i.jsx)(d.OB.Provider, {
              value: d.Wl,
              children: (0, i.jsxs)("div", {
                  className: s()(h.kL, r),
                  children: [
                      (0, i.jsx)("div", { className: s()(h.Qs, f), inert: !0, "aria-hidden": "true", children: n }),
                      null != m &&
                          (0, i.jsx)("div", {
                              className: h.b,
                              children: (0, i.jsx)(o.K, {
                                  icon: l.P,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  onClick: () => m(),
                                  "aria-label": _.intl.string(_.t.cpT0Cq),
                              }),
                          }),
                      (0, i.jsxs)("div", {
                          className: h.$e,
                          role: "status",
                          children: [
                              (0, i.jsx)(u.D, { size: "lg", color: a.A.colors.TEXT_DEFAULT }),
                              (0, i.jsx)(c.E, {
                                  tag: "div",
                                  variant: "heading-md/semibold",
                                  color: "text-strong",
                                  children: p ?? _.intl.string(_.t.xC8Saf),
                              }),
                              (0, i.jsx)(c.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: E ?? _.intl.string(_.t["0fc/DG"]),
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : n;
}

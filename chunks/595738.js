"use strict";
r.d(t, { A: () => c });
var n = r(627968);
r(64700);
var s = r(503698),
    l = r.n(s),
    a = r(397927),
    i = r(376092),
    u = r(920082);
function c(e) {
    let {
        grantedPermissions: t,
        disabledPermissions: r,
        grantedPermissionsHeader: s,
        disabledPermissionsHeader: c,
        className: d,
    } = e;
    return (0, n.jsxs)("div", {
        className: l()(u.p_, d),
        children: [
            null != t && t.length > 0
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          null != s
                              ? (0, n.jsx)(a.Heading, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    className: u.wx,
                                    children: s,
                                })
                              : null,
                          (0, n.jsx)("div", {
                              className: u.kL,
                              children: t.map((e) =>
                                  (0, n.jsxs)(
                                      "div",
                                      {
                                          className: u.EK,
                                          children: [
                                              (0, n.jsx)(a.A9s, { size: "xs", color: "currentColor", className: u.z6 }),
                                              (0, n.jsx)(a.Text, { variant: "text-sm/normal", children: (0, i.hx)(e) }),
                                          ],
                                      },
                                      e.toString(),
                                  ),
                              ),
                          }),
                      ],
                  })
                : null,
            null != r && r.length > 0
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          null != c
                              ? (0, n.jsx)(a.Heading, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    className: u.wx,
                                    children: c,
                                })
                              : null,
                          (0, n.jsx)("div", {
                              className: u.kL,
                              children: r.map((e) =>
                                  (0, n.jsxs)(
                                      "div",
                                      {
                                          className: u.EK,
                                          children: [
                                              (0, n.jsx)(a.PGe, { size: "xs", color: "currentColor", className: u.$A }),
                                              (0, n.jsx)(a.Text, { variant: "text-sm/normal", children: (0, i.hx)(e) }),
                                          ],
                                      },
                                      e.toString(),
                                  ),
                              ),
                          }),
                      ],
                  })
                : null,
        ],
    });
}

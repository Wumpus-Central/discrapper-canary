"use strict";
s.d(t, { A: () => c });
var a = s(627968);
s(64700);
var r = s(503698),
    n = s.n(r),
    l = s(397927),
    i = s(376092),
    u = s(920082);
function c(e) {
    let {
        grantedPermissions: t,
        disabledPermissions: s,
        grantedPermissionsHeader: r,
        disabledPermissionsHeader: c,
        className: d,
    } = e;
    return (0, a.jsxs)("div", {
        className: n()(u.p_, d),
        children: [
            null != t && t.length > 0
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          null != r
                              ? (0, a.jsx)(l.Heading, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    className: u.wx,
                                    children: r,
                                })
                              : null,
                          (0, a.jsx)("div", {
                              className: u.kL,
                              children: t.map((e) =>
                                  (0, a.jsxs)(
                                      "div",
                                      {
                                          className: u.EK,
                                          children: [
                                              (0, a.jsx)(l.A9s, { size: "xs", color: "currentColor", className: u.z6 }),
                                              (0, a.jsx)(l.Text, { variant: "text-sm/normal", children: (0, i.hx)(e) }),
                                          ],
                                      },
                                      e.toString(),
                                  ),
                              ),
                          }),
                      ],
                  })
                : null,
            null != s && s.length > 0
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          null != c
                              ? (0, a.jsx)(l.Heading, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    className: u.wx,
                                    children: c,
                                })
                              : null,
                          (0, a.jsx)("div", {
                              className: u.kL,
                              children: s.map((e) =>
                                  (0, a.jsxs)(
                                      "div",
                                      {
                                          className: u.EK,
                                          children: [
                                              (0, a.jsx)(l.PGe, { size: "xs", color: "currentColor", className: u.$A }),
                                              (0, a.jsx)(l.Text, { variant: "text-sm/normal", children: (0, i.hx)(e) }),
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

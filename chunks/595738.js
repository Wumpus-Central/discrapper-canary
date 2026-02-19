"use strict";
r.d(t, { A: () => o });
var a = r(627968);
r(64700);
var s = r(503698),
    n = r.n(s),
    l = r(397927),
    c = r(376092),
    i = r(565928);
function o(e) {
    let {
        grantedPermissions: t,
        disabledPermissions: r,
        grantedPermissionsHeader: s,
        disabledPermissionsHeader: o,
        className: d,
    } = e;
    return (0, a.jsxs)("div", {
        className: n()(i.p_, d),
        children: [
            null != t && t.length > 0
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          null != s
                              ? (0, a.jsx)(l.Heading, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    className: i.wx,
                                    children: s,
                                })
                              : null,
                          (0, a.jsx)("div", {
                              className: i.kL,
                              children: t.map((e) =>
                                  (0, a.jsxs)(
                                      "div",
                                      {
                                          className: i.EK,
                                          children: [
                                              (0, a.jsx)(l.A9s, { size: "xs", color: "currentColor", className: i.z6 }),
                                              (0, a.jsx)(l.Text, { variant: "text-sm/normal", children: (0, c.hx)(e) }),
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
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          null != o
                              ? (0, a.jsx)(l.Heading, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    className: i.wx,
                                    children: o,
                                })
                              : null,
                          (0, a.jsx)("div", {
                              className: i.kL,
                              children: r.map((e) =>
                                  (0, a.jsxs)(
                                      "div",
                                      {
                                          className: i.EK,
                                          children: [
                                              (0, a.jsx)(l.PGe, { size: "xs", color: "currentColor", className: i.$A }),
                                              (0, a.jsx)(l.Text, { variant: "text-sm/normal", children: (0, c.hx)(e) }),
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

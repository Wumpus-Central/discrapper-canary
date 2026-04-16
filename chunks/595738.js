a.d(t, { A: () => o });
var s = a(627968);
a(64700);
var n = a(503698),
    i = a.n(n),
    l = a(397927),
    r = a(376092),
    c = a(808469);
function o(e) {
    let {
        grantedPermissions: t,
        disabledPermissions: a,
        grantedPermissionsHeader: n,
        disabledPermissionsHeader: o,
        className: d,
    } = e;
    return (0, s.jsxs)("div", {
        className: i()(c.p_, d),
        children: [
            null != t && t.length > 0
                ? (0, s.jsxs)(s.Fragment, {
                      children: [
                          null != n
                              ? (0, s.jsx)(l.Heading, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    className: c.wx,
                                    children: n,
                                })
                              : null,
                          (0, s.jsx)("div", {
                              className: c.kL,
                              children: t.map((e) =>
                                  (0, s.jsxs)(
                                      "div",
                                      {
                                          className: c.EK,
                                          children: [
                                              (0, s.jsx)(l.A9s, { size: "xs", color: "currentColor", className: c.z6 }),
                                              (0, s.jsx)(l.Text, { variant: "text-sm/normal", children: (0, r.hx)(e) }),
                                          ],
                                      },
                                      e.toString(),
                                  ),
                              ),
                          }),
                      ],
                  })
                : null,
            null != a && a.length > 0
                ? (0, s.jsxs)(s.Fragment, {
                      children: [
                          null != o
                              ? (0, s.jsx)(l.Heading, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    className: c.wx,
                                    children: o,
                                })
                              : null,
                          (0, s.jsx)("div", {
                              className: c.kL,
                              children: a.map((e) =>
                                  (0, s.jsxs)(
                                      "div",
                                      {
                                          className: c.EK,
                                          children: [
                                              (0, s.jsx)(l.PGe, { size: "xs", color: "currentColor", className: c.$A }),
                                              (0, s.jsx)(l.Text, { variant: "text-sm/normal", children: (0, r.hx)(e) }),
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

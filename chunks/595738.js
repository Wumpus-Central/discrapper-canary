a.d(t, { A: () => A });
var s = a(627968);
a(64700);
var l = a(503698),
    n = a.n(l),
    r = a(397927),
    i = a(376092),
    d = a(676770);
function A(e) {
    let {
        grantedPermissions: t,
        disabledPermissions: a,
        grantedPermissionsHeader: l,
        disabledPermissionsHeader: A,
        className: o,
    } = e;
    return (0, s.jsxs)("div", {
        className: n()(d.p_, o),
        children: [
            null != t && t.length > 0
                ? (0, s.jsxs)(s.Fragment, {
                      children: [
                          null != l
                              ? (0, s.jsx)(r.Heading, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    className: d.wx,
                                    children: l,
                                })
                              : null,
                          (0, s.jsx)("div", {
                              className: d.kL,
                              children: t.map((e) =>
                                  (0, s.jsxs)(
                                      "div",
                                      {
                                          className: d.EK,
                                          children: [
                                              (0, s.jsx)(r.A9s, { size: "xs", color: "currentColor", className: d.z6 }),
                                              (0, s.jsx)(r.Text, { variant: "text-sm/normal", children: (0, i.hx)(e) }),
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
                          null != A
                              ? (0, s.jsx)(r.Heading, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    className: d.wx,
                                    children: A,
                                })
                              : null,
                          (0, s.jsx)("div", {
                              className: d.kL,
                              children: a.map((e) =>
                                  (0, s.jsxs)(
                                      "div",
                                      {
                                          className: d.EK,
                                          children: [
                                              (0, s.jsx)(r.PGe, { size: "xs", color: "currentColor", className: d.$A }),
                                              (0, s.jsx)(r.Text, { variant: "text-sm/normal", children: (0, i.hx)(e) }),
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

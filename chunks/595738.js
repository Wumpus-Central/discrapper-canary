a.d(t, { A: () => _ });
var n = a(627968);
a(64700);
var i = a(503698),
    s = a.n(i),
    r = a(397927),
    l = a(376092),
    d = a(76197);
function _(e) {
    let {
        grantedPermissions: t,
        disabledPermissions: a,
        grantedPermissionsHeader: i,
        disabledPermissionsHeader: _,
        className: o,
    } = e;
    return (0, n.jsxs)("div", {
        className: s()(d.p_, o),
        children: [
            null != t && t.length > 0
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          null != i
                              ? (0, n.jsx)(r.Heading, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    className: d.wx,
                                    children: i,
                                })
                              : null,
                          (0, n.jsx)("div", {
                              className: d.kL,
                              children: t.map((e) =>
                                  (0, n.jsxs)(
                                      "div",
                                      {
                                          className: d.EK,
                                          children: [
                                              (0, n.jsx)(r.A9s, { size: "xs", color: "currentColor", className: d.z6 }),
                                              (0, n.jsx)(r.Text, { variant: "text-sm/normal", children: (0, l.hx)(e) }),
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
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          null != _
                              ? (0, n.jsx)(r.Heading, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    className: d.wx,
                                    children: _,
                                })
                              : null,
                          (0, n.jsx)("div", {
                              className: d.kL,
                              children: a.map((e) =>
                                  (0, n.jsxs)(
                                      "div",
                                      {
                                          className: d.EK,
                                          children: [
                                              (0, n.jsx)(r.PGe, { size: "xs", color: "currentColor", className: d.$A }),
                                              (0, n.jsx)(r.Text, { variant: "text-sm/normal", children: (0, l.hx)(e) }),
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

r.d(t, {
    A: () => c,
});
var i = r(627968);
r(64700);
var n = r(503698),
    a = r.n(n),
    o = r(397927),
    s = r(376092),
    l = r(565928);

function c(e) {
    let {
        grantedPermissions: t,
        disabledPermissions: r,
        grantedPermissionsHeader: n,
        disabledPermissionsHeader: c,
        className: d,
    } = e;
    return (0, i.jsxs)("div", {
        className: a()(l.p_, d),
        children: [
            null != t && t.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          null != n
                              ? (0, i.jsx)(o.Heading, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    className: l.wx,
                                    children: n,
                                })
                              : null,
                          (0, i.jsx)("div", {
                              className: l.kL,
                              children: t.map((e) =>
                                  (0, i.jsxs)(
                                      "div",
                                      {
                                          className: l.EK,
                                          children: [
                                              (0, i.jsx)(o.A9s, {
                                                  size: "xs",
                                                  color: "currentColor",
                                                  className: l.z6,
                                              }),
                                              (0, i.jsx)(o.Text, {
                                                  variant: "text-sm/normal",
                                                  children: (0, s.hx)(e),
                                              }),
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
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          null != c
                              ? (0, i.jsx)(o.Heading, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    className: l.wx,
                                    children: c,
                                })
                              : null,
                          (0, i.jsx)("div", {
                              className: l.kL,
                              children: r.map((e) =>
                                  (0, i.jsxs)(
                                      "div",
                                      {
                                          className: l.EK,
                                          children: [
                                              (0, i.jsx)(o.PGe, {
                                                  size: "xs",
                                                  color: "currentColor",
                                                  className: l.$A,
                                              }),
                                              (0, i.jsx)(o.Text, {
                                                  variant: "text-sm/normal",
                                                  children: (0, s.hx)(e),
                                              }),
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

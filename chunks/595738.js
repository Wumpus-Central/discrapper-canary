r.d(t, { A: () => c });
var i = r(627968);
r(64700);
var a = r(503698),
    s = r.n(a),
    n = r(397927),
    o = r(376092),
    l = r(920082);
function c(e) {
    let {
        grantedPermissions: t,
        disabledPermissions: r,
        grantedPermissionsHeader: a,
        disabledPermissionsHeader: c,
        className: _,
    } = e;
    return (0, i.jsxs)("div", {
        className: s()(l.p_, _),
        children: [
            null != t && t.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          null != a
                              ? (0, i.jsx)(n.Heading, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    className: l.wx,
                                    children: a,
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
                                              (0, i.jsx)(n.A9s, { size: "xs", color: "currentColor", className: l.z6 }),
                                              (0, i.jsx)(n.Text, { variant: "text-sm/normal", children: (0, o.hx)(e) }),
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
                              ? (0, i.jsx)(n.Heading, {
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
                                              (0, i.jsx)(n.PGe, { size: "xs", color: "currentColor", className: l.$A }),
                                              (0, i.jsx)(n.Text, { variant: "text-sm/normal", children: (0, o.hx)(e) }),
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

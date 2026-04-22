a.d(t, { A: () => h });
var n = a(627968);
a(64700);
var l = a(503698),
    i = a.n(l),
    s = a(534514),
    r = a(933832),
    o = a(834730),
    c = a(789645),
    d = a(376092),
    u = a(808469);
function h(e) {
    let {
        grantedPermissions: t,
        disabledPermissions: a,
        grantedPermissionsHeader: l,
        disabledPermissionsHeader: h,
        className: m,
    } = e;
    return (0, n.jsxs)("div", {
        className: i()(u.p_, m),
        children: [
            null != t && t.length > 0
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          null != l
                              ? (0, n.jsx)(s.D, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    className: u.wx,
                                    children: l,
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
                                              (0, n.jsx)(r.A, { size: "xs", color: "currentColor", className: u.z6 }),
                                              (0, n.jsx)(o.E, { variant: "text-sm/normal", children: (0, d.hx)(e) }),
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
                          null != h
                              ? (0, n.jsx)(s.D, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    className: u.wx,
                                    children: h,
                                })
                              : null,
                          (0, n.jsx)("div", {
                              className: u.kL,
                              children: a.map((e) =>
                                  (0, n.jsxs)(
                                      "div",
                                      {
                                          className: u.EK,
                                          children: [
                                              (0, n.jsx)(c.P, { size: "xs", color: "currentColor", className: u.$A }),
                                              (0, n.jsx)(o.E, { variant: "text-sm/normal", children: (0, d.hx)(e) }),
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

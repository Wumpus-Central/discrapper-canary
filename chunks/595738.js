n.d(l, { A: () => h });
var e = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    i = n(534514),
    c = n(933832),
    t = n(834730),
    d = n(789645),
    o = n(376092),
    x = n(808469);
function h(s) {
    let {
        grantedPermissions: l,
        disabledPermissions: n,
        grantedPermissionsHeader: a,
        disabledPermissionsHeader: h,
        className: m,
    } = s;
    return (0, e.jsxs)("div", {
        className: r()(x.p_, m),
        children: [
            null != l && l.length > 0
                ? (0, e.jsxs)(e.Fragment, {
                      children: [
                          null != a
                              ? (0, e.jsx)(i.D, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    className: x.wx,
                                    children: a,
                                })
                              : null,
                          (0, e.jsx)("div", {
                              className: x.kL,
                              children: l.map((s) =>
                                  (0, e.jsxs)(
                                      "div",
                                      {
                                          className: x.EK,
                                          children: [
                                              (0, e.jsx)(c.A, { size: "xs", color: "currentColor", className: x.z6 }),
                                              (0, e.jsx)(t.E, { variant: "text-sm/normal", children: (0, o.hx)(s) }),
                                          ],
                                      },
                                      s.toString(),
                                  ),
                              ),
                          }),
                      ],
                  })
                : null,
            null != n && n.length > 0
                ? (0, e.jsxs)(e.Fragment, {
                      children: [
                          null != h
                              ? (0, e.jsx)(i.D, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    className: x.wx,
                                    children: h,
                                })
                              : null,
                          (0, e.jsx)("div", {
                              className: x.kL,
                              children: n.map((s) =>
                                  (0, e.jsxs)(
                                      "div",
                                      {
                                          className: x.EK,
                                          children: [
                                              (0, e.jsx)(d.P, { size: "xs", color: "currentColor", className: x.$A }),
                                              (0, e.jsx)(t.E, { variant: "text-sm/normal", children: (0, o.hx)(s) }),
                                          ],
                                      },
                                      s.toString(),
                                  ),
                              ),
                          }),
                      ],
                  })
                : null,
        ],
    });
}

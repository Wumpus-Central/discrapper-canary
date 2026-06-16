n.d(l, { A: () => x });
var r = n(627968);
n(64700);
var e = n(503698),
    a = n.n(e),
    i = n(534514),
    t = n(933832),
    c = n(834730),
    d = n(789645),
    o = n(376092),
    h = n(808469);
function x(s) {
    let {
        grantedPermissions: l,
        disabledPermissions: n,
        grantedPermissionsHeader: e,
        disabledPermissionsHeader: x,
        className: m,
    } = s;
    return (0, r.jsxs)("div", {
        className: a()(h.p_, m),
        children: [
            null != l && l.length > 0
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          null != e
                              ? (0, r.jsx)(i.D, { variant: "heading-sm/semibold", color: "text-strong", children: e })
                              : null,
                          (0, r.jsx)("div", {
                              className: h.kL,
                              children: l.map((s) =>
                                  (0, r.jsxs)(
                                      "div",
                                      {
                                          className: h.EK,
                                          children: [
                                              (0, r.jsx)(t.A, { size: "xs", color: "currentColor", className: h.z6 }),
                                              (0, r.jsx)(c.E, { variant: "text-sm/normal", children: (0, o.hx)(s) }),
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
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          null != x
                              ? (0, r.jsx)(i.D, { variant: "heading-sm/semibold", color: "text-strong", children: x })
                              : null,
                          (0, r.jsx)("div", {
                              className: h.kL,
                              children: n.map((s) =>
                                  (0, r.jsxs)(
                                      "div",
                                      {
                                          className: h.EK,
                                          children: [
                                              (0, r.jsx)(d.P, { size: "xs", color: "currentColor", className: h.$A }),
                                              (0, r.jsx)(c.E, { variant: "text-sm/normal", children: (0, o.hx)(s) }),
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

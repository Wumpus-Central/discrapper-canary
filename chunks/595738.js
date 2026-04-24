"use strict";
n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var a = n(503698),
    s = n.n(a),
    l = n(534514),
    r = n(933832),
    o = n(834730),
    c = n(789645),
    d = n(376092),
    u = n(808469);
function h(e) {
    let {
        grantedPermissions: t,
        disabledPermissions: n,
        grantedPermissionsHeader: a,
        disabledPermissionsHeader: h,
        className: p,
    } = e;
    return (0, i.jsxs)("div", {
        className: s()(u.p_, p),
        children: [
            null != t && t.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          null != a
                              ? (0, i.jsx)(l.D, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    className: u.wx,
                                    children: a,
                                })
                              : null,
                          (0, i.jsx)("div", {
                              className: u.kL,
                              children: t.map((e) =>
                                  (0, i.jsxs)(
                                      "div",
                                      {
                                          className: u.EK,
                                          children: [
                                              (0, i.jsx)(r.A, { size: "xs", color: "currentColor", className: u.z6 }),
                                              (0, i.jsx)(o.E, { variant: "text-sm/normal", children: (0, d.hx)(e) }),
                                          ],
                                      },
                                      e.toString(),
                                  ),
                              ),
                          }),
                      ],
                  })
                : null,
            null != n && n.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          null != h
                              ? (0, i.jsx)(l.D, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    className: u.wx,
                                    children: h,
                                })
                              : null,
                          (0, i.jsx)("div", {
                              className: u.kL,
                              children: n.map((e) =>
                                  (0, i.jsxs)(
                                      "div",
                                      {
                                          className: u.EK,
                                          children: [
                                              (0, i.jsx)(c.P, { size: "xs", color: "currentColor", className: u.$A }),
                                              (0, i.jsx)(o.E, { variant: "text-sm/normal", children: (0, d.hx)(e) }),
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

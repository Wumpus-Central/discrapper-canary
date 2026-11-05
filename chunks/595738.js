var r = n(477900);
n(582128);
var a = n(503698),
    e = n.n(a),
    i = n(534514),
    c = n(933832),
    d = n(834730),
    o = n(789645),
    t = n(376092),
    h = n(750382);
n.d(
    l,
    {},
    {
        A: function (s) {
            let {
                grantedPermissions: l,
                disabledPermissions: n,
                grantedPermissionsHeader: a,
                disabledPermissionsHeader: x,
                className: m,
            } = s;
            return (0, r.jsxs)("div", {
                className: e()(h.p_, m),
                children: [
                    null != l && l.length > 0
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  null != a
                                      ? (0, r.jsx)(i.D, {
                                            variant: "heading-xs/semibold",
                                            color: "text-strong",
                                            children: a,
                                        })
                                      : null,
                                  (0, r.jsx)("div", {
                                      className: h.kL,
                                      children: l.map((s) =>
                                          (0, r.jsxs)(
                                              "div",
                                              {
                                                  className: h.EK,
                                                  children: [
                                                      (0, r.jsx)(c.CheckmarkLargeIcon, {
                                                          size: "xs",
                                                          color: "currentColor",
                                                          className: h.z6,
                                                      }),
                                                      (0, r.jsx)(d.E, {
                                                          variant: "body-sm/normal",
                                                          children: (0, t.hx)(s),
                                                      }),
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
                                      ? (0, r.jsx)(i.D, {
                                            variant: "heading-xs/semibold",
                                            color: "text-strong",
                                            children: x,
                                        })
                                      : null,
                                  (0, r.jsx)("div", {
                                      className: h.kL,
                                      children: n.map((s) =>
                                          (0, r.jsxs)(
                                              "div",
                                              {
                                                  className: h.EK,
                                                  children: [
                                                      (0, r.jsx)(o.XSmallIcon, {
                                                          size: "xs",
                                                          color: "currentColor",
                                                          className: h.$A,
                                                      }),
                                                      (0, r.jsx)(d.E, {
                                                          variant: "body-sm/normal",
                                                          children: (0, t.hx)(s),
                                                      }),
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
        },
    },
);

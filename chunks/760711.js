var e = n(477900),
    r = n(582128),
    a = n(503698),
    i = n.n(a),
    c = n(534514),
    o = n(933832),
    d = n(834730),
    t = n(789645),
    h = n(558393),
    m = n(886094),
    u = n(839317);
n.d(
    s,
    {},
    {
        A: function (l) {
            let {
                    grantedPermissions: s,
                    disabledPermissions: n,
                    grantedPermissionsHeader: a,
                    disabledPermissionsHeader: x,
                    className: j,
                    guild: g,
                } = l,
                p = r.useMemo(() => (null != g ? h.A.getGuildPermissionSpecMap(g) : null), [g]);
            return (0, e.jsxs)("div", {
                className: i()(u.p_, j),
                children: [
                    null != s && s.length > 0
                        ? (0, e.jsxs)(e.Fragment, {
                              children: [
                                  null != a
                                      ? (0, e.jsx)(c.D, {
                                            variant: "heading-xs/semibold",
                                            color: "text-strong",
                                            children: a,
                                        })
                                      : null,
                                  (0, e.jsx)("div", {
                                      className: u.kL,
                                      children: s.map((l) =>
                                          (0, e.jsxs)(
                                              "div",
                                              {
                                                  className: u.EK,
                                                  children: [
                                                      (0, e.jsx)(o.CheckmarkLargeIcon, {
                                                          size: "xs",
                                                          color: "currentColor",
                                                          className: u.z6,
                                                      }),
                                                      (0, e.jsx)(d.E, {
                                                          variant: "body-sm/normal",
                                                          children: (0, m.A)(l, p),
                                                      }),
                                                  ],
                                              },
                                              l.toString(),
                                          ),
                                      ),
                                  }),
                              ],
                          })
                        : null,
                    null != n && n.length > 0
                        ? (0, e.jsxs)(e.Fragment, {
                              children: [
                                  null != x
                                      ? (0, e.jsx)(c.D, {
                                            variant: "heading-xs/semibold",
                                            color: "text-strong",
                                            children: x,
                                        })
                                      : null,
                                  (0, e.jsx)("div", {
                                      className: u.kL,
                                      children: n.map((l) =>
                                          (0, e.jsxs)(
                                              "div",
                                              {
                                                  className: u.EK,
                                                  children: [
                                                      (0, e.jsx)(t.XSmallIcon, {
                                                          size: "xs",
                                                          color: "currentColor",
                                                          className: u.$A,
                                                      }),
                                                      (0, e.jsx)(d.E, {
                                                          variant: "body-sm/normal",
                                                          children: (0, m.A)(l, p),
                                                      }),
                                                  ],
                                              },
                                              l.toString(),
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

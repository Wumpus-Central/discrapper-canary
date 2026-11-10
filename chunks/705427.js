var n = r(477900);
r(582128);
var l = r(503698),
    a = r.n(l),
    i = r(866665),
    s = r(939249),
    o = r(548411),
    c = r(152367),
    u = r(646514),
    d = r(237528),
    f = r(834730),
    m = r(742589),
    p = r(465006),
    h = r(845079),
    g = r(191850),
    x = r(792996),
    j = r(631417);
r.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    title: t,
                    actions: r,
                    breadcrumb: l,
                    project: b,
                    onOpenProjectSettings: v,
                    transparent: C = !1,
                    onBack: y,
                    hideShareTarget: w = !1,
                    preview: N = !1,
                } = e,
                R = x.intl.string(g.default.FzfmQ8),
                k = x.intl.string(g.default["/Tl7an"]),
                S = (0, p.Ay)(w ? null : (b ?? null));
            return (0, n.jsx)(m.A, {
                hideSearch: !0,
                transparent: C,
                toolbar: r,
                className: a()(j.wx, { [j.VH]: N }),
                "aria-label": t,
                children: (0, n.jsxs)("div", {
                    className: j.QF,
                    children: [
                        null != y
                            ? (0, n.jsx)(i.m, {
                                  asContainer: !0,
                                  text: k,
                                  position: "bottom",
                                  children: (0, n.jsx)(s.D, {
                                      className: j.Gv,
                                      onClick: y,
                                      "aria-label": k,
                                      children: (0, n.jsx)(o.ArrowLargeLeftIcon, {
                                          size: "refresh_sm",
                                          color: "currentColor",
                                      }),
                                  }),
                              })
                            : null,
                        null == b
                            ? (0, n.jsx)(c.MagicWandIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: u.A.colors.ICON_STRONG,
                                  className: j.Kk,
                              })
                            : null,
                        null != l
                            ? (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(m.A.Title, { onClick: l.onClick, children: l.title }),
                                      (0, n.jsx)(m.A.Caret, {}),
                                  ],
                              })
                            : null,
                        null != b && null != v
                            ? (0, n.jsx)(i.m, {
                                  asContainer: !0,
                                  text: R,
                                  position: "bottom",
                                  children: (0, n.jsx)(s.D, {
                                      className: j.FF,
                                      onClick: v,
                                      "aria-label": R,
                                      children: (0, n.jsx)(h.A, { project: b, size: "header" }),
                                  }),
                              })
                            : null,
                        (0, n.jsx)(m.A.Title, { className: j.Qw, wrapperClassName: j.DD, children: t }),
                        N
                            ? (0, n.jsx)("span", {
                                  className: j.x4,
                                  children: (0, n.jsx)(d.v, {
                                      text: x.intl.string(g.default.gVlSJg),
                                      variant: "orangeLight",
                                  }),
                              })
                            : null,
                        null != S
                            ? (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(m.A.Divider, { className: j.uN }),
                                      (0, n.jsx)(f.E, {
                                          tag: "span",
                                          variant: "body-sm/medium",
                                          color: "text-muted",
                                          lineClamp: 1,
                                          className: j.l0,
                                          children: S,
                                      }),
                                  ],
                              })
                            : null,
                    ],
                }),
            });
        },
    },
);

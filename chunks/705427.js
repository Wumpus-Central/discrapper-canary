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
    x = r(191850),
    g = r(792996),
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
                    onBack: w,
                    hideShareTarget: y = !1,
                    preview: N = !1,
                    draft: k = !1,
                } = e,
                R = g.intl.string(x.default.FzfmQ8),
                S = g.intl.string(x.default["/Tl7an"]),
                A = (0, p.Ay)(y ? null : (b ?? null));
            return (0, n.jsx)(m.A, {
                hideSearch: !0,
                transparent: C,
                toolbar: r,
                className: a()(j.wx, { [j.VH]: N }),
                "aria-label": t,
                children: (0, n.jsxs)("div", {
                    className: j.QF,
                    children: [
                        null != w
                            ? (0, n.jsx)(i.m, {
                                  asContainer: !0,
                                  text: S,
                                  position: "bottom",
                                  children: (0, n.jsx)(s.D, {
                                      className: j.Gv,
                                      onClick: w,
                                      "aria-label": S,
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
                        k
                            ? (0, n.jsx)("span", {
                                  className: j.kK,
                                  children: (0, n.jsx)(d.v, {
                                      text: g.intl.string(x.default["2+GiMw"]),
                                      variant: "orangeLight",
                                  }),
                              })
                            : null,
                        null != A
                            ? (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(m.A.Divider, { className: j.uN }),
                                      (0, n.jsx)(f.E, {
                                          tag: "span",
                                          variant: "body-sm/medium",
                                          color: "text-muted",
                                          lineClamp: 1,
                                          className: j.l0,
                                          children: A,
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

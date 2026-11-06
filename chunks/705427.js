var r = n(477900);
n(582128);
var l = n(503698),
    a = n.n(l),
    i = n(866665),
    s = n(939249),
    o = n(548411),
    c = n(152367),
    u = n(646514),
    d = n(237528),
    f = n(834730),
    m = n(742589),
    p = n(465006),
    h = n(845079),
    g = n(191850),
    x = n(792996),
    j = n(631417);
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    title: t,
                    actions: n,
                    breadcrumb: l,
                    project: v,
                    onOpenProjectSettings: b,
                    transparent: y = !1,
                    onBack: w,
                    hideShareTarget: C = !1,
                    preview: N = !1,
                } = e,
                A = x.intl.string(g.default.FzfmQ8),
                R = x.intl.string(g.default["/Tl7an"]),
                S = (0, p.Ay)(C ? null : (v ?? null));
            return (0, r.jsx)(m.A, {
                hideSearch: !0,
                transparent: y,
                toolbar: n,
                className: a()(j.wx, { [j.VH]: N }),
                "aria-label": t,
                children: (0, r.jsxs)("div", {
                    className: j.QF,
                    children: [
                        null != w
                            ? (0, r.jsx)(i.m, {
                                  asContainer: !0,
                                  text: R,
                                  position: "bottom",
                                  children: (0, r.jsx)(s.D, {
                                      className: j.Gv,
                                      onClick: w,
                                      "aria-label": R,
                                      children: (0, r.jsx)(o.ArrowLargeLeftIcon, {
                                          size: "refresh_sm",
                                          color: "currentColor",
                                      }),
                                  }),
                              })
                            : null,
                        null == v
                            ? (0, r.jsx)(c.MagicWandIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: u.A.colors.ICON_STRONG,
                                  className: j.Kk,
                              })
                            : null,
                        null != l
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(m.A.Title, { onClick: l.onClick, children: l.title }),
                                      (0, r.jsx)(m.A.Caret, {}),
                                  ],
                              })
                            : null,
                        null != v && null != b
                            ? (0, r.jsx)(i.m, {
                                  asContainer: !0,
                                  text: A,
                                  position: "bottom",
                                  children: (0, r.jsx)(s.D, {
                                      className: j.FF,
                                      onClick: b,
                                      "aria-label": A,
                                      children: (0, r.jsx)(h.A, { project: v, size: "header" }),
                                  }),
                              })
                            : null,
                        (0, r.jsx)(m.A.Title, { className: j.Qw, wrapperClassName: j.DD, children: t }),
                        N
                            ? (0, r.jsx)("span", {
                                  className: j.x4,
                                  children: (0, r.jsx)(d.v, {
                                      text: x.intl.string(g.default.gVlSJg),
                                      variant: "orangeLight",
                                  }),
                              })
                            : null,
                        null != S
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(m.A.Divider, { className: j.uN }),
                                      (0, r.jsx)(f.E, {
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

var n = r(477900);
r(582128);
var l = r(152367),
    a = r(646514),
    i = r(866665),
    s = r(939249),
    o = r(834730),
    c = r(22231),
    u = r(742589),
    d = r(845079),
    f = r(258576),
    m = r(792996),
    p = r(631417);
r.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    title: t,
                    actions: r,
                    breadcrumb: h,
                    project: x,
                    onOpenProjectSettings: g,
                    transparent: b = !1,
                    draft: j = !1,
                } = e,
                v = m.intl.string(f.default.FzfmQ8);
            return (0, n.jsx)(u.A, {
                hideSearch: !0,
                transparent: b,
                toolbar: r,
                className: p.wx,
                "aria-label": t,
                children: (0, n.jsxs)("div", {
                    className: p.QF,
                    children: [
                        null == x
                            ? (0, n.jsx)(l.MagicWandIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: a.A.colors.ICON_STRONG,
                                  className: p.Kk,
                              })
                            : null,
                        null != h
                            ? (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(u.A.Title, { onClick: h.onClick, children: h.title }),
                                      (0, n.jsx)(u.A.Caret, {}),
                                  ],
                              })
                            : null,
                        null != x && null != g
                            ? (0, n.jsx)(i.m, {
                                  asContainer: !0,
                                  text: v,
                                  position: "bottom",
                                  children: (0, n.jsx)(s.D, {
                                      className: p.FF,
                                      onClick: g,
                                      "aria-label": v,
                                      children: (0, n.jsx)(d.A, { project: x, size: "title" }),
                                  }),
                              })
                            : null,
                        (0, n.jsx)(u.A.Title, { className: p.Qw, wrapperClassName: p.DD, children: t }),
                        j
                            ? (0, n.jsxs)(o.E, {
                                  tag: "span",
                                  variant: "body-xs/medium",
                                  color: "text-subtle",
                                  className: p.qY,
                                  children: [
                                      (0, n.jsx)(c.PencilIcon, {
                                          size: "xxs",
                                          color: a.A.colors.ICON_SUBTLE,
                                          "aria-hidden": !0,
                                      }),
                                      m.intl.string(f.default["2+GiMw"]),
                                  ],
                              })
                            : null,
                    ],
                }),
            });
        },
    },
);

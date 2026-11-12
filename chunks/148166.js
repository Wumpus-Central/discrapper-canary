var n = l(477900),
    i = l(582128),
    s = l(503698),
    a = l.n(s),
    r = l(646514),
    d = l(605810);
l.d(
    t,
    {},
    {
        R: function (e) {
            let { src: t, isCircular: l, FallbackIcon: s, children: o } = e,
                [c, u] = i.useState(t),
                [m, x] = i.useState(!1);
            return (
                c !== t && (u(t), x(!1)),
                (0, n.jsxs)("span", {
                    className: a()(d.xX, { [d.A6]: l }),
                    children: [
                        null == t || m
                            ? (0, n.jsx)("span", {
                                  className: d.zf,
                                  children: (0, n.jsx)(s, {
                                      size: "md",
                                      color: r.A.colors.ICON_MUTED,
                                      "aria-hidden": !0,
                                  }),
                              })
                            : (0, n.jsx)("img", {
                                  className: d.wb,
                                  src: t,
                                  alt: "",
                                  "aria-hidden": !0,
                                  loading: "lazy",
                                  onError: () => x(!0),
                              }),
                        o,
                    ],
                })
            );
        },
    },
);

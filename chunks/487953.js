n.d(t, {
    A: () => h,
}),
    n(896048),
    n(228524);
var l = n(627968),
    a = n(64700),
    r = n(230109),
    i = n(397927),
    s = n(735991),
    c = n(635350),
    o = n(486020),
    d = n(841985),
    u = n(985018),
    p = n(286453);
let h = function (e) {
    var t, n, h;
    let { application: m, onSelectApplication: b, showCategory: f = !1 } = e,
        g = a.useRef(null),
        x = null == (n = m.categories) ? void 0 : n[0],
        [v, j] = a.useState(!1),
        A = a.useCallback((e) => {
            e && j(!0);
        }, []),
        _ = (0, s.NO)(m),
        y = a.useCallback(() => {
            b(m.id);
        }, [b, m.id]),
        O = a.useMemo(
            () =>
                v
                    ? o.Ay.getApplicationIconURL({
                          id: m.id,
                          icon: m.icon,
                          size: 48,
                      })
                    : void 0,
            [v, m],
        ),
        S = f && null != x;
    return (0, l.jsx)(r.L, {
        innerRef: g,
        onChange: A,
        active: !v,
        children: (0, l.jsx)("div", {
            ref: g,
            className: p.kL,
            children: (0, l.jsxs)(c.A, {
                className: p.Nr,
                onClick: y,
                onContextMenu: () => {},
                "aria-label": u.intl.string(u.t.np1Wru),
                children: [
                    (0, l.jsxs)("div", {
                        className: p.wx,
                        children: [
                            (0, l.jsx)("div", {
                                style: {
                                    width: "100%",
                                    display: "block",
                                    aspectRatio: 16 / 9,
                                },
                                children: v
                                    ? (0, l.jsx)(d.A, {
                                          application: m,
                                          bannerType: "card",
                                          iconURL: O,
                                      })
                                    : null,
                            }),
                            (0, l.jsx)("div", {
                                className: p.H,
                                style: {
                                    height: 28,
                                },
                                children: v
                                    ? (0, l.jsx)("img", {
                                          src: O,
                                          alt: "",
                                          className: p.my,
                                          height: 48,
                                          width: 48,
                                          style: {
                                              borderWidth: 4,
                                              marginLeft: 12,
                                          },
                                      })
                                    : null,
                            }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: p.eV,
                        children: [
                            (0, l.jsx)("div", {
                                className: p.gn,
                                children: (0, l.jsx)("div", {
                                    className: p.DD,
                                    children: (0, l.jsx)(i.Heading, {
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        className: p.JB,
                                        children: m.name,
                                    }),
                                }),
                            }),
                            S || _
                                ? (0, l.jsxs)("div", {
                                      className: p.op,
                                      children: [
                                          S
                                              ? (0, l.jsx)(i.Text, {
                                                    className: p.m4,
                                                    variant: "text-xs/medium",
                                                    color: "text-default",
                                                    children: x.name,
                                                })
                                              : null,
                                          S && _
                                              ? (0, l.jsx)(i.Text, {
                                                    variant: "text-xs/medium",
                                                    color: "text-subtle",
                                                    children: "•",
                                                })
                                              : null,
                                          _
                                              ? (0, l.jsx)(i.Text, {
                                                    variant: "text-xs/medium",
                                                    color: "text-subtle",
                                                    children: u.intl.string(u.t["/eVltv"]),
                                                })
                                              : null,
                                      ],
                                  })
                                : null,
                            (0, l.jsx)(i.Text, {
                                className: p.h_,
                                variant: "text-sm/medium",
                                color: "text-default",
                                lineClamp: S || _ ? 2 : 3,
                                children:
                                    null != (t = null == (h = m.directory_entry) ? void 0 : h.short_description)
                                        ? t
                                        : m.description,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
};

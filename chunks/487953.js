a.d(t, { A: () => h });
var n = a(627968),
    i = a(64700),
    l = a(230109),
    s = a(397927),
    r = a(735991),
    o = a(635350),
    c = a(486020),
    d = a(841985),
    u = a(985018),
    m = a(92400);
let h = function (e) {
    let { application: t, onSelectApplication: a, showCategory: h = !1 } = e,
        p = i.useRef(null),
        _ = t.categories?.[0],
        [g, x] = i.useState(!1),
        A = i.useCallback((e) => {
            e && x(!0);
        }, []),
        f = (0, r.NO)(t),
        b = i.useCallback(() => {
            a(t.id);
        }, [a, t.id]),
        C = i.useMemo(() => (g ? c.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 48 }) : void 0), [g, t]),
        v = h && null != _;
    return (0, n.jsx)(l.L, {
        innerRef: p,
        onChange: A,
        active: !g,
        children: (0, n.jsx)("div", {
            ref: p,
            className: m.kL,
            children: (0, n.jsxs)(o.A, {
                className: m.Nr,
                onClick: b,
                onContextMenu: () => {},
                "aria-label": u.intl.string(u.t.np1Wru),
                children: [
                    (0, n.jsxs)("div", {
                        className: m.wx,
                        children: [
                            (0, n.jsx)("div", {
                                style: { width: "100%", display: "block", aspectRatio: 16 / 9 },
                                children: g
                                    ? (0, n.jsx)(d.A, { application: t, bannerType: "card", iconURL: C })
                                    : null,
                            }),
                            (0, n.jsx)("div", {
                                className: m.H,
                                style: { height: 28 },
                                children: g
                                    ? (0, n.jsx)("img", {
                                          src: C,
                                          alt: "",
                                          className: m.my,
                                          height: 48,
                                          width: 48,
                                          style: { borderWidth: 4, marginLeft: 12 },
                                      })
                                    : null,
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: m.eV,
                        children: [
                            (0, n.jsx)("div", {
                                className: m.gn,
                                children: (0, n.jsx)("div", {
                                    className: m.DD,
                                    children: (0, n.jsx)(s.Heading, {
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        className: m.JB,
                                        children: t.name,
                                    }),
                                }),
                            }),
                            v || f
                                ? (0, n.jsxs)("div", {
                                      className: m.op,
                                      children: [
                                          v
                                              ? (0, n.jsx)(s.Text, {
                                                    className: m.m4,
                                                    variant: "text-xs/medium",
                                                    color: "text-default",
                                                    children: _.name,
                                                })
                                              : null,
                                          v && f
                                              ? (0, n.jsx)(s.Text, {
                                                    variant: "text-xs/medium",
                                                    color: "text-subtle",
                                                    children: "•",
                                                })
                                              : null,
                                          f
                                              ? (0, n.jsx)(s.Text, {
                                                    variant: "text-xs/medium",
                                                    color: "text-subtle",
                                                    children: u.intl.string(u.t["/eVltv"]),
                                                })
                                              : null,
                                      ],
                                  })
                                : null,
                            (0, n.jsx)(s.Text, {
                                className: m.h_,
                                variant: "text-sm/medium",
                                color: "text-default",
                                lineClamp: v || f ? 2 : 3,
                                children: t.directory_entry?.short_description ?? t.description,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
};

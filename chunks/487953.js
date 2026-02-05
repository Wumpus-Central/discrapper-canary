a.d(t, { A: () => m });
var n = a(627968),
    i = a(64700),
    s = a(230109),
    l = a(397927),
    r = a(735991),
    o = a(635350),
    c = a(486020),
    d = a(841985),
    u = a(985018),
    h = a(286453);
let m = function (e) {
    let { application: t, onSelectApplication: a, showCategory: m = !1 } = e,
        p = i.useRef(null),
        _ = t.categories?.[0],
        [g, x] = i.useState(!1),
        A = i.useCallback((e) => {
            e && x(!0);
        }, []),
        C = (0, r.NO)(t),
        b = i.useCallback(() => {
            a(t.id);
        }, [a, t.id]),
        v = i.useMemo(() => (g ? c.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 48 }) : void 0), [g, t]),
        f = m && null != _;
    return (0, n.jsx)(s.L, {
        innerRef: p,
        onChange: A,
        active: !g,
        children: (0, n.jsx)("div", {
            ref: p,
            className: h.kL,
            children: (0, n.jsxs)(o.A, {
                className: h.Nr,
                onClick: b,
                onContextMenu: () => {},
                "aria-label": u.intl.string(u.t.np1Wru),
                children: [
                    (0, n.jsxs)("div", {
                        className: h.wx,
                        children: [
                            (0, n.jsx)("div", {
                                style: { width: "100%", display: "block", aspectRatio: 16 / 9 },
                                children: g
                                    ? (0, n.jsx)(d.A, { application: t, bannerType: "card", iconURL: v })
                                    : null,
                            }),
                            (0, n.jsx)("div", {
                                className: h.H,
                                style: { height: 28 },
                                children: g
                                    ? (0, n.jsx)("img", {
                                          src: v,
                                          alt: "",
                                          className: h.my,
                                          height: 48,
                                          width: 48,
                                          style: { borderWidth: 4, marginLeft: 12 },
                                      })
                                    : null,
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: h.eV,
                        children: [
                            (0, n.jsx)("div", {
                                className: h.gn,
                                children: (0, n.jsx)("div", {
                                    className: h.DD,
                                    children: (0, n.jsx)(l.Heading, {
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        className: h.JB,
                                        children: t.name,
                                    }),
                                }),
                            }),
                            f || C
                                ? (0, n.jsxs)("div", {
                                      className: h.op,
                                      children: [
                                          f
                                              ? (0, n.jsx)(l.Text, {
                                                    className: h.m4,
                                                    variant: "text-xs/medium",
                                                    color: "text-default",
                                                    children: _.name,
                                                })
                                              : null,
                                          f && C
                                              ? (0, n.jsx)(l.Text, {
                                                    variant: "text-xs/medium",
                                                    color: "text-subtle",
                                                    children: "•",
                                                })
                                              : null,
                                          C
                                              ? (0, n.jsx)(l.Text, {
                                                    variant: "text-xs/medium",
                                                    color: "text-subtle",
                                                    children: u.intl.string(u.t["/eVltv"]),
                                                })
                                              : null,
                                      ],
                                  })
                                : null,
                            (0, n.jsx)(l.Text, {
                                className: h.h_,
                                variant: "text-sm/medium",
                                color: "text-default",
                                lineClamp: f || C ? 2 : 3,
                                children: t.directory_entry?.short_description ?? t.description,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
};

a.d(t, { A: () => p });
var n = a(627968),
    l = a(64700),
    i = a(230109),
    s = a(534514),
    r = a(834730),
    o = a(735991),
    c = a(635350),
    d = a(486020),
    u = a(841985),
    h = a(985018),
    m = a(92400);
let p = function (e) {
    let { application: t, onSelectApplication: a, showCategory: p = !1 } = e,
        _ = l.useRef(null),
        g = t.categories?.[0],
        [x, A] = l.useState(!1),
        f = l.useCallback((e) => {
            e && A(!0);
        }, []),
        C = (0, o.NO)(t),
        v = l.useCallback(() => {
            a(t.id);
        }, [a, t.id]),
        b = l.useMemo(() => (x ? d.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 48 }) : void 0), [x, t]),
        j = p && null != g;
    return (0, n.jsx)(i.L, {
        innerRef: _,
        onChange: f,
        active: !x,
        children: (0, n.jsx)("div", {
            ref: _,
            className: m.kL,
            children: (0, n.jsxs)(c.A, {
                className: m.Nr,
                onClick: v,
                onContextMenu: () => {},
                "aria-label": h.intl.string(h.t.np1Wru),
                children: [
                    (0, n.jsxs)("div", {
                        className: m.wx,
                        children: [
                            (0, n.jsx)("div", {
                                style: { width: "100%", display: "block", aspectRatio: 16 / 9 },
                                children: x
                                    ? (0, n.jsx)(u.A, { application: t, bannerType: "card", iconURL: b })
                                    : null,
                            }),
                            (0, n.jsx)("div", {
                                className: m.H,
                                style: { height: 28 },
                                children: x
                                    ? (0, n.jsx)("img", {
                                          src: b,
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
                                    children: (0, n.jsx)(s.D, {
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        className: m.JB,
                                        children: t.name,
                                    }),
                                }),
                            }),
                            j || C
                                ? (0, n.jsxs)("div", {
                                      className: m.op,
                                      children: [
                                          j
                                              ? (0, n.jsx)(r.E, {
                                                    className: m.m4,
                                                    variant: "text-xs/medium",
                                                    color: "text-default",
                                                    children: g.name,
                                                })
                                              : null,
                                          j && C
                                              ? (0, n.jsx)(r.E, {
                                                    variant: "text-xs/medium",
                                                    color: "text-subtle",
                                                    children: "•",
                                                })
                                              : null,
                                          C
                                              ? (0, n.jsx)(r.E, {
                                                    variant: "text-xs/medium",
                                                    color: "text-subtle",
                                                    children: h.intl.string(h.t["/eVltv"]),
                                                })
                                              : null,
                                      ],
                                  })
                                : null,
                            (0, n.jsx)(r.E, {
                                className: m.h_,
                                variant: "text-sm/medium",
                                color: "text-default",
                                lineClamp: j || C ? 2 : 3,
                                children: t.directory_entry?.short_description ?? t.description,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
};

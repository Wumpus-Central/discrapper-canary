n.d(t, { Z: () => u }), n(388685);
var r = n(951288),
    l = n(647438),
    o = n(481060),
    i = n(36361),
    a = n(530171),
    c = n(388032),
    s = n(457454);
function u(e) {
    var t;
    let n,
        { node: u } = e,
        [d, f] = l.useState(!1),
        { layout: b, collapseAfter: p, ContextProvider: y, useCollapsibleTitle: j } = u,
        m = b.filter((e) => {
            var t, n;
            return null == (n = null == (t = e.usePredicate) ? void 0 : t.call(e)) || n;
        }),
        v = null != p ? m.slice(0, p) : m,
        x = null != p ? m.slice(p) : [],
        g = null != y ? y : l.Fragment,
        h =
            null != (t = null == j ? void 0 : j(d, x.length))
                ? t
                : ((n = x.length),
                  d
                      ? c.intl.formatToPlainString(c.t["3SHL+d"], { count: n })
                      : c.intl.formatToPlainString(c.t["8JRFyZ"], { count: n }));
    return (0, r.jsx)(g, {
        children: (0, r.jsxs)(o.Kqy, {
            gap: 8,
            children: [
                v.map((e, t) =>
                    (0, r.jsxs)(
                        l.Fragment,
                        {
                            children: [
                                (0, r.jsx)(i.Z, { node: e }),
                                x.length > 0 && t !== v.length - 1 && (0, r.jsx)(o.izJ, {}),
                            ],
                        },
                        e.key,
                    ),
                ),
                x.length > 0 &&
                    (0, r.jsxs)("div", {
                        className: s.collapsibleContainer,
                        children: [
                            (0, r.jsx)(o.izJ, { className: s.hoverDivider }),
                            (0, r.jsx)(a.I, {
                                title: h,
                                isOpen: d,
                                setIsOpen: f,
                                compact: !0,
                                children: (0, r.jsx)(o.Kqy, {
                                    gap: 8,
                                    children: x.map((e, t) =>
                                        (0, r.jsxs)(
                                            l.Fragment,
                                            {
                                                children: [
                                                    (0, r.jsx)(i.Z, { node: e }),
                                                    t !== x.length - 1 && (0, r.jsx)(o.izJ, {}),
                                                ],
                                            },
                                            e.key,
                                        ),
                                    ),
                                }),
                            }),
                        ],
                    }),
            ],
        }),
    });
}

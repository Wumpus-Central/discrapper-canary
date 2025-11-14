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
        { layout: b, collapseAfter: p, ContextProvider: y, useCollapsibleTitle: j, useCollapsibleSubtitle: m } = u,
        v = b.filter((e) => {
            var t, n;
            return null == (n = null == (t = e.usePredicate) ? void 0 : t.call(e)) || n;
        }),
        x = null != p ? v.slice(0, p) : v,
        g = null != p ? v.slice(p) : [],
        h = null != y ? y : l.Fragment,
        O =
            null != (t = null == j ? void 0 : j(d, g.length))
                ? t
                : ((n = g.length),
                  d
                      ? c.intl.formatToPlainString(c.t["3SHL+d"], { count: n })
                      : c.intl.formatToPlainString(c.t["8JRFyZ"], { count: n })),
        P = null == m ? void 0 : m();
    return (0, r.jsx)(h, {
        children: (0, r.jsxs)(o.Kqy, {
            gap: 8,
            children: [
                x.map((e, t) =>
                    (0, r.jsxs)(
                        l.Fragment,
                        {
                            children: [
                                (0, r.jsx)(i.Z, { node: e }),
                                g.length > 0 && t !== x.length - 1 && (0, r.jsx)(o.izJ, {}),
                            ],
                        },
                        e.key,
                    ),
                ),
                g.length > 0 &&
                    (0, r.jsxs)("div", {
                        className: s.collapsibleContainer,
                        children: [
                            (0, r.jsx)(o.izJ, { className: s.hoverDivider }),
                            (0, r.jsx)(a.I, {
                                title: O,
                                subtitle: P,
                                isOpen: d,
                                setIsOpen: f,
                                children: (0, r.jsx)(o.Kqy, {
                                    gap: 8,
                                    padding: { top: 8 },
                                    children: g.map((e, t) =>
                                        (0, r.jsxs)(
                                            l.Fragment,
                                            {
                                                children: [
                                                    (0, r.jsx)(i.Z, { node: e }),
                                                    t !== g.length - 1 && (0, r.jsx)(o.izJ, {}),
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

n.d(t, { Z: () => u }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(481060),
    o = n(36361),
    a = n(530171),
    c = n(388032),
    s = n(457454);
function u(e) {
    var t;
    let n,
        { node: u } = e,
        { useTitle: d } = u,
        [f, b] = l.useState(!1),
        { layout: p, collapseAfter: y, ContextProvider: j, useCollapsibleTitle: v, useCollapsedSubtitle: m } = u,
        g = p.filter((e) => {
            var t, n;
            return null == (n = null == (t = e.usePredicate) ? void 0 : t.call(e)) || n;
        }),
        x = null != y ? g.slice(0, y) : g,
        h = null != y ? g.slice(y) : [],
        O = null != j ? j : l.Fragment,
        S = null == d ? void 0 : d(),
        P =
            null != (t = null == v ? void 0 : v(f, h.length))
                ? t
                : ((n = h.length),
                  f
                      ? c.intl.formatToPlainString(c.t["3SHL+d"], { count: n })
                      : c.intl.formatToPlainString(c.t["8JRFyZ"], { count: n })),
        C = null == m ? void 0 : m();
    return (0, r.jsx)(O, {
        children: (0, r.jsxs)(i.Kqy, {
            gap: 8,
            children: [
                null != S &&
                    (0, r.jsx)(i.Heading, {
                        variant: "heading-md/semibold",
                        color: "header-secondary",
                        className: s.listTitle,
                        children: S,
                    }),
                x.map((e, t) =>
                    (0, r.jsxs)(
                        l.Fragment,
                        {
                            children: [
                                (0, r.jsx)(o.Z, { node: e }),
                                h.length > 0 && t !== x.length - 1 && (0, r.jsx)(i.izJ, {}),
                            ],
                        },
                        e.key,
                    ),
                ),
                h.length > 0 &&
                    (0, r.jsxs)("div", {
                        className: s.collapsibleContainer,
                        children: [
                            (0, r.jsx)(i.izJ, { className: s.hoverDivider }),
                            (0, r.jsx)(a.I, {
                                title: P,
                                collapsedSubtitle: C,
                                isOpen: f,
                                setIsOpen: b,
                                children: (0, r.jsx)(i.Kqy, {
                                    gap: 8,
                                    padding: { top: 8 },
                                    children: h.map((e, t) =>
                                        (0, r.jsxs)(
                                            l.Fragment,
                                            {
                                                children: [
                                                    (0, r.jsx)(o.Z, { node: e }),
                                                    t !== h.length - 1 && (0, r.jsx)(i.izJ, {}),
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

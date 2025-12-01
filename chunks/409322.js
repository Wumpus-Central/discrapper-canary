n.d(t, { Z: () => d }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(481060),
    o = n(36361),
    a = n(111161),
    s = n(530171),
    c = n(388032),
    u = n(457454);
function d(e) {
    var t;
    let n,
        { node: d } = e,
        { useTitle: f } = d,
        [p, b] = l.useState(!1),
        { layout: y, collapseAfter: g, ContextProvider: v, useCollapsibleTitle: m, useCollapsedSubtitle: h } = d,
        x = y.filter((e) => {
            var t, n;
            return null == (n = null == (t = e.usePredicate) ? void 0 : t.call(e)) || n;
        }),
        j = null != g ? x.slice(0, g) : x,
        O = null != g ? x.slice(g) : [],
        C = null != v ? v : l.Fragment,
        P = null == f ? void 0 : f(),
        S =
            null != (t = null == m ? void 0 : m(p, O.length))
                ? t
                : ((n = O.length),
                  p
                      ? c.intl.formatToPlainString(c.t["3SHL+d"], { count: n })
                      : c.intl.formatToPlainString(c.t["8JRFyZ"], { count: n })),
        _ = null == h ? void 0 : h();
    return (0, r.jsx)(C, {
        children: (0, r.jsxs)(i.Kqy, {
            gap: 8,
            children: [
                null != P &&
                    (0, r.jsx)(i.Heading, {
                        variant: "heading-md/semibold",
                        color: "header-secondary",
                        className: u.listTitle,
                        children: P,
                    }),
                j.map((e, t) =>
                    (0, r.jsxs)(
                        l.Fragment,
                        {
                            children: [
                                (0, r.jsx)(o.Z, { node: e }),
                                O.length > 0 && t !== j.length - 1 && (0, r.jsx)(a.Z, {}),
                            ],
                        },
                        e.key,
                    ),
                ),
                O.length > 0 &&
                    (0, r.jsxs)("div", {
                        className: u.collapsibleContainer,
                        children: [
                            (0, r.jsx)(a.Z, { className: u.hoverDivider }),
                            (0, r.jsx)(s.I, {
                                title: S,
                                collapsedSubtitle: _,
                                isExpanded: p,
                                onExpandedChange: b,
                                children: (0, r.jsx)(i.Kqy, {
                                    gap: 8,
                                    padding: { top: 8 },
                                    children: O.map((e, t) =>
                                        (0, r.jsxs)(
                                            l.Fragment,
                                            {
                                                children: [
                                                    (0, r.jsx)(o.Z, { node: e }),
                                                    t !== O.length - 1 && (0, r.jsx)(a.Z, {}),
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

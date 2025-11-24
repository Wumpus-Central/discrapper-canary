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
        [b, y] = l.useState(!1),
        { layout: p, collapseAfter: v, ContextProvider: j, useCollapsibleTitle: g, useCollapsedSubtitle: m } = d,
        h = p.filter((e) => {
            var t, n;
            return null == (n = null == (t = e.usePredicate) ? void 0 : t.call(e)) || n;
        }),
        x = null != v ? h.slice(0, v) : h,
        O = null != v ? h.slice(v) : [],
        S = null != j ? j : l.Fragment,
        C = null == f ? void 0 : f(),
        P =
            null != (t = null == g ? void 0 : g(b, O.length))
                ? t
                : ((n = O.length),
                  b
                      ? c.intl.formatToPlainString(c.t["3SHL+d"], { count: n })
                      : c.intl.formatToPlainString(c.t["8JRFyZ"], { count: n })),
        _ = null == m ? void 0 : m();
    return (0, r.jsx)(S, {
        children: (0, r.jsxs)(i.Kqy, {
            gap: 8,
            children: [
                null != C &&
                    (0, r.jsx)(i.Heading, {
                        variant: "heading-md/semibold",
                        color: "header-secondary",
                        className: u.listTitle,
                        children: C,
                    }),
                x.map((e, t) =>
                    (0, r.jsxs)(
                        l.Fragment,
                        {
                            children: [
                                (0, r.jsx)(o.Z, { node: e }),
                                O.length > 0 && t !== x.length - 1 && (0, r.jsx)(a.Z, {}),
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
                                title: P,
                                collapsedSubtitle: _,
                                isOpen: b,
                                setIsOpen: y,
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

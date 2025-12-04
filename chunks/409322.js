n.d(t, { Z: () => f }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(36361),
    s = n(111161),
    l = n(530171),
    c = n(388032),
    u = n(457454);
let d = (e, t) =>
    e
        ? c.intl.formatToPlainString(c.t["3SHL+d"], { count: t })
        : c.intl.formatToPlainString(c.t["8JRFyZ"], { count: t });
function f(e) {
    var t;
    let { node: n } = e,
        { useTitle: c } = n,
        [f, p] = i.useState(!1),
        { layout: _, collapseAfter: m, ContextProvider: h, useCollapsibleTitle: g, useCollapsedSubtitle: E } = n,
        b = null != m ? _.slice(0, m) : _,
        y = null != m ? _.slice(m) : [],
        O = null != h ? h : i.Fragment,
        v = null == c ? void 0 : c(),
        S = null != (t = null == g ? void 0 : g(f, y.length)) ? t : d(f, y.length),
        I = null == E ? void 0 : E();
    return (0, r.jsx)(O, {
        children: (0, r.jsxs)(a.Kqy, {
            gap: 8,
            children: [
                null != v &&
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        className: u.listTitle,
                        children: v,
                    }),
                b.map((e, t) =>
                    (0, r.jsxs)(
                        i.Fragment,
                        {
                            children: [
                                (0, r.jsx)(o.Z, { node: e }),
                                y.length > 0 && t !== b.length - 1 && (0, r.jsx)(s.Z, {}),
                            ],
                        },
                        e.key,
                    ),
                ),
                y.length > 0 &&
                    (0, r.jsxs)("div", {
                        className: u.collapsibleContainer,
                        children: [
                            (0, r.jsx)(s.Z, { className: u.hoverDivider }),
                            (0, r.jsx)(l.I, {
                                title: S,
                                collapsedSubtitle: I,
                                isExpanded: f,
                                onExpandedChange: p,
                                children: (0, r.jsx)(a.Kqy, {
                                    gap: 8,
                                    padding: { top: 8 },
                                    children: y.map((e, t) =>
                                        (0, r.jsxs)(
                                            i.Fragment,
                                            {
                                                children: [
                                                    (0, r.jsx)(o.Z, { node: e }),
                                                    t !== y.length - 1 && (0, r.jsx)(s.Z, {}),
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

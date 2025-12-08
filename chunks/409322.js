n.d(t, { Z: () => p }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(36361),
    s = n(111161),
    l = n(662097),
    c = n(530171),
    u = n(388032),
    d = n(457454);
let f = (e, t) =>
    e
        ? u.intl.formatToPlainString(u.t["3SHL+d"], { count: t })
        : u.intl.formatToPlainString(u.t["8JRFyZ"], { count: t });
function p(e) {
    var t;
    let { node: n } = e,
        [u, p] = i.useState(!1),
        {
            useTitle: _,
            layout: m,
            collapseAfter: h,
            useCollapsibleTitle: g,
            useCollapsedSubtitle: E,
            initialize: b,
        } = n,
        y = null != h ? m.slice(0, h) : m,
        O = null != h ? m.slice(h) : [],
        v = null == _ ? void 0 : _(),
        S = null != (t = null == g ? void 0 : g(u, O.length)) ? t : f(u, O.length),
        I = null == E ? void 0 : E();
    return (
        (0, l.D)(b),
        (0, r.jsxs)(a.Kqy, {
            gap: 8,
            children: [
                null != v &&
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        className: d.listTitle,
                        children: v,
                    }),
                y.map((e, t) =>
                    (0, r.jsxs)(
                        i.Fragment,
                        {
                            children: [
                                (0, r.jsx)(o.Z, { node: e }),
                                O.length > 0 && t !== y.length - 1 && (0, r.jsx)(s.Z, {}),
                            ],
                        },
                        e.key,
                    ),
                ),
                O.length > 0 &&
                    (0, r.jsxs)("div", {
                        className: d.collapsibleContainer,
                        children: [
                            (0, r.jsx)(s.Z, { className: d.hoverDivider }),
                            (0, r.jsx)(c.I, {
                                title: S,
                                collapsedSubtitle: I,
                                isExpanded: u,
                                onExpandedChange: p,
                                children: (0, r.jsx)(a.Kqy, {
                                    gap: 8,
                                    padding: { top: 8 },
                                    children: O.map((e, t) =>
                                        (0, r.jsxs)(
                                            i.Fragment,
                                            {
                                                children: [
                                                    (0, r.jsx)(o.Z, { node: e }),
                                                    t !== O.length - 1 && (0, r.jsx)(s.Z, {}),
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
        })
    );
}

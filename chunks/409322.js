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
        b = _.filter((e) => {
            var t, n;
            return null == (n = null == (t = e.usePredicate) ? void 0 : t.call(e)) || n;
        }),
        y = null != m ? b.slice(0, m) : b,
        O = null != m ? b.slice(m) : [],
        v = null != h ? h : i.Fragment,
        S = null == c ? void 0 : c(),
        I = null != (t = null == g ? void 0 : g(f, O.length)) ? t : d(f, O.length),
        T = null == E ? void 0 : E();
    return (0, r.jsx)(v, {
        children: (0, r.jsxs)(a.Kqy, {
            gap: 8,
            children: [
                null != S &&
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        className: u.listTitle,
                        children: S,
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
                        className: u.collapsibleContainer,
                        children: [
                            (0, r.jsx)(s.Z, { className: u.hoverDivider }),
                            (0, r.jsx)(l.I, {
                                title: I,
                                collapsedSubtitle: T,
                                isExpanded: f,
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
        }),
    });
}

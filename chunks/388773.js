n.d(t, { A: () => u });
var i = n(627968),
    s = n(64700),
    r = n(397927),
    a = n(641324),
    l = n(46373),
    o = n(78837),
    c = n(985018),
    d = n(115686);
function u(e) {
    let t,
        { node: n } = e,
        [u, _] = s.useState(!1),
        { layout: m, collapseAfter: A, useCollapsibleTitle: g, useCollapsedSubtitle: E } = n,
        h = null != A ? m.slice(0, A) : m,
        p = null != A ? m.slice(A) : [],
        C =
            g?.(u, p.length) ??
            ((t = p.length),
            u
                ? c.intl.formatToPlainString(c.t["3SHL+d"], { count: t })
                : c.intl.formatToPlainString(c.t["8JRFyZ"], { count: t })),
        x = E?.();
    return (0, i.jsxs)(r.BJc, {
        gap: 8,
        children: [
            h.map((e, t) =>
                (0, i.jsxs)(
                    s.Fragment,
                    { children: [(0, i.jsx)(a.A, { node: e }), t !== h.length - 1 && (0, i.jsx)(l.A, {})] },
                    e.key,
                ),
            ),
            p.length > 0 &&
                (0, i.jsxs)("div", {
                    className: d.CT,
                    children: [
                        (0, i.jsx)(l.A, { className: d.mn }),
                        (0, i.jsx)(o.f, {
                            title: C,
                            collapsedSubtitle: x,
                            isExpanded: u,
                            onExpandedChange: _,
                            children: (0, i.jsx)(r.BJc, {
                                gap: 8,
                                children: p.map((e, t) =>
                                    (0, i.jsxs)(
                                        s.Fragment,
                                        {
                                            children: [
                                                (0, i.jsx)(a.A, { node: e }),
                                                t !== p.length - 1 && (0, i.jsx)(l.A, {}),
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
    });
}

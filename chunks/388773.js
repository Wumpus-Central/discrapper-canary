t.d(n, { A: () => u });
var l = t(627968),
    r = t(64700),
    i = t(331322),
    s = t(641324),
    a = t(46373),
    o = t(78837),
    c = t(985018),
    d = t(339102);
function u(e) {
    let n,
        { node: t } = e,
        [u, x] = r.useState(!1),
        { layout: j, collapseAfter: h, useCollapsibleTitle: m, useCollapsedSubtitle: f } = t,
        p = null != h ? j.slice(0, h) : j,
        y = null != h ? j.slice(h) : [],
        g =
            m?.(u, y.length) ??
            ((n = y.length),
            u
                ? c.intl.formatToPlainString(c.t["3SHL+d"], { count: n })
                : c.intl.formatToPlainString(c.t["8JRFyZ"], { count: n })),
        v = f?.();
    return (0, l.jsxs)(i.B, {
        gap: 8,
        children: [
            p.map((e, n) =>
                (0, l.jsxs)(
                    r.Fragment,
                    { children: [(0, l.jsx)(s.A, { node: e }), n !== p.length - 1 && (0, l.jsx)(a.A, {})] },
                    e.key,
                ),
            ),
            y.length > 0 &&
                (0, l.jsxs)("div", {
                    className: d.CT,
                    children: [
                        (0, l.jsx)(a.A, { className: d.mn }),
                        (0, l.jsx)(o.f, {
                            title: g,
                            collapsedSubtitle: v,
                            isExpanded: u,
                            onExpandedChange: x,
                            children: (0, l.jsx)(i.B, {
                                gap: 8,
                                children: y.map((e, n) =>
                                    (0, l.jsxs)(
                                        r.Fragment,
                                        {
                                            children: [
                                                (0, l.jsx)(s.A, { node: e }),
                                                n !== y.length - 1 && (0, l.jsx)(a.A, {}),
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

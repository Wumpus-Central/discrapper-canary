n.d(t, {
    A: () => u,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(641324),
    a = n(46373),
    o = n(78837),
    c = n(985018),
    d = n(115686);

function u(e) {
    var t;
    let n,
        { node: u } = e,
        [_, p] = i.useState(!1),
        { layout: m, collapseAfter: g, useCollapsibleTitle: A, useCollapsedSubtitle: f } = u,
        b = null != g ? m.slice(0, g) : m,
        h = null != g ? m.slice(g) : [],
        E =
            null != (t = null == A ? void 0 : A(_, h.length))
                ? t
                : ((n = h.length),
                  _
                      ? c.intl.formatToPlainString(c.t["3SHL+d"], {
                            count: n,
                        })
                      : c.intl.formatToPlainString(c.t["8JRFyZ"], {
                            count: n,
                        })),
        O = null == f ? void 0 : f();
    return (0, r.jsxs)(l.BJc, {
        gap: 8,
        children: [
            b.map((e, t) =>
                (0, r.jsxs)(
                    i.Fragment,
                    {
                        children: [
                            (0, r.jsx)(s.A, {
                                node: e,
                            }),
                            t !== b.length - 1 && (0, r.jsx)(a.A, {}),
                        ],
                    },
                    e.key,
                ),
            ),
            h.length > 0 &&
                (0, r.jsxs)("div", {
                    className: d.CT,
                    children: [
                        (0, r.jsx)(a.A, {
                            className: d.mn,
                        }),
                        (0, r.jsx)(o.f, {
                            title: E,
                            collapsedSubtitle: O,
                            isExpanded: _,
                            onExpandedChange: p,
                            children: (0, r.jsx)(l.BJc, {
                                gap: 8,
                                children: h.map((e, t) =>
                                    (0, r.jsxs)(
                                        i.Fragment,
                                        {
                                            children: [
                                                (0, r.jsx)(s.A, {
                                                    node: e,
                                                }),
                                                t !== h.length - 1 && (0, r.jsx)(a.A, {}),
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

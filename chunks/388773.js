n.d(t, {
    A: () => _,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(641324),
    a = n(46373),
    o = n(112715),
    c = n(78837),
    d = n(985018),
    u = n(115686);

function _(e) {
    var t;
    let n,
        { node: _ } = e,
        [p, m] = i.useState(!1),
        { layout: g, collapseAfter: A, useCollapsibleTitle: f, useCollapsedSubtitle: h, initialize: b } = _,
        E = null != A ? g.slice(0, A) : g,
        x = null != A ? g.slice(A) : [],
        O =
            null != (t = null == f ? void 0 : f(p, x.length))
                ? t
                : ((n = x.length),
                  p
                      ? d.intl.formatToPlainString(d.t["3SHL+d"], {
                            count: n,
                        })
                      : d.intl.formatToPlainString(d.t["8JRFyZ"], {
                            count: n,
                        })),
        C = null == h ? void 0 : h();
    return (
        (0, o.Z)(b),
        (0, r.jsxs)(l.BJc, {
            gap: 8,
            children: [
                E.map((e, t) =>
                    (0, r.jsxs)(
                        i.Fragment,
                        {
                            children: [
                                (0, r.jsx)(s.A, {
                                    node: e,
                                }),
                                t !== E.length - 1 && (0, r.jsx)(a.A, {}),
                            ],
                        },
                        e.key,
                    ),
                ),
                x.length > 0 &&
                    (0, r.jsxs)("div", {
                        className: u.CT,
                        children: [
                            (0, r.jsx)(a.A, {
                                className: u.mn,
                            }),
                            (0, r.jsx)(c.f, {
                                title: O,
                                collapsedSubtitle: C,
                                isExpanded: p,
                                onExpandedChange: m,
                                children: (0, r.jsx)(l.BJc, {
                                    gap: 8,
                                    children: x.map((e, t) =>
                                        (0, r.jsxs)(
                                            i.Fragment,
                                            {
                                                children: [
                                                    (0, r.jsx)(s.A, {
                                                        node: e,
                                                    }),
                                                    t !== x.length - 1 && (0, r.jsx)(a.A, {}),
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

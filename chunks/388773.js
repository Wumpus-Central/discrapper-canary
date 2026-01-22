n.d(t, {
    A: () => p,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(641324),
    o = n(46373),
    l = n(112715),
    c = n(78837),
    u = n(985018),
    d = n(115686);
let f = (e, t) =>
    e
        ? u.intl.formatToPlainString(u.t["3SHL+d"], {
              count: t,
          })
        : u.intl.formatToPlainString(u.t["8JRFyZ"], {
              count: t,
          });

function p(e) {
    var t;
    let { node: n } = e,
        [u, p] = i.useState(!1),
        {
            useTitle: _,
            layout: h,
            collapseAfter: m,
            useCollapsibleTitle: g,
            useCollapsedSubtitle: E,
            initialize: b,
        } = n,
        y = null != m ? h.slice(0, m) : h,
        O = null != m ? h.slice(m) : [],
        A = null == _ ? void 0 : _(),
        v = null != (t = null == g ? void 0 : g(u, O.length)) ? t : f(u, O.length),
        S = null == E ? void 0 : E();
    return (
        (0, l.Z)(b),
        (0, r.jsxs)(a.BJc, {
            gap: 8,
            children: [
                null != A &&
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        className: d.Vu,
                        children: A,
                    }),
                y.map((e, t) =>
                    (0, r.jsxs)(
                        i.Fragment,
                        {
                            children: [
                                (0, r.jsx)(s.A, {
                                    node: e,
                                }),
                                O.length > 0 && t !== y.length - 1 && (0, r.jsx)(o.A, {}),
                            ],
                        },
                        e.key,
                    ),
                ),
                O.length > 0 &&
                    (0, r.jsxs)("div", {
                        className: d.CT,
                        children: [
                            (0, r.jsx)(o.A, {
                                className: d.mn,
                            }),
                            (0, r.jsx)(c.f, {
                                title: v,
                                collapsedSubtitle: S,
                                isExpanded: u,
                                onExpandedChange: p,
                                children: (0, r.jsx)(a.BJc, {
                                    gap: 8,
                                    children: O.map((e, t) =>
                                        (0, r.jsxs)(
                                            i.Fragment,
                                            {
                                                children: [
                                                    (0, r.jsx)(s.A, {
                                                        node: e,
                                                    }),
                                                    t !== O.length - 1 && (0, r.jsx)(o.A, {}),
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

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
        { layout: _, collapseAfter: h, useCollapsibleTitle: m, useCollapsedSubtitle: g, initialize: E } = n,
        y = null != h ? _.slice(0, h) : _,
        b = null != h ? _.slice(h) : [],
        O = null != (t = null == m ? void 0 : m(u, b.length)) ? t : f(u, b.length),
        v = null == g ? void 0 : g();
    return (
        (0, l.Z)(E),
        (0, r.jsxs)(a.BJc, {
            gap: 8,
            children: [
                y.map((e, t) =>
                    (0, r.jsxs)(
                        i.Fragment,
                        {
                            children: [
                                (0, r.jsx)(s.A, {
                                    node: e,
                                }),
                                t !== y.length - 1 && (0, r.jsx)(o.A, {}),
                            ],
                        },
                        e.key,
                    ),
                ),
                b.length > 0 &&
                    (0, r.jsxs)("div", {
                        className: d.CT,
                        children: [
                            (0, r.jsx)(o.A, {
                                className: d.mn,
                            }),
                            (0, r.jsx)(c.f, {
                                title: O,
                                collapsedSubtitle: v,
                                isExpanded: u,
                                onExpandedChange: p,
                                children: (0, r.jsx)(a.BJc, {
                                    gap: 8,
                                    children: b.map((e, t) =>
                                        (0, r.jsxs)(
                                            i.Fragment,
                                            {
                                                children: [
                                                    (0, r.jsx)(s.A, {
                                                        node: e,
                                                    }),
                                                    t !== b.length - 1 && (0, r.jsx)(o.A, {}),
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

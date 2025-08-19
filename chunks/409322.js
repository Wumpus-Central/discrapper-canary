n.d(t, { Z: () => u }), n(388685);
var i = n(951288),
    l = n(647438),
    r = n(481060),
    o = n(36361),
    s = n(530171),
    a = n(388032);
function u(e) {
    var t;
    let n,
        { node: u } = e,
        [c, d] = l.useState(!1),
        { layout: f, collapseAfter: g, ContextProvider: v, useCollapsibleTitle: b } = u,
        m = f.filter((e) => {
            var t, n;
            return null == (n = null == (t = e.usePredicate) ? void 0 : t.call(e)) || n;
        }),
        p = null != g ? m.slice(0, g) : m,
        x = null != g ? m.slice(g) : [],
        j = null != v ? v : l.Fragment,
        y =
            null != (t = null == b ? void 0 : b(c, x.length))
                ? t
                : ((n = x.length),
                  c
                      ? a.intl.formatToPlainString(a.t["3SHL+f"], { count: n })
                      : a.intl.formatToPlainString(a.t["8JRFyc"], { count: n }));
    return (0, i.jsxs)(j, {
        children: [
            p.map((e, t) =>
                (0, i.jsxs)(
                    l.Fragment,
                    {
                        children: [
                            (0, i.jsx)(o.Z, { node: e }),
                            (t !== p.length - 1 || x.length > 0) && (0, i.jsx)(r.$i$, {}),
                        ],
                    },
                    e.key,
                ),
            ),
            x.length > 0 &&
                (0, i.jsx)(s.I, {
                    title: y,
                    isOpen: c,
                    setIsOpen: d,
                    compact: !0,
                    children: x.map((e, t) =>
                        (0, i.jsxs)(
                            l.Fragment,
                            {
                                children: [(0, i.jsx)(o.Z, { node: e }), t !== x.length - 1 && (0, i.jsx)(r.$i$, {})],
                            },
                            e.key,
                        ),
                    ),
                }),
        ],
    });
}

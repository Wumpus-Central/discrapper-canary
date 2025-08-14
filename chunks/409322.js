n.d(t, { Z: () => u }), n(388685);
var i = n(255367),
    l = n(73800),
    s = n(481060),
    o = n(36361),
    a = n(530171),
    r = n(388032);
function u(e) {
    var t;
    let n,
        { node: u } = e,
        [c, d] = l.useState(!1),
        { layout: f, collapseAfter: g, ContextProvider: m, useCollapsibleTitle: v } = u,
        b = f.filter((e) => {
            var t, n;
            return null == (n = null == (t = e.usePredicate) ? void 0 : t.call(e)) || n;
        }),
        x = null != g ? b.slice(0, g) : b,
        p = null != g ? b.slice(g) : [],
        j = null != m ? m : l.Fragment,
        h =
            null != (t = null == v ? void 0 : v(c, p.length))
                ? t
                : ((n = p.length),
                  c
                      ? r.intl.formatToPlainString(r.t["3SHL+f"], { count: n })
                      : r.intl.formatToPlainString(r.t["8JRFyc"], { count: n }));
    return (0, i.jsxs)(j, {
        children: [
            x.map((e, t) =>
                (0, i.jsxs)(
                    l.Fragment,
                    {
                        children: [
                            (0, i.jsx)(o.Z, { node: e }),
                            (t !== x.length - 1 || p.length > 0) && (0, i.jsx)(s.$i$, {}),
                        ],
                    },
                    e.key,
                ),
            ),
            p.length > 0 &&
                (0, i.jsx)(a.I, {
                    title: h,
                    isOpen: c,
                    setIsOpen: d,
                    compact: !0,
                    children: p.map((e, t) =>
                        (0, i.jsxs)(
                            l.Fragment,
                            {
                                children: [(0, i.jsx)(o.Z, { node: e }), t !== p.length - 1 && (0, i.jsx)(s.$i$, {})],
                            },
                            e.key,
                        ),
                    ),
                }),
        ],
    });
}

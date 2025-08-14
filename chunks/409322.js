n.d(t, { Z: () => u }), n(388685);
var i = n(255367),
    l = n(73800),
    s = n(481060),
    o = n(36361),
    r = n(530171),
    a = n(388032);
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
        j = null != g ? b.slice(g) : [],
        p = null != m ? m : l.Fragment,
        h =
            null != (t = null == v ? void 0 : v(c, j.length))
                ? t
                : ((n = j.length),
                  c
                      ? a.intl.formatToPlainString(a.t["3SHL+f"], { count: n })
                      : a.intl.formatToPlainString(a.t["8JRFyc"], { count: n }));
    return (0, i.jsxs)(p, {
        children: [
            x.map((e, t) =>
                (0, i.jsxs)(
                    l.Fragment,
                    {
                        children: [
                            (0, i.jsx)(o.Z, { node: e }),
                            (t !== x.length - 1 || j.length > 0) && (0, i.jsx)(s.$i$, {}),
                        ],
                    },
                    e.key,
                ),
            ),
            j.length > 0 &&
                (0, i.jsx)(r.I, {
                    title: h,
                    isOpen: c,
                    setIsOpen: d,
                    compact: !0,
                    children: j.map((e, t) =>
                        (0, i.jsxs)(
                            l.Fragment,
                            {
                                children: [(0, i.jsx)(o.Z, { node: e }), t !== j.length - 1 && (0, i.jsx)(s.$i$, {})],
                            },
                            e.key,
                        ),
                    ),
                }),
        ],
    });
}

n.d(t, { Z: () => c }), n(388685);
var r = n(951288),
    l = n(647438),
    o = n(481060),
    i = n(36361),
    a = n(530171),
    s = n(388032);
function c(e) {
    var t;
    let n,
        { node: c } = e,
        [u, d] = l.useState(!1),
        { layout: f, collapseAfter: m, ContextProvider: b, useCollapsibleTitle: j } = c,
        p = f.filter((e) => {
            var t, n;
            return null == (n = null == (t = e.usePredicate) ? void 0 : t.call(e)) || n;
        }),
        x = null != m ? p.slice(0, m) : p,
        y = null != m ? p.slice(m) : [],
        v = null != b ? b : l.Fragment,
        g =
            null != (t = null == j ? void 0 : j(u, y.length))
                ? t
                : ((n = y.length),
                  u
                      ? s.intl.formatToPlainString(s.t["3SHL+f"], { count: n })
                      : s.intl.formatToPlainString(s.t["8JRFyc"], { count: n }));
    return (0, r.jsxs)(v, {
        children: [
            x.map((e, t) =>
                (0, r.jsxs)(
                    l.Fragment,
                    {
                        children: [
                            (0, r.jsx)(i.Z, { node: e }),
                            (t !== x.length - 1 || y.length > 0) && (0, r.jsx)(o.izJ, {}),
                        ],
                    },
                    e.key,
                ),
            ),
            y.length > 0 &&
                (0, r.jsx)(a.I, {
                    title: g,
                    isOpen: u,
                    setIsOpen: d,
                    compact: !0,
                    children: y.map((e, t) =>
                        (0, r.jsxs)(
                            l.Fragment,
                            {
                                children: [(0, r.jsx)(i.Z, { node: e }), t !== y.length - 1 && (0, r.jsx)(o.izJ, {})],
                            },
                            e.key,
                        ),
                    ),
                }),
        ],
    });
}

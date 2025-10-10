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
        v = null != m ? p.slice(m) : [],
        y = null != b ? b : l.Fragment,
        h =
            null != (t = null == j ? void 0 : j(u, v.length))
                ? t
                : ((n = v.length),
                  u
                      ? s.intl.formatToPlainString(s.t["3SHL+f"], { count: n })
                      : s.intl.formatToPlainString(s.t["8JRFyc"], { count: n }));
    return (0, r.jsxs)(y, {
        children: [
            x.map((e, t) =>
                (0, r.jsxs)(
                    l.Fragment,
                    {
                        children: [
                            (0, r.jsx)(i.Z, { node: e }),
                            (t !== x.length - 1 || v.length > 0) && (0, r.jsx)(o.izJ, {}),
                        ],
                    },
                    e.key,
                ),
            ),
            v.length > 0 &&
                (0, r.jsx)(a.I, {
                    title: h,
                    isOpen: u,
                    setIsOpen: d,
                    compact: !0,
                    children: v.map((e, t) =>
                        (0, r.jsxs)(
                            l.Fragment,
                            {
                                children: [(0, r.jsx)(i.Z, { node: e }), t !== v.length - 1 && (0, r.jsx)(o.izJ, {})],
                            },
                            e.key,
                        ),
                    ),
                }),
        ],
    });
}

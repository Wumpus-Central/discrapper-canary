n.d(t, { Z: () => c }), n(388685);
var i = n(255367),
    l = n(73800),
    s = n(481060),
    o = n(36361),
    a = n(530171),
    r = n(388032);
let u = (e, t) =>
    e
        ? r.intl.formatToPlainString(r.t["3SHL+f"], { count: t })
        : r.intl.formatToPlainString(r.t["8JRFyc"], { count: t });
function c(e) {
    var t;
    let { node: n } = e,
        [r, c] = l.useState(!1),
        { layout: d, collapseAfter: f, ContextProvider: g, useCollapsibleTitle: m } = n,
        v = d.filter((e) => {
            var t, n;
            return null == (n = null == (t = e.usePredicate) ? void 0 : t.call(e)) || n;
        }),
        b = null != f ? v.slice(0, f) : v,
        x = null != f ? v.slice(f) : [],
        p = null != g ? g : l.Fragment,
        j = null != (t = null == m ? void 0 : m(r, x.length)) ? t : u(r, x.length);
    return (0, i.jsxs)(p, {
        children: [
            b.map((e, t) =>
                (0, i.jsxs)(
                    l.Fragment,
                    {
                        children: [
                            (0, i.jsx)(o.Z, { node: e }),
                            (t !== b.length - 1 || x.length > 0) && (0, i.jsx)(s.$i$, {}),
                        ],
                    },
                    e.key,
                ),
            ),
            x.length > 0 &&
                (0, i.jsx)(a.I, {
                    title: j,
                    isOpen: r,
                    setIsOpen: c,
                    compact: !0,
                    children: x.map((e, t) =>
                        (0, i.jsxs)(
                            l.Fragment,
                            {
                                children: [(0, i.jsx)(o.Z, { node: e }), t !== x.length - 1 && (0, i.jsx)(s.$i$, {})],
                            },
                            e.key,
                        ),
                    ),
                }),
        ],
    });
}

n.d(t, { Z: () => u }), n(388685);
var r = n(951288),
    l = n(647438),
    o = n(481060),
    i = n(36361),
    a = n(530171),
    s = n(388032),
    c = n(457454);
function u(e) {
    var t;
    let n,
        { node: u } = e,
        [d, f] = l.useState(!1),
        { layout: m, collapseAfter: b, ContextProvider: p, useCollapsibleTitle: j } = u,
        x = m.filter((e) => {
            var t, n;
            return null == (n = null == (t = e.usePredicate) ? void 0 : t.call(e)) || n;
        }),
        v = null != b ? x.slice(0, b) : x,
        y = null != b ? x.slice(b) : [],
        h = null != p ? p : l.Fragment,
        g =
            null != (t = null == j ? void 0 : j(d, y.length))
                ? t
                : ((n = y.length),
                  d
                      ? s.intl.formatToPlainString(s.t["3SHL+f"], { count: n })
                      : s.intl.formatToPlainString(s.t["8JRFyc"], { count: n }));
    return (0, r.jsx)(h, {
        children: (0, r.jsxs)(o.Kqy, {
            gap: 8,
            children: [
                v.map((e, t) =>
                    (0, r.jsxs)(
                        l.Fragment,
                        {
                            children: [
                                (0, r.jsx)(i.Z, { node: e }),
                                y.length > 0 && t !== v.length - 1 && (0, r.jsx)(o.izJ, {}),
                            ],
                        },
                        e.key,
                    ),
                ),
                y.length > 0 &&
                    (0, r.jsxs)("div", {
                        className: c.collapsibleContainer,
                        children: [
                            (0, r.jsx)(o.izJ, { className: c.hoverDivider }),
                            (0, r.jsx)(a.I, {
                                title: g,
                                isOpen: d,
                                setIsOpen: f,
                                compact: !0,
                                children: y.map((e, t) =>
                                    (0, r.jsxs)(
                                        l.Fragment,
                                        {
                                            children: [
                                                (0, r.jsx)(i.Z, { node: e }),
                                                t !== y.length - 1 && (0, r.jsx)(o.izJ, {}),
                                            ],
                                        },
                                        e.key,
                                    ),
                                ),
                            }),
                        ],
                    }),
            ],
        }),
    });
}

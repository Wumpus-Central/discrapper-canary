(l.d(t, { default: () => b }), l(539854));
var n = l(255367),
    r = l(73800),
    a = l(82659),
    i = l(481060),
    u = l(313201),
    s = l(585483),
    o = l(833103),
    c = l(607802),
    d = l(981631),
    f = l(388032),
    h = l(325507);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var l = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(l);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(l).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                ((n = l[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n));
            }));
    }
    return e;
}
function g(e) {
    let { label: t, sublabel: l, textPlaceholder: r, value: a, onChange: u, options: s, filter: o, closeOnSelect: c, containerClassName: d, onSearchChange: f, renderOptionPrefix: p, renderOptionSuffix: g } = e;
    return (0, n.jsxs)('div', {
        className: d,
        children: [
            (0, n.jsx)(i.Text, {
                variant: 'text-md/medium',
                color: 'text-primary',
                className: h.label,
                children: t
            }),
            (0, n.jsx)(i.Text, {
                variant: 'text-sm/medium',
                color: 'text-secondary',
                className: h.sublabel,
                children: l
            }),
            (0, n.jsx)(i.VcW, {
                multi: !0,
                options: s,
                placeholder: r,
                value: a,
                onChange: u,
                onSearchChange: f,
                closeOnSelect: c,
                filter: o,
                renderOptionPrefix: p,
                renderOptionSuffix: g
            })
        ]
    });
}
function b(e) {
    let { transitionState: t, onClose: l, searchContext: b } = e,
        m = (0, u.Dt)(),
        x = r.useMemo(() => (0, c.s5)(b), [b]),
        { options: C, query: S, setQuery: y, setQueryString: v, handleClearFilter: k, getApplyQueryString: E } = (0, o.HJ)(b, d.dCx.FILTER_FROM),
        { options: O, query: j, setQuery: _, setQueryString: F, handleClearFilter: R, getApplyQueryString: T } = (0, o.HJ)(b, d.dCx.FILTER_MENTIONS),
        P = (0, o.Zc)(x),
        { options: M, query: I, setQuery: N, handleClearFilter: Q, getApplyQueryString: q } = (0, o.Z2)(b),
        H = r.useMemo(() => S.length + j.length + I.length, [S, j, I]),
        Z = r.useCallback(() => {
            let e = E(d.dCx.FILTER_FROM),
                t = T(d.dCx.FILTER_MENTIONS),
                n = q(d.dCx.FILTER_HAS),
                r = [];
            (null != e && r.push(e), null != t && r.push(t), null != n && r.push(n));
            let a = r.join(' ');
            (s.S.dispatch(d.CkL.SET_SEARCH_QUERY, {
                query: a,
                anchor: 0,
                focus: 0,
                performSearch: !0
            }),
                l());
        }, [E, q, T, l]),
        A = r.useCallback(() => {
            (k(),
                R(),
                Q(),
                s.S.dispatch(d.CkL.SET_SEARCH_QUERY, {
                    query: '',
                    anchor: 0,
                    focus: 0,
                    performSearch: !1
                }));
        }, [k, Q, R]);
    return (0, n.jsxs)(a.Modal, {
        transitionState: t,
        onClose: l,
        'aria-labelledby': m,
        title: f.intl.string(f.t.F8a0W1),
        actions: [
            {
                variant: 'secondary',
                text: f.intl.string(f.t['ETE/oK']),
                onClick: l
            },
            {
                variant: 'primary',
                text: f.intl.string(f.t.qDzapq),
                onClick: Z
            }
        ],
        actionBarInput: (0, n.jsx)(i.P3F, {
            onClick: A,
            className: h.clearFilters,
            children: (0, n.jsxs)(i.Text, {
                variant: 'text-sm/medium',
                color: H > 0 ? 'text-brand' : 'text-tertiary',
                children: [f.intl.string(f.t.YfwFu7), ' ', H > 0 && '('.concat(H, ')')]
            })
        }),
        children: [
            (0, n.jsx)(
                g,
                p(
                    {
                        label: f.intl.string(f.t.Qz6eOT),
                        sublabel: f.intl.string(f.t['2JyXnJ']),
                        textPlaceholder: f.intl.string(f.t.V4WMj4),
                        value: S,
                        onChange: y,
                        onSearchChange: v,
                        options: C
                    },
                    P
                )
            ),
            (0, n.jsx)(
                g,
                p(
                    {
                        label: f.intl.string(f.t.HEBnRU),
                        sublabel: f.intl.string(f.t.PdfTqa),
                        textPlaceholder: f.intl.string(f.t.zka3aG),
                        value: j,
                        onChange: _,
                        onSearchChange: F,
                        options: O,
                        containerClassName: h.filterSection
                    },
                    P
                )
            ),
            (0, n.jsx)(g, {
                label: f.intl.string(f.t['892qg4']),
                sublabel: f.intl.string(f.t['Oa//IC']),
                textPlaceholder: f.intl.string(f.t.tROvHB),
                value: I,
                onChange: N,
                options: M,
                containerClassName: h.filterSection,
                filter: !0,
                closeOnSelect: !1
            })
        ]
    });
}

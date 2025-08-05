(r.d(t, { default: () => b }), r(539854));
var n = r(255367),
    l = r(73800),
    a = r(82659),
    i = r(481060),
    u = r(313201),
    s = r(585483),
    o = r(833103),
    c = r(607802),
    d = r(981631),
    f = r(388032),
    h = r(325507);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                ((n = r[t]),
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
    let { label: t, sublabel: r, textPlaceholder: l, value: a, onChange: u, options: s, filter: o, closeOnSelect: c, containerClassName: d, onSearchChange: f, renderOptionPrefix: p, renderOptionSuffix: g } = e;
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
                children: r
            }),
            (0, n.jsx)(i.VcW, {
                multi: !0,
                options: s,
                placeholder: l,
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
    let { transitionState: t, onClose: r, searchContext: b } = e,
        m = (0, u.Dt)(),
        x = l.useMemo(() => (0, c.s5)(b), [b]),
        { options: S, query: y, setQuery: C, setQueryString: v, handleClearFilter: E, getApplyQueryString: j } = (0, o.H)(b, d.dCx.FILTER_FROM),
        { options: k, query: O, setQuery: _, setQueryString: F, handleClearFilter: T, getApplyQueryString: R } = (0, o.H)(b, d.dCx.FILTER_MENTIONS),
        P = (0, o.Z)(x),
        M = l.useMemo(() => y.length + O.length, [y, O]),
        N = l.useCallback(() => {
            let e = j(d.dCx.FILTER_FROM),
                t = R(d.dCx.FILTER_MENTIONS),
                n = [];
            (null != e && n.push(e), null != t && n.push(t));
            let l = n.join(' ');
            (s.S.dispatch(d.CkL.SET_SEARCH_QUERY, {
                query: l,
                anchor: 0,
                focus: 0,
                performSearch: !0
            }),
                r());
        }, [j, R, r]),
        Q = l.useCallback(() => {
            (E(),
                T(),
                s.S.dispatch(d.CkL.SET_SEARCH_QUERY, {
                    query: '',
                    anchor: 0,
                    focus: 0,
                    performSearch: !1
                }));
        }, [E, T]);
    return (0, n.jsxs)(a.Modal, {
        transitionState: t,
        onClose: r,
        'aria-labelledby': m,
        title: f.intl.string(f.t.F8a0W1),
        actions: [
            {
                variant: 'secondary',
                text: f.intl.string(f.t['ETE/oK']),
                onClick: r
            },
            {
                variant: 'primary',
                text: f.intl.string(f.t.qDzapq),
                onClick: N
            }
        ],
        actionBarInput: (0, n.jsx)(i.P3F, {
            onClick: Q,
            className: h.clearFilters,
            children: (0, n.jsxs)(i.Text, {
                variant: 'text-sm/medium',
                color: M > 0 ? 'text-brand' : 'text-tertiary',
                children: [f.intl.string(f.t.YfwFu7), ' ', M > 0 && '('.concat(M, ')')]
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
                        value: y,
                        onChange: C,
                        onSearchChange: v,
                        options: S
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
                        value: O,
                        onChange: _,
                        onSearchChange: F,
                        options: k,
                        containerClassName: h.filterSection
                    },
                    P
                )
            )
        ]
    });
}

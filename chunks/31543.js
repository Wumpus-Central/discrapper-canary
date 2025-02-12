n.d(t, { Z: () => p });
var i = n(200651),
    r = n(192379),
    a = n(232713),
    s = n(260866),
    o = n(481060),
    l = n(806966),
    u = n(28546),
    c = n(453070),
    d = n(611480),
    f = n(388032),
    _ = n(461517);
let p = r.forwardRef(function (e, t) {
    let { onKeyDown: n, stickersListRef: p, channel: h } = e,
        m = (0, c.fQ)(h),
        g = r.useRef(null),
        { searchQuery: E, isSearchSuggestion: v } = (0, u.Iu)(
            (e) => ({
                searchQuery: e.searchQuery,
                isSearchSuggestion: e.isSearchSuggestion
            }),
            a.X
        ),
        y = l.ZN.useStore((e) => e.searchPlaceholder),
        I = l.ZN.useStore((e) => e.inspectedExpressionPosition, a.X),
        T = r.useCallback(
            (e) => {
                var t;
                l.ZN.setActiveCategoryIndex('' === e ? 0 : d.c), l.ZN.setInspectedExpressionPosition(0, 0), l.ZN.setSearchPlaceholder(null), (0, u.ql)(e), null === (t = p.current) || void 0 === t || t.scrollTo(0);
            },
            [p]
        ),
        b = r.useCallback(() => {
            (0, u.ql)('');
        }, []);
    return (
        r.useImperativeHandle(t, () => ({
            focus: () => {
                var e;
                return null === (e = g.current) || void 0 === e ? void 0 : e.focus();
            }
        })),
        r.useLayoutEffect(() => {
            if (v) {
                var e;
                null === (e = g.current) || void 0 === e || e.focus();
            }
        }, [v]),
        (0, i.jsx)('div', {
            className: _.wrapper,
            children: (0, i.jsx)(o.E1j, {
                autoFocus: m,
                disabled: !m,
                query: E,
                ref: g,
                size: o.E1j.Sizes.MEDIUM,
                placeholder: null != y ? y : m ? f.intl.string(f.t.dt5h1N) : f.intl.string(f.t['Pck/4e']),
                onClear: b,
                onKeyDown: n,
                onChange: T,
                className: _.__invalid_searchBar,
                inputProps: {
                    'aria-haspopup': 'grid',
                    'aria-controls': d.Vr,
                    'aria-expanded': !0,
                    'aria-activedescendant': (0, s.NE)(d.Vr, I.columnIndex, I.rowIndex)
                }
            })
        })
    );
});

n.d(t, { Z: () => p });
var r = n(255367),
    i = n(73800),
    a = n(94171),
    o = n(260866),
    s = n(481060),
    l = n(806966),
    c = n(28546),
    u = n(453070),
    d = n(611480),
    _ = n(388032),
    f = n(419028);
let p = i.forwardRef(function (e, t) {
    let { onKeyDown: n, stickersListRef: p, channel: h } = e,
        m = (0, u.fQ)(h),
        g = i.useRef(null),
        { searchQuery: E, isSearchSuggestion: b } = (0, c.Iu)(
            (e) => ({
                searchQuery: e.searchQuery,
                isSearchSuggestion: e.isSearchSuggestion
            }),
            a.X
        ),
        y = l.ZN.useStore((e) => e.searchPlaceholder),
        O = l.ZN.useStore((e) => e.inspectedExpressionPosition, a.X),
        v = i.useCallback(
            (e) => {
                var t;
                (l.ZN.setActiveCategoryIndex('' === e ? 0 : d.c), l.ZN.setInspectedExpressionPosition(0, 0), l.ZN.setSearchPlaceholder(null), (0, c.ql)(e), null == (t = p.current) || t.scrollTo(0));
            },
            [p]
        ),
        I = i.useCallback(() => {
            (0, c.ql)('');
        }, []);
    return (
        i.useImperativeHandle(t, () => ({
            focus: () => {
                var e;
                return null == (e = g.current) ? void 0 : e.focus();
            }
        })),
        i.useLayoutEffect(() => {
            if (b) {
                var e;
                null == (e = g.current) || e.focus();
            }
        }, [b]),
        (0, r.jsx)('div', {
            className: f.wrapper,
            children: (0, r.jsx)(s.E1j, {
                autoFocus: m,
                disabled: !m,
                query: E,
                ref: g,
                size: s.E1j.Sizes.MEDIUM,
                placeholder: null != y ? y : m ? _.intl.string(_.t.dt5h1N) : _.intl.string(_.t['Pck/4e']),
                onClear: I,
                onKeyDown: n,
                onChange: v,
                className: f.__invalid_searchBar,
                inputProps: {
                    'aria-haspopup': 'grid',
                    'aria-controls': d.Vr,
                    'aria-expanded': !0,
                    'aria-activedescendant': (0, o.NE)(d.Vr, O.columnIndex, O.rowIndex)
                }
            })
        })
    );
});

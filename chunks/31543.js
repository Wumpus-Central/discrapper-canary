var i = r(200651),
    a = r(192379),
    o = r(232713),
    s = r(260866),
    l = r(481060),
    u = r(806966),
    c = r(28546),
    d = r(453070),
    f = r(611480),
    p = r(388032),
    h = r(844094);
let _ = a.forwardRef(function (e, n) {
    let { onKeyDown: r, stickersListRef: _, channel: m } = e,
        g = (0, d.fQ)(m),
        E = a.useRef(null),
        { searchQuery: v, isSearchSuggestion: y } = (0, c.Iu)(
            (e) => ({
                searchQuery: e.searchQuery,
                isSearchSuggestion: e.isSearchSuggestion
            }),
            o.X
        ),
        b = u.ZN.useStore((e) => e.searchPlaceholder),
        I = u.ZN.useStore((e) => e.inspectedExpressionPosition, o.X),
        T = a.useCallback(
            (e) => {
                var n;
                u.ZN.setActiveCategoryIndex('' === e ? 0 : f.c), u.ZN.setInspectedExpressionPosition(0, 0), u.ZN.setSearchPlaceholder(null), (0, c.ql)(e), null === (n = _.current) || void 0 === n || n.scrollTo(0);
            },
            [_]
        ),
        S = a.useCallback(() => {
            (0, c.ql)('');
        }, []);
    return (
        a.useImperativeHandle(n, () => ({
            focus: () => {
                var e;
                return null === (e = E.current) || void 0 === e ? void 0 : e.focus();
            }
        })),
        a.useLayoutEffect(() => {
            if (y) {
                var e;
                null === (e = E.current) || void 0 === e || e.focus();
            }
        }, [y]),
        (0, i.jsx)('div', {
            className: h.wrapper,
            children: (0, i.jsx)(l.SearchBar, {
                autoFocus: g,
                disabled: !g,
                query: v,
                ref: E,
                size: l.SearchBar.Sizes.MEDIUM,
                placeholder: null != b ? b : g ? p.intl.string(p.t.dt5h1N) : p.intl.string(p.t['Pck/4e']),
                onClear: S,
                onKeyDown: r,
                onChange: T,
                className: h.__invalid_searchBar,
                inputProps: {
                    'aria-haspopup': 'grid',
                    'aria-controls': f.Vr,
                    'aria-expanded': !0,
                    'aria-activedescendant': (0, s.NE)(f.Vr, I.columnIndex, I.rowIndex)
                }
            })
        })
    );
});
n.Z = _;

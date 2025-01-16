var i = r(200651),
    a = r(192379),
    s = r(232713),
    o = r(260866),
    l = r(481060),
    u = r(806966),
    c = r(28546),
    d = r(453070),
    f = r(611480),
    _ = r(388032),
    h = r(844094);
let p = a.forwardRef(function (e, n) {
    let { onKeyDown: r, stickersListRef: p, channel: m } = e,
        g = (0, d.fQ)(m),
        E = a.useRef(null),
        { searchQuery: v, isSearchSuggestion: I } = (0, c.Iu)(
            (e) => ({
                searchQuery: e.searchQuery,
                isSearchSuggestion: e.isSearchSuggestion
            }),
            s.X
        ),
        T = u.ZN.useStore((e) => e.searchPlaceholder),
        b = u.ZN.useStore((e) => e.inspectedExpressionPosition, s.X),
        y = a.useCallback(
            (e) => {
                var n;
                u.ZN.setActiveCategoryIndex('' === e ? 0 : f.c), u.ZN.setInspectedExpressionPosition(0, 0), u.ZN.setSearchPlaceholder(null), (0, c.ql)(e), null === (n = p.current) || void 0 === n || n.scrollTo(0);
            },
            [p]
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
            if (I) {
                var e;
                null === (e = E.current) || void 0 === e || e.focus();
            }
        }, [I]),
        (0, i.jsx)('div', {
            className: h.wrapper,
            children: (0, i.jsx)(l.SearchBar, {
                autoFocus: g,
                disabled: !g,
                query: v,
                ref: E,
                size: l.SearchBar.Sizes.MEDIUM,
                placeholder: null != T ? T : g ? _.intl.string(_.t.dt5h1N) : _.intl.string(_.t['Pck/4e']),
                onClear: S,
                onKeyDown: r,
                onChange: y,
                className: h.__invalid_searchBar,
                inputProps: {
                    'aria-haspopup': 'grid',
                    'aria-controls': f.Vr,
                    'aria-expanded': !0,
                    'aria-activedescendant': (0, o.NE)(f.Vr, b.columnIndex, b.rowIndex)
                }
            })
        })
    );
});
n.Z = p;

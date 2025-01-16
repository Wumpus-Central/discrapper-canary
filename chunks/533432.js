var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(232713),
    c = r(260866),
    d = r(481060),
    f = r(806966),
    _ = r(28546),
    h = r(149203),
    p = r(981631),
    m = r(388032),
    g = r(405156);
let E = s.forwardRef(function (e, n) {
    let { emojiListRef: r, gridNavigatorId: i, isFullRow: o, onKeyDown: E, onFocus: v, autoFocus: I, className: T, defaultSearchPlaceholder: b } = e,
        y = s.useRef(null),
        S = (0, _.Iu)((e) => e.searchQuery),
        [A, N] = f.kJ.useStore((e) => [e.inspectedExpressionPosition, e.searchPlaceholder], u.X),
        C = s.useCallback(
            (e) => {
                var n;
                f.kJ.setActiveCategoryIndex('' === e ? 0 : h.c), f.kJ.setInspectedExpressionPosition(0, 0), f.kJ.setSearchPlaceholder(null), (0, _.ql)(e), null === (n = r.current) || void 0 === n || n.scrollTo(0);
            },
            [r]
        ),
        R = s.useCallback(() => {
            (0, _.ql)('');
        }, []),
        O = (e) => {
            switch (e.keyCode) {
                case p.yXg.ARROW_LEFT:
                case p.yXg.ARROW_RIGHT:
                case p.yXg.ARROW_UP:
                case p.yXg.ARROW_DOWN:
                    document.activeElement !== e.target && e.preventDefault();
            }
            E(e);
        };
    return (
        s.useImperativeHandle(n, () => ({
            focus: () => {
                var e;
                return null === (e = y.current) || void 0 === e ? void 0 : e.focus();
            }
        })),
        (0, a.jsx)(d.SearchBar, {
            autoFocus: I,
            query: S,
            ref: y,
            size: d.SearchBar.Sizes.MEDIUM,
            placeholder: null != N ? N : b,
            onClear: R,
            onKeyDown: O,
            onFocus: v,
            onChange: C,
            className: l()(T, { [g.searchBarFullRow]: o }),
            inputProps: {
                'aria-label': m.intl.string(m.t.tCauZW),
                'aria-haspopup': 'grid',
                'aria-controls': i,
                'aria-expanded': !0,
                'aria-activedescendant': (0, c.NE)(i, A.columnIndex, A.rowIndex)
            }
        })
    );
});
n.Z = s.memo(E);

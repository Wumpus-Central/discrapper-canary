var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(232713),
    c = r(260866),
    d = r(481060),
    f = r(806966),
    p = r(28546),
    h = r(149203),
    _ = r(981631),
    m = r(388032),
    g = r(405156);
let E = o.forwardRef(function (e, n) {
    let { emojiListRef: r, gridNavigatorId: i, isFullRow: s, onKeyDown: E, onFocus: v, autoFocus: y, className: b, defaultSearchPlaceholder: I } = e,
        T = o.useRef(null),
        S = (0, p.Iu)((e) => e.searchQuery),
        [A, C] = f.kJ.useStore((e) => [e.inspectedExpressionPosition, e.searchPlaceholder], u.X),
        N = o.useCallback(
            (e) => {
                var n;
                f.kJ.setActiveCategoryIndex('' === e ? 0 : h.c), f.kJ.setInspectedExpressionPosition(0, 0), f.kJ.setSearchPlaceholder(null), (0, p.ql)(e), null === (n = r.current) || void 0 === n || n.scrollTo(0);
            },
            [r]
        ),
        R = o.useCallback(() => {
            (0, p.ql)('');
        }, []),
        O = (e) => {
            switch (e.keyCode) {
                case _.yXg.ARROW_LEFT:
                case _.yXg.ARROW_RIGHT:
                case _.yXg.ARROW_UP:
                case _.yXg.ARROW_DOWN:
                    document.activeElement !== e.target && e.preventDefault();
            }
            E(e);
        };
    return (
        o.useImperativeHandle(n, () => ({
            focus: () => {
                var e;
                return null === (e = T.current) || void 0 === e ? void 0 : e.focus();
            }
        })),
        (0, a.jsx)(d.SearchBar, {
            autoFocus: y,
            query: S,
            ref: T,
            size: d.SearchBar.Sizes.MEDIUM,
            placeholder: null != C ? C : I,
            onClear: R,
            onKeyDown: O,
            onFocus: v,
            onChange: N,
            className: l()(b, { [g.searchBarFullRow]: s }),
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
n.Z = o.memo(E);

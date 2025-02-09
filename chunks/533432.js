n.d(t, { Z: () => g }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(232713),
    l = n(260866),
    u = n(481060),
    c = n(806966),
    d = n(28546),
    f = n(149203),
    _ = n(981631),
    p = n(388032),
    h = n(363131);
let m = r.forwardRef(function (e, t) {
        let { emojiListRef: n, gridNavigatorId: a, isFullRow: m, onKeyDown: g, onFocus: E, autoFocus: v, className: y, defaultSearchPlaceholder: I } = e,
            T = r.useRef(null),
            b = (0, d.Iu)((e) => e.searchQuery),
            [S, A] = c.kJ.useStore((e) => [e.inspectedExpressionPosition, e.searchPlaceholder], o.X),
            N = r.useCallback(
                (e) => {
                    var t;
                    c.kJ.setActiveCategoryIndex('' === e ? 0 : f.c), c.kJ.setInspectedExpressionPosition(0, 0), c.kJ.setSearchPlaceholder(null), (0, d.ql)(e), null === (t = n.current) || void 0 === t || t.scrollTo(0);
                },
                [n]
            ),
            C = r.useCallback(() => {
                (0, d.ql)('');
            }, []),
            R = (e) => {
                switch (e.keyCode) {
                    case _.yXg.ARROW_LEFT:
                    case _.yXg.ARROW_RIGHT:
                    case _.yXg.ARROW_UP:
                    case _.yXg.ARROW_DOWN:
                        document.activeElement !== e.target && e.preventDefault();
                }
                g(e);
            };
        return (
            r.useImperativeHandle(t, () => ({
                focus: () => {
                    var e;
                    return null === (e = T.current) || void 0 === e ? void 0 : e.focus();
                }
            })),
            (0, i.jsx)(u.E1j, {
                autoFocus: v,
                query: b,
                ref: T,
                size: u.E1j.Sizes.MEDIUM,
                placeholder: null != A ? A : I,
                onClear: C,
                onKeyDown: R,
                onFocus: E,
                onChange: N,
                className: s()(y, { [h.searchBarFullRow]: m }),
                inputProps: {
                    'aria-label': p.intl.string(p.t.tCauZW),
                    'aria-haspopup': 'grid',
                    'aria-controls': a,
                    'aria-expanded': !0,
                    'aria-activedescendant': (0, l.NE)(a, S.columnIndex, S.rowIndex)
                }
            })
        );
    }),
    g = r.memo(m);

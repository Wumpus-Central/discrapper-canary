n.d(t, { Z: () => g }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(760907),
    l = n(260866),
    c = n(481060),
    u = n(806966),
    d = n(28546),
    f = n(149203),
    _ = n(981631),
    p = n(388032),
    h = n(539490);
let m = i.forwardRef(function (e, t) {
        let { emojiListRef: n, gridNavigatorId: o, isFullRow: m, onKeyDown: g, onFocus: E, autoFocus: b, className: y, defaultSearchPlaceholder: O } = e,
            v = i.useRef(null),
            I = (0, d.Iu)((e) => e.searchQuery),
            [S, T] = u.kJ.useStore((e) => [e.inspectedExpressionPosition, e.searchPlaceholder], s.X),
            A = i.useCallback(
                (e) => {
                    var t;
                    u.kJ.setActiveCategoryIndex('' === e ? 0 : f.c), u.kJ.setInspectedExpressionPosition(0, 0), u.kJ.setSearchPlaceholder(null), (0, d.ql)(e), null == (t = n.current) || t.scrollTo(0);
                },
                [n]
            ),
            N = i.useCallback(() => {
                (0, d.ql)('');
            }, []),
            C = (e) => {
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
            i.useImperativeHandle(t, () => ({
                focus: () => {
                    var e;
                    return null == (e = v.current) ? void 0 : e.focus();
                }
            })),
            (0, r.jsx)(c.E1j, {
                autoFocus: b,
                query: I,
                ref: v,
                size: c.E1j.Sizes.MEDIUM,
                placeholder: null != T ? T : O,
                onClear: N,
                onKeyDown: C,
                onFocus: E,
                onChange: A,
                className: a()(y, { [h.searchBarFullRow]: m }),
                inputProps: {
                    'aria-label': p.intl.string(p.t.tCauZW),
                    'aria-haspopup': 'grid',
                    'aria-controls': o,
                    'aria-expanded': !0,
                    'aria-activedescendant': (0, l.NE)(o, S.columnIndex, S.rowIndex)
                }
            })
        );
    }),
    g = i.memo(m);

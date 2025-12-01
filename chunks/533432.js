n.d(t, { Z: () => _ }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(55160),
    o = n(260866),
    s = n(481060),
    l = n(806966),
    c = n(28546),
    u = n(149203),
    d = n(295907),
    f = n(388032);
let p = i.forwardRef(function (e, t) {
        let {
                emojiListRef: n,
                gridNavigatorId: p,
                onKeyDown: _,
                onFocus: m,
                autoFocus: h,
                defaultSearchPlaceholder: g,
            } = e,
            E = i.useRef(null),
            b = (0, c.Iu)((e) => e.searchQuery),
            [y, O] = l.kJ.useStore((e) => [e.inspectedExpressionPosition, e.searchPlaceholder], a.X),
            v = i.useCallback(
                (e) => {
                    var t;
                    l.kJ.setActiveCategoryIndex("" === e ? 0 : u.c),
                        l.kJ.setInspectedExpressionPosition(0, 0),
                        l.kJ.setSearchPlaceholder(null),
                        (0, c.ql)(e),
                        null == (t = n.current) || t.scrollTo(0);
                },
                [n],
            ),
            S = i.useCallback(() => {
                (0, c.ql)("");
            }, []),
            I = (e) => {
                switch (e.key) {
                    case d.vn.ARROW_LEFT:
                    case d.vn.ARROW_RIGHT:
                    case d.vn.ARROW_UP:
                    case d.vn.ARROW_DOWN:
                        document.activeElement !== e.target && e.preventDefault();
                }
                _(e);
            };
        return (
            i.useImperativeHandle(t, () => ({
                focus: () => {
                    var e;
                    return null == (e = E.current) ? void 0 : e.focus();
                },
            })),
            (0, r.jsx)(s.E1j, {
                autoFocus: h,
                query: b,
                ref: E,
                placeholder: null != O ? O : g,
                onClear: S,
                onKeyDown: I,
                onFocus: m,
                onChange: v,
                inputProps: {
                    "aria-label": f.intl.string(f.t.tCauZX),
                    "aria-haspopup": "grid",
                    "aria-controls": p,
                    "aria-expanded": !0,
                    "aria-activedescendant": (0, o.NE)(p, y.columnIndex, y.rowIndex),
                },
            })
        );
    }),
    _ = i.memo(p);

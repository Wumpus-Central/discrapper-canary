n.d(t, {
    A: () => p,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(942381),
    s = n(602034),
    o = n(397927),
    l = n(850992),
    c = n(151271);
n(732139);
var u = n(650583),
    d = n(985018);
let f = i.forwardRef(function (e, t) {
        let {
                emojiListRef: n,
                gridNavigatorId: f,
                onKeyDown: p,
                onFocus: _,
                autoFocus: h,
                defaultSearchPlaceholder: m,
            } = e,
            g = i.useRef(null),
            E = (0, c.RQ)((e) => e.searchQuery),
            [b, y] = l.Om.useStore((e) => [e.inspectedExpressionPosition, e.searchPlaceholder], a.x),
            O = i.useCallback(
                (e) => {
                    var t;
                    l.Om.setActiveCategoryIndex("" === e ? 0 : -1),
                        l.Om.setInspectedExpressionPosition(0, 0),
                        l.Om.setSearchPlaceholder(null),
                        (0, c.Ri)(e),
                        null == (t = n.current) || t.scrollTo(0);
                },
                [n],
            ),
            A = i.useCallback(() => {
                (0, c.Ri)("");
            }, []),
            v = (e) => {
                switch (e.key) {
                    case u.dh.ARROW_LEFT:
                    case u.dh.ARROW_RIGHT:
                    case u.dh.ARROW_UP:
                    case u.dh.ARROW_DOWN:
                        document.activeElement !== e.target && e.preventDefault();
                }
                p(e);
            };
        return (
            i.useImperativeHandle(t, () => ({
                focus: () => {
                    var e;
                    return null == (e = g.current) ? void 0 : e.focus();
                },
            })),
            (0, r.jsx)(o.IWV, {
                autoFocus: h,
                query: E,
                ref: g,
                placeholder: null != y ? y : m,
                onClear: A,
                onKeyDown: v,
                onFocus: _,
                onChange: O,
                inputProps: {
                    "aria-label": d.intl.string(d.t.tCauZX),
                    "aria-haspopup": "grid",
                    "aria-controls": f,
                    "aria-expanded": !0,
                    "aria-activedescendant": (0, s.Aq)(f, b.columnIndex, b.rowIndex),
                },
            })
        );
    }),
    p = i.memo(f);

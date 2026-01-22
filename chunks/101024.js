n.d(t, {
    A: () => d,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(942381),
    s = n(602034),
    o = n(397927),
    l = n(850992),
    c = n(151271),
    u = n(64306);
let d = i.forwardRef(function (e, t) {
    let {
            store: n,
            hasSendableExpressions: d,
            onKeyDown: f,
            gridNavigatorId: p,
            expressionsListRef: _,
            defaultSearchPlaceholder: h,
            emptySearchPlaceholder: m,
        } = e,
        g = i.useRef(null),
        [E, b] = (0, c.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], a.x),
        y = n.useStore((e) => e.searchPlaceholder),
        O = n.useStore((e) => e.inspectedExpressionPosition, a.x),
        A = i.useCallback(
            (e) => {
                var t;
                n.setActiveCategoryIndex("" === e ? 0 : l.Uk),
                    n.setInspectedExpressionPosition(0, 0),
                    n.setSearchPlaceholder(null),
                    (0, c.Ri)(e),
                    null == (t = _.current) || t.scrollTo(0);
            },
            [_, n],
        ),
        v = i.useCallback(() => {
            (0, c.Ri)("");
        }, []);
    i.useImperativeHandle(t, () => ({
        focus: () => {
            var e;
            return null == (e = g.current) ? void 0 : e.focus();
        },
    })),
        i.useLayoutEffect(() => {
            if (b) {
                var e;
                null == (e = g.current) || e.focus();
            }
        }, [b]);
    let S = () => (null != y ? y : d || null == m ? h : m);
    return (0, r.jsx)("div", {
        className: u.i,
        children: (0, r.jsx)(o.IWV, {
            autoFocus: d,
            disabled: !d,
            query: E,
            ref: g,
            placeholder: S(),
            onClear: v,
            onKeyDown: f,
            onChange: A,
            inputProps: {
                "aria-haspopup": "grid",
                "aria-controls": p,
                "aria-expanded": !0,
                "aria-activedescendant": (0, s.Aq)(p, O.columnIndex, O.rowIndex),
            },
        }),
    });
});

"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    a = n(942381),
    s = n(602034),
    o = n(397927),
    l = n(850992),
    u = n(151271),
    c = n(64306);
let d = i.forwardRef(function (e, t) {
    let {
            store: n,
            hasSendableExpressions: d,
            onKeyDown: _,
            gridNavigatorId: f,
            expressionsListRef: p,
            defaultSearchPlaceholder: h,
            emptySearchPlaceholder: m,
        } = e,
        g = i.useRef(null),
        [E, A] = (0, u.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], a.x),
        I = n.useStore((e) => e.searchPlaceholder),
        T = n.useStore((e) => e.inspectedExpressionPosition, a.x),
        y = i.useCallback(
            (e) => {
                n.setActiveCategoryIndex("" === e ? 0 : l.Uk),
                    n.setInspectedExpressionPosition(0, 0),
                    n.setSearchPlaceholder(null),
                    (0, u.Ri)(e),
                    p.current?.scrollTo(0);
            },
            [p, n],
        ),
        S = i.useCallback(() => {
            (0, u.Ri)("");
        }, []);
    i.useImperativeHandle(t, () => ({ focus: () => g.current?.focus() })),
        i.useLayoutEffect(() => {
            A && g.current?.focus();
        }, [A]);
    let v = () => (null != I ? I : d || null == m ? h : m);
    return (0, r.jsx)("div", {
        className: c.i,
        children: (0, r.jsx)(o.IWV, {
            autoFocus: d,
            disabled: !d,
            query: E,
            ref: g,
            placeholder: v(),
            onClear: S,
            onKeyDown: _,
            onChange: y,
            inputProps: {
                "aria-haspopup": "grid",
                "aria-controls": f,
                "aria-expanded": !0,
                "aria-activedescendant": (0, s.Aq)(f, T.columnIndex, T.rowIndex),
            },
        }),
    });
});

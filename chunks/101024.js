"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    a = n(942381),
    s = n(602034),
    o = n(397927),
    l = n(850992),
    u = n(151271),
    c = n(968324);
let d = i.forwardRef(function (e, t) {
    let {
            store: n,
            hasSendableExpressions: d,
            onKeyDown: _,
            gridNavigatorId: f,
            expressionsListRef: h,
            defaultSearchPlaceholder: p,
            emptySearchPlaceholder: g,
        } = e,
        E = i.useRef(null),
        [A, I] = (0, u.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], a.x),
        T = n.useStore((e) => e.searchPlaceholder),
        y = n.useStore((e) => e.inspectedExpressionPosition, a.x),
        S = i.useCallback(
            (e) => {
                n.setActiveCategoryIndex("" === e ? 0 : l.Uk),
                    n.setInspectedExpressionPosition(0, 0),
                    n.setSearchPlaceholder(null),
                    (0, u.Ri)(e),
                    h.current?.scrollTo(0);
            },
            [h, n],
        ),
        v = i.useCallback(() => {
            (0, u.Ri)("");
        }, []);
    i.useImperativeHandle(t, () => ({ focus: () => E.current?.focus() })),
        i.useLayoutEffect(() => {
            I && E.current?.focus();
        }, [I]);
    let C = () => (null != T ? T : d || null == g ? p : g);
    return (0, r.jsx)("div", {
        className: c.i,
        children: (0, r.jsx)(o.IWV, {
            autoFocus: d,
            disabled: !d,
            query: A,
            ref: E,
            placeholder: C(),
            onClear: v,
            onKeyDown: _,
            onChange: S,
            inputProps: {
                "aria-haspopup": "grid",
                "aria-controls": f,
                "aria-expanded": !0,
                "aria-activedescendant": (0, s.Aq)(f, y.columnIndex, y.rowIndex),
            },
        }),
    });
});

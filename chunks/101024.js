"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    s = n(942381),
    a = n(602034),
    o = n(397927),
    l = n(850992),
    u = n(151271),
    c = n(374531);
let d = i.forwardRef(function (e, t) {
    let {
            store: n,
            hasSendableExpressions: d,
            onKeyDown: _,
            gridNavigatorId: f,
            expressionsListRef: h,
            defaultSearchPlaceholder: p,
            emptySearchPlaceholder: m,
        } = e,
        E = i.useRef(null),
        [g, A] = (0, u.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], s.x),
        I = n.useStore((e) => e.searchPlaceholder),
        [T, S] = n.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], s.x),
        y = i.useCallback(
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
            y("");
        }, [y]);
    i.useImperativeHandle(t, () => ({ focus: () => E.current?.focus() })),
        i.useLayoutEffect(() => {
            A && E.current?.focus();
        }, [A]);
    let C = () => (null != I ? I : d || null == m ? p : m);
    return (0, r.jsx)("div", {
        className: c.i,
        children: (0, r.jsx)(o.IWV, {
            autoFocus: d,
            disabled: !d,
            query: g,
            ref: E,
            placeholder: C(),
            onClear: v,
            onKeyDown: _,
            onChange: y,
            inputProps: {
                "aria-haspopup": "grid",
                "aria-controls": f,
                "aria-expanded": !0,
                ...(S ? { "aria-activedescendant": (0, a.Aq)(f, T.columnIndex, T.rowIndex) } : void 0),
            },
        }),
    });
});

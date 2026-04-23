"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    s = n(942381),
    a = n(602034),
    o = n(892547),
    l = n(850992),
    u = n(151271),
    c = n(387187);
let d = i.forwardRef(function (e, t) {
    let {
            store: n,
            hasSendableExpressions: d,
            onKeyDown: _,
            gridNavigatorId: f,
            expressionsListRef: p,
            defaultSearchPlaceholder: h,
            emptySearchPlaceholder: E,
        } = e,
        m = i.useRef(null),
        [g, A] = (0, u.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], s.x),
        I = n.useStore((e) => e.searchPlaceholder),
        [T, S] = n.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], s.x),
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
        N = i.useCallback(() => {
            y("");
        }, [y]);
    return (
        i.useImperativeHandle(t, () => ({ focus: () => m.current?.focus() })),
        i.useLayoutEffect(() => {
            A && m.current?.focus();
        }, [A]),
        (0, r.jsx)("div", {
            className: c.i,
            children: (0, r.jsx)(o.I, {
                autoFocus: d,
                disabled: !d,
                query: g,
                ref: m,
                placeholder: null != I ? I : d || null == E ? h : E,
                onClear: N,
                onKeyDown: _,
                onChange: y,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": f,
                    "aria-expanded": !0,
                    ...(S ? { "aria-activedescendant": (0, a.Aq)(f, T.columnIndex, T.rowIndex) } : void 0),
                },
            }),
        })
    );
});

"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    l = n(64700),
    s = n(942381),
    r = n(602034),
    a = n(892547),
    o = n(850992),
    c = n(151271),
    u = n(90547);
let d = l.forwardRef(function (e, t) {
    let {
            store: n,
            hasSendableExpressions: d,
            onKeyDown: h,
            gridNavigatorId: m,
            expressionsListRef: p,
            defaultSearchPlaceholder: f,
            emptySearchPlaceholder: g,
        } = e,
        _ = l.useRef(null),
        [x, A] = (0, c.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], s.x),
        C = n.useStore((e) => e.searchPlaceholder),
        [E, I] = n.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], s.x),
        v = l.useCallback(
            (e) => {
                n.setActiveCategoryIndex("" === e ? 0 : o.Uk),
                    n.setInspectedExpressionPosition(0, 0),
                    n.setSearchPlaceholder(null),
                    (0, c.Ri)(e),
                    p.current?.scrollTo(0);
            },
            [p, n],
        ),
        y = l.useCallback(() => {
            v("");
        }, [v]);
    return (
        l.useImperativeHandle(t, () => ({ focus: () => _.current?.focus() })),
        l.useLayoutEffect(() => {
            A && _.current?.focus();
        }, [A]),
        (0, i.jsx)("div", {
            className: u.i,
            children: (0, i.jsx)(a.I, {
                autoFocus: d,
                disabled: !d,
                query: x,
                ref: _,
                placeholder: null != C ? C : d || null == g ? f : g,
                onClear: y,
                onKeyDown: h,
                onChange: v,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": m,
                    "aria-expanded": !0,
                    ...(I ? { "aria-activedescendant": (0, r.Aq)(m, E.columnIndex, E.rowIndex) } : void 0),
                },
            }),
        })
    );
});

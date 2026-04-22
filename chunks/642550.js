"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    s = n(942381),
    r = n(602034),
    a = n(892547),
    o = n(850992),
    c = n(151271),
    u = n(256449),
    d = n(823894),
    h = n(985018),
    m = n(337485);
let p = l.forwardRef(function (e, t) {
    let { onKeyDown: n, stickersListRef: p, channel: f } = e,
        g = (0, u.ZO)(f),
        _ = l.useRef(null),
        { searchQuery: x, isSearchSuggestion: A } = (0, c.RQ)(
            (e) => ({ searchQuery: e.searchQuery, isSearchSuggestion: e.isSearchSuggestion }),
            s.x,
        ),
        C = o.bM.useStore((e) => e.searchPlaceholder),
        [E, I] = o.bM.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], s.x),
        v = l.useCallback(
            (e) => {
                o.bM.setActiveCategoryIndex("" === e ? 0 : -1),
                    o.bM.setInspectedExpressionPosition(0, 0),
                    o.bM.setSearchPlaceholder(null),
                    (0, c.Ri)(e),
                    p.current?.scrollTo(0);
            },
            [p],
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
            className: m.i,
            children: (0, i.jsx)(a.I, {
                autoFocus: g,
                disabled: !g,
                query: x,
                ref: _,
                placeholder: C ?? (g ? h.intl.string(h.t.dt5h1C) : h.intl.string(h.t["Pck/4U"])),
                onClear: y,
                onKeyDown: n,
                onChange: v,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": d.lq,
                    "aria-expanded": !0,
                    ...(I ? { "aria-activedescendant": (0, r.Aq)(d.lq, E.columnIndex, E.rowIndex) } : void 0),
                },
            }),
        })
    );
});

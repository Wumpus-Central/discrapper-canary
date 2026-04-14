"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    s = n(942381),
    a = n(602034),
    o = n(397927),
    l = n(850992),
    u = n(151271),
    c = n(256449),
    d = n(823894),
    _ = n(985018),
    f = n(63005);
let h = i.forwardRef(function (e, t) {
    let { onKeyDown: n, stickersListRef: h, channel: p } = e,
        m = (0, c.ZO)(p),
        E = i.useRef(null),
        { searchQuery: g, isSearchSuggestion: A } = (0, u.RQ)(
            (e) => ({ searchQuery: e.searchQuery, isSearchSuggestion: e.isSearchSuggestion }),
            s.x,
        ),
        I = l.bM.useStore((e) => e.searchPlaceholder),
        [T, S] = l.bM.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], s.x),
        y = i.useCallback(
            (e) => {
                l.bM.setActiveCategoryIndex("" === e ? 0 : -1),
                    l.bM.setInspectedExpressionPosition(0, 0),
                    l.bM.setSearchPlaceholder(null),
                    (0, u.Ri)(e),
                    h.current?.scrollTo(0);
            },
            [h],
        ),
        v = i.useCallback(() => {
            y("");
        }, [y]);
    return (
        i.useImperativeHandle(t, () => ({ focus: () => E.current?.focus() })),
        i.useLayoutEffect(() => {
            A && E.current?.focus();
        }, [A]),
        (0, r.jsx)("div", {
            className: f.i,
            children: (0, r.jsx)(o.IWV, {
                autoFocus: m,
                disabled: !m,
                query: g,
                ref: E,
                placeholder: I ?? (m ? _.intl.string(_.t.dt5h1C) : _.intl.string(_.t["Pck/4U"])),
                onClear: v,
                onKeyDown: n,
                onChange: y,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": d.lq,
                    "aria-expanded": !0,
                    ...(S ? { "aria-activedescendant": (0, a.Aq)(d.lq, T.columnIndex, T.rowIndex) } : void 0),
                },
            }),
        })
    );
});

"use strict";
n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    a = n(942381),
    s = n(602034),
    o = n(397927),
    l = n(850992),
    u = n(151271),
    c = n(256449),
    d = n(823894),
    _ = n(985018),
    f = n(641360);
let p = i.forwardRef(function (e, t) {
    let { onKeyDown: n, stickersListRef: p, channel: h } = e,
        m = (0, c.ZO)(h),
        g = i.useRef(null),
        { searchQuery: E, isSearchSuggestion: A } = (0, u.RQ)(
            (e) => ({ searchQuery: e.searchQuery, isSearchSuggestion: e.isSearchSuggestion }),
            a.x,
        ),
        I = l.bM.useStore((e) => e.searchPlaceholder),
        T = l.bM.useStore((e) => e.inspectedExpressionPosition, a.x),
        y = i.useCallback(
            (e) => {
                l.bM.setActiveCategoryIndex("" === e ? 0 : -1),
                    l.bM.setInspectedExpressionPosition(0, 0),
                    l.bM.setSearchPlaceholder(null),
                    (0, u.Ri)(e),
                    p.current?.scrollTo(0);
            },
            [p],
        ),
        S = i.useCallback(() => {
            (0, u.Ri)("");
        }, []);
    return (
        i.useImperativeHandle(t, () => ({ focus: () => g.current?.focus() })),
        i.useLayoutEffect(() => {
            A && g.current?.focus();
        }, [A]),
        (0, r.jsx)("div", {
            className: f.i,
            children: (0, r.jsx)(o.IWV, {
                autoFocus: m,
                disabled: !m,
                query: E,
                ref: g,
                placeholder: I ?? (m ? _.intl.string(_.t.dt5h1C) : _.intl.string(_.t["Pck/4U"])),
                onClear: S,
                onKeyDown: n,
                onChange: y,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": d.lq,
                    "aria-expanded": !0,
                    "aria-activedescendant": (0, s.Aq)(d.lq, T.columnIndex, T.rowIndex),
                },
            }),
        })
    );
});

n.d(t, {
    A: () => _,
});
var r = n(627968),
    i = n(64700),
    a = n(942381),
    s = n(602034),
    o = n(397927),
    l = n(850992),
    c = n(151271),
    u = n(256449),
    d = n(823894),
    f = n(985018),
    p = n(641360);
let _ = i.forwardRef(function (e, t) {
    let { onKeyDown: n, stickersListRef: _, channel: h } = e,
        m = (0, u.ZO)(h),
        g = i.useRef(null),
        { searchQuery: E, isSearchSuggestion: b } = (0, c.RQ)(
            (e) => ({
                searchQuery: e.searchQuery,
                isSearchSuggestion: e.isSearchSuggestion,
            }),
            a.x,
        ),
        y = l.bM.useStore((e) => e.searchPlaceholder),
        O = l.bM.useStore((e) => e.inspectedExpressionPosition, a.x),
        A = i.useCallback(
            (e) => {
                var t;
                l.bM.setActiveCategoryIndex("" === e ? 0 : -1),
                    l.bM.setInspectedExpressionPosition(0, 0),
                    l.bM.setSearchPlaceholder(null),
                    (0, c.Ri)(e),
                    null == (t = _.current) || t.scrollTo(0);
            },
            [_],
        ),
        v = i.useCallback(() => {
            (0, c.Ri)("");
        }, []);
    return (
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
        }, [b]),
        (0, r.jsx)("div", {
            className: p.i,
            children: (0, r.jsx)(o.IWV, {
                autoFocus: m,
                disabled: !m,
                query: E,
                ref: g,
                placeholder: null != y ? y : m ? f.intl.string(f.t.dt5h1C) : f.intl.string(f.t["Pck/4U"]),
                onClear: v,
                onKeyDown: n,
                onChange: A,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": d.lq,
                    "aria-expanded": !0,
                    "aria-activedescendant": (0, s.Aq)(d.lq, O.columnIndex, O.rowIndex),
                },
            }),
        })
    );
});

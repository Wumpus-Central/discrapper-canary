n.d(t, { Z: () => _ });
var r = n(54381),
    i = n(473749),
    a = n(782425),
    o = n(260866),
    s = n(481060),
    l = n(806966),
    c = n(28546),
    u = n(453070),
    d = n(611480),
    f = n(388032),
    p = n(201632);
let _ = i.forwardRef(function (e, t) {
    let { onKeyDown: n, stickersListRef: _, channel: h } = e,
        m = (0, u.fQ)(h),
        g = i.useRef(null),
        { searchQuery: E, isSearchSuggestion: b } = (0, c.Iu)(
            (e) => ({
                searchQuery: e.searchQuery,
                isSearchSuggestion: e.isSearchSuggestion,
            }),
            a.X,
        ),
        y = l.ZN.useStore((e) => e.searchPlaceholder),
        O = l.ZN.useStore((e) => e.inspectedExpressionPosition, a.X),
        v = i.useCallback(
            (e) => {
                var t;
                l.ZN.setActiveCategoryIndex("" === e ? 0 : d.c),
                    l.ZN.setInspectedExpressionPosition(0, 0),
                    l.ZN.setSearchPlaceholder(null),
                    (0, c.ql)(e),
                    null == (t = _.current) || t.scrollTo(0);
            },
            [_],
        ),
        S = i.useCallback(() => {
            (0, c.ql)("");
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
            className: p.wrapper,
            children: (0, r.jsx)(s.E1j, {
                autoFocus: m,
                disabled: !m,
                query: E,
                ref: g,
                placeholder: null != y ? y : m ? f.intl.string(f.t.dt5h1C) : f.intl.string(f.t["Pck/4U"]),
                onClear: S,
                onKeyDown: n,
                onChange: v,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": d.Vr,
                    "aria-expanded": !0,
                    "aria-activedescendant": (0, o.NE)(d.Vr, O.columnIndex, O.rowIndex),
                },
            }),
        })
    );
});

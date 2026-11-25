var i = n(477900),
    s = n(582128),
    l = n(462180),
    r = n(602034),
    a = n(683438),
    o = n(850992),
    c = n(151271);
n(732139);
var u = n(650583),
    d = n(792996);
let m = s.memo(function (e) {
    let {
            emojiListRef: t,
            gridNavigatorId: n,
            onKeyDown: m,
            onFocus: f,
            autoFocus: E,
            defaultSearchPlaceholder: I,
            ref: h,
        } = e,
        g = s.useRef(null),
        A = (0, c.RQ)((e) => e.searchQuery),
        [p, _, N] = o.Om.useStore((e) => [e.inspectedExpressionPosition, e.searchPlaceholder, e.hasInteracted], l.x),
        C = s.useCallback(
            (e) => {
                (o.Om.setActiveCategoryIndex("" === e ? 0 : -1),
                    o.Om.setInspectedExpressionPosition(0, 0),
                    o.Om.setSearchPlaceholder(null),
                    (0, c.Ri)(e),
                    t.current?.scrollTo(0));
            },
            [t],
        ),
        y = s.useCallback(() => {
            C("");
        }, [C]);
    return (
        s.useImperativeHandle(h, () => ({ focus: () => g.current?.focus() })),
        (0, i.jsx)(a.I, {
            autoFocus: E,
            query: A,
            ref: g,
            placeholder: _ ?? I,
            onClear: y,
            onKeyDown: function (e) {
                switch (e.key) {
                    case u.dh.ARROW_LEFT:
                    case u.dh.ARROW_RIGHT:
                    case u.dh.ARROW_UP:
                    case u.dh.ARROW_DOWN:
                        document.activeElement !== e.target && e.preventDefault();
                }
                m(e);
            },
            onFocus: f,
            onChange: C,
            inputProps: {
                role: "combobox",
                "aria-label": d.intl.string(d.t.tCauZX),
                "aria-haspopup": "grid",
                "aria-autocomplete": "list",
                "aria-controls": n,
                "aria-expanded": !0,
                ...(N ? { "aria-activedescendant": (0, r.Aq)(n, p.columnIndex, p.rowIndex) } : void 0),
            },
        })
    );
});
n.d(t, {}, { A: m });

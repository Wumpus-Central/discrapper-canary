"use strict";
n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    s = n(942381),
    r = n(602034),
    a = n(892547),
    o = n(850992),
    c = n(151271);
n(732139);
var u = n(650583),
    d = n(985018);
let h = l.forwardRef(function (e, t) {
        let {
                emojiListRef: n,
                gridNavigatorId: h,
                onKeyDown: m,
                onFocus: p,
                autoFocus: f,
                defaultSearchPlaceholder: g,
            } = e,
            _ = l.useRef(null),
            x = (0, c.RQ)((e) => e.searchQuery),
            [A, C, E] = o.Om.useStore(
                (e) => [e.inspectedExpressionPosition, e.searchPlaceholder, e.hasInteracted],
                s.x,
            ),
            I = l.useCallback(
                (e) => {
                    o.Om.setActiveCategoryIndex("" === e ? 0 : -1),
                        o.Om.setInspectedExpressionPosition(0, 0),
                        o.Om.setSearchPlaceholder(null),
                        (0, c.Ri)(e),
                        n.current?.scrollTo(0);
                },
                [n],
            ),
            v = l.useCallback(() => {
                I("");
            }, [I]);
        return (
            l.useImperativeHandle(t, () => ({ focus: () => _.current?.focus() })),
            (0, i.jsx)(a.I, {
                autoFocus: f,
                query: x,
                ref: _,
                placeholder: C ?? g,
                onClear: v,
                onKeyDown: (e) => {
                    switch (e.key) {
                        case u.dh.ARROW_LEFT:
                        case u.dh.ARROW_RIGHT:
                        case u.dh.ARROW_UP:
                        case u.dh.ARROW_DOWN:
                            document.activeElement !== e.target && e.preventDefault();
                    }
                    m(e);
                },
                onFocus: p,
                onChange: I,
                inputProps: {
                    "aria-label": d.intl.string(d.t.tCauZX),
                    "aria-haspopup": "grid",
                    "aria-controls": h,
                    "aria-expanded": !0,
                    ...(E ? { "aria-activedescendant": (0, r.Aq)(h, A.columnIndex, A.rowIndex) } : void 0),
                },
            })
        );
    }),
    m = l.memo(h);

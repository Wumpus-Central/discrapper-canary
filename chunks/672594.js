"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    s = n(942381),
    a = n(602034),
    o = n(892547),
    l = n(850992),
    u = n(151271);
n(732139);
var c = n(650583),
    d = n(985018);
let _ = i.forwardRef(function (e, t) {
        let {
                emojiListRef: n,
                gridNavigatorId: _,
                onKeyDown: f,
                onFocus: p,
                autoFocus: h,
                defaultSearchPlaceholder: E,
            } = e,
            m = i.useRef(null),
            g = (0, u.RQ)((e) => e.searchQuery),
            [A, I, T] = l.Om.useStore(
                (e) => [e.inspectedExpressionPosition, e.searchPlaceholder, e.hasInteracted],
                s.x,
            ),
            S = i.useCallback(
                (e) => {
                    l.Om.setActiveCategoryIndex("" === e ? 0 : -1),
                        l.Om.setInspectedExpressionPosition(0, 0),
                        l.Om.setSearchPlaceholder(null),
                        (0, u.Ri)(e),
                        n.current?.scrollTo(0);
                },
                [n],
            ),
            y = i.useCallback(() => {
                S("");
            }, [S]);
        return (
            i.useImperativeHandle(t, () => ({ focus: () => m.current?.focus() })),
            (0, r.jsx)(o.I, {
                autoFocus: h,
                query: g,
                ref: m,
                placeholder: I ?? E,
                onClear: y,
                onKeyDown: (e) => {
                    switch (e.key) {
                        case c.dh.ARROW_LEFT:
                        case c.dh.ARROW_RIGHT:
                        case c.dh.ARROW_UP:
                        case c.dh.ARROW_DOWN:
                            document.activeElement !== e.target && e.preventDefault();
                    }
                    f(e);
                },
                onFocus: p,
                onChange: S,
                inputProps: {
                    "aria-label": d.intl.string(d.t.tCauZX),
                    "aria-haspopup": "grid",
                    "aria-controls": _,
                    "aria-expanded": !0,
                    ...(T ? { "aria-activedescendant": (0, a.Aq)(_, A.columnIndex, A.rowIndex) } : void 0),
                },
            })
        );
    }),
    f = i.memo(_);

"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    a = n(942381),
    s = n(602034),
    o = n(397927),
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
                defaultSearchPlaceholder: m,
            } = e,
            g = i.useRef(null),
            E = (0, u.RQ)((e) => e.searchQuery),
            [A, I] = l.Om.useStore((e) => [e.inspectedExpressionPosition, e.searchPlaceholder], a.x),
            T = i.useCallback(
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
                (0, u.Ri)("");
            }, []),
            S = (e) => {
                switch (e.key) {
                    case c.dh.ARROW_LEFT:
                    case c.dh.ARROW_RIGHT:
                    case c.dh.ARROW_UP:
                    case c.dh.ARROW_DOWN:
                        document.activeElement !== e.target && e.preventDefault();
                }
                f(e);
            };
        return (
            i.useImperativeHandle(t, () => ({ focus: () => g.current?.focus() })),
            (0, r.jsx)(o.IWV, {
                autoFocus: h,
                query: E,
                ref: g,
                placeholder: I ?? m,
                onClear: y,
                onKeyDown: S,
                onFocus: p,
                onChange: T,
                inputProps: {
                    "aria-label": d.intl.string(d.t.tCauZX),
                    "aria-haspopup": "grid",
                    "aria-controls": _,
                    "aria-expanded": !0,
                    "aria-activedescendant": (0, s.Aq)(_, A.columnIndex, A.rowIndex),
                },
            })
        );
    }),
    f = i.memo(_);

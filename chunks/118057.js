"use strict";
n.d(t, { A: () => c });
var r = n(64700),
    i = n(788413),
    s = n(741918),
    a = n(602034);
let o = [s.D$.TAB];
function l(e, t, n) {
    return null != t && null != n ? `#${(0, a.Aq)(e, t, n)}` : `[data-ref-id=${e}]`;
}
function u(e) {
    return document.querySelector(e);
}
function c(e) {
    let {
            navId: t,
            columnCounts: n,
            focusedX: c = 0,
            focusedY: d = 0,
            onSelect: _,
            prepareFocus: f,
            getNewFocusPosition: p,
            maintainFocusPosition: h = !0,
            enabled: E = !0,
            onDispatch: m,
            autoFocusElement: g = !0,
            useVirtualFocus: A = !1,
        } = e,
        I = r.useCallback(
            (e, t) => {
                let n = (0, i.A)(e, t);
                return null != m && m(e, n, t), n;
            },
            [m],
        ),
        [T, S] = r.useReducer(I, { focusedX: c, focusedY: d, columnCounts: n }),
        { columnCounts: y, focusedX: N, focusedY: v } = T,
        [C] = r.useState(() => (0, a.nF)(S, 16));
    return (
        r.useEffect(() => {
            S({ type: i.n.UPDATE_COLUMN_COUNTS, columnCounts: n });
        }, [n]),
        (function (e) {
            let {
                    navId: t,
                    columnCounts: n,
                    focusedX: c,
                    focusedY: d,
                    onSelect: _,
                    prepareFocus: f,
                    getNewFocusPosition: p,
                    dispatch: h,
                    maintainFocusPosition: E,
                    enabled: m,
                    autoFocusElement: g,
                    useVirtualFocus: A,
                } = e,
                I = r.useRef(m),
                T = u(l(t, c, d)),
                [S, y] = r.useState(!1),
                [N, v] = r.useState(!1),
                [C, O] = r.useState(!1),
                [R] = r.useState(
                    () =>
                        new a.Lp((e) => {
                            let [t, n] = e.split(",").map(Number);
                            return () => {
                                y(!0), h({ type: i.n.SET_FOCUSED_POSITION, x: t, y: n });
                            };
                        }),
                );
            r.useEffect(() => () => R.clean(), [R]);
            let b = r.useCallback(
                    (e) => {
                        if (!I.current || !g) return !1;
                        e.focus();
                    },
                    [g],
                ),
                D = r.useCallback(
                    (e, n) => {
                        let r = l(t, e, n);
                        (null != f ? f(e, n, r) : Promise.resolve()).then(() => {
                            let e = u(r);
                            null != e ? (b(e), v(!1)) : requestAnimationFrame(() => v(!0));
                        });
                    },
                    [t, f, b],
                ),
                L = r.useCallback(
                    function () {
                        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                            [n, r] = null != p ? p(c, d) : [c, d];
                        if ((n !== c || r !== d) && (h({ type: i.n.SET_FOCUSED_POSITION, x: n, y: r }), !e))
                            return void O(!0);
                        let s = u(l(t, n, r));
                        null != s && (O(!0), b(s));
                    },
                    [h, c, d, p, t, b],
                ),
                [w, M] = r.useState(!1);
            r.useEffect(() => {
                if (!w || !S) return;
                M(!1);
                let e = u(l(t, c, d));
                if (null != e) return void b(e);
                y(!1);
                let n = u(l(t));
                null != n && b(n);
            }, [t, w, S, b, c, d]);
            let P = r.useCallback((e) => {
                I.current && null == e && M(!0);
            }, []);
            r.useEffect(() => {
                S && N && null != T && (b(T), v(!1));
            }, [N, T]),
                r.useEffect(() => {
                    S && (C || D(c, d), O(!1));
                }, [c, d]);
            let x = r.useCallback(
                    (e) => {
                        if (!I.current) return;
                        if (
                            !A &&
                            o.includes(e.key) &&
                            !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) &&
                            e.currentTarget === e.target
                        ) {
                            e.preventDefault(), e.stopPropagation(), L();
                            return;
                        }
                        let t = (function (e) {
                            switch (e.key) {
                                case s.D$.ENTER:
                                    return s.X2.SELECT_FOCUSED_ITEM;
                                case s.D$.UP:
                                    return s.X2.NAVIGATE_UP;
                                case s.D$.DOWN:
                                    return s.X2.NAVIGATE_DOWN;
                                case s.D$.RIGHT:
                                    return s.X2.NAVIGATE_RIGHT;
                                case s.D$.LEFT:
                                    return s.X2.NAVIGATE_LEFT;
                                case s.D$.HOME:
                                    if (e.ctrlKey) return s.X2.NAVIGATE_START;
                                    return s.X2.NAVIGATE_INLINE_START;
                                case s.D$.END:
                                    if (e.ctrlKey) return s.X2.NAVIGATE_END;
                                    return s.X2.NAVIGATE_INLINE_END;
                            }
                        })(e);
                        switch (t) {
                            case s.X2.NAVIGATE_UP:
                            case s.X2.NAVIGATE_DOWN:
                            case s.X2.NAVIGATE_RIGHT:
                            case s.X2.NAVIGATE_LEFT:
                            case s.X2.NAVIGATE_INLINE_START:
                            case s.X2.NAVIGATE_INLINE_END:
                            case s.X2.NAVIGATE_START:
                            case s.X2.NAVIGATE_END:
                                0 !== n.length &&
                                    (0 !== c || 0 !== d || t !== s.X2.NAVIGATE_LEFT) &&
                                    (e.preventDefault(), e.stopPropagation()),
                                    h({ type: t });
                                return;
                            case s.X2.SELECT_FOCUSED_ITEM:
                                if ((g && T?.ownerDocument.activeElement !== T) || e.repeat) return;
                                e.preventDefault(),
                                    e.stopPropagation(),
                                    h({ type: t }),
                                    null != _ ? _(c, d, e) : null != T && T.click();
                        }
                    },
                    [L, h, g, T, _, c, d],
                ),
                k = r.useCallback(
                    (e) =>
                        e.currentTarget !== e.target
                            ? (S || (y(!0), O(!0)), !1)
                            : S
                              ? (L(!1), !1)
                              : void (E && null != T ? D(c, d) : L(!0)),
                    [S, E, T, L, D, c, d],
                ),
                U = r.useCallback((e) => {
                    if (e.target !== e.currentTarget) {
                        if (e.currentTarget.contains(e.relatedTarget)) return !1;
                        y(!1);
                    }
                }, []),
                G = r.useMemo(() => Math.max(...n), [n]),
                F = r.useCallback(
                    () => ({
                        role: "grid",
                        "aria-rowcount": n.length,
                        "aria-colcount": G,
                        tabIndex: S && E ? -1 : 0,
                        "data-ref-id": t,
                        onKeyDown: x,
                        onFocus: k,
                        onBlur: U,
                    }),
                    [n.length, G, S, E, t, x, k, U],
                ),
                V = r.useCallback(
                    (e, n) => {
                        let r = {
                            role: "gridcell",
                            "aria-rowindex": n + 1,
                            "aria-colindex": e + 1,
                            id: (0, a.Aq)(t, e, n),
                            tabIndex: E && e === c && n === d ? 0 : -1,
                            onFocus: R.get(`${e},${n}`),
                        };
                        return e === c && n === d && (r.ref = P), r;
                    },
                    [t, E, c, d, R, P],
                ),
                B = r.useCallback((e) => ({ role: "row", "aria-rowindex": e + 1 }), []);
            return r.useMemo(
                () => ({ dispatch: h, getContainerProps: F, getItemProps: V, getRowProps: B }),
                [h, F, V, B],
            );
        })({
            navId: t,
            columnCounts: y,
            focusedX: N,
            focusedY: v,
            dispatch: C,
            onSelect: _,
            prepareFocus: f,
            getNewFocusPosition: p,
            maintainFocusPosition: h,
            enabled: E,
            autoFocusElement: g,
            useVirtualFocus: A,
        })
    );
}

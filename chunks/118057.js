"use strict";
n.d(t, { A: () => c });
var i = n(64700),
    r = n(788413),
    a = n(741918),
    s = n(602034);
let l = [a.D$.TAB];
function o(e, t, n) {
    return null != t && null != n ? `#${(0, s.Aq)(e, t, n)}` : `[data-ref-id=${e}]`;
}
function d(e) {
    return document.querySelector(e);
}
function c(e) {
    let {
            navId: t,
            columnCounts: n,
            focusedX: c = 0,
            focusedY: u = 0,
            onSelect: _,
            prepareFocus: E,
            getNewFocusPosition: A,
            maintainFocusPosition: h = !0,
            enabled: I = !0,
            onDispatch: f,
            autoFocusElement: p = !0,
            useVirtualFocus: T = !1,
        } = e,
        m = i.useCallback(
            (e, t) => {
                let n = (0, r.A)(e, t);
                return null != f && f(e, n, t), n;
            },
            [f],
        ),
        [g, S] = i.useReducer(m, { focusedX: c, focusedY: u, columnCounts: n }),
        { columnCounts: N, focusedX: C, focusedY: O } = g,
        [R] = i.useState(() => (0, s.nF)(S, 16));
    return (
        i.useEffect(() => {
            S({ type: r.n.UPDATE_COLUMN_COUNTS, columnCounts: n });
        }, [n]),
        (function (e) {
            let {
                    navId: t,
                    columnCounts: n,
                    focusedX: c,
                    focusedY: u,
                    onSelect: _,
                    prepareFocus: E,
                    getNewFocusPosition: A,
                    dispatch: h,
                    maintainFocusPosition: I,
                    enabled: f,
                    autoFocusElement: p,
                    useVirtualFocus: T,
                } = e,
                m = i.useRef(f),
                g = d(o(t, c, u)),
                [S, N] = i.useState(!1),
                [C, O] = i.useState(!1),
                [R, L] = i.useState(!1),
                [D] = i.useState(
                    () =>
                        new s.Lp((e) => {
                            let [t, n] = e.split(",").map(Number);
                            return () => {
                                N(!0), h({ type: r.n.SET_FOCUSED_POSITION, x: t, y: n });
                            };
                        }),
                );
            i.useEffect(() => () => D.clean(), [D]);
            let y = i.useCallback(
                    (e) => {
                        if (!m.current || !p) return !1;
                        e.focus();
                    },
                    [p],
                ),
                v = i.useCallback(
                    (e, n) => {
                        let i = o(t, e, n);
                        (null != E ? E(e, n, i) : Promise.resolve()).then(() => {
                            let e = d(i);
                            null != e ? (y(e), O(!1)) : requestAnimationFrame(() => O(!0));
                        });
                    },
                    [t, E, y],
                ),
                b = i.useCallback(
                    function () {
                        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                            [n, i] = null != A ? A(c, u) : [c, u];
                        if ((n !== c || i !== u) && (h({ type: r.n.SET_FOCUSED_POSITION, x: n, y: i }), !e))
                            return void L(!0);
                        let a = d(o(t, n, i));
                        null != a && (L(!0), y(a));
                    },
                    [h, c, u, A, t, y],
                ),
                [M, P] = i.useState(!1);
            i.useEffect(() => {
                if (!M || !S) return;
                P(!1);
                let e = d(o(t, c, u));
                if (null != e) return void y(e);
                N(!1);
                let n = d(o(t));
                null != n && y(n);
            }, [t, M, S, y, c, u]);
            let U = i.useCallback((e) => {
                m.current && null == e && P(!0);
            }, []);
            i.useEffect(() => {
                S && C && null != g && (y(g), O(!1));
            }, [C, g]),
                i.useEffect(() => {
                    S && (R || v(c, u), L(!1));
                }, [c, u]);
            let w = i.useCallback(
                    (e) => {
                        if (!m.current) return;
                        if (
                            !T &&
                            l.includes(e.key) &&
                            !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) &&
                            e.currentTarget === e.target
                        ) {
                            e.preventDefault(), e.stopPropagation(), b();
                            return;
                        }
                        let t = (function (e) {
                            switch (e.key) {
                                case a.D$.ENTER:
                                    return a.X2.SELECT_FOCUSED_ITEM;
                                case a.D$.UP:
                                    return a.X2.NAVIGATE_UP;
                                case a.D$.DOWN:
                                    return a.X2.NAVIGATE_DOWN;
                                case a.D$.RIGHT:
                                    return a.X2.NAVIGATE_RIGHT;
                                case a.D$.LEFT:
                                    return a.X2.NAVIGATE_LEFT;
                                case a.D$.HOME:
                                    if (e.ctrlKey) return a.X2.NAVIGATE_START;
                                    return a.X2.NAVIGATE_INLINE_START;
                                case a.D$.END:
                                    if (e.ctrlKey) return a.X2.NAVIGATE_END;
                                    return a.X2.NAVIGATE_INLINE_END;
                            }
                        })(e);
                        switch (t) {
                            case a.X2.NAVIGATE_UP:
                            case a.X2.NAVIGATE_DOWN:
                            case a.X2.NAVIGATE_RIGHT:
                            case a.X2.NAVIGATE_LEFT:
                            case a.X2.NAVIGATE_INLINE_START:
                            case a.X2.NAVIGATE_INLINE_END:
                            case a.X2.NAVIGATE_START:
                            case a.X2.NAVIGATE_END:
                                0 !== n.length &&
                                    (0 !== c || 0 !== u || t !== a.X2.NAVIGATE_LEFT) &&
                                    (e.preventDefault(), e.stopPropagation()),
                                    h({ type: t });
                                return;
                            case a.X2.SELECT_FOCUSED_ITEM:
                                if ((p && g?.ownerDocument.activeElement !== g) || e.repeat) return;
                                e.preventDefault(),
                                    e.stopPropagation(),
                                    h({ type: t }),
                                    null != _ ? _(c, u, e) : null != g && g.click();
                        }
                    },
                    [b, h, p, g, _, c, u],
                ),
                G = i.useCallback(
                    (e) =>
                        e.currentTarget !== e.target
                            ? (S || (N(!0), L(!0)), !1)
                            : S
                              ? (b(!1), !1)
                              : void (I && null != g ? v(c, u) : b(!0)),
                    [S, I, g, b, v, c, u],
                ),
                x = i.useCallback((e) => {
                    if (e.target !== e.currentTarget) {
                        if (e.currentTarget.contains(e.relatedTarget)) return !1;
                        N(!1);
                    }
                }, []),
                k = i.useMemo(() => Math.max(...n), [n]),
                F = i.useCallback(
                    () => ({
                        role: "grid",
                        "aria-rowcount": n.length,
                        "aria-colcount": k,
                        tabIndex: S && I ? -1 : 0,
                        "data-ref-id": t,
                        onKeyDown: w,
                        onFocus: G,
                        onBlur: x,
                    }),
                    [n.length, k, S, I, t, w, G, x],
                ),
                V = i.useCallback(
                    (e, n) => {
                        let i = {
                            role: "gridcell",
                            "aria-rowindex": n + 1,
                            "aria-colindex": e + 1,
                            id: (0, s.Aq)(t, e, n),
                            tabIndex: I && e === c && n === u ? 0 : -1,
                            onFocus: D.get(`${e},${n}`),
                        };
                        return e === c && n === u && (i.ref = U), i;
                    },
                    [t, I, c, u, D, U],
                ),
                B = i.useCallback((e) => ({ role: "row", "aria-rowindex": e + 1 }), []);
            return i.useMemo(
                () => ({ dispatch: h, getContainerProps: F, getItemProps: V, getRowProps: B }),
                [h, F, V, B],
            );
        })({
            navId: t,
            columnCounts: N,
            focusedX: C,
            focusedY: O,
            dispatch: R,
            onSelect: _,
            prepareFocus: E,
            getNewFocusPosition: A,
            maintainFocusPosition: h,
            enabled: I,
            autoFocusElement: p,
            useVirtualFocus: T,
        })
    );
}

n.d(t, { A: () => u });
var i = n(582128),
    s = n(788413),
    l = n(741918),
    r = n(602034);
let a = [l.D$.TAB];
function o(e, t, n) {
    return null != t && null != n ? `#${(0, r.Aq)(e, t, n)}` : `[data-ref-id=${e}]`;
}
function c(e) {
    return document.querySelector(e);
}
function u(e) {
    let {
            navId: t,
            columnCounts: n,
            focusedX: u = 0,
            focusedY: d = 0,
            onSelect: m,
            prepareFocus: f,
            getNewFocusPosition: E,
            maintainFocusPosition: I = !0,
            enabled: g = !0,
            onDispatch: h,
            autoFocusElement: A = !0,
            useVirtualFocus: _ = !1,
        } = e,
        p = i.useCallback(
            (e, t) => {
                let n = (0, s.A)(e, t);
                return (null != h && h(e, n, t), n);
            },
            [h],
        ),
        [N, C] = i.useReducer(p, { focusedX: u, focusedY: d, columnCounts: n }),
        { columnCounts: O, focusedX: S, focusedY: x } = N,
        [T] = i.useState(() => (0, r.nF)(C, 16));
    return (
        i.useEffect(() => {
            C({ type: s.n.UPDATE_COLUMN_COUNTS, columnCounts: n });
        }, [n]),
        (function (e) {
            let {
                    navId: t,
                    columnCounts: n,
                    focusedX: u,
                    focusedY: d,
                    onSelect: m,
                    prepareFocus: f,
                    getNewFocusPosition: E,
                    dispatch: I,
                    maintainFocusPosition: g,
                    enabled: h,
                    autoFocusElement: A,
                    useVirtualFocus: _,
                } = e,
                p = i.useRef(h),
                N = c(o(t, u, d)),
                [C, O] = i.useState(!1),
                [S, x] = i.useState(!1),
                [T, y] = i.useState(!1),
                [j] = i.useState(
                    () =>
                        new r.Lp((e) => {
                            let [t, n] = e.split(",").map(Number);
                            return () => {
                                (O(!0), I({ type: s.n.SET_FOCUSED_POSITION, x: t, y: n }));
                            };
                        }),
                );
            i.useEffect(() => () => j.clean(), [j]);
            let R = i.useCallback(
                    (e) => {
                        if (!p.current || !A) return !1;
                        e.focus();
                    },
                    [A],
                ),
                b = i.useCallback(
                    (e, n) => {
                        let i = o(t, e, n);
                        (null != f ? f(e, n, i) : Promise.resolve()).then(() => {
                            let e = c(i);
                            null != e ? (R(e), x(!1)) : requestAnimationFrame(() => x(!0));
                        });
                    },
                    [t, f, R],
                ),
                L = i.useCallback(
                    function () {
                        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                            [n, i] = null != E ? E(u, d) : [u, d];
                        if ((n !== u || i !== d) && (I({ type: s.n.SET_FOCUSED_POSITION, x: n, y: i }), !e))
                            return void y(!0);
                        let l = c(o(t, n, i));
                        null != l && (y(!0), R(l));
                    },
                    [I, u, d, E, t, R],
                ),
                [v, M] = i.useState(!1);
            i.useEffect(() => {
                if (!v || !C) return;
                M(!1);
                let e = c(o(t, u, d));
                if (null != e) return void R(e);
                O(!1);
                let n = c(o(t));
                null != n && R(n);
            }, [t, v, C, R, u, d]);
            let D = i.useCallback((e) => {
                p.current && null == e && M(!0);
            }, []);
            (i.useEffect(() => {
                C && S && null != N && (R(N), x(!1));
            }, [S, N]),
                i.useEffect(() => {
                    C && (T || b(u, d), y(!1));
                }, [u, d]));
            let P = i.useCallback(
                    (e) => {
                        if (!p.current) return;
                        if (
                            !_ &&
                            a.includes(e.key) &&
                            !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) &&
                            e.currentTarget === e.target
                        ) {
                            (e.preventDefault(), e.stopPropagation(), L());
                            return;
                        }
                        let t = (function (e) {
                            switch (e.key) {
                                case l.D$.ENTER:
                                    return l.X2.SELECT_FOCUSED_ITEM;
                                case l.D$.UP:
                                    return l.X2.NAVIGATE_UP;
                                case l.D$.DOWN:
                                    return l.X2.NAVIGATE_DOWN;
                                case l.D$.RIGHT:
                                    return l.X2.NAVIGATE_RIGHT;
                                case l.D$.LEFT:
                                    return l.X2.NAVIGATE_LEFT;
                                case l.D$.HOME:
                                    if (e.ctrlKey) return l.X2.NAVIGATE_START;
                                    return l.X2.NAVIGATE_INLINE_START;
                                case l.D$.END:
                                    if (e.ctrlKey) return l.X2.NAVIGATE_END;
                                    return l.X2.NAVIGATE_INLINE_END;
                            }
                        })(e);
                        switch (t) {
                            case l.X2.NAVIGATE_UP:
                            case l.X2.NAVIGATE_DOWN:
                            case l.X2.NAVIGATE_RIGHT:
                            case l.X2.NAVIGATE_LEFT:
                            case l.X2.NAVIGATE_INLINE_START:
                            case l.X2.NAVIGATE_INLINE_END:
                            case l.X2.NAVIGATE_START:
                            case l.X2.NAVIGATE_END:
                                (0 !== n.length &&
                                    (0 !== u || 0 !== d || t !== l.X2.NAVIGATE_LEFT) &&
                                    (e.preventDefault(), e.stopPropagation()),
                                    I({ type: t }));
                                return;
                            case l.X2.SELECT_FOCUSED_ITEM:
                                if ((A && N?.ownerDocument.activeElement !== N) || e.repeat) return;
                                (e.preventDefault(),
                                    e.stopPropagation(),
                                    I({ type: t }),
                                    null != m ? m(u, d, e) : null != N && N.click());
                        }
                    },
                    [L, I, A, N, m, u, d],
                ),
                w = i.useCallback(
                    (e) =>
                        e.currentTarget !== e.target
                            ? (C || (O(!0), y(!0)), !1)
                            : C
                              ? (L(!1), !1)
                              : void (g && null != N ? b(u, d) : L(!0)),
                    [C, g, N, L, b, u, d],
                ),
                U = i.useCallback((e) => {
                    if (e.target !== e.currentTarget) {
                        if (e.currentTarget.contains(e.relatedTarget)) return !1;
                        O(!1);
                    }
                }, []),
                G = i.useMemo(() => Math.max(...n), [n]),
                k = i.useCallback(
                    () => ({
                        role: "grid",
                        "aria-rowcount": n.length,
                        "aria-colcount": G,
                        tabIndex: C && g ? -1 : 0,
                        "data-ref-id": t,
                        onKeyDown: P,
                        onFocus: w,
                        onBlur: U,
                    }),
                    [n.length, G, C, g, t, P, w, U],
                ),
                F = i.useCallback(
                    (e, n) => {
                        let i = {
                            role: "gridcell",
                            "aria-rowindex": n + 1,
                            "aria-colindex": e + 1,
                            id: (0, r.Aq)(t, e, n),
                            tabIndex: g && e === u && n === d ? 0 : -1,
                            onFocus: j.get(`${e},${n}`),
                        };
                        return (e === u && n === d && (i.ref = D), i);
                    },
                    [t, g, u, d, j, D],
                ),
                J = i.useCallback((e) => ({ role: "row", "aria-rowindex": e + 1 }), []);
            return i.useMemo(
                () => ({ dispatch: I, getContainerProps: k, getItemProps: F, getRowProps: J }),
                [I, k, F, J],
            );
        })({
            navId: t,
            columnCounts: O,
            focusedX: S,
            focusedY: x,
            dispatch: T,
            onSelect: m,
            prepareFocus: f,
            getNewFocusPosition: E,
            maintainFocusPosition: I,
            enabled: g,
            autoFocusElement: A,
            useVirtualFocus: _,
        })
    );
}

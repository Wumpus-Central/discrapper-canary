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
            enabled: h = !0,
            onDispatch: g,
            autoFocusElement: p = !0,
            useVirtualFocus: A = !1,
        } = e,
        _ = i.useCallback(
            (e, t) => {
                let n = (0, s.A)(e, t);
                return (null != g && g(e, n, t), n);
            },
            [g],
        ),
        [N, C] = i.useReducer(_, { focusedX: u, focusedY: d, columnCounts: n }),
        { columnCounts: S, focusedX: x, focusedY: O } = N,
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
                    maintainFocusPosition: h,
                    enabled: g,
                    autoFocusElement: p,
                    useVirtualFocus: A,
                } = e,
                _ = i.useRef(g),
                N = c(o(t, u, d)),
                [C, S] = i.useState(!1),
                [x, O] = i.useState(!1),
                [T, j] = i.useState(!1),
                [y] = i.useState(
                    () =>
                        new r.Lp((e) => {
                            let [t, n] = e.split(",").map(Number);
                            return () => {
                                (S(!0), I({ type: s.n.SET_FOCUSED_POSITION, x: t, y: n }));
                            };
                        }),
                );
            i.useEffect(() => () => y.clean(), [y]);
            let b = i.useCallback(
                    (e) => {
                        if (!_.current || !p) return !1;
                        e.focus();
                    },
                    [p],
                ),
                R = i.useCallback(
                    (e, n) => {
                        let i = o(t, e, n);
                        (null != f ? f(e, n, i) : Promise.resolve()).then(() => {
                            let e = c(i);
                            null != e ? (b(e), O(!1)) : requestAnimationFrame(() => O(!0));
                        });
                    },
                    [t, f, b],
                ),
                v = i.useCallback(
                    function () {
                        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                            [n, i] = null != E ? E(u, d) : [u, d];
                        if ((n !== u || i !== d) && (I({ type: s.n.SET_FOCUSED_POSITION, x: n, y: i }), !e))
                            return void j(!0);
                        let l = c(o(t, n, i));
                        null != l && (j(!0), b(l));
                    },
                    [I, u, d, E, t, b],
                ),
                [L, M] = i.useState(!1);
            i.useEffect(() => {
                if (!L || !C) return;
                M(!1);
                let e = c(o(t, u, d));
                if (null != e) return void b(e);
                S(!1);
                let n = c(o(t));
                null != n && b(n);
            }, [t, L, C, b, u, d]);
            let P = i.useCallback((e) => {
                _.current && null == e && M(!0);
            }, []);
            (i.useEffect(() => {
                C && x && null != N && (b(N), O(!1));
            }, [x, N]),
                i.useEffect(() => {
                    C && (T || R(u, d), j(!1));
                }, [u, d]));
            let D = i.useCallback(
                    (e) => {
                        if (!_.current) return;
                        if (
                            !A &&
                            a.includes(e.key) &&
                            !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) &&
                            e.currentTarget === e.target
                        ) {
                            (e.preventDefault(), e.stopPropagation(), v());
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
                                if ((p && N?.ownerDocument.activeElement !== N) || e.repeat) return;
                                (e.preventDefault(),
                                    e.stopPropagation(),
                                    I({ type: t }),
                                    null != m ? m(u, d, e) : null != N && N.click());
                        }
                    },
                    [v, I, p, N, m, u, d],
                ),
                w = i.useCallback(
                    (e) =>
                        e.currentTarget !== e.target
                            ? (C || (S(!0), j(!0)), !1)
                            : C
                              ? (v(!1), !1)
                              : void (h && null != N ? R(u, d) : v(!0)),
                    [C, h, N, v, R, u, d],
                ),
                k = i.useCallback((e) => {
                    if (e.target !== e.currentTarget) {
                        if (e.currentTarget.contains(e.relatedTarget)) return !1;
                        S(!1);
                    }
                }, []),
                U = i.useMemo(() => Math.max(...n), [n]),
                G = i.useCallback(
                    () => ({
                        role: "grid",
                        "aria-rowcount": n.length,
                        "aria-colcount": U,
                        tabIndex: C && h ? -1 : 0,
                        "data-ref-id": t,
                        onKeyDown: D,
                        onFocus: w,
                        onBlur: k,
                    }),
                    [n.length, U, C, h, t, D, w, k],
                ),
                F = i.useCallback(
                    (e, n) => {
                        let i = {
                            role: "gridcell",
                            "aria-rowindex": n + 1,
                            "aria-colindex": e + 1,
                            id: (0, r.Aq)(t, e, n),
                            tabIndex: h && e === u && n === d ? 0 : -1,
                            onFocus: y.get(`${e},${n}`),
                        };
                        return (e === u && n === d && (i.ref = P), i);
                    },
                    [t, h, u, d, y, P],
                ),
                J = i.useCallback((e) => ({ role: "row", "aria-rowindex": e + 1 }), []);
            return i.useMemo(
                () => ({ dispatch: I, getContainerProps: G, getItemProps: F, getRowProps: J }),
                [I, G, F, J],
            );
        })({
            navId: t,
            columnCounts: S,
            focusedX: x,
            focusedY: O,
            dispatch: T,
            onSelect: m,
            prepareFocus: f,
            getNewFocusPosition: E,
            maintainFocusPosition: I,
            enabled: h,
            autoFocusElement: p,
            useVirtualFocus: A,
        })
    );
}

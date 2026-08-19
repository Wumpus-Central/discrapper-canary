"use strict";
n.d(t, { A: () => c });
var l = n(582128),
    i = n(788413),
    s = n(741918),
    r = n(602034);
let a = [s.D$.TAB];
function o(e, t, n) {
    return null != t && null != n ? `#${(0, r.Aq)(e, t, n)}` : `[data-ref-id=${e}]`;
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
            onSelect: h,
            prepareFocus: m,
            getNewFocusPosition: f,
            maintainFocusPosition: p = !0,
            enabled: g = !0,
            onDispatch: x,
            autoFocusElement: A = !0,
            useVirtualFocus: E = !1,
        } = e,
        C = l.useCallback(
            (e, t) => {
                let n = (0, i.A)(e, t);
                return null != x && x(e, n, t), n;
            },
            [x],
        ),
        [I, y] = l.useReducer(C, { focusedX: c, focusedY: d, columnCounts: n }),
        { columnCounts: S, focusedX: v, focusedY: _ } = I,
        [N] = l.useState(() => (0, r.nF)(y, 16));
    return (
        l.useEffect(() => {
            y({ type: i.n.UPDATE_COLUMN_COUNTS, columnCounts: n });
        }, [n]),
        (function (e) {
            let {
                    navId: t,
                    columnCounts: n,
                    focusedX: c,
                    focusedY: d,
                    onSelect: h,
                    prepareFocus: m,
                    getNewFocusPosition: f,
                    dispatch: p,
                    maintainFocusPosition: g,
                    enabled: x,
                    autoFocusElement: A,
                    useVirtualFocus: E,
                } = e,
                C = l.useRef(x),
                I = u(o(t, c, d)),
                [y, S] = l.useState(!1),
                [v, _] = l.useState(!1),
                [N, T] = l.useState(!1),
                [j] = l.useState(
                    () =>
                        new r.Lp((e) => {
                            let [t, n] = e.split(",").map(Number);
                            return () => {
                                S(!0), p({ type: i.n.SET_FOCUSED_POSITION, x: t, y: n });
                            };
                        }),
                );
            l.useEffect(() => () => j.clean(), [j]);
            let b = l.useCallback(
                    (e) => {
                        if (!C.current || !A) return !1;
                        e.focus();
                    },
                    [A],
                ),
                R = l.useCallback(
                    (e, n) => {
                        let l = o(t, e, n);
                        (null != m ? m(e, n, l) : Promise.resolve()).then(() => {
                            let e = u(l);
                            null != e ? (b(e), _(!1)) : requestAnimationFrame(() => _(!0));
                        });
                    },
                    [t, m, b],
                ),
                L = l.useCallback(
                    function () {
                        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                            [n, l] = null != f ? f(c, d) : [c, d];
                        if ((n !== c || l !== d) && (p({ type: i.n.SET_FOCUSED_POSITION, x: n, y: l }), !e))
                            return void T(!0);
                        let s = u(o(t, n, l));
                        null != s && (T(!0), b(s));
                    },
                    [p, c, d, f, t, b],
                ),
                [O, M] = l.useState(!1);
            l.useEffect(() => {
                if (!O || !y) return;
                M(!1);
                let e = u(o(t, c, d));
                if (null != e) return void b(e);
                S(!1);
                let n = u(o(t));
                null != n && b(n);
            }, [t, O, y, b, c, d]);
            let w = l.useCallback((e) => {
                C.current && null == e && M(!0);
            }, []);
            l.useEffect(() => {
                y && v && null != I && (b(I), _(!1));
            }, [v, I]),
                l.useEffect(() => {
                    y && (N || R(c, d), T(!1));
                }, [c, d]);
            let k = l.useCallback(
                    (e) => {
                        if (!C.current) return;
                        if (
                            !E &&
                            a.includes(e.key) &&
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
                                    p({ type: t });
                                return;
                            case s.X2.SELECT_FOCUSED_ITEM:
                                if ((A && I?.ownerDocument.activeElement !== I) || e.repeat) return;
                                e.preventDefault(),
                                    e.stopPropagation(),
                                    p({ type: t }),
                                    null != h ? h(c, d, e) : null != I && I.click();
                        }
                    },
                    [L, p, A, I, h, c, d],
                ),
                P = l.useCallback(
                    (e) =>
                        e.currentTarget !== e.target
                            ? (y || (S(!0), T(!0)), !1)
                            : y
                              ? (L(!1), !1)
                              : void (g && null != I ? R(c, d) : L(!0)),
                    [y, g, I, L, R, c, d],
                ),
                D = l.useCallback((e) => {
                    if (e.target !== e.currentTarget) {
                        if (e.currentTarget.contains(e.relatedTarget)) return !1;
                        S(!1);
                    }
                }, []),
                U = l.useMemo(() => Math.max(...n), [n]),
                G = l.useCallback(
                    () => ({
                        role: "grid",
                        "aria-rowcount": n.length,
                        "aria-colcount": U,
                        tabIndex: y && g ? -1 : 0,
                        "data-ref-id": t,
                        onKeyDown: k,
                        onFocus: P,
                        onBlur: D,
                    }),
                    [n.length, U, y, g, t, k, P, D],
                ),
                V = l.useCallback(
                    (e, n) => {
                        let l = {
                            role: "gridcell",
                            "aria-rowindex": n + 1,
                            "aria-colindex": e + 1,
                            id: (0, r.Aq)(t, e, n),
                            tabIndex: g && e === c && n === d ? 0 : -1,
                            onFocus: j.get(`${e},${n}`),
                        };
                        return e === c && n === d && (l.ref = w), l;
                    },
                    [t, g, c, d, j, w],
                ),
                F = l.useCallback((e) => ({ role: "row", "aria-rowindex": e + 1 }), []);
            return l.useMemo(
                () => ({ dispatch: p, getContainerProps: G, getItemProps: V, getRowProps: F }),
                [p, G, V, F],
            );
        })({
            navId: t,
            columnCounts: S,
            focusedX: v,
            focusedY: _,
            dispatch: N,
            onSelect: h,
            prepareFocus: m,
            getNewFocusPosition: f,
            maintainFocusPosition: p,
            enabled: g,
            autoFocusElement: A,
            useVirtualFocus: E,
        })
    );
}

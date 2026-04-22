"use strict";
n.d(t, { A: () => u });
var i = n(64700),
    l = n(788413),
    s = n(741918),
    r = n(602034);
let a = [s.D$.TAB];
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
            onSelect: h,
            prepareFocus: m,
            getNewFocusPosition: p,
            maintainFocusPosition: f = !0,
            enabled: g = !0,
            onDispatch: _,
            autoFocusElement: x = !0,
            useVirtualFocus: A = !1,
        } = e,
        C = i.useCallback(
            (e, t) => {
                let n = (0, l.A)(e, t);
                return null != _ && _(e, n, t), n;
            },
            [_],
        ),
        [E, I] = i.useReducer(C, { focusedX: u, focusedY: d, columnCounts: n }),
        { columnCounts: v, focusedX: y, focusedY: S } = E,
        [b] = i.useState(() => (0, r.nF)(I, 16));
    return (
        i.useEffect(() => {
            I({ type: l.n.UPDATE_COLUMN_COUNTS, columnCounts: n });
        }, [n]),
        (function (e) {
            let {
                    navId: t,
                    columnCounts: n,
                    focusedX: u,
                    focusedY: d,
                    onSelect: h,
                    prepareFocus: m,
                    getNewFocusPosition: p,
                    dispatch: f,
                    maintainFocusPosition: g,
                    enabled: _,
                    autoFocusElement: x,
                    useVirtualFocus: A,
                } = e,
                C = i.useRef(_),
                E = c(o(t, u, d)),
                [I, v] = i.useState(!1),
                [y, S] = i.useState(!1),
                [b, N] = i.useState(!1),
                [T] = i.useState(
                    () =>
                        new r.Lp((e) => {
                            let [t, n] = e.split(",").map(Number);
                            return () => {
                                v(!0), f({ type: l.n.SET_FOCUSED_POSITION, x: t, y: n });
                            };
                        }),
                );
            i.useEffect(() => () => T.clean(), [T]);
            let j = i.useCallback(
                    (e) => {
                        if (!C.current || !x) return !1;
                        e.focus();
                    },
                    [x],
                ),
                R = i.useCallback(
                    (e, n) => {
                        let i = o(t, e, n);
                        (null != m ? m(e, n, i) : Promise.resolve()).then(() => {
                            let e = c(i);
                            null != e ? (j(e), S(!1)) : requestAnimationFrame(() => S(!0));
                        });
                    },
                    [t, m, j],
                ),
                w = i.useCallback(
                    function () {
                        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                            [n, i] = null != p ? p(u, d) : [u, d];
                        if ((n !== u || i !== d) && (f({ type: l.n.SET_FOCUSED_POSITION, x: n, y: i }), !e))
                            return void N(!0);
                        let s = c(o(t, n, i));
                        null != s && (N(!0), j(s));
                    },
                    [f, u, d, p, t, j],
                ),
                [L, M] = i.useState(!1);
            i.useEffect(() => {
                if (!L || !I) return;
                M(!1);
                let e = c(o(t, u, d));
                if (null != e) return void j(e);
                v(!1);
                let n = c(o(t));
                null != n && j(n);
            }, [t, L, I, j, u, d]);
            let k = i.useCallback((e) => {
                C.current && null == e && M(!0);
            }, []);
            i.useEffect(() => {
                I && y && null != E && (j(E), S(!1));
            }, [y, E]),
                i.useEffect(() => {
                    I && (b || R(u, d), N(!1));
                }, [u, d]);
            let O = i.useCallback(
                    (e) => {
                        if (!C.current) return;
                        if (
                            !A &&
                            a.includes(e.key) &&
                            !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) &&
                            e.currentTarget === e.target
                        ) {
                            e.preventDefault(), e.stopPropagation(), w();
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
                                    (0 !== u || 0 !== d || t !== s.X2.NAVIGATE_LEFT) &&
                                    (e.preventDefault(), e.stopPropagation()),
                                    f({ type: t });
                                return;
                            case s.X2.SELECT_FOCUSED_ITEM:
                                if ((x && E?.ownerDocument.activeElement !== E) || e.repeat) return;
                                e.preventDefault(),
                                    e.stopPropagation(),
                                    f({ type: t }),
                                    null != h ? h(u, d, e) : null != E && E.click();
                        }
                    },
                    [w, f, x, E, h, u, d],
                ),
                P = i.useCallback(
                    (e) =>
                        e.currentTarget !== e.target
                            ? (I || (v(!0), N(!0)), !1)
                            : I
                              ? (w(!1), !1)
                              : void (g && null != E ? R(u, d) : w(!0)),
                    [I, g, E, w, R, u, d],
                ),
                D = i.useCallback((e) => {
                    if (e.target !== e.currentTarget) {
                        if (e.currentTarget.contains(e.relatedTarget)) return !1;
                        v(!1);
                    }
                }, []),
                U = i.useMemo(() => Math.max(...n), [n]),
                V = i.useCallback(
                    () => ({
                        role: "grid",
                        "aria-rowcount": n.length,
                        "aria-colcount": U,
                        tabIndex: I && g ? -1 : 0,
                        "data-ref-id": t,
                        onKeyDown: O,
                        onFocus: P,
                        onBlur: D,
                    }),
                    [n.length, U, I, g, t, O, P, D],
                ),
                G = i.useCallback(
                    (e, n) => {
                        let i = {
                            role: "gridcell",
                            "aria-rowindex": n + 1,
                            "aria-colindex": e + 1,
                            id: (0, r.Aq)(t, e, n),
                            tabIndex: g && e === u && n === d ? 0 : -1,
                            onFocus: T.get(`${e},${n}`),
                        };
                        return e === u && n === d && (i.ref = k), i;
                    },
                    [t, g, u, d, T, k],
                ),
                F = i.useCallback((e) => ({ role: "row", "aria-rowindex": e + 1 }), []);
            return i.useMemo(
                () => ({ dispatch: f, getContainerProps: V, getItemProps: G, getRowProps: F }),
                [f, V, G, F],
            );
        })({
            navId: t,
            columnCounts: v,
            focusedX: y,
            focusedY: S,
            dispatch: b,
            onSelect: h,
            prepareFocus: m,
            getNewFocusPosition: p,
            maintainFocusPosition: f,
            enabled: g,
            autoFocusElement: x,
            useVirtualFocus: A,
        })
    );
}

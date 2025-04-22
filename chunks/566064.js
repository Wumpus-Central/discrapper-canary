n.d(t, { Z: () => _ }), n(388685), n(35282);
var r = n(192379),
    i = n(611144),
    a = n(536895),
    o = n(260866);
let s = [a.R8.TAB];
function l(e) {
    switch (e.key) {
        case a.R8.ENTER:
            return a.Us.SELECT_FOCUSED_ITEM;
        case a.R8.UP:
            return a.Us.NAVIGATE_UP;
        case a.R8.DOWN:
            return a.Us.NAVIGATE_DOWN;
        case a.R8.RIGHT:
            return a.Us.NAVIGATE_RIGHT;
        case a.R8.LEFT:
            return a.Us.NAVIGATE_LEFT;
        case a.R8.HOME:
            if (e.ctrlKey) return a.Us.NAVIGATE_START;
            return a.Us.NAVIGATE_INLINE_START;
        case a.R8.END:
            if (e.ctrlKey) return a.Us.NAVIGATE_END;
            return a.Us.NAVIGATE_INLINE_END;
    }
}
function c(e, t, n) {
    return null != t && null != n ? '#'.concat((0, o.NE)(e, t, n)) : '[data-ref-id='.concat(e, ']');
}
function u(e) {
    return document.querySelector(e);
}
function d(e) {
    return (null == e ? void 0 : e.ownerDocument.activeElement) === e;
}
function f(e) {
    let { navId: t, columnCounts: n, focusedX: f, focusedY: _, onSelect: p, prepareFocus: h, getNewFocusPosition: m, dispatch: g, maintainFocusPosition: E, enabled: b, autoFocusElement: y, useVirtualFocus: v } = e,
        O = r.useRef(b),
        I = u(c(t, f, _)),
        [S, T] = r.useState(!1),
        [A, N] = r.useState(!1),
        [C, R] = r.useState(!1),
        [P] = r.useState(
            () =>
                new o.$o((e) => {
                    let [t, n] = e.split(',').map(Number);
                    return () => {
                        T(!0),
                            g({
                                type: i.s.SET_FOCUSED_POSITION,
                                x: t,
                                y: n
                            });
                    };
                })
        );
    r.useEffect(() => () => P.clean(), [P]);
    let w = r.useCallback(
            (e) => {
                if (!O.current || !y) return !1;
                e.focus();
            },
            [y]
        ),
        D = r.useCallback(
            (e, n) => {
                let r = c(t, e, n);
                (null != h ? h(e, n, r) : Promise.resolve()).then(() => {
                    let e = u(r);
                    null != e ? (w(e), N(!1)) : requestAnimationFrame(() => N(!0));
                });
            },
            [t, h, w]
        ),
        L = r.useCallback(
            function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    [n, r] = null != m ? m(f, _) : [f, _];
                if (
                    (n !== f || r !== _) &&
                    (g({
                        type: i.s.SET_FOCUSED_POSITION,
                        x: n,
                        y: r
                    }),
                    !e)
                )
                    return void R(!0);
                let a = u(c(t, n, r));
                null != a && (R(!0), w(a));
            },
            [g, f, _, m, t, w]
        ),
        [x, M] = r.useState(!1);
    r.useEffect(() => {
        if (!x || !S) return;
        M(!1);
        let e = u(c(t, f, _));
        if (null != e) return void w(e);
        T(!1);
        let n = u(c(t));
        null != n && w(n);
    }, [t, x, S, w, f, _]);
    let k = r.useCallback((e) => {
        O.current && null == e && M(!0);
    }, []);
    r.useEffect(() => {
        S && A && null != I && (w(I), N(!1));
    }, [A, I]),
        r.useEffect(() => {
            S && (C || D(f, _), R(!1));
        }, [f, _]);
    let j = r.useCallback(
            (e) => {
                if (!O.current) return;
                if (!v && s.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
                    e.preventDefault(), e.stopPropagation(), L();
                    return;
                }
                let t = l(e);
                switch (t) {
                    case a.Us.NAVIGATE_UP:
                    case a.Us.NAVIGATE_DOWN:
                    case a.Us.NAVIGATE_RIGHT:
                    case a.Us.NAVIGATE_LEFT:
                    case a.Us.NAVIGATE_INLINE_START:
                    case a.Us.NAVIGATE_INLINE_END:
                    case a.Us.NAVIGATE_START:
                    case a.Us.NAVIGATE_END:
                        0 !== n.length && (0 !== f || 0 !== _ || t !== a.Us.NAVIGATE_LEFT) && (e.preventDefault(), e.stopPropagation()), g({ type: t });
                        return;
                    case a.Us.SELECT_FOCUSED_ITEM:
                        if ((y && !d(I)) || e.repeat) return;
                        e.preventDefault(), e.stopPropagation(), g({ type: t }), null != p ? p(f, _, e) : null != I && I.click();
                }
            },
            [L, g, y, I, p, f, _]
        ),
        U = r.useCallback((e) => (e.currentTarget !== e.target ? (S || (T(!0), R(!0)), !1) : S ? (L(!1), !1) : void (E && null != I ? D(f, _) : L(!0))), [S, E, I, L, D, f, _]),
        G = r.useCallback((e) => {
            if (e.target !== e.currentTarget) {
                if (e.currentTarget.contains(e.relatedTarget)) return !1;
                T(!1);
            }
        }, []),
        B = r.useMemo(() => Math.max(...n), [n]),
        V = r.useCallback(
            () => ({
                role: 'grid',
                'aria-rowcount': n.length,
                'aria-colcount': B,
                tabIndex: S && E ? -1 : 0,
                'data-ref-id': t,
                onKeyDown: j,
                onFocus: U,
                onBlur: G
            }),
            [n.length, B, S, E, t, j, U, G]
        ),
        F = r.useCallback(
            (e, n) => {
                let r = {
                    role: 'gridcell',
                    'aria-rowindex': n + 1,
                    'aria-colindex': e + 1,
                    id: (0, o.NE)(t, e, n),
                    tabIndex: E && e === f && n === _ ? 0 : -1,
                    onFocus: P.get(''.concat(e, ',').concat(n))
                };
                return e === f && n === _ && (r.ref = k), r;
            },
            [t, E, f, _, P, k]
        ),
        Z = r.useCallback(
            (e) => ({
                role: 'row',
                'aria-rowindex': e + 1
            }),
            []
        );
    return r.useMemo(
        () => ({
            dispatch: g,
            getContainerProps: V,
            getItemProps: F,
            getRowProps: Z
        }),
        [g, V, F, Z]
    );
}
function _(e) {
    let { navId: t, columnCounts: n, focusedX: a = 0, focusedY: s = 0, onSelect: l, prepareFocus: c, getNewFocusPosition: u, maintainFocusPosition: d = !0, enabled: _ = !0, onDispatch: p, autoFocusElement: h = !0, useVirtualFocus: m = !1 } = e,
        g = r.useCallback(
            (e, t) => {
                let n = (0, i.Z)(e, t);
                return null != p && p(e, n, t), n;
            },
            [p]
        ),
        [E, b] = r.useReducer(g, {
            focusedX: a,
            focusedY: s,
            columnCounts: n
        }),
        { columnCounts: y, focusedX: v, focusedY: O } = E,
        [I] = r.useState(() => (0, o.P2)(b, 16));
    return (
        r.useEffect(() => {
            b({
                type: i.s.UPDATE_COLUMN_COUNTS,
                columnCounts: n
            });
        }, [n]),
        f({
            navId: t,
            columnCounts: y,
            focusedX: v,
            focusedY: O,
            dispatch: I,
            onSelect: l,
            prepareFocus: c,
            getNewFocusPosition: u,
            maintainFocusPosition: d,
            enabled: _,
            autoFocusElement: h,
            useVirtualFocus: m
        })
    );
}

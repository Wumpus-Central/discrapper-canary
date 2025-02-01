n.d(t, { Z: () => _ }), n(47120);
var i = n(192379),
    r = n(611144),
    a = n(536895),
    s = n(260866);
let o = [a.R8.TAB];
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
function u(e, t, n) {
    return null != t && null != n ? '#'.concat((0, s.NE)(e, t, n)) : '[data-ref-id='.concat(e, ']');
}
function c(e) {
    return document.querySelector(e);
}
function d(e) {
    return (null == e ? void 0 : e.ownerDocument.activeElement) === e;
}
function f(e) {
    let { navId: t, columnCounts: n, focusedX: f, focusedY: _, onSelect: p, prepareFocus: h, getNewFocusPosition: m, dispatch: g, maintainFocusPosition: E, enabled: v, autoFocusElement: y, useVirtualFocus: I } = e,
        T = i.useRef();
    T.current = v;
    let b = c(u(t, f, _)),
        [S, A] = i.useState(!1),
        [N, C] = i.useState(!1),
        [R, O] = i.useState(!1),
        [D] = i.useState(
            () =>
                new s.$o((e) => {
                    let [t, n] = e.split(',').map(Number);
                    return () => {
                        A(!0),
                            g({
                                type: r.s.SET_FOCUSED_POSITION,
                                x: t,
                                y: n
                            });
                    };
                })
        );
    i.useEffect(() => () => D.clean(), [D]);
    let x = i.useCallback(
            (e) => {
                if (!T.current || !y) return !1;
                e.focus();
            },
            [y]
        ),
        L = i.useCallback(
            (e, n) => {
                let i = u(t, e, n);
                (null != h ? h(e, n, i) : Promise.resolve()).then(() => {
                    let e = c(i);
                    null != e ? (x(e), C(!1)) : requestAnimationFrame(() => C(!0));
                });
            },
            [t, h, x]
        ),
        P = i.useCallback(
            function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    [n, i] = null != m ? m(f, _) : [f, _];
                if (
                    (n !== f || i !== _) &&
                    (g({
                        type: r.s.SET_FOCUSED_POSITION,
                        x: n,
                        y: i
                    }),
                    !e)
                ) {
                    O(!0);
                    return;
                }
                let a = c(u(t, n, i));
                null != a && (O(!0), x(a));
            },
            [g, f, _, m, t, x]
        ),
        [w, M] = i.useState(!1);
    i.useEffect(() => {
        if (!w || !S) return;
        M(!1);
        let e = c(u(t, f, _));
        if (null != e) {
            x(e);
            return;
        }
        A(!1);
        let n = c(u(t));
        null != n && x(n);
    }, [t, w, S, x, f, _]);
    let k = i.useCallback((e) => {
        T.current && null == e && M(!0);
    }, []);
    i.useEffect(() => {
        S && N && null != b && (x(b), C(!1));
    }, [N, b]),
        i.useEffect(() => {
            S && (R || L(f, _), O(!1));
        }, [f, _]);
    let U = i.useCallback(
            (e) => {
                if (!T.current) return;
                if (!I && o.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
                    e.preventDefault(), e.stopPropagation(), P();
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
                        0 === n.length || (0 === f && 0 === _ && t === a.Us.NAVIGATE_LEFT) || (e.preventDefault(), e.stopPropagation()), g({ type: t });
                        return;
                    case a.Us.SELECT_FOCUSED_ITEM:
                        if ((y && !d(b)) || e.repeat) return;
                        e.preventDefault(), e.stopPropagation(), g({ type: t }), null != p ? p(f, _, e) : null != b && b.click();
                }
            },
            [P, g, y, b, p, f, _]
        ),
        G = i.useCallback((e) => (e.currentTarget !== e.target ? (S || (A(!0), O(!0)), !1) : S ? (P(!1), !1) : void (E && null != b ? L(f, _) : P(!0))), [S, E, b, P, L, f, _]),
        B = i.useCallback((e) => {
            if (e.target !== e.currentTarget) {
                if (e.currentTarget.contains(e.relatedTarget)) return !1;
                A(!1);
            }
        }, []),
        Z = i.useMemo(() => Math.max(...n), [n]),
        F = i.useCallback(
            () => ({
                role: 'grid',
                'aria-rowcount': n.length,
                'aria-colcount': Z,
                tabIndex: S && E ? -1 : 0,
                'data-ref-id': t,
                onKeyDown: U,
                onFocus: G,
                onBlur: B
            }),
            [n.length, Z, S, E, t, U, G, B]
        ),
        V = i.useCallback(
            (e, n) => {
                let i = {
                    role: 'gridcell',
                    'aria-rowindex': n + 1,
                    'aria-colindex': e + 1,
                    id: (0, s.NE)(t, e, n),
                    tabIndex: E && e === f && n === _ ? 0 : -1,
                    onFocus: D.get(''.concat(e, ',').concat(n))
                };
                return e === f && n === _ && (i.ref = k), i;
            },
            [t, E, f, _, D, k]
        ),
        j = i.useCallback(
            (e) => ({
                role: 'row',
                'aria-rowindex': e + 1
            }),
            []
        );
    return i.useMemo(
        () => ({
            dispatch: g,
            getContainerProps: F,
            getItemProps: V,
            getRowProps: j
        }),
        [g, F, V, j]
    );
}
function _(e) {
    let { navId: t, columnCounts: n, focusedX: a = 0, focusedY: o = 0, onSelect: l, prepareFocus: u, getNewFocusPosition: c, maintainFocusPosition: d = !0, enabled: _ = !0, onDispatch: p, autoFocusElement: h = !0, useVirtualFocus: m = !1 } = e,
        g = i.useCallback(
            (e, t) => {
                let n = (0, r.Z)(e, t);
                return null != p && p(e, n, t), n;
            },
            [p]
        ),
        [E, v] = i.useReducer(g, {
            focusedX: a,
            focusedY: o,
            columnCounts: n
        }),
        { columnCounts: y, focusedX: I, focusedY: T } = E,
        [b] = i.useState(() => (0, s.P2)(v, 16));
    return (
        i.useEffect(() => {
            v({
                type: r.s.UPDATE_COLUMN_COUNTS,
                columnCounts: n
            });
        }, [n]),
        f({
            navId: t,
            columnCounts: y,
            focusedX: I,
            focusedY: T,
            dispatch: b,
            onSelect: l,
            prepareFocus: u,
            getNewFocusPosition: c,
            maintainFocusPosition: d,
            enabled: _,
            autoFocusElement: h,
            useVirtualFocus: m
        })
    );
}

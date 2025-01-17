r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(611144),
    o = r(536895),
    l = r(260866);
let u = [o.R8.TAB];
function c(e) {
    switch (e.key) {
        case o.R8.ENTER:
            return o.Us.SELECT_FOCUSED_ITEM;
        case o.R8.UP:
            return o.Us.NAVIGATE_UP;
        case o.R8.DOWN:
            return o.Us.NAVIGATE_DOWN;
        case o.R8.RIGHT:
            return o.Us.NAVIGATE_RIGHT;
        case o.R8.LEFT:
            return o.Us.NAVIGATE_LEFT;
        case o.R8.HOME:
            if (e.ctrlKey) return o.Us.NAVIGATE_START;
            return o.Us.NAVIGATE_INLINE_START;
        case o.R8.END:
            if (e.ctrlKey) return o.Us.NAVIGATE_END;
            return o.Us.NAVIGATE_INLINE_END;
    }
}
function d(e, n, r) {
    return null != n && null != r ? '#'.concat((0, l.NE)(e, n, r)) : '[data-ref-id='.concat(e, ']');
}
function f(e) {
    return document.querySelector(e);
}
function _(e) {
    return (null == e ? void 0 : e.ownerDocument.activeElement) === e;
}
function h(e) {
    let { navId: n, columnCounts: r, focusedX: i, focusedY: h, onSelect: p, prepareFocus: m, getNewFocusPosition: g, dispatch: E, maintainFocusPosition: v, enabled: I, autoFocusElement: T, useVirtualFocus: b } = e,
        y = a.useRef();
    y.current = I;
    let S = f(d(n, i, h)),
        [A, N] = a.useState(!1),
        [C, R] = a.useState(!1),
        [O, D] = a.useState(!1),
        [L] = a.useState(
            () =>
                new l.$o((e) => {
                    let [n, r] = e.split(',').map(Number);
                    return () => {
                        N(!0),
                            E({
                                type: s.s.SET_FOCUSED_POSITION,
                                x: n,
                                y: r
                            });
                    };
                })
        );
    a.useEffect(() => () => L.clean(), [L]);
    let x = a.useCallback(
            (e) => {
                if (!y.current || !T) return !1;
                e.focus();
            },
            [T]
        ),
        w = a.useCallback(
            (e, r) => {
                let i = d(n, e, r);
                (null != m ? m(e, r, i) : Promise.resolve()).then(() => {
                    let e = f(i);
                    null != e ? (x(e), R(!1)) : requestAnimationFrame(() => R(!0));
                });
            },
            [n, m, x]
        ),
        P = a.useCallback(
            function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    [r, a] = null != g ? g(i, h) : [i, h];
                if (
                    (r !== i || a !== h) &&
                    (E({
                        type: s.s.SET_FOCUSED_POSITION,
                        x: r,
                        y: a
                    }),
                    !e)
                ) {
                    D(!0);
                    return;
                }
                let o = f(d(n, r, a));
                null != o && (D(!0), x(o));
            },
            [E, i, h, g, n, x]
        ),
        [M, k] = a.useState(!1);
    a.useEffect(() => {
        if (!M || !A) return;
        k(!1);
        let e = f(d(n, i, h));
        if (null != e) {
            x(e);
            return;
        }
        N(!1);
        let r = f(d(n));
        null != r && x(r);
    }, [n, M, A, x, i, h]);
    let U = a.useCallback((e) => {
        y.current && null == e && k(!0);
    }, []);
    a.useEffect(() => {
        A && C && null != S && (x(S), R(!1));
    }, [C, S]),
        a.useEffect(() => {
            A && (!O && w(i, h), D(!1));
        }, [i, h]);
    let B = a.useCallback(
            (e) => {
                if (!y.current) return;
                if (!b && u.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
                    e.preventDefault(), e.stopPropagation(), P();
                    return;
                }
                let n = c(e);
                switch (n) {
                    case o.Us.NAVIGATE_UP:
                    case o.Us.NAVIGATE_DOWN:
                    case o.Us.NAVIGATE_RIGHT:
                    case o.Us.NAVIGATE_LEFT:
                    case o.Us.NAVIGATE_INLINE_START:
                    case o.Us.NAVIGATE_INLINE_END:
                    case o.Us.NAVIGATE_START:
                    case o.Us.NAVIGATE_END:
                        !(0 === r.length || (0 === i && 0 === h && n === o.Us.NAVIGATE_LEFT)) && (e.preventDefault(), e.stopPropagation()), E({ type: n });
                        return;
                    case o.Us.SELECT_FOCUSED_ITEM:
                        if ((T && !_(S)) || e.repeat) return;
                        e.preventDefault(), e.stopPropagation(), E({ type: n }), null != p ? p(i, h, e) : null != S && S.click();
                }
            },
            [P, E, T, S, p, i, h]
        ),
        G = a.useCallback((e) => (e.currentTarget !== e.target ? (!A && (N(!0), D(!0)), !1) : A ? (P(!1), !1) : void (v && null != S ? w(i, h) : P(!0))), [A, v, S, P, w, i, h]),
        Z = a.useCallback((e) => {
            if (e.target !== e.currentTarget) {
                if (e.currentTarget.contains(e.relatedTarget)) return !1;
                N(!1);
            }
        }, []),
        F = a.useMemo(() => Math.max(...r), [r]),
        V = a.useCallback(
            () => ({
                role: 'grid',
                'aria-rowcount': r.length,
                'aria-colcount': F,
                tabIndex: A && v ? -1 : 0,
                'data-ref-id': n,
                onKeyDown: B,
                onFocus: G,
                onBlur: Z
            }),
            [r.length, F, A, v, n, B, G, Z]
        ),
        j = a.useCallback(
            (e, r) => {
                let a = {
                    role: 'gridcell',
                    'aria-rowindex': r + 1,
                    'aria-colindex': e + 1,
                    id: (0, l.NE)(n, e, r),
                    tabIndex: v && e === i && r === h ? 0 : -1,
                    onFocus: L.get(''.concat(e, ',').concat(r))
                };
                return e === i && r === h && (a.ref = U), a;
            },
            [n, v, i, h, L, U]
        ),
        H = a.useCallback(
            (e) => ({
                role: 'row',
                'aria-rowindex': e + 1
            }),
            []
        );
    return a.useMemo(
        () => ({
            dispatch: E,
            getContainerProps: V,
            getItemProps: j,
            getRowProps: H
        }),
        [E, V, j, H]
    );
}
function p(e) {
    let { navId: n, columnCounts: r, focusedX: i = 0, focusedY: o = 0, onSelect: u, prepareFocus: c, getNewFocusPosition: d, maintainFocusPosition: f = !0, enabled: _ = !0, onDispatch: p, autoFocusElement: m = !0, useVirtualFocus: g = !1 } = e,
        E = a.useCallback(
            (e, n) => {
                let r = (0, s.Z)(e, n);
                return null != p && p(e, r, n), r;
            },
            [p]
        ),
        [v, I] = a.useReducer(E, {
            focusedX: i,
            focusedY: o,
            columnCounts: r
        }),
        { columnCounts: T, focusedX: b, focusedY: y } = v,
        [S] = a.useState(() => (0, l.P2)(I, 16));
    return (
        a.useEffect(() => {
            I({
                type: s.s.UPDATE_COLUMN_COUNTS,
                columnCounts: r
            });
        }, [r]),
        h({
            navId: n,
            columnCounts: T,
            focusedX: b,
            focusedY: y,
            dispatch: S,
            onSelect: u,
            prepareFocus: c,
            getNewFocusPosition: d,
            maintainFocusPosition: f,
            enabled: _,
            autoFocusElement: m,
            useVirtualFocus: g
        })
    );
}

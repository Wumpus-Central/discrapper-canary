r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(611144),
    s = r(536895),
    l = r(260866);
let u = [s.R8.TAB];
function c(e) {
    switch (e.key) {
        case s.R8.ENTER:
            return s.Us.SELECT_FOCUSED_ITEM;
        case s.R8.UP:
            return s.Us.NAVIGATE_UP;
        case s.R8.DOWN:
            return s.Us.NAVIGATE_DOWN;
        case s.R8.RIGHT:
            return s.Us.NAVIGATE_RIGHT;
        case s.R8.LEFT:
            return s.Us.NAVIGATE_LEFT;
        case s.R8.HOME:
            if (e.ctrlKey) return s.Us.NAVIGATE_START;
            return s.Us.NAVIGATE_INLINE_START;
        case s.R8.END:
            if (e.ctrlKey) return s.Us.NAVIGATE_END;
            return s.Us.NAVIGATE_INLINE_END;
    }
}
function d(e, n, r) {
    return null != n && null != r ? '#'.concat((0, l.NE)(e, n, r)) : '[data-ref-id='.concat(e, ']');
}
function f(e) {
    return document.querySelector(e);
}
function p(e) {
    return (null == e ? void 0 : e.ownerDocument.activeElement) === e;
}
function h(e) {
    let { navId: n, columnCounts: r, focusedX: i, focusedY: h, onSelect: _, prepareFocus: m, getNewFocusPosition: g, dispatch: E, maintainFocusPosition: v, enabled: y, autoFocusElement: b, useVirtualFocus: I } = e,
        T = a.useRef();
    T.current = y;
    let S = f(d(n, i, h)),
        [A, C] = a.useState(!1),
        [N, R] = a.useState(!1),
        [O, D] = a.useState(!1),
        [L] = a.useState(
            () =>
                new l.$o((e) => {
                    let [n, r] = e.split(',').map(Number);
                    return () => {
                        C(!0),
                            E({
                                type: o.s.SET_FOCUSED_POSITION,
                                x: n,
                                y: r
                            });
                    };
                })
        );
    a.useEffect(() => () => L.clean(), [L]);
    let x = a.useCallback(
            (e) => {
                if (!T.current || !b) return !1;
                e.focus();
            },
            [b]
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
                        type: o.s.SET_FOCUSED_POSITION,
                        x: r,
                        y: a
                    }),
                    !e)
                ) {
                    D(!0);
                    return;
                }
                let s = f(d(n, r, a));
                null != s && (D(!0), x(s));
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
        C(!1);
        let r = f(d(n));
        null != r && x(r);
    }, [n, M, A, x, i, h]);
    let U = a.useCallback((e) => {
        T.current && null == e && k(!0);
    }, []);
    a.useEffect(() => {
        A && N && null != S && (x(S), R(!1));
    }, [N, S]),
        a.useEffect(() => {
            A && (!O && w(i, h), D(!1));
        }, [i, h]);
    let B = a.useCallback(
            (e) => {
                if (!T.current) return;
                if (!I && u.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
                    e.preventDefault(), e.stopPropagation(), P();
                    return;
                }
                let n = c(e);
                switch (n) {
                    case s.Us.NAVIGATE_UP:
                    case s.Us.NAVIGATE_DOWN:
                    case s.Us.NAVIGATE_RIGHT:
                    case s.Us.NAVIGATE_LEFT:
                    case s.Us.NAVIGATE_INLINE_START:
                    case s.Us.NAVIGATE_INLINE_END:
                    case s.Us.NAVIGATE_START:
                    case s.Us.NAVIGATE_END:
                        !(0 === r.length || (0 === i && 0 === h && n === s.Us.NAVIGATE_LEFT)) && (e.preventDefault(), e.stopPropagation()), E({ type: n });
                        return;
                    case s.Us.SELECT_FOCUSED_ITEM:
                        if ((b && !p(S)) || e.repeat) return;
                        e.preventDefault(), e.stopPropagation(), E({ type: n }), null != _ ? _(i, h, e) : null != S && S.click();
                }
            },
            [P, E, b, S, _, i, h]
        ),
        G = a.useCallback((e) => (e.currentTarget !== e.target ? (!A && (C(!0), D(!0)), !1) : A ? (P(!1), !1) : void (v && null != S ? w(i, h) : P(!0))), [A, v, S, P, w, i, h]),
        Z = a.useCallback((e) => {
            if (e.target !== e.currentTarget) {
                if (e.currentTarget.contains(e.relatedTarget)) return !1;
                C(!1);
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
function _(e) {
    let { navId: n, columnCounts: r, focusedX: i = 0, focusedY: s = 0, onSelect: u, prepareFocus: c, getNewFocusPosition: d, maintainFocusPosition: f = !0, enabled: p = !0, onDispatch: _, autoFocusElement: m = !0, useVirtualFocus: g = !1 } = e,
        E = a.useCallback(
            (e, n) => {
                let r = (0, o.Z)(e, n);
                return null != _ && _(e, r, n), r;
            },
            [_]
        ),
        [v, y] = a.useReducer(E, {
            focusedX: i,
            focusedY: s,
            columnCounts: r
        }),
        { columnCounts: b, focusedX: I, focusedY: T } = v,
        [S] = a.useState(() => (0, l.P2)(y, 16));
    return (
        a.useEffect(() => {
            y({
                type: o.s.UPDATE_COLUMN_COUNTS,
                columnCounts: r
            });
        }, [r]),
        h({
            navId: n,
            columnCounts: b,
            focusedX: I,
            focusedY: T,
            dispatch: S,
            onSelect: u,
            prepareFocus: c,
            getNewFocusPosition: d,
            maintainFocusPosition: f,
            enabled: p,
            autoFocusElement: m,
            useVirtualFocus: g
        })
    );
}

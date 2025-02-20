n.d(t, { Z: () => p }), n(47120), n(301563);
var r = n(192379),
    i = n(611144),
    o = n(536895),
    a = n(260866);
let s = [o.R8.TAB];
function l(e) {
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
function c(e, t, n) {
    return null != t && null != n ? '#'.concat((0, a.NE)(e, t, n)) : '[data-ref-id='.concat(e, ']');
}
function u(e) {
    return document.querySelector(e);
}
function d(e) {
    return (null == e ? void 0 : e.ownerDocument.activeElement) === e;
}
function f(e) {
    let { navId: t, columnCounts: n, focusedX: f, focusedY: p, onSelect: _, prepareFocus: h, getNewFocusPosition: m, dispatch: g, maintainFocusPosition: E, enabled: v, autoFocusElement: b, useVirtualFocus: y } = e,
        O = r.useRef();
    O.current = v;
    let S = u(c(t, f, p)),
        [I, T] = r.useState(!1),
        [N, A] = r.useState(!1),
        [C, R] = r.useState(!1),
        [P] = r.useState(
            () =>
                new a.$o((e) => {
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
                if (!O.current || !b) return !1;
                e.focus();
            },
            [b]
        ),
        D = r.useCallback(
            (e, n) => {
                let r = c(t, e, n);
                (null != h ? h(e, n, r) : Promise.resolve()).then(() => {
                    let e = u(r);
                    null != e ? (w(e), A(!1)) : requestAnimationFrame(() => A(!0));
                });
            },
            [t, h, w]
        ),
        x = r.useCallback(
            function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    [n, r] = null != m ? m(f, p) : [f, p];
                if (
                    (n !== f || r !== p) &&
                    (g({
                        type: i.s.SET_FOCUSED_POSITION,
                        x: n,
                        y: r
                    }),
                    !e)
                ) {
                    R(!0);
                    return;
                }
                let o = u(c(t, n, r));
                null != o && (R(!0), w(o));
            },
            [g, f, p, m, t, w]
        ),
        [L, M] = r.useState(!1);
    r.useEffect(() => {
        if (!L || !I) return;
        M(!1);
        let e = u(c(t, f, p));
        if (null != e) {
            w(e);
            return;
        }
        T(!1);
        let n = u(c(t));
        null != n && w(n);
    }, [t, L, I, w, f, p]);
    let k = r.useCallback((e) => {
        O.current && null == e && M(!0);
    }, []);
    r.useEffect(() => {
        I && N && null != S && (w(S), A(!1));
    }, [N, S]),
        r.useEffect(() => {
            I && (C || D(f, p), R(!1));
        }, [f, p]);
    let j = r.useCallback(
            (e) => {
                if (!O.current) return;
                if (!y && s.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
                    e.preventDefault(), e.stopPropagation(), x();
                    return;
                }
                let t = l(e);
                switch (t) {
                    case o.Us.NAVIGATE_UP:
                    case o.Us.NAVIGATE_DOWN:
                    case o.Us.NAVIGATE_RIGHT:
                    case o.Us.NAVIGATE_LEFT:
                    case o.Us.NAVIGATE_INLINE_START:
                    case o.Us.NAVIGATE_INLINE_END:
                    case o.Us.NAVIGATE_START:
                    case o.Us.NAVIGATE_END:
                        0 !== n.length && (0 !== f || 0 !== p || t !== o.Us.NAVIGATE_LEFT) && (e.preventDefault(), e.stopPropagation()), g({ type: t });
                        return;
                    case o.Us.SELECT_FOCUSED_ITEM:
                        if ((b && !d(S)) || e.repeat) return;
                        e.preventDefault(), e.stopPropagation(), g({ type: t }), null != _ ? _(f, p, e) : null != S && S.click();
                }
            },
            [x, g, b, S, _, f, p]
        ),
        U = r.useCallback((e) => (e.currentTarget !== e.target ? (I || (T(!0), R(!0)), !1) : I ? (x(!1), !1) : void (E && null != S ? D(f, p) : x(!0))), [I, E, S, x, D, f, p]),
        G = r.useCallback((e) => {
            if (e.target !== e.currentTarget) {
                if (e.currentTarget.contains(e.relatedTarget)) return !1;
                T(!1);
            }
        }, []),
        B = r.useMemo(() => Math.max(...n), [n]),
        Z = r.useCallback(
            () => ({
                role: 'grid',
                'aria-rowcount': n.length,
                'aria-colcount': B,
                tabIndex: I && E ? -1 : 0,
                'data-ref-id': t,
                onKeyDown: j,
                onFocus: U,
                onBlur: G
            }),
            [n.length, B, I, E, t, j, U, G]
        ),
        F = r.useCallback(
            (e, n) => {
                let r = {
                    role: 'gridcell',
                    'aria-rowindex': n + 1,
                    'aria-colindex': e + 1,
                    id: (0, a.NE)(t, e, n),
                    tabIndex: E && e === f && n === p ? 0 : -1,
                    onFocus: P.get(''.concat(e, ',').concat(n))
                };
                return e === f && n === p && (r.ref = k), r;
            },
            [t, E, f, p, P, k]
        ),
        V = r.useCallback(
            (e) => ({
                role: 'row',
                'aria-rowindex': e + 1
            }),
            []
        );
    return r.useMemo(
        () => ({
            dispatch: g,
            getContainerProps: Z,
            getItemProps: F,
            getRowProps: V
        }),
        [g, Z, F, V]
    );
}
function p(e) {
    let { navId: t, columnCounts: n, focusedX: o = 0, focusedY: s = 0, onSelect: l, prepareFocus: c, getNewFocusPosition: u, maintainFocusPosition: d = !0, enabled: p = !0, onDispatch: _, autoFocusElement: h = !0, useVirtualFocus: m = !1 } = e,
        g = r.useCallback(
            (e, t) => {
                let n = (0, i.Z)(e, t);
                return null != _ && _(e, n, t), n;
            },
            [_]
        ),
        [E, v] = r.useReducer(g, {
            focusedX: o,
            focusedY: s,
            columnCounts: n
        }),
        { columnCounts: b, focusedX: y, focusedY: O } = E,
        [S] = r.useState(() => (0, a.P2)(v, 16));
    return (
        r.useEffect(() => {
            v({
                type: i.s.UPDATE_COLUMN_COUNTS,
                columnCounts: n
            });
        }, [n]),
        f({
            navId: t,
            columnCounts: b,
            focusedX: y,
            focusedY: O,
            dispatch: S,
            onSelect: l,
            prepareFocus: c,
            getNewFocusPosition: u,
            maintainFocusPosition: d,
            enabled: p,
            autoFocusElement: h,
            useVirtualFocus: m
        })
    );
}

"use strict";
n.d(t, { A: () => f });
var r = n(64700),
    i = n(788413),
    a = n(741918),
    s = n(602034);
let o = [a.D$.TAB];
function l(e) {
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
}
function u(e, t, n) {
    return null != t && null != n ? `#${(0, s.Aq)(e, t, n)}` : `[data-ref-id=${e}]`;
}
function c(e) {
    return document.querySelector(e);
}
function d(e) {
    return e?.ownerDocument.activeElement === e;
}
function _(e) {
    let {
            navId: t,
            columnCounts: n,
            focusedX: _,
            focusedY: f,
            onSelect: p,
            prepareFocus: h,
            getNewFocusPosition: m,
            dispatch: g,
            maintainFocusPosition: E,
            enabled: A,
            autoFocusElement: I,
            useVirtualFocus: T,
        } = e,
        y = r.useRef(A),
        S = c(u(t, _, f)),
        [v, C] = r.useState(!1),
        [b, N] = r.useState(!1),
        [R, O] = r.useState(!1),
        [D] = r.useState(
            () =>
                new s.Lp((e) => {
                    let [t, n] = e.split(",").map(Number);
                    return () => {
                        C(!0), g({ type: i.n.SET_FOCUSED_POSITION, x: t, y: n });
                    };
                }),
        );
    r.useEffect(() => () => D.clean(), [D]);
    let L = r.useCallback(
            (e) => {
                if (!y.current || !I) return !1;
                e.focus();
            },
            [I],
        ),
        w = r.useCallback(
            (e, n) => {
                let r = u(t, e, n);
                (null != h ? h(e, n, r) : Promise.resolve()).then(() => {
                    let e = c(r);
                    null != e ? (L(e), N(!1)) : requestAnimationFrame(() => N(!0));
                });
            },
            [t, h, L],
        ),
        x = r.useCallback(
            function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    [n, r] = null != m ? m(_, f) : [_, f];
                if ((n !== _ || r !== f) && (g({ type: i.n.SET_FOCUSED_POSITION, x: n, y: r }), !e)) return void O(!0);
                let a = c(u(t, n, r));
                null != a && (O(!0), L(a));
            },
            [g, _, f, m, t, L],
        ),
        [P, M] = r.useState(!1);
    r.useEffect(() => {
        if (!P || !v) return;
        M(!1);
        let e = c(u(t, _, f));
        if (null != e) return void L(e);
        C(!1);
        let n = c(u(t));
        null != n && L(n);
    }, [t, P, v, L, _, f]);
    let k = r.useCallback((e) => {
        y.current && null == e && M(!0);
    }, []);
    r.useEffect(() => {
        v && b && null != S && (L(S), N(!1));
    }, [b, S]),
        r.useEffect(() => {
            v && (R || w(_, f), O(!1));
        }, [_, f]);
    let U = r.useCallback(
            (e) => {
                if (!y.current) return;
                if (
                    !T &&
                    o.includes(e.key) &&
                    !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) &&
                    e.currentTarget === e.target
                ) {
                    e.preventDefault(), e.stopPropagation(), x();
                    return;
                }
                let t = l(e);
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
                            (0 !== _ || 0 !== f || t !== a.X2.NAVIGATE_LEFT) &&
                            (e.preventDefault(), e.stopPropagation()),
                            g({ type: t });
                        return;
                    case a.X2.SELECT_FOCUSED_ITEM:
                        if ((I && !d(S)) || e.repeat) return;
                        e.preventDefault(),
                            e.stopPropagation(),
                            g({ type: t }),
                            null != p ? p(_, f, e) : null != S && S.click();
                }
            },
            [x, g, I, S, p, _, f],
        ),
        G = r.useCallback(
            (e) =>
                e.currentTarget !== e.target
                    ? (v || (C(!0), O(!0)), !1)
                    : v
                      ? (x(!1), !1)
                      : void (E && null != S ? w(_, f) : x(!0)),
            [v, E, S, x, w, _, f],
        ),
        V = r.useCallback((e) => {
            if (e.target !== e.currentTarget) {
                if (e.currentTarget.contains(e.relatedTarget)) return !1;
                C(!1);
            }
        }, []),
        F = r.useMemo(() => Math.max(...n), [n]),
        B = r.useCallback(
            () => ({
                role: "grid",
                "aria-rowcount": n.length,
                "aria-colcount": F,
                tabIndex: v && E ? -1 : 0,
                "data-ref-id": t,
                onKeyDown: U,
                onFocus: G,
                onBlur: V,
            }),
            [n.length, F, v, E, t, U, G, V],
        ),
        j = r.useCallback(
            (e, n) => {
                let r = {
                    role: "gridcell",
                    "aria-rowindex": n + 1,
                    "aria-colindex": e + 1,
                    id: (0, s.Aq)(t, e, n),
                    tabIndex: E && e === _ && n === f ? 0 : -1,
                    onFocus: D.get(`${e},${n}`),
                };
                return e === _ && n === f && (r.ref = k), r;
            },
            [t, E, _, f, D, k],
        ),
        H = r.useCallback((e) => ({ role: "row", "aria-rowindex": e + 1 }), []);
    return r.useMemo(() => ({ dispatch: g, getContainerProps: B, getItemProps: j, getRowProps: H }), [g, B, j, H]);
}
function f(e) {
    let {
            navId: t,
            columnCounts: n,
            focusedX: a = 0,
            focusedY: o = 0,
            onSelect: l,
            prepareFocus: u,
            getNewFocusPosition: c,
            maintainFocusPosition: d = !0,
            enabled: f = !0,
            onDispatch: p,
            autoFocusElement: h = !0,
            useVirtualFocus: m = !1,
        } = e,
        g = r.useCallback(
            (e, t) => {
                let n = (0, i.A)(e, t);
                return null != p && p(e, n, t), n;
            },
            [p],
        ),
        [E, A] = r.useReducer(g, { focusedX: a, focusedY: o, columnCounts: n }),
        { columnCounts: I, focusedX: T, focusedY: y } = E,
        [S] = r.useState(() => (0, s.nF)(A, 16));
    return (
        r.useEffect(() => {
            A({ type: i.n.UPDATE_COLUMN_COUNTS, columnCounts: n });
        }, [n]),
        _({
            navId: t,
            columnCounts: I,
            focusedX: T,
            focusedY: y,
            dispatch: S,
            onSelect: l,
            prepareFocus: u,
            getNewFocusPosition: c,
            maintainFocusPosition: d,
            enabled: f,
            autoFocusElement: h,
            useVirtualFocus: m,
        })
    );
}

n.d(t, {
    A: () => p,
}),
    n(896048),
    n(747238);
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

function c(e, t, n) {
    return null != t && null != n ? "#".concat((0, s.Aq)(e, t, n)) : "[data-ref-id=".concat(e, "]");
}

function u(e) {
    return document.querySelector(e);
}

function d(e) {
    return (null == e ? void 0 : e.ownerDocument.activeElement) === e;
}

function f(e) {
    let {
            navId: t,
            columnCounts: n,
            focusedX: f,
            focusedY: p,
            onSelect: _,
            prepareFocus: h,
            getNewFocusPosition: m,
            dispatch: g,
            maintainFocusPosition: E,
            enabled: b,
            autoFocusElement: y,
            useVirtualFocus: O,
        } = e,
        A = r.useRef(b),
        v = u(c(t, f, p)),
        [S, I] = r.useState(!1),
        [T, C] = r.useState(!1),
        [N, R] = r.useState(!1),
        [w] = r.useState(
            () =>
                new s.Lp((e) => {
                    let [t, n] = e.split(",").map(Number);
                    return () => {
                        I(!0),
                            g({
                                type: i.n.SET_FOCUSED_POSITION,
                                x: t,
                                y: n,
                            });
                    };
                }),
        );
    r.useEffect(() => () => w.clean(), [w]);
    let P = r.useCallback(
            (e) => {
                if (!A.current || !y) return !1;
                e.focus();
            },
            [y],
        ),
        D = r.useCallback(
            (e, n) => {
                let r = c(t, e, n);
                (null != h ? h(e, n, r) : Promise.resolve()).then(() => {
                    let e = u(r);
                    null != e ? (P(e), C(!1)) : requestAnimationFrame(() => C(!0));
                });
            },
            [t, h, P],
        ),
        x = r.useCallback(
            function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    [n, r] = null != m ? m(f, p) : [f, p];
                if (
                    (n !== f || r !== p) &&
                    (g({
                        type: i.n.SET_FOCUSED_POSITION,
                        x: n,
                        y: r,
                    }),
                    !e)
                )
                    return void R(!0);
                let a = u(c(t, n, r));
                null != a && (R(!0), P(a));
            },
            [g, f, p, m, t, P],
        ),
        [L, j] = r.useState(!1);
    r.useEffect(() => {
        if (!L || !S) return;
        j(!1);
        let e = u(c(t, f, p));
        if (null != e) return void P(e);
        I(!1);
        let n = u(c(t));
        null != n && P(n);
    }, [t, L, S, P, f, p]);
    let M = r.useCallback((e) => {
        A.current && null == e && j(!0);
    }, []);
    r.useEffect(() => {
        S && T && null != v && (P(v), C(!1));
    }, [T, v]),
        r.useEffect(() => {
            S && (N || D(f, p), R(!1));
        }, [f, p]);
    let k = r.useCallback(
            (e) => {
                if (!A.current) return;
                if (
                    !O &&
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
                            (0 !== f || 0 !== p || t !== a.X2.NAVIGATE_LEFT) &&
                            (e.preventDefault(), e.stopPropagation()),
                            g({
                                type: t,
                            });
                        return;
                    case a.X2.SELECT_FOCUSED_ITEM:
                        if ((y && !d(v)) || e.repeat) return;
                        e.preventDefault(),
                            e.stopPropagation(),
                            g({
                                type: t,
                            }),
                            null != _ ? _(f, p, e) : null != v && v.click();
                }
            },
            [x, g, y, v, _, f, p],
        ),
        U = r.useCallback(
            (e) =>
                e.currentTarget !== e.target
                    ? (S || (I(!0), R(!0)), !1)
                    : S
                      ? (x(!1), !1)
                      : void (E && null != v ? D(f, p) : x(!0)),
            [S, E, v, x, D, f, p],
        ),
        G = r.useCallback((e) => {
            if (e.target !== e.currentTarget) {
                if (e.currentTarget.contains(e.relatedTarget)) return !1;
                I(!1);
            }
        }, []),
        V = r.useMemo(() => Math.max(...n), [n]),
        F = r.useCallback(
            () => ({
                role: "grid",
                "aria-rowcount": n.length,
                "aria-colcount": V,
                tabIndex: S && E ? -1 : 0,
                "data-ref-id": t,
                onKeyDown: k,
                onFocus: U,
                onBlur: G,
            }),
            [n.length, V, S, E, t, k, U, G],
        ),
        B = r.useCallback(
            (e, n) => {
                let r = {
                    role: "gridcell",
                    "aria-rowindex": n + 1,
                    "aria-colindex": e + 1,
                    id: (0, s.Aq)(t, e, n),
                    tabIndex: E && e === f && n === p ? 0 : -1,
                    onFocus: w.get("".concat(e, ",").concat(n)),
                };
                return e === f && n === p && (r.ref = M), r;
            },
            [t, E, f, p, w, M],
        ),
        H = r.useCallback(
            (e) => ({
                role: "row",
                "aria-rowindex": e + 1,
            }),
            [],
        );
    return r.useMemo(
        () => ({
            dispatch: g,
            getContainerProps: F,
            getItemProps: B,
            getRowProps: H,
        }),
        [g, F, B, H],
    );
}

function p(e) {
    let {
            navId: t,
            columnCounts: n,
            focusedX: a = 0,
            focusedY: o = 0,
            onSelect: l,
            prepareFocus: c,
            getNewFocusPosition: u,
            maintainFocusPosition: d = !0,
            enabled: p = !0,
            onDispatch: _,
            autoFocusElement: h = !0,
            useVirtualFocus: m = !1,
        } = e,
        g = r.useCallback(
            (e, t) => {
                let n = (0, i.A)(e, t);
                return null != _ && _(e, n, t), n;
            },
            [_],
        ),
        [E, b] = r.useReducer(g, {
            focusedX: a,
            focusedY: o,
            columnCounts: n,
        }),
        { columnCounts: y, focusedX: O, focusedY: A } = E,
        [v] = r.useState(() => (0, s.nF)(b, 16));
    return (
        r.useEffect(() => {
            b({
                type: i.n.UPDATE_COLUMN_COUNTS,
                columnCounts: n,
            });
        }, [n]),
        f({
            navId: t,
            columnCounts: y,
            focusedX: O,
            focusedY: A,
            dispatch: v,
            onSelect: l,
            prepareFocus: c,
            getNewFocusPosition: u,
            maintainFocusPosition: d,
            enabled: p,
            autoFocusElement: h,
            useVirtualFocus: m,
        })
    );
}

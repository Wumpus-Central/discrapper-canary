n.d(t, { Ay: () => d });
var a = n(64700),
    r = n(785825),
    l = n(741918),
    s = n(602034);
let i = [l.D$.TAB, l.D$.UP, l.D$.DOWN];
function u(e, t, n) {
    return null != n ? `#${e(t, n)}` : `#${t}`;
}
function o(e) {
    return document.querySelector(e);
}
function c(e) {
    document.getElementById(e)?.focus();
}
function d(e) {
    let {
            navId: t,
            itemCount: n,
            focusedIndex: d = 0,
            onSelect: h,
            setFocus: g,
            getNewFocusIndex: f,
            maintainFocusPosition: p = !0,
            includeSetSizes: m = !0,
            focusOnMount: x = !0,
            enabled: E = !0,
            onDispatch: A,
        } = e,
        C = a.useCallback(
            (e, t) => {
                let n = (0, r.A)(e, t);
                return null != A && A(e, n, t), n;
            },
            [A],
        ),
        [N, P] = a.useReducer(C, { focusedIndex: d, itemCount: n }),
        { itemCount: T, focusedIndex: v } = N,
        [y] = a.useState(() => (0, s.nF)(P, 16));
    return (
        a.useEffect(() => {
            P({ type: r.D.UPDATE_ITEM_COUNT, itemCount: n });
        }, [n]),
        (function (e) {
            let {
                    navId: t,
                    itemCount: n,
                    focusedIndex: d,
                    onSelect: h,
                    setFocus: g = c,
                    getNewFocusIndex: f,
                    dispatch: p,
                    maintainFocusPosition: m,
                    includeSetSizes: x,
                    focusOnMount: E,
                    enabled: A,
                    makeId: C = s.M4,
                    getIndexFromId: N,
                } = e,
                P = a.useRef(n),
                T = a.useRef(N);
            (T.current = N), (P.current = n);
            let v = a.useRef(A);
            a.useEffect(() => {
                v.current = A;
            }, [A]);
            let [y, k] = a.useState(!1),
                [j] = a.useState(
                    () =>
                        new s.Lp((e) => () => {
                            let t = null != T.current && "string" == typeof e ? T.current(e) : e;
                            "number" != typeof t || t < 0 || p({ type: r.D.SET_FOCUSED_INDEX, index: t });
                        }),
                );
            a.useEffect(() => () => j.clean(), [j]);
            let _ = a.useCallback(
                    (e, t) => {
                        v.current && g(e, t);
                    },
                    [g],
                ),
                [b, D] = a.useState(!0);
            a.useEffect(() => {
                b && !E ? D(!1) : _(C(t, d), d);
            }, [d]);
            let I = a.useCallback(
                    function () {
                        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                            n = null != f ? f(d) : d;
                        n !== d && p({ type: r.D.SET_FOCUSED_INDEX, index: n }), e && _(C(t, n), n);
                    },
                    [C, d, f, p, t, _],
                ),
                S = a.useCallback(
                    (e) => {
                        if (!v.current) return;
                        if (
                            i.includes(e.key) &&
                            !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) &&
                            e.currentTarget === e.target
                        ) {
                            e.preventDefault(), e.stopPropagation(), I();
                            return;
                        }
                        let n = (function (e) {
                            switch (e.key) {
                                case l.D$.ENTER:
                                case l.D$.SPACE:
                                    return l.X2.SELECT_FOCUSED_ITEM;
                                case l.D$.UP:
                                    return l.X2.NAVIGATE_UP;
                                case l.D$.DOWN:
                                    return l.X2.NAVIGATE_DOWN;
                                case l.D$.HOME:
                                    return l.X2.NAVIGATE_START;
                                case l.D$.END:
                                    return l.X2.NAVIGATE_END;
                            }
                        })(e);
                        switch (n) {
                            case l.X2.NAVIGATE_UP:
                            case l.X2.NAVIGATE_DOWN:
                            case l.X2.NAVIGATE_START:
                            case l.X2.NAVIGATE_END:
                                e.preventDefault(), e.stopPropagation(), p({ type: n });
                                return;
                            case l.X2.SELECT_FOCUSED_ITEM:
                                let a = o(u(C, t, d));
                                if (a?.ownerDocument.activeElement !== a || e.repeat) return;
                                if ((e.preventDefault(), e.stopPropagation(), p({ type: n }), null != h))
                                    return void h(d);
                                a?.click();
                        }
                    },
                    [C, t, p, d, I, h],
                ),
                M = a.useCallback(() => {
                    y || k(!0);
                }, [y]),
                R = a.useCallback(() => {
                    y || (m ? _(C(t, d), d) : I(!0));
                }, [C, t, _, m, y, d, I]),
                U = a.useCallback(
                    (e) => {
                        e.currentTarget.contains(e.relatedTarget) ||
                            requestAnimationFrame(() => {
                                null == o(u(C, t, d)) ? _(t) : k(!1);
                            });
                    },
                    [C, t, d, _],
                ),
                w = a.useRef(null);
            a.useLayoutEffect(() => {
                let e = w.current;
                if (null != e)
                    return (
                        e.addEventListener("focusin", M),
                        e.addEventListener("focus", R),
                        e.addEventListener("focusout", U),
                        () => {
                            e.removeEventListener("focusin", M),
                                e.removeEventListener("focus", R),
                                e.removeEventListener("focusout", U);
                        }
                    );
            }, [R, M, U]);
            let G = a.useCallback(
                    () => ({ role: "list", tabIndex: y && m ? -1 : 0, id: t, onKeyDown: S, ref: w }),
                    [t, y, S, m],
                ),
                L = a.useCallback(
                    (e) => {
                        let { index: n } = e;
                        return {
                            role: "listitem",
                            "aria-setsize": x ? P.current : void 0,
                            "aria-posinset": x ? n + 1 : void 0,
                            id: C(t, n),
                            tabIndex: m && n === d ? 0 : -1,
                            onFocus: j.get(null != T.current ? C(t, n) : n),
                        };
                    },
                    [C, t, d, m, j, x],
                );
            return a.useMemo(() => ({ dispatch: p, getContainerProps: G, getItemProps: L }), [p, G, L]);
        })({
            navId: t,
            itemCount: T,
            focusedIndex: v,
            dispatch: y,
            onSelect: h,
            setFocus: g,
            getNewFocusIndex: f,
            maintainFocusPosition: p,
            includeSetSizes: m,
            focusOnMount: x,
            enabled: E,
        })
    );
}

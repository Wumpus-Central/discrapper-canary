n.d(t, { Ay: () => c });
var l = n(64700),
    r = n(785825),
    a = n(741918),
    i = n(602034);
let s = [a.D$.TAB, a.D$.UP, a.D$.DOWN];
function o(e, t, n) {
    return null != n ? `#${e(t, n)}` : `#${t}`;
}
function E(e) {
    return document.querySelector(e);
}
function u(e) {
    document.getElementById(e)?.focus();
}
function c(e) {
    let {
            navId: t,
            itemCount: n,
            focusedIndex: c = 0,
            onSelect: _,
            setFocus: d,
            getNewFocusIndex: g,
            maintainFocusPosition: A = !0,
            includeSetSizes: T = !0,
            focusOnMount: I = !0,
            enabled: N = !0,
            onDispatch: h,
        } = e,
        m = l.useCallback(
            (e, t) => {
                let n = (0, r.A)(e, t);
                return null != h && h(e, n, t), n;
            },
            [h],
        ),
        [S, G] = l.useReducer(m, { focusedIndex: c, itemCount: n }),
        { itemCount: O, focusedIndex: C } = S,
        [R] = l.useState(() => (0, i.nF)(G, 16));
    return (
        l.useEffect(() => {
            G({ type: r.D.UPDATE_ITEM_COUNT, itemCount: n });
        }, [n]),
        (function (e) {
            let {
                    navId: t,
                    itemCount: n,
                    focusedIndex: c,
                    onSelect: _,
                    setFocus: d = u,
                    getNewFocusIndex: g,
                    dispatch: A,
                    maintainFocusPosition: T,
                    includeSetSizes: I,
                    focusOnMount: N,
                    enabled: h,
                    makeId: m = i.M4,
                    getIndexFromId: S,
                } = e,
                G = l.useRef(n),
                O = l.useRef(S);
            (O.current = S), (G.current = n);
            let C = l.useRef(h);
            l.useEffect(() => {
                C.current = h;
            }, [h]);
            let [R, L] = l.useState(!1),
                [D] = l.useState(
                    () =>
                        new i.Lp((e) => () => {
                            let t = null != O.current && "string" == typeof e ? O.current(e) : e;
                            "number" != typeof t || t < 0 || A({ type: r.D.SET_FOCUSED_INDEX, index: t });
                        }),
                );
            l.useEffect(() => () => D.clean(), [D]);
            let f = l.useCallback(
                    (e, t) => {
                        C.current && d(e, t);
                    },
                    [d],
                ),
                [x, M] = l.useState(!0);
            l.useEffect(() => {
                x && !N ? M(!1) : f(m(t, c), c);
            }, [c]);
            let p = l.useCallback(
                    function () {
                        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                            n = null != g ? g(c) : c;
                        n !== c && A({ type: r.D.SET_FOCUSED_INDEX, index: n }), e && f(m(t, n), n);
                    },
                    [m, c, g, A, t, f],
                ),
                U = l.useCallback(
                    (e) => {
                        if (!C.current) return;
                        if (
                            s.includes(e.key) &&
                            !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) &&
                            e.currentTarget === e.target
                        ) {
                            e.preventDefault(), e.stopPropagation(), p();
                            return;
                        }
                        let n = (function (e) {
                            switch (e.key) {
                                case a.D$.ENTER:
                                case a.D$.SPACE:
                                    return a.X2.SELECT_FOCUSED_ITEM;
                                case a.D$.UP:
                                    return a.X2.NAVIGATE_UP;
                                case a.D$.DOWN:
                                    return a.X2.NAVIGATE_DOWN;
                                case a.D$.HOME:
                                    return a.X2.NAVIGATE_START;
                                case a.D$.END:
                                    return a.X2.NAVIGATE_END;
                            }
                        })(e);
                        switch (n) {
                            case a.X2.NAVIGATE_UP:
                            case a.X2.NAVIGATE_DOWN:
                            case a.X2.NAVIGATE_START:
                            case a.X2.NAVIGATE_END:
                                e.preventDefault(), e.stopPropagation(), A({ type: n });
                                return;
                            case a.X2.SELECT_FOCUSED_ITEM:
                                let l = E(o(m, t, c));
                                if (l?.ownerDocument.activeElement !== l || e.repeat) return;
                                if ((e.preventDefault(), e.stopPropagation(), A({ type: n }), null != _))
                                    return void _(c);
                                l?.click();
                        }
                    },
                    [m, t, A, c, p, _],
                ),
                k = l.useCallback(() => {
                    R || L(!0);
                }, [R]),
                b = l.useCallback(() => {
                    R || (T ? f(m(t, c), c) : p(!0));
                }, [m, t, f, T, R, c, p]),
                F = l.useCallback(
                    (e) => {
                        e.currentTarget.contains(e.relatedTarget) ||
                            requestAnimationFrame(() => {
                                null == E(o(m, t, c)) ? f(t) : L(!1);
                            });
                    },
                    [m, t, c, f],
                ),
                j = l.useRef(null);
            l.useLayoutEffect(() => {
                let e = j.current;
                if (null != e)
                    return (
                        e.addEventListener("focusin", k),
                        e.addEventListener("focus", b),
                        e.addEventListener("focusout", F),
                        () => {
                            e.removeEventListener("focusin", k),
                                e.removeEventListener("focus", b),
                                e.removeEventListener("focusout", F);
                        }
                    );
            }, [b, k, F]);
            let v = l.useCallback(
                    () => ({ role: "list", tabIndex: R && T ? -1 : 0, id: t, onKeyDown: U, ref: j }),
                    [t, R, U, T],
                ),
                P = l.useCallback(
                    (e) => {
                        let { index: n } = e;
                        return {
                            role: "listitem",
                            "aria-setsize": I ? G.current : void 0,
                            "aria-posinset": I ? n + 1 : void 0,
                            id: m(t, n),
                            tabIndex: T && n === c ? 0 : -1,
                            onFocus: D.get(null != O.current ? m(t, n) : n),
                        };
                    },
                    [m, t, c, T, D, I],
                );
            return l.useMemo(() => ({ dispatch: A, getContainerProps: v, getItemProps: P }), [A, v, P]);
        })({
            navId: t,
            itemCount: O,
            focusedIndex: C,
            dispatch: R,
            onSelect: _,
            setFocus: d,
            getNewFocusIndex: g,
            maintainFocusPosition: A,
            includeSetSizes: T,
            focusOnMount: I,
            enabled: N,
        })
    );
}

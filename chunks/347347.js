n.d(t, { Ay: () => f });
var r,
    l = n(582128),
    a = n(741918),
    s = (((r = {}).UPDATE_ITEM_COUNT = "UPDATE_ITEM_COUNT"), (r.SET_FOCUSED_INDEX = "SET_FOCUSED_INDEX"), r),
    i = n(602034);
let u = [a.D$.TAB, a.D$.UP, a.D$.DOWN];
function o(e, t, n) {
    return null != n ? `#${e(t, n)}` : `#${t}`;
}
function c(e) {
    return document.querySelector(e);
}
function d(e) {
    document.getElementById(e)?.focus();
}
function f(e) {
    let {
            navId: t,
            itemCount: n,
            focusedIndex: r = 0,
            onSelect: f,
            setFocus: h,
            getNewFocusIndex: m,
            maintainFocusPosition: g = !0,
            includeSetSizes: x = !0,
            focusOnMount: p = !0,
            enabled: E = !0,
            onDispatch: C,
        } = e,
        A = l.useCallback(
            (e, t) => {
                let n = (function (e, t) {
                    switch (t.type) {
                        case a.X2.NAVIGATE_UP:
                            return { ...e, focusedIndex: Math.max(0, e.focusedIndex - 1) };
                        case a.X2.NAVIGATE_DOWN:
                            return { ...e, focusedIndex: Math.min(e.focusedIndex + 1, e.itemCount - 1) };
                        case a.X2.NAVIGATE_START:
                            return { ...e, focusedIndex: 0 };
                        case a.X2.NAVIGATE_END:
                            return { ...e, focusedIndex: e.itemCount - 1 };
                        case "UPDATE_ITEM_COUNT":
                            return (function (e, t) {
                                let { itemCount: n } = t;
                                return { ...e, itemCount: n, focusedIndex: Math.min(n - 1, e.focusedIndex) };
                            })(e, t);
                        case "SET_FOCUSED_INDEX":
                            return (function (e, t) {
                                let { index: n } = t;
                                return { ...e, focusedIndex: Math.max(0, Math.min(n, e.itemCount - 1)) };
                            })(e, t);
                        case a.X2.SELECT_FOCUSED_ITEM:
                            break;
                        default:
                            console.warn(`Listbox navigator was given an unhandled action ${t.type}`);
                    }
                    return e;
                })(e, t);
                return (null != C && C(e, n, t), n);
            },
            [C],
        ),
        [T, N] = l.useReducer(A, { focusedIndex: r, itemCount: n }),
        { itemCount: v, focusedIndex: I } = T,
        [_] = l.useState(() => (0, i.nF)(N, 16));
    return (
        l.useEffect(() => {
            N({ type: s.UPDATE_ITEM_COUNT, itemCount: n });
        }, [n]),
        (function (e) {
            let {
                    navId: t,
                    itemCount: n,
                    focusedIndex: r,
                    onSelect: f,
                    setFocus: h = d,
                    getNewFocusIndex: m,
                    dispatch: g,
                    maintainFocusPosition: x,
                    includeSetSizes: p,
                    focusOnMount: E,
                    enabled: C,
                    makeId: A = i.M4,
                    getIndexFromId: T,
                } = e,
                N = l.useRef(n),
                v = l.useRef(T);
            ((v.current = T), (N.current = n));
            let I = l.useRef(C);
            l.useEffect(() => {
                I.current = C;
            }, [C]);
            let [_, P] = l.useState(!1),
                [j] = l.useState(
                    () =>
                        new i.Lp((e) => () => {
                            let t = null != v.current && "string" == typeof e ? v.current(e) : e;
                            "number" != typeof t || t < 0 || g({ type: s.SET_FOCUSED_INDEX, index: t });
                        }),
                );
            l.useEffect(() => () => j.clean(), [j]);
            let S = l.useCallback(
                    (e, t) => {
                        I.current && h(e, t);
                    },
                    [h],
                ),
                [b, D] = l.useState(!0);
            l.useEffect(() => {
                b && !E ? D(!1) : S(A(t, r), r);
            }, [r]);
            let y = l.useCallback(
                    function () {
                        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                            n = null != m ? m(r) : r;
                        (n !== r && g({ type: s.SET_FOCUSED_INDEX, index: n }), e && S(A(t, n), n));
                    },
                    [A, r, m, g, t, S],
                ),
                k = l.useCallback(
                    (e) => {
                        if (!I.current) return;
                        if (
                            u.includes(e.key) &&
                            !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) &&
                            e.currentTarget === e.target
                        ) {
                            (e.preventDefault(), e.stopPropagation(), y());
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
                                (e.preventDefault(), e.stopPropagation(), g({ type: n }));
                                return;
                            case a.X2.SELECT_FOCUSED_ITEM:
                                let l = c(o(A, t, r));
                                if (l?.ownerDocument.activeElement !== l || e.repeat) return;
                                if ((e.preventDefault(), e.stopPropagation(), g({ type: n }), null != f))
                                    return void f(r);
                                l?.click();
                        }
                    },
                    [A, t, g, r, y, f],
                ),
                R = l.useCallback(() => {
                    _ || P(!0);
                }, [_]),
                M = l.useCallback(() => {
                    _ || (x ? S(A(t, r), r) : y(!0));
                }, [A, t, S, x, _, r, y]),
                U = l.useCallback(
                    (e) => {
                        e.currentTarget.contains(e.relatedTarget) ||
                            requestAnimationFrame(() => {
                                null == c(o(A, t, r)) ? S(t) : P(!1);
                            });
                    },
                    [A, t, r, S],
                ),
                L = l.useRef(null);
            l.useLayoutEffect(() => {
                let e = L.current;
                if (null != e)
                    return (
                        e.addEventListener("focusin", R),
                        e.addEventListener("focus", M),
                        e.addEventListener("focusout", U),
                        () => {
                            (e.removeEventListener("focusin", R),
                                e.removeEventListener("focus", M),
                                e.removeEventListener("focusout", U));
                        }
                    );
            }, [M, R, U]);
            let O = l.useCallback(
                    () => ({ role: "list", tabIndex: _ && x ? -1 : 0, id: t, onKeyDown: k, ref: L }),
                    [t, _, k, x],
                ),
                X = l.useCallback(
                    (e) => {
                        let { index: n } = e;
                        return {
                            role: "listitem",
                            "aria-setsize": p ? N.current : void 0,
                            "aria-posinset": p ? n + 1 : void 0,
                            id: A(t, n),
                            tabIndex: x && n === r ? 0 : -1,
                            onFocus: j.get(null != v.current ? A(t, n) : n),
                        };
                    },
                    [A, t, r, x, j, p],
                );
            return l.useMemo(() => ({ dispatch: g, getContainerProps: O, getItemProps: X }), [g, O, X]);
        })({
            navId: t,
            itemCount: v,
            focusedIndex: I,
            dispatch: _,
            onSelect: f,
            setFocus: h,
            getNewFocusIndex: m,
            maintainFocusPosition: g,
            includeSetSizes: x,
            focusOnMount: p,
            enabled: E,
        })
    );
}

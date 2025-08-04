(n.d(t, { ZP: () => m }), n(388685), n(35282));
var r = n(73800),
    i = n(808629),
    a = n(536895),
    o = n(260866);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            }));
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = '--';
function _(e) {
    switch (e.key) {
        case a.R8.ENTER:
        case a.R8.SPACE:
            return a.Us.SELECT_FOCUSED_ITEM;
        case a.R8.UP:
            return a.Us.NAVIGATE_UP;
        case a.R8.DOWN:
            return a.Us.NAVIGATE_DOWN;
        case a.R8.RIGHT:
            return a.Us.NAVIGATE_IN;
        case a.R8.LEFT:
            return a.Us.NAVIGATE_OUT;
    }
}
function f(e, t) {
    return null != t ? ''.concat((0, o.qR)(e, t.join(d))) : e;
}
function p(e, t) {
    return e.getElementById(t);
}
function h(e) {
    return e.tabIndex >= 0;
}
function m(e) {
    let { navId: t, items: n, initialFocusPath: s, onSelect: c, enabled: m = !0, closeMenu: g, defaultIsUsingKeyboardNavigation: E = !1 } = e,
        b = r.useRef(m);
    r.useLayoutEffect(() => {
        b.current = m;
    }, [m]);
    let [y, O] = r.useReducer(i.Z, {
            items: n,
            focusPath: s,
            focusIndex: -1
        }),
        v = r.useMemo(() => (0, o.P2)(O, 30), [O]);
    r.useEffect(() => {
        O({
            type: i.B.UPDATE_ITEMS,
            items: n
        });
    }, [n]);
    let { focusPath: I } = y,
        [T, S] = r.useState(!1),
        [A, N] = r.useState(E),
        [{ onItemFocusMemoizer: C, onItemMouseEnterMemoizer: R }] = r.useState(() => ({
            onItemFocusMemoizer: new o.$o((e) => () => {
                (S(!0),
                    O({
                        type: i.B.SET_FOCUS_PATH,
                        path: e.split(d)
                    }));
            }),
            onItemMouseEnterMemoizer: new o.$o((e) => () => {
                (N(!1),
                    O({
                        type: i.B.SET_FOCUS_PATH,
                        path: e.split(d)
                    }));
            })
        })),
        P = r.useCallback(
            (e) => {
                if (!b.current) return;
                e.key === a.R8.ESCAPE && null != g && (e.stopPropagation(), e.preventDefault(), g());
                let n = _(e);
                switch (n) {
                    case a.Us.NAVIGATE_UP:
                    case a.Us.NAVIGATE_DOWN:
                    case a.Us.NAVIGATE_IN:
                    case a.Us.NAVIGATE_OUT:
                        (e.preventDefault(), e.stopPropagation(), N(!0), v({ type: n }));
                        return;
                    case a.Us.SELECT_FOCUSED_ITEM:
                        var r;
                        if (e.repeat || h(e.target)) return;
                        if ((e.preventDefault(), e.stopPropagation(), N(!1), v({ type: n }), null != c)) return void c(I);
                        let i = p(null != (r = e.target.ownerDocument) ? r : document, f(t, I));
                        null == i || i.click();
                }
            },
            [v, t, I, c, g]
        ),
        w = r.useCallback(() => {
            T || S(!0);
        }, [T]),
        D = r.useCallback(
            (e) => {
                e.target !== e.currentTarget && !e.currentTarget.contains(e.relatedTarget) && T && S(!1);
            },
            [T]
        ),
        L = r.useCallback(() => {
            (O({
                type: i.B.SET_FOCUS_PATH,
                path: []
            }),
                S(!1));
        }, []),
        x = r.useCallback((e) => e.every((e, t) => I[t] === e), [I]),
        M = r.useCallback(
            () => ({
                role: 'menu',
                id: t,
                tabIndex: -1,
                onKeyDown: P,
                onFocus: w,
                onBlur: D,
                onMouseLeave: L,
                'aria-activedescendant': I.length > 0 ? (0, o.qR)(t, I.join(d)) : void 0
            }),
            [t, P, w, D, L, I]
        ),
        k = r.useCallback(
            (e) => {
                let { path: n } = e;
                return {
                    role: 'menu',
                    tabIndex: -1,
                    'aria-activedescendant': x(n) ? (0, o.qR)(t, I.join(d)) : void 0,
                    focusIndex: y.focusIndex,
                    isUsingKeyboardNavigation: A
                };
            },
            [t, I, x, y.focusIndex, A]
        ),
        j = r.useCallback(
            (e) => {
                let { path: n, hasSubmenu: r = !1, navigable: i = !0, role: a = 'menuitem' } = e,
                    s = n.join(d);
                return u(
                    l(
                        {},
                        r
                            ? {
                                  'aria-expanded': x(n),
                                  'aria-haspopup': !0
                              }
                            : {}
                    ),
                    {
                        role: a,
                        id: (0, o.qR)(t, s),
                        tabIndex: -1,
                        onFocus: i ? C.get(s) : () => {},
                        onMouseEnter: i ? R.get(s) : () => {}
                    }
                );
            },
            [t, x, C, R]
        );
    return r.useMemo(
        () => ({
            dispatch: v,
            getContainerProps: M,
            getSubmenuProps: k,
            getItemProps: j,
            isFocused: x,
            isUsingKeyboardNavigation: A
        }),
        [v, M, k, j, x, A]
    );
}

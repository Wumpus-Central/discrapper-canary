n.d(t, { ZP: () => m }), n(47120), n(301563);
var r = n(192379),
    i = n(808629),
    o = n(536895),
    a = n(260866);
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
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
function f(e) {
    switch (e.key) {
        case o.R8.ENTER:
        case o.R8.SPACE:
            return o.Us.SELECT_FOCUSED_ITEM;
        case o.R8.UP:
            return o.Us.NAVIGATE_UP;
        case o.R8.DOWN:
            return o.Us.NAVIGATE_DOWN;
        case o.R8.RIGHT:
            return o.Us.NAVIGATE_IN;
        case o.R8.LEFT:
            return o.Us.NAVIGATE_OUT;
    }
}
function p(e, t) {
    return null != t ? ''.concat((0, a.qR)(e, t.join(d))) : e;
}
function _(e, t) {
    return e.getElementById(t);
}
function h(e) {
    return e.tabIndex >= 0;
}
function m(e) {
    let { navId: t, items: n, initialFocusPath: s, onSelect: c, enabled: m = !0, closeMenu: g } = e,
        E = r.useRef(m);
    r.useLayoutEffect(() => {
        E.current = m;
    }, [m]);
    let [v, b] = r.useReducer(i.Z, {
            items: n,
            focusPath: s,
            focusIndex: -1
        }),
        y = r.useMemo(() => (0, a.P2)(b, 30), [b]);
    r.useEffect(() => {
        b({
            type: i.B.UPDATE_ITEMS,
            items: n
        });
    }, [n]);
    let { focusPath: O } = v,
        [S, I] = r.useState(!1),
        [T, N] = r.useState(!1),
        [{ onItemFocusMemoizer: A, onItemMouseEnterMemoizer: C }] = r.useState(() => ({
            onItemFocusMemoizer: new a.$o((e) => () => {
                I(!0),
                    b({
                        type: i.B.SET_FOCUS_PATH,
                        path: e.split(d)
                    });
            }),
            onItemMouseEnterMemoizer: new a.$o((e) => () => {
                N(!1),
                    b({
                        type: i.B.SET_FOCUS_PATH,
                        path: e.split(d)
                    });
            })
        })),
        R = r.useCallback(
            (e) => {
                if (!E.current) return;
                e.key === o.R8.ESCAPE && null != g && (e.stopPropagation(), e.preventDefault(), g());
                let n = f(e);
                switch (n) {
                    case o.Us.NAVIGATE_UP:
                    case o.Us.NAVIGATE_DOWN:
                    case o.Us.NAVIGATE_IN:
                    case o.Us.NAVIGATE_OUT:
                        e.preventDefault(), e.stopPropagation(), N(!0), y({ type: n });
                        return;
                    case o.Us.SELECT_FOCUSED_ITEM:
                        var r;
                        if (e.repeat || h(e.target)) return;
                        if ((e.preventDefault(), e.stopPropagation(), N(!1), y({ type: n }), null != c)) {
                            c(O);
                            return;
                        }
                        let i = _(null !== (r = e.target.ownerDocument) && void 0 !== r ? r : document, p(t, O));
                        null == i || i.click();
                }
            },
            [y, t, O, c, g]
        ),
        P = r.useCallback(() => {
            S || I(!0);
        }, [S]),
        w = r.useCallback(
            (e) => {
                e.target !== e.currentTarget && !e.currentTarget.contains(e.relatedTarget) && S && I(!1);
            },
            [S]
        ),
        D = r.useCallback(() => {
            b({
                type: i.B.SET_FOCUS_PATH,
                path: []
            }),
                I(!1);
        }, []),
        x = r.useCallback((e) => e.every((e, t) => O[t] === e), [O]),
        L = r.useCallback(
            () => ({
                role: 'menu',
                id: t,
                tabIndex: -1,
                onKeyDown: R,
                onFocus: P,
                onBlur: w,
                onMouseLeave: D,
                'aria-activedescendant': O.length > 0 ? (0, a.qR)(t, O.join(d)) : void 0
            }),
            [t, R, P, w, D, O]
        ),
        M = r.useCallback(
            (e) => {
                let { path: n } = e;
                return {
                    role: 'menu',
                    tabIndex: -1,
                    'aria-activedescendant': x(n) ? (0, a.qR)(t, O.join(d)) : void 0,
                    focusIndex: v.focusIndex,
                    isUsingKeyboardNavigation: T
                };
            },
            [t, O, x, v.focusIndex, T]
        ),
        k = r.useCallback(
            (e) => {
                var n;
                let { path: r, hasSubmenu: i = !1, navigable: o = !0, role: s = 'menuitem' } = e,
                    c = r.join(d);
                return u(
                    l(
                        {},
                        i
                            ? {
                                  'aria-expanded': x(r),
                                  'aria-haspopup': !0
                              }
                            : {}
                    ),
                    {
                        role: s,
                        id: (0, a.qR)(t, c),
                        tabIndex: -1,
                        onFocus: o ? A.get(c) : () => {},
                        onMouseEnter: o ? C.get(c) : () => {},
                        rootItemId: null !== (n = r[0]) && void 0 !== n ? n : c
                    }
                );
            },
            [t, x, A, C]
        );
    return r.useMemo(
        () => ({
            dispatch: y,
            getContainerProps: L,
            getSubmenuProps: M,
            getItemProps: k,
            isFocused: x,
            isUsingKeyboardNavigation: T
        }),
        [y, L, M, k, x, T]
    );
}

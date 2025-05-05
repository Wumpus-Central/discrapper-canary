n.d(t, { ZP: () => m }), n(388685), n(35282);
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
function _(e, t) {
    return null != t ? ''.concat((0, o.qR)(e, t.join(d))) : e;
}
function p(e, t) {
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
    let [b, y] = r.useReducer(i.Z, {
            items: n,
            focusPath: s,
            focusIndex: -1
        }),
        O = r.useMemo(() => (0, o.P2)(y, 30), [y]);
    r.useEffect(() => {
        y({
            type: i.B.UPDATE_ITEMS,
            items: n
        });
    }, [n]);
    let { focusPath: v } = b,
        [I, S] = r.useState(!1),
        [T, A] = r.useState(!1),
        [{ onItemFocusMemoizer: N, onItemMouseEnterMemoizer: C }] = r.useState(() => ({
            onItemFocusMemoizer: new o.$o((e) => () => {
                S(!0),
                    y({
                        type: i.B.SET_FOCUS_PATH,
                        path: e.split(d)
                    });
            }),
            onItemMouseEnterMemoizer: new o.$o((e) => () => {
                A(!1),
                    y({
                        type: i.B.SET_FOCUS_PATH,
                        path: e.split(d)
                    });
            })
        })),
        R = r.useCallback(
            (e) => {
                if (!E.current) return;
                e.key === a.R8.ESCAPE && null != g && (e.stopPropagation(), e.preventDefault(), g());
                let n = f(e);
                switch (n) {
                    case a.Us.NAVIGATE_UP:
                    case a.Us.NAVIGATE_DOWN:
                    case a.Us.NAVIGATE_IN:
                    case a.Us.NAVIGATE_OUT:
                        e.preventDefault(), e.stopPropagation(), A(!0), O({ type: n });
                        return;
                    case a.Us.SELECT_FOCUSED_ITEM:
                        var r;
                        if (e.repeat || h(e.target)) return;
                        if ((e.preventDefault(), e.stopPropagation(), A(!1), O({ type: n }), null != c)) return void c(v);
                        let i = p(null != (r = e.target.ownerDocument) ? r : document, _(t, v));
                        null == i || i.click();
                }
            },
            [O, t, v, c, g]
        ),
        P = r.useCallback(() => {
            I || S(!0);
        }, [I]),
        w = r.useCallback(
            (e) => {
                e.target !== e.currentTarget && !e.currentTarget.contains(e.relatedTarget) && I && S(!1);
            },
            [I]
        ),
        D = r.useCallback(() => {
            y({
                type: i.B.SET_FOCUS_PATH,
                path: []
            }),
                S(!1);
        }, []),
        L = r.useCallback((e) => e.every((e, t) => v[t] === e), [v]),
        x = r.useCallback(
            () => ({
                role: 'menu',
                id: t,
                tabIndex: -1,
                onKeyDown: R,
                onFocus: P,
                onBlur: w,
                onMouseLeave: D,
                'aria-activedescendant': v.length > 0 ? (0, o.qR)(t, v.join(d)) : void 0
            }),
            [t, R, P, w, D, v]
        ),
        M = r.useCallback(
            (e) => {
                let { path: n } = e;
                return {
                    role: 'menu',
                    tabIndex: -1,
                    'aria-activedescendant': L(n) ? (0, o.qR)(t, v.join(d)) : void 0,
                    focusIndex: b.focusIndex,
                    isUsingKeyboardNavigation: T
                };
            },
            [t, v, L, b.focusIndex, T]
        ),
        k = r.useCallback(
            (e) => {
                let { path: n, hasSubmenu: r = !1, navigable: i = !0, role: a = 'menuitem' } = e,
                    s = n.join(d);
                return u(
                    l(
                        {},
                        r
                            ? {
                                  'aria-expanded': L(n),
                                  'aria-haspopup': !0
                              }
                            : {}
                    ),
                    {
                        role: a,
                        id: (0, o.qR)(t, s),
                        tabIndex: -1,
                        onFocus: i ? N.get(s) : () => {},
                        onMouseEnter: i ? C.get(s) : () => {}
                    }
                );
            },
            [t, L, N, C]
        );
    return r.useMemo(
        () => ({
            dispatch: O,
            getContainerProps: x,
            getSubmenuProps: M,
            getItemProps: k,
            isFocused: L,
            isUsingKeyboardNavigation: T
        }),
        [O, x, M, k, L, T]
    );
}

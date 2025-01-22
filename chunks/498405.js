r.d(n, {
    ZP: function () {
        return h;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(808629),
    s = r(536895),
    l = r(260866);
let u = '--';
function c(e) {
    switch (e.key) {
        case s.R8.ENTER:
        case s.R8.SPACE:
            return s.Us.SELECT_FOCUSED_ITEM;
        case s.R8.UP:
            return s.Us.NAVIGATE_UP;
        case s.R8.DOWN:
            return s.Us.NAVIGATE_DOWN;
        case s.R8.RIGHT:
            return s.Us.NAVIGATE_IN;
        case s.R8.LEFT:
            return s.Us.NAVIGATE_OUT;
    }
}
function d(e, n) {
    return null != n ? ''.concat((0, l.qR)(e, n.join(u))) : e;
}
function f(e, n) {
    return e.getElementById(n);
}
function p(e) {
    return e.tabIndex >= 0;
}
function h(e) {
    let { navId: n, items: r, initialFocusPath: i, onSelect: h, enabled: _ = !0, closeMenu: m } = e,
        g = a.useRef(_);
    a.useLayoutEffect(() => {
        g.current = _;
    }, [_]);
    let [E, v] = a.useReducer(o.Z, {
            items: r,
            focusPath: i,
            focusIndex: -1
        }),
        y = a.useMemo(() => (0, l.P2)(v, 30), [v]);
    a.useEffect(() => {
        v({
            type: o.B.UPDATE_ITEMS,
            items: r
        });
    }, [r]);
    let { focusPath: b } = E,
        [I, T] = a.useState(!1),
        [S, A] = a.useState(!1),
        [{ onItemFocusMemoizer: C, onItemMouseEnterMemoizer: N }] = a.useState(() => ({
            onItemFocusMemoizer: new l.$o((e) => () => {
                T(!0),
                    v({
                        type: o.B.SET_FOCUS_PATH,
                        path: e.split(u)
                    });
            }),
            onItemMouseEnterMemoizer: new l.$o((e) => () => {
                A(!1),
                    v({
                        type: o.B.SET_FOCUS_PATH,
                        path: e.split(u)
                    });
            })
        })),
        R = a.useCallback(
            (e) => {
                if (!g.current) return;
                e.key === s.R8.ESCAPE && null != m && (e.stopPropagation(), e.preventDefault(), m());
                let r = c(e);
                switch (r) {
                    case s.Us.NAVIGATE_UP:
                    case s.Us.NAVIGATE_DOWN:
                    case s.Us.NAVIGATE_IN:
                    case s.Us.NAVIGATE_OUT:
                        e.preventDefault(), e.stopPropagation(), A(!0), y({ type: r });
                        return;
                    case s.Us.SELECT_FOCUSED_ITEM:
                        var i;
                        if (e.repeat || p(e.target)) return;
                        if ((e.preventDefault(), e.stopPropagation(), A(!1), y({ type: r }), null != h)) {
                            h(b);
                            return;
                        }
                        let a = f(null !== (i = e.target.ownerDocument) && void 0 !== i ? i : document, d(n, b));
                        null == a || a.click();
                }
            },
            [y, n, b, h, m]
        ),
        O = a.useCallback(() => {
            !I && T(!0);
        }, [I]),
        D = a.useCallback(
            (e) => {
                if (e.target !== e.currentTarget) {
                    if (!e.currentTarget.contains(e.relatedTarget)) I && T(!1);
                }
            },
            [I]
        ),
        x = a.useCallback(() => {
            v({
                type: o.B.SET_FOCUS_PATH,
                path: []
            }),
                T(!1);
        }, []),
        L = a.useCallback((e) => e.every((e, n) => b[n] === e), [b]),
        w = a.useCallback(
            () => ({
                role: 'menu',
                id: n,
                tabIndex: -1,
                onKeyDown: R,
                onFocus: O,
                onBlur: D,
                onMouseLeave: x,
                'aria-activedescendant': b.length > 0 ? (0, l.qR)(n, b.join(u)) : void 0
            }),
            [n, R, O, D, x, b]
        ),
        P = a.useCallback(
            (e) => {
                let { path: r } = e;
                return {
                    role: 'menu',
                    tabIndex: -1,
                    'aria-activedescendant': L(r) ? (0, l.qR)(n, b.join(u)) : void 0,
                    focusIndex: E.focusIndex,
                    isUsingKeyboardNavigation: S
                };
            },
            [n, b, L, E.focusIndex, S]
        ),
        M = a.useCallback(
            (e) => {
                let { path: r, hasSubmenu: i = !1, navigable: a = !0, role: o = 'menuitem' } = e,
                    s = r.join(u);
                return {
                    ...(i
                        ? {
                              'aria-expanded': L(r),
                              'aria-haspopup': !0
                          }
                        : {}),
                    role: o,
                    id: (0, l.qR)(n, s),
                    tabIndex: -1,
                    onFocus: a ? C.get(s) : () => {},
                    onMouseEnter: a ? N.get(s) : () => {}
                };
            },
            [n, L, C, N]
        );
    return a.useMemo(
        () => ({
            dispatch: y,
            getContainerProps: w,
            getSubmenuProps: P,
            getItemProps: M,
            isFocused: L,
            isUsingKeyboardNavigation: S
        }),
        [y, w, P, M, L, S]
    );
}

n.d(t, { ZP: () => f }), n(47120);
var i = n(192379),
    r = n(808629),
    a = n(536895),
    s = n(260866);
let o = '--';
function l(e) {
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
function u(e, t) {
    return null != t ? ''.concat((0, s.qR)(e, t.join(o))) : e;
}
function c(e, t) {
    return e.getElementById(t);
}
function d(e) {
    return e.tabIndex >= 0;
}
function f(e) {
    let { navId: t, items: n, initialFocusPath: f, onSelect: _, enabled: p = !0, closeMenu: h } = e,
        m = i.useRef(p);
    i.useLayoutEffect(() => {
        m.current = p;
    }, [p]);
    let [g, E] = i.useReducer(r.Z, {
            items: n,
            focusPath: f,
            focusIndex: -1
        }),
        v = i.useMemo(() => (0, s.P2)(E, 30), [E]);
    i.useEffect(() => {
        E({
            type: r.B.UPDATE_ITEMS,
            items: n
        });
    }, [n]);
    let { focusPath: y } = g,
        [I, T] = i.useState(!1),
        [b, S] = i.useState(!1),
        [{ onItemFocusMemoizer: A, onItemMouseEnterMemoizer: N }] = i.useState(() => ({
            onItemFocusMemoizer: new s.$o((e) => () => {
                T(!0),
                    E({
                        type: r.B.SET_FOCUS_PATH,
                        path: e.split(o)
                    });
            }),
            onItemMouseEnterMemoizer: new s.$o((e) => () => {
                S(!1),
                    E({
                        type: r.B.SET_FOCUS_PATH,
                        path: e.split(o)
                    });
            })
        })),
        C = i.useCallback(
            (e) => {
                if (!m.current) return;
                e.key === a.R8.ESCAPE && null != h && (e.stopPropagation(), e.preventDefault(), h());
                let n = l(e);
                switch (n) {
                    case a.Us.NAVIGATE_UP:
                    case a.Us.NAVIGATE_DOWN:
                    case a.Us.NAVIGATE_IN:
                    case a.Us.NAVIGATE_OUT:
                        e.preventDefault(), e.stopPropagation(), S(!0), v({ type: n });
                        return;
                    case a.Us.SELECT_FOCUSED_ITEM:
                        var i;
                        if (e.repeat || d(e.target)) return;
                        if ((e.preventDefault(), e.stopPropagation(), S(!1), v({ type: n }), null != _)) {
                            _(y);
                            return;
                        }
                        let r = c(null !== (i = e.target.ownerDocument) && void 0 !== i ? i : document, u(t, y));
                        null == r || r.click();
                }
            },
            [v, t, y, _, h]
        ),
        R = i.useCallback(() => {
            I || T(!0);
        }, [I]),
        O = i.useCallback(
            (e) => {
                e.target !== e.currentTarget && !e.currentTarget.contains(e.relatedTarget) && I && T(!1);
            },
            [I]
        ),
        D = i.useCallback(() => {
            E({
                type: r.B.SET_FOCUS_PATH,
                path: []
            }),
                T(!1);
        }, []),
        L = i.useCallback((e) => e.every((e, t) => y[t] === e), [y]),
        x = i.useCallback(
            () => ({
                role: 'menu',
                id: t,
                tabIndex: -1,
                onKeyDown: C,
                onFocus: R,
                onBlur: O,
                onMouseLeave: D,
                'aria-activedescendant': y.length > 0 ? (0, s.qR)(t, y.join(o)) : void 0
            }),
            [t, C, R, O, D, y]
        ),
        P = i.useCallback(
            (e) => {
                let { path: n } = e;
                return {
                    role: 'menu',
                    tabIndex: -1,
                    'aria-activedescendant': L(n) ? (0, s.qR)(t, y.join(o)) : void 0,
                    focusIndex: g.focusIndex,
                    isUsingKeyboardNavigation: b
                };
            },
            [t, y, L, g.focusIndex, b]
        ),
        w = i.useCallback(
            (e) => {
                let { path: n, hasSubmenu: i = !1, navigable: r = !0, role: a = 'menuitem' } = e,
                    l = n.join(o);
                return {
                    ...(i
                        ? {
                              'aria-expanded': L(n),
                              'aria-haspopup': !0
                          }
                        : {}),
                    role: a,
                    id: (0, s.qR)(t, l),
                    tabIndex: -1,
                    onFocus: r ? A.get(l) : () => {},
                    onMouseEnter: r ? N.get(l) : () => {}
                };
            },
            [t, L, A, N]
        );
    return i.useMemo(
        () => ({
            dispatch: v,
            getContainerProps: x,
            getSubmenuProps: P,
            getItemProps: w,
            isFocused: L,
            isUsingKeyboardNavigation: b
        }),
        [v, x, P, w, L, b]
    );
}

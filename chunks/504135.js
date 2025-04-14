n.d(t, { s: () => b });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(1561),
    l = n(761224),
    c = n(670596),
    u = n(743236),
    d = n(525220),
    f = n(481060),
    _ = n(939350),
    p = n(906944);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e) {
    let { color: t = 'default', label: n, icon: o, iconLeft: h, iconLeftSize: g = 'md', hint: b, subtext: y, subtextLineClamp: v, hasSubmenu: O, disabled: I, isFocused: S, menuItemProps: T, action: N, onClose: A, onFocus: C, className: R, focusedClassName: P, subMenuIconClassName: w, dontCloseOnActionIfHoldingShiftKey: D, dontCloseOnAction: L, iconProps: x, sparkle: M } = e,
        { onSelect: k, onInteraction: j } = i.useContext(c.p),
        U = i.useRef(null),
        G = i.useCallback(
            (e) => {
                if ((null == j || j({ type: c.U.DEFAULT }), null == N)) return !1;
                (e.shiftKey && D) || L || A(), e.persist(), null == k || k(), requestAnimationFrame(() => N(e));
            },
            [N, A, k, D, L, j]
        );
    return (
        i.useEffect(() => {
            S && ((0, u.F)(U), null == C || C());
        }, [S, C]),
        (0, r.jsxs)(
            s.P,
            E(
                m(
                    {
                        innerRef: U,
                        className: a()(p.item, p.labelContainer, _._[t], R, {
                            [p.disabled]: I,
                            [p.focused]: S,
                            [null != P ? P : '']: S
                        }),
                        onClick: I ? void 0 : G,
                        'aria-disabled': I
                    },
                    T
                ),
                {
                    'data-menu-item': 'true',
                    children: [
                        null != h &&
                            (0, r.jsx)('div', {
                                className: a()(p.iconContainerLeft, { [p.iconContainerLarge]: 'lg' === g }),
                                children: (0, r.jsx)(
                                    h,
                                    E(m({ color: 'currentColor' }, x), {
                                        className: a()(p.icon, null == x ? void 0 : x.className),
                                        isFocused: S
                                    })
                                )
                            }),
                        (0, r.jsxs)('div', {
                            className: p.label,
                            children: [
                                (0, l.I)(n, e),
                                null != y &&
                                    (0, r.jsx)(f.Text, {
                                        variant: 'text-xs/normal',
                                        className: a()(p.subtext, { [p.subtextLineClamp]: null != v }),
                                        lineClamp: v,
                                        children: y
                                    })
                            ]
                        }),
                        null != b &&
                            (0, r.jsx)('div', {
                                className: p.hintContainer,
                                children: (0, l.I)(b, e)
                            }),
                        (0, d.Y)(o)
                            ? o
                            : null != o &&
                              (0, r.jsx)('div', {
                                  className: p.iconContainer,
                                  children: (0, r.jsx)(
                                      o,
                                      E(m({ color: 'currentColor' }, x), {
                                          className: a()(p.icon, null == x ? void 0 : x.className),
                                          isFocused: S
                                      })
                                  )
                              }),
                        O &&
                            (0, r.jsxs)('div', {
                                className: p.iconContainer,
                                children: [
                                    (0, r.jsx)(f.Fbu, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: a()(p.caret, w)
                                    }),
                                    M && (0, r.jsx)(f.K1N, { className: p.sparkles })
                                ]
                            })
                    ]
                }
            )
        )
    );
}

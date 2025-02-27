n.d(t, { s: () => v });
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
    p = n(253068);
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
function g(e) {
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
function m(e, t) {
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
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e) {
    let { color: t = 'default', label: n, icon: o, iconLeft: h, iconLeftSize: m = 'md', hint: v, subtext: b, subtextLineClamp: y, hasSubmenu: O, disabled: S, isFocused: I, menuItemProps: T, action: N, onClose: A, onFocus: C, className: R, focusedClassName: P, subMenuIconClassName: D, dontCloseOnActionIfHoldingShiftKey: w, dontCloseOnAction: L, iconProps: x, sparkle: M } = e,
        { onSelect: k, onInteraction: j } = i.useContext(c.p),
        U = i.useRef(null),
        G = i.useCallback(
            (e) => {
                if ((null == j || j({ type: c.U.DEFAULT }), null == N)) return !1;
                (e.shiftKey && w) || L || A(), e.persist(), null == k || k(), requestAnimationFrame(() => N(e));
            },
            [N, A, k, w, L, j]
        );
    return (
        i.useEffect(() => {
            I && ((0, u.F)(U), null == C || C());
        }, [I, C]),
        (0, r.jsxs)(
            s.P,
            E(
                g(
                    {
                        innerRef: U,
                        className: a()(p.item, p.labelContainer, _._[t], R, {
                            [p.disabled]: S,
                            [p.focused]: I,
                            [null != P ? P : '']: I
                        }),
                        onClick: S ? void 0 : G,
                        'aria-disabled': S
                    },
                    T
                ),
                {
                    'data-menu-item': 'true',
                    children: [
                        null != h &&
                            (0, r.jsx)('div', {
                                className: a()(p.iconContainerLeft, { [p.iconContainerLarge]: 'lg' === m }),
                                children: (0, r.jsx)(
                                    h,
                                    E(g({ color: 'currentColor' }, x), {
                                        className: a()(p.icon, null == x ? void 0 : x.className),
                                        isFocused: I
                                    })
                                )
                            }),
                        (0, r.jsxs)('div', {
                            className: p.label,
                            children: [
                                (0, l.I)(n, e),
                                null != b &&
                                    (0, r.jsx)(f.Text, {
                                        variant: 'text-xs/normal',
                                        className: a()(p.subtext, { [p.subtextLineClamp]: null != y }),
                                        lineClamp: y,
                                        children: b
                                    })
                            ]
                        }),
                        null != v &&
                            (0, r.jsx)('div', {
                                className: p.hintContainer,
                                children: (0, l.I)(v, e)
                            }),
                        (0, d.Y)(o)
                            ? o
                            : null != o &&
                              (0, r.jsx)('div', {
                                  className: a()(p.iconContainer),
                                  children: (0, r.jsx)(
                                      o,
                                      E(g({ color: 'currentColor' }, x), {
                                          className: a()(p.icon, null == x ? void 0 : x.className),
                                          isFocused: I
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
                                        className: a()(p.caret, D)
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

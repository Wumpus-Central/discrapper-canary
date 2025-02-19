n.d(t, { s: () => v });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(1561),
    l = n(761224),
    c = n(898560),
    u = n(743236),
    d = n(525220),
    f = n(481060),
    p = n(939350),
    _ = n(253068);
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
function v(e) {
    let { color: t = 'default', label: n, icon: o, iconLeft: h, iconLeftSize: g = 'md', hint: v, subtext: b, subtextLineClamp: y, hasSubmenu: O, disabled: S, isFocused: I, menuItemProps: T, action: N, onClose: A, onFocus: C, className: R, focusedClassName: P, subMenuIconClassName: w, dontCloseOnActionIfHoldingShiftKey: D, dontCloseOnAction: x, iconProps: L, sparkle: M } = e,
        k = i.useContext(c.r),
        j = i.useRef(null),
        U = i.useCallback(
            (e) => {
                if (null == N) return !1;
                (e.shiftKey && D) || x || A(), e.persist(), null == k || k(), requestAnimationFrame(() => N(e));
            },
            [N, A, k, D, x]
        );
    return (
        i.useEffect(() => {
            I && ((0, u.F)(j), null == C || C());
        }, [I, C]),
        (0, r.jsxs)(
            s.P,
            E(
                m(
                    {
                        innerRef: j,
                        className: a()(_.item, _.labelContainer, p._[t], R, {
                            [_.disabled]: S,
                            [_.focused]: I,
                            [null != P ? P : '']: I
                        }),
                        onClick: S ? void 0 : U,
                        'aria-disabled': S
                    },
                    T
                ),
                {
                    'data-menu-item': 'true',
                    children: [
                        null != h &&
                            (0, r.jsx)('div', {
                                className: a()(_.iconContainerLeft, { [_.iconContainerLarge]: 'lg' === g }),
                                children: (0, r.jsx)(
                                    h,
                                    E(m({ color: 'currentColor' }, L), {
                                        className: a()(_.icon, null == L ? void 0 : L.className),
                                        isFocused: I
                                    })
                                )
                            }),
                        (0, r.jsxs)('div', {
                            className: _.label,
                            children: [
                                (0, l.I)(n, e),
                                null != b &&
                                    (0, r.jsx)(f.Text, {
                                        variant: 'text-xs/normal',
                                        className: a()(_.subtext, { [_.subtextLineClamp]: null != y }),
                                        lineClamp: y,
                                        children: b
                                    })
                            ]
                        }),
                        null != v &&
                            (0, r.jsx)('div', {
                                className: _.hintContainer,
                                children: (0, l.I)(v, e)
                            }),
                        (0, d.Y)(o)
                            ? o
                            : null != o &&
                              (0, r.jsx)('div', {
                                  className: a()(_.iconContainer),
                                  children: (0, r.jsx)(
                                      o,
                                      E(m({ color: 'currentColor' }, L), {
                                          className: a()(_.icon, null == L ? void 0 : L.className),
                                          isFocused: I
                                      })
                                  )
                              }),
                        O &&
                            (0, r.jsxs)('div', {
                                className: _.iconContainer,
                                children: [
                                    (0, r.jsx)(f.Fbu, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: a()(_.caret, w)
                                    }),
                                    M && (0, r.jsx)(f.K1N, { className: _.sparkles })
                                ]
                            })
                    ]
                }
            )
        )
    );
}

n.d(t, { s: () => E });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(761224),
    c = n(670596),
    u = n(743236),
    d = n(525220),
    f = n(939350),
    p = n(334405);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e) {
    let {
            color: t = "default",
            label: n,
            icon: a,
            iconLeft: _,
            iconLeftSize: h = "md",
            hint: E,
            subtext: b,
            subtextLineClamp: y,
            hasSubmenu: O,
            disabled: v,
            isFocused: S,
            menuItemProps: I,
            action: T,
            onClose: C,
            onFocus: A,
            className: N,
            focusedClassName: P,
            subMenuIconClassName: R,
            dontCloseOnActionIfHoldingShiftKey: D,
            dontCloseOnAction: w,
            iconProps: x,
        } = e,
        { onSelect: L, onInteraction: j } = i.useContext(c.p),
        M = i.useRef(null),
        k = i.useCallback(
            (e) => {
                var t;
                if ((null == j || j({ type: c.U.DEFAULT }), null == T)) return !1;
                (e.shiftKey && D) || w || C(),
                    e.persist(),
                    null == L || L(),
                    (null != (t = e.nativeEvent.view) ? t : window).requestAnimationFrame(() => T(e));
            },
            [T, C, L, D, w, j],
        );
    return (
        i.useEffect(() => {
            S && ((0, u.F)(M), null == A || A());
        }, [S, A]),
        (0, r.jsxs)(
            s.P3F,
            g(
                m(
                    {
                        innerRef: M,
                        className: o()(p.item, p.labelContainer, f._e[t], N, {
                            [p.disabled]: v,
                            [p.focused]: S,
                            [null != P ? P : ""]: S,
                        }),
                        onClick: v ? void 0 : k,
                        "aria-disabled": v,
                    },
                    I,
                ),
                {
                    "data-menu-item": "true",
                    children: [
                        null != _ &&
                            (0, r.jsx)("div", {
                                className: o()(p.iconContainerLeft, { [p.iconContainerLarge]: "lg" === h }),
                                children: (0, r.jsx)(
                                    _,
                                    g(m({ color: "currentColor" }, x), {
                                        className: o()(p.icon, null == x ? void 0 : x.className),
                                    }),
                                ),
                            }),
                        (0, r.jsxs)("div", {
                            className: p.label,
                            children: [
                                (0, l.I)(n, e),
                                null != b &&
                                    (0, r.jsx)(s.xvT, {
                                        variant: "text-xs/normal",
                                        className: o()(p.subtext, { [p.subtextLineClamp]: null != y }),
                                        lineClamp: y,
                                        children: b,
                                    }),
                            ],
                        }),
                        null != E &&
                            (0, r.jsx)("div", {
                                className: p.hintContainer,
                                children: (0, l.I)(E, e),
                            }),
                        (0, d.Y)(a)
                            ? a
                            : null != a &&
                              (0, r.jsx)("div", {
                                  className: p.iconContainer,
                                  children: (0, r.jsx)(
                                      a,
                                      g(m({ color: "currentColor" }, x), {
                                          className: o()(p.icon, null == x ? void 0 : x.className),
                                      }),
                                  ),
                              }),
                        O &&
                            (0, r.jsx)("div", {
                                className: p.iconContainer,
                                children: (0, r.jsx)(s.Fbu, {
                                    size: "md",
                                    color: "currentColor",
                                    className: o()(p.caret, R),
                                }),
                            }),
                    ],
                },
            ),
        )
    );
}

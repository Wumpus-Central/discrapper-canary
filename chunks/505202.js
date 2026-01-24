n.d(t, {
    D: () => b,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(86968),
    c = n(900283),
    u = n(563014),
    d = n(745396),
    f = n(112378),
    p = n(52738),
    _ = n(885621),
    h = n(658122);

function m(e, t, n) {
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

function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}

function E(e, t) {
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

function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function b(e) {
    let {
            color: t = "default",
            label: n,
            void_label: a,
            icon: m,
            iconLeft: E,
            leadingAccessory: b,
            hint: O,
            subtext: v,
            subtextLineClamp: A,
            hasSubmenu: I,
            loading: S,
            badge: T,
            disabled: C,
            isFocused: N,
            menuItemProps: w,
            action: R,
            onClose: P,
            onFocus: D,
            className: x,
            focusedClassName: L,
            dontCloseOnActionIfHoldingShiftKey: j,
            dontCloseOnAction: M,
            iconProps: k,
        } = e,
        { onSelect: U, onInteraction: G } = i.useContext(c.x),
        V = i.useRef(null),
        F = i.useCallback(
            (e) => {
                var t;
                if (
                    (null == G ||
                        G({
                            type: c.Q.DEFAULT,
                        }),
                    null == R)
                )
                    return !1;
                (e.shiftKey && j) || M || P(),
                    e.persist(),
                    null == U || U(),
                    (null != (t = e.nativeEvent.view) ? t : window).requestAnimationFrame(() => R(e));
            },
            [R, P, U, j, M, G],
        );
    return (
        i.useEffect(() => {
            N && ((0, u.Y)(V), null == D || D());
        }, [N, D]),
        (0, r.jsxs)(
            o.DUT,
            y(
                g(
                    {
                        innerRef: V,
                        className: s()(h.item, h.labelContainer, _.jV[t], x, {
                            [h.disabled]: C,
                            [h.focused]: N,
                            [null != L ? L : ""]: N,
                        }),
                        onClick: C ? void 0 : F,
                        "aria-disabled": C,
                    },
                    w,
                ),
                {
                    "data-menu-item": "true",
                    children: [
                        null != E &&
                            (0, r.jsx)("div", {
                                className: h.iconContainerLeft,
                                children: (0, r.jsx)(
                                    E,
                                    y(
                                        g(
                                            {
                                                color: "currentColor",
                                            },
                                            k,
                                        ),
                                        {
                                            className: s()(h.icon, null == k ? void 0 : k.className),
                                        },
                                    ),
                                ),
                            }),
                        null != b &&
                            (0, r.jsx)(p.B, {
                                accessory: b,
                                isFocused: N,
                            }),
                        (0, r.jsxs)("div", {
                            className: h.label,
                            children: [
                                (0, r.jsx)(f.V, {
                                    children: (0, l.J)(null != a ? a : n, e),
                                }),
                                null != v &&
                                    (0, r.jsx)(o.EYj, {
                                        variant: "text-xs/normal",
                                        className: s()(h.subtext, {
                                            [h.subtextLineClamp]: null != A,
                                        }),
                                        lineClamp: A,
                                        children: v,
                                    }),
                            ],
                        }),
                        null != O &&
                            (0, r.jsx)("div", {
                                className: h.hintContainer,
                                children: (0, l.J)(O, e),
                            }),
                        null != T &&
                            (0, r.jsx)("div", {
                                className: h.badgeContainer,
                                children: (0, r.jsx)(o.Exy, {
                                    type: T,
                                }),
                            }),
                        S &&
                            (0, r.jsx)("div", {
                                className: h.iconContainer,
                                children: (0, r.jsx)(o.y$y, {
                                    type: o.y$y.Type.PULSING_ELLIPSIS,
                                }),
                            }),
                        (0, d.O)(m)
                            ? m
                            : null != m &&
                              (0, r.jsx)("div", {
                                  className: h.iconContainer,
                                  children: (0, r.jsx)(
                                      m,
                                      y(
                                          g(
                                              {
                                                  color: "currentColor",
                                              },
                                              k,
                                          ),
                                          {
                                              className: s()(h.icon, null == k ? void 0 : k.className),
                                          },
                                      ),
                                  ),
                              }),
                        I &&
                            (0, r.jsx)("div", {
                                className: h.iconContainer,
                                children: (0, r.jsx)(o._BQ, {
                                    size: "md",
                                    color: "currentColor",
                                    className: h.caret,
                                }),
                            }),
                    ],
                },
            ),
        )
    );
}

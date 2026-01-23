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
            disabled: S,
            isFocused: T,
            menuItemProps: C,
            action: N,
            onClose: w,
            onFocus: R,
            className: P,
            focusedClassName: D,
            dontCloseOnActionIfHoldingShiftKey: x,
            dontCloseOnAction: L,
            iconProps: j,
        } = e,
        { onSelect: M, onInteraction: k } = i.useContext(c.x),
        U = i.useRef(null),
        G = i.useCallback(
            (e) => {
                var t;
                if (
                    (null == k ||
                        k({
                            type: c.Q.DEFAULT,
                        }),
                    null == N)
                )
                    return !1;
                (e.shiftKey && x) || L || w(),
                    e.persist(),
                    null == M || M(),
                    (null != (t = e.nativeEvent.view) ? t : window).requestAnimationFrame(() => N(e));
            },
            [N, w, M, x, L, k],
        );
    return (
        i.useEffect(() => {
            T && ((0, u.Y)(U), null == R || R());
        }, [T, R]),
        (0, r.jsxs)(
            o.DUT,
            y(
                g(
                    {
                        innerRef: U,
                        className: s()(h.item, h.labelContainer, _.jV[t], P, {
                            [h.disabled]: S,
                            [h.focused]: T,
                            [null != D ? D : ""]: T,
                        }),
                        onClick: S ? void 0 : G,
                        "aria-disabled": S,
                    },
                    C,
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
                                            j,
                                        ),
                                        {
                                            className: s()(h.icon, null == j ? void 0 : j.className),
                                        },
                                    ),
                                ),
                            }),
                        null != b &&
                            (0, r.jsx)(p.B, {
                                accessory: b,
                                isFocused: T,
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
                                              j,
                                          ),
                                          {
                                              className: s()(h.icon, null == j ? void 0 : j.className),
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

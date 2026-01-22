n.d(t, {
    D: () => y,
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

function b(e, t) {
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

function y(e) {
    let {
            color: t = "default",
            label: n,
            icon: a,
            iconLeft: m,
            leadingAccessory: E,
            hint: y,
            subtext: O,
            subtextLineClamp: A,
            hasSubmenu: v,
            disabled: S,
            isFocused: I,
            menuItemProps: T,
            action: C,
            onClose: N,
            onFocus: R,
            className: w,
            focusedClassName: P,
            dontCloseOnActionIfHoldingShiftKey: D,
            dontCloseOnAction: x,
            iconProps: L,
        } = e,
        { onSelect: j, onInteraction: M } = i.useContext(c.x),
        k = i.useRef(null),
        U = i.useCallback(
            (e) => {
                var t;
                if (
                    (null == M ||
                        M({
                            type: c.Q.DEFAULT,
                        }),
                    null == C)
                )
                    return !1;
                (e.shiftKey && D) || x || N(),
                    e.persist(),
                    null == j || j(),
                    (null != (t = e.nativeEvent.view) ? t : window).requestAnimationFrame(() => C(e));
            },
            [C, N, j, D, x, M],
        );
    return (
        i.useEffect(() => {
            I && ((0, u.Y)(k), null == R || R());
        }, [I, R]),
        (0, r.jsxs)(
            o.DUT,
            b(
                g(
                    {
                        innerRef: k,
                        className: s()(h.item, h.labelContainer, _.jV[t], w, {
                            [h.disabled]: S,
                            [h.focused]: I,
                            [null != P ? P : ""]: I,
                        }),
                        onClick: S ? void 0 : U,
                        "aria-disabled": S,
                    },
                    T,
                ),
                {
                    "data-menu-item": "true",
                    children: [
                        null != m &&
                            (0, r.jsx)("div", {
                                className: h.iconContainerLeft,
                                children: (0, r.jsx)(
                                    m,
                                    b(
                                        g(
                                            {
                                                color: "currentColor",
                                            },
                                            L,
                                        ),
                                        {
                                            className: s()(h.icon, null == L ? void 0 : L.className),
                                        },
                                    ),
                                ),
                            }),
                        null != E &&
                            (0, r.jsx)(p.B, {
                                accessory: E,
                                isFocused: I,
                            }),
                        (0, r.jsxs)("div", {
                            className: h.label,
                            children: [
                                (0, r.jsx)(f.V, {
                                    children: (0, l.J)(n, e),
                                }),
                                null != O &&
                                    (0, r.jsx)(o.EYj, {
                                        variant: "text-xs/normal",
                                        className: s()(h.subtext, {
                                            [h.subtextLineClamp]: null != A,
                                        }),
                                        lineClamp: A,
                                        children: O,
                                    }),
                            ],
                        }),
                        null != y &&
                            (0, r.jsx)("div", {
                                className: h.hintContainer,
                                children: (0, l.J)(y, e),
                            }),
                        (0, d.O)(a)
                            ? a
                            : null != a &&
                              (0, r.jsx)("div", {
                                  className: h.iconContainer,
                                  children: (0, r.jsx)(
                                      a,
                                      b(
                                          g(
                                              {
                                                  color: "currentColor",
                                              },
                                              L,
                                          ),
                                          {
                                              className: s()(h.icon, null == L ? void 0 : L.className),
                                          },
                                      ),
                                  ),
                              }),
                        v &&
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

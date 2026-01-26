n.d(t, {
    D: () => v,
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
    f = n(298063),
    p = n(112378),
    _ = n(52738),
    h = n(516971),
    m = n(885621),
    g = n(658122);

function E(e, t, n) {
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

function y(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}

function b(e, t) {
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

function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function v(e) {
    let {
            color: t = "default",
            label: n,
            void_label: a,
            icon: E,
            iconLeft: b,
            leadingAccessory: v,
            trailingIndicator: A,
            hint: I,
            subtext: S,
            subtextLineClamp: T,
            hasSubmenu: C,
            loading: N,
            badge: w,
            disabled: R,
            isFocused: P,
            menuItemProps: D,
            action: x,
            onClose: L,
            onFocus: j,
            className: M,
            focusedClassName: k,
            dontCloseOnActionIfHoldingShiftKey: U,
            dontCloseOnAction: G,
            iconProps: V,
        } = e,
        { onSelect: F, onInteraction: B } = i.useContext(c.x),
        H = i.useRef(null),
        Y = (0, f.Y)("MenuItem"),
        W = i.useCallback(
            (e) => {
                var t;
                if (
                    (null == B ||
                        B({
                            type: c.Q.DEFAULT,
                        }),
                    null == x)
                )
                    return !1;
                (e.shiftKey && U) || G || L(),
                    e.persist(),
                    null == F || F(),
                    (null != (t = e.nativeEvent.view) ? t : window).requestAnimationFrame(() => x(e));
            },
            [x, L, F, U, G, B],
        );
    return (
        i.useEffect(() => {
            P && ((0, u.Y)(H), null == j || j());
        }, [P, j]),
        (0, r.jsxs)(
            o.DUT,
            O(
                y(
                    {
                        innerRef: H,
                        className: s()(g.item, g.labelContainer, m.jV[t], M, {
                            [g.disabled]: R,
                            [g.focused]: P,
                            [null != k ? k : ""]: P,
                        }),
                        onClick: R ? void 0 : W,
                        "aria-disabled": R,
                    },
                    D,
                ),
                {
                    "data-menu-item": "true",
                    children: [
                        Y || (null == v ? void 0 : v.type) === "status"
                            ? null != v &&
                              (0, r.jsx)(_.B, {
                                  accessory: v,
                                  isFocused: P,
                              })
                            : (0, d.O)(b)
                              ? b
                              : null != b &&
                                (0, r.jsx)("div", {
                                    className: g.iconContainerLeft,
                                    children: (0, r.jsx)(
                                        b,
                                        O(
                                            y(
                                                {
                                                    color: "currentColor",
                                                },
                                                V,
                                            ),
                                            {
                                                className: s()(g.icon, null == V ? void 0 : V.className),
                                            },
                                        ),
                                    ),
                                }),
                        (0, r.jsxs)("div", {
                            className: g.label,
                            children: [
                                (0, r.jsx)(p.V, {
                                    children: (0, l.J)(null != a ? a : n, e),
                                }),
                                null != S &&
                                    (0, r.jsx)(o.EYj, {
                                        variant: "text-xs/normal",
                                        className: s()(g.subtext, {
                                            [g.subtextLineClamp]: null != T,
                                        }),
                                        lineClamp: T,
                                        children: S,
                                    }),
                            ],
                        }),
                        null != I &&
                            (0, r.jsx)("div", {
                                className: g.hintContainer,
                                children: (0, l.J)(I, e),
                            }),
                        null != w &&
                            (0, r.jsx)("div", {
                                className: g.badgeContainer,
                                children: (0, r.jsx)(o.Exy, {
                                    type: w,
                                }),
                            }),
                        N &&
                            (0, r.jsx)("div", {
                                className: g.iconContainer,
                                children: (0, r.jsx)(o.y$y, {
                                    type: o.y$y.Type.PULSING_ELLIPSIS,
                                }),
                            }),
                        Y
                            ? null != A &&
                              (0, r.jsx)(h.g, {
                                  indicator: A,
                              })
                            : (0, d.O)(E)
                              ? E
                              : null != E &&
                                (0, r.jsx)("div", {
                                    className: g.iconContainer,
                                    children: (0, r.jsx)(
                                        E,
                                        O(
                                            y(
                                                {
                                                    color: "currentColor",
                                                },
                                                V,
                                            ),
                                            {
                                                className: s()(g.icon, null == V ? void 0 : V.className),
                                            },
                                        ),
                                    ),
                                }),
                        C &&
                            (0, r.jsx)("div", {
                                className: g.iconContainer,
                                children: (0, r.jsx)(o._BQ, {
                                    size: "md",
                                    color: "currentColor",
                                    className: g.caret,
                                }),
                            }),
                    ],
                },
            ),
        )
    );
}

n.d(t, {
    i: () => v,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(158954),
    l = n(86968),
    c = n(900283),
    u = n(563014),
    d = n(745396),
    f = n(397927),
    p = n(298063),
    _ = n(112378),
    h = n(52738),
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
            checked: E,
            subtext: b,
            subtextLineClamp: v,
            leftIcon: A,
            leadingAccessory: I,
            disabled: S,
            isFocused: T,
            menuItemProps: C,
            action: N,
        } = e,
        { onInteraction: w } = i.useContext(c.x),
        R = (0, p.Y)("MenuRadioItem"),
        P = i.useRef(null);
    i.useEffect(() => {
        T && (0, u.Y)(P);
    }, [T]);
    let D = i.useCallback(
        (e) => {
            N(e),
                null == w ||
                    w({
                        type: c.Q.RADIO,
                    });
        },
        [N, w],
    );
    return (0, r.jsxs)(
        s.DUT,
        O(
            y(
                {
                    innerRef: P,
                    className: o()(g.item, g.labelContainer, m.jV[t], {
                        [g.disabled]: S,
                        [g.focused]: T,
                    }),
                    onClick: S ? void 0 : D,
                },
                C,
            ),
            {
                "aria-checked": E,
                "aria-disabled": S,
                children: [
                    R
                        ? null != I &&
                          (0, r.jsx)(h.B, {
                              accessory: I,
                              isFocused: T,
                          })
                        : (0, d.O)(A)
                          ? A
                          : null != A &&
                            (0, r.jsx)("div", {
                                className: g.iconContainerLeft,
                                children: (0, r.jsx)(A, {
                                    color: "currentColor",
                                    className: g.icon,
                                }),
                            }),
                    (0, r.jsxs)("div", {
                        className: g.label,
                        children: [
                            (0, r.jsx)(_.V, {
                                children: (0, l.J)(null != a ? a : n, {
                                    isFocused: T,
                                    disabled: S,
                                }),
                            }),
                            null != b &&
                                (0, r.jsx)(s.EYj, {
                                    variant: "text-xs/normal",
                                    className: o()(g.subtext, {
                                        [g.subtextLineClamp]: null != v,
                                    }),
                                    lineClamp: v,
                                    children: b,
                                }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: g.iconContainer,
                        children: (0, r.jsx)(f.TN6, {
                            checked: E,
                            disabled: S,
                            radioItemIconClassName: g.radioIcon,
                        }),
                    }),
                ],
            },
        ),
    );
}

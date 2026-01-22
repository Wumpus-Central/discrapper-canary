n.d(t, { s: () => I });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(761224),
    c = n(670596),
    u = n(743236),
    d = n(525220),
    f = n(768581),
    p = n(106683),
    _ = n(939350),
    h = n(564546);
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
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = O(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function v(e, t, n) {
    let { emojiId: r, src: i, animated: a = !1 } = e;
    return null != r
        ? f.ZP.getEmojiURL({
              id: r,
              animated: a && (!n || t),
              size: 18,
          })
        : i;
}
function S(e, t, n) {
    switch (e.type) {
        case "icon": {
            let { type: t, icon: n, color: i = "currentColor", className: a } = e,
                s = y(e, ["type", "icon", "color", "className"]);
            return (0, r.jsx)("div", {
                className: h.iconContainerLeft,
                children: (0, r.jsx)(
                    n,
                    b(
                        g(
                            {
                                "aria-hidden": !0,
                                color: i,
                            },
                            s,
                        ),
                        { className: o()(h.icon, a) },
                    ),
                ),
            });
        }
        case "emoji": {
            let i = v(e, t, n);
            return (0, r.jsx)("div", {
                className: h.iconContainerLeft,
                children: (0, r.jsx)("img", {
                    "aria-hidden": !0,
                    alt: "",
                    src: i,
                    className: h.icon,
                }),
            });
        }
        case "image":
            return (0, r.jsx)("img", {
                "aria-hidden": !0,
                alt: "",
                src: e.src,
                className: h.imageAccessory,
            });
        case "avatar":
            return (0, r.jsx)("img", {
                "aria-hidden": !0,
                alt: "",
                src: e.src,
                className: h.avatarAccessory,
            });
    }
}
function I(e) {
    let {
            color: t = "default",
            label: n,
            icon: a,
            iconLeft: f,
            leadingAccessory: m,
            hint: E,
            subtext: y,
            subtextLineClamp: O,
            hasSubmenu: v,
            disabled: I,
            isFocused: T,
            menuItemProps: C,
            action: A,
            onClose: N,
            onFocus: P,
            className: w,
            focusedClassName: R,
            dontCloseOnActionIfHoldingShiftKey: D,
            dontCloseOnAction: x,
            iconProps: L,
        } = e,
        { onSelect: j, onInteraction: M } = i.useContext(c.p),
        { reducedMotion: k } = i.useContext(s.Sfi),
        U = i.useRef(null),
        G = i.useCallback(
            (e) => {
                var t;
                if ((null == M || M({ type: c.U.DEFAULT }), null == A)) return !1;
                (e.shiftKey && D) || x || N(),
                    e.persist(),
                    null == j || j(),
                    (null != (t = e.nativeEvent.view) ? t : window).requestAnimationFrame(() => A(e));
            },
            [A, N, j, D, x, M],
        );
    return (
        i.useEffect(() => {
            T && ((0, u.F)(U), null == P || P());
        }, [T, P]),
        (0, r.jsxs)(
            s.P3F,
            b(
                g(
                    {
                        innerRef: U,
                        className: o()(h.item, h.labelContainer, _._e[t], w, {
                            [h.disabled]: I,
                            [h.focused]: T,
                            [null != R ? R : ""]: T,
                        }),
                        onClick: I ? void 0 : G,
                        "aria-disabled": I,
                    },
                    C,
                ),
                {
                    "data-menu-item": "true",
                    children: [
                        null != f &&
                            (0, r.jsx)("div", {
                                className: h.iconContainerLeft,
                                children: (0, r.jsx)(
                                    f,
                                    b(g({ color: "currentColor" }, L), {
                                        className: o()(h.icon, null == L ? void 0 : L.className),
                                    }),
                                ),
                            }),
                        null != m && S(m, T, k.enabled),
                        (0, r.jsxs)("div", {
                            className: h.label,
                            children: [
                                (0, r.jsx)(p.i, { children: (0, l.I)(n, e) }),
                                null != y &&
                                    (0, r.jsx)(s.xvT, {
                                        variant: "text-xs/normal",
                                        className: o()(h.subtext, { [h.subtextLineClamp]: null != O }),
                                        lineClamp: O,
                                        children: y,
                                    }),
                            ],
                        }),
                        null != E &&
                            (0, r.jsx)("div", {
                                className: h.hintContainer,
                                children: (0, l.I)(E, e),
                            }),
                        (0, d.Y)(a)
                            ? a
                            : null != a &&
                              (0, r.jsx)("div", {
                                  className: h.iconContainer,
                                  children: (0, r.jsx)(
                                      a,
                                      b(g({ color: "currentColor" }, L), {
                                          className: o()(h.icon, null == L ? void 0 : L.className),
                                      }),
                                  ),
                              }),
                        v &&
                            (0, r.jsx)("div", {
                                className: h.iconContainer,
                                children: (0, r.jsx)(s.Fbu, {
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

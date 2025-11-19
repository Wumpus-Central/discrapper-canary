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
    _ = n(334405);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
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
function g(e, t) {
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
function E(e) {
    let {
            color: t = "default",
            label: n,
            icon: a,
            iconLeft: p,
            iconLeftSize: m = "md",
            hint: E,
            subtext: b,
            subtextLineClamp: y,
            hasSubmenu: O,
            disabled: v,
            isFocused: I,
            menuItemProps: T,
            action: S,
            onClose: A,
            onFocus: C,
            className: N,
            focusedClassName: R,
            subMenuIconClassName: P,
            dontCloseOnActionIfHoldingShiftKey: D,
            dontCloseOnAction: w,
            iconProps: L,
        } = e,
        { onSelect: x, onInteraction: M } = i.useContext(c.p),
        k = i.useRef(null),
        j = i.useCallback(
            (e) => {
                var t;
                if ((null == M || M({ type: c.U.DEFAULT }), null == S)) return !1;
                (e.shiftKey && D) || w || A(),
                    e.persist(),
                    null == x || x(),
                    (null != (t = e.nativeEvent.view) ? t : window).requestAnimationFrame(() => S(e));
            },
            [S, A, x, D, w, M],
        );
    return (
        i.useEffect(() => {
            I && ((0, u.F)(k), null == C || C());
        }, [I, C]),
        (0, r.jsxs)(
            s.P3F,
            g(
                h(
                    {
                        innerRef: k,
                        className: o()(_.item, _.labelContainer, f._e[t], N, {
                            [_.disabled]: v,
                            [_.focused]: I,
                            [null != R ? R : ""]: I,
                        }),
                        onClick: v ? void 0 : j,
                        "aria-disabled": v,
                    },
                    T,
                ),
                {
                    "data-menu-item": "true",
                    children: [
                        null != p &&
                            (0, r.jsx)("div", {
                                className: o()(_.iconContainerLeft, { [_.iconContainerLarge]: "lg" === m }),
                                children: (0, r.jsx)(
                                    p,
                                    g(h({ color: "currentColor" }, L), {
                                        className: o()(_.icon, null == L ? void 0 : L.className),
                                    }),
                                ),
                            }),
                        (0, r.jsxs)("div", {
                            className: _.label,
                            children: [
                                (0, l.I)(n, e),
                                null != b &&
                                    (0, r.jsx)(s.xvT, {
                                        variant: "text-xs/normal",
                                        className: o()(_.subtext, { [_.subtextLineClamp]: null != y }),
                                        lineClamp: y,
                                        children: b,
                                    }),
                            ],
                        }),
                        null != E &&
                            (0, r.jsx)("div", {
                                className: _.hintContainer,
                                children: (0, l.I)(E, e),
                            }),
                        (0, d.Y)(a)
                            ? a
                            : null != a &&
                              (0, r.jsx)("div", {
                                  className: _.iconContainer,
                                  children: (0, r.jsx)(
                                      a,
                                      g(h({ color: "currentColor" }, L), {
                                          className: o()(_.icon, null == L ? void 0 : L.className),
                                      }),
                                  ),
                              }),
                        O &&
                            (0, r.jsx)("div", {
                                className: _.iconContainer,
                                children: (0, r.jsx)(s.Fbu, {
                                    size: "md",
                                    color: "currentColor",
                                    className: o()(_.caret, P),
                                }),
                            }),
                    ],
                },
            ),
        )
    );
}

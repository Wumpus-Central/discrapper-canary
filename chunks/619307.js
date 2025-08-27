n.d(t, {
    Ph: () => x,
    UN: () => P,
    cY: () => C,
    gz: () => N,
    q4: () => M,
    s6: () => R,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    o = n(120356),
    a = n.n(o),
    s = n(924826),
    l = n(91192),
    c = n(1561),
    u = n(597442),
    d = n(235874),
    f = n(147479),
    _ = n(74655),
    p = n(481060),
    h = n(393238),
    m = n(434650),
    g = n(98650),
    E = n(388032),
    b = n(361421);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = S(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function A(e) {
    let { value: t, onChange: n, serialize: r = (e) => String(e) } = e;
    return {
        select: (e) => n(e),
        isSelected: (e) => e === t,
        clear: () => n(null),
        serialize: r,
    };
}
function C(e) {
    let { value: t, onChange: n, onSelectInteraction: r, serialize: i = (e) => String(e) } = e;
    return {
        select: (e) => {
            let { newValues: i, updated: o } = r(e, t);
            o && n(i);
        },
        isSelected: (e) => {
            var n;
            return null != (n = null == t ? void 0 : t.has(e)) && n;
        },
        clear: () => n(new Set()),
        serialize: i,
    };
}
function N(e, t) {
    let n = new Set(t);
    return (
        n.has(e) ? n.delete(e) : n.add(e),
        {
            newValues: n,
            updated: !0,
        }
    );
}
function R(e, t) {
    return t.has(e)
        ? {
              newValues: new Set(),
              updated: !0,
          }
        : {
              newValues: new Set([e]),
              updated: !0,
          };
}
function P(e, t) {
    return t.has(e)
        ? {
              newValues: t,
              updated: !1,
          }
        : {
              newValues: new Set([e]),
              updated: !0,
          };
}
function w(e) {
    return null == e ? void 0 : e.label;
}
function D(e) {
    return e.map((e) => w(e)).join(", ");
}
function x(e) {
    let {
            options: t,
            placeholder: n = E.intl.string(E.t.XqMe3N),
            className: o,
            isDisabled: s = !1,
            maxVisibleItems: l = 7,
            autoFocus: u = !1,
            popoutWidth: f,
            clearable: g = !1,
            size: y = "md",
            variant: v = "filled",
            onClose: S,
            onOpen: A,
            renderOptionLabel: C = w,
            renderOptionValue: N = D,
            popoutClassName: R,
            popoutPosition: P = "bottom",
            popoutLayerContext: x,
            optionClassName: j,
            closeOnSelect: M,
            select: k,
            isSelected: U,
            serialize: G,
            clear: B,
            hideIcon: Z = !1,
            isProcessing: F = !1,
            "aria-label": V,
            "aria-labelledby": H,
        } = e,
        [Y, W] = i.useState(!1),
        { ref: K, width: z, height: q } = (0, h.ZP)();
    i.useLayoutEffect(() => {
        s && W(!1);
    }, [s]);
    let X = i.useCallback(
            (e) => {
                Y === e || s || (W(e), e ? null == A || A() : null == S || S());
            },
            [s, S, A, Y],
        ),
        Q = i.useCallback(
            (e) => {
                Y && !e && X(!1);
            },
            [X, Y],
        ),
        J = (0, m.O)(Q),
        $ = i.useCallback(
            (e) => {
                if ((k(e), M)) {
                    var t;
                    null == (t = K.current) || t.focus();
                }
            },
            [k, M, K],
        ),
        ee = i.useCallback(
            (e) => {
                e.stopPropagation(), null == B || B();
            },
            [B],
        ),
        et = t.filter((e) => U(e.value));
    return (
        i.useLayoutEffect(() => {
            if (u) {
                var e;
                null == (e = K.current) || e.focus();
            }
        }, [u, K]),
        (0, r.jsx)(d.y, {
            targetElementRef: K,
            spacing: 0,
            animation: d.y.Animation.NONE,
            shouldShow: Y,
            onRequestOpen: () => {
                X(!0);
            },
            onRequestClose: () => {
                X(!1);
            },
            renderPopout: (e) => {
                let { closePopout: n, position: i, updatePosition: o } = e;
                return (0, r.jsx)(L, {
                    className: R,
                    closeOnSelect: M,
                    maxVisibleItems: l,
                    width: "auto" === f ? void 0 : null != f ? f : z,
                    isSelected: U,
                    closePopout: n,
                    buttonHeight: null != q ? q : 0,
                    onSelect: $,
                    options: t,
                    serialize: G,
                    renderOptionLabel: C,
                    optionClassName: j,
                    updatePosition: o,
                    popoutPosition: i,
                });
            },
            position: P,
            layerContext: x,
            children: (e, t) => {
                var { onClick: i, onKeyDown: l } = e,
                    u = T(e, ["onClick", "onKeyDown"]),
                    { isShown: d } = t;
                let f = d ? p.u04 : p.CJ0;
                return (0, r.jsxs)(
                    _.U,
                    I(
                        O(
                            {
                                as: c.P,
                                tag: "div",
                                role: "button",
                                disabled: s,
                                "aria-busy": F,
                                "aria-disabled": s,
                                innerRef: (e) => {
                                    (K.current = e), (J.current = e);
                                },
                                onClick: s
                                    ? void 0
                                    : (e) => {
                                          i(e), X(!Y);
                                      },
                                onKeyDown: (e) => {
                                    "ArrowDown" === e.key
                                        ? X(!0)
                                        : "Escape" === e.key && d && (e.stopPropagation(), X(!1)),
                                        l(e);
                                },
                            },
                            u,
                        ),
                        {
                            containerClassName: a()(b.container, o),
                            "data-size": y,
                            "data-variant": v,
                            className: b.select,
                            "aria-haspopup": "listbox",
                            "aria-expanded": d,
                            "aria-label": V,
                            "aria-labelledby": H,
                            children: [
                                et.length > 0
                                    ? (0, r.jsx)(p.Text, {
                                          className: b.value,
                                          variant: "text-md/medium",
                                          children: N(et),
                                      })
                                    : (0, r.jsx)("span", {
                                          className: b.placeholder,
                                          children: n,
                                      }),
                                (0, r.jsx)("div", {
                                    className: b.icons,
                                    children: F
                                        ? (0, r.jsx)(p.bbz, {
                                              dotRadius: 3.5,
                                              themed: !0,
                                          })
                                        : (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  g
                                                      ? (0, r.jsx)(c.P, {
                                                            role: "button",
                                                            "aria-disabled": s,
                                                            onClick: ee,
                                                            "aria-label": E.intl.string(E.t.VkKicX),
                                                            children: (0, r.jsx)(p.Dio, {
                                                                size: "xs",
                                                                color: "currentColor",
                                                                className: b.clear,
                                                            }),
                                                        })
                                                      : null,
                                                  Z
                                                      ? null
                                                      : (0, r.jsx)(f, {
                                                            color: "currentColor",
                                                            size: "sm",
                                                        }),
                                              ],
                                          }),
                                }),
                            ],
                        },
                    ),
                );
            },
        })
    );
}
function L(e) {
    let {
            className: t,
            onSelect: n,
            closePopout: o,
            closeOnSelect: c = !0,
            isSelected: d,
            options: _,
            width: p,
            maxVisibleItems: h,
            renderOptionLabel: m,
            serialize: E,
            optionClassName: y,
            buttonHeight: v,
            updatePosition: S,
            popoutPosition: A,
        } = e,
        [C, N] = i.useState(0),
        R = i.useRef(null),
        P = i.useId(),
        w = (0, s.ZP)({
            id: P,
            async scrollToEnd() {},
            async scrollToStart() {},
            isEnabled: !0,
            wrap: !0,
        }),
        D = i.useRef(null);
    (0, u.T)(D),
        i.useLayoutEffect(() => {
            var e;
            null == (e = D.current) || e.focus();
        }, []),
        i.useEffect(() => {
            v > 0 && S();
        }, [v, S]),
        (0, g.Z)(S),
        i.useLayoutEffect(() => {
            var e, t;
            let n = null == (t = R.current) || null == (e = t.getBoundingClientRect()) ? void 0 : e.height;
            null != n && N(n);
        }, [h, _.length]),
        i.useEffect(() => {
            S();
        }, [S, C]);
    let x = i.useCallback(
            (e, t) => {
                n(e), c && !t && o();
            },
            [o, n, c],
        ),
        L = i.useMemo(
            () =>
                _.map((e, t) => {
                    var n;
                    return (0, r.jsx)(
                        j,
                        {
                            isSelected: d(e.value),
                            value: e.value,
                            label: m(e),
                            onSelect: x,
                            className: y,
                            isDisabled: e.disabled,
                            preventCloseOnSelect: e.preventCloseOnSelect,
                            serialize: E,
                        },
                        null != (n = e.key) ? n : t,
                    );
                }),
            [x, d, y, _, m, E],
        ),
        M = _.length <= h ? f.xV : f.h2;
    return (0, r.jsx)(l.bG, {
        navigator: w,
        children: (0, r.jsx)(l.SJ, {
            children: (e) => {
                var { ref: n } = e,
                    i = T(e, ["ref"]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(
                            M,
                            I(
                                O(
                                    {
                                        className: a()(b.popout, t, { [b.popoutPositionTop]: "top" === A }),
                                        style: {
                                            width: p,
                                            maxHeight: C,
                                        },
                                        ref: (e) => {
                                            var t;
                                            let r = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null;
                                            (n.current = r), (D.current = r);
                                        },
                                    },
                                    i,
                                ),
                                {
                                    role: "listbox",
                                    children: L,
                                },
                            ),
                        ),
                        (0, r.jsx)("div", {
                            "aria-hidden": !0,
                            ref: R,
                            className: b.measurement,
                            children: L.slice(0, h),
                        }),
                    ],
                });
            },
        }),
    });
}
function j(e) {
    let {
            className: t,
            value: n,
            label: i,
            onSelect: o,
            isSelected: s,
            isDisabled: u,
            preventCloseOnSelect: d,
            serialize: f,
        } = e,
        _ = (0, l.JA)(f(n));
    return (0, r.jsxs)(
        c.P,
        I(
            O(
                {
                    focusProps: { enabled: !1 },
                    className: a()(b.option, t, { [b.optionDisabled]: u }),
                    onClick: () => !u && o(n, d),
                },
                _,
            ),
            {
                "aria-selected": s,
                "aria-disabled": u,
                role: "option",
                children: [
                    i,
                    s &&
                        (0, r.jsx)(p.owK, {
                            size: "custom",
                            color: "currentColor",
                            secondaryColor: "white",
                            className: b.selectedIcon,
                            width: 20,
                            height: 20,
                        }),
                ],
            },
        ),
    );
}
function M(e) {
    var { value: t, onChange: n } = e,
        i = T(e, ["value", "onChange"]);
    let o = A({
        value: t,
        onChange: n,
    });
    return (0, r.jsx)(x, O({}, i, o));
}

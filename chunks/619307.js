n.d(t, {
    Ph: () => w,
    UN: () => N,
    cY: () => S,
    gz: () => A,
    q4: () => x,
    s6: () => C,
}),
    n(388685),
    n(953529);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(924826),
    l = n(91192),
    c = n(793030),
    u = n(235874),
    d = n(74655),
    f = n(481060),
    _ = n(393238),
    p = n(434650),
    h = n(98650),
    m = n(388032),
    g = n(361421);
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
function b(e) {
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
function y(e, t) {
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
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = I(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function T(e) {
    let { value: t, onChange: n, serialize: r = (e) => String(e) } = e;
    return {
        select: (e) => n(e),
        isSelected: (e) => e === t,
        clear: () => n(null),
        serialize: r,
    };
}
function S(e) {
    let { value: t, onChange: n, onSelectInteraction: r, serialize: i = (e) => String(e) } = e;
    return {
        select: (e) => {
            let { newValues: i, updated: a } = r(e, t);
            a && n(i);
        },
        isSelected: (e) => {
            var n;
            return null != (n = null == t ? void 0 : t.has(e)) && n;
        },
        clear: () => n(new Set()),
        serialize: i,
    };
}
function A(e, t) {
    let n = new Set(t);
    return (
        n.has(e) ? n.delete(e) : n.add(e),
        {
            newValues: n,
            updated: !0,
        }
    );
}
function C(e, t) {
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
function N(e, t) {
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
function R(e) {
    return null == e ? void 0 : e.label;
}
function P(e) {
    return e.map((e) => R(e)).join(", ");
}
function w(e) {
    let {
            options: t,
            placeholder: n = m.intl.string(m.t.XqMe3N),
            className: a,
            isDisabled: s = !1,
            maxVisibleItems: l = 7,
            autoFocus: h = !1,
            popoutWidth: E,
            clearable: y = !1,
            size: I = "md",
            variant: T = "filled",
            onClose: S,
            onOpen: A,
            renderOptionLabel: C = R,
            renderOptionValue: N = P,
            popoutClassName: w,
            popoutPosition: L = "bottom",
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
            label: Y,
            description: W,
            helperText: K,
            errorMessage: z,
            successMessage: q,
        } = e,
        [X, Q] = i.useState(!1),
        { ref: J, width: $, height: ee } = (0, _.ZP)();
    i.useLayoutEffect(() => {
        s && Q(!1);
    }, [s]);
    let et = i.useCallback(
            (e) => {
                X === e || s || (Q(e), e ? null == A || A() : null == S || S());
            },
            [s, S, A, X],
        ),
        en = i.useCallback(
            (e) => {
                X && !e && et(!1);
            },
            [et, X],
        ),
        er = (0, p.O)(en),
        ei = i.useCallback(
            (e) => {
                if ((k(e), M)) {
                    var t;
                    null == (t = J.current) || t.focus();
                }
            },
            [k, M, J],
        ),
        ea = i.useCallback(
            (e) => {
                e.stopPropagation(), null == B || B();
            },
            [B],
        ),
        eo = t.filter((e) => U(e.value));
    return (
        i.useLayoutEffect(() => {
            if (h) {
                var e;
                null == (e = J.current) || e.focus();
            }
        }, [h, J]),
        (0, r.jsx)(u.y, {
            targetElementRef: J,
            spacing: 0,
            animation: u.y.Animation.NONE,
            shouldShow: X,
            onRequestOpen: () => {
                et(!0);
            },
            onRequestClose: () => {
                et(!1);
            },
            renderPopout: (e) => {
                let { closePopout: n, position: i, updatePosition: a } = e;
                return (0, r.jsx)(D, {
                    className: w,
                    closeOnSelect: M,
                    maxVisibleItems: l,
                    width: "auto" === E ? void 0 : null != E ? E : $,
                    isSelected: U,
                    closePopout: n,
                    buttonHeight: null != ee ? ee : 0,
                    onSelect: ei,
                    options: t,
                    serialize: G,
                    renderOptionLabel: C,
                    optionClassName: j,
                    updatePosition: a,
                    popoutPosition: i,
                });
            },
            position: L,
            layerContext: x,
            children: (e, t) => {
                var { onClick: i, onKeyDown: l } = e,
                    u = v(e, ["onClick", "onKeyDown"]),
                    { isShown: _ } = t;
                let p = _ ? f.u04 : f.CJ0;
                return (0, r.jsx)(c.NIc, {
                    label: Y,
                    description: W,
                    helperText: K,
                    errorMessage: z,
                    successMessage: q,
                    children: (e) =>
                        (0, r.jsxs)(
                            d.U,
                            O(
                                b(
                                    {
                                        as: f.P3F,
                                        tag: "div",
                                        role: "button",
                                        id: null == e ? void 0 : e.controlId,
                                        "aria-describedby": null == e ? void 0 : e.describedById,
                                        "aria-errormessage": null == e ? void 0 : e.errorMessageId,
                                        "aria-invalid": (null == e ? void 0 : e.errorMessageId) != null,
                                        disabled: s,
                                        "aria-busy": F,
                                        "aria-disabled": s,
                                        innerRef: (e) => {
                                            (J.current = e), (er.current = e);
                                        },
                                        onClick: s
                                            ? void 0
                                            : (e) => {
                                                  i(e), et(!X);
                                              },
                                        onKeyDown: (e) => {
                                            "ArrowDown" === e.key
                                                ? et(!0)
                                                : "Escape" === e.key && _ && (e.stopPropagation(), et(!1)),
                                                l(e);
                                        },
                                    },
                                    u,
                                ),
                                {
                                    containerClassName: o()(g.container, a),
                                    "data-size": I,
                                    "data-variant": T,
                                    className: g.select,
                                    "aria-haspopup": "listbox",
                                    "aria-expanded": _,
                                    "aria-label": V,
                                    "aria-labelledby": H,
                                    children: [
                                        eo.length > 0
                                            ? (0, r.jsx)(f.Text, {
                                                  className: g.value,
                                                  variant: "text-md/medium",
                                                  children: N(eo),
                                              })
                                            : (0, r.jsx)("span", {
                                                  className: g.placeholder,
                                                  children: n,
                                              }),
                                        (0, r.jsx)("div", {
                                            className: g.icons,
                                            children: F
                                                ? (0, r.jsx)(f.bbz, {
                                                      dotRadius: 3.5,
                                                      themed: !0,
                                                  })
                                                : (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          y
                                                              ? (0, r.jsx)(f.P3F, {
                                                                    role: "button",
                                                                    "aria-disabled": s,
                                                                    onClick: ea,
                                                                    "aria-label": m.intl.string(m.t.VkKicX),
                                                                    children: (0, r.jsx)(f.Dio, {
                                                                        size: "xs",
                                                                        color: "currentColor",
                                                                        className: g.clear,
                                                                    }),
                                                                })
                                                              : null,
                                                          Z
                                                              ? null
                                                              : (0, r.jsx)(p, {
                                                                    color: "currentColor",
                                                                    size: "sm",
                                                                }),
                                                      ],
                                                  }),
                                        }),
                                    ],
                                },
                            ),
                        ),
                });
            },
        })
    );
}
function D(e) {
    let {
            className: t,
            onSelect: n,
            closePopout: a,
            closeOnSelect: u = !0,
            isSelected: d,
            options: f,
            width: _,
            maxVisibleItems: p,
            renderOptionLabel: m,
            serialize: E,
            optionClassName: y,
            buttonHeight: I,
            updatePosition: T,
            popoutPosition: S,
        } = e,
        [A, C] = i.useState(0),
        N = i.useRef(null),
        R = i.useId(),
        P = (0, s.ZP)({
            id: R,
            async scrollToEnd() {},
            async scrollToStart() {},
            isEnabled: !0,
            wrap: !0,
        }),
        w = i.useRef(null);
    (0, c.Tbt)(w),
        i.useLayoutEffect(() => {
            var e;
            null == (e = w.current) || e.focus();
        }, []),
        i.useEffect(() => {
            I > 0 && T();
        }, [I, T]),
        (0, h.Z)(T),
        i.useLayoutEffect(() => {
            var e, t;
            let n = null == (t = N.current) || null == (e = t.getBoundingClientRect()) ? void 0 : e.height;
            null != n && C(n);
        }, [p, f.length]),
        i.useEffect(() => {
            T();
        }, [T, A]);
    let D = i.useCallback(
            (e, t) => {
                n(e), u && !t && a();
            },
            [a, n, u],
        ),
        x = i.useMemo(
            () =>
                f.map((e, t) => {
                    var n;
                    return (0, r.jsx)(
                        L,
                        {
                            isSelected: d(e.value),
                            value: e.value,
                            label: m(e),
                            onSelect: D,
                            className: y,
                            isDisabled: e.disabled,
                            preventCloseOnSelect: e.preventCloseOnSelect,
                            serialize: E,
                        },
                        null != (n = e.key) ? n : t,
                    );
                }),
            [D, d, y, f, m, E],
        ),
        j = f.length <= p ? c.xVE : c.h21;
    return (0, r.jsx)(l.bG, {
        navigator: P,
        children: (0, r.jsx)(l.SJ, {
            children: (e) => {
                var { ref: n } = e,
                    i = v(e, ["ref"]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(
                            j,
                            O(
                                b(
                                    {
                                        className: o()(g.popout, t, { [g.popoutPositionTop]: "top" === S }),
                                        style: {
                                            width: _,
                                            maxHeight: A,
                                        },
                                        ref: (e) => {
                                            var t;
                                            let r = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null;
                                            (n.current = r), (w.current = r);
                                        },
                                    },
                                    i,
                                ),
                                {
                                    role: "listbox",
                                    children: x,
                                },
                            ),
                        ),
                        (0, r.jsx)("div", {
                            "aria-hidden": !0,
                            ref: N,
                            className: g.measurement,
                            children: x.slice(0, p),
                        }),
                    ],
                });
            },
        }),
    });
}
function L(e) {
    let {
            className: t,
            value: n,
            label: i,
            onSelect: a,
            isSelected: s,
            isDisabled: c,
            preventCloseOnSelect: u,
            serialize: d,
        } = e,
        _ = (0, l.JA)(d(n));
    return (0, r.jsxs)(
        f.P3F,
        O(
            b(
                {
                    focusProps: { enabled: !1 },
                    className: o()(g.option, t, { [g.optionDisabled]: c }),
                    onClick: () => !c && a(n, u),
                },
                _,
            ),
            {
                "aria-selected": s,
                "aria-disabled": c,
                role: "option",
                children: [
                    i,
                    s &&
                        (0, r.jsx)(f.owK, {
                            size: "custom",
                            color: "currentColor",
                            secondaryColor: "white",
                            className: g.selectedIcon,
                            width: 20,
                            height: 20,
                        }),
                ],
            },
        ),
    );
}
function x(e) {
    var { value: t, onChange: n } = e,
        i = v(e, ["value", "onChange"]);
    let a = T({
        value: t,
        onChange: n,
    });
    return (0, r.jsx)(w, b({}, i, a));
}

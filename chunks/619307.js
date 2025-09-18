n.d(t, {
    Ph: () => D,
    UN: () => R,
    cY: () => A,
    gz: () => C,
    q4: () => j,
    s6: () => N,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(924826),
    l = n(91192),
    c = n(597442),
    u = n(235874),
    d = n(147479),
    f = n(74655),
    _ = n(481060),
    p = n(393238),
    h = n(434650),
    m = n(98650),
    g = n(388032),
    E = n(361421);
function b(e, t, n) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = T(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function S(e) {
    let { value: t, onChange: n, serialize: r = (e) => String(e) } = e;
    return {
        select: (e) => n(e),
        isSelected: (e) => e === t,
        clear: () => n(null),
        serialize: r,
    };
}
function A(e) {
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
function C(e, t) {
    let n = new Set(t);
    return (
        n.has(e) ? n.delete(e) : n.add(e),
        {
            newValues: n,
            updated: !0,
        }
    );
}
function N(e, t) {
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
function R(e, t) {
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
function P(e) {
    return null == e ? void 0 : e.label;
}
function w(e) {
    return e.map((e) => P(e)).join(", ");
}
function D(e) {
    let {
            options: t,
            placeholder: n = g.intl.string(g.t.XqMe3N),
            className: a,
            isDisabled: s = !1,
            maxVisibleItems: l = 7,
            autoFocus: c = !1,
            popoutWidth: d,
            clearable: m = !1,
            size: b = "md",
            variant: O = "filled",
            onClose: T,
            onOpen: S,
            renderOptionLabel: A = P,
            renderOptionValue: C = w,
            popoutClassName: N,
            popoutPosition: R = "bottom",
            popoutLayerContext: D,
            optionClassName: L,
            closeOnSelect: j,
            select: M,
            isSelected: k,
            serialize: U,
            clear: G,
            hideIcon: B = !1,
            isProcessing: Z = !1,
            "aria-label": F,
            "aria-labelledby": V,
        } = e,
        [H, Y] = i.useState(!1),
        { ref: W, width: K, height: z } = (0, p.ZP)();
    i.useLayoutEffect(() => {
        s && Y(!1);
    }, [s]);
    let q = i.useCallback(
            (e) => {
                H === e || s || (Y(e), e ? null == S || S() : null == T || T());
            },
            [s, T, S, H],
        ),
        X = i.useCallback(
            (e) => {
                H && !e && q(!1);
            },
            [q, H],
        ),
        Q = (0, h.O)(X),
        J = i.useCallback(
            (e) => {
                if ((M(e), j)) {
                    var t;
                    null == (t = W.current) || t.focus();
                }
            },
            [M, j, W],
        ),
        $ = i.useCallback(
            (e) => {
                e.stopPropagation(), null == G || G();
            },
            [G],
        ),
        ee = t.filter((e) => k(e.value));
    return (
        i.useLayoutEffect(() => {
            if (c) {
                var e;
                null == (e = W.current) || e.focus();
            }
        }, [c, W]),
        (0, r.jsx)(u.y, {
            targetElementRef: W,
            spacing: 0,
            animation: u.y.Animation.NONE,
            shouldShow: H,
            onRequestOpen: () => {
                q(!0);
            },
            onRequestClose: () => {
                q(!1);
            },
            renderPopout: (e) => {
                let { closePopout: n, position: i, updatePosition: a } = e;
                return (0, r.jsx)(x, {
                    className: N,
                    closeOnSelect: j,
                    maxVisibleItems: l,
                    width: "auto" === d ? void 0 : null != d ? d : K,
                    isSelected: k,
                    closePopout: n,
                    buttonHeight: null != z ? z : 0,
                    onSelect: J,
                    options: t,
                    serialize: U,
                    renderOptionLabel: A,
                    optionClassName: L,
                    updatePosition: a,
                    popoutPosition: i,
                });
            },
            position: R,
            layerContext: D,
            children: (e, t) => {
                var { onClick: i, onKeyDown: l } = e,
                    c = I(e, ["onClick", "onKeyDown"]),
                    { isShown: u } = t;
                let d = u ? _.u04 : _.CJ0;
                return (0, r.jsxs)(
                    f.U,
                    v(
                        y(
                            {
                                as: _.P3F,
                                tag: "div",
                                role: "button",
                                disabled: s,
                                "aria-busy": Z,
                                "aria-disabled": s,
                                innerRef: (e) => {
                                    (W.current = e), (Q.current = e);
                                },
                                onClick: s
                                    ? void 0
                                    : (e) => {
                                          i(e), q(!H);
                                      },
                                onKeyDown: (e) => {
                                    "ArrowDown" === e.key
                                        ? q(!0)
                                        : "Escape" === e.key && u && (e.stopPropagation(), q(!1)),
                                        l(e);
                                },
                            },
                            c,
                        ),
                        {
                            containerClassName: o()(E.container, a),
                            "data-size": b,
                            "data-variant": O,
                            className: E.select,
                            "aria-haspopup": "listbox",
                            "aria-expanded": u,
                            "aria-label": F,
                            "aria-labelledby": V,
                            children: [
                                ee.length > 0
                                    ? (0, r.jsx)(_.Text, {
                                          className: E.value,
                                          variant: "text-md/medium",
                                          children: C(ee),
                                      })
                                    : (0, r.jsx)("span", {
                                          className: E.placeholder,
                                          children: n,
                                      }),
                                (0, r.jsx)("div", {
                                    className: E.icons,
                                    children: Z
                                        ? (0, r.jsx)(_.bbz, {
                                              dotRadius: 3.5,
                                              themed: !0,
                                          })
                                        : (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  m
                                                      ? (0, r.jsx)(_.P3F, {
                                                            role: "button",
                                                            "aria-disabled": s,
                                                            onClick: $,
                                                            "aria-label": g.intl.string(g.t.VkKicX),
                                                            children: (0, r.jsx)(_.Dio, {
                                                                size: "xs",
                                                                color: "currentColor",
                                                                className: E.clear,
                                                            }),
                                                        })
                                                      : null,
                                                  B
                                                      ? null
                                                      : (0, r.jsx)(d, {
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
function x(e) {
    let {
            className: t,
            onSelect: n,
            closePopout: a,
            closeOnSelect: u = !0,
            isSelected: f,
            options: _,
            width: p,
            maxVisibleItems: h,
            renderOptionLabel: g,
            serialize: b,
            optionClassName: O,
            buttonHeight: T,
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
    (0, c.T)(D),
        i.useLayoutEffect(() => {
            var e;
            null == (e = D.current) || e.focus();
        }, []),
        i.useEffect(() => {
            T > 0 && S();
        }, [T, S]),
        (0, m.Z)(S),
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
                n(e), u && !t && a();
            },
            [a, n, u],
        ),
        j = i.useMemo(
            () =>
                _.map((e, t) => {
                    var n;
                    return (0, r.jsx)(
                        L,
                        {
                            isSelected: f(e.value),
                            value: e.value,
                            label: g(e),
                            onSelect: x,
                            className: O,
                            isDisabled: e.disabled,
                            preventCloseOnSelect: e.preventCloseOnSelect,
                            serialize: b,
                        },
                        null != (n = e.key) ? n : t,
                    );
                }),
            [x, f, O, _, g, b],
        ),
        M = _.length <= h ? d.xV : d.h2;
    return (0, r.jsx)(l.bG, {
        navigator: w,
        children: (0, r.jsx)(l.SJ, {
            children: (e) => {
                var { ref: n } = e,
                    i = I(e, ["ref"]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(
                            M,
                            v(
                                y(
                                    {
                                        className: o()(E.popout, t, { [E.popoutPositionTop]: "top" === A }),
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
                                    children: j,
                                },
                            ),
                        ),
                        (0, r.jsx)("div", {
                            "aria-hidden": !0,
                            ref: R,
                            className: E.measurement,
                            children: j.slice(0, h),
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
        f = (0, l.JA)(d(n));
    return (0, r.jsxs)(
        _.P3F,
        v(
            y(
                {
                    focusProps: { enabled: !1 },
                    className: o()(E.option, t, { [E.optionDisabled]: c }),
                    onClick: () => !c && a(n, u),
                },
                f,
            ),
            {
                "aria-selected": s,
                "aria-disabled": c,
                role: "option",
                children: [
                    i,
                    s &&
                        (0, r.jsx)(_.owK, {
                            size: "custom",
                            color: "currentColor",
                            secondaryColor: "white",
                            className: E.selectedIcon,
                            width: 20,
                            height: 20,
                        }),
                ],
            },
        ),
    );
}
function j(e) {
    var { value: t, onChange: n } = e,
        i = I(e, ["value", "onChange"]);
    let a = S({
        value: t,
        onChange: n,
    });
    return (0, r.jsx)(D, y({}, i, a));
}

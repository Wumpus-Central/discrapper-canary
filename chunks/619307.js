n.d(t, {
    Ph: () => L,
    UN: () => P,
    cY: () => A,
    gz: () => C,
    q4: () => k,
    s6: () => R
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(924826),
    l = n(91192),
    c = n(1561),
    u = n(597442),
    d = n(235874),
    f = n(147479),
    _ = n(481060),
    p = n(393238),
    h = n(434650),
    m = n(98650),
    g = n(748585),
    E = n(388032),
    b = n(142210);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
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
function I(e, t) {
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
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = T(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function N(e) {
    let { value: t, onChange: n, serialize: r = (e) => String(e) } = e;
    return {
        select: (e) => n(e),
        isSelected: (e) => e === t,
        clear: () => n(null),
        serialize: r
    };
}
function A(e) {
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
        serialize: i
    };
}
function C(e, t) {
    let n = new Set(t);
    return (
        n.has(e) ? n.delete(e) : n.add(e),
        {
            newValues: n,
            updated: !0
        }
    );
}
function R(e, t) {
    return t.has(e)
        ? {
              newValues: new Set(),
              updated: !0
          }
        : {
              newValues: new Set([e]),
              updated: !0
          };
}
function P(e, t) {
    return t.has(e)
        ? {
              newValues: t,
              updated: !1
          }
        : {
              newValues: new Set([e]),
              updated: !0
          };
}
function w(e) {
    return null == e ? void 0 : e.label;
}
function D(e) {
    return e.map((e) => w(e)).join(', ');
}
function L(e) {
    let { options: t, placeholder: n = E.NW.string(E.t.XqMe3N), className: o, isDisabled: s = !1, maxVisibleItems: l = 7, autoFocus: u = !1, popoutWidth: f, clearable: m = !1, look: y = g.q.FILLED, onClose: O, onOpen: T, renderOptionLabel: N = w, renderOptionValue: A = D, popoutClassName: C, popoutPosition: R = 'bottom', popoutLayerContext: P, optionClassName: L, closeOnSelect: M, select: k, isSelected: j, serialize: U, clear: G, hideIcon: B = !1, 'aria-label': F, 'aria-labelledby': V } = e,
        [Z, H] = i.useState(!1),
        { ref: W, width: Y, height: K } = (0, p.Z)();
    i.useLayoutEffect(() => {
        s && H(!1);
    }, [s]);
    let z = i.useCallback(
            (e) => {
                Z === e || s || (H(e), e ? null == T || T() : null == O || O());
            },
            [s, O, T, Z]
        ),
        q = i.useCallback(
            (e) => {
                Z && !e && z(!1);
            },
            [z, Z]
        ),
        Q = (0, h.O)(q),
        X = i.useCallback(
            (e) => {
                if ((k(e), M)) {
                    var t;
                    null == (t = W.current) || t.focus();
                }
            },
            [k, M, W]
        ),
        J = i.useCallback(
            (e) => {
                e.stopPropagation(), null == G || G();
            },
            [G]
        ),
        $ = t.filter((e) => j(e.value));
    return (
        i.useLayoutEffect(() => {
            if (u) {
                var e;
                null == (e = W.current) || e.focus();
            }
        }, [u, W]),
        (0, r.jsx)(d.y, {
            targetElementRef: W,
            spacing: 0,
            animation: d.y.Animation.NONE,
            shouldShow: Z,
            onRequestOpen: () => {
                z(!0);
            },
            onRequestClose: () => {
                z(!1);
            },
            renderPopout: (e) => {
                let { closePopout: n, position: i, updatePosition: o } = e;
                return (0, r.jsx)(x, {
                    className: C,
                    closeOnSelect: M,
                    maxVisibleItems: l,
                    width: 'auto' === f ? void 0 : null != f ? f : Y,
                    isSelected: j,
                    closePopout: n,
                    buttonHeight: null != K ? K : 0,
                    onSelect: X,
                    options: t,
                    serialize: U,
                    renderOptionLabel: N,
                    optionClassName: L,
                    updatePosition: o,
                    popoutPosition: i
                });
            },
            position: R,
            layerContext: P,
            children: (e, t) => {
                var { onClick: i, onKeyDown: l } = e,
                    u = S(e, ['onClick', 'onKeyDown']),
                    { isShown: d, position: f } = t;
                let p = d ? _.u04 : _.CJ0;
                return (0, r.jsxs)(
                    c.P,
                    I(
                        v(
                            {
                                role: 'button',
                                'aria-disabled': s,
                                innerRef: (e) => {
                                    (W.current = e), (Q.current = e);
                                },
                                onClick: s
                                    ? void 0
                                    : (e) => {
                                          i(e), z(!Z);
                                      },
                                onKeyDown: (e) => {
                                    'ArrowDown' === e.key ? z(!0) : 'Escape' === e.key && (e.stopPropagation(), z(!1)), l(e);
                                }
                            },
                            u
                        ),
                        {
                            className: a()(b.select, o, {
                                [b.open]: d,
                                [b.disabled]: s,
                                [b.selectPositionTop]: 'top' === f,
                                [b.lookFilled]: y === g.q.FILLED
                            }),
                            'aria-haspopup': 'listbox',
                            'aria-expanded': d,
                            'aria-label': F,
                            'aria-labelledby': V,
                            children: [
                                $.length > 0
                                    ? (0, r.jsx)(_.Text, {
                                          className: b.value,
                                          variant: 'text-md/medium',
                                          children: A($)
                                      })
                                    : (0, r.jsx)('span', {
                                          className: b.placeholder,
                                          children: n
                                      }),
                                (0, r.jsxs)('div', {
                                    className: b.icons,
                                    children: [
                                        m
                                            ? (0, r.jsx)(c.P, {
                                                  role: 'button',
                                                  'aria-disabled': s,
                                                  onClick: J,
                                                  'aria-label': E.NW.string(E.t.VkKicX),
                                                  children: (0, r.jsx)(_.Dio, {
                                                      size: 'xs',
                                                      color: 'currentColor',
                                                      className: b.clear
                                                  })
                                              })
                                            : null,
                                        B
                                            ? null
                                            : (0, r.jsx)(p, {
                                                  color: 'currentColor',
                                                  size: 'sm'
                                              })
                                    ]
                                })
                            ]
                        }
                    )
                );
            }
        })
    );
}
function x(e) {
    let { className: t, onSelect: n, closePopout: o, closeOnSelect: c = !0, isSelected: d, options: _, width: p, maxVisibleItems: h, renderOptionLabel: g, serialize: E, optionClassName: y, buttonHeight: O, updatePosition: T, popoutPosition: N } = e,
        [A, C] = i.useState(0),
        R = i.useRef(null),
        P = i.useId(),
        w = (0, s.ZP)({
            id: P,
            async scrollToEnd() {},
            async scrollToStart() {},
            isEnabled: !0,
            wrap: !0
        }),
        D = i.useRef(null);
    (0, u.T)(D),
        i.useLayoutEffect(() => {
            var e;
            null == (e = D.current) || e.focus();
        }, []),
        i.useEffect(() => {
            O > 0 && T();
        }, [O, T]),
        (0, m.Z)(T),
        i.useLayoutEffect(() => {
            var e, t;
            let n = null == (t = R.current) || null == (e = t.getBoundingClientRect()) ? void 0 : e.height;
            null != n && C(n);
        }, [h]),
        i.useEffect(() => {
            T();
        }, [T, A]);
    let L = i.useCallback(
            (e) => {
                n(e), c && o();
            },
            [o, n, c]
        ),
        x = i.useMemo(
            () =>
                _.map((e, t) => {
                    var n;
                    return (0, r.jsx)(
                        M,
                        {
                            isSelected: d(e.value),
                            value: e.value,
                            label: g(e),
                            onSelect: L,
                            className: y,
                            isDisabled: e.disabled,
                            serialize: E
                        },
                        null != (n = e.key) ? n : t
                    );
                }),
            [L, d, y, _, g, E]
        ),
        k = _.length <= h ? f.xV : f.h2;
    return (0, r.jsx)(l.bG, {
        navigator: w,
        children: (0, r.jsx)(l.SJ, {
            children: (e) => {
                var { ref: n } = e,
                    i = S(e, ['ref']);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(
                            k,
                            I(
                                v(
                                    {
                                        className: a()(b.popout, t, { [b.popoutPositionTop]: 'top' === N }),
                                        style: {
                                            width: p,
                                            maxHeight: A
                                        },
                                        ref: (e) => {
                                            var t;
                                            let r = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null;
                                            (n.current = r), (D.current = r);
                                        }
                                    },
                                    i
                                ),
                                {
                                    role: 'listbox',
                                    children: x
                                }
                            )
                        ),
                        (0, r.jsx)('div', {
                            'aria-hidden': !0,
                            ref: R,
                            className: b.measurement,
                            children: x.slice(0, h)
                        })
                    ]
                });
            }
        })
    });
}
function M(e) {
    let { className: t, value: n, label: i, onSelect: o, isSelected: s, isDisabled: u, serialize: d } = e,
        f = (0, l.JA)(d(n));
    return (0, r.jsxs)(
        c.P,
        I(
            v(
                {
                    focusProps: { enabled: !1 },
                    className: a()(b.option, t),
                    onClick: () => !u && o(n)
                },
                f
            ),
            {
                'aria-selected': s,
                'aria-disabled': u,
                role: 'option',
                children: [
                    i,
                    s &&
                        (0, r.jsx)(_.owK, {
                            size: 'custom',
                            color: 'currentColor',
                            secondaryColor: 'white',
                            className: b.selectedIcon,
                            width: 20,
                            height: 20
                        })
                ]
            }
        )
    );
}
function k(e) {
    var { value: t, onChange: n } = e,
        i = S(e, ['value', 'onChange']);
    let o = N({
        value: t,
        onChange: n
    });
    return (0, r.jsx)(L, v({}, i, o));
}

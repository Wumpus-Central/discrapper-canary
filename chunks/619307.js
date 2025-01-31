n.d(t, {
    Ph: () => C,
    UN: () => S,
    cY: () => I,
    gz: () => b,
    q4: () => D,
    s6: () => T
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(924826),
    l = n(91192),
    u = n(1561),
    c = n(597442),
    d = n(235874),
    f = n(147479),
    _ = n(481060),
    p = n(393238),
    h = n(434650),
    m = n(98650),
    g = n(748585),
    E = n(388032),
    v = n(736278);
function y(e) {
    let { value: t, onChange: n, serialize: i = (e) => String(e) } = e;
    return {
        select: (e) => n(e),
        isSelected: (e) => e === t,
        clear: () => n(null),
        serialize: i
    };
}
function I(e) {
    let { value: t, onChange: n, onSelectInteraction: i, serialize: r = (e) => String(e) } = e;
    return {
        select: (e) => {
            let { newValues: r, updated: a } = i(e, t);
            a && n(r);
        },
        isSelected: (e) => {
            var n;
            return null !== (n = null == t ? void 0 : t.has(e)) && void 0 !== n && n;
        },
        clear: () => n(new Set()),
        serialize: r
    };
}
function b(e, t) {
    let n = new Set(t);
    return (
        n.has(e) ? n.delete(e) : n.add(e),
        {
            newValues: n,
            updated: !0
        }
    );
}
function T(e, t) {
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
function S(e, t) {
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
function A(e) {
    return null == e ? void 0 : e.label;
}
function N(e) {
    return e.map((e) => A(e)).join(', ');
}
function C(e) {
    let { options: t, placeholder: n = E.intl.string(E.t.XqMe3N), className: a, isDisabled: o = !1, maxVisibleItems: l = 7, autoFocus: c = !1, popoutWidth: f, clearable: m = !1, look: y = g.q.FILLED, onClose: I, onOpen: b, renderOptionLabel: T = A, renderOptionValue: S = N, popoutClassName: C, popoutPosition: O = 'bottom', popoutLayerContext: D, optionClassName: x, closeOnSelect: L, select: P, isSelected: w, serialize: M, clear: k, hideIcon: U = !1, 'aria-label': G, 'aria-labelledby': B } = e,
        [Z, F] = r.useState(!1),
        { ref: V, width: j, height: H } = (0, p.Z)();
    r.useLayoutEffect(() => {
        o && F(!1);
    }, [o]);
    let Y = r.useCallback(
            (e) => {
                Z === e || o || (F(e), e ? null == b || b() : null == I || I());
            },
            [o, I, b, Z]
        ),
        W = r.useCallback(
            (e) => {
                Z && !e && Y(!1);
            },
            [Y, Z]
        ),
        K = (0, h.O)(W),
        z = r.useCallback(
            (e) => {
                if ((P(e), L)) {
                    var t;
                    null === (t = V.current) || void 0 === t || t.focus();
                }
            },
            [P, L, V]
        ),
        q = r.useCallback(
            (e) => {
                e.stopPropagation(), null == k || k();
            },
            [k]
        ),
        Q = t.filter((e) => w(e.value));
    r.useLayoutEffect(() => {
        if (c) {
            var e;
            null === (e = V.current) || void 0 === e || e.focus();
        }
    }, [c, V]);
    let X = (0, _.bWb)().enabled;
    return (0, i.jsx)(d.y, {
        spacing: 0,
        animation: d.y.Animation.NONE,
        shouldShow: Z,
        onRequestOpen: () => {
            Y(!0);
        },
        onRequestClose: () => {
            Y(!1);
        },
        renderPopout: (e) => {
            let { closePopout: n, position: r, updatePosition: a } = e;
            return (0, i.jsx)(R, {
                className: C,
                closeOnSelect: L,
                maxVisibleItems: l,
                width: null != f ? f : j,
                isSelected: w,
                closePopout: n,
                buttonHeight: null != H ? H : 0,
                onSelect: z,
                options: t,
                serialize: M,
                renderOptionLabel: T,
                optionClassName: x,
                updatePosition: a,
                popoutPosition: r
            });
        },
        position: O,
        layerContext: D,
        children: (e, t) => {
            let { onClick: r, onKeyDown: l, ...c } = e,
                { isShown: d, position: f } = t,
                p = d ? _.u04 : _.CJ0,
                h = X ? 18 : 24;
            return (0, i.jsxs)(u.P, {
                role: 'button',
                'aria-disabled': o,
                innerRef: (e) => {
                    (V.current = e), (K.current = e);
                },
                onClick: o
                    ? void 0
                    : (e) => {
                          r(e), Y(!Z);
                      },
                onKeyDown: (e) => {
                    'ArrowDown' === e.key ? Y(!0) : 'Escape' === e.key && (e.stopPropagation(), Y(!1)), l(e);
                },
                ...c,
                className: s()(v.select, a, {
                    [v.open]: d,
                    [v.disabled]: o,
                    [v.selectPositionTop]: 'top' === f,
                    [v.lookFilled]: y === g.q.FILLED
                }),
                'aria-haspopup': 'listbox',
                'aria-expanded': d,
                'aria-label': G,
                'aria-labelledby': B,
                children: [
                    Q.length > 0
                        ? (0, i.jsx)(_.Text, {
                              className: v.value,
                              variant: 'text-md/medium',
                              children: S(Q)
                          })
                        : (0, i.jsx)('span', {
                              className: v.placeholder,
                              children: n
                          }),
                    (0, i.jsxs)('div', {
                        className: v.icons,
                        children: [
                            m
                                ? (0, i.jsx)(u.P, {
                                      role: 'button',
                                      'aria-disabled': o,
                                      onClick: q,
                                      'aria-label': E.intl.string(E.t.VkKicX),
                                      children: (0, i.jsx)(_.Dio, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: v.clear
                                      })
                                  })
                                : null,
                            U
                                ? null
                                : (0, i.jsx)(p, {
                                      color: 'currentColor',
                                      size: 'custom',
                                      width: h,
                                      height: h
                                  })
                        ]
                    })
                ]
            });
        }
    });
}
function R(e) {
    let { className: t, onSelect: n, closePopout: a, closeOnSelect: u = !0, isSelected: d, options: _, width: p, maxVisibleItems: h, renderOptionLabel: g, serialize: E, optionClassName: y, buttonHeight: I, updatePosition: b, popoutPosition: T } = e,
        [S, A] = r.useState(0),
        N = r.useRef(null),
        C = r.useId(),
        R = (0, o.ZP)({
            id: C,
            async scrollToEnd() {},
            async scrollToStart() {},
            isEnabled: !0,
            wrap: !0
        }),
        D = r.useRef(null);
    (0, c.T)(D),
        r.useLayoutEffect(() => {
            var e;
            null === (e = D.current) || void 0 === e || e.focus();
        }, []),
        r.useEffect(() => {
            I > 0 && b();
        }, [I, b]),
        (0, m.Z)(b),
        r.useLayoutEffect(() => {
            var e, t;
            let n = null === (t = N.current) || void 0 === t ? void 0 : null === (e = t.getBoundingClientRect()) || void 0 === e ? void 0 : e.height;
            null != n && A(n);
        }, [h]),
        r.useEffect(() => {
            b();
        }, [b, S]);
    let x = r.useCallback(
            (e) => {
                n(e), u && a();
            },
            [a, n, u]
        ),
        L = _.map((e, t) => {
            var n;
            return (0, i.jsx)(
                O,
                {
                    isSelected: d(e.value),
                    value: e.value,
                    label: g(e),
                    onSelect: x,
                    className: y,
                    isDisabled: e.disabled,
                    serialize: E
                },
                null !== (n = e.key) && void 0 !== n ? n : t
            );
        }),
        P = _.length <= h ? f.xV : f.h2;
    return (0, i.jsx)(l.bG, {
        navigator: R,
        children: (0, i.jsx)(l.SJ, {
            children: (e) => {
                let { ref: n, ...r } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(P, {
                            className: s()(v.popout, t, { [v.popoutPositionTop]: 'top' === T }),
                            style: {
                                width: p,
                                maxHeight: S
                            },
                            ref: (e) => {
                                var t;
                                let i = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null;
                                (n.current = i), (D.current = i);
                            },
                            ...r,
                            role: 'listbox',
                            children: L
                        }),
                        (0, i.jsx)('div', {
                            'aria-hidden': !0,
                            ref: N,
                            className: v.measurement,
                            children: L.slice(0, h)
                        })
                    ]
                });
            }
        })
    });
}
function O(e) {
    let { className: t, value: n, label: r, onSelect: a, isSelected: o, isDisabled: c, serialize: d } = e,
        f = (0, l.JA)(d(n));
    return (0, i.jsxs)(u.P, {
        focusProps: { enabled: !1 },
        className: s()(v.option, t),
        onClick: () => !c && a(n),
        ...f,
        'aria-selected': o,
        'aria-disabled': c,
        role: 'option',
        children: [
            r,
            o &&
                (0, i.jsx)(_.owK, {
                    size: 'custom',
                    color: 'currentColor',
                    secondaryColor: 'white',
                    className: v.selectedIcon,
                    width: 20,
                    height: 20
                })
        ]
    });
}
function D(e) {
    let { value: t, onChange: n, ...r } = e,
        a = y({
            value: t,
            onChange: n
        });
    return (0, i.jsx)(C, {
        ...r,
        ...a
    });
}

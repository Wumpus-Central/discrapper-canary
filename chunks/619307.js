r.d(n, {
    Ph: function () {
        return D;
    },
    UN: function () {
        return N;
    },
    Vn: function () {
        return T;
    },
    cY: function () {
        return S;
    },
    gz: function () {
        return A;
    },
    nV: function () {
        return I;
    },
    q4: function () {
        return w;
    },
    s6: function () {
        return C;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(924826),
    c = r(91192),
    d = r(1561),
    f = r(597442),
    p = r(235874),
    h = r(147479),
    _ = r(481060),
    m = r(393238),
    g = r(434650),
    E = r(98650),
    v = r(748585),
    y = r(388032),
    b = r(736278);
function I(e) {
    let { value: n, onChange: r, serialize: i = (e) => String(e) } = e;
    return {
        select: (e) => r(e),
        isSelected: (e) => e === n,
        clear: () => r(null),
        serialize: i
    };
}
function T(e) {
    let { value: n, onChange: r, serialize: i = (e) => String(e) } = e;
    return {
        select: (e) => {
            let i = new Set(n);
            i.has(e) ? i.delete(e) : i.add(e), r(i);
        },
        isSelected: (e) => {
            var r;
            return null !== (r = null == n ? void 0 : n.has(e)) && void 0 !== r && r;
        },
        clear: () => r(new Set()),
        serialize: i
    };
}
function S(e) {
    let { value: n, onChange: r, onSelectInteraction: i, serialize: a = (e) => String(e) } = e;
    return {
        select: (e) => {
            let { newValues: a, updated: o } = i(e, n);
            if (!!o) r(a);
        },
        isSelected: (e) => {
            var r;
            return null !== (r = null == n ? void 0 : n.has(e)) && void 0 !== r && r;
        },
        clear: () => r(new Set()),
        serialize: a
    };
}
function A(e, n) {
    let r = new Set(n);
    return (
        r.has(e) ? r.delete(e) : r.add(e),
        {
            newValues: r,
            updated: !0
        }
    );
}
function C(e, n) {
    return n.has(e)
        ? {
              newValues: new Set(),
              updated: !0
          }
        : {
              newValues: new Set([e]),
              updated: !0
          };
}
function N(e, n) {
    return n.has(e)
        ? {
              newValues: n,
              updated: !1
          }
        : {
              newValues: new Set([e]),
              updated: !0
          };
}
function R(e) {
    return null == e ? void 0 : e.label;
}
function O(e) {
    return e.map((e) => R(e)).join(', ');
}
function D(e) {
    let { options: n, placeholder: r = y.intl.string(y.t.XqMe3N), className: i, isDisabled: s = !1, maxVisibleItems: u = 7, autoFocus: c = !1, popoutWidth: f, clearable: h = !1, look: E = v.q.FILLED, onClose: I, onOpen: T, renderOptionLabel: S = R, renderOptionValue: A = O, popoutClassName: C, popoutPosition: N = 'bottom', popoutLayerContext: D, optionClassName: L, closeOnSelect: w, select: P, isSelected: M, serialize: k, clear: U, hideIcon: B = !1, 'aria-label': G, 'aria-labelledby': Z } = e,
        [F, V] = o.useState(!1),
        { ref: j, width: H, height: Y } = (0, m.Z)(),
        W = o.useCallback(
            (e) => {
                F !== e && !s && (V(e), e ? null == T || T() : null == I || I());
            },
            [s, I, T, F]
        ),
        K = o.useCallback(
            (e) => {
                F && !e && W(!1);
            },
            [W, F]
        ),
        z = (0, g.O)(K),
        q = o.useCallback(
            (e) => {
                if ((P(e), w)) {
                    var n;
                    null === (n = j.current) || void 0 === n || n.focus();
                }
            },
            [P, w, j]
        ),
        Q = o.useCallback(
            (e) => {
                e.stopPropagation(), null == U || U();
            },
            [U]
        ),
        X = n.filter((e) => M(e.value));
    o.useLayoutEffect(() => {
        if (c) {
            var e;
            null === (e = j.current) || void 0 === e || e.focus();
        }
    }, [c, j]);
    let J = (0, _.useRedesignIconContext)().enabled;
    return (0, a.jsx)(p.y, {
        spacing: 0,
        animation: p.y.Animation.NONE,
        shouldShow: F,
        onRequestOpen: () => {
            W(!0);
        },
        onRequestClose: () => {
            W(!1);
        },
        renderPopout: (e) => {
            let { closePopout: r, position: i, updatePosition: o } = e;
            return (0, a.jsx)(x, {
                className: C,
                closeOnSelect: w,
                maxVisibleItems: u,
                width: null != f ? f : H,
                isSelected: M,
                closePopout: r,
                buttonHeight: null != Y ? Y : 0,
                onSelect: q,
                options: n,
                serialize: k,
                renderOptionLabel: S,
                optionClassName: L,
                updatePosition: o,
                popoutPosition: i
            });
        },
        position: N,
        layerContext: D,
        children: (e, n) => {
            let { onClick: o, onKeyDown: u, ...c } = e,
                { isShown: f, position: p } = n,
                m = f ? _.ChevronSmallUpIcon : _.ChevronSmallDownIcon,
                g = J ? 18 : 24;
            return (0, a.jsxs)(d.P, {
                role: 'button',
                'aria-disabled': s,
                innerRef: (e) => {
                    (j.current = e), (z.current = e);
                },
                onClick: s
                    ? void 0
                    : (e) => {
                          o(e), W(!F);
                      },
                onKeyDown: (e) => {
                    'ArrowDown' === e.key ? W(!0) : 'Escape' === e.key && (e.stopPropagation(), W(!1)), u(e);
                },
                ...c,
                className: l()(b.select, i, {
                    [b.open]: f,
                    [b.disabled]: s,
                    [b.selectPositionTop]: 'top' === p,
                    [b.lookFilled]: E === v.q.FILLED
                }),
                'aria-haspopup': 'listbox',
                'aria-expanded': f,
                'aria-label': G,
                'aria-labelledby': Z,
                children: [
                    X.length > 0
                        ? (0, a.jsx)('span', {
                              className: b.value,
                              children: A(X)
                          })
                        : (0, a.jsx)('span', {
                              className: b.placeholder,
                              children: r
                          }),
                    (0, a.jsxs)('div', {
                        className: b.icons,
                        children: [
                            h
                                ? (0, a.jsx)(d.P, {
                                      role: 'button',
                                      'aria-disabled': s,
                                      onClick: Q,
                                      'aria-label': y.intl.string(y.t.VkKicX),
                                      children: (0, a.jsx)(_.XSmallIcon, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: b.clear
                                      })
                                  })
                                : null,
                            B
                                ? null
                                : (0, a.jsx)(m, {
                                      color: 'currentColor',
                                      size: 'custom',
                                      width: g,
                                      height: g
                                  })
                        ]
                    })
                ]
            });
        }
    });
}
function x(e) {
    let { className: n, onSelect: r, closePopout: i, closeOnSelect: s = !0, isSelected: d, options: p, width: _, maxVisibleItems: m, renderOptionLabel: g, serialize: v, optionClassName: y, buttonHeight: I, updatePosition: T, popoutPosition: S } = e,
        [A, C] = o.useState(0),
        N = o.useRef(null),
        R = o.useId(),
        O = (0, u.ZP)({
            id: R,
            async scrollToEnd() {},
            async scrollToStart() {},
            isEnabled: !0,
            wrap: !0
        }),
        D = o.useRef(null);
    (0, f.T)(D),
        o.useLayoutEffect(() => {
            var e;
            null === (e = D.current) || void 0 === e || e.focus();
        }, []),
        o.useEffect(() => {
            I > 0 && T();
        }, [I, T]),
        (0, E.Z)(T),
        o.useLayoutEffect(() => {
            var e, n;
            let r = null === (n = N.current) || void 0 === n ? void 0 : null === (e = n.getBoundingClientRect()) || void 0 === e ? void 0 : e.height;
            null != r && C(r);
        }, [m]),
        o.useEffect(() => {
            T();
        }, [T, A]);
    let x = o.useCallback(
            (e) => {
                r(e), s && i();
            },
            [i, r, s]
        ),
        w = p.map((e, n) => {
            var r;
            return (0, a.jsx)(
                L,
                {
                    isSelected: d(e.value),
                    value: e.value,
                    label: g(e),
                    onSelect: x,
                    className: y,
                    isDisabled: e.disabled,
                    serialize: v
                },
                null !== (r = e.key) && void 0 !== r ? r : n
            );
        }),
        P = p.length <= m ? h.xV : h.h2;
    return (0, a.jsx)(c.bG, {
        navigator: O,
        children: (0, a.jsx)(c.SJ, {
            children: (e) => {
                let { ref: r, ...i } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(P, {
                            className: l()(b.popout, n, { [b.popoutPositionTop]: 'top' === S }),
                            style: {
                                width: _,
                                maxHeight: A
                            },
                            ref: (e) => {
                                var n;
                                let i = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null;
                                (r.current = i), (D.current = i);
                            },
                            ...i,
                            role: 'listbox',
                            children: w
                        }),
                        (0, a.jsx)('div', {
                            'aria-hidden': !0,
                            ref: N,
                            className: b.measurement,
                            children: w.slice(0, m)
                        })
                    ]
                });
            }
        })
    });
}
function L(e) {
    let { className: n, value: r, label: i, onSelect: o, isSelected: s, isDisabled: u, serialize: f } = e,
        p = (0, c.JA)(f(r));
    return (0, a.jsxs)(d.P, {
        focusProps: { enabled: !1 },
        className: l()(b.option, n),
        onClick: () => !u && o(r),
        ...p,
        'aria-selected': s,
        'aria-disabled': u,
        role: 'option',
        children: [
            i,
            s &&
                (0, a.jsx)(_.CircleCheckIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    secondaryColor: 'white',
                    className: b.selectedIcon,
                    width: 20,
                    height: 20
                })
        ]
    });
}
function w(e) {
    let { value: n, onChange: r, ...i } = e,
        o = I({
            value: n,
            onChange: r
        });
    return (0, a.jsx)(D, {
        ...i,
        ...o
    });
}

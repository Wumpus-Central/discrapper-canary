r.d(n, {
    Ph: function () {
        return D;
    },
    UN: function () {
        return C;
    },
    Vn: function () {
        return y;
    },
    cY: function () {
        return S;
    },
    gz: function () {
        return A;
    },
    nV: function () {
        return b;
    },
    q4: function () {
        return w;
    },
    s6: function () {
        return N;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(924826),
    c = r(91192),
    d = r(1561),
    f = r(597442),
    _ = r(235874),
    h = r(147479),
    p = r(481060),
    m = r(393238),
    g = r(434650),
    E = r(98650),
    v = r(748585),
    I = r(388032),
    T = r(736278);
function b(e) {
    let { value: n, onChange: r, serialize: i = (e) => String(e) } = e;
    return {
        select: (e) => r(e),
        isSelected: (e) => e === n,
        clear: () => r(null),
        serialize: i
    };
}
function y(e) {
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
            let { newValues: a, updated: s } = i(e, n);
            if (!!s) r(a);
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
function N(e, n) {
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
function C(e, n) {
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
    let { options: n, placeholder: r = I.intl.string(I.t.XqMe3N), className: i, isDisabled: o = !1, maxVisibleItems: u = 7, autoFocus: c = !1, popoutWidth: f, clearable: h = !1, look: E = v.q.FILLED, onClose: b, onOpen: y, renderOptionLabel: S = R, renderOptionValue: A = O, popoutClassName: N, popoutPosition: C = 'bottom', popoutLayerContext: D, optionClassName: x, closeOnSelect: w, select: P, isSelected: M, serialize: k, clear: U, hideIcon: B = !1, 'aria-label': G, 'aria-labelledby': Z } = e,
        [F, V] = s.useState(!1),
        { ref: j, width: H, height: Y } = (0, m.Z)(),
        W = s.useCallback(
            (e) => {
                F !== e && !o && (V(e), e ? null == y || y() : null == b || b());
            },
            [o, b, y, F]
        ),
        K = s.useCallback(
            (e) => {
                F && !e && W(!1);
            },
            [W, F]
        ),
        z = (0, g.O)(K),
        q = s.useCallback(
            (e) => {
                if ((P(e), w)) {
                    var n;
                    null === (n = j.current) || void 0 === n || n.focus();
                }
            },
            [P, w, j]
        ),
        Q = s.useCallback(
            (e) => {
                e.stopPropagation(), null == U || U();
            },
            [U]
        ),
        X = n.filter((e) => M(e.value));
    s.useLayoutEffect(() => {
        if (c) {
            var e;
            null === (e = j.current) || void 0 === e || e.focus();
        }
    }, [c, j]);
    let J = (0, p.useRedesignIconContext)().enabled;
    return (0, a.jsx)(_.y, {
        spacing: 0,
        animation: _.y.Animation.NONE,
        shouldShow: F,
        onRequestOpen: () => {
            W(!0);
        },
        onRequestClose: () => {
            W(!1);
        },
        renderPopout: (e) => {
            let { closePopout: r, position: i, updatePosition: s } = e;
            return (0, a.jsx)(L, {
                className: N,
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
                optionClassName: x,
                updatePosition: s,
                popoutPosition: i
            });
        },
        position: C,
        layerContext: D,
        children: (e, n) => {
            let { onClick: s, onKeyDown: u, ...c } = e,
                { isShown: f, position: _ } = n,
                m = f ? p.ChevronSmallUpIcon : p.ChevronSmallDownIcon,
                g = J ? 18 : 24;
            return (0, a.jsxs)(d.P, {
                role: 'button',
                'aria-disabled': o,
                innerRef: (e) => {
                    (j.current = e), (z.current = e);
                },
                onClick: o
                    ? void 0
                    : (e) => {
                          s(e), W(!F);
                      },
                onKeyDown: (e) => {
                    'ArrowDown' === e.key ? W(!0) : 'Escape' === e.key && (e.stopPropagation(), W(!1)), u(e);
                },
                ...c,
                className: l()(T.select, i, {
                    [T.open]: f,
                    [T.disabled]: o,
                    [T.selectPositionTop]: 'top' === _,
                    [T.lookFilled]: E === v.q.FILLED
                }),
                'aria-haspopup': 'listbox',
                'aria-expanded': f,
                'aria-label': G,
                'aria-labelledby': Z,
                children: [
                    X.length > 0
                        ? (0, a.jsx)('span', {
                              className: T.value,
                              children: A(X)
                          })
                        : (0, a.jsx)('span', {
                              className: T.placeholder,
                              children: r
                          }),
                    (0, a.jsxs)('div', {
                        className: T.icons,
                        children: [
                            h
                                ? (0, a.jsx)(d.P, {
                                      role: 'button',
                                      'aria-disabled': o,
                                      onClick: Q,
                                      'aria-label': I.intl.string(I.t.VkKicX),
                                      children: (0, a.jsx)(p.XSmallIcon, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: T.clear
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
function L(e) {
    let { className: n, onSelect: r, closePopout: i, closeOnSelect: o = !0, isSelected: d, options: _, width: p, maxVisibleItems: m, renderOptionLabel: g, serialize: v, optionClassName: I, buttonHeight: b, updatePosition: y, popoutPosition: S } = e,
        [A, N] = s.useState(0),
        C = s.useRef(null),
        R = s.useId(),
        O = (0, u.ZP)({
            id: R,
            async scrollToEnd() {},
            async scrollToStart() {},
            isEnabled: !0,
            wrap: !0
        }),
        D = s.useRef(null);
    (0, f.T)(D),
        s.useLayoutEffect(() => {
            var e;
            null === (e = D.current) || void 0 === e || e.focus();
        }, []),
        s.useEffect(() => {
            b > 0 && y();
        }, [b, y]),
        (0, E.Z)(y),
        s.useLayoutEffect(() => {
            var e, n;
            let r = null === (n = C.current) || void 0 === n ? void 0 : null === (e = n.getBoundingClientRect()) || void 0 === e ? void 0 : e.height;
            null != r && N(r);
        }, [m]),
        s.useEffect(() => {
            y();
        }, [y, A]);
    let L = s.useCallback(
            (e) => {
                r(e), o && i();
            },
            [i, r, o]
        ),
        w = _.map((e, n) => {
            var r;
            return (0, a.jsx)(
                x,
                {
                    isSelected: d(e.value),
                    value: e.value,
                    label: g(e),
                    onSelect: L,
                    className: I,
                    isDisabled: e.disabled,
                    serialize: v
                },
                null !== (r = e.key) && void 0 !== r ? r : n
            );
        }),
        P = _.length <= m ? h.xV : h.h2;
    return (0, a.jsx)(c.bG, {
        navigator: O,
        children: (0, a.jsx)(c.SJ, {
            children: (e) => {
                let { ref: r, ...i } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(P, {
                            className: l()(T.popout, n, { [T.popoutPositionTop]: 'top' === S }),
                            style: {
                                width: p,
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
                            ref: C,
                            className: T.measurement,
                            children: w.slice(0, m)
                        })
                    ]
                });
            }
        })
    });
}
function x(e) {
    let { className: n, value: r, label: i, onSelect: s, isSelected: o, isDisabled: u, serialize: f } = e,
        _ = (0, c.JA)(f(r));
    return (0, a.jsxs)(d.P, {
        focusProps: { enabled: !1 },
        className: l()(T.option, n),
        onClick: () => !u && s(r),
        ..._,
        'aria-selected': o,
        'aria-disabled': u,
        role: 'option',
        children: [
            i,
            o &&
                (0, a.jsx)(p.CircleCheckIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    secondaryColor: 'white',
                    className: T.selectedIcon,
                    width: 20,
                    height: 20
                })
        ]
    });
}
function w(e) {
    let { value: n, onChange: r, ...i } = e,
        s = b({
            value: n,
            onChange: r
        });
    return (0, a.jsx)(D, {
        ...i,
        ...s
    });
}

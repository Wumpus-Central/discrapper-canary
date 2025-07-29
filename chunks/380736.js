(n.d(t, {
    Y: () => N,
    Z: () => P
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(564854),
    l = n(442837),
    c = n(755721),
    u = n(481060),
    d = n(13245),
    _ = n(145597),
    f = n(691891),
    p = n(333031),
    h = n(610394),
    m = n(693091),
    g = n(981631),
    E = n(388032),
    b = n(560226);
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
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            }));
    }
    return e;
}
function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function A(e) {
    e.currentTarget.scrollTo(0, 0);
}
let N = i.memo(function (e) {
    let { maxBodyLines: t, expand: n = !1, onNotificationShow: a, onDismissClick: d, onConfirmClick: p, onCancelClick: m, onNotificationClick: y, hint: O, cancelText: v, confirmText: I, icon: T, body: S, title: N, renderFooter: C, contentOpacity: R, status: P, containerRef: w, className: D, wrapperClassName: L } = e,
        [x, M] = i.useState(!1),
        k = n || x || P === g._1z.FOCUSED,
        j = (0, l.e7)([h.ZP], () => h.ZP.isInputLocked((0, _.getPID)()));
    i.useEffect(() => {
        null == a || a();
    }, [a]);
    let U = i.useCallback(
            (e) => {
                (e.stopPropagation(), null == d || d(e));
            },
            [d]
        ),
        G = i.useCallback(
            (e) => {
                (e.stopPropagation(), null == p || p(e));
            },
            [p]
        ),
        B = i.useCallback(
            (e) => {
                (e.stopPropagation(), null == m || m(e));
            },
            [m]
        ),
        V = i.useCallback(() => {
            M(!0);
        }, []),
        F = i.useCallback(() => {
            M(!1);
        }, []);
    function Z() {
        return (0, r.jsx)(f.Z, {
            className: b.dismissButton,
            onDismiss: U,
            'aria-label': E.intl.string(E.t.LnEgqa)
        });
    }
    function H() {
        let e = 'function' == typeof O ? O(k, j) : O;
        return null != O
            ? (0, r.jsx)(u.Text, {
                  className: b.hint,
                  color: 'text-muted',
                  variant: 'text-xxs/medium',
                  children: e
              })
            : null;
    }
    function Y() {
        return null == p && null == m
            ? null
            : (0, r.jsxs)('div', {
                  className: b.buttonContainer,
                  children: [
                      null != p
                          ? (0, r.jsx)(c.zx, {
                                className: b.button,
                                size: c.zx.Sizes.SMALL,
                                color: c.zx.Colors.GREEN,
                                onClick: G,
                                children: null != I ? I : E.intl.string(E.t.BddRzc)
                            })
                          : null,
                      null != m
                          ? (0, r.jsx)(c.zx, {
                                className: b.button,
                                size: c.zx.Sizes.SMALL,
                                look: c.zx.Looks.OUTLINED,
                                color: c.zx.Colors.PRIMARY,
                                onClick: B,
                                children: null != v ? v : E.intl.string(E.t['ETE/oK'])
                            })
                          : null
                  ]
              });
    }
    function W() {
        return null == T
            ? null
            : 'string' == typeof T
              ? (0, r.jsx)(u.qEK, {
                    src: T,
                    size: u.EFr.SIZE_40,
                    className: b.avatar,
                    'aria-hidden': !0
                })
              : (0, r.jsx)('div', {
                    className: b.avatar,
                    children: T
                });
    }
    function K() {
        let e = null == C ? void 0 : C(k, j);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(s.animated.div, {
                    className: b.iconAndDetails,
                    style: { opacity: R },
                    children: [
                        W(),
                        (0, r.jsxs)('div', {
                            className: b.details,
                            children: [
                                (0, r.jsx)(u.Text, {
                                    color: 'interactive-normal',
                                    variant: 'text-sm/semibold',
                                    lineClamp: 2,
                                    children: N
                                }),
                                null != S
                                    ? (0, r.jsx)(u.Text, {
                                          color: 'interactive-normal',
                                          variant: 'text-sm/normal',
                                          lineClamp: null != t ? t * (k ? 2 : 1) : void 0,
                                          children: S
                                      })
                                    : null,
                                H(),
                                Y()
                            ]
                        })
                    ]
                }),
                null != e &&
                    (0, r.jsx)(u.P3F, {
                        className: b.footer,
                        ignoreKeyPress: !0,
                        onClick: (e) => e.stopPropagation(),
                        children: e
                    })
            ]
        });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: o()(b.overflowWrapper, L),
                onScroll: A,
                children: (0, r.jsx)(u.P3F, {
                    innerRef: w,
                    ignoreKeyPress: !0,
                    onMouseOver: V,
                    onMouseLeave: F,
                    onClick: y,
                    className: o()(b.container, { [b.clickable]: null != y }, D),
                    children: K()
                })
            }),
            Z()
        ]
    });
});
function C(e) {
    let {
        springs: { opacity: t, scale: n, transform: i, height: a },
        index: l,
        children: c,
        locked: u,
        animationWrapperClassName: d
    } = e;
    return (0, r.jsx)(s.animated.div, {
        className: o()(b.animationWrapper, d),
        style: {
            pointerEvents: u && 0 !== l ? 'none' : 'auto',
            zIndex: Math.max(5 - l, 0),
            opacity: t,
            transform: i.to((e) => 'translate3d(0, '.concat(e, 'px, 0)')),
            scale: n.to([0, 1], [0.7, 1]),
            height: a,
            maxWidth: 0 === l ? void 0 : '100%'
        },
        children: c
    });
}
function R(e) {
    let { observe: t, children: n } = e;
    return t
        ? (0, r.jsx)(p.Z, {
              className: b.clickZone,
              children: n
          })
        : n;
}
function P(e) {
    let { notification: t, index: n, locked: a, pinned: o, transitionState: s, cleanUp: l } = e,
        {
            id: c,
            props: { onNotificationShow: u, onDismissClick: _, onNotificationClick: f, onConfirmClick: p, onCancelClick: h, renderFooter: g, animationWrapperClassName: E }
        } = t,
        b = i.useCallback(() => {
            u(c);
        }, [u, c]),
        y = i.useCallback(
            (e) => {
                (d.Z.updateNotificationStatus(c), null == _ || _(e, c));
            },
            [c, _]
        ),
        v = i.useCallback(
            (e) => {
                null == f || f(e, c);
            },
            [f, c]
        ),
        S = i.useCallback(
            (e) => {
                null == p || p(e, c);
            },
            [p, c]
        ),
        A = i.useCallback(
            (e) => {
                null == h || h(e, c);
            },
            [h, c]
        ),
        P = i.useCallback((e, t) => (null == g ? void 0 : g(e, c, t)), [g, c]),
        {
            props: { onNotificationShow: w, onDismissClick: D, renderFooter: L, onNotificationClick: x, onConfirmClick: M, onCancelClick: k, disableClickableRegions: j = !1 },
            status: U
        } = t,
        G = T(t.props, ['onNotificationShow', 'onDismissClick', 'renderFooter', 'onNotificationClick', 'onConfirmClick', 'onCancelClick', 'disableClickableRegions']),
        B = !o && a,
        V = 0 === n && !j && !B,
        { ref: F, springs: Z } = (0, m.X4)(t.id, s, l);
    return (0, r.jsx)(C, {
        transitionState: s,
        springs: Z,
        index: n,
        locked: a,
        animationWrapperClassName: E,
        children: (0, r.jsx)(R, {
            observe: V,
            children: (0, r.jsx)(
                N,
                I(O({}, G), {
                    title: 'function' == typeof G.title ? G.title(y) : G.title,
                    containerRef: F,
                    notificationId: t.id,
                    onNotificationShow: 0 === n ? b : void 0,
                    onDismissClick: y,
                    onNotificationClick: null != f ? v : void 0,
                    onConfirmClick: null != p ? S : void 0,
                    onCancelClick: null != h ? A : void 0,
                    renderFooter: P,
                    expand: !1,
                    index: n,
                    locked: a,
                    status: U,
                    contentOpacity: Z.contentOpacity
                })
            )
        })
    });
}

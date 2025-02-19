n.d(t, {
    QR: () => b,
    Yj: () => O,
    ZP: () => j
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(642128),
    s = n(481060),
    c = n(13245),
    u = n(809357),
    d = n(691891),
    f = n(44359),
    m = n(333031),
    p = n(693091),
    h = n(981631),
    v = n(388032),
    g = n(825499);
function b(e, t, n) {
    return (0, r.jsx)(y, {
        keybind: e,
        message: t,
        messageWithoutKeybind: n
    });
}
function y(e) {
    let { keybind: t, message: n, messageWithoutKeybind: i } = e,
        l = (0, u.o)();
    return (0, r.jsx)(r.Fragment, {
        children: l
            ? v.NW.format(n, {
                  keybind: t,
                  keybindHook: (e) => (0, r.jsx)(f.Z, { keybind: t }, t.join('+'))
              })
            : i
    });
}
function E(e) {
    e.currentTarget.scrollTo(0, 0);
}
let O = i.memo(function (e) {
    let { maxBodyLines: t, expand: n = !1, onNotificationShow: l, onDismissClick: c, onConfirmClick: u, onCancelClick: f, onNotificationClick: m, hint: p, cancelText: b, confirmText: y, icon: O, body: S, title: j, renderFooter: x, contentOpacity: Z, status: w, containerRef: C, className: P, wrapperClassName: N } = e,
        [I, R] = i.useState(!1),
        _ = n || I || w === h._1z.FOCUSED;
    i.useEffect(() => {
        null == l || l();
    }, [l]);
    let k = i.useCallback(
            (e) => {
                e.stopPropagation(), null == c || c(e);
            },
            [c]
        ),
        A = i.useCallback(
            (e) => {
                e.stopPropagation(), null == u || u(e);
            },
            [u]
        ),
        T = i.useCallback(
            (e) => {
                e.stopPropagation(), null == f || f(e);
            },
            [f]
        ),
        D = i.useCallback(() => {
            R(!0);
        }, []),
        M = i.useCallback(() => {
            R(!1);
        }, []);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: a()(g.overflowWrapper, N),
                onScroll: E,
                children: (0, r.jsx)(s.P3F, {
                    innerRef: C,
                    ignoreKeyPress: !0,
                    onMouseOver: D,
                    onMouseLeave: M,
                    onClick: m,
                    className: a()(g.container, { [g.clickable]: null != m }, P),
                    children: (function () {
                        let e = null == x ? void 0 : x(_);
                        return (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)(o.animated.div, {
                                    className: g.iconAndDetails,
                                    style: { opacity: Z },
                                    children: [
                                        null == O
                                            ? null
                                            : 'string' == typeof O
                                              ? (0, r.jsx)(s.qEK, {
                                                    src: O,
                                                    size: s.EFr.SIZE_40,
                                                    className: g.avatar,
                                                    'aria-hidden': !0
                                                })
                                              : (0, r.jsx)('div', {
                                                    className: g.avatar,
                                                    children: O
                                                }),
                                        (0, r.jsxs)('div', {
                                            className: g.details,
                                            children: [
                                                (0, r.jsx)(s.Text, {
                                                    color: 'interactive-normal',
                                                    variant: 'text-sm/semibold',
                                                    lineClamp: 2,
                                                    children: j
                                                }),
                                                null != S
                                                    ? (0, r.jsx)(s.Text, {
                                                          color: 'interactive-normal',
                                                          variant: 'text-sm/normal',
                                                          lineClamp: null != t ? t * (_ ? 2 : 1) : void 0,
                                                          children: S
                                                      })
                                                    : null,
                                                (function () {
                                                    let e = 'function' == typeof p ? p(_) : p;
                                                    return null != p
                                                        ? (0, r.jsx)(s.Text, {
                                                              className: g.hint,
                                                              color: 'text-muted',
                                                              variant: 'text-xxs/medium',
                                                              children: e
                                                          })
                                                        : null;
                                                })(),
                                                null == u && null == f
                                                    ? null
                                                    : (0, r.jsxs)('div', {
                                                          className: g.buttonContainer,
                                                          children: [
                                                              null != u
                                                                  ? (0, r.jsx)(s.zxk, {
                                                                        className: g.button,
                                                                        size: s.zxk.Sizes.SMALL,
                                                                        color: s.zxk.Colors.GREEN,
                                                                        onClick: A,
                                                                        children: null != y ? y : v.NW.string(v.t.BddRzc)
                                                                    })
                                                                  : null,
                                                              null != f
                                                                  ? (0, r.jsx)(s.zxk, {
                                                                        className: g.button,
                                                                        size: s.zxk.Sizes.SMALL,
                                                                        look: s.zxk.Looks.OUTLINED,
                                                                        color: s.zxk.Colors.PRIMARY,
                                                                        onClick: T,
                                                                        children: null != b ? b : v.NW.string(v.t['ETE/oK'])
                                                                    })
                                                                  : null
                                                          ]
                                                      })
                                            ]
                                        })
                                    ]
                                }),
                                null != e &&
                                    (0, r.jsx)(s.P3F, {
                                        className: g.footer,
                                        ignoreKeyPress: !0,
                                        onClick: (e) => e.stopPropagation(),
                                        children: e
                                    })
                            ]
                        });
                    })()
                })
            }),
            (0, r.jsx)(d.Z, {
                className: g.dismissButton,
                onDismiss: k,
                'aria-label': v.NW.string(v.t.LnEgqa)
            })
        ]
    });
});
function S(e) {
    let {
        springs: { opacity: t, scale: n, transform: i, height: l },
        index: a,
        children: s,
        locked: c
    } = e;
    return (0, r.jsx)(o.animated.div, {
        className: g.animationWrapper,
        style: {
            pointerEvents: c && 0 !== a ? 'none' : 'auto',
            zIndex: Math.max(5 - a, 0),
            opacity: t,
            transform: i.to((e) => 'translate3d(0, '.concat(e, 'px, 0)')),
            scale: n.to([0, 1], [0.7, 1]),
            height: l
        },
        children: s
    });
}
function j(e) {
    var t, n;
    let { notification: l, index: a, locked: o, transitionState: s, cleanUp: u } = e,
        {
            id: d,
            props: { onNotificationShow: f, onDismissClick: h, onNotificationClick: v, onConfirmClick: b, onCancelClick: y, renderFooter: E }
        } = l,
        j = i.useCallback(() => {
            f(d);
        }, [f, d]),
        x = i.useCallback(
            (e) => {
                c.Z.updateNotificationStatus(d), null == h || h(e, d);
            },
            [d, h]
        ),
        Z = i.useCallback(
            (e) => {
                null == v || v(e, d);
            },
            [v, d]
        ),
        w = i.useCallback(
            (e) => {
                null == b || b(e, d);
            },
            [b, d]
        ),
        C = i.useCallback(
            (e) => {
                null == y || y(e, d);
            },
            [y, d]
        ),
        P = i.useCallback((e) => (null == E ? void 0 : E(e, d)), [E, d]),
        {
            props: { onNotificationShow: N, onDismissClick: I, renderFooter: R, onNotificationClick: _, onConfirmClick: k, onCancelClick: A },
            status: T
        } = l,
        D = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(l.props, ['onNotificationShow', 'onDismissClick', 'renderFooter', 'onNotificationClick', 'onConfirmClick', 'onCancelClick']),
        { ref: M, springs: L } = (0, p.X4)(l.id, s, u);
    return (0, r.jsx)(S, {
        transitionState: s,
        springs: L,
        index: a,
        locked: o,
        children: (0, r.jsx)(m.Z, {
            observe: 0 === a,
            className: g.clickZone,
            children: (0, r.jsx)(
                O,
                ((t = (function (e) {
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
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, D)),
                (n = n =
                    {
                        title: 'function' == typeof D.title ? D.title(x) : D.title,
                        containerRef: M,
                        notificationId: l.id,
                        onNotificationShow: 0 === a ? j : void 0,
                        onDismissClick: x,
                        onNotificationClick: null != v ? Z : void 0,
                        onConfirmClick: null != b ? w : void 0,
                        onCancelClick: null != y ? C : void 0,
                        renderFooter: P,
                        expand: !1,
                        index: a,
                        locked: o,
                        status: T,
                        contentOpacity: L.contentOpacity
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t)
            )
        })
    });
}

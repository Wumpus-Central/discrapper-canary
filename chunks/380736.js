(n.d(t, {
    Y: () => x,
    Z: () => w
}),
    n(388685));
var i = n(255367),
    r = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(264738),
    c = n(442837),
    a = n(755721),
    u = n(481060),
    d = n(13245),
    h = n(145597),
    p = n(691891),
    m = n(333031),
    b = n(610394),
    f = n(693091),
    v = n(981631),
    g = n(388032),
    y = n(560226);
function O(e) {
    e.currentTarget.scrollTo(0, 0);
}
let x = r.memo(function (e) {
    let { maxBodyLines: t, expand: n = !1, onNotificationShow: l, onDismissClick: d, onConfirmClick: m, onCancelClick: f, onNotificationClick: x, hint: C, cancelText: j, confirmText: w, icon: P, body: k, title: Z, renderFooter: E, contentOpacity: S, status: z, containerRef: N, className: D, wrapperClassName: T } = e,
        [M, L] = r.useState(!1),
        R = n || M || z === v._1z.FOCUSED,
        I = (0, c.e7)([b.ZP], () => b.ZP.isInputLocked((0, h.getPID)()));
    r.useEffect(() => {
        null == l || l();
    }, [l]);
    let W = r.useCallback(
            (e) => {
                (e.stopPropagation(), null == d || d(e));
            },
            [d]
        ),
        _ = r.useCallback(
            (e) => {
                (e.stopPropagation(), null == m || m(e));
            },
            [m]
        ),
        A = r.useCallback(
            (e) => {
                (e.stopPropagation(), null == f || f(e));
            },
            [f]
        ),
        U = r.useCallback(() => {
            L(!0);
        }, []),
        F = r.useCallback(() => {
            L(!1);
        }, []);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: o()(y.overflowWrapper, T),
                onScroll: O,
                children: (0, i.jsx)(u.P3F, {
                    innerRef: N,
                    ignoreKeyPress: !0,
                    onMouseOver: U,
                    onMouseLeave: F,
                    onClick: x,
                    className: o()(y.container, { [y.clickable]: null != x }, D),
                    children: (function () {
                        let e = null == E ? void 0 : E(R, I);
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(s.animated.div, {
                                    className: y.iconAndDetails,
                                    style: { opacity: S },
                                    children: [
                                        null == P
                                            ? null
                                            : 'string' == typeof P
                                              ? (0, i.jsx)(u.qEK, {
                                                    src: P,
                                                    size: u.EFr.SIZE_40,
                                                    className: y.avatar,
                                                    'aria-hidden': !0
                                                })
                                              : (0, i.jsx)('div', {
                                                    className: y.avatar,
                                                    children: P
                                                }),
                                        (0, i.jsxs)('div', {
                                            className: y.details,
                                            children: [
                                                (0, i.jsx)(u.Text, {
                                                    color: 'interactive-normal',
                                                    variant: 'text-sm/semibold',
                                                    lineClamp: 2,
                                                    children: Z
                                                }),
                                                null != k
                                                    ? (0, i.jsx)(u.Text, {
                                                          color: 'interactive-normal',
                                                          variant: 'text-sm/normal',
                                                          lineClamp: null != t ? t * (R ? 2 : 1) : void 0,
                                                          children: k
                                                      })
                                                    : null,
                                                (function () {
                                                    let e = 'function' == typeof C ? C(R, I) : C;
                                                    return null != C
                                                        ? (0, i.jsx)(u.Text, {
                                                              className: y.hint,
                                                              color: 'text-muted',
                                                              variant: 'text-xxs/medium',
                                                              children: e
                                                          })
                                                        : null;
                                                })(),
                                                null == m && null == f
                                                    ? null
                                                    : (0, i.jsxs)('div', {
                                                          className: y.buttonContainer,
                                                          children: [
                                                              null != m
                                                                  ? (0, i.jsx)(a.zx, {
                                                                        className: y.button,
                                                                        size: a.zx.Sizes.SMALL,
                                                                        color: a.zx.Colors.GREEN,
                                                                        onClick: _,
                                                                        children: null != w ? w : g.intl.string(g.t.BddRzc)
                                                                    })
                                                                  : null,
                                                              null != f
                                                                  ? (0, i.jsx)(a.zx, {
                                                                        className: y.button,
                                                                        size: a.zx.Sizes.SMALL,
                                                                        look: a.zx.Looks.OUTLINED,
                                                                        color: a.zx.Colors.PRIMARY,
                                                                        onClick: A,
                                                                        children: null != j ? j : g.intl.string(g.t['ETE/oK'])
                                                                    })
                                                                  : null
                                                          ]
                                                      })
                                            ]
                                        })
                                    ]
                                }),
                                null != e &&
                                    (0, i.jsx)(u.P3F, {
                                        className: y.footer,
                                        ignoreKeyPress: !0,
                                        onClick: (e) => e.stopPropagation(),
                                        children: e
                                    })
                            ]
                        });
                    })()
                })
            }),
            (0, i.jsx)(p.Z, {
                className: y.dismissButton,
                onDismiss: W,
                'aria-label': g.intl.string(g.t.LnEgqa)
            })
        ]
    });
});
function C(e) {
    let {
        springs: { opacity: t, scale: n, transform: r, height: l },
        index: c,
        children: a,
        locked: u,
        animationWrapperClassName: d
    } = e;
    return (0, i.jsx)(s.animated.div, {
        className: o()(y.animationWrapper, d),
        style: {
            pointerEvents: u && 0 !== c ? 'none' : 'auto',
            zIndex: Math.max(5 - c, 0),
            opacity: t,
            transform: r.to((e) => 'translate3d(0, '.concat(e, 'px, 0)')),
            scale: n.to([0, 1], [0.7, 1]),
            height: l,
            maxWidth: 0 === c ? void 0 : '100%'
        },
        children: a
    });
}
function j(e) {
    let { observe: t, children: n } = e;
    return t
        ? (0, i.jsx)(m.Z, {
              className: y.clickZone,
              children: n
          })
        : n;
}
function w(e) {
    var t, n;
    let { notification: l, index: o, locked: s, pinned: c, transitionState: a, cleanUp: u } = e,
        {
            id: h,
            props: { onNotificationShow: p, onDismissClick: m, onNotificationClick: b, onConfirmClick: v, onCancelClick: g, renderFooter: y, animationWrapperClassName: O }
        } = l,
        w = r.useCallback(() => {
            p(h);
        }, [p, h]),
        P = r.useCallback(
            (e) => {
                (d.Z.updateNotificationStatus(h), null == m || m(e, h));
            },
            [h, m]
        ),
        k = r.useCallback(
            (e) => {
                null == b || b(e, h);
            },
            [b, h]
        ),
        Z = r.useCallback(
            (e) => {
                null == v || v(e, h);
            },
            [v, h]
        ),
        E = r.useCallback(
            (e) => {
                null == g || g(e, h);
            },
            [g, h]
        ),
        S = r.useCallback((e, t) => (null == y ? void 0 : y(e, h, t)), [y, h]),
        {
            props: { onNotificationShow: z, onDismissClick: N, renderFooter: D, onNotificationClick: T, onConfirmClick: M, onCancelClick: L, disableClickableRegions: R = !1 },
            status: I
        } = l,
        W = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        l = Object.keys(e);
                    for (i = 0; i < l.length; i++) ((n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (i = 0; i < l.length; i++) ((n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
            }
            return r;
        })(l.props, ['onNotificationShow', 'onDismissClick', 'renderFooter', 'onNotificationClick', 'onConfirmClick', 'onCancelClick', 'disableClickableRegions']),
        _ = !c && s,
        A = 0 === o && !R && !_,
        { ref: U, springs: F } = (0, f.X4)(l.id, a, u);
    return (0, i.jsx)(C, {
        transitionState: a,
        springs: F,
        index: o,
        locked: s,
        animationWrapperClassName: O,
        children: (0, i.jsx)(j, {
            observe: A,
            children: (0, i.jsx)(
                x,
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            i.forEach(function (t) {
                                var i;
                                ((i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = i));
                            }));
                    }
                    return e;
                })({}, W)),
                (n = n =
                    {
                        title: 'function' == typeof W.title ? W.title(P) : W.title,
                        containerRef: U,
                        notificationId: l.id,
                        onNotificationShow: 0 === o ? w : void 0,
                        onDismissClick: P,
                        onNotificationClick: null != b ? k : void 0,
                        onConfirmClick: null != v ? Z : void 0,
                        onCancelClick: null != g ? E : void 0,
                        renderFooter: S,
                        expand: !1,
                        index: o,
                        locked: s,
                        status: I,
                        contentOpacity: F.contentOpacity
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
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

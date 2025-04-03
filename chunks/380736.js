n.d(t, {
    Y: () => O,
    Z: () => j
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    l = n.n(o),
    s = n(642128),
    c = n(442837),
    a = n(481060),
    u = n(13245),
    d = n(145597),
    h = n(691891),
    p = n(333031),
    m = n(610394),
    b = n(693091),
    f = n(981631),
    v = n(388032),
    g = n(560226);
function y(e) {
    e.currentTarget.scrollTo(0, 0);
}
let O = i.memo(function (e) {
    let { maxBodyLines: t, expand: n = !1, onNotificationShow: o, onDismissClick: u, onConfirmClick: p, onCancelClick: b, onNotificationClick: O, hint: x, cancelText: C, confirmText: j, icon: w, body: P, title: k, renderFooter: E, contentOpacity: N, status: S, containerRef: Z, className: z, wrapperClassName: T } = e,
        [W, D] = i.useState(!1),
        M = n || W || S === f._1z.FOCUSED,
        R = (0, c.e7)([m.ZP], () => m.ZP.isInputLocked((0, d.getPID)()));
    i.useEffect(() => {
        null == o || o();
    }, [o]);
    let L = i.useCallback(
            (e) => {
                e.stopPropagation(), null == u || u(e);
            },
            [u]
        ),
        A = i.useCallback(
            (e) => {
                e.stopPropagation(), null == p || p(e);
            },
            [p]
        ),
        I = i.useCallback(
            (e) => {
                e.stopPropagation(), null == b || b(e);
            },
            [b]
        ),
        _ = i.useCallback(() => {
            D(!0);
        }, []),
        U = i.useCallback(() => {
            D(!1);
        }, []);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: l()(g.overflowWrapper, T),
                onScroll: y,
                children: (0, r.jsx)(a.P3F, {
                    innerRef: Z,
                    ignoreKeyPress: !0,
                    onMouseOver: _,
                    onMouseLeave: U,
                    onClick: O,
                    className: l()(g.container, { [g.clickable]: null != O }, z),
                    children: (function () {
                        let e = null == E ? void 0 : E(M, R);
                        return (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)(s.animated.div, {
                                    className: g.iconAndDetails,
                                    style: { opacity: N },
                                    children: [
                                        null == w
                                            ? null
                                            : 'string' == typeof w
                                              ? (0, r.jsx)(a.qEK, {
                                                    src: w,
                                                    size: a.EFr.SIZE_40,
                                                    className: g.avatar,
                                                    'aria-hidden': !0
                                                })
                                              : (0, r.jsx)('div', {
                                                    className: g.avatar,
                                                    children: w
                                                }),
                                        (0, r.jsxs)('div', {
                                            className: g.details,
                                            children: [
                                                (0, r.jsx)(a.Text, {
                                                    color: 'interactive-normal',
                                                    variant: 'text-sm/semibold',
                                                    lineClamp: 2,
                                                    children: k
                                                }),
                                                null != P
                                                    ? (0, r.jsx)(a.Text, {
                                                          color: 'interactive-normal',
                                                          variant: 'text-sm/normal',
                                                          lineClamp: null != t ? t * (M ? 2 : 1) : void 0,
                                                          children: P
                                                      })
                                                    : null,
                                                (function () {
                                                    let e = 'function' == typeof x ? x(M, R) : x;
                                                    return null != x
                                                        ? (0, r.jsx)(a.Text, {
                                                              className: g.hint,
                                                              color: 'text-muted',
                                                              variant: 'text-xxs/medium',
                                                              children: e
                                                          })
                                                        : null;
                                                })(),
                                                null == p && null == b
                                                    ? null
                                                    : (0, r.jsxs)('div', {
                                                          className: g.buttonContainer,
                                                          children: [
                                                              null != p
                                                                  ? (0, r.jsx)(a.zxk, {
                                                                        className: g.button,
                                                                        size: a.zxk.Sizes.SMALL,
                                                                        color: a.zxk.Colors.GREEN,
                                                                        onClick: A,
                                                                        children: null != j ? j : v.NW.string(v.t.BddRzc)
                                                                    })
                                                                  : null,
                                                              null != b
                                                                  ? (0, r.jsx)(a.zxk, {
                                                                        className: g.button,
                                                                        size: a.zxk.Sizes.SMALL,
                                                                        look: a.zxk.Looks.OUTLINED,
                                                                        color: a.zxk.Colors.PRIMARY,
                                                                        onClick: I,
                                                                        children: null != C ? C : v.NW.string(v.t['ETE/oK'])
                                                                    })
                                                                  : null
                                                          ]
                                                      })
                                            ]
                                        })
                                    ]
                                }),
                                null != e &&
                                    (0, r.jsx)(a.P3F, {
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
            (0, r.jsx)(h.Z, {
                className: g.dismissButton,
                onDismiss: L,
                'aria-label': v.NW.string(v.t.LnEgqa)
            })
        ]
    });
});
function x(e) {
    let {
        springs: { opacity: t, scale: n, transform: i, height: o },
        index: c,
        children: a,
        locked: u,
        animationWrapperClassName: d
    } = e;
    return (0, r.jsx)(s.animated.div, {
        className: l()(g.animationWrapper, d),
        style: {
            pointerEvents: u && 0 !== c ? 'none' : 'auto',
            zIndex: Math.max(5 - c, 0),
            opacity: t,
            transform: i.to((e) => 'translate3d(0, '.concat(e, 'px, 0)')),
            scale: n.to([0, 1], [0.7, 1]),
            height: o,
            maxWidth: 0 === c ? void 0 : '100%'
        },
        children: a
    });
}
function C(e) {
    let { observe: t, children: n } = e;
    return t
        ? (0, r.jsx)(p.Z, {
              className: g.clickZone,
              children: n
          })
        : n;
}
function j(e) {
    var t, n;
    let { notification: o, index: l, locked: s, transitionState: c, cleanUp: a } = e,
        {
            id: d,
            props: { onNotificationShow: h, onDismissClick: p, onNotificationClick: m, onConfirmClick: f, onCancelClick: v, renderFooter: g, animationWrapperClassName: y }
        } = o,
        j = i.useCallback(() => {
            h(d);
        }, [h, d]),
        w = i.useCallback(
            (e) => {
                u.Z.updateNotificationStatus(d), null == p || p(e, d);
            },
            [d, p]
        ),
        P = i.useCallback(
            (e) => {
                null == m || m(e, d);
            },
            [m, d]
        ),
        k = i.useCallback(
            (e) => {
                null == f || f(e, d);
            },
            [f, d]
        ),
        E = i.useCallback(
            (e) => {
                null == v || v(e, d);
            },
            [v, d]
        ),
        N = i.useCallback((e, t) => (null == g ? void 0 : g(e, d, t)), [g, d]),
        {
            props: { onNotificationShow: S, onDismissClick: Z, renderFooter: z, onNotificationClick: T, onConfirmClick: W, onCancelClick: D, disableClickableRegions: M = !1 },
            status: R
        } = o,
        L = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(o.props, ['onNotificationShow', 'onDismissClick', 'renderFooter', 'onNotificationClick', 'onConfirmClick', 'onCancelClick', 'disableClickableRegions']),
        { ref: A, springs: I } = (0, b.X4)(o.id, c, a);
    return (0, r.jsx)(x, {
        transitionState: c,
        springs: I,
        index: l,
        locked: s,
        animationWrapperClassName: y,
        children: (0, r.jsx)(C, {
            observe: 0 === l && !M,
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
                })({}, L)),
                (n = n =
                    {
                        title: 'function' == typeof L.title ? L.title(w) : L.title,
                        containerRef: A,
                        notificationId: o.id,
                        onNotificationShow: 0 === l ? j : void 0,
                        onDismissClick: w,
                        onNotificationClick: null != m ? P : void 0,
                        onConfirmClick: null != f ? k : void 0,
                        onCancelClick: null != v ? E : void 0,
                        renderFooter: N,
                        expand: !1,
                        index: l,
                        locked: s,
                        status: R,
                        contentOpacity: I.contentOpacity
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

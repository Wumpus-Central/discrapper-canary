n.d(t, {
    Y: () => O,
    Z: () => j
}),
    n(388685);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(272573),
    c = n(442837),
    a = n(481060),
    u = n(13245),
    d = n(145597),
    h = n(691891),
    p = n(333031),
    f = n(610394),
    m = n(693091),
    b = n(981631),
    v = n(388032),
    g = n(560226);
function y(e) {
    e.currentTarget.scrollTo(0, 0);
}
let O = r.memo(function (e) {
    let { maxBodyLines: t, expand: n = !1, onNotificationShow: l, onDismissClick: u, onConfirmClick: p, onCancelClick: m, onNotificationClick: O, hint: x, cancelText: C, confirmText: j, icon: w, body: k, title: P, renderFooter: E, contentOpacity: S, status: Z, containerRef: z, className: N, wrapperClassName: T } = e,
        [D, M] = r.useState(!1),
        R = n || D || Z === b._1z.FOCUSED,
        L = (0, c.e7)([f.default], () => f.default.isInputLocked((0, d.getPID)()));
    r.useEffect(() => {
        null == l || l();
    }, [l]);
    let A = r.useCallback(
            (e) => {
                e.stopPropagation(), null == u || u(e);
            },
            [u]
        ),
        I = r.useCallback(
            (e) => {
                e.stopPropagation(), null == p || p(e);
            },
            [p]
        ),
        W = r.useCallback(
            (e) => {
                e.stopPropagation(), null == m || m(e);
            },
            [m]
        ),
        _ = r.useCallback(() => {
            M(!0);
        }, []),
        U = r.useCallback(() => {
            M(!1);
        }, []);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: o()(g.overflowWrapper, T),
                onScroll: y,
                children: (0, i.jsx)(a.P3F, {
                    innerRef: z,
                    ignoreKeyPress: !0,
                    onMouseOver: _,
                    onMouseLeave: U,
                    onClick: O,
                    className: o()(g.container, { [g.clickable]: null != O }, N),
                    children: (function () {
                        let e = null == E ? void 0 : E(R, L);
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(s.animated.div, {
                                    className: g.iconAndDetails,
                                    style: { opacity: S },
                                    children: [
                                        null == w
                                            ? null
                                            : 'string' == typeof w
                                              ? (0, i.jsx)(a.qEK, {
                                                    src: w,
                                                    size: a.EFr.SIZE_40,
                                                    className: g.avatar,
                                                    'aria-hidden': !0
                                                })
                                              : (0, i.jsx)('div', {
                                                    className: g.avatar,
                                                    children: w
                                                }),
                                        (0, i.jsxs)('div', {
                                            className: g.details,
                                            children: [
                                                (0, i.jsx)(a.Text, {
                                                    color: 'interactive-normal',
                                                    variant: 'text-sm/semibold',
                                                    lineClamp: 2,
                                                    children: P
                                                }),
                                                null != k
                                                    ? (0, i.jsx)(a.Text, {
                                                          color: 'interactive-normal',
                                                          variant: 'text-sm/normal',
                                                          lineClamp: null != t ? t * (R ? 2 : 1) : void 0,
                                                          children: k
                                                      })
                                                    : null,
                                                (function () {
                                                    let e = 'function' == typeof x ? x(R, L) : x;
                                                    return null != x
                                                        ? (0, i.jsx)(a.Text, {
                                                              className: g.hint,
                                                              color: 'text-muted',
                                                              variant: 'text-xxs/medium',
                                                              children: e
                                                          })
                                                        : null;
                                                })(),
                                                null == p && null == m
                                                    ? null
                                                    : (0, i.jsxs)('div', {
                                                          className: g.buttonContainer,
                                                          children: [
                                                              null != p
                                                                  ? (0, i.jsx)(a.zxk, {
                                                                        className: g.button,
                                                                        size: a.zxk.Sizes.SMALL,
                                                                        color: a.zxk.Colors.GREEN,
                                                                        onClick: I,
                                                                        children: null != j ? j : v.intl.string(v.t.BddRzc)
                                                                    })
                                                                  : null,
                                                              null != m
                                                                  ? (0, i.jsx)(a.zxk, {
                                                                        className: g.button,
                                                                        size: a.zxk.Sizes.SMALL,
                                                                        look: a.zxk.Looks.OUTLINED,
                                                                        color: a.zxk.Colors.PRIMARY,
                                                                        onClick: W,
                                                                        children: null != C ? C : v.intl.string(v.t['ETE/oK'])
                                                                    })
                                                                  : null
                                                          ]
                                                      })
                                            ]
                                        })
                                    ]
                                }),
                                null != e &&
                                    (0, i.jsx)(a.P3F, {
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
            (0, i.jsx)(h.Z, {
                className: g.dismissButton,
                onDismiss: A,
                'aria-label': v.intl.string(v.t.LnEgqa)
            })
        ]
    });
});
function x(e) {
    let {
        springs: { opacity: t, scale: n, transform: r, height: l },
        index: c,
        children: a,
        locked: u,
        animationWrapperClassName: d
    } = e;
    return (0, i.jsx)(s.animated.div, {
        className: o()(g.animationWrapper, d),
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
function C(e) {
    let { observe: t, children: n } = e;
    return t
        ? (0, i.jsx)(p.Z, {
              className: g.clickZone,
              children: n
          })
        : n;
}
function j(e) {
    var t, n;
    let { notification: l, index: o, locked: s, transitionState: c, cleanUp: a } = e,
        {
            id: d,
            props: { onNotificationShow: h, onDismissClick: p, onNotificationClick: f, onConfirmClick: b, onCancelClick: v, renderFooter: g, animationWrapperClassName: y }
        } = l,
        j = r.useCallback(() => {
            h(d);
        }, [h, d]),
        w = r.useCallback(
            (e) => {
                u.Z.updateNotificationStatus(d), null == p || p(e, d);
            },
            [d, p]
        ),
        k = r.useCallback(
            (e) => {
                null == f || f(e, d);
            },
            [f, d]
        ),
        P = r.useCallback(
            (e) => {
                null == b || b(e, d);
            },
            [b, d]
        ),
        E = r.useCallback(
            (e) => {
                null == v || v(e, d);
            },
            [v, d]
        ),
        S = r.useCallback((e, t) => (null == g ? void 0 : g(e, d, t)), [g, d]),
        {
            props: { onNotificationShow: Z, onDismissClick: z, renderFooter: N, onNotificationClick: T, onConfirmClick: D, onCancelClick: M, disableClickableRegions: R = !1 },
            status: L
        } = l,
        A = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        l = Object.keys(e);
                    for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (i = 0; i < l.length; i++) (n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(l.props, ['onNotificationShow', 'onDismissClick', 'renderFooter', 'onNotificationClick', 'onConfirmClick', 'onCancelClick', 'disableClickableRegions']),
        { ref: I, springs: W } = (0, m.X4)(l.id, c, a);
    return (0, i.jsx)(x, {
        transitionState: c,
        springs: W,
        index: o,
        locked: s,
        animationWrapperClassName: y,
        children: (0, i.jsx)(C, {
            observe: 0 === o && !R,
            children: (0, i.jsx)(
                O,
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            i.forEach(function (t) {
                                var i;
                                (i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = i);
                            });
                    }
                    return e;
                })({}, A)),
                (n = n =
                    {
                        title: 'function' == typeof A.title ? A.title(w) : A.title,
                        containerRef: I,
                        notificationId: l.id,
                        onNotificationShow: 0 === o ? j : void 0,
                        onDismissClick: w,
                        onNotificationClick: null != f ? k : void 0,
                        onConfirmClick: null != b ? P : void 0,
                        onCancelClick: null != v ? E : void 0,
                        renderFooter: S,
                        expand: !1,
                        index: o,
                        locked: s,
                        status: L,
                        contentOpacity: W.contentOpacity
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

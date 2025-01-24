n.d(t, {
    QR: function () {
        return S;
    },
    Yj: function () {
        return _;
    },
    ZP: function () {
        return b;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(642128),
    o = n(481060),
    c = n(13245),
    u = n(809357),
    d = n(691891),
    m = n(44359),
    f = n(333031),
    p = n(693091),
    h = n(981631),
    g = n(388032),
    v = n(176463);
function S(e, t, n) {
    return (0, i.jsx)(I, {
        keybind: e,
        message: t,
        messageWithoutKeybind: n
    });
}
function I(e) {
    let { keybind: t, message: n, messageWithoutKeybind: l } = e,
        r = (0, u.o)();
    return (0, i.jsx)(i.Fragment, {
        children: r
            ? g.intl.format(n, {
                  keybind: t,
                  keybindHook: (e) => (0, i.jsx)(m.Z, { keybind: t }, t.join('+'))
              })
            : l
    });
}
function x(e) {
    e.currentTarget.scrollTo(0, 0);
}
let _ = l.memo(function (e) {
    let { maxBodyLines: t, expand: n = !1, onNotificationShow: r, onDismissClick: c, onConfirmClick: u, onCancelClick: m, onNotificationClick: f, hint: p, cancelText: S, confirmText: I, icon: _, body: C, title: b, renderFooter: E, contentOpacity: y, status: Z, containerRef: T, className: N, wrapperClassName: A } = e,
        [j, w] = l.useState(!1),
        P = n || j || Z === h._1z.FOCUSED;
    l.useEffect(() => {
        null == r || r();
    }, [r]);
    let R = l.useCallback(
            (e) => {
                e.stopPropagation(), null == c || c(e);
            },
            [c]
        ),
        O = l.useCallback(
            (e) => {
                e.stopPropagation(), null == u || u(e);
            },
            [u]
        ),
        k = l.useCallback(
            (e) => {
                e.stopPropagation(), null == m || m(e);
            },
            [m]
        ),
        M = l.useCallback(() => {
            w(!0);
        }, []),
        L = l.useCallback(() => {
            w(!1);
        }, []);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: a()(v.overflowWrapper, A),
                onScroll: x,
                children: (0, i.jsx)(o.Clickable, {
                    innerRef: T,
                    ignoreKeyPress: !0,
                    onMouseOver: M,
                    onMouseLeave: L,
                    onClick: f,
                    className: a()(v.container, { [v.clickable]: null != f }, N),
                    children: (function () {
                        let e = null == E ? void 0 : E(P);
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(s.animated.div, {
                                    className: v.iconAndDetails,
                                    style: { opacity: y },
                                    children: [
                                        null == _
                                            ? null
                                            : 'string' == typeof _
                                              ? (0, i.jsx)(o.Avatar, {
                                                    src: _,
                                                    size: o.AvatarSizes.SIZE_40,
                                                    className: v.avatar,
                                                    'aria-hidden': !0
                                                })
                                              : (0, i.jsx)('div', {
                                                    className: v.avatar,
                                                    children: _
                                                }),
                                        (0, i.jsxs)('div', {
                                            className: v.details,
                                            children: [
                                                (0, i.jsx)(o.Text, {
                                                    color: 'interactive-normal',
                                                    variant: 'text-sm/semibold',
                                                    lineClamp: 2,
                                                    children: b
                                                }),
                                                null != C
                                                    ? (0, i.jsx)(o.Text, {
                                                          color: 'interactive-normal',
                                                          variant: 'text-sm/normal',
                                                          lineClamp: null != t ? t * (P ? 2 : 1) : void 0,
                                                          children: C
                                                      })
                                                    : null,
                                                (function () {
                                                    let e = 'function' == typeof p ? p(P) : p;
                                                    return null != p
                                                        ? (0, i.jsx)(o.Text, {
                                                              className: v.hint,
                                                              color: 'text-muted',
                                                              variant: 'text-xxs/medium',
                                                              children: e
                                                          })
                                                        : null;
                                                })(),
                                                null == u && null == m
                                                    ? null
                                                    : (0, i.jsxs)('div', {
                                                          className: v.buttonContainer,
                                                          children: [
                                                              null != u
                                                                  ? (0, i.jsx)(o.Button, {
                                                                        className: v.button,
                                                                        size: o.Button.Sizes.SMALL,
                                                                        color: o.Button.Colors.GREEN,
                                                                        onClick: O,
                                                                        children: null != I ? I : g.intl.string(g.t.BddRzc)
                                                                    })
                                                                  : null,
                                                              null != m
                                                                  ? (0, i.jsx)(o.Button, {
                                                                        className: v.button,
                                                                        size: o.Button.Sizes.SMALL,
                                                                        look: o.Button.Looks.OUTLINED,
                                                                        color: o.Button.Colors.PRIMARY,
                                                                        onClick: k,
                                                                        children: null != S ? S : g.intl.string(g.t['ETE/oK'])
                                                                    })
                                                                  : null
                                                          ]
                                                      })
                                            ]
                                        })
                                    ]
                                }),
                                null != e &&
                                    (0, i.jsx)(o.Clickable, {
                                        className: v.footer,
                                        ignoreKeyPress: !0,
                                        onClick: (e) => e.stopPropagation(),
                                        children: e
                                    })
                            ]
                        });
                    })()
                })
            }),
            (0, i.jsx)(d.Z, {
                className: v.dismissButton,
                onDismiss: R,
                'aria-label': g.intl.string(g.t.LnEgqa)
            })
        ]
    });
});
function C(e) {
    let {
        springs: { opacity: t, scale: n, transform: l, height: r },
        index: a,
        children: o,
        locked: c
    } = e;
    return (0, i.jsx)(s.animated.div, {
        className: v.animationWrapper,
        style: {
            pointerEvents: c && 0 !== a ? 'none' : 'auto',
            zIndex: Math.max(5 - a, 0),
            opacity: t,
            transform: l.to((e) => 'translate3d(0, '.concat(e, 'px, 0)')),
            scale: n.to([0, 1], [0.7, 1]),
            height: r
        },
        children: o
    });
}
function b(e) {
    let { notification: t, index: n, locked: r, transitionState: a, cleanUp: s } = e,
        {
            id: o,
            props: { onNotificationShow: u, onDismissClick: d, onNotificationClick: m, onConfirmClick: h, onCancelClick: g, renderFooter: S }
        } = t,
        I = l.useCallback(() => {
            u(o);
        }, [u, o]),
        x = l.useCallback(
            (e) => {
                c.Z.updateNotificationStatus(o), null == d || d(e, o);
            },
            [o, d]
        ),
        b = l.useCallback(
            (e) => {
                null == m || m(e, o);
            },
            [m, o]
        ),
        E = l.useCallback(
            (e) => {
                null == h || h(e, o);
            },
            [h, o]
        ),
        y = l.useCallback(
            (e) => {
                null == g || g(e, o);
            },
            [g, o]
        ),
        Z = l.useCallback((e) => (null == S ? void 0 : S(e, o)), [S, o]),
        {
            props: { onNotificationShow: T, onDismissClick: N, renderFooter: A, onNotificationClick: j, onConfirmClick: w, onCancelClick: P, ...R },
            status: O
        } = t,
        { ref: k, springs: M } = (0, p.X4)(t.id, a, s);
    return (0, i.jsx)(C, {
        transitionState: a,
        springs: M,
        index: n,
        locked: r,
        children: (0, i.jsx)(f.Z, {
            observe: 0 === n,
            className: v.clickZone,
            children: (0, i.jsx)(_, {
                ...R,
                title: 'function' == typeof R.title ? R.title(x) : R.title,
                containerRef: k,
                notificationId: t.id,
                onNotificationShow: 0 === n ? I : void 0,
                onDismissClick: x,
                onNotificationClick: null != m ? b : void 0,
                onConfirmClick: null != h ? E : void 0,
                onCancelClick: null != g ? y : void 0,
                renderFooter: Z,
                expand: !1,
                index: n,
                locked: r,
                status: O,
                contentOpacity: M.contentOpacity
            })
        })
    });
}

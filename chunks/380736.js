i.d(t, {
    Q: function () {
        return g;
    },
    Z: function () {
        return O;
    }
}),
    i(47120);
var n = i(200651),
    l = i(192379),
    o = i(120356),
    s = i.n(o),
    r = i(666912),
    a = i(481060),
    u = i(13245),
    d = i(809357),
    c = i(691891),
    h = i(44359),
    f = i(333031),
    p = i(693091),
    E = i(981631),
    m = i(388032),
    v = i(176463);
function g(e, t, i) {
    return (0, n.jsx)(S, {
        keybind: e,
        message: t,
        messageWithoutKeybind: i
    });
}
function S(e) {
    let { keybind: t, message: i, messageWithoutKeybind: l } = e,
        o = (0, d.o)();
    return (0, n.jsx)(n.Fragment, {
        children: o
            ? m.intl.format(i, {
                  keybind: t,
                  keybindHook: (e) => (0, n.jsx)(h.Z, { keybind: t }, t.join('+'))
              })
            : l
    });
}
function _(e) {
    e.currentTarget.scrollTo(0, 0);
}
let Z = l.memo(function (e) {
    let { maxBodyLines: t, expand: i = !1, onNotificationShow: o, onDismissClick: u, onConfirmClick: d, onCancelClick: h, onNotificationClick: f, hint: p, cancelText: g, confirmText: S, icon: Z, body: C, title: O, renderFooter: I, contentOpacity: N, status: y, containerRef: x } = e,
        [b, T] = l.useState(!1),
        R = i || b || y === E._1z.FOCUSED;
    l.useEffect(() => {
        null == o || o();
    }, [o]);
    let k = l.useCallback(
            (e) => {
                e.stopPropagation(), null == u || u(e);
            },
            [u]
        ),
        A = l.useCallback(
            (e) => {
                e.stopPropagation(), null == d || d(e);
            },
            [d]
        ),
        z = l.useCallback(
            (e) => {
                e.stopPropagation(), null == h || h(e);
            },
            [h]
        ),
        M = l.useCallback(() => {
            T(!0);
        }, []),
        L = l.useCallback(() => {
            T(!1);
        }, []);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)('div', {
                className: v.overflowWrapper,
                onScroll: _,
                children: (0, n.jsx)(a.Clickable, {
                    innerRef: x,
                    ignoreKeyPress: !0,
                    onMouseOver: M,
                    onMouseLeave: L,
                    onClick: f,
                    className: s()(v.container, { [v.clickable]: null != f }),
                    children: (function () {
                        let e = null == I ? void 0 : I(R);
                        return (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsxs)(r.animated.div, {
                                    className: v.iconAndDetails,
                                    style: { opacity: N },
                                    children: [
                                        null == Z
                                            ? null
                                            : 'string' == typeof Z
                                              ? (0, n.jsx)(a.Avatar, {
                                                    src: Z,
                                                    size: a.AvatarSizes.SIZE_40,
                                                    className: v.avatar,
                                                    'aria-hidden': !0
                                                })
                                              : (0, n.jsx)('div', {
                                                    className: v.avatar,
                                                    children: Z
                                                }),
                                        (0, n.jsxs)('div', {
                                            className: v.details,
                                            children: [
                                                (0, n.jsx)(a.Text, {
                                                    color: 'interactive-normal',
                                                    variant: 'text-sm/semibold',
                                                    lineClamp: 2,
                                                    children: O
                                                }),
                                                null != C
                                                    ? (0, n.jsx)(a.Text, {
                                                          color: 'interactive-normal',
                                                          variant: 'text-sm/normal',
                                                          lineClamp: null != t ? t * (R ? 2 : 1) : void 0,
                                                          children: C
                                                      })
                                                    : null,
                                                (function () {
                                                    let e = 'function' == typeof p ? p(R) : p;
                                                    return null != p
                                                        ? (0, n.jsx)(a.Text, {
                                                              className: v.hint,
                                                              color: 'text-muted',
                                                              variant: 'text-xxs/medium',
                                                              children: e
                                                          })
                                                        : null;
                                                })(),
                                                null == d && null == h
                                                    ? null
                                                    : (0, n.jsxs)('div', {
                                                          className: v.buttonContainer,
                                                          children: [
                                                              null != d
                                                                  ? (0, n.jsx)(a.Button, {
                                                                        className: v.button,
                                                                        size: a.Button.Sizes.SMALL,
                                                                        color: a.Button.Colors.GREEN,
                                                                        onClick: A,
                                                                        children: null != S ? S : m.intl.string(m.t.BddRzc)
                                                                    })
                                                                  : null,
                                                              null != h
                                                                  ? (0, n.jsx)(a.Button, {
                                                                        className: v.button,
                                                                        size: a.Button.Sizes.SMALL,
                                                                        look: a.Button.Looks.OUTLINED,
                                                                        color: a.Button.Colors.PRIMARY,
                                                                        onClick: z,
                                                                        children: null != g ? g : m.intl.string(m.t['ETE/oK'])
                                                                    })
                                                                  : null
                                                          ]
                                                      })
                                            ]
                                        })
                                    ]
                                }),
                                null != e &&
                                    (0, n.jsx)(a.Clickable, {
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
            (0, n.jsx)(c.Z, {
                className: v.dismissButton,
                onDismiss: k,
                'aria-label': m.intl.string(m.t.LnEgqa)
            })
        ]
    });
});
function C(e) {
    let {
        springs: { opacity: t, scale: i, transform: l, height: o },
        index: s,
        children: a,
        locked: u
    } = e;
    return (0, n.jsx)(r.animated.div, {
        className: v.animationWrapper,
        style: {
            pointerEvents: u && 0 !== s ? 'none' : 'auto',
            zIndex: Math.max(5 - s, 0),
            opacity: t,
            transform: l.to((e) => 'translate3d(0, '.concat(e, 'px, 0)')),
            scale: i.to([0, 1], [0.7, 1]),
            height: o
        },
        children: a
    });
}
function O(e) {
    let { notification: t, index: i, locked: o, transitionState: s, cleanUp: r } = e,
        {
            id: a,
            props: { onNotificationShow: d, onDismissClick: c, onNotificationClick: h, onConfirmClick: E, onCancelClick: m, renderFooter: g }
        } = t,
        S = l.useCallback(() => {
            d(a);
        }, [d, a]),
        _ = l.useCallback(
            (e) => {
                u.Z.updateNotificationStatus(a), null == c || c(e, a);
            },
            [a, c]
        ),
        O = l.useCallback(
            (e) => {
                null == h || h(e, a);
            },
            [h, a]
        ),
        I = l.useCallback(
            (e) => {
                null == E || E(e, a);
            },
            [E, a]
        ),
        N = l.useCallback(
            (e) => {
                null == m || m(e, a);
            },
            [m, a]
        ),
        y = l.useCallback((e) => (null == g ? void 0 : g(e, a)), [g, a]),
        {
            props: { onNotificationShow: x, onDismissClick: b, renderFooter: T, onNotificationClick: R, onConfirmClick: k, onCancelClick: A, ...z },
            status: M
        } = t,
        { ref: L, springs: w } = (0, p.X4)(t.id, s, r);
    return (0, n.jsx)(C, {
        transitionState: s,
        springs: w,
        index: i,
        locked: o,
        children: (0, n.jsx)(f.Z, {
            observe: 0 === i,
            className: v.clickZone,
            children: (0, n.jsx)(Z, {
                ...z,
                containerRef: L,
                notificationId: t.id,
                onNotificationShow: 0 === i ? S : void 0,
                onDismissClick: _,
                onNotificationClick: null != h ? O : void 0,
                onConfirmClick: null != E ? I : void 0,
                onCancelClick: null != m ? N : void 0,
                renderFooter: y,
                expand: !1,
                index: i,
                locked: o,
                status: M,
                contentOpacity: w.contentOpacity
            })
        })
    });
}

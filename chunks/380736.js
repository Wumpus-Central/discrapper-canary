n.d(t, {
    QR: () => _,
    Yj: () => x,
    ZP: () => C
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
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
function _(e, t, n) {
    return (0, i.jsx)(I, {
        keybind: e,
        message: t,
        messageWithoutKeybind: n
    });
}
function I(e) {
    let { keybind: t, message: n, messageWithoutKeybind: l } = e,
        a = (0, u.o)();
    return (0, i.jsx)(i.Fragment, {
        children: a
            ? g.intl.format(n, {
                  keybind: t,
                  keybindHook: (e) => (0, i.jsx)(m.Z, { keybind: t }, t.join('+'))
              })
            : l
    });
}
function S(e) {
    e.currentTarget.scrollTo(0, 0);
}
let x = l.memo(function (e) {
    let { maxBodyLines: t, expand: n = !1, onNotificationShow: a, onDismissClick: c, onConfirmClick: u, onCancelClick: m, onNotificationClick: f, hint: p, cancelText: _, confirmText: I, icon: x, body: E, title: C, renderFooter: Z, contentOpacity: y, status: b, containerRef: N, className: T, wrapperClassName: A } = e,
        [w, P] = l.useState(!1),
        j = n || w || b === h._1z.FOCUSED;
    l.useEffect(() => {
        null == a || a();
    }, [a]);
    let R = l.useCallback(
            (e) => {
                e.stopPropagation(), null == c || c(e);
            },
            [c]
        ),
        k = l.useCallback(
            (e) => {
                e.stopPropagation(), null == u || u(e);
            },
            [u]
        ),
        L = l.useCallback(
            (e) => {
                e.stopPropagation(), null == m || m(e);
            },
            [m]
        ),
        O = l.useCallback(() => {
            P(!0);
        }, []),
        M = l.useCallback(() => {
            P(!1);
        }, []);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: r()(v.overflowWrapper, A),
                onScroll: S,
                children: (0, i.jsx)(o.P3F, {
                    innerRef: N,
                    ignoreKeyPress: !0,
                    onMouseOver: O,
                    onMouseLeave: M,
                    onClick: f,
                    className: r()(v.container, { [v.clickable]: null != f }, T),
                    children: (function () {
                        let e = null == Z ? void 0 : Z(j);
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(s.animated.div, {
                                    className: v.iconAndDetails,
                                    style: { opacity: y },
                                    children: [
                                        null == x
                                            ? null
                                            : 'string' == typeof x
                                              ? (0, i.jsx)(o.qEK, {
                                                    src: x,
                                                    size: o.EFr.SIZE_40,
                                                    className: v.avatar,
                                                    'aria-hidden': !0
                                                })
                                              : (0, i.jsx)('div', {
                                                    className: v.avatar,
                                                    children: x
                                                }),
                                        (0, i.jsxs)('div', {
                                            className: v.details,
                                            children: [
                                                (0, i.jsx)(o.Text, {
                                                    color: 'interactive-normal',
                                                    variant: 'text-sm/semibold',
                                                    lineClamp: 2,
                                                    children: C
                                                }),
                                                null != E
                                                    ? (0, i.jsx)(o.Text, {
                                                          color: 'interactive-normal',
                                                          variant: 'text-sm/normal',
                                                          lineClamp: null != t ? t * (j ? 2 : 1) : void 0,
                                                          children: E
                                                      })
                                                    : null,
                                                (function () {
                                                    let e = 'function' == typeof p ? p(j) : p;
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
                                                                  ? (0, i.jsx)(o.zxk, {
                                                                        className: v.button,
                                                                        size: o.zxk.Sizes.SMALL,
                                                                        color: o.zxk.Colors.GREEN,
                                                                        onClick: k,
                                                                        children: null != I ? I : g.intl.string(g.t.BddRzc)
                                                                    })
                                                                  : null,
                                                              null != m
                                                                  ? (0, i.jsx)(o.zxk, {
                                                                        className: v.button,
                                                                        size: o.zxk.Sizes.SMALL,
                                                                        look: o.zxk.Looks.OUTLINED,
                                                                        color: o.zxk.Colors.PRIMARY,
                                                                        onClick: L,
                                                                        children: null != _ ? _ : g.intl.string(g.t['ETE/oK'])
                                                                    })
                                                                  : null
                                                          ]
                                                      })
                                            ]
                                        })
                                    ]
                                }),
                                null != e &&
                                    (0, i.jsx)(o.P3F, {
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
function E(e) {
    let {
        springs: { opacity: t, scale: n, transform: l, height: a },
        index: r,
        children: o,
        locked: c
    } = e;
    return (0, i.jsx)(s.animated.div, {
        className: v.animationWrapper,
        style: {
            pointerEvents: c && 0 !== r ? 'none' : 'auto',
            zIndex: Math.max(5 - r, 0),
            opacity: t,
            transform: l.to((e) => 'translate3d(0, '.concat(e, 'px, 0)')),
            scale: n.to([0, 1], [0.7, 1]),
            height: a
        },
        children: o
    });
}
function C(e) {
    let { notification: t, index: n, locked: a, transitionState: r, cleanUp: s } = e,
        {
            id: o,
            props: { onNotificationShow: u, onDismissClick: d, onNotificationClick: m, onConfirmClick: h, onCancelClick: g, renderFooter: _ }
        } = t,
        I = l.useCallback(() => {
            u(o);
        }, [u, o]),
        S = l.useCallback(
            (e) => {
                c.Z.updateNotificationStatus(o), null == d || d(e, o);
            },
            [o, d]
        ),
        C = l.useCallback(
            (e) => {
                null == m || m(e, o);
            },
            [m, o]
        ),
        Z = l.useCallback(
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
        b = l.useCallback((e) => (null == _ ? void 0 : _(e, o)), [_, o]),
        {
            props: { onNotificationShow: N, onDismissClick: T, renderFooter: A, onNotificationClick: w, onConfirmClick: P, onCancelClick: j, ...R },
            status: k
        } = t,
        { ref: L, springs: O } = (0, p.X4)(t.id, r, s);
    return (0, i.jsx)(E, {
        transitionState: r,
        springs: O,
        index: n,
        locked: a,
        children: (0, i.jsx)(f.Z, {
            observe: 0 === n,
            className: v.clickZone,
            children: (0, i.jsx)(x, {
                ...R,
                title: 'function' == typeof R.title ? R.title(S) : R.title,
                containerRef: L,
                notificationId: t.id,
                onNotificationShow: 0 === n ? I : void 0,
                onDismissClick: S,
                onNotificationClick: null != m ? C : void 0,
                onConfirmClick: null != h ? Z : void 0,
                onCancelClick: null != g ? y : void 0,
                renderFooter: b,
                expand: !1,
                index: n,
                locked: a,
                status: k,
                contentOpacity: O.contentOpacity
            })
        })
    });
}

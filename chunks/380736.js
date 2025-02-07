n.d(t, {
    QR: () => E,
    Yj: () => S,
    ZP: () => b
}),
    n(47120);
var l = n(200651),
    i = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(642128),
    o = n(481060),
    u = n(13245),
    c = n(809357),
    d = n(691891),
    m = n(44359),
    f = n(333031),
    h = n(693091),
    p = n(981631),
    v = n(388032),
    g = n(176463);
function E(e, t, n) {
    return (0, l.jsx)(x, {
        keybind: e,
        message: t,
        messageWithoutKeybind: n
    });
}
function x(e) {
    let { keybind: t, message: n, messageWithoutKeybind: i } = e,
        r = (0, c.o)();
    return (0, l.jsx)(l.Fragment, {
        children: r
            ? v.intl.format(n, {
                  keybind: t,
                  keybindHook: (e) => (0, l.jsx)(m.Z, { keybind: t }, t.join('+'))
              })
            : i
    });
}
function Z(e) {
    e.currentTarget.scrollTo(0, 0);
}
let S = i.memo(function (e) {
    let { maxBodyLines: t, expand: n = !1, onNotificationShow: r, onDismissClick: u, onConfirmClick: c, onCancelClick: m, onNotificationClick: f, hint: h, cancelText: E, confirmText: x, icon: S, body: C, title: b, renderFooter: I, contentOpacity: _, status: R, containerRef: y, className: j, wrapperClassName: N } = e,
        [w, A] = i.useState(!1),
        T = n || w || R === p._1z.FOCUSED;
    i.useEffect(() => {
        null == r || r();
    }, [r]);
    let k = i.useCallback(
            (e) => {
                e.stopPropagation(), null == u || u(e);
            },
            [u]
        ),
        O = i.useCallback(
            (e) => {
                e.stopPropagation(), null == c || c(e);
            },
            [c]
        ),
        P = i.useCallback(
            (e) => {
                e.stopPropagation(), null == m || m(e);
            },
            [m]
        ),
        M = i.useCallback(() => {
            A(!0);
        }, []),
        D = i.useCallback(() => {
            A(!1);
        }, []);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)('div', {
                className: a()(g.overflowWrapper, N),
                onScroll: Z,
                children: (0, l.jsx)(o.P3F, {
                    innerRef: y,
                    ignoreKeyPress: !0,
                    onMouseOver: M,
                    onMouseLeave: D,
                    onClick: f,
                    className: a()(g.container, { [g.clickable]: null != f }, j),
                    children: (function () {
                        let e = null == I ? void 0 : I(T);
                        return (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)(s.animated.div, {
                                    className: g.iconAndDetails,
                                    style: { opacity: _ },
                                    children: [
                                        null == S
                                            ? null
                                            : 'string' == typeof S
                                              ? (0, l.jsx)(o.qEK, {
                                                    src: S,
                                                    size: o.EFr.SIZE_40,
                                                    className: g.avatar,
                                                    'aria-hidden': !0
                                                })
                                              : (0, l.jsx)('div', {
                                                    className: g.avatar,
                                                    children: S
                                                }),
                                        (0, l.jsxs)('div', {
                                            className: g.details,
                                            children: [
                                                (0, l.jsx)(o.Text, {
                                                    color: 'interactive-normal',
                                                    variant: 'text-sm/semibold',
                                                    lineClamp: 2,
                                                    children: b
                                                }),
                                                null != C
                                                    ? (0, l.jsx)(o.Text, {
                                                          color: 'interactive-normal',
                                                          variant: 'text-sm/normal',
                                                          lineClamp: null != t ? t * (T ? 2 : 1) : void 0,
                                                          children: C
                                                      })
                                                    : null,
                                                (function () {
                                                    let e = 'function' == typeof h ? h(T) : h;
                                                    return null != h
                                                        ? (0, l.jsx)(o.Text, {
                                                              className: g.hint,
                                                              color: 'text-muted',
                                                              variant: 'text-xxs/medium',
                                                              children: e
                                                          })
                                                        : null;
                                                })(),
                                                null == c && null == m
                                                    ? null
                                                    : (0, l.jsxs)('div', {
                                                          className: g.buttonContainer,
                                                          children: [
                                                              null != c
                                                                  ? (0, l.jsx)(o.zxk, {
                                                                        className: g.button,
                                                                        size: o.zxk.Sizes.SMALL,
                                                                        color: o.zxk.Colors.GREEN,
                                                                        onClick: O,
                                                                        children: null != x ? x : v.intl.string(v.t.BddRzc)
                                                                    })
                                                                  : null,
                                                              null != m
                                                                  ? (0, l.jsx)(o.zxk, {
                                                                        className: g.button,
                                                                        size: o.zxk.Sizes.SMALL,
                                                                        look: o.zxk.Looks.OUTLINED,
                                                                        color: o.zxk.Colors.PRIMARY,
                                                                        onClick: P,
                                                                        children: null != E ? E : v.intl.string(v.t['ETE/oK'])
                                                                    })
                                                                  : null
                                                          ]
                                                      })
                                            ]
                                        })
                                    ]
                                }),
                                null != e &&
                                    (0, l.jsx)(o.P3F, {
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
            (0, l.jsx)(d.Z, {
                className: g.dismissButton,
                onDismiss: k,
                'aria-label': v.intl.string(v.t.LnEgqa)
            })
        ]
    });
});
function C(e) {
    let {
        springs: { opacity: t, scale: n, transform: i, height: r },
        index: a,
        children: o,
        locked: u
    } = e;
    return (0, l.jsx)(s.animated.div, {
        className: g.animationWrapper,
        style: {
            pointerEvents: u && 0 !== a ? 'none' : 'auto',
            zIndex: Math.max(5 - a, 0),
            opacity: t,
            transform: i.to((e) => 'translate3d(0, '.concat(e, 'px, 0)')),
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
            props: { onNotificationShow: c, onDismissClick: d, onNotificationClick: m, onConfirmClick: p, onCancelClick: v, renderFooter: E }
        } = t,
        x = i.useCallback(() => {
            c(o);
        }, [c, o]),
        Z = i.useCallback(
            (e) => {
                u.Z.updateNotificationStatus(o), null == d || d(e, o);
            },
            [o, d]
        ),
        b = i.useCallback(
            (e) => {
                null == m || m(e, o);
            },
            [m, o]
        ),
        I = i.useCallback(
            (e) => {
                null == p || p(e, o);
            },
            [p, o]
        ),
        _ = i.useCallback(
            (e) => {
                null == v || v(e, o);
            },
            [v, o]
        ),
        R = i.useCallback((e) => (null == E ? void 0 : E(e, o)), [E, o]),
        {
            props: { onNotificationShow: y, onDismissClick: j, renderFooter: N, onNotificationClick: w, onConfirmClick: A, onCancelClick: T, ...k },
            status: O
        } = t,
        { ref: P, springs: M } = (0, h.X4)(t.id, a, s);
    return (0, l.jsx)(C, {
        transitionState: a,
        springs: M,
        index: n,
        locked: r,
        children: (0, l.jsx)(f.Z, {
            observe: 0 === n,
            className: g.clickZone,
            children: (0, l.jsx)(S, {
                ...k,
                title: 'function' == typeof k.title ? k.title(Z) : k.title,
                containerRef: P,
                notificationId: t.id,
                onNotificationShow: 0 === n ? x : void 0,
                onDismissClick: Z,
                onNotificationClick: null != m ? b : void 0,
                onConfirmClick: null != p ? I : void 0,
                onCancelClick: null != v ? _ : void 0,
                renderFooter: R,
                expand: !1,
                index: n,
                locked: r,
                status: O,
                contentOpacity: M.contentOpacity
            })
        })
    });
}

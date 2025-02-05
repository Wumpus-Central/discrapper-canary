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
    return (0, l.jsx)(Z, {
        keybind: e,
        message: t,
        messageWithoutKeybind: n
    });
}
function Z(e) {
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
function x(e) {
    e.currentTarget.scrollTo(0, 0);
}
let S = i.memo(function (e) {
    let { maxBodyLines: t, expand: n = !1, onNotificationShow: r, onDismissClick: u, onConfirmClick: c, onCancelClick: m, onNotificationClick: f, hint: h, cancelText: E, confirmText: Z, icon: S, body: C, title: b, renderFooter: I, contentOpacity: _, status: N, containerRef: R, className: y, wrapperClassName: T } = e,
        [j, w] = i.useState(!1),
        A = n || j || N === p._1z.FOCUSED;
    i.useEffect(() => {
        null == r || r();
    }, [r]);
    let O = i.useCallback(
            (e) => {
                e.stopPropagation(), null == u || u(e);
            },
            [u]
        ),
        P = i.useCallback(
            (e) => {
                e.stopPropagation(), null == c || c(e);
            },
            [c]
        ),
        k = i.useCallback(
            (e) => {
                e.stopPropagation(), null == m || m(e);
            },
            [m]
        ),
        M = i.useCallback(() => {
            w(!0);
        }, []),
        D = i.useCallback(() => {
            w(!1);
        }, []);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)('div', {
                className: a()(g.overflowWrapper, T),
                onScroll: x,
                children: (0, l.jsx)(o.P3F, {
                    innerRef: R,
                    ignoreKeyPress: !0,
                    onMouseOver: M,
                    onMouseLeave: D,
                    onClick: f,
                    className: a()(g.container, { [g.clickable]: null != f }, y),
                    children: (function () {
                        let e = null == I ? void 0 : I(A);
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
                                                          lineClamp: null != t ? t * (A ? 2 : 1) : void 0,
                                                          children: C
                                                      })
                                                    : null,
                                                (function () {
                                                    let e = 'function' == typeof h ? h(A) : h;
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
                                                                        onClick: P,
                                                                        children: null != Z ? Z : v.intl.string(v.t.BddRzc)
                                                                    })
                                                                  : null,
                                                              null != m
                                                                  ? (0, l.jsx)(o.zxk, {
                                                                        className: g.button,
                                                                        size: o.zxk.Sizes.SMALL,
                                                                        look: o.zxk.Looks.OUTLINED,
                                                                        color: o.zxk.Colors.PRIMARY,
                                                                        onClick: k,
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
                onDismiss: O,
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
        Z = i.useCallback(() => {
            c(o);
        }, [c, o]),
        x = i.useCallback(
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
        N = i.useCallback((e) => (null == E ? void 0 : E(e, o)), [E, o]),
        {
            props: { onNotificationShow: R, onDismissClick: y, renderFooter: T, onNotificationClick: j, onConfirmClick: w, onCancelClick: A, ...O },
            status: P
        } = t,
        { ref: k, springs: M } = (0, h.X4)(t.id, a, s);
    return (0, l.jsx)(C, {
        transitionState: a,
        springs: M,
        index: n,
        locked: r,
        children: (0, l.jsx)(f.Z, {
            observe: 0 === n,
            className: g.clickZone,
            children: (0, l.jsx)(S, {
                ...O,
                title: 'function' == typeof O.title ? O.title(x) : O.title,
                containerRef: k,
                notificationId: t.id,
                onNotificationShow: 0 === n ? Z : void 0,
                onDismissClick: x,
                onNotificationClick: null != m ? b : void 0,
                onConfirmClick: null != p ? I : void 0,
                onCancelClick: null != v ? _ : void 0,
                renderFooter: N,
                expand: !1,
                index: n,
                locked: r,
                status: P,
                contentOpacity: M.contentOpacity
            })
        })
    });
}

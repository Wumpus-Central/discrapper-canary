n.d(t, { Z: () => v });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(642128),
    o = n(442837),
    l = n(481060),
    u = n(493683),
    c = n(607070),
    d = n(785717),
    f = n(510659),
    _ = n(228168),
    p = n(388032),
    h = n(698559),
    m = n(24343);
let g = (e) => {
        let { message: t, userId: n, onClose: r } = e,
            { trackUserProfileAction: s } = (0, d.KZ)();
        return (0, i.jsxs)('div', {
            className: a()(m.toast, h.toastPadding),
            children: [
                (0, i.jsx)(l.dz2, {
                    size: 'sm',
                    className: h.toastIcon,
                    color: l.TVs.colors.STATUS_POSITIVE.css
                }),
                (0, i.jsxs)('div', {
                    className: h.successToast,
                    children: [
                        (0, i.jsx)(l.Text, {
                            color: 'header-primary',
                            variant: 'text-sm/semibold',
                            children: t
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: 'text-sm/semibold',
                            children: p.intl.format(p.t.QEW8Mj, {
                                onClick: () => {
                                    s({ action: 'PRESS_REACT_REPLY_TOAST' }), null == r || r(), u.Z.openPrivateChannel(n);
                                }
                            })
                        })
                    ]
                })
            ]
        });
    },
    E = () =>
        (0, i.jsxs)('div', {
            className: a()(m.toast, h.toastPadding),
            children: [
                (0, i.jsx)(l.$jN, {
                    type: l.RAz.SPINNING_CIRCLE_SIMPLE,
                    className: h.toastIcon
                }),
                (0, i.jsx)(l.Text, {
                    color: 'header-primary',
                    variant: 'text-sm/semibold',
                    children: p.intl.string(p.t.tcARX1)
                })
            ]
        }),
    v = (e) => {
        let { userId: t, onClose: n, className: r } = e,
            { interactionTypeSent: u, showInteractionToast: d } = (0, f.Xo)(),
            m = u === _.P.REPLY ? p.intl.string(p.t.BPaiaW) : p.intl.string(p.t.Ry2EtL),
            v = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
            y = (0, l.Yzy)(
                d,
                {
                    from: {
                        transform: v ? 'translateY(0)' : 'translateY(16px)',
                        opacity: 0
                    },
                    enter: {
                        transform: 'translateY(0)',
                        opacity: 1
                    },
                    leave: {
                        transform: v ? 'translateY(0)' : 'translateY(16px)',
                        opacity: 0
                    },
                    config: {
                        mass: 1,
                        tension: 500,
                        friction: 18,
                        clamp: !0
                    },
                    delay: 200
                },
                'animate-always'
            );
        return (0, i.jsx)(i.Fragment, {
            children: y(
                (e, o) =>
                    o &&
                    (0, i.jsx)(s.animated.div, {
                        className: a()(h.toastContainer, r),
                        style: e,
                        children:
                            null != u
                                ? (0, i.jsx)(l.FNi, {
                                      message: '',
                                      type: l.ToastType.CUSTOM,
                                      id: 'react_reply_success_toast',
                                      options: {
                                          component: (0, i.jsx)(g, {
                                              userId: t,
                                              message: m,
                                              onClose: n
                                          })
                                      }
                                  })
                                : (0, i.jsx)(l.FNi, {
                                      message: '',
                                      type: l.ToastType.CUSTOM,
                                      id: 'react_reply_loading_toast',
                                      options: { component: (0, i.jsx)(E, {}) }
                                  })
                    })
            )
        });
    };

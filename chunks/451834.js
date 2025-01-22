var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(642128),
    l = r(442837),
    u = r(481060),
    c = r(493683),
    d = r(607070),
    f = r(785717),
    p = r(510659),
    h = r(228168),
    _ = r(388032),
    m = r(698559),
    g = r(24343);
let E = (e) => {
        let { userId: n, onClose: r, className: a } = e,
            { interactionTypeSent: c, showInteractionToast: f } = (0, p.Xo)(),
            g = c === h.P.REPLY ? _.intl.string(_.t.BPaiaW) : _.intl.string(_.t.Ry2EtL),
            E = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
            b = (0, u.useTransition)(
                f,
                {
                    from: {
                        transform: E ? 'translateY(0)' : 'translateY(16px)',
                        opacity: 0
                    },
                    enter: {
                        transform: 'translateY(0)',
                        opacity: 1
                    },
                    leave: {
                        transform: E ? 'translateY(0)' : 'translateY(16px)',
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
            children: b(
                (e, l) =>
                    l &&
                    (0, i.jsx)(s.animated.div, {
                        className: o()(m.toastContainer, a),
                        style: e,
                        children:
                            null != c
                                ? (0, i.jsx)(u.Toast, {
                                      message: '',
                                      type: u.ToastType.CUSTOM,
                                      id: 'react_reply_success_toast',
                                      options: {
                                          component: (0, i.jsx)(v, {
                                              userId: n,
                                              message: g,
                                              onClose: r
                                          })
                                      }
                                  })
                                : (0, i.jsx)(u.Toast, {
                                      message: '',
                                      type: u.ToastType.CUSTOM,
                                      id: 'react_reply_loading_toast',
                                      options: { component: (0, i.jsx)(y, {}) }
                                  })
                    })
            )
        });
    },
    v = (e) => {
        let { message: n, userId: r, onClose: a } = e,
            { trackUserProfileAction: s } = (0, f.KZ)();
        return (0, i.jsxs)('div', {
            className: o()(g.toast, m.toastPadding),
            children: [
                (0, i.jsx)(u.CheckmarkLargeIcon, {
                    size: 'sm',
                    className: m.toastIcon,
                    color: u.tokens.colors.STATUS_POSITIVE.css
                }),
                (0, i.jsxs)('div', {
                    className: m.successToast,
                    children: [
                        (0, i.jsx)(u.Text, {
                            color: 'header-primary',
                            variant: 'text-sm/semibold',
                            children: n
                        }),
                        (0, i.jsx)(u.Text, {
                            variant: 'text-sm/semibold',
                            children: _.intl.format(_.t.QEW8Mj, {
                                onClick: () => {
                                    s({ action: 'PRESS_REACT_REPLY_TOAST' }), null == a || a(), c.Z.openPrivateChannel(r);
                                }
                            })
                        })
                    ]
                })
            ]
        });
    },
    y = () =>
        (0, i.jsxs)('div', {
            className: o()(g.toast, m.toastPadding),
            children: [
                (0, i.jsx)(u.Spinner, {
                    type: u.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
                    className: m.toastIcon
                }),
                (0, i.jsx)(u.Text, {
                    color: 'header-primary',
                    variant: 'text-sm/semibold',
                    children: _.intl.string(_.t.tcARX1)
                })
            ]
        });
n.Z = E;

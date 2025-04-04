n.d(t, { Z: () => b });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(642128),
    s = n(442837),
    l = n(481060),
    c = n(493683),
    u = n(607070),
    d = n(785717),
    f = n(510659),
    _ = n(228168),
    p = n(388032),
    h = n(158744),
    m = n(986449);
let g = (e) => {
        let { message: t, userId: n, onClose: i } = e,
            { trackUserProfileAction: a } = (0, d.KZ)();
        return (0, r.jsxs)('div', {
            className: o()(m.toast, h.toastPadding),
            children: [
                (0, r.jsx)(l.dz2, {
                    size: 'sm',
                    className: h.toastIcon,
                    color: l.TVs.colors.STATUS_POSITIVE.css
                }),
                (0, r.jsxs)('div', {
                    className: h.successToast,
                    children: [
                        (0, r.jsx)(l.Text, {
                            color: 'header-primary',
                            variant: 'text-sm/semibold',
                            children: t
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-sm/semibold',
                            children: p.NW.format(p.t.QEW8Mj, {
                                onClick: () => {
                                    a({ action: 'PRESS_REACT_REPLY_TOAST' }), null == i || i(), c.Z.openPrivateChannel(n);
                                }
                            })
                        })
                    ]
                })
            ]
        });
    },
    E = () =>
        (0, r.jsxs)('div', {
            className: o()(m.toast, h.toastPadding),
            children: [
                (0, r.jsx)(l.$jN, {
                    type: l.RAz.SPINNING_CIRCLE_SIMPLE,
                    className: h.toastIcon
                }),
                (0, r.jsx)(l.Text, {
                    color: 'header-primary',
                    variant: 'text-sm/semibold',
                    children: p.NW.string(p.t.tcARX1)
                })
            ]
        }),
    b = (e) => {
        let { userId: t, onClose: n, className: i } = e,
            { interactionTypeSent: c, showInteractionToast: d } = (0, f.Xo)(),
            m = c === _.P.REPLY ? p.NW.string(p.t.BPaiaW) : p.NW.string(p.t.Ry2EtL),
            b = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
            y = (0, l.Yzy)(
                d,
                {
                    from: {
                        transform: b ? 'translateY(0)' : 'translateY(16px)',
                        opacity: 0
                    },
                    enter: {
                        transform: 'translateY(0)',
                        opacity: 1
                    },
                    leave: {
                        transform: b ? 'translateY(0)' : 'translateY(16px)',
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
        return (0, r.jsx)(r.Fragment, {
            children: y(
                (e, s) =>
                    s &&
                    (0, r.jsx)(a.animated.div, {
                        className: o()(h.toastContainer, i),
                        style: e,
                        children:
                            null != c
                                ? (0, r.jsx)(l.FNi, {
                                      message: '',
                                      type: l.ToastType.CUSTOM,
                                      id: 'react_reply_success_toast',
                                      options: {
                                          component: (0, r.jsx)(g, {
                                              userId: t,
                                              message: m,
                                              onClose: n
                                          })
                                      }
                                  })
                                : (0, r.jsx)(l.FNi, {
                                      message: '',
                                      type: l.ToastType.CUSTOM,
                                      id: 'react_reply_loading_toast',
                                      options: { component: (0, r.jsx)(E, {}) }
                                  })
                    })
            )
        });
    };

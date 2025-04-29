n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(272573),
    o = n(442837),
    a = n(481060),
    s = n(607070),
    l = n(388032),
    c = n(719142),
    u = n(986449);
let d = () =>
        (0, r.jsxs)('div', {
            className: u.toast,
            children: [
                (0, r.jsx)(a.$jN, {
                    type: a.RAz.SPINNING_CIRCLE_SIMPLE,
                    className: c.loadingSpinner
                }),
                (0, r.jsx)(a.Text, {
                    color: 'header-primary',
                    variant: 'text-md/normal',
                    children: l.intl.string(l.t['5z/hlJ'])
                })
            ]
        }),
    f = (e) => {
        let { shown: t, sent: n, className: c } = e,
            u = (0, o.e7)([s.Z], () => s.Z.useReducedMotion),
            f = (0, a.Yzy)(
                t,
                {
                    from: {
                        transform: u ? 'translateY(0)' : 'translateY(16px)',
                        opacity: 0
                    },
                    enter: {
                        transform: 'translateY(0)',
                        opacity: 1
                    },
                    leave: {
                        transform: u ? 'translateY(0)' : 'translateY(16px)',
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
            children: f(
                (e, t) =>
                    t &&
                    (0, r.jsx)(i.animated.div, {
                        className: c,
                        style: e,
                        children: n
                            ? (0, r.jsx)(a.FNi, {
                                  message: l.intl.string(l.t.fjcCk5),
                                  type: a.ToastType.SUCCESS,
                                  id: 'success_message_toast'
                              })
                            : (0, r.jsx)(a.FNi, {
                                  message: '',
                                  type: a.ToastType.CUSTOM,
                                  id: 'custom_loading_message_toast',
                                  options: { component: (0, r.jsx)(d, {}) }
                              })
                    })
            )
        });
    };

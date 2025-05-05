n.d(t, { Z: () => f });
var r = n(255367);
n(73800);
var i = n(481752),
    a = n(442837),
    o = n(481060),
    s = n(607070),
    l = n(388032),
    c = n(719142),
    u = n(986449);
let d = () =>
        (0, r.jsxs)('div', {
            className: u.toast,
            children: [
                (0, r.jsx)(o.$jN, {
                    type: o.RAz.SPINNING_CIRCLE_SIMPLE,
                    className: c.loadingSpinner
                }),
                (0, r.jsx)(o.Text, {
                    color: 'header-primary',
                    variant: 'text-md/normal',
                    children: l.intl.string(l.t['5z/hlJ'])
                })
            ]
        }),
    f = (e) => {
        let { shown: t, sent: n, className: c } = e,
            u = (0, a.e7)([s.Z], () => s.Z.useReducedMotion),
            f = (0, o.Yzy)(
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
                            ? (0, r.jsx)(o.FNi, {
                                  message: l.intl.string(l.t.fjcCk5),
                                  type: o.ToastType.SUCCESS,
                                  id: 'success_message_toast'
                              })
                            : (0, r.jsx)(o.FNi, {
                                  message: '',
                                  type: o.ToastType.CUSTOM,
                                  id: 'custom_loading_message_toast',
                                  options: { component: (0, r.jsx)(d, {}) }
                              })
                    })
            )
        });
    };

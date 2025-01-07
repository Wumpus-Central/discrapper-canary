var l = n(200651);
n(192379);
var a = n(666912),
    i = n(442837),
    r = n(481060),
    o = n(607070),
    s = n(388032),
    c = n(786661),
    u = n(24343);
let d = () =>
    (0, l.jsxs)('div', {
        className: u.toast,
        children: [
            (0, l.jsx)(r.Spinner, {
                type: r.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
                className: c.loadingSpinner
            }),
            (0, l.jsx)(r.Text, {
                color: 'header-primary',
                variant: 'text-md/normal',
                children: s.intl.string(s.t['5z/hlJ'])
            })
        ]
    });
t.Z = (e) => {
    let { shown: t, sent: n, className: c } = e,
        u = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        m = (0, r.useTransition)(
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
    return (0, l.jsx)(l.Fragment, {
        children: m(
            (e, t) =>
                t &&
                (0, l.jsx)(a.animated.div, {
                    className: c,
                    style: e,
                    children: n
                        ? (0, l.jsx)(r.Toast, {
                              message: s.intl.string(s.t.fjcCk5),
                              type: r.ToastType.SUCCESS,
                              id: 'success_message_toast'
                          })
                        : (0, l.jsx)(r.Toast, {
                              message: '',
                              type: r.ToastType.CUSTOM,
                              id: 'custom_loading_message_toast',
                              options: { component: (0, l.jsx)(d, {}) }
                          })
                })
        )
    });
};

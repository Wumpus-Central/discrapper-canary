n.d(t, { Z: () => m });
var l = n(200651);
n(192379);
var a = n(642128),
    i = n(442837),
    r = n(481060),
    o = n(607070),
    s = n(388032),
    c = n(924993),
    d = n(241700);
let u = () =>
        (0, l.jsxs)('div', {
            className: d.toast,
            children: [
                (0, l.jsx)(r.$jN, {
                    type: r.RAz.SPINNING_CIRCLE_SIMPLE,
                    className: c.loadingSpinner
                }),
                (0, l.jsx)(r.Text, {
                    color: 'header-primary',
                    variant: 'text-md/normal',
                    children: s.intl.string(s.t['5z/hlJ'])
                })
            ]
        }),
    m = (e) => {
        let { shown: t, sent: n, className: c } = e,
            d = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
            m = (0, r.Yzy)(
                t,
                {
                    from: {
                        transform: d ? 'translateY(0)' : 'translateY(16px)',
                        opacity: 0
                    },
                    enter: {
                        transform: 'translateY(0)',
                        opacity: 1
                    },
                    leave: {
                        transform: d ? 'translateY(0)' : 'translateY(16px)',
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
                            ? (0, l.jsx)(r.FNi, {
                                  message: s.intl.string(s.t.fjcCk5),
                                  type: r.ToastType.SUCCESS,
                                  id: 'success_message_toast'
                              })
                            : (0, l.jsx)(r.FNi, {
                                  message: '',
                                  type: r.ToastType.CUSTOM,
                                  id: 'custom_loading_message_toast',
                                  options: { component: (0, l.jsx)(u, {}) }
                              })
                    })
            )
        });
    };

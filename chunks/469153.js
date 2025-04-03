n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var a = n(642128),
    l = n(442837),
    i = n(481060),
    o = n(607070),
    s = n(388032),
    c = n(719142),
    u = n(986449);
let d = () =>
        (0, r.jsxs)('div', {
            className: u.toast,
            children: [
                (0, r.jsx)(i.$jN, {
                    type: i.RAz.SPINNING_CIRCLE_SIMPLE,
                    className: c.loadingSpinner
                }),
                (0, r.jsx)(i.Text, {
                    color: 'header-primary',
                    variant: 'text-md/normal',
                    children: s.NW.string(s.t['5z/hlJ'])
                })
            ]
        }),
    m = (e) => {
        let { shown: t, sent: n, className: c } = e,
            u = (0, l.e7)([o.Z], () => o.Z.useReducedMotion),
            m = (0, i.Yzy)(
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
            children: m(
                (e, t) =>
                    t &&
                    (0, r.jsx)(a.animated.div, {
                        className: c,
                        style: e,
                        children: n
                            ? (0, r.jsx)(i.FNi, {
                                  message: s.NW.string(s.t.fjcCk5),
                                  type: i.ToastType.SUCCESS,
                                  id: 'success_message_toast'
                              })
                            : (0, r.jsx)(i.FNi, {
                                  message: '',
                                  type: i.ToastType.CUSTOM,
                                  id: 'custom_loading_message_toast',
                                  options: { component: (0, r.jsx)(d, {}) }
                              })
                    })
            )
        });
    };

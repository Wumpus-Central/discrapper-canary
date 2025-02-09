t.d(n, { i: () => u }), t(47120);
var l = t(200651),
    i = t(192379);
t(120356);
var s = t(642128),
    r = t(481060),
    a = t(671533),
    o = t(388032),
    d = t(965366);
function c(e) {
    let { testimonial: n, className: t } = e,
        { message: i, profilePic: s, adminTitle: a, emphasisColor: c = 'interactive-normal' } = n;
    return (0, l.jsxs)('div', {
        className: t,
        children: [
            (0, l.jsx)(r.Text, {
                variant: 'text-sm/medium',
                color: 'header-secondary',
                children: o.intl.format(i, {
                    testimonialHook: (e, n) =>
                        (0, l.jsx)(
                            r.Text,
                            {
                                tag: 'span',
                                variant: 'text-sm/bold',
                                color: c,
                                children: e
                            },
                            n
                        )
                })
            }),
            (0, l.jsxs)('div', {
                className: d.userContainer,
                children: [
                    (0, l.jsx)(r.qEK, {
                        src: s,
                        size: r.EFr.SIZE_16,
                        'aria-hidden': !0
                    }),
                    (0, l.jsx)(r.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: a
                    })
                ]
            })
        ]
    });
}
function u(e) {
    let { testimonials: n } = e,
        [[t, s], c] = i.useState([0, 'right']),
        u = i.useCallback(() => {
            c((e) => {
                let [t] = e;
                return 0 === t ? [n.length - 1, 'left'] : [t - 1, 'left'];
            });
        }, [c, n.length]),
        I = i.useCallback(() => {
            c((e) => {
                let [t] = e;
                return [(t + 1) % n.length, 'right'];
            });
        }, [c, n.length]),
        h = n[t],
        N = i.useCallback(
            (e, n, t, i) =>
                (0, l.jsx)(
                    m,
                    {
                        item: n,
                        state: t,
                        cleanup: i,
                        direction: s
                    },
                    e
                ),
            [s]
        );
    return (0, l.jsxs)('div', {
        className: d.testimonialHeroContainer,
        children: [
            (0, l.jsx)('div', {
                className: d.animatedContainer,
                children: (0, l.jsx)(r.W3x, {
                    items: [h],
                    renderItem: N,
                    getItemKey: (e) => e.adminTitle
                })
            }),
            (0, l.jsx)(r.Text, {
                variant: 'text-lg/bold',
                className: d.heroQuotes,
                children: '\u201C'
            }),
            (0, l.jsxs)('div', {
                className: d.testimonialsControls,
                children: [
                    (0, l.jsxs)(r.zxk, {
                        className: d.testimonialControl,
                        innerClassName: d.testimonialControlInner,
                        onClick: u,
                        size: r.zxk.Sizes.MIN,
                        color: r.zxk.Colors.PRIMARY,
                        children: [
                            (0, l.jsx)(a.Z, {
                                className: d.testimonialControlIcon,
                                direction: a.Z.Directions.LEFT
                            }),
                            (0, l.jsx)(r.nn4, { children: o.intl.string(o.t['13/7kZ']) })
                        ]
                    }),
                    (0, l.jsxs)(r.zxk, {
                        className: d.testimonialControl,
                        innerClassName: d.testimonialControlInner,
                        onClick: I,
                        size: r.zxk.Sizes.MIN,
                        color: r.zxk.Colors.PRIMARY,
                        children: [
                            (0, l.jsx)(a.Z, {
                                className: d.testimonialControlIcon,
                                direction: a.Z.Directions.RIGHT
                            }),
                            (0, l.jsx)(r.nn4, { children: o.intl.string(o.t.PDTjLC) })
                        ]
                    })
                ]
            })
        ]
    });
}
function m(e) {
    let { item: n, state: t, cleanup: i, direction: a } = e,
        [o] = (0, r.q_F)(
            () => {
                switch (t) {
                    case r.pJH.ENTERED:
                        return {
                            from: { transform: 'right' === a ? 'translateX(150%)' : 'translate(-150%)' },
                            to: { transform: 'translateX(0%)' }
                        };
                    case r.pJH.YEETED:
                        return {
                            from: { transform: 'translateX(0%)' },
                            to: { transform: 'right' === a ? 'translateX(-150%)' : 'translate(150%)' },
                            onRest: i
                        };
                    default:
                        return {};
                }
            },
            'respect-motion-settings',
            [t]
        );
    return (0, l.jsx)(s.animated.div, {
        style: o,
        children: (0, l.jsx)(c, {
            className: d.testimonial,
            testimonial: n
        })
    });
}

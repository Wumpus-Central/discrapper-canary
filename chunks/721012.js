t.d(n, {
    i: function () {
        return u;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379);
t(120356);
var r = t(666912),
    s = t(481060),
    a = t(671533),
    o = t(388032),
    c = t(957589);
function d(e) {
    let { testimonial: n, className: t } = e,
        { message: l, profilePic: r, adminTitle: a, emphasisColor: d = 'interactive-normal' } = n;
    return (0, i.jsxs)('div', {
        className: t,
        children: [
            (0, i.jsx)(s.Text, {
                variant: 'text-sm/medium',
                color: 'header-secondary',
                children: o.intl.format(l, {
                    testimonialHook: (e, n) =>
                        (0, i.jsx)(
                            s.Text,
                            {
                                tag: 'span',
                                variant: 'text-sm/bold',
                                color: d,
                                children: e
                            },
                            n
                        )
                })
            }),
            (0, i.jsxs)('div', {
                className: c.userContainer,
                children: [
                    (0, i.jsx)(s.Avatar, {
                        src: r,
                        size: s.AvatarSizes.SIZE_16,
                        'aria-hidden': !0
                    }),
                    (0, i.jsx)(s.Text, {
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
        [[t, r], d] = l.useState([0, 'right']),
        u = l.useCallback(() => {
            d((e) => {
                let [t] = e;
                return 0 === t ? [n.length - 1, 'left'] : [t - 1, 'left'];
            });
        }, [d, n.length]),
        I = l.useCallback(() => {
            d((e) => {
                let [t] = e;
                return [(t + 1) % n.length, 'right'];
            });
        }, [d, n.length]),
        h = n[t],
        N = l.useCallback(
            (e, n, t, l) =>
                (0, i.jsx)(
                    m,
                    {
                        item: n,
                        state: t,
                        cleanup: l,
                        direction: r
                    },
                    e
                ),
            [r]
        );
    return (0, i.jsxs)('div', {
        className: c.testimonialHeroContainer,
        children: [
            (0, i.jsx)('div', {
                className: c.animatedContainer,
                children: (0, i.jsx)(s.TransitionGroup, {
                    items: [h],
                    renderItem: N,
                    getItemKey: (e) => e.adminTitle
                })
            }),
            (0, i.jsx)(s.Text, {
                variant: 'text-lg/bold',
                className: c.heroQuotes,
                children: '\u201C'
            }),
            (0, i.jsxs)('div', {
                className: c.testimonialsControls,
                children: [
                    (0, i.jsxs)(s.Button, {
                        className: c.testimonialControl,
                        innerClassName: c.testimonialControlInner,
                        onClick: u,
                        size: s.Button.Sizes.MIN,
                        color: s.Button.Colors.PRIMARY,
                        children: [
                            (0, i.jsx)(a.Z, {
                                className: c.testimonialControlIcon,
                                direction: a.Z.Directions.LEFT
                            }),
                            (0, i.jsx)(s.HiddenVisually, { children: o.intl.string(o.t['13/7kZ']) })
                        ]
                    }),
                    (0, i.jsxs)(s.Button, {
                        className: c.testimonialControl,
                        innerClassName: c.testimonialControlInner,
                        onClick: I,
                        size: s.Button.Sizes.MIN,
                        color: s.Button.Colors.PRIMARY,
                        children: [
                            (0, i.jsx)(a.Z, {
                                className: c.testimonialControlIcon,
                                direction: a.Z.Directions.RIGHT
                            }),
                            (0, i.jsx)(s.HiddenVisually, { children: o.intl.string(o.t.PDTjLC) })
                        ]
                    })
                ]
            })
        ]
    });
}
function m(e) {
    let { item: n, state: t, cleanup: l, direction: a } = e,
        [o] = (0, s.useSpring)(
            () => {
                switch (t) {
                    case s.TransitionStates.ENTERED:
                        return {
                            from: { transform: 'right' === a ? 'translateX(150%)' : 'translate(-150%)' },
                            to: { transform: 'translateX(0%)' }
                        };
                    case s.TransitionStates.YEETED:
                        return {
                            from: { transform: 'translateX(0%)' },
                            to: { transform: 'right' === a ? 'translateX(-150%)' : 'translate(150%)' },
                            onRest: l
                        };
                    default:
                        return {};
                }
            },
            'respect-motion-settings',
            [t]
        );
    return (0, i.jsx)(r.animated.div, {
        style: o,
        children: (0, i.jsx)(d, {
            className: c.testimonial,
            testimonial: n
        })
    });
}

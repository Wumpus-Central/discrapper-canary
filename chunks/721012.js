n.d(t, { i: () => u }), n(388685);
var l = n(255367),
    i = n(73800);
n(120356);
var r = n(481752),
    s = n(481060),
    a = n(671533),
    o = n(388032),
    c = n(73697);
function d(e) {
    let { testimonial: t, className: n } = e,
        { message: i, profilePic: r, adminTitle: a, emphasisColor: d = 'interactive-normal' } = t;
    return (0, l.jsxs)('div', {
        className: n,
        children: [
            (0, l.jsx)(s.Text, {
                variant: 'text-sm/medium',
                color: 'header-secondary',
                children: o.intl.format(i, {
                    testimonialHook: (e, t) =>
                        (0, l.jsx)(
                            s.Text,
                            {
                                tag: 'span',
                                variant: 'text-sm/bold',
                                color: d,
                                children: e
                            },
                            t
                        )
                })
            }),
            (0, l.jsxs)('div', {
                className: c.userContainer,
                children: [
                    (0, l.jsx)(s.qEK, {
                        src: r,
                        size: s.EFr.SIZE_16,
                        'aria-hidden': !0
                    }),
                    (0, l.jsx)(s.Text, {
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
    let { testimonials: t } = e,
        [[n, r], d] = i.useState([0, 'right']),
        u = i.useCallback(() => {
            d((e) => {
                let [n] = e;
                return 0 === n ? [t.length - 1, 'left'] : [n - 1, 'left'];
            });
        }, [d, t.length]),
        I = i.useCallback(() => {
            d((e) => {
                let [n] = e;
                return [(n + 1) % t.length, 'right'];
            });
        }, [d, t.length]),
        h = t[n],
        g = i.useCallback(
            (e, t, n, i) =>
                (0, l.jsx)(
                    m,
                    {
                        item: t,
                        state: n,
                        cleanup: i,
                        direction: r
                    },
                    e
                ),
            [r]
        );
    return (0, l.jsxs)('div', {
        className: c.testimonialHeroContainer,
        children: [
            (0, l.jsx)('div', {
                className: c.animatedContainer,
                children: (0, l.jsx)(s.W3x, {
                    items: [h],
                    renderItem: g,
                    getItemKey: (e) => e.adminTitle
                })
            }),
            (0, l.jsx)(s.Text, {
                variant: 'text-lg/bold',
                className: c.heroQuotes,
                children: '\u201C'
            }),
            (0, l.jsxs)('div', {
                className: c.testimonialsControls,
                children: [
                    (0, l.jsxs)(s.zxk, {
                        className: c.testimonialControl,
                        innerClassName: c.testimonialControlInner,
                        onClick: u,
                        size: s.zxk.Sizes.MIN,
                        color: s.zxk.Colors.PRIMARY,
                        children: [
                            (0, l.jsx)(a.Z, {
                                className: c.testimonialControlIcon,
                                direction: a.Z.Directions.LEFT
                            }),
                            (0, l.jsx)(s.nn4, { children: o.intl.string(o.t['13/7kZ']) })
                        ]
                    }),
                    (0, l.jsxs)(s.zxk, {
                        className: c.testimonialControl,
                        innerClassName: c.testimonialControlInner,
                        onClick: I,
                        size: s.zxk.Sizes.MIN,
                        color: s.zxk.Colors.PRIMARY,
                        children: [
                            (0, l.jsx)(a.Z, {
                                className: c.testimonialControlIcon,
                                direction: a.Z.Directions.RIGHT
                            }),
                            (0, l.jsx)(s.nn4, { children: o.intl.string(o.t.PDTjLC) })
                        ]
                    })
                ]
            })
        ]
    });
}
function m(e) {
    let { item: t, state: n, cleanup: i, direction: a } = e,
        [o] = (0, s.q_F)(
            () => {
                switch (n) {
                    case s.pJH.ENTERED:
                        return {
                            from: { transform: 'right' === a ? 'translateX(150%)' : 'translate(-150%)' },
                            to: { transform: 'translateX(0%)' }
                        };
                    case s.pJH.YEETED:
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
            [n]
        );
    return (0, l.jsx)(r.animated.div, {
        style: o,
        children: (0, l.jsx)(d, {
            className: c.testimonial,
            testimonial: t
        })
    });
}

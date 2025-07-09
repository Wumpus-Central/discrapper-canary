(n.d(t, { i: () => m }), n(388685));
var l = n(255367),
    i = n(73800);
n(120356);
var r = n(264738),
    s = n(755721),
    a = n(481060),
    o = n(671533),
    c = n(388032),
    d = n(73697);
function u(e) {
    let { testimonial: t, className: n } = e,
        { message: i, profilePic: r, adminTitle: s, emphasisColor: o = 'interactive-normal' } = t;
    return (0, l.jsxs)('div', {
        className: n,
        children: [
            (0, l.jsx)(a.Text, {
                variant: 'text-sm/medium',
                color: 'header-secondary',
                children: c.intl.format(i, {
                    testimonialHook: (e, t) =>
                        (0, l.jsx)(
                            a.Text,
                            {
                                tag: 'span',
                                variant: 'text-sm/bold',
                                color: o,
                                children: e
                            },
                            t
                        )
                })
            }),
            (0, l.jsxs)('div', {
                className: d.userContainer,
                children: [
                    (0, l.jsx)(a.qEK, {
                        src: r,
                        size: a.EFr.SIZE_16,
                        'aria-hidden': !0
                    }),
                    (0, l.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: s
                    })
                ]
            })
        ]
    });
}
function m(e) {
    let { testimonials: t } = e,
        [[n, r], u] = i.useState([0, 'right']),
        m = i.useCallback(() => {
            u((e) => {
                let [n] = e;
                return 0 === n ? [t.length - 1, 'left'] : [n - 1, 'left'];
            });
        }, [u, t.length]),
        h = i.useCallback(() => {
            u((e) => {
                let [n] = e;
                return [(n + 1) % t.length, 'right'];
            });
        }, [u, t.length]),
        g = t[n],
        N = i.useCallback(
            (e, t, n, i) =>
                (0, l.jsx)(
                    I,
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
        className: d.testimonialHeroContainer,
        children: [
            (0, l.jsx)('div', {
                className: d.animatedContainer,
                children: (0, l.jsx)(a.W3x, {
                    items: [g],
                    renderItem: N,
                    getItemKey: (e) => e.adminTitle
                })
            }),
            (0, l.jsx)(a.Text, {
                variant: 'text-lg/bold',
                className: d.heroQuotes,
                children: '\u201C'
            }),
            (0, l.jsxs)('div', {
                className: d.testimonialsControls,
                children: [
                    (0, l.jsxs)(s.zx, {
                        className: d.testimonialControl,
                        innerClassName: d.testimonialControlInner,
                        onClick: m,
                        size: s.zx.Sizes.MIN,
                        color: s.zx.Colors.PRIMARY,
                        children: [
                            (0, l.jsx)(o.Z, {
                                className: d.testimonialControlIcon,
                                direction: o.Z.Directions.LEFT
                            }),
                            (0, l.jsx)(a.nn4, { children: c.intl.string(c.t['13/7kZ']) })
                        ]
                    }),
                    (0, l.jsxs)(s.zx, {
                        className: d.testimonialControl,
                        innerClassName: d.testimonialControlInner,
                        onClick: h,
                        size: s.zx.Sizes.MIN,
                        color: s.zx.Colors.PRIMARY,
                        children: [
                            (0, l.jsx)(o.Z, {
                                className: d.testimonialControlIcon,
                                direction: o.Z.Directions.RIGHT
                            }),
                            (0, l.jsx)(a.nn4, { children: c.intl.string(c.t.PDTjLC) })
                        ]
                    })
                ]
            })
        ]
    });
}
function I(e) {
    let { item: t, state: n, cleanup: i, direction: s } = e,
        [o] = (0, a.q_F)(
            () => {
                switch (n) {
                    case a.pJH.ENTERED:
                        return {
                            from: { transform: 'right' === s ? 'translateX(150%)' : 'translate(-150%)' },
                            to: { transform: 'translateX(0%)' }
                        };
                    case a.pJH.YEETED:
                        return {
                            from: { transform: 'translateX(0%)' },
                            to: { transform: 'right' === s ? 'translateX(-150%)' : 'translate(150%)' },
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
        children: (0, l.jsx)(u, {
            className: d.testimonial,
            testimonial: t
        })
    });
}

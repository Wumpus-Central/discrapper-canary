n.d(t, { Z: () => u }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(642128),
    o = n(481060),
    c = n(320319),
    d = n(931876);
let u = (e) => {
    let { cards: t, className: n, cardType: r } = e,
        u = () => (window.innerWidth < 910 ? 1 : window.innerWidth < 1400 ? 2 : 3),
        [m, h] = s.useState(0),
        [g, _] = s.useState(u()),
        x = t.length;
    s.useEffect(() => {
        let e = () => {
            _(u());
        };
        return (
            window.addEventListener('resize', e),
            () => {
                window.removeEventListener('resize', e);
            }
        );
    }, []),
        s.useEffect(() => {
            h((e) => (x > g && e > x - g ? x - g : x <= g ? 0 : e));
        }, [x, g]);
    let p = m > 0,
        E = s.useCallback((e) => ({ x: (e - m) * 100 }), [m]),
        [C, f] = (0, o.bYB)(t.length, E);
    return (
        s.useEffect(() => {
            f(E);
        }, [f, E]),
        (0, i.jsx)('div', {
            className: n,
            children: (0, i.jsxs)('div', {
                className: d.cardContainer,
                children: [
                    x > g &&
                        (0, i.jsx)(o.P3F, {
                            onClick: p
                                ? () => {
                                      h((e) => (0 === e ? x - g : e - 1));
                                  }
                                : void 0,
                            className: l()({
                                [d.leftArrow]: p,
                                [d.inactiveArrow]: !p
                            }),
                            children: (0, i.jsx)(o.whL, {
                                className: d.arrowIcon,
                                colorClass: d.arrowIcon
                            })
                        }),
                    (0, i.jsx)('div', {
                        className: d.cardInnerContainer,
                        children: C.map((e, n) => {
                            let { x: s } = e;
                            return (0, i.jsx)(
                                a.animated.div,
                                {
                                    className: d.card,
                                    style: { transform: null == s ? void 0 : s.to((e) => 'translate3d('.concat(e, '%,0,0)')) },
                                    children: (0, i.jsx)(
                                        c.Z,
                                        {
                                            ...t[n],
                                            cardType: r
                                        },
                                        ''.concat(t[n].name, '_').concat(n, '_perks_card')
                                    )
                                },
                                ''.concat(t[n].name, '_').concat(n, '_animated_div')
                            );
                        })
                    }),
                    x > g &&
                        (0, i.jsx)(o.P3F, {
                            onClick: () => {
                                h((e) => (e >= x - g ? 0 : e + 1));
                            },
                            className: d.rightArrow,
                            children: (0, i.jsx)(o.ZSh, {
                                className: d.arrowIcon,
                                colorClass: d.arrowIcon
                            })
                        }),
                    x > g &&
                        (0, i.jsx)('div', {
                            className: d.cardProgressBar,
                            children: t.map((e, t) => {
                                if (!(t > x - g)) return (0, i.jsx)('div', { className: t === m ? d.selectedDot : d.dot }, 'progress_bar_dot_'.concat(t));
                            })
                        })
                ]
            })
        })
    );
};

n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(642128),
    o = n(481060),
    c = n(320319),
    d = n(931876);
t.Z = (e) => {
    let { cards: t, className: n, cardType: s } = e,
        u = () => (window.innerWidth < 910 ? 1 : window.innerWidth < 1400 ? 2 : 3),
        [m, g] = r.useState(0),
        [h, p] = r.useState(u()),
        x = t.length;
    r.useEffect(() => {
        let e = () => {
            p(u());
        };
        return (
            window.addEventListener('resize', e),
            () => {
                window.removeEventListener('resize', e);
            }
        );
    }, []),
        r.useEffect(() => {
            g((e) => (x > h && e > x - h ? x - h : x <= h ? 0 : e));
        }, [x, h]);
    let f = m > 0,
        E = r.useCallback((e) => ({ x: (e - m) * 100 }), [m]),
        [_, C] = (0, o.useSprings)(t.length, E);
    return (
        r.useEffect(() => {
            C(E);
        }, [C, E]),
        (0, i.jsx)('div', {
            className: n,
            children: (0, i.jsxs)('div', {
                className: d.cardContainer,
                children: [
                    x > h &&
                        (0, i.jsx)(o.Clickable, {
                            onClick: f
                                ? () => {
                                      g((e) => (0 === e ? x - h : e - 1));
                                  }
                                : void 0,
                            className: a()({
                                [d.leftArrow]: f,
                                [d.inactiveArrow]: !f
                            }),
                            children: (0, i.jsx)(o.ArrowSmallLeftIcon, {
                                className: d.arrowIcon,
                                colorClass: d.arrowIcon
                            })
                        }),
                    (0, i.jsx)('div', {
                        className: d.cardInnerContainer,
                        children: _.map((e, n) => {
                            let { x: r } = e;
                            return (0, i.jsx)(
                                l.animated.div,
                                {
                                    className: d.card,
                                    style: { transform: null == r ? void 0 : r.to((e) => 'translate3d('.concat(e, '%,0,0)')) },
                                    children: (0, i.jsx)(
                                        c.Z,
                                        {
                                            ...t[n],
                                            cardType: s
                                        },
                                        ''.concat(t[n].name, '_').concat(n, '_perks_card')
                                    )
                                },
                                ''.concat(t[n].name, '_').concat(n, '_animated_div')
                            );
                        })
                    }),
                    x > h &&
                        (0, i.jsx)(o.Clickable, {
                            onClick: () => {
                                g((e) => (e >= x - h ? 0 : e + 1));
                            },
                            className: d.rightArrow,
                            children: (0, i.jsx)(o.ArrowSmallRightIcon, {
                                className: d.arrowIcon,
                                colorClass: d.arrowIcon
                            })
                        }),
                    x > h &&
                        (0, i.jsx)('div', {
                            className: d.cardProgressBar,
                            children: t.map((e, t) => {
                                if (!(t > x - h)) return (0, i.jsx)('div', { className: t === m ? d.selectedDot : d.dot }, 'progress_bar_dot_'.concat(t));
                            })
                        })
                ]
            })
        })
    );
};

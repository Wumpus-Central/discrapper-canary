n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(666912),
    o = n(481060),
    c = n(320319),
    d = n(931876);
t.Z = (e) => {
    let { cards: t, className: n, cardType: a } = e,
        u = () => (window.innerWidth < 910 ? 1 : window.innerWidth < 1400 ? 2 : 3),
        [g, m] = r.useState(0),
        [f, p] = r.useState(u()),
        _ = t.length;
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
            _ > f && g > _ - f ? m(_ - f) : _ <= f && m(0);
        }, [_, f]);
    let h = g > 0,
        x = r.useCallback((e) => ({ x: (e - g) * 100 }), [g]),
        [E, b] = (0, o.useSprings)(t.length, x);
    return (
        r.useEffect(() => {
            b(x);
        }, [b, x]),
        (0, i.jsx)('div', {
            className: n,
            children: (0, i.jsxs)('div', {
                className: d.cardContainer,
                children: [
                    _ > f &&
                        (0, i.jsx)(o.Clickable, {
                            onClick: h
                                ? () => {
                                      m((e) => (0 === e ? _ - f : e - 1));
                                  }
                                : void 0,
                            className: s()({
                                [d.leftArrow]: h,
                                [d.inactiveArrow]: !h
                            }),
                            children: (0, i.jsx)(o.ArrowSmallLeftIcon, {
                                className: d.arrowIcon,
                                colorClass: d.arrowIcon
                            })
                        }),
                    (0, i.jsx)('div', {
                        className: d.cardInnerContainer,
                        children: E.map((e, n) => {
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
                                            cardType: a
                                        },
                                        ''.concat(t[n].name, '_').concat(n, '_perks_card')
                                    )
                                },
                                ''.concat(t[n].name, '_').concat(n, '_animated_div')
                            );
                        })
                    }),
                    _ > f &&
                        (0, i.jsx)(o.Clickable, {
                            onClick: () => {
                                m((e) => (e >= _ - f ? 0 : e + 1));
                            },
                            className: d.rightArrow,
                            children: (0, i.jsx)(o.ArrowSmallRightIcon, {
                                className: d.arrowIcon,
                                colorClass: d.arrowIcon
                            })
                        }),
                    _ > f &&
                        (0, i.jsx)('div', {
                            className: d.cardProgressBar,
                            children: t.map((e, t) => {
                                if (!(t > _ - f)) return (0, i.jsx)('div', { className: t === g ? d.selectedDot : d.dot }, 'progress_bar_dot_'.concat(t));
                            })
                        })
                ]
            })
        })
    );
};

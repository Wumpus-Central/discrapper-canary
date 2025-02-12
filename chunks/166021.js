n.d(t, { Z: () => u }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(642128),
    o = n(481060),
    c = n(320319),
    d = n(958402);
let u = (e) => {
    let { cards: t, className: n, cardType: a } = e,
        u = () => (window.innerWidth < 910 ? 1 : window.innerWidth < 1400 ? 2 : 3),
        [m, g] = r.useState(0),
        [_, p] = r.useState(u()),
        f = t.length;
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
            g((e) => (f > _ && e > f - _ ? f - _ : f <= _ ? 0 : e));
        }, [f, _]);
    let h = m > 0,
        x = r.useCallback((e) => ({ x: (e - m) * 100 }), [m]),
        [E, C] = (0, o.bYB)(t.length, x);
    return (
        r.useEffect(() => {
            C(x);
        }, [C, x]),
        (0, i.jsx)('div', {
            className: n,
            children: (0, i.jsxs)('div', {
                className: d.cardContainer,
                children: [
                    f > _ &&
                        (0, i.jsx)(o.P3F, {
                            onClick: h
                                ? () => {
                                      g((e) => (0 === e ? f - _ : e - 1));
                                  }
                                : void 0,
                            className: s()({
                                [d.leftArrow]: h,
                                [d.inactiveArrow]: !h
                            }),
                            children: (0, i.jsx)(o.whL, {
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
                    f > _ &&
                        (0, i.jsx)(o.P3F, {
                            onClick: () => {
                                g((e) => (e >= f - _ ? 0 : e + 1));
                            },
                            className: d.rightArrow,
                            children: (0, i.jsx)(o.ZSh, {
                                className: d.arrowIcon,
                                colorClass: d.arrowIcon
                            })
                        }),
                    f > _ &&
                        (0, i.jsx)('div', {
                            className: d.cardProgressBar,
                            children: t.map((e, t) => {
                                if (!(t > f - _)) return (0, i.jsx)('div', { className: t === m ? d.selectedDot : d.dot }, 'progress_bar_dot_'.concat(t));
                            })
                        })
                ]
            })
        })
    );
};

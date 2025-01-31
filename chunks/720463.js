n.d(t, { E: () => h });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(568611),
    a = n(693789),
    o = n(481060),
    c = n(965789),
    d = n(388032),
    u = n(588245),
    m = n(865446);
let h = (e) => {
    let { earnedOrbsQuantity: t, descriptionText: n = d.intl.string(d.t['4YgBe3']), ctaText: s = d.intl.string(d.t.WYchdX), linkText: h = d.intl.string(d.t['H57f4+']), ctaOnClick: g, linkTo: _ } = e;
    return (0, i.jsxs)('div', {
        className: r()(m.container, u.baseCardOutline),
        children: [
            (0, i.jsx)('img', {
                src: c.r,
                className: m.gif,
                alt: 'Orb GIF'
            }),
            (0, i.jsxs)('div', {
                className: m.contentContainer,
                children: [
                    (0, i.jsx)('h3', {
                        className: u.coachmarkTitle,
                        children: d.intl.format(d.t.lA7CLi, { quantity: t })
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-sm/medium',
                        className: u.coachmarkDescription,
                        children: n
                    }),
                    (0, i.jsx)(a.zx, {
                        className: m.ctaButton,
                        color: a.zx.Colors.BRAND,
                        look: a.zx.Looks.FILLED,
                        onClick: g,
                        fullWidth: !0,
                        children: s
                    }),
                    (0, i.jsx)(l.rU, {
                        to: { pathname: _ },
                        children: (0, i.jsx)(o.Text, {
                            variant: 'text-sm/medium',
                            className: m.link,
                            children: h
                        })
                    })
                ]
            })
        ]
    });
};

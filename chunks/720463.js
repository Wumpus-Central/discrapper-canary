n.d(t, {
    BalanceWidgetEarnedOrbsCoachmarkModal: () => p,
    E: () => x
});
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(568611),
    a = n(693789),
    o = n(481060),
    c = n(751648),
    d = (n(965789), n(317257)),
    u = n(970815),
    m = n(741808),
    h = n(388032),
    g = n(588245),
    _ = n(865446);
let x = (e) => {
    let { earnedOrbsQuantity: t, descriptionText: s = h.intl.string(h.t['4YgBe3']), ctaText: c = h.intl.string(h.t.WYchdX), linkText: d = h.intl.string(h.t['H57f4+']), ctaOnClick: u, linkOnClick: m, linkTo: x } = e;
    return (0, i.jsxs)('div', {
        className: r()(_.container, g.baseCardOutline),
        children: [
            (0, i.jsx)('div', {
                className: r()(_.gifContainer, { [_.centerContent]: !0 }),
                children: (0, i.jsx)('img', {
                    src: n(709538),
                    className: _.orbSvg,
                    alt: 'Orb GIF'
                })
            }),
            (0, i.jsxs)('div', {
                className: _.contentContainer,
                children: [
                    (0, i.jsx)('h3', {
                        className: g.coachmarkTitle,
                        children: h.intl.format(h.t.lA7CLi, { quantity: t })
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-sm/medium',
                        className: g.coachmarkDescription,
                        children: s
                    }),
                    (0, i.jsx)(a.zx, {
                        className: _.ctaButton,
                        color: a.zx.Colors.BRAND,
                        look: a.zx.Looks.FILLED,
                        onClick: u,
                        fullWidth: !0,
                        children: c
                    }),
                    (0, i.jsx)(l.rU, {
                        to: { pathname: x },
                        onClick: m,
                        children: (0, i.jsx)(o.Text, {
                            variant: 'text-sm/medium',
                            className: _.link,
                            children: d
                        })
                    })
                ]
            })
        ]
    });
};
function p(e) {
    let { earnedOrbsQuantity: t, balance: n, backgroundElementRef: s, onClose: r, onClickPill: l, ctaOnClick: a, linkOnClick: o, ...g } = e,
        p = async () => {
            await (0, c.j2)(), await r();
        };
    return (0, i.jsxs)(m.X, {
        className: _.coachmarkModalContainer,
        backgroundElementRef: s,
        getOffsetsRelativeToElement: () => ({
            top: 0,
            right: 0
        }),
        minimumOffsets: { right: 12 },
        fallbackAbsoluteOffsets: {
            top: 84,
            right: 32
        },
        children: [
            (0, i.jsx)(u.A4, {
                onClick: async () => {
                    await p(), l();
                },
                balance: n,
                placeholderBalance: null != n ? n : 0,
                balanceWidgetMode: d.b.DEFAULT
            }),
            (0, i.jsx)(x, {
                earnedOrbsQuantity: t,
                ctaText: h.intl.string(h.t['H57f4+']),
                linkText: h.intl.string(h.t['7f4H7O']),
                ctaOnClick: async () => {
                    await p(), a();
                },
                linkOnClick: async () => {
                    await p(), o();
                }
            })
        ]
    });
}

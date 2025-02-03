n.d(t, {
    BalanceWidgetEarnedOrbsCoachmarkModal: () => E,
    E: () => p
});
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(568611),
    a = n(693789),
    o = n(481060),
    c = n(751648),
    d = n(965789),
    u = n(317257),
    m = n(970815),
    h = n(741808),
    g = n(388032),
    _ = n(588245),
    x = n(865446);
let p = (e) => {
    let { earnedOrbsQuantity: t, descriptionText: n = g.intl.string(g.t['4YgBe3']), ctaText: s = g.intl.string(g.t.WYchdX), linkText: c = g.intl.string(g.t['H57f4+']), ctaOnClick: u, linkTo: m } = e;
    return (0, i.jsxs)('div', {
        className: r()(x.container, _.baseCardOutline),
        children: [
            (0, i.jsx)('img', {
                src: d.r,
                className: x.gif,
                alt: 'Orb GIF'
            }),
            (0, i.jsxs)('div', {
                className: x.contentContainer,
                children: [
                    (0, i.jsx)('h3', {
                        className: _.coachmarkTitle,
                        children: g.intl.format(g.t.lA7CLi, { quantity: t })
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-sm/medium',
                        className: _.coachmarkDescription,
                        children: n
                    }),
                    (0, i.jsx)(a.zx, {
                        className: x.ctaButton,
                        color: a.zx.Colors.BRAND,
                        look: a.zx.Looks.FILLED,
                        onClick: u,
                        fullWidth: !0,
                        children: s
                    }),
                    (0, i.jsx)(l.rU, {
                        to: { pathname: m },
                        children: (0, i.jsx)(o.Text, {
                            variant: 'text-sm/medium',
                            className: x.link,
                            children: c
                        })
                    })
                ]
            })
        ]
    });
};
function E(e) {
    let { earnedOrbsQuantity: t, balance: n, backgroundElementRef: s, onClose: r, onClickPill: l, ctaOnClick: a, ...o } = e,
        d = async () => {
            await (0, c.j2)(), await r();
        };
    return (0, i.jsxs)(h.X, {
        className: x.coachmarkModalContainer,
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
            (0, i.jsx)(m.A4, {
                onClick: async () => {
                    await d(), l();
                },
                balance: n,
                placeholderBalance: null != n ? n : 0,
                balanceWidgetMode: u.b.DEFAULT
            }),
            (0, i.jsx)(p, {
                earnedOrbsQuantity: t,
                ctaText: g.intl.string(g.t['H57f4+']),
                linkText: g.intl.string(g.t['7f4H7O']),
                ctaOnClick: async () => {
                    await d(), a();
                }
            })
        ]
    });
}

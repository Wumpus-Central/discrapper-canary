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
    d = (n(965789), n(317257)),
    u = n(970815),
    m = n(741808),
    g = n(981631),
    h = n(388032),
    x = n(588245),
    _ = n(865446);
let p = (e) => {
    let { earnedOrbsQuantity: t, descriptionText: s = h.intl.string(h.t['4YgBe3']), ctaText: c = h.intl.string(h.t.WYchdX), linkText: d = h.intl.string(h.t['H57f4+']), ctaOnClick: u, linkOnClick: m, linkTo: g } = e;
    return (0, i.jsxs)('div', {
        className: r()(_.container, x.baseCardOutline),
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
                        className: x.coachmarkTitle,
                        children: h.intl.format(h.t.lA7CLi, { quantity: t })
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-sm/medium',
                        className: x.coachmarkDescription,
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
                        to: { pathname: g },
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
function E(e) {
    let { earnedOrbsQuantity: t, balance: n, backgroundElementRef: s, onClose: r, onClickPill: l, ctaOnClick: a, linkOnClick: o, ...h } = e,
        x = async () => {
            await (0, c.j2)(), await r();
        };
    return (0, i.jsxs)(m.X, {
        className: _.coachmarkModalContainer,
        backgroundElementRef: s,
        onGetBoundingRect: g.dG4,
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
                    await x(), l();
                },
                balance: n,
                placeholderBalance: null != n ? n : 0,
                balanceWidgetMode: d.b.DEFAULT
            }),
            (0, i.jsx)(p, {
                earnedOrbsQuantity: t,
                ctaOnClick: async () => {
                    await x(), a();
                },
                linkOnClick: async () => {
                    await x(), o();
                }
            })
        ]
    });
}

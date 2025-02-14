n.d(t, {
    BalanceWidgetEarnedOrbsCoachmarkModal: () => f,
    E: () => C
});
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(568611),
    a = n(693789),
    o = n(481060),
    c = n(751648),
    d = n(790542),
    u = n(317257),
    m = n(970815),
    g = n(741808),
    h = n(981631),
    x = n(388032),
    _ = n(194733),
    p = n(899088),
    E = n(232474);
let C = (e) => {
    let { earnedOrbsQuantity: t, descriptionText: n = x.intl.string(x.t['4YgBe3']), ctaText: s = x.intl.string(x.t.WYchdX), linkText: c = x.intl.string(x.t['H57f4+']), ctaOnClick: d, linkOnClick: u, linkTo: m } = e;
    return (0, i.jsxs)('div', {
        className: r()(p.container, _.baseCardOutline),
        children: [
            (0, i.jsx)('div', {
                className: r()(p.gifContainer, p.centerContent),
                children: (0, i.jsx)('img', {
                    src: E.Z,
                    className: p.gif,
                    alt: 'Orb GIF'
                })
            }),
            (0, i.jsxs)('div', {
                className: p.contentContainer,
                children: [
                    (0, i.jsx)('h3', {
                        className: _.coachmarkTitle,
                        children: x.intl.format(x.t.lA7CLi, { quantity: t })
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-sm/medium',
                        className: _.coachmarkDescription,
                        children: n
                    }),
                    (0, i.jsx)(a.zx, {
                        className: p.ctaButton,
                        color: a.zx.Colors.BRAND,
                        look: a.zx.Looks.FILLED,
                        onClick: d,
                        fullWidth: !0,
                        children: s
                    }),
                    (0, i.jsx)(l.rU, {
                        to: { pathname: m },
                        onClick: u,
                        children: (0, i.jsx)(o.Text, {
                            variant: 'text-sm/medium',
                            className: p.link,
                            children: c
                        })
                    })
                ]
            })
        ]
    });
};
function f(e) {
    let { earnedOrbsQuantity: t, backgroundElementRef: n, onClickPill: s, ctaOnClick: r, linkOnClick: l, onClose: a, onCloseCallback: o, ...x } = e,
        { balance: _ } = (0, d.A)(),
        E = async () => {
            await (0, c.j2)(), await a(), o();
        };
    return (0, i.jsxs)(g.X, {
        className: p.coachmarkModalContainer,
        backgroundElementRef: n,
        onGetBoundingRect: h.dG4,
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
                    await E(), s();
                },
                balance: _,
                balanceWidgetMode: u.b.DEFAULT
            }),
            (0, i.jsx)(C, {
                earnedOrbsQuantity: t,
                ctaOnClick: async () => {
                    await E(), r();
                },
                linkOnClick: async () => {
                    await E(), l();
                }
            })
        ]
    });
}

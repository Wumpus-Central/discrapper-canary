a.d(t, {
    BalanceWidgetEarnedOrbsCoachmarkModal: () => _,
    E: () => g
});
var e = a(200651);
a(192379);
var i = a(120356),
    c = a.n(i),
    s = a(568611),
    l = a(693789),
    o = a(481060),
    r = a(751648),
    d = a(790542),
    m = a(317257),
    h = a(970815),
    C = a(741808),
    k = a(981631),
    u = a(388032),
    b = a(61822),
    f = a(923046),
    x = a(660028);
let g = (n) => {
    let { earnedOrbsQuantity: t, descriptionText: a = u.intl.string(u.t['4YgBe3']), ctaText: i = u.intl.string(u.t.WYchdX), linkText: r = u.intl.string(u.t['H57f4+']), ctaOnClick: d, linkOnClick: m, linkTo: h } = n;
    return (0, e.jsxs)('div', {
        className: c()(f.container, b.baseCardOutline),
        children: [
            (0, e.jsx)('div', {
                className: c()(f.gifContainer, { [f.centerContent]: !0 }),
                children: (0, e.jsx)('img', {
                    src: x.Z,
                    className: f.gif,
                    alt: 'Orb GIF'
                })
            }),
            (0, e.jsxs)('div', {
                className: f.contentContainer,
                children: [
                    (0, e.jsx)('h3', {
                        className: b.coachmarkTitle,
                        children: u.intl.format(u.t.lA7CLi, { quantity: t })
                    }),
                    (0, e.jsx)(o.Text, {
                        variant: 'text-sm/medium',
                        className: b.coachmarkDescription,
                        children: a
                    }),
                    (0, e.jsx)(l.zx, {
                        className: f.ctaButton,
                        color: l.zx.Colors.BRAND,
                        look: l.zx.Looks.FILLED,
                        onClick: d,
                        fullWidth: !0,
                        children: i
                    }),
                    (0, e.jsx)(s.rU, {
                        to: { pathname: h },
                        onClick: m,
                        children: (0, e.jsx)(o.Text, {
                            variant: 'text-sm/medium',
                            className: f.link,
                            children: r
                        })
                    })
                ]
            })
        ]
    });
};
function _(n) {
    let { earnedOrbsQuantity: t, backgroundElementRef: a, onClickPill: i, ctaOnClick: c, linkOnClick: s, onClose: l, onCloseCallback: o, ...u } = n,
        { balance: b } = (0, d.A)(),
        x = async () => {
            await (0, r.j2)(), await l(), o();
        };
    return (0, e.jsxs)(C.X, {
        className: f.coachmarkModalContainer,
        backgroundElementRef: a,
        onGetBoundingRect: k.dG4,
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
            (0, e.jsx)(h.A4, {
                onClick: async () => {
                    await x(), i();
                },
                balance: b,
                placeholderBalance: null != b ? b : 0,
                balanceWidgetMode: m.b.DEFAULT
            }),
            (0, e.jsx)(g, {
                earnedOrbsQuantity: t,
                ctaOnClick: async () => {
                    await x(), c();
                },
                linkOnClick: async () => {
                    await x(), s();
                }
            })
        ]
    });
}

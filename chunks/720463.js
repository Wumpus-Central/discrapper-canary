a.d(t, {
    BalanceWidgetEarnedOrbsCoachmarkModal: () => g,
    E: () => x
});
var e = a(200651);
a(192379);
var i = a(120356),
    c = a.n(i),
    s = a(568611),
    l = a(693789),
    o = a(481060),
    r = a(751648),
    d = a(317257),
    m = a(970815),
    h = a(741808),
    C = a(981631),
    k = a(388032),
    u = a(194733),
    b = a(899088),
    f = a(660028);
let x = (n) => {
    let { earnedOrbsQuantity: t, descriptionText: a = k.intl.string(k.t['4YgBe3']), ctaText: i = k.intl.string(k.t.WYchdX), linkText: r = k.intl.string(k.t['H57f4+']), ctaOnClick: d, linkOnClick: m, linkTo: h } = n;
    return (0, e.jsxs)('div', {
        className: c()(b.container, u.baseCardOutline),
        children: [
            (0, e.jsx)('div', {
                className: c()(b.gifContainer, { [b.centerContent]: !0 }),
                children: (0, e.jsx)('img', {
                    src: f.Z,
                    className: b.gif,
                    alt: 'Orb GIF'
                })
            }),
            (0, e.jsxs)('div', {
                className: b.contentContainer,
                children: [
                    (0, e.jsx)('h3', {
                        className: u.coachmarkTitle,
                        children: k.intl.format(k.t.lA7CLi, { quantity: t })
                    }),
                    (0, e.jsx)(o.Text, {
                        variant: 'text-sm/medium',
                        className: u.coachmarkDescription,
                        children: a
                    }),
                    (0, e.jsx)(l.zx, {
                        className: b.ctaButton,
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
                            className: b.link,
                            children: r
                        })
                    })
                ]
            })
        ]
    });
};
function g(n) {
    let { earnedOrbsQuantity: t, balance: a, backgroundElementRef: i, onClickPill: c, ctaOnClick: s, linkOnClick: l, onClose: o, onCloseCallback: k, ...u } = n,
        f = async () => {
            await (0, r.j2)(), await o(), k();
        };
    return (0, e.jsxs)(h.X, {
        className: b.coachmarkModalContainer,
        backgroundElementRef: i,
        onGetBoundingRect: C.dG4,
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
            (0, e.jsx)(m.A4, {
                onClick: async () => {
                    await f(), c();
                },
                balance: a,
                placeholderBalance: null != a ? a : 0,
                balanceWidgetMode: d.b.DEFAULT
            }),
            (0, e.jsx)(x, {
                earnedOrbsQuantity: t,
                ctaOnClick: async () => {
                    await f(), s();
                },
                linkOnClick: async () => {
                    await f(), l();
                }
            })
        ]
    });
}

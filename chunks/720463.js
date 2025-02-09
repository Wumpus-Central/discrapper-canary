a.d(t, {
    BalanceWidgetEarnedOrbsCoachmarkModal: () => x,
    E: () => g
});
var e = a(200651);
a(192379);
var i = a(120356),
    c = a.n(i),
    s = a(568611),
    o = a(693789),
    r = a(481060),
    l = a(751648),
    d = (a(965789), a(317257)),
    m = a(970815),
    h = a(741808),
    b = a(981631),
    u = a(388032),
    C = a(61822),
    k = a(923046);
let g = (n) => {
    let { earnedOrbsQuantity: t, descriptionText: i = u.intl.string(u.t['4YgBe3']), ctaText: l = u.intl.string(u.t.WYchdX), linkText: d = u.intl.string(u.t['H57f4+']), ctaOnClick: m, linkOnClick: h, linkTo: b } = n;
    return (0, e.jsxs)('div', {
        className: c()(k.container, C.baseCardOutline),
        children: [
            (0, e.jsx)('div', {
                className: c()(k.gifContainer, { [k.centerContent]: !0 }),
                children: (0, e.jsx)('img', {
                    src: a(709538),
                    className: k.orbSvg,
                    alt: 'Orb GIF'
                })
            }),
            (0, e.jsxs)('div', {
                className: k.contentContainer,
                children: [
                    (0, e.jsx)('h3', {
                        className: C.coachmarkTitle,
                        children: u.intl.format(u.t.lA7CLi, { quantity: t })
                    }),
                    (0, e.jsx)(r.Text, {
                        variant: 'text-sm/medium',
                        className: C.coachmarkDescription,
                        children: i
                    }),
                    (0, e.jsx)(o.zx, {
                        className: k.ctaButton,
                        color: o.zx.Colors.BRAND,
                        look: o.zx.Looks.FILLED,
                        onClick: m,
                        fullWidth: !0,
                        children: l
                    }),
                    (0, e.jsx)(s.rU, {
                        to: { pathname: b },
                        onClick: h,
                        children: (0, e.jsx)(r.Text, {
                            variant: 'text-sm/medium',
                            className: k.link,
                            children: d
                        })
                    })
                ]
            })
        ]
    });
};
function x(n) {
    let { earnedOrbsQuantity: t, balance: a, backgroundElementRef: i, onClose: c, onClickPill: s, ctaOnClick: o, linkOnClick: r, ...u } = n,
        C = async () => {
            await (0, l.j2)(), await c();
        };
    return (0, e.jsxs)(h.X, {
        className: k.coachmarkModalContainer,
        backgroundElementRef: i,
        onGetBoundingRect: b.dG4,
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
                    await C(), s();
                },
                balance: a,
                placeholderBalance: null != a ? a : 0,
                balanceWidgetMode: d.b.DEFAULT
            }),
            (0, e.jsx)(g, {
                earnedOrbsQuantity: t,
                ctaOnClick: async () => {
                    await C(), o();
                },
                linkOnClick: async () => {
                    await C(), r();
                }
            })
        ]
    });
}

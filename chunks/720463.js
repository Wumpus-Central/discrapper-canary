n.d(t, {
    BalanceWidgetEarnedOrbsCoachmarkModal: () => j,
    E: () => C
});
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(568611),
    l = n(693789),
    c = n(481060),
    s = n(751648),
    u = n(790542),
    b = n(317257),
    d = n(970815),
    f = n(622562),
    m = n(432792),
    g = n(981631),
    O = n(388032),
    _ = n(803812),
    p = n(981987),
    h = n(232474);
let C = (e) => {
    let { earnedOrbsQuantity: t, descriptionText: n = O.NW.string(O.t['4YgBe3']), ctaText: i = O.NW.string(O.t.WYchdX), linkText: s = O.NW.string(O.t['H57f4+']), ctaOnClick: u, linkOnClick: b, linkTo: d } = e;
    return (0, r.jsxs)('div', {
        className: o()(p.container, _.baseCardOutline),
        children: [
            (0, r.jsx)(m.VK, {
                rightOffset: 20,
                invertTail: !0
            }),
            (0, r.jsx)('div', {
                className: o()(p.gifContainer, p.centerContent),
                children: (0, r.jsx)('img', {
                    src: h.Z,
                    className: p.gif,
                    alt: 'Orb GIF'
                })
            }),
            (0, r.jsxs)('div', {
                className: p.contentContainer,
                children: [
                    (0, r.jsx)('h3', {
                        className: _.coachmarkTitle,
                        children: O.NW.format(O.t.lA7CLi, { quantity: t })
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        className: _.coachmarkDescription,
                        children: n
                    }),
                    (0, r.jsx)(l.zx, {
                        className: p.ctaButton,
                        color: l.zx.Colors.BRAND,
                        look: l.zx.Looks.FILLED,
                        onClick: u,
                        fullWidth: !0,
                        children: i
                    }),
                    (0, r.jsx)(a.rU, {
                        to: { pathname: d },
                        onClick: b,
                        children: (0, r.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            className: p.link,
                            children: s
                        })
                    })
                ]
            })
        ]
    });
};
function j(e) {
    var { earnedOrbsQuantity: t, backgroundElementRef: n, onClickPill: i, ctaOnClick: o, linkOnClick: a, onClose: l, onCloseCallback: c } = e;
    !(function (e, t) {
        if (null != e) {
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
        }
    })(e, ['earnedOrbsQuantity', 'backgroundElementRef', 'onClickPill', 'ctaOnClick', 'linkOnClick', 'onClose', 'onCloseCallback']);
    let { balance: m } = (0, u.A)(),
        O = async () => {
            await (0, s.j2)(), await l(), c();
        };
    return (0, r.jsxs)(f.E, {
        className: p.coachmarkModalContainer,
        backgroundElementRef: n,
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
            (0, r.jsx)(d.A4, {
                onClick: async () => {
                    await O(), i();
                },
                balance: m,
                balanceWidgetMode: b.b.DEFAULT
            }),
            (0, r.jsx)(C, {
                earnedOrbsQuantity: t,
                ctaOnClick: async () => {
                    await O(), o();
                },
                linkOnClick: async () => {
                    await O(), a();
                }
            })
        ]
    });
}

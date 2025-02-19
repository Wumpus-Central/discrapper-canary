n.d(t, {
    BalanceWidgetEarnedOrbsCoachmarkModal: () => _,
    E: () => b
});
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(568611),
    l = n(693789),
    o = n(481060),
    c = n(751648),
    d = n(790542),
    u = n(317257),
    m = n(970815),
    g = n(741808),
    p = n(981631),
    h = n(388032),
    f = n(387987),
    N = n(681461),
    x = n(232474);
let b = (e) => {
    let { earnedOrbsQuantity: t, descriptionText: n = h.NW.string(h.t['4YgBe3']), ctaText: i = h.NW.string(h.t.WYchdX), linkText: c = h.NW.string(h.t['H57f4+']), ctaOnClick: d, linkOnClick: u, linkTo: m } = e;
    return (0, r.jsxs)('div', {
        className: s()(N.container, f.baseCardOutline),
        children: [
            (0, r.jsx)('div', {
                className: s()(N.gifContainer, N.centerContent),
                children: (0, r.jsx)('img', {
                    src: x.Z,
                    className: N.gif,
                    alt: 'Orb GIF'
                })
            }),
            (0, r.jsxs)('div', {
                className: N.contentContainer,
                children: [
                    (0, r.jsx)('h3', {
                        className: f.coachmarkTitle,
                        children: h.NW.format(h.t.lA7CLi, { quantity: t })
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-sm/medium',
                        className: f.coachmarkDescription,
                        children: n
                    }),
                    (0, r.jsx)(l.zx, {
                        className: N.ctaButton,
                        color: l.zx.Colors.BRAND,
                        look: l.zx.Looks.FILLED,
                        onClick: d,
                        fullWidth: !0,
                        children: i
                    }),
                    (0, r.jsx)(a.rU, {
                        to: { pathname: m },
                        onClick: u,
                        children: (0, r.jsx)(o.Text, {
                            variant: 'text-sm/medium',
                            className: N.link,
                            children: c
                        })
                    })
                ]
            })
        ]
    });
};
function _(e) {
    var { earnedOrbsQuantity: t, backgroundElementRef: n, onClickPill: i, ctaOnClick: s, linkOnClick: a, onClose: l, onCloseCallback: o } = e;
    !(function (e, t) {
        if (null != e) {
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
        }
    })(e, ['earnedOrbsQuantity', 'backgroundElementRef', 'onClickPill', 'ctaOnClick', 'linkOnClick', 'onClose', 'onCloseCallback']);
    let { balance: h } = (0, d.A)(),
        f = async () => {
            await (0, c.j2)(), await l(), o();
        };
    return (0, r.jsxs)(g.X, {
        className: N.coachmarkModalContainer,
        backgroundElementRef: n,
        onGetBoundingRect: p.dG4,
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
            (0, r.jsx)(m.A4, {
                onClick: async () => {
                    await f(), i();
                },
                balance: h,
                balanceWidgetMode: u.b.DEFAULT
            }),
            (0, r.jsx)(b, {
                earnedOrbsQuantity: t,
                ctaOnClick: async () => {
                    await f(), s();
                },
                linkOnClick: async () => {
                    await f(), a();
                }
            })
        ]
    });
}

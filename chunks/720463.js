n.d(t, {
    BalanceWidgetEarnedOrbsCoachmarkModal: () => k,
    E: () => N
});
var r = n(200651);
n(192379);
var a = n(120356),
    o = n.n(a),
    i = n(568611),
    s = n(442837),
    c = n(693789),
    l = n(481060),
    d = n(607070),
    b = n(70097),
    u = n(751648),
    f = n(790542),
    m = n(317257),
    p = n(970815),
    O = n(622562),
    h = n(432792),
    _ = n(981631),
    g = n(388032),
    j = n(803812),
    x = n(981987),
    v = n(447489),
    y = n(484885);
let C = () => {
        let e = (0, s.e7)([d.Z], () => d.Z.useReducedMotion);
        return (0, r.jsx)('div', {
            className: x.centerContent,
            children: e
                ? (0, r.jsx)('img', {
                      src: v.Z,
                      className: x.orbAsset,
                      alt: 'Orb'
                  })
                : (0, r.jsxs)(b.Z, {
                      autoPlay: !0,
                      loop: !0,
                      className: x.orbAsset,
                      children: [
                          (0, r.jsx)('source', {
                              src: y.Z,
                              type: 'video/webm'
                          }),
                          (0, r.jsx)('img', {
                              src: v.Z,
                              className: x.orbAsset,
                              alt: 'Orb'
                          })
                      ]
                  })
        });
    },
    N = (e) => {
        let { earnedOrbsQuantity: t, descriptionText: n = g.NW.string(g.t['4YgBe3']), ctaText: a = g.NW.string(g.t.WYchdX), linkText: s = g.NW.string(g.t['H57f4+']), ctaOnClick: d, linkOnClick: b, linkTo: u } = e;
        return (0, r.jsxs)('div', {
            className: o()(x.container, j.baseCardOutline),
            children: [
                (0, r.jsx)(h.VK, {
                    rightOffset: 20,
                    invertTail: !0
                }),
                (0, r.jsx)(C, {}),
                (0, r.jsxs)('div', {
                    className: x.contentContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: x.textContainer,
                            children: [
                                (0, r.jsx)(l.X6q, {
                                    variant: 'heading-md/bold',
                                    color: 'header-primary',
                                    className: x.coachmarkTitle,
                                    children: g.NW.format(g.t.lA7CLi, { quantity: t })
                                }),
                                (0, r.jsx)(l.Text, {
                                    variant: 'text-sm/medium',
                                    className: x.coachmarkDescription,
                                    children: n
                                })
                            ]
                        }),
                        (0, r.jsx)(c.zx, {
                            className: x.ctaButton,
                            color: c.zx.Colors.BRAND,
                            look: c.zx.Looks.FILLED,
                            onClick: d,
                            fullWidth: !0,
                            children: a
                        }),
                        (0, r.jsx)(i.rU, {
                            to: { pathname: u },
                            onClick: b,
                            children: (0, r.jsx)(l.Text, {
                                variant: 'text-sm/medium',
                                className: x.link,
                                children: s
                            })
                        })
                    ]
                })
            ]
        });
    };
function k(e) {
    var { earnedOrbsQuantity: t, backgroundElementRef: n, onClickPill: a, ctaOnClick: o, linkOnClick: i, onClose: s, onCloseCallback: c } = e;
    !(function (e, t) {
        if (null != e) {
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            }
        }
    })(e, ['earnedOrbsQuantity', 'backgroundElementRef', 'onClickPill', 'ctaOnClick', 'linkOnClick', 'onClose', 'onCloseCallback']);
    let { balance: l } = (0, f.A)(),
        d = async () => {
            await (0, u.j2)(), await s(), c();
        };
    return (0, r.jsxs)(O.E, {
        className: x.coachmarkModalContainer,
        backgroundElementRef: n,
        onGetBoundingRect: _.dG4,
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
            (0, r.jsx)(p.A4, {
                onClick: async () => {
                    await d(), a();
                },
                balance: l,
                balanceWidgetMode: m.b.DEFAULT
            }),
            (0, r.jsx)(N, {
                earnedOrbsQuantity: t,
                ctaOnClick: async () => {
                    await d(), o();
                },
                linkOnClick: async () => {
                    await d(), i();
                }
            })
        ]
    });
}

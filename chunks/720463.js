n.d(t, {
    BalanceWidgetEarnedOrbsCoachmarkModal: () => k,
    E: () => N
});
var r = n(200651);
n(192379);
var o = n(120356),
    a = n.n(o),
    s = n(568611),
    i = n(442837),
    c = n(693789),
    l = n(481060),
    b = n(607070),
    u = n(70097),
    d = n(751648),
    f = n(790542),
    m = n(317257),
    p = n(970815),
    O = n(622562),
    h = n(432792),
    _ = n(981631),
    g = n(388032),
    j = n(803812),
    x = n(981987),
    C = n(447489),
    v = n(484885);
let y = () => {
        let e = (0, i.e7)([b.Z], () => b.Z.useReducedMotion);
        return (0, r.jsx)('div', {
            className: a()(x.orbAssetContainer, x.centerContent),
            children: e
                ? (0, r.jsx)('img', {
                      src: C.Z,
                      className: x.orbAsset,
                      alt: 'Orb'
                  })
                : (0, r.jsxs)(u.Z, {
                      autoPlay: !0,
                      loop: !0,
                      className: x.orbAsset,
                      children: [
                          (0, r.jsx)('source', {
                              src: v.Z,
                              type: 'video/webm'
                          }),
                          (0, r.jsx)('img', {
                              src: C.Z,
                              className: x.orbAsset,
                              alt: 'Orb'
                          })
                      ]
                  })
        });
    },
    N = (e) => {
        let { earnedOrbsQuantity: t, descriptionText: n = g.NW.string(g.t['4YgBe3']), ctaText: o = g.NW.string(g.t.WYchdX), linkText: i = g.NW.string(g.t['H57f4+']), ctaOnClick: b, linkOnClick: u, linkTo: d } = e;
        return (0, r.jsxs)('div', {
            className: a()(x.container, j.baseCardOutline),
            children: [
                (0, r.jsx)(h.VK, {
                    rightOffset: 20,
                    invertTail: !0
                }),
                (0, r.jsx)(y, {}),
                (0, r.jsxs)('div', {
                    className: x.contentContainer,
                    children: [
                        (0, r.jsx)('h3', {
                            className: j.coachmarkTitle,
                            children: g.NW.format(g.t.lA7CLi, { quantity: t })
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-sm/medium',
                            className: j.coachmarkDescription,
                            children: n
                        }),
                        (0, r.jsx)(c.zx, {
                            className: x.ctaButton,
                            color: c.zx.Colors.BRAND,
                            look: c.zx.Looks.FILLED,
                            onClick: b,
                            fullWidth: !0,
                            children: o
                        }),
                        (0, r.jsx)(s.rU, {
                            to: { pathname: d },
                            onClick: u,
                            children: (0, r.jsx)(l.Text, {
                                variant: 'text-sm/medium',
                                className: x.link,
                                children: i
                            })
                        })
                    ]
                })
            ]
        });
    };
function k(e) {
    var { earnedOrbsQuantity: t, backgroundElementRef: n, onClickPill: o, ctaOnClick: a, linkOnClick: s, onClose: i, onCloseCallback: c } = e;
    !(function (e, t) {
        if (null != e) {
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
        }
    })(e, ['earnedOrbsQuantity', 'backgroundElementRef', 'onClickPill', 'ctaOnClick', 'linkOnClick', 'onClose', 'onCloseCallback']);
    let { balance: l } = (0, f.A)(),
        b = async () => {
            await (0, d.j2)(), await i(), c();
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
                    await b(), o();
                },
                balance: l,
                balanceWidgetMode: m.b.DEFAULT
            }),
            (0, r.jsx)(N, {
                earnedOrbsQuantity: t,
                ctaOnClick: async () => {
                    await b(), a();
                },
                linkOnClick: async () => {
                    await b(), s();
                }
            })
        ]
    });
}

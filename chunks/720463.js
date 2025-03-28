n.d(t, {
    BalanceWidgetEarnedOrbsCoachmarkModal: () => y,
    E: () => v
});
var r = n(200651);
n(192379);
var o = n(120356),
    a = n.n(o),
    s = n(442837),
    i = n(693789),
    c = n(481060),
    l = n(607070),
    d = n(70097),
    u = n(751648),
    b = n(790542),
    f = n(317257),
    m = n(970815),
    p = n(622562),
    h = n(432792),
    _ = n(981631),
    O = n(388032),
    g = n(803812),
    x = n(981987),
    C = n(447489),
    j = n(484885);
let k = () => {
        let e = (0, s.e7)([l.Z], () => l.Z.useReducedMotion);
        return (0, r.jsx)('div', {
            className: x.centerContent,
            children: e
                ? (0, r.jsx)('img', {
                      src: C.Z,
                      className: x.orbAsset,
                      alt: 'Orb'
                  })
                : (0, r.jsxs)(d.Z, {
                      autoPlay: !0,
                      loop: !0,
                      className: x.orbAsset,
                      children: [
                          (0, r.jsx)('source', {
                              src: j.Z,
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
    v = (e) => {
        let { descriptionText: t = O.NW.string(O.t['6If1Cw']), ctaText: n = O.NW.string(O.t.WYchdX), secondaryCtaText: o = O.NW.string(O.t['H57f4+']), ctaOnClick: s, secondaryCtaOnClick: l } = e;
        return (0, r.jsxs)('div', {
            className: a()(x.container, g.baseCardOutline),
            children: [
                (0, r.jsx)(h.VK, {
                    rightOffset: 20,
                    invertTail: !0,
                    tailSpineClassName: x.coachmarkTailSpine,
                    tailTargetInnerClassName: x.coachmarkTailTargetInner
                }),
                (0, r.jsx)(k, {}),
                (0, r.jsxs)('div', {
                    className: x.contentContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: x.textContainer,
                            children: [
                                (0, r.jsx)(c.X6q, {
                                    variant: 'heading-md/bold',
                                    color: 'header-primary',
                                    className: x.coachmarkTitle,
                                    children: O.NW.string(O.t['D/nzVl'])
                                }),
                                (0, r.jsx)(c.Text, {
                                    variant: 'text-sm/medium',
                                    className: x.coachmarkDescription,
                                    children: t
                                })
                            ]
                        }),
                        (0, r.jsx)(i.zx, {
                            className: x.ctaButton,
                            color: i.zx.Colors.BRAND,
                            look: i.zx.Looks.FILLED,
                            onClick: s,
                            fullWidth: !0,
                            children: n
                        }),
                        (0, r.jsx)(i.zx, {
                            className: x.secondaryButton,
                            color: i.zx.Colors.CUSTOM,
                            look: i.zx.Looks.FILLED,
                            onClick: l,
                            fullWidth: !0,
                            children: o
                        })
                    ]
                })
            ]
        });
    };
function y(e) {
    var { backgroundElementRef: t, onClickPill: n, ctaOnClick: o, secondaryCtaOnClick: a, onClose: s, onCloseCallback: i } = e;
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
    })(e, ['backgroundElementRef', 'onClickPill', 'ctaOnClick', 'secondaryCtaOnClick', 'onClose', 'onCloseCallback']);
    let { balance: c } = (0, b.A)(),
        l = async () => {
            await (0, u.j2)(), await s(), i();
        };
    return (0, r.jsxs)(p.E, {
        className: x.coachmarkModalContainer,
        backgroundElementRef: t,
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
            (0, r.jsx)(m.A4, {
                onClick: async () => {
                    await l(), n();
                },
                balance: c,
                balanceWidgetMode: f.b.DEFAULT
            }),
            (0, r.jsx)(v, {
                ctaOnClick: async () => {
                    await l(), o();
                },
                secondaryCtaOnClick: async () => {
                    await l(), a();
                }
            })
        ]
    });
}

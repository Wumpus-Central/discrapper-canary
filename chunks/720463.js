n.d(t, {
    BalanceWidgetEarnedOrbsCoachmarkModal: () => y,
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
    m = n(790542),
    f = n(317257),
    p = n(970815),
    h = n(622562),
    _ = n(432792),
    O = n(981631),
    g = n(388032),
    x = n(803812),
    j = n(981987),
    k = n(447489),
    C = n(484885);
let v = () => {
        let e = (0, s.e7)([d.Z], () => d.Z.useReducedMotion);
        return (0, r.jsx)('div', {
            className: j.centerContent,
            children: e
                ? (0, r.jsx)('img', {
                      src: k.Z,
                      className: j.orbAsset,
                      alt: 'Orb'
                  })
                : (0, r.jsxs)(b.Z, {
                      autoPlay: !0,
                      loop: !0,
                      className: j.orbAsset,
                      children: [
                          (0, r.jsx)('source', {
                              src: C.Z,
                              type: 'video/webm'
                          }),
                          (0, r.jsx)('img', {
                              src: k.Z,
                              className: j.orbAsset,
                              alt: 'Orb'
                          })
                      ]
                  })
        });
    },
    N = (e) => {
        let { descriptionText: t = g.NW.string(g.t['6If1Cw']), ctaText: n = g.NW.string(g.t.WYchdX), linkText: a = g.NW.string(g.t['H57f4+']), ctaOnClick: s, linkOnClick: d, linkTo: b } = e;
        return (0, r.jsxs)('div', {
            className: o()(j.container, x.baseCardOutline),
            children: [
                (0, r.jsx)(_.VK, {
                    rightOffset: 20,
                    invertTail: !0,
                    tailSpineClassName: j.coachmarkTailSpine,
                    tailTargetInnerClassName: j.coachmarkTailTargetInner
                }),
                (0, r.jsx)(v, {}),
                (0, r.jsxs)('div', {
                    className: j.contentContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: j.textContainer,
                            children: [
                                (0, r.jsx)(l.X6q, {
                                    variant: 'heading-md/bold',
                                    color: 'header-primary',
                                    className: j.coachmarkTitle,
                                    children: g.NW.string(g.t['D/nzVl'])
                                }),
                                (0, r.jsx)(l.Text, {
                                    variant: 'text-sm/medium',
                                    className: j.coachmarkDescription,
                                    children: t
                                })
                            ]
                        }),
                        (0, r.jsx)(c.zx, {
                            className: j.ctaButton,
                            color: c.zx.Colors.BRAND,
                            look: c.zx.Looks.FILLED,
                            onClick: s,
                            fullWidth: !0,
                            children: n
                        }),
                        (0, r.jsx)(i.rU, {
                            to: { pathname: b },
                            onClick: d,
                            children: (0, r.jsx)(l.Text, {
                                variant: 'text-sm/medium',
                                className: j.link,
                                children: a
                            })
                        })
                    ]
                })
            ]
        });
    };
function y(e) {
    var { backgroundElementRef: t, onClickPill: n, ctaOnClick: a, linkOnClick: o, onClose: i, onCloseCallback: s } = e;
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
    })(e, ['backgroundElementRef', 'onClickPill', 'ctaOnClick', 'linkOnClick', 'onClose', 'onCloseCallback']);
    let { balance: c } = (0, m.A)(),
        l = async () => {
            await (0, u.j2)(), await i(), s();
        };
    return (0, r.jsxs)(h.E, {
        className: j.coachmarkModalContainer,
        backgroundElementRef: t,
        onGetBoundingRect: O.dG4,
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
                    await l(), n();
                },
                balance: c,
                balanceWidgetMode: f.b.DEFAULT
            }),
            (0, r.jsx)(N, {
                ctaOnClick: async () => {
                    await l(), a();
                },
                linkOnClick: async () => {
                    await l(), o();
                }
            })
        ]
    });
}

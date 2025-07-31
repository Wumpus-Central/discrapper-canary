(n.d(t, { Z: () => D }), n(388685));
var r = n(255367),
    s = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(855659),
    l = n(722770),
    c = n(846519),
    u = n(755721),
    d = n(481060),
    m = n(393238),
    p = n(393903),
    h = n(448986),
    x = n(572004),
    g = n(617136),
    j = n(509212),
    C = n(113434),
    f = n(497505),
    b = n(566078),
    v = n(685613),
    y = n(611855),
    O = n(644646),
    N = n(968435),
    E = n(670638),
    T = n(87894),
    q = n(46140),
    S = n(231338),
    P = n(388032),
    w = n(491821);
function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = (0, a.animated)(d.CJ0),
    M = (e) => {
        var { quest: t, location: n, questContentPosition: o, sourceQuestContent: i } = e,
            a = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    s = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            s = {},
                            o = Object.keys(e);
                        for (r = 0; r < o.length; r++) ((n = o[r]), t.indexOf(n) >= 0 || (s[n] = e[n]));
                        return s;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) ((n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]));
                }
                return s;
            })(e, ['quest', 'location', 'questContentPosition', 'sourceQuestContent']);
        let [l, m] = s.useState(!1),
            p = s.useRef(new c.V7()),
            h = (0, g.O5)();
        s.useEffect(() => {
            let e = p.current;
            return function () {
                e.stop();
            };
        }, []);
        let C = () => {
            (h({
                questId: t.id,
                questContent: n,
                questContentCTA: g.jZ.COPY_QUEST_URL,
                questContentPosition: o,
                sourceQuestContent: i
            }),
                (0, x.JG)((0, j.Rs)(t.id), () => {
                    (m(!0), p.current.start(1000, () => m(!1)));
                }));
        };
        return (0, r.jsx)(d.ua7, {
            forceOpen: l,
            shouldShow: l,
            color: d.ua7.Colors.GREEN,
            text: P.intl.string(P.t.MSaeTU),
            children: () =>
                (0, r.jsx)(
                    u.zx,
                    _(R({}, a), {
                        className: w.shareButton,
                        color: u.zx.Colors.PRIMARY,
                        size: u.zx.Sizes.SMALL,
                        onClick: C,
                        children: P.intl.string(P.t['5Z6rz8'])
                    })
                )
        });
    },
    D = (e) => {
        var t;
        let { isQuestExpired: n, quest: o, location: c, size: u, expansionSpring: x, isAnimating: j, isExpanded: D, contentPosition: A, toggleExpanded: Q, sourceQuestContent: Z } = e,
            { ref: L, height: k } = (0, m.ZP)(),
            [B, U] = s.useState(null),
            [G, W] = s.useState(null),
            F = (0, h.Z)((e) => {
                let t = e.target;
                (U(t.offsetWidth), W(t.scrollWidth));
            }),
            z = (0, p.y)(F),
            X = (0, T.uq)(c),
            H = c === f.jn.QUESTS_EMBED,
            Y = (0, C.t5)(o, q.dr.QUESTS_CARD, c, Z),
            V = (null == (t = o.userStatus) ? void 0 : t.completedAt) != null,
            J = (0, g.O5)(),
            K = (0, C.B6)(o.config.expiresAt),
            $ = (0, C.B6)(b.r.build(o.config).rewardsExpireAt),
            ee = s.useMemo(() => null != o.config.cosponsorMetadata, [o]),
            et = (e) => {
                (e.stopPropagation(),
                    e.currentTarget.blur(),
                    Q(),
                    J({
                        questId: o.id,
                        questContent: c,
                        questContentCTA: D ? g.jZ.COLLAPSE : g.jZ.EXPAND,
                        questContentPosition: A,
                        sourceQuestContent: Z
                    }));
            },
            en = (0, r.jsx)(v.ZP, {
                className: w.partnerBranding,
                logotypeClassName: ee ? w.partnerBrandingLogotypes : void 0,
                gameTileSize: v.fF.MEDIUM,
                quest: o,
                separatorSpacing: v.US.MEDIUM,
                theme: S.BR.DARK,
                withGameTile: !H || null == o.config.cosponsorMetadata
            });
        return (0, r.jsxs)('div', {
            className: i()(w.outerContainer, {
                [w.outerContainerGiftInventory]: X,
                [w.outerContainerEmbed]: H,
                [w.outerContainerXs]: 'xs' === u
            }),
            'aria-label': P.intl.string(P.t.dcl9MT),
            style: { height: X ? k : void 0 },
            children: [
                (0, r.jsx)(N.Z, {
                    quest: o,
                    dimensions: {
                        width: 660,
                        height: 185
                    },
                    className: w.questSplash
                }),
                (0, r.jsxs)('div', {
                    className: w.header,
                    'aria-expanded': D,
                    children: [
                        (0, r.jsxs)(a.animated.div, {
                            className: i()(w.headerContent, { [w.headerContentEmbed]: H }),
                            style: {
                                y: X
                                    ? x.to({
                                          range: [0, 1],
                                          output: [T.DJ, 0]
                                      })
                                    : void 0
                            },
                            children: [
                                X &&
                                    (0, r.jsx)(a.animated.div, {
                                        className: w.headerCollapsedContent,
                                        style: {
                                            opacity: x.to({
                                                range: [0, 1],
                                                output: [1, 0]
                                            }),
                                            visibility: j || !D ? 'inherit' : 'hidden'
                                        },
                                        'aria-hidden': !j && D,
                                        children: (0, r.jsxs)(d.kL8, {
                                            'aria-label': P.intl.string(P.t.dcl9MT),
                                            onClick: et,
                                            className: w.headerCollapsedClickableContainer,
                                            children: [
                                                (0, r.jsx)('div', {
                                                    className: w.headerCollapsedContentRewardWrapper,
                                                    children: (0, r.jsx)(O.Z, {
                                                        quest: o,
                                                        questContent: c,
                                                        className: w.headerCollapsedRewardTile,
                                                        location: q.dr.QUESTS_CARD,
                                                        sourceQuestContent: Z
                                                    })
                                                }),
                                                (0, r.jsxs)('div', {
                                                    className: w.headerCollapsedContentCopyWrapper,
                                                    children: [
                                                        (0, r.jsxs)('div', {
                                                            className: w.headerCollapsedContentCopyLogos,
                                                            children: [en, (0, r.jsx)(y.Z, { color: 'always-white' })]
                                                        }),
                                                        (0, r.jsx)(d.Text, {
                                                            variant: 'text-xs/medium',
                                                            children: Y
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                (0, r.jsxs)(a.animated.div, {
                                    ref: (e) => {
                                        L.current = e;
                                    },
                                    className: i()(w.headerExpandedContent, {
                                        [w.outerContainerGiftInventory]: X,
                                        [w.outerContainerEmbed]: H
                                    }),
                                    style: {
                                        opacity: x.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        }),
                                        visibility: j || D ? 'inherit' : 'hidden'
                                    },
                                    'aria-hidden': !j && !D,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: w.headerExpandedWrapper,
                                            children: [
                                                (0, r.jsxs)('div', {
                                                    className: w.iconLogotypeContainer,
                                                    children: [en, H ? null : (0, r.jsx)(y.Z, { color: 'always-white' })]
                                                }),
                                                (0, r.jsxs)('div', {
                                                    className: w.questInfo,
                                                    children: [
                                                        (0, r.jsx)(d.ua7, {
                                                            text: o.config.messages.questName,
                                                            shouldShow: null != B && null != G && B < G,
                                                            children: (e) =>
                                                                (0, r.jsx)(
                                                                    d.X6q,
                                                                    _(
                                                                        R(
                                                                            {
                                                                                ref: z,
                                                                                variant: 'lg' === u ? 'heading-xxl/bold' : 'sm' === u ? 'heading-xl/bold' : 'heading-lg/bold',
                                                                                className: w.heading,
                                                                                color: 'always-white'
                                                                            },
                                                                            e
                                                                        ),
                                                                        { children: P.intl.format(P.t.EAYZAg, { questName: o.config.messages.questName }) }
                                                                    )
                                                                )
                                                        }),
                                                        (0, r.jsx)(d.Text, {
                                                            variant: 'text-xs/normal',
                                                            color: 'always-white',
                                                            children: V ? P.intl.formatToPlainString(P.t.APddvL, { expirationDate: $ }) : n ? P.intl.formatToPlainString(P.t.v7xMw8, { expirationDate: K }) : P.intl.formatToPlainString(P.t['pX+fmp'], { expirationDate: K })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        !n &&
                                            X &&
                                            (0, r.jsx)(M, {
                                                quest: o,
                                                location: c,
                                                questContentPosition: A,
                                                sourceQuestContent: Z
                                            })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsxs)(a.animated.div, {
                            className: w.iconsContainer,
                            style: {
                                top: X
                                    ? x.to({
                                          range: [0, 1],
                                          output: [T.DJ / 2 - T.Z$ / 2, T.jc]
                                      })
                                    : T.jc
                            },
                            children: [
                                (0, r.jsx)(E.r, {
                                    questContent: c,
                                    quest: o,
                                    questContentPosition: A,
                                    shouldShowDisclosure: !0,
                                    hideLearnMore: X,
                                    showShareLink: !n && H,
                                    sourceQuestContent: Z,
                                    children: (e) =>
                                        (0, r.jsx)(a.animated.div, {
                                            style: {
                                                opacity: x,
                                                visibility: j || D ? 'inherit' : 'hidden'
                                            },
                                            'aria-hidden': !j && !D,
                                            children: (0, r.jsx)(
                                                d.P3F,
                                                _(R({}, e), {
                                                    className: w.iconWrapper,
                                                    'aria-label': P.intl.string(P.t.DEoVWV),
                                                    children: (0, r.jsx)(d.xhG, {
                                                        size: 'md',
                                                        color: l.Z.WHITE
                                                    })
                                                })
                                            )
                                        })
                                }),
                                !(0, T.W_)(c) &&
                                    (0, r.jsx)(d.P3F, {
                                        onClick: et,
                                        className: w.iconWrapper,
                                        'aria-label': D ? P.intl.string(P.t.iTcumZ) : P.intl.string(P.t.dcl9MT),
                                        children: (0, r.jsx)(I, {
                                            style: {
                                                rotate: x.to({
                                                    range: [0, 1],
                                                    output: [0, 180]
                                                })
                                            },
                                            color: l.Z.WHITE
                                        })
                                    })
                            ]
                        })
                    ]
                })
            ]
        });
    };

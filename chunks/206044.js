n.d(t, { Z: () => I }), n(388685);
var r = n(255367),
    s = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(524979),
    l = n(722770),
    c = n(846519),
    u = n(481060),
    d = n(393238),
    m = n(393903),
    x = n(448986),
    p = n(572004),
    h = n(617136),
    g = n(113434),
    j = n(497505),
    f = n(918701),
    C = n(566078),
    b = n(685613),
    v = n(611855),
    y = n(644646),
    N = n(968435),
    O = n(670638),
    T = n(87894),
    E = n(46140),
    q = n(231338),
    S = n(388032),
    P = n(491821);
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function R(e, t) {
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
let _ = (0, a.animated)(u.CJ0),
    D = (e) => {
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
                        for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                        return s;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
                }
                return s;
            })(e, ['quest', 'location', 'questContentPosition', 'sourceQuestContent']);
        let [l, d] = s.useState(!1),
            m = s.useRef(new c.V7()),
            x = (0, h.O5)();
        s.useEffect(() => {
            let e = m.current;
            return function () {
                e.stop();
            };
        }, []);
        let g = () => {
            x({
                questId: t.id,
                questContent: n,
                questContentCTA: h.jZ.COPY_QUEST_URL,
                questContentPosition: o,
                sourceQuestContent: i
            }),
                (0, p.JG)((0, f.Rs)(t.id), () => {
                    d(!0), m.current.start(1000, () => d(!1));
                });
        };
        return (0, r.jsx)(u.ua7, {
            forceOpen: l,
            shouldShow: l,
            color: u.ua7.Colors.GREEN,
            text: S.intl.string(S.t.MSaeTU),
            children: () =>
                (0, r.jsx)(
                    u.zxk,
                    R(w({}, a), {
                        className: P.shareButton,
                        color: u.zxk.Colors.PRIMARY,
                        size: u.zxk.Sizes.SMALL,
                        onClick: g,
                        children: S.intl.string(S.t['5Z6rz8'])
                    })
                )
        });
    },
    I = (e) => {
        var t;
        let { isQuestExpired: n, quest: o, location: c, size: p, expansionSpring: f, isAnimating: I, isExpanded: M, contentPosition: A, toggleExpanded: k, sourceQuestContent: Q } = e,
            { ref: Z, height: L } = (0, d.ZP)(),
            [B, U] = s.useState(null),
            [W, z] = s.useState(null),
            G = (0, x.Z)((e) => {
                let t = e.target;
                U(t.offsetWidth), z(t.scrollWidth);
            }),
            F = (0, m.y)(G),
            H = (0, T.uq)(c),
            X = c === j.jn.QUESTS_EMBED,
            Y = (0, g.t5)(o, E.dr.QUESTS_CARD, c, Q),
            V = (null == (t = o.userStatus) ? void 0 : t.completedAt) != null,
            K = (0, h.O5)(),
            J = (0, g.B6)(o.config.expiresAt),
            $ = (0, g.B6)(C.r.build(o.config).rewardsExpireAt),
            ee = s.useMemo(() => null != o.config.cosponsorMetadata, [o]),
            et = (e) => {
                e.stopPropagation(),
                    e.currentTarget.blur(),
                    k(),
                    K({
                        questId: o.id,
                        questContent: c,
                        questContentCTA: M ? h.jZ.COLLAPSE : h.jZ.EXPAND,
                        questContentPosition: A,
                        sourceQuestContent: Q
                    });
            },
            en = (0, r.jsx)(b.ZP, {
                className: P.partnerBranding,
                logotypeClassName: ee ? P.partnerBrandingLogotypes : void 0,
                gameTileSize: b.fF.MEDIUM,
                quest: o,
                separatorSpacing: b.US.MEDIUM,
                theme: q.BR.DARK,
                withGameTile: !X || null == o.config.cosponsorMetadata
            });
        return (0, r.jsxs)('div', {
            className: i()(P.outerContainer, {
                [P.outerContainerGiftInventory]: H,
                [P.outerContainerEmbed]: X,
                [P.outerContainerXs]: 'xs' === p
            }),
            'aria-label': S.intl.string(S.t.dcl9MT),
            style: { height: H ? L : void 0 },
            children: [
                (0, r.jsx)(N.Z, {
                    quest: o,
                    dimensions: {
                        width: 660,
                        height: 185
                    },
                    className: P.questSplash
                }),
                (0, r.jsxs)('div', {
                    className: P.header,
                    'aria-expanded': M,
                    children: [
                        (0, r.jsxs)(a.animated.div, {
                            className: i()(P.headerContent, { [P.headerContentEmbed]: X }),
                            style: {
                                y: H
                                    ? f.to({
                                          range: [0, 1],
                                          output: [T.DJ, 0]
                                      })
                                    : void 0
                            },
                            children: [
                                H &&
                                    (0, r.jsx)(a.animated.div, {
                                        className: P.headerCollapsedContent,
                                        style: {
                                            opacity: f.to({
                                                range: [0, 1],
                                                output: [1, 0]
                                            }),
                                            visibility: I || !M ? 'inherit' : 'hidden'
                                        },
                                        'aria-hidden': !I && M,
                                        children: (0, r.jsxs)(u.kL8, {
                                            'aria-label': S.intl.string(S.t.dcl9MT),
                                            onClick: et,
                                            className: P.headerCollapsedClickableContainer,
                                            children: [
                                                (0, r.jsx)('div', {
                                                    className: P.headerCollapsedContentRewardWrapper,
                                                    children: (0, r.jsx)(y.Z, {
                                                        quest: o,
                                                        questContent: c,
                                                        className: P.headerCollapsedRewardTile,
                                                        location: E.dr.QUESTS_CARD,
                                                        sourceQuestContent: Q
                                                    })
                                                }),
                                                (0, r.jsxs)('div', {
                                                    className: P.headerCollapsedContentCopyWrapper,
                                                    children: [
                                                        (0, r.jsxs)('div', {
                                                            className: P.headerCollapsedContentCopyLogos,
                                                            children: [en, (0, r.jsx)(v.Z, { color: 'always-white' })]
                                                        }),
                                                        (0, r.jsx)(u.Text, {
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
                                        Z.current = e;
                                    },
                                    className: i()(P.headerExpandedContent, {
                                        [P.outerContainerGiftInventory]: H,
                                        [P.outerContainerEmbed]: X
                                    }),
                                    style: {
                                        opacity: f.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        }),
                                        visibility: I || M ? 'inherit' : 'hidden'
                                    },
                                    'aria-hidden': !I && !M,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: P.headerExpandedWrapper,
                                            children: [
                                                (0, r.jsxs)('div', {
                                                    className: P.iconLogotypeContainer,
                                                    children: [en, X ? null : (0, r.jsx)(v.Z, { color: 'always-white' })]
                                                }),
                                                (0, r.jsxs)('div', {
                                                    className: P.questInfo,
                                                    children: [
                                                        (0, r.jsx)(u.ua7, {
                                                            text: o.config.messages.questName,
                                                            shouldShow: null != B && null != W && B < W,
                                                            children: (e) =>
                                                                (0, r.jsx)(
                                                                    u.X6q,
                                                                    R(
                                                                        w(
                                                                            {
                                                                                ref: F,
                                                                                variant: 'lg' === p ? 'heading-xxl/bold' : 'sm' === p ? 'heading-xl/bold' : 'heading-lg/bold',
                                                                                className: P.heading,
                                                                                color: 'always-white'
                                                                            },
                                                                            e
                                                                        ),
                                                                        { children: S.intl.format(S.t.EAYZAg, { questName: o.config.messages.questName }) }
                                                                    )
                                                                )
                                                        }),
                                                        (0, r.jsx)(u.Text, {
                                                            variant: 'text-xs/normal',
                                                            color: 'always-white',
                                                            children: V ? S.intl.formatToPlainString(S.t.APddvL, { expirationDate: $ }) : n ? S.intl.formatToPlainString(S.t.v7xMw8, { expirationDate: J }) : S.intl.formatToPlainString(S.t['pX+fmp'], { expirationDate: J })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        !n &&
                                            H &&
                                            (0, r.jsx)(D, {
                                                quest: o,
                                                location: c,
                                                questContentPosition: A,
                                                sourceQuestContent: Q
                                            })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsxs)(a.animated.div, {
                            className: P.iconsContainer,
                            style: {
                                top: H
                                    ? f.to({
                                          range: [0, 1],
                                          output: [T.DJ / 2 - T.Z$ / 2, T.jc]
                                      })
                                    : T.jc
                            },
                            children: [
                                (0, r.jsx)(O.r, {
                                    questContent: c,
                                    quest: o,
                                    questContentPosition: A,
                                    shouldShowDisclosure: !0,
                                    hideLearnMore: H,
                                    showShareLink: !n && X,
                                    sourceQuestContent: Q,
                                    children: (e) =>
                                        (0, r.jsx)(a.animated.div, {
                                            style: {
                                                opacity: f,
                                                visibility: I || M ? 'inherit' : 'hidden'
                                            },
                                            'aria-hidden': !I && !M,
                                            children: (0, r.jsx)(
                                                u.P3F,
                                                R(w({}, e), {
                                                    className: P.iconWrapper,
                                                    'aria-label': S.intl.string(S.t.DEoVWV),
                                                    children: (0, r.jsx)(u.xhG, {
                                                        size: 'md',
                                                        color: l.Z.WHITE
                                                    })
                                                })
                                            )
                                        })
                                }),
                                !(0, T.W_)(c) &&
                                    (0, r.jsx)(u.P3F, {
                                        onClick: et,
                                        className: P.iconWrapper,
                                        'aria-label': M ? S.intl.string(S.t.iTcumZ) : S.intl.string(S.t.dcl9MT),
                                        children: (0, r.jsx)(_, {
                                            style: {
                                                rotate: f.to({
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

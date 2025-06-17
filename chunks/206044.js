n.d(t, { Z: () => I }), n(388685);
var r = n(255367),
    i = n(73800),
    s = n(120356),
    o = n.n(s),
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
    b = n(566078),
    C = n(685613),
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
        var { quest: t, location: n, questContentPosition: s } = e,
            o = (function (e, t) {
                if (null == e) return {};
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
                return i;
            })(e, ['quest', 'location', 'questContentPosition']);
        let [a, l] = i.useState(!1),
            d = i.useRef(new c.V7()),
            m = (0, h.O5)();
        i.useEffect(() => {
            let e = d.current;
            return function () {
                e.stop();
            };
        }, []);
        let x = () => {
            m({
                questId: t.id,
                questContent: n,
                questContentCTA: h.jZ.COPY_QUEST_URL,
                questContentPosition: s
            }),
                (0, p.JG)((0, f.Rs)(t.id), () => {
                    l(!0), d.current.start(1000, () => l(!1));
                });
        };
        return (0, r.jsx)(u.ua7, {
            forceOpen: a,
            shouldShow: a,
            color: u.ua7.Colors.GREEN,
            text: S.intl.string(S.t.MSaeTU),
            children: () =>
                (0, r.jsx)(
                    u.zxk,
                    R(w({}, o), {
                        className: P.shareButton,
                        color: u.zxk.Colors.PRIMARY,
                        size: u.zxk.Sizes.SMALL,
                        onClick: x,
                        children: S.intl.string(S.t['5Z6rz8'])
                    })
                )
        });
    },
    I = (e) => {
        var t;
        let { isQuestExpired: n, quest: s, location: c, size: p, expansionSpring: f, isAnimating: I, isExpanded: M, contentPosition: A, toggleExpanded: k } = e,
            { ref: Z, height: L } = (0, d.ZP)(),
            [B, U] = i.useState(null),
            [Q, W] = i.useState(null),
            z = (0, x.Z)((e) => {
                let t = e.target;
                U(t.offsetWidth), W(t.scrollWidth);
            }),
            G = (0, m.y)(z),
            F = (0, T.uq)(c),
            H = c === j.jn.QUESTS_EMBED,
            X = (0, g.t5)(s, E.dr.QUESTS_CARD, c),
            Y = (null == (t = s.userStatus) ? void 0 : t.completedAt) != null,
            V = (0, h.O5)(),
            K = (0, g.B6)(s.config.expiresAt, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }),
            J = (0, g.B6)(b.r.build(s.config).rewardsExpireAt, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }),
            $ = i.useMemo(() => null != s.config.cosponsorMetadata, [s]),
            ee = (e) => {
                e.stopPropagation(),
                    e.currentTarget.blur(),
                    k(),
                    V({
                        questId: s.id,
                        questContent: c,
                        questContentCTA: M ? h.jZ.COLLAPSE : h.jZ.EXPAND,
                        questContentPosition: A
                    });
            },
            et = (0, r.jsx)(C.ZP, {
                className: P.partnerBranding,
                logotypeClassName: $ ? P.partnerBrandingLogotypes : void 0,
                gameTileSize: C.fF.MEDIUM,
                quest: s,
                separatorSpacing: C.US.MEDIUM,
                theme: q.BR.DARK,
                withGameTile: !H || null == s.config.cosponsorMetadata
            });
        return (0, r.jsxs)('div', {
            className: o()(P.outerContainer, {
                [P.outerContainerGiftInventory]: F,
                [P.outerContainerEmbed]: H,
                [P.outerContainerXs]: 'xs' === p
            }),
            'aria-label': S.intl.string(S.t.dcl9MT),
            style: { height: F ? L : void 0 },
            children: [
                (0, r.jsx)(N.Z, {
                    quest: s,
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
                            className: o()(P.headerContent, { [P.headerContentEmbed]: H }),
                            style: {
                                y: F
                                    ? f.to({
                                          range: [0, 1],
                                          output: [T.DJ, 0]
                                      })
                                    : void 0
                            },
                            children: [
                                F &&
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
                                            onClick: ee,
                                            className: P.headerCollapsedClickableContainer,
                                            children: [
                                                (0, r.jsx)('div', {
                                                    className: P.headerCollapsedContentRewardWrapper,
                                                    children: (0, r.jsx)(y.Z, {
                                                        quest: s,
                                                        questContent: c,
                                                        className: P.headerCollapsedRewardTile,
                                                        location: E.dr.QUESTS_CARD
                                                    })
                                                }),
                                                (0, r.jsxs)('div', {
                                                    className: P.headerCollapsedContentCopyWrapper,
                                                    children: [
                                                        (0, r.jsxs)('div', {
                                                            className: P.headerCollapsedContentCopyLogos,
                                                            children: [et, (0, r.jsx)(v.Z, { color: 'always-white' })]
                                                        }),
                                                        (0, r.jsx)(u.Text, {
                                                            variant: 'text-xs/medium',
                                                            children: X
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
                                    className: o()(P.headerExpandedContent, {
                                        [P.outerContainerGiftInventory]: F,
                                        [P.outerContainerEmbed]: H
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
                                                    children: [et, H ? null : (0, r.jsx)(v.Z, { color: 'always-white' })]
                                                }),
                                                (0, r.jsxs)('div', {
                                                    className: P.questInfo,
                                                    children: [
                                                        (0, r.jsx)(u.ua7, {
                                                            text: s.config.messages.questName,
                                                            shouldShow: null != B && null != Q && B < Q,
                                                            children: (e) =>
                                                                (0, r.jsx)(
                                                                    u.X6q,
                                                                    R(
                                                                        w(
                                                                            {
                                                                                ref: G,
                                                                                variant: 'lg' === p ? 'heading-xxl/bold' : 'sm' === p ? 'heading-xl/bold' : 'heading-lg/bold',
                                                                                className: P.heading,
                                                                                color: 'always-white'
                                                                            },
                                                                            e
                                                                        ),
                                                                        { children: S.intl.format(S.t.EAYZAg, { questName: s.config.messages.questName }) }
                                                                    )
                                                                )
                                                        }),
                                                        (0, r.jsx)(u.Text, {
                                                            variant: 'text-xs/normal',
                                                            color: 'always-white',
                                                            children: Y ? S.intl.formatToPlainString(S.t.APddvL, { expirationDate: J }) : n ? S.intl.formatToPlainString(S.t.v7xMw8, { expirationDate: K }) : S.intl.formatToPlainString(S.t['pX+fmp'], { expirationDate: K })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        !n &&
                                            F &&
                                            (0, r.jsx)(D, {
                                                quest: s,
                                                location: c,
                                                questContentPosition: A
                                            })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsxs)(a.animated.div, {
                            className: P.iconsContainer,
                            style: {
                                top: F
                                    ? f.to({
                                          range: [0, 1],
                                          output: [T.DJ / 2 - T.Z$ / 2, T.jc]
                                      })
                                    : T.jc
                            },
                            children: [
                                (0, r.jsx)(O.r, {
                                    questContent: c,
                                    quest: s,
                                    questContentPosition: A,
                                    shouldShowDisclosure: !0,
                                    hideLearnMore: F,
                                    showShareLink: !n && H,
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
                                        onClick: ee,
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

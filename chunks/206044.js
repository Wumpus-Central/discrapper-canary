n.d(t, { Z: () => M }), n(47120);
var r = n(200651),
    s = n(192379),
    i = n(120356),
    o = n.n(i),
    l = n(642128),
    a = n(722770),
    c = n(442837),
    u = n(846519),
    d = n(481060),
    m = n(393238),
    p = n(607070),
    x = n(70097),
    g = n(572004),
    h = n(617136),
    f = n(113434),
    j = n(497505),
    v = n(918701),
    b = n(475595),
    C = n(566078),
    N = n(685613),
    E = n(611855),
    T = n(644646),
    y = n(670638),
    S = n(87894),
    O = n(46140),
    q = n(231338),
    P = n(388032),
    w = n(838196);
function A(e) {
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
let _ = (0, l.animated)(d.CJ0),
    Z = (0, l.animated)(x.Z),
    I = (e) => {
        var { quest: t, location: n, questContentPosition: i } = e,
            o = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    s = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            s = {},
                            i = Object.keys(e);
                        for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                        return s;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
                }
                return s;
            })(e, ['quest', 'location', 'questContentPosition']);
        let [l, a] = s.useState(!1),
            c = s.useRef(new u.V7()),
            m = (0, h.O5)();
        s.useEffect(() => {
            let e = c.current;
            return function () {
                e.stop();
            };
        }, []);
        let p = () => {
            m({
                questId: t.id,
                questContent: n,
                questContentCTA: h.jZ.COPY_QUEST_URL,
                questContentPosition: i
            }),
                (0, g.JG)((0, v.Rs)(t.id)),
                a(!0),
                c.current.start(1000, () => a(!1));
        };
        return (0, r.jsx)(d.ua7, {
            forceOpen: l,
            shouldShow: l,
            color: d.ua7.Colors.GREEN,
            text: P.NW.string(P.t.MSaeTU),
            children: () =>
                (0, r.jsx)(
                    d.zxk,
                    R(A({}, o), {
                        className: w.shareButton,
                        color: d.zxk.Colors.PRIMARY,
                        size: d.zxk.Sizes.SMALL,
                        onClick: p,
                        children: P.NW.string(P.t['5Z6rz8'])
                    })
                )
        });
    },
    M = (e) => {
        var t, n;
        let { isFocused: i, isQuestExpired: u, quest: x, location: g, size: v, expansionSpring: M, isAnimating: L, isExpanded: D, isInConcurrentQuestExperiment: k, contentPosition: W, toggleExpanded: U } = e,
            { ref: Q, height: B } = (0, m.Z)(),
            { ref: z, width: F, scrollWidth: G } = (0, m.Z)(),
            H = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
            V = s.useMemo(() => (0, b.fh)(x, b.eC.HERO), [x]),
            X = s.useRef(null),
            Y = (0, S.uq)(g),
            K = g === j.jn.QUESTS_EMBED,
            J = (0, f.t5)(x, O.dr.QUESTS_CARD, g),
            $ = (null === (t = x.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
            ee = (0, h.O5)(),
            et = (0, f.B6)(x.config.expiresAt, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }),
            en = (0, f.B6)(C.r.build(x.config).rewardsExpireAt, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }),
            er = s.useMemo(() => null != x.config.cosponsorMetadata, [x]),
            es = (e) => {
                e.stopPropagation(),
                    e.currentTarget.blur(),
                    U(),
                    ee({
                        questId: x.id,
                        questContent: g,
                        questContentCTA: D ? h.jZ.COLLAPSE : h.jZ.EXPAND,
                        questContentPosition: W
                    });
            };
        s.useEffect(() => {
            V.isAnimated && null != X.current && (i ? X.current.play() : i || (X.current.pause(), (X.current.currentTime = 0)));
        }, [i, V]);
        let ei = (0, r.jsx)(N.ZP, {
            className: w.partnerBranding,
            logotypeClassName: er ? w.partnerBrandingLogotypes : void 0,
            gameTileSize: N.fF.MEDIUM,
            quest: x,
            separatorSpacing: N.US.MEDIUM,
            theme: q.BR.DARK,
            withGameTile: !K || null == x.config.cosponsorMetadata
        });
        return (0, r.jsxs)('div', {
            className: o()(w.outerContainer, {
                [w.outerContainerGiftInventory]: Y,
                [w.outerContainerEmbed]: K,
                [w.outerContainerXs]: 'xs' === v
            }),
            'aria-label': P.NW.string(P.t.dcl9MT),
            style: { height: Y ? B : void 0 },
            children: [
                (0, r.jsx)(Z, {
                    style: {
                        opacity: M.to({
                            range: [0, 1],
                            output: [0.25, 1]
                        })
                    },
                    autoPlay: !1,
                    loop: !1,
                    muted: !0,
                    playsInline: !0,
                    className: w.questSplash,
                    controls: !1,
                    poster: V.url,
                    ref: X,
                    children:
                        !H &&
                        V.isAnimated &&
                        (0, r.jsx)('source', {
                            src: V.url,
                            type: null !== (n = V.mimetype) && void 0 !== n ? n : void 0
                        })
                }),
                (0, r.jsxs)('div', {
                    className: w.header,
                    'aria-expanded': D,
                    children: [
                        (0, r.jsxs)(l.animated.div, {
                            className: o()(w.headerContent, { [w.headerContentEmbed]: K }),
                            style: {
                                y: Y
                                    ? M.to({
                                          range: [0, 1],
                                          output: [S.DJ, 0]
                                      })
                                    : void 0
                            },
                            children: [
                                Y &&
                                    (0, r.jsx)(l.animated.div, {
                                        className: w.headerCollapsedContent,
                                        style: {
                                            opacity: M.to({
                                                range: [0, 1],
                                                output: [1, 0]
                                            }),
                                            visibility: L || !D ? 'inherit' : 'hidden'
                                        },
                                        'aria-hidden': !L && D,
                                        children: (0, r.jsxs)(d.kL8, {
                                            'aria-label': P.NW.string(P.t.dcl9MT),
                                            onClick: es,
                                            className: w.headerCollapsedClickableContainer,
                                            children: [
                                                (0, r.jsx)('div', {
                                                    className: w.headerCollapsedContentRewardWrapper,
                                                    children: (0, r.jsx)(T.Z, {
                                                        quest: x,
                                                        questContent: g,
                                                        className: w.headerCollapsedRewardTile,
                                                        location: O.dr.QUESTS_CARD
                                                    })
                                                }),
                                                (0, r.jsxs)('div', {
                                                    className: w.headerCollapsedContentCopyWrapper,
                                                    children: [
                                                        (0, r.jsxs)('div', {
                                                            className: w.headerCollapsedContentCopyLogos,
                                                            children: [ei, (0, r.jsx)(E.Z, { color: 'always-white' })]
                                                        }),
                                                        (0, r.jsx)(d.Text, {
                                                            variant: 'text-xs/medium',
                                                            children: J
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                (0, r.jsxs)(l.animated.div, {
                                    ref: (e) => {
                                        Q.current = e;
                                    },
                                    className: o()(w.headerExpandedContent, {
                                        [w.outerContainerGiftInventory]: Y,
                                        [w.outerContainerEmbed]: K
                                    }),
                                    style: {
                                        opacity: M.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        }),
                                        visibility: L || D ? 'inherit' : 'hidden'
                                    },
                                    'aria-hidden': !L && !D,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: w.headerExpandedWrapper,
                                            children: [
                                                (0, r.jsxs)('div', {
                                                    className: w.iconLogotypeContainer,
                                                    children: [ei, K ? null : (0, r.jsx)(E.Z, { color: 'always-white' })]
                                                }),
                                                (0, r.jsxs)('div', {
                                                    className: w.questInfo,
                                                    children: [
                                                        (0, r.jsx)(d.ua7, {
                                                            text: x.config.messages.questName,
                                                            shouldShow: null != F && null != G && F < G,
                                                            children: (e) =>
                                                                (0, r.jsx)(
                                                                    d.X6q,
                                                                    R(
                                                                        A(
                                                                            {
                                                                                ref: z,
                                                                                variant: 'lg' === v ? 'heading-xxl/bold' : 'sm' === v ? 'heading-xl/bold' : 'heading-lg/bold',
                                                                                className: w.heading,
                                                                                color: 'always-white'
                                                                            },
                                                                            e
                                                                        ),
                                                                        { children: P.NW.format(P.t.EAYZAg, { questName: x.config.messages.questName }) }
                                                                    )
                                                                )
                                                        }),
                                                        (0, r.jsx)(d.Text, {
                                                            variant: 'text-xs/normal',
                                                            color: 'always-white',
                                                            children: $ ? P.NW.formatToPlainString(P.t.APddvL, { expirationDate: en }) : u ? P.NW.formatToPlainString(P.t.v7xMw8, { expirationDate: et }) : P.NW.formatToPlainString(P.t['pX+fmp'], { expirationDate: et })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        !u &&
                                            Y &&
                                            (0, r.jsx)(I, {
                                                quest: x,
                                                location: g,
                                                questContentPosition: W
                                            })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsxs)(l.animated.div, {
                            className: w.iconsContainer,
                            style: {
                                top: Y
                                    ? M.to({
                                          range: [0, 1],
                                          output: [S.DJ / 2 - S.Z$ / 2, S.jc]
                                      })
                                    : S.jc
                            },
                            children: [
                                (0, r.jsx)(y.r, {
                                    questContent: g,
                                    quest: x,
                                    questContentPosition: W,
                                    shouldShowDisclosure: !0,
                                    hideLearnMore: Y,
                                    showShareLink: !u && K,
                                    children: (e) =>
                                        (0, r.jsx)(l.animated.div, {
                                            style: {
                                                opacity: M,
                                                visibility: L || D ? 'inherit' : 'hidden'
                                            },
                                            'aria-hidden': !L && !D,
                                            children: (0, r.jsx)(
                                                d.P3F,
                                                R(A({}, e), {
                                                    className: w.iconWrapper,
                                                    'aria-label': P.NW.string(P.t.DEoVWV),
                                                    children: (0, r.jsx)(d.xhG, {
                                                        size: 'md',
                                                        color: a.Z.WHITE
                                                    })
                                                })
                                            )
                                        })
                                }),
                                k &&
                                    !(0, S.W_)(g) &&
                                    (0, r.jsx)(d.P3F, {
                                        onClick: es,
                                        className: w.iconWrapper,
                                        'aria-label': D ? P.NW.string(P.t.iTcumZ) : P.NW.string(P.t.dcl9MT),
                                        children: (0, r.jsx)(_, {
                                            style: {
                                                rotate: M.to({
                                                    range: [0, 1],
                                                    output: [0, 180]
                                                })
                                            },
                                            color: a.Z.WHITE
                                        })
                                    })
                            ]
                        })
                    ]
                })
            ]
        });
    };

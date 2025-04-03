n.d(t, { Z: () => A }), n(47120);
var r = n(200651),
    s = n(192379),
    o = n(120356),
    i = n.n(o),
    a = n(642128),
    l = n(722770),
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
    b = n(918701),
    C = n(475595),
    N = n(566078),
    v = n(685613),
    y = n(611855),
    O = n(644646),
    T = n(670638),
    E = n(87894),
    q = n(46140),
    S = n(231338),
    P = n(388032),
    w = n(491821);
function R(e) {
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
    D = (0, a.animated)(x.Z),
    M = (e) => {
        var { quest: t, location: n, questContentPosition: o } = e,
            i = (function (e, t) {
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
            })(e, ['quest', 'location', 'questContentPosition']);
        let [a, l] = s.useState(!1),
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
                questContentPosition: o
            }),
                (0, g.JG)((0, b.Rs)(t.id)),
                l(!0),
                c.current.start(1000, () => l(!1));
        };
        return (0, r.jsx)(d.ua7, {
            forceOpen: a,
            shouldShow: a,
            color: d.ua7.Colors.GREEN,
            text: P.NW.string(P.t.MSaeTU),
            children: () =>
                (0, r.jsx)(
                    d.zxk,
                    _(R({}, i), {
                        className: w.shareButton,
                        color: d.zxk.Colors.PRIMARY,
                        size: d.zxk.Sizes.SMALL,
                        onClick: p,
                        children: P.NW.string(P.t['5Z6rz8'])
                    })
                )
        });
    },
    A = (e) => {
        var t, n;
        let { isFocused: o, isQuestExpired: u, quest: x, location: g, size: b, expansionSpring: A, isAnimating: W, isExpanded: Z, isInConcurrentQuestExperiment: k, contentPosition: L, toggleExpanded: B } = e,
            { ref: U, height: Q } = (0, m.Z)(),
            { ref: F, width: z, scrollWidth: G } = (0, m.Z)(),
            H = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
            X = s.useMemo(() => (0, C.fh)(x, C.eC.HERO), [x]),
            V = s.useRef(null),
            Y = (0, E.uq)(g),
            K = g === j.jn.QUESTS_EMBED,
            J = (0, f.t5)(x, q.dr.QUESTS_CARD, g),
            $ = (null == (t = x.userStatus) ? void 0 : t.completedAt) != null,
            ee = (0, h.O5)(),
            et = (0, f.B6)(x.config.expiresAt, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }),
            en = (0, f.B6)(N.r.build(x.config).rewardsExpireAt, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }),
            er = s.useMemo(() => null != x.config.cosponsorMetadata, [x]),
            es = (e) => {
                e.stopPropagation(),
                    e.currentTarget.blur(),
                    B(),
                    ee({
                        questId: x.id,
                        questContent: g,
                        questContentCTA: Z ? h.jZ.COLLAPSE : h.jZ.EXPAND,
                        questContentPosition: L
                    });
            };
        s.useEffect(() => {
            X.isAnimated && null != V.current && (o ? V.current.play() : o || (V.current.pause(), (V.current.currentTime = 0)));
        }, [o, X]);
        let eo = (0, r.jsx)(v.ZP, {
            className: w.partnerBranding,
            logotypeClassName: er ? w.partnerBrandingLogotypes : void 0,
            gameTileSize: v.fF.MEDIUM,
            quest: x,
            separatorSpacing: v.US.MEDIUM,
            theme: S.BR.DARK,
            withGameTile: !K || null == x.config.cosponsorMetadata
        });
        return (0, r.jsxs)('div', {
            className: i()(w.outerContainer, {
                [w.outerContainerGiftInventory]: Y,
                [w.outerContainerEmbed]: K,
                [w.outerContainerXs]: 'xs' === b
            }),
            'aria-label': P.NW.string(P.t.dcl9MT),
            style: { height: Y ? Q : void 0 },
            children: [
                (0, r.jsx)(D, {
                    style: {
                        opacity: A.to({
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
                    poster: X.url,
                    ref: V,
                    children:
                        !H &&
                        X.isAnimated &&
                        (0, r.jsx)('source', {
                            src: X.url,
                            type: null != (n = X.mimetype) ? n : void 0
                        })
                }),
                (0, r.jsxs)('div', {
                    className: w.header,
                    'aria-expanded': Z,
                    children: [
                        (0, r.jsxs)(a.animated.div, {
                            className: i()(w.headerContent, { [w.headerContentEmbed]: K }),
                            style: {
                                y: Y
                                    ? A.to({
                                          range: [0, 1],
                                          output: [E.DJ, 0]
                                      })
                                    : void 0
                            },
                            children: [
                                Y &&
                                    (0, r.jsx)(a.animated.div, {
                                        className: w.headerCollapsedContent,
                                        style: {
                                            opacity: A.to({
                                                range: [0, 1],
                                                output: [1, 0]
                                            }),
                                            visibility: W || !Z ? 'inherit' : 'hidden'
                                        },
                                        'aria-hidden': !W && Z,
                                        children: (0, r.jsxs)(d.kL8, {
                                            'aria-label': P.NW.string(P.t.dcl9MT),
                                            onClick: es,
                                            className: w.headerCollapsedClickableContainer,
                                            children: [
                                                (0, r.jsx)('div', {
                                                    className: w.headerCollapsedContentRewardWrapper,
                                                    children: (0, r.jsx)(O.Z, {
                                                        quest: x,
                                                        questContent: g,
                                                        className: w.headerCollapsedRewardTile,
                                                        location: q.dr.QUESTS_CARD
                                                    })
                                                }),
                                                (0, r.jsxs)('div', {
                                                    className: w.headerCollapsedContentCopyWrapper,
                                                    children: [
                                                        (0, r.jsxs)('div', {
                                                            className: w.headerCollapsedContentCopyLogos,
                                                            children: [eo, (0, r.jsx)(y.Z, { color: 'always-white' })]
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
                                (0, r.jsxs)(a.animated.div, {
                                    ref: (e) => {
                                        U.current = e;
                                    },
                                    className: i()(w.headerExpandedContent, {
                                        [w.outerContainerGiftInventory]: Y,
                                        [w.outerContainerEmbed]: K
                                    }),
                                    style: {
                                        opacity: A.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        }),
                                        visibility: W || Z ? 'inherit' : 'hidden'
                                    },
                                    'aria-hidden': !W && !Z,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: w.headerExpandedWrapper,
                                            children: [
                                                (0, r.jsxs)('div', {
                                                    className: w.iconLogotypeContainer,
                                                    children: [eo, K ? null : (0, r.jsx)(y.Z, { color: 'always-white' })]
                                                }),
                                                (0, r.jsxs)('div', {
                                                    className: w.questInfo,
                                                    children: [
                                                        (0, r.jsx)(d.ua7, {
                                                            text: x.config.messages.questName,
                                                            shouldShow: null != z && null != G && z < G,
                                                            children: (e) =>
                                                                (0, r.jsx)(
                                                                    d.X6q,
                                                                    _(
                                                                        R(
                                                                            {
                                                                                ref: F,
                                                                                variant: 'lg' === b ? 'heading-xxl/bold' : 'sm' === b ? 'heading-xl/bold' : 'heading-lg/bold',
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
                                            (0, r.jsx)(M, {
                                                quest: x,
                                                location: g,
                                                questContentPosition: L
                                            })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsxs)(a.animated.div, {
                            className: w.iconsContainer,
                            style: {
                                top: Y
                                    ? A.to({
                                          range: [0, 1],
                                          output: [E.DJ / 2 - E.Z$ / 2, E.jc]
                                      })
                                    : E.jc
                            },
                            children: [
                                (0, r.jsx)(T.r, {
                                    questContent: g,
                                    quest: x,
                                    questContentPosition: L,
                                    shouldShowDisclosure: !0,
                                    hideLearnMore: Y,
                                    showShareLink: !u && K,
                                    children: (e) =>
                                        (0, r.jsx)(a.animated.div, {
                                            style: {
                                                opacity: A,
                                                visibility: W || Z ? 'inherit' : 'hidden'
                                            },
                                            'aria-hidden': !W && !Z,
                                            children: (0, r.jsx)(
                                                d.P3F,
                                                _(R({}, e), {
                                                    className: w.iconWrapper,
                                                    'aria-label': P.NW.string(P.t.DEoVWV),
                                                    children: (0, r.jsx)(d.xhG, {
                                                        size: 'md',
                                                        color: l.Z.WHITE
                                                    })
                                                })
                                            )
                                        })
                                }),
                                k &&
                                    !(0, E.W_)(g) &&
                                    (0, r.jsx)(d.P3F, {
                                        onClick: es,
                                        className: w.iconWrapper,
                                        'aria-label': Z ? P.NW.string(P.t.iTcumZ) : P.NW.string(P.t.dcl9MT),
                                        children: (0, r.jsx)(I, {
                                            style: {
                                                rotate: A.to({
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

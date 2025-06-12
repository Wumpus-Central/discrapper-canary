n.d(t, { Z: () => A }), n(388685);
var r = n(255367),
    s = n(73800),
    i = n(120356),
    o = n.n(i),
    a = n(524979),
    l = n(722770),
    c = n(846519),
    u = n(481060),
    d = n(393238),
    m = n(393903),
    p = n(448986),
    x = n(70097),
    g = n(572004),
    h = n(617136),
    f = n(113434),
    j = n(497505),
    b = n(918701),
    C = n(475595),
    v = n(566078),
    y = n(685613),
    O = n(611855),
    N = n(644646),
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
let I = (0, a.animated)(u.CJ0),
    D = (0, a.animated)(x.Z),
    M = (e) => {
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
        let [a, l] = s.useState(!1),
            d = s.useRef(new c.V7()),
            m = (0, h.O5)();
        s.useEffect(() => {
            let e = d.current;
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
                (0, g.JG)((0, b.Rs)(t.id), () => {
                    l(!0), d.current.start(1000, () => l(!1));
                });
        };
        return (0, r.jsx)(u.ua7, {
            forceOpen: a,
            shouldShow: a,
            color: u.ua7.Colors.GREEN,
            text: P.intl.string(P.t.MSaeTU),
            children: () =>
                (0, r.jsx)(
                    u.zxk,
                    _(R({}, o), {
                        className: w.shareButton,
                        color: u.zxk.Colors.PRIMARY,
                        size: u.zxk.Sizes.SMALL,
                        onClick: p,
                        children: P.intl.string(P.t['5Z6rz8'])
                    })
                )
        });
    },
    A = (e) => {
        var t, n;
        let { isQuestExpired: i, quest: c, location: x, size: g, expansionSpring: b, isAnimating: A, isExpanded: k, contentPosition: Z, toggleExpanded: L } = e,
            { ref: B, height: U } = (0, d.ZP)(),
            [Q, W] = s.useState(null),
            [G, z] = s.useState(null),
            F = (0, p.Z)((e) => {
                let t = e.target;
                W(t.offsetWidth), z(t.scrollWidth);
            }),
            H = (0, m.y)(F),
            X = s.useMemo(() => (0, C.fh)(c, C.eC.HERO_IMAGE), [c]),
            Y = s.useRef(null),
            V = (0, E.uq)(x),
            K = x === j.jn.QUESTS_EMBED,
            J = (0, f.t5)(c, q.dr.QUESTS_CARD, x),
            $ = (null == (t = c.userStatus) ? void 0 : t.completedAt) != null,
            ee = (0, h.O5)(),
            et = (0, f.B6)(c.config.expiresAt, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }),
            en = (0, f.B6)(v.r.build(c.config).rewardsExpireAt, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }),
            er = s.useMemo(() => null != c.config.cosponsorMetadata, [c]),
            es = (e) => {
                e.stopPropagation(),
                    e.currentTarget.blur(),
                    L(),
                    ee({
                        questId: c.id,
                        questContent: x,
                        questContentCTA: k ? h.jZ.COLLAPSE : h.jZ.EXPAND,
                        questContentPosition: Z
                    });
            },
            ei = (0, r.jsx)(y.ZP, {
                className: w.partnerBranding,
                logotypeClassName: er ? w.partnerBrandingLogotypes : void 0,
                gameTileSize: y.fF.MEDIUM,
                quest: c,
                separatorSpacing: y.US.MEDIUM,
                theme: S.BR.DARK,
                withGameTile: !K || null == c.config.cosponsorMetadata
            });
        return (0, r.jsxs)('div', {
            className: o()(w.outerContainer, {
                [w.outerContainerGiftInventory]: V,
                [w.outerContainerEmbed]: K,
                [w.outerContainerXs]: 'xs' === g
            }),
            'aria-label': P.intl.string(P.t.dcl9MT),
            style: { height: V ? U : void 0 },
            children: [
                X.isAnimated
                    ? (0, r.jsx)(D, {
                          style: {
                              opacity: b.to({
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
                          ref: Y,
                          children: (0, r.jsx)('source', {
                              src: X.url,
                              type: null != (n = X.mimetype) ? n : void 0
                          })
                      })
                    : (0, r.jsx)('img', {
                          src: X.url,
                          alt: c.config.messages.questName,
                          className: w.questSplash
                      }),
                (0, r.jsxs)('div', {
                    className: w.header,
                    'aria-expanded': k,
                    children: [
                        (0, r.jsxs)(a.animated.div, {
                            className: o()(w.headerContent, { [w.headerContentEmbed]: K }),
                            style: {
                                y: V
                                    ? b.to({
                                          range: [0, 1],
                                          output: [E.DJ, 0]
                                      })
                                    : void 0
                            },
                            children: [
                                V &&
                                    (0, r.jsx)(a.animated.div, {
                                        className: w.headerCollapsedContent,
                                        style: {
                                            opacity: b.to({
                                                range: [0, 1],
                                                output: [1, 0]
                                            }),
                                            visibility: A || !k ? 'inherit' : 'hidden'
                                        },
                                        'aria-hidden': !A && k,
                                        children: (0, r.jsxs)(u.kL8, {
                                            'aria-label': P.intl.string(P.t.dcl9MT),
                                            onClick: es,
                                            className: w.headerCollapsedClickableContainer,
                                            children: [
                                                (0, r.jsx)('div', {
                                                    className: w.headerCollapsedContentRewardWrapper,
                                                    children: (0, r.jsx)(N.Z, {
                                                        quest: c,
                                                        questContent: x,
                                                        className: w.headerCollapsedRewardTile,
                                                        location: q.dr.QUESTS_CARD
                                                    })
                                                }),
                                                (0, r.jsxs)('div', {
                                                    className: w.headerCollapsedContentCopyWrapper,
                                                    children: [
                                                        (0, r.jsxs)('div', {
                                                            className: w.headerCollapsedContentCopyLogos,
                                                            children: [ei, (0, r.jsx)(O.Z, { color: 'always-white' })]
                                                        }),
                                                        (0, r.jsx)(u.Text, {
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
                                        B.current = e;
                                    },
                                    className: o()(w.headerExpandedContent, {
                                        [w.outerContainerGiftInventory]: V,
                                        [w.outerContainerEmbed]: K
                                    }),
                                    style: {
                                        opacity: b.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        }),
                                        visibility: A || k ? 'inherit' : 'hidden'
                                    },
                                    'aria-hidden': !A && !k,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: w.headerExpandedWrapper,
                                            children: [
                                                (0, r.jsxs)('div', {
                                                    className: w.iconLogotypeContainer,
                                                    children: [ei, K ? null : (0, r.jsx)(O.Z, { color: 'always-white' })]
                                                }),
                                                (0, r.jsxs)('div', {
                                                    className: w.questInfo,
                                                    children: [
                                                        (0, r.jsx)(u.ua7, {
                                                            text: c.config.messages.questName,
                                                            shouldShow: null != Q && null != G && Q < G,
                                                            children: (e) =>
                                                                (0, r.jsx)(
                                                                    u.X6q,
                                                                    _(
                                                                        R(
                                                                            {
                                                                                ref: H,
                                                                                variant: 'lg' === g ? 'heading-xxl/bold' : 'sm' === g ? 'heading-xl/bold' : 'heading-lg/bold',
                                                                                className: w.heading,
                                                                                color: 'always-white'
                                                                            },
                                                                            e
                                                                        ),
                                                                        { children: P.intl.format(P.t.EAYZAg, { questName: c.config.messages.questName }) }
                                                                    )
                                                                )
                                                        }),
                                                        (0, r.jsx)(u.Text, {
                                                            variant: 'text-xs/normal',
                                                            color: 'always-white',
                                                            children: $ ? P.intl.formatToPlainString(P.t.APddvL, { expirationDate: en }) : i ? P.intl.formatToPlainString(P.t.v7xMw8, { expirationDate: et }) : P.intl.formatToPlainString(P.t['pX+fmp'], { expirationDate: et })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        !i &&
                                            V &&
                                            (0, r.jsx)(M, {
                                                quest: c,
                                                location: x,
                                                questContentPosition: Z
                                            })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsxs)(a.animated.div, {
                            className: w.iconsContainer,
                            style: {
                                top: V
                                    ? b.to({
                                          range: [0, 1],
                                          output: [E.DJ / 2 - E.Z$ / 2, E.jc]
                                      })
                                    : E.jc
                            },
                            children: [
                                (0, r.jsx)(T.r, {
                                    questContent: x,
                                    quest: c,
                                    questContentPosition: Z,
                                    shouldShowDisclosure: !0,
                                    hideLearnMore: V,
                                    showShareLink: !i && K,
                                    children: (e) =>
                                        (0, r.jsx)(a.animated.div, {
                                            style: {
                                                opacity: b,
                                                visibility: A || k ? 'inherit' : 'hidden'
                                            },
                                            'aria-hidden': !A && !k,
                                            children: (0, r.jsx)(
                                                u.P3F,
                                                _(R({}, e), {
                                                    className: w.iconWrapper,
                                                    'aria-label': P.intl.string(P.t.DEoVWV),
                                                    children: (0, r.jsx)(u.xhG, {
                                                        size: 'md',
                                                        color: l.Z.WHITE
                                                    })
                                                })
                                            )
                                        })
                                }),
                                !(0, E.W_)(x) &&
                                    (0, r.jsx)(u.P3F, {
                                        onClick: es,
                                        className: w.iconWrapper,
                                        'aria-label': k ? P.intl.string(P.t.iTcumZ) : P.intl.string(P.t.dcl9MT),
                                        children: (0, r.jsx)(I, {
                                            style: {
                                                rotate: b.to({
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

n.d(t, { Z: () => Z }), n(388685);
var r = n(255367),
    s = n(73800),
    i = n(120356),
    o = n.n(i),
    a = n(950035),
    l = n(722770),
    c = n(442837),
    u = n(846519),
    d = n(481060),
    m = n(393238),
    p = n(393903),
    x = n(448986),
    g = n(607070),
    h = n(70097),
    j = n(572004),
    f = n(617136),
    b = n(113434),
    C = n(497505),
    v = n(918701),
    y = n(475595),
    T = n(566078),
    O = n(685613),
    N = n(611855),
    E = n(644646),
    q = n(670638),
    S = n(87894),
    P = n(46140),
    w = n(231338),
    R = n(388032),
    _ = n(491821);
function I(e) {
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
function D(e, t) {
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
let M = (0, a.animated)(d.CJ0),
    A = (0, a.animated)(h.Z),
    k = (e) => {
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
            c = s.useRef(new u.V7()),
            m = (0, f.O5)();
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
                questContentCTA: f.jZ.COPY_QUEST_URL,
                questContentPosition: i
            }),
                (0, j.JG)((0, v.Rs)(t.id), () => {
                    l(!0), c.current.start(1000, () => l(!1));
                });
        };
        return (0, r.jsx)(d.ua7, {
            forceOpen: a,
            shouldShow: a,
            color: d.ua7.Colors.GREEN,
            text: R.intl.string(R.t.MSaeTU),
            children: () =>
                (0, r.jsx)(
                    d.zxk,
                    D(I({}, o), {
                        className: _.shareButton,
                        color: d.zxk.Colors.PRIMARY,
                        size: d.zxk.Sizes.SMALL,
                        onClick: p,
                        children: R.intl.string(R.t['5Z6rz8'])
                    })
                )
        });
    },
    Z = (e) => {
        var t, n;
        let { isFocused: i, isQuestExpired: u, quest: h, location: j, size: v, expansionSpring: Z, isAnimating: L, isExpanded: B, contentPosition: U, toggleExpanded: Q } = e,
            { ref: W, height: z } = (0, m.ZP)(),
            [F, G] = s.useState(null),
            [H, X] = s.useState(null),
            Y = (0, x.Z)((e) => {
                let t = e.target;
                G(t.offsetWidth), X(t.scrollWidth);
            }),
            V = (0, p.y)(Y),
            K = (0, c.e7)([g.Z], () => g.Z.useReducedMotion),
            J = s.useMemo(() => (0, y.fh)(h, y.eC.HERO), [h]),
            $ = s.useRef(null),
            ee = (0, S.uq)(j),
            et = j === C.jn.QUESTS_EMBED,
            en = (0, b.t5)(h, P.dr.QUESTS_CARD, j),
            er = (null == (t = h.userStatus) ? void 0 : t.completedAt) != null,
            es = (0, f.O5)(),
            ei = (0, b.B6)(h.config.expiresAt, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }),
            eo = (0, b.B6)(T.r.build(h.config).rewardsExpireAt, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }),
            ea = s.useMemo(() => null != h.config.cosponsorMetadata, [h]),
            el = (e) => {
                e.stopPropagation(),
                    e.currentTarget.blur(),
                    Q(),
                    es({
                        questId: h.id,
                        questContent: j,
                        questContentCTA: B ? f.jZ.COLLAPSE : f.jZ.EXPAND,
                        questContentPosition: U
                    });
            };
        s.useEffect(() => {
            J.isAnimated && null != $.current && (i && !K ? $.current.play() : i || ($.current.pause(), ($.current.currentTime = 0)));
        }, [i, K, J]);
        let ec = (0, r.jsx)(O.ZP, {
            className: _.partnerBranding,
            logotypeClassName: ea ? _.partnerBrandingLogotypes : void 0,
            gameTileSize: O.fF.MEDIUM,
            quest: h,
            separatorSpacing: O.US.MEDIUM,
            theme: w.BR.DARK,
            withGameTile: !et || null == h.config.cosponsorMetadata
        });
        return (0, r.jsxs)('div', {
            className: o()(_.outerContainer, {
                [_.outerContainerGiftInventory]: ee,
                [_.outerContainerEmbed]: et,
                [_.outerContainerXs]: 'xs' === v
            }),
            'aria-label': R.intl.string(R.t.dcl9MT),
            style: { height: ee ? z : void 0 },
            children: [
                (0, r.jsx)(A, {
                    style: {
                        opacity: Z.to({
                            range: [0, 1],
                            output: [0.25, 1]
                        })
                    },
                    autoPlay: !1,
                    loop: !1,
                    muted: !0,
                    playsInline: !0,
                    className: _.questSplash,
                    controls: !1,
                    poster: J.isAnimated ? void 0 : J.url,
                    ref: $,
                    children:
                        J.isAnimated &&
                        (0, r.jsx)('source', {
                            src: J.url,
                            type: null != (n = J.mimetype) ? n : void 0
                        })
                }),
                (0, r.jsxs)('div', {
                    className: _.header,
                    'aria-expanded': B,
                    children: [
                        (0, r.jsxs)(a.animated.div, {
                            className: o()(_.headerContent, { [_.headerContentEmbed]: et }),
                            style: {
                                y: ee
                                    ? Z.to({
                                          range: [0, 1],
                                          output: [S.DJ, 0]
                                      })
                                    : void 0
                            },
                            children: [
                                ee &&
                                    (0, r.jsx)(a.animated.div, {
                                        className: _.headerCollapsedContent,
                                        style: {
                                            opacity: Z.to({
                                                range: [0, 1],
                                                output: [1, 0]
                                            }),
                                            visibility: L || !B ? 'inherit' : 'hidden'
                                        },
                                        'aria-hidden': !L && B,
                                        children: (0, r.jsxs)(d.kL8, {
                                            'aria-label': R.intl.string(R.t.dcl9MT),
                                            onClick: el,
                                            className: _.headerCollapsedClickableContainer,
                                            children: [
                                                (0, r.jsx)('div', {
                                                    className: _.headerCollapsedContentRewardWrapper,
                                                    children: (0, r.jsx)(E.Z, {
                                                        quest: h,
                                                        questContent: j,
                                                        className: _.headerCollapsedRewardTile,
                                                        location: P.dr.QUESTS_CARD
                                                    })
                                                }),
                                                (0, r.jsxs)('div', {
                                                    className: _.headerCollapsedContentCopyWrapper,
                                                    children: [
                                                        (0, r.jsxs)('div', {
                                                            className: _.headerCollapsedContentCopyLogos,
                                                            children: [ec, (0, r.jsx)(N.Z, { color: 'always-white' })]
                                                        }),
                                                        (0, r.jsx)(d.Text, {
                                                            variant: 'text-xs/medium',
                                                            children: en
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                (0, r.jsxs)(a.animated.div, {
                                    ref: (e) => {
                                        W.current = e;
                                    },
                                    className: o()(_.headerExpandedContent, {
                                        [_.outerContainerGiftInventory]: ee,
                                        [_.outerContainerEmbed]: et
                                    }),
                                    style: {
                                        opacity: Z.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        }),
                                        visibility: L || B ? 'inherit' : 'hidden'
                                    },
                                    'aria-hidden': !L && !B,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: _.headerExpandedWrapper,
                                            children: [
                                                (0, r.jsxs)('div', {
                                                    className: _.iconLogotypeContainer,
                                                    children: [ec, et ? null : (0, r.jsx)(N.Z, { color: 'always-white' })]
                                                }),
                                                (0, r.jsxs)('div', {
                                                    className: _.questInfo,
                                                    children: [
                                                        (0, r.jsx)(d.ua7, {
                                                            text: h.config.messages.questName,
                                                            shouldShow: null != F && null != H && F < H,
                                                            children: (e) =>
                                                                (0, r.jsx)(
                                                                    d.X6q,
                                                                    D(
                                                                        I(
                                                                            {
                                                                                ref: V,
                                                                                variant: 'lg' === v ? 'heading-xxl/bold' : 'sm' === v ? 'heading-xl/bold' : 'heading-lg/bold',
                                                                                className: _.heading,
                                                                                color: 'always-white'
                                                                            },
                                                                            e
                                                                        ),
                                                                        { children: R.intl.format(R.t.EAYZAg, { questName: h.config.messages.questName }) }
                                                                    )
                                                                )
                                                        }),
                                                        (0, r.jsx)(d.Text, {
                                                            variant: 'text-xs/normal',
                                                            color: 'always-white',
                                                            children: er ? R.intl.formatToPlainString(R.t.APddvL, { expirationDate: eo }) : u ? R.intl.formatToPlainString(R.t.v7xMw8, { expirationDate: ei }) : R.intl.formatToPlainString(R.t['pX+fmp'], { expirationDate: ei })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        !u &&
                                            ee &&
                                            (0, r.jsx)(k, {
                                                quest: h,
                                                location: j,
                                                questContentPosition: U
                                            })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsxs)(a.animated.div, {
                            className: _.iconsContainer,
                            style: {
                                top: ee
                                    ? Z.to({
                                          range: [0, 1],
                                          output: [S.DJ / 2 - S.Z$ / 2, S.jc]
                                      })
                                    : S.jc
                            },
                            children: [
                                (0, r.jsx)(q.r, {
                                    questContent: j,
                                    quest: h,
                                    questContentPosition: U,
                                    shouldShowDisclosure: !0,
                                    hideLearnMore: ee,
                                    showShareLink: !u && et,
                                    children: (e) =>
                                        (0, r.jsx)(a.animated.div, {
                                            style: {
                                                opacity: Z,
                                                visibility: L || B ? 'inherit' : 'hidden'
                                            },
                                            'aria-hidden': !L && !B,
                                            children: (0, r.jsx)(
                                                d.P3F,
                                                D(I({}, e), {
                                                    className: _.iconWrapper,
                                                    'aria-label': R.intl.string(R.t.DEoVWV),
                                                    children: (0, r.jsx)(d.xhG, {
                                                        size: 'md',
                                                        color: l.Z.WHITE
                                                    })
                                                })
                                            )
                                        })
                                }),
                                !(0, S.W_)(j) &&
                                    (0, r.jsx)(d.P3F, {
                                        onClick: el,
                                        className: _.iconWrapper,
                                        'aria-label': B ? R.intl.string(R.t.iTcumZ) : R.intl.string(R.t.dcl9MT),
                                        children: (0, r.jsx)(M, {
                                            style: {
                                                rotate: Z.to({
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

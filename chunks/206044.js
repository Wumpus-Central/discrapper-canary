n.d(t, { Z: () => k }), n(388685);
var r = n(255367),
    s = n(73800),
    i = n(120356),
    o = n.n(i),
    a = n(481752),
    l = n(722770),
    c = n(442837),
    u = n(846519),
    d = n(481060),
    m = n(393238),
    p = n(393903),
    x = n(448986),
    g = n(607070),
    h = n(70097),
    f = n(572004),
    j = n(617136),
    b = n(113434),
    C = n(497505),
    v = n(918701),
    y = n(475595),
    T = n(566078),
    O = n(685613),
    E = n(611855),
    N = n(644646),
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
    Z = (e) => {
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
            m = (0, j.O5)();
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
                questContentCTA: j.jZ.COPY_QUEST_URL,
                questContentPosition: i
            }),
                (0, f.JG)((0, v.Rs)(t.id), () => {
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
    k = (e) => {
        var t, n;
        let { isFocused: i, isQuestExpired: u, quest: h, location: f, size: v, expansionSpring: k, isAnimating: L, isExpanded: B, isInConcurrentQuestExperiment: U, contentPosition: Q, toggleExpanded: W } = e,
            { ref: z, height: F } = (0, m.ZP)(),
            [G, H] = s.useState(null),
            [X, Y] = s.useState(null),
            V = (0, x.Z)((e) => {
                let t = e.target;
                H(t.offsetWidth), Y(t.scrollWidth);
            }),
            K = (0, p.y)(V),
            J = (0, c.e7)([g.Z], () => g.Z.useReducedMotion),
            $ = s.useMemo(() => (0, y.fh)(h, y.eC.HERO), [h]),
            ee = s.useRef(null),
            et = (0, S.uq)(f),
            en = f === C.jn.QUESTS_EMBED,
            er = (0, b.t5)(h, P.dr.QUESTS_CARD, f),
            es = (null == (t = h.userStatus) ? void 0 : t.completedAt) != null,
            ei = (0, j.O5)(),
            eo = (0, b.B6)(h.config.expiresAt, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }),
            ea = (0, b.B6)(T.r.build(h.config).rewardsExpireAt, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }),
            el = s.useMemo(() => null != h.config.cosponsorMetadata, [h]),
            ec = (e) => {
                e.stopPropagation(),
                    e.currentTarget.blur(),
                    W(),
                    ei({
                        questId: h.id,
                        questContent: f,
                        questContentCTA: B ? j.jZ.COLLAPSE : j.jZ.EXPAND,
                        questContentPosition: Q
                    });
            };
        s.useEffect(() => {
            $.isAnimated && null != ee.current && (i ? ee.current.play() : i || (ee.current.pause(), (ee.current.currentTime = 0)));
        }, [i, $]);
        let eu = (0, r.jsx)(O.ZP, {
            className: _.partnerBranding,
            logotypeClassName: el ? _.partnerBrandingLogotypes : void 0,
            gameTileSize: O.fF.MEDIUM,
            quest: h,
            separatorSpacing: O.US.MEDIUM,
            theme: w.BR.DARK,
            withGameTile: !en || null == h.config.cosponsorMetadata
        });
        return (0, r.jsxs)('div', {
            className: o()(_.outerContainer, {
                [_.outerContainerGiftInventory]: et,
                [_.outerContainerEmbed]: en,
                [_.outerContainerXs]: 'xs' === v
            }),
            'aria-label': R.intl.string(R.t.dcl9MT),
            style: { height: et ? F : void 0 },
            children: [
                (0, r.jsx)(A, {
                    style: {
                        opacity: k.to({
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
                    poster: $.url,
                    ref: ee,
                    children:
                        !J &&
                        $.isAnimated &&
                        (0, r.jsx)('source', {
                            src: $.url,
                            type: null != (n = $.mimetype) ? n : void 0
                        })
                }),
                (0, r.jsxs)('div', {
                    className: _.header,
                    'aria-expanded': B,
                    children: [
                        (0, r.jsxs)(a.animated.div, {
                            className: o()(_.headerContent, { [_.headerContentEmbed]: en }),
                            style: {
                                y: et
                                    ? k.to({
                                          range: [0, 1],
                                          output: [S.DJ, 0]
                                      })
                                    : void 0
                            },
                            children: [
                                et &&
                                    (0, r.jsx)(a.animated.div, {
                                        className: _.headerCollapsedContent,
                                        style: {
                                            opacity: k.to({
                                                range: [0, 1],
                                                output: [1, 0]
                                            }),
                                            visibility: L || !B ? 'inherit' : 'hidden'
                                        },
                                        'aria-hidden': !L && B,
                                        children: (0, r.jsxs)(d.kL8, {
                                            'aria-label': R.intl.string(R.t.dcl9MT),
                                            onClick: ec,
                                            className: _.headerCollapsedClickableContainer,
                                            children: [
                                                (0, r.jsx)('div', {
                                                    className: _.headerCollapsedContentRewardWrapper,
                                                    children: (0, r.jsx)(N.Z, {
                                                        quest: h,
                                                        questContent: f,
                                                        className: _.headerCollapsedRewardTile,
                                                        location: P.dr.QUESTS_CARD
                                                    })
                                                }),
                                                (0, r.jsxs)('div', {
                                                    className: _.headerCollapsedContentCopyWrapper,
                                                    children: [
                                                        (0, r.jsxs)('div', {
                                                            className: _.headerCollapsedContentCopyLogos,
                                                            children: [eu, (0, r.jsx)(E.Z, { color: 'always-white' })]
                                                        }),
                                                        (0, r.jsx)(d.Text, {
                                                            variant: 'text-xs/medium',
                                                            children: er
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                (0, r.jsxs)(a.animated.div, {
                                    ref: (e) => {
                                        z.current = e;
                                    },
                                    className: o()(_.headerExpandedContent, {
                                        [_.outerContainerGiftInventory]: et,
                                        [_.outerContainerEmbed]: en
                                    }),
                                    style: {
                                        opacity: k.to({
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
                                                    children: [eu, en ? null : (0, r.jsx)(E.Z, { color: 'always-white' })]
                                                }),
                                                (0, r.jsxs)('div', {
                                                    className: _.questInfo,
                                                    children: [
                                                        (0, r.jsx)(d.ua7, {
                                                            text: h.config.messages.questName,
                                                            shouldShow: null != G && null != X && G < X,
                                                            children: (e) =>
                                                                (0, r.jsx)(
                                                                    d.X6q,
                                                                    D(
                                                                        I(
                                                                            {
                                                                                ref: K,
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
                                                            children: es ? R.intl.formatToPlainString(R.t.APddvL, { expirationDate: ea }) : u ? R.intl.formatToPlainString(R.t.v7xMw8, { expirationDate: eo }) : R.intl.formatToPlainString(R.t['pX+fmp'], { expirationDate: eo })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        !u &&
                                            et &&
                                            (0, r.jsx)(Z, {
                                                quest: h,
                                                location: f,
                                                questContentPosition: Q
                                            })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsxs)(a.animated.div, {
                            className: _.iconsContainer,
                            style: {
                                top: et
                                    ? k.to({
                                          range: [0, 1],
                                          output: [S.DJ / 2 - S.Z$ / 2, S.jc]
                                      })
                                    : S.jc
                            },
                            children: [
                                (0, r.jsx)(q.r, {
                                    questContent: f,
                                    quest: h,
                                    questContentPosition: Q,
                                    shouldShowDisclosure: !0,
                                    hideLearnMore: et,
                                    showShareLink: !u && en,
                                    children: (e) =>
                                        (0, r.jsx)(a.animated.div, {
                                            style: {
                                                opacity: k,
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
                                U &&
                                    !(0, S.W_)(f) &&
                                    (0, r.jsx)(d.P3F, {
                                        onClick: ec,
                                        className: _.iconWrapper,
                                        'aria-label': B ? R.intl.string(R.t.iTcumZ) : R.intl.string(R.t.dcl9MT),
                                        children: (0, r.jsx)(M, {
                                            style: {
                                                rotate: k.to({
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

(n.d(t, { Z: () => B }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(66546),
    l = n(722770),
    c = n(846519),
    u = n(755721),
    d = n(481060),
    f = n(393238),
    _ = n(393903),
    p = n(448986),
    h = n(572004),
    m = n(617136),
    g = n(509212),
    E = n(113434),
    b = n(497505),
    y = n(566078),
    O = n(685613),
    v = n(611855),
    I = n(644646),
    T = n(968435),
    S = n(670638),
    A = n(87894),
    N = n(46140),
    C = n(231338),
    w = n(388032),
    R = n(491821);
function P(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function D(e) {
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
                P(e, t, n[t]);
            }));
    }
    return e;
}
function L(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : L(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function k(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = j(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function j(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let M = 1000,
    U = (0, s.animated)(d.CJ0),
    G = (e) => {
        var { quest: t, location: n, questContentPosition: a, sourceQuestContent: o } = e,
            s = k(e, ['quest', 'location', 'questContentPosition', 'sourceQuestContent']);
        let [l, f] = i.useState(!1),
            _ = i.useRef(new c.V7()),
            p = (0, m.O5)();
        i.useEffect(() => {
            let e = _.current;
            return function () {
                e.stop();
            };
        }, []);
        let E = () => {
            (p({
                questId: t.id,
                questContent: n,
                questContentCTA: m.jZ.COPY_QUEST_URL,
                questContentPosition: a,
                sourceQuestContent: o
            }),
                (0, h.JG)((0, g.Rs)(t.id), () => {
                    (f(!0), _.current.start(M, () => f(!1)));
                }));
        };
        return (0, r.jsx)(d.ua7, {
            forceOpen: l,
            shouldShow: l,
            color: d.ua7.Colors.GREEN,
            text: w.intl.string(w.t.MSaeTU),
            children: () =>
                (0, r.jsx)(
                    u.zx,
                    x(D({}, s), {
                        className: R.shareButton,
                        color: u.zx.Colors.PRIMARY,
                        size: u.zx.Sizes.SMALL,
                        onClick: E,
                        children: w.intl.string(w.t['5Z6rz8'])
                    })
                )
        });
    },
    B = (e) => {
        var t;
        let { isQuestExpired: n, quest: a, location: c, size: u, expansionSpring: h, isAnimating: g, isExpanded: P, contentPosition: L, toggleExpanded: k, sourceQuestContent: j } = e,
            { ref: M, height: B } = (0, f.ZP)(),
            [Z, F] = i.useState(null),
            [V, H] = i.useState(null),
            Y = (0, p.Z)((e) => {
                let t = e.target;
                (F(t.offsetWidth), H(t.scrollWidth));
            }),
            W = (0, _.y)(Y),
            K = (0, A.uq)(c),
            z = c === b.jn.QUESTS_EMBED,
            q = (0, E.t5)(a, N.dr.QUESTS_CARD, c, j),
            $ = (null == (t = a.userStatus) ? void 0 : t.completedAt) != null,
            X = (0, m.O5)(),
            Q = (0, E.B6)(a.config.expiresAt),
            J = (0, E.B6)(y.r.build(a.config).rewardsExpireAt),
            ee = i.useMemo(() => null != a.config.cosponsorMetadata, [a]),
            et = (e) => {
                (e.stopPropagation(),
                    e.currentTarget.blur(),
                    k(),
                    X({
                        questId: a.id,
                        questContent: c,
                        questContentCTA: P ? m.jZ.COLLAPSE : m.jZ.EXPAND,
                        questContentPosition: L,
                        sourceQuestContent: j
                    }));
            },
            en = () => null != Z && null != V && Z < V,
            er = (0, r.jsx)(O.ZP, {
                className: R.partnerBranding,
                logotypeClassName: ee ? R.partnerBrandingLogotypes : void 0,
                gameTileSize: O.fF.MEDIUM,
                quest: a,
                separatorSpacing: O.US.MEDIUM,
                theme: C.BR.DARK,
                withGameTile: !z || null == a.config.cosponsorMetadata
            });
        return (0, r.jsxs)('div', {
            className: o()(R.outerContainer, {
                [R.outerContainerGiftInventory]: K,
                [R.outerContainerEmbed]: z,
                [R.outerContainerXs]: 'xs' === u
            }),
            'aria-label': w.intl.string(w.t.dcl9MT),
            style: { height: K ? B : void 0 },
            children: [
                (0, r.jsx)(T.Z, {
                    quest: a,
                    dimensions: {
                        width: 660,
                        height: 185
                    },
                    className: R.questSplash
                }),
                (0, r.jsxs)('div', {
                    className: R.header,
                    'aria-expanded': P,
                    children: [
                        (0, r.jsxs)(s.animated.div, {
                            className: o()(R.headerContent, { [R.headerContentEmbed]: z }),
                            style: {
                                y: K
                                    ? h.to({
                                          range: [0, 1],
                                          output: [A.DJ, 0]
                                      })
                                    : void 0
                            },
                            children: [
                                K &&
                                    (0, r.jsx)(s.animated.div, {
                                        className: R.headerCollapsedContent,
                                        style: {
                                            opacity: h.to({
                                                range: [0, 1],
                                                output: [1, 0]
                                            }),
                                            visibility: g || !P ? 'inherit' : 'hidden'
                                        },
                                        'aria-hidden': !g && P,
                                        children: (0, r.jsxs)(d.kL8, {
                                            'aria-label': w.intl.string(w.t.dcl9MT),
                                            onClick: et,
                                            className: R.headerCollapsedClickableContainer,
                                            children: [
                                                (0, r.jsx)('div', {
                                                    className: R.headerCollapsedContentRewardWrapper,
                                                    children: (0, r.jsx)(I.Z, {
                                                        quest: a,
                                                        questContent: c,
                                                        className: R.headerCollapsedRewardTile,
                                                        location: N.dr.QUESTS_CARD,
                                                        sourceQuestContent: j
                                                    })
                                                }),
                                                (0, r.jsxs)('div', {
                                                    className: R.headerCollapsedContentCopyWrapper,
                                                    children: [
                                                        (0, r.jsxs)('div', {
                                                            className: R.headerCollapsedContentCopyLogos,
                                                            children: [er, (0, r.jsx)(v.Z, { color: 'always-white' })]
                                                        }),
                                                        (0, r.jsx)(d.Text, {
                                                            variant: 'text-xs/medium',
                                                            children: q
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                (0, r.jsxs)(s.animated.div, {
                                    ref: (e) => {
                                        M.current = e;
                                    },
                                    className: o()(R.headerExpandedContent, {
                                        [R.outerContainerGiftInventory]: K,
                                        [R.outerContainerEmbed]: z
                                    }),
                                    style: {
                                        opacity: h.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        }),
                                        visibility: g || P ? 'inherit' : 'hidden'
                                    },
                                    'aria-hidden': !g && !P,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: R.headerExpandedWrapper,
                                            children: [
                                                (0, r.jsxs)('div', {
                                                    className: R.iconLogotypeContainer,
                                                    children: [er, z ? null : (0, r.jsx)(v.Z, { color: 'always-white' })]
                                                }),
                                                (0, r.jsxs)('div', {
                                                    className: R.questInfo,
                                                    children: [
                                                        (0, r.jsx)(d.ua7, {
                                                            text: a.config.messages.questName,
                                                            shouldShow: en(),
                                                            children: (e) =>
                                                                (0, r.jsx)(
                                                                    d.X6q,
                                                                    x(
                                                                        D(
                                                                            {
                                                                                ref: W,
                                                                                variant: 'lg' === u ? 'heading-xxl/bold' : 'sm' === u ? 'heading-xl/bold' : 'heading-lg/bold',
                                                                                className: R.heading,
                                                                                color: 'always-white'
                                                                            },
                                                                            e
                                                                        ),
                                                                        { children: w.intl.format(w.t.EAYZAg, { questName: a.config.messages.questName }) }
                                                                    )
                                                                )
                                                        }),
                                                        (0, r.jsx)(d.Text, {
                                                            variant: 'text-xs/normal',
                                                            color: 'always-white',
                                                            children: $ ? w.intl.formatToPlainString(w.t.APddvL, { expirationDate: J }) : n ? w.intl.formatToPlainString(w.t.v7xMw8, { expirationDate: Q }) : w.intl.formatToPlainString(w.t['pX+fmp'], { expirationDate: Q })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        !n &&
                                            K &&
                                            (0, r.jsx)(G, {
                                                quest: a,
                                                location: c,
                                                questContentPosition: L,
                                                sourceQuestContent: j
                                            })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsxs)(s.animated.div, {
                            className: R.iconsContainer,
                            style: {
                                top: K
                                    ? h.to({
                                          range: [0, 1],
                                          output: [A.DJ / 2 - A.Z$ / 2, A.jc]
                                      })
                                    : A.jc
                            },
                            children: [
                                (0, r.jsx)(S.r, {
                                    questContent: c,
                                    quest: a,
                                    questContentPosition: L,
                                    shouldShowDisclosure: !0,
                                    hideLearnMore: K,
                                    showShareLink: !n && z,
                                    sourceQuestContent: j,
                                    children: (e) =>
                                        (0, r.jsx)(s.animated.div, {
                                            style: {
                                                opacity: h,
                                                visibility: g || P ? 'inherit' : 'hidden'
                                            },
                                            'aria-hidden': !g && !P,
                                            children: (0, r.jsx)(
                                                d.P3F,
                                                x(D({}, e), {
                                                    className: R.iconWrapper,
                                                    'aria-label': w.intl.string(w.t.DEoVWV),
                                                    children: (0, r.jsx)(d.xhG, {
                                                        size: 'md',
                                                        color: l.Z.WHITE
                                                    })
                                                })
                                            )
                                        })
                                }),
                                !(0, A.W_)(c) &&
                                    (0, r.jsx)(d.P3F, {
                                        onClick: et,
                                        className: R.iconWrapper,
                                        'aria-label': P ? w.intl.string(w.t.iTcumZ) : w.intl.string(w.t.dcl9MT),
                                        children: (0, r.jsx)(U, {
                                            style: {
                                                rotate: h.to({
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

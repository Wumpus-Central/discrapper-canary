(n.d(t, { Z: () => L }), n(539854));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(755721),
    c = n(481060),
    d = n(274136),
    u = n(2052),
    m = n(906732),
    g = n(678558),
    p = n(852679),
    f = n(357156),
    h = n(713081),
    x = n(151494),
    b = n(639777),
    j = n(626135),
    _ = n(267642),
    v = n(926491),
    O = n(909707),
    C = n(386937),
    y = n(316350),
    N = n(863562),
    I = n(981631),
    E = n(535396),
    S = n(388032),
    T = n(145635);
function P(e) {
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
let w = (e, t) => (e < (0, _.A3)(I.Eu4.NONE) ? I.Eu4.NONE : e < (0, _.A3)(I.Eu4.TIER_1) ? I.Eu4.TIER_1 : e < (0, _.A3)(I.Eu4.TIER_2) ? I.Eu4.TIER_2 : e < (0, _.A3)(I.Eu4.TIER_3) || (null != t && t.features.has(I.oNc.MORE_STICKERS) && e < d.D.MAX_STICKER_SLOTS) ? I.Eu4.TIER_3 : I.Eu4.NONE),
    R = (e) => {
        let { children: t, currentGuildTier: n, guildStickers: i, tier: l } = e,
            s = n < l,
            a = (0, _.ig)(l);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.X6q, {
                    color: 'header-primary',
                    variant: 'heading-md/semibold',
                    children: t
                }),
                !s &&
                    (0, r.jsx)(c.Text, {
                        variant: 'text-xs/normal',
                        children: S.intl.format(S.t.ZLoNtr, {
                            numTotal: a,
                            numAvailable: (0, _.Qi)(i, l)
                        })
                    })
            ]
        });
    },
    Z = (e) => {
        let { guildId: t } = e;
        (0, c.ZDy)(async () => {
            let { default: e } = await Promise.all([n.e('93626'), n.e('64386')]).then(n.bind(n, 136735));
            return (n) => (0, r.jsx)(e, P({ guildId: t }, n));
        });
    },
    D = () =>
        (0, r.jsx)('div', {
            className: T.placeholderCard,
            children: (0, r.jsx)('img', {
                className: T.placeholderImg,
                alt: S.intl.string(S.t.wl4ntL),
                src: n(872732)
            })
        }),
    A = (e) => {
        let { guild: t } = e,
            { location: n } = (0, u.O)(),
            { canCreateExpressions: i } = (0, f.XJ)(t);
        return (0, r.jsx)(c.zxk, {
            variant: 'primary',
            size: 'sm',
            text: S.intl.string(S.t.O1REe3),
            onClick: () => {
                (j.default.track(I.rMx.OPEN_MODAL, {
                    type: I.jXE.CREATE_STICKER_MODAL,
                    location: n
                }),
                    Z({ guildId: t.id }));
            },
            disabled: !i
        });
    },
    L = (e) => {
        let { guild: t } = e,
            { isLoading: l } = (0, O.Z)(t.id),
            d = (0, a.e7)(
                [v.Z],
                () => {
                    var e;
                    return null != (e = v.Z.getStickersByGuildId(t.id)) ? e : [];
                },
                [t]
            ),
            { analyticsLocations: u } = (0, m.ZP)(),
            j = (0, x.Z)(t.id),
            Z = t.features.has(I.oNc.MORE_STICKERS) ? I.Eu4.TIER_3 : t.premiumTier,
            L = t.features.has(I.oNc.MORE_STICKERS) ? I.oCV[I.Eu4.TIER_3] : j,
            k = (0, b.Z)(t.id);
        if (
            (i.useEffect(() => {
                window.dispatchEvent(new Event('resize'));
            }, [d]),
            l)
        )
            return (0, r.jsx)(c.$jN, {});
        let M = (e, n) => {
                let r = null;
                (n === I.Eu4.TIER_1 ? (r = I.Qqv.TIER_1) : n === I.Eu4.TIER_2 ? (r = I.Qqv.TIER_2) : n === I.Eu4.TIER_3 && (r = I.Qqv.TIER_3),
                    (0, p.Z)({
                        analyticsLocations: u,
                        analyticsLocation: {
                            page: I.ZY5.GUILD_SETTINGS,
                            section: I.jXE.GUILD_SETTINGS_STICKERS,
                            object: I.qAy.BOOST_LEVEL_UPSELL_BUTTON,
                            objectType: r
                        },
                        guildId: t.id,
                        totalNumberOfSlotsToAssign: e
                    }));
            },
            G = [
                {
                    tier: I.Eu4.NONE,
                    title: (0, r.jsx)(R, {
                        guildStickers: d,
                        currentGuildTier: Z,
                        tier: I.Eu4.NONE,
                        children: S.intl.string(S.t.tfVXhI)
                    })
                },
                {
                    tier: I.Eu4.TIER_1,
                    title: (0, r.jsx)(R, {
                        guildStickers: d,
                        currentGuildTier: Z,
                        tier: I.Eu4.TIER_1,
                        children: S.intl.string(S.t.nzXtaW)
                    })
                },
                {
                    tier: I.Eu4.TIER_2,
                    title: (0, r.jsx)(R, {
                        guildStickers: d,
                        currentGuildTier: Z,
                        tier: I.Eu4.TIER_2,
                        children: S.intl.string(S.t['h33/ub'])
                    })
                },
                {
                    tier: I.Eu4.TIER_3,
                    title: (0, r.jsx)(R, {
                        guildStickers: d,
                        currentGuildTier: Z,
                        tier: I.Eu4.TIER_3,
                        children: S.intl.string(S.t.BfF6EB)
                    })
                }
            ];
        return (0, r.jsx)(C.Z, {
            tiers: G,
            renderTier: (e) => {
                let i,
                    l,
                    { isAnimatedTo: a, onSetRef: u, tier: m, tiers: p, tierIndex: x } = e,
                    { canCreateExpressions: b, canManageGuildExpression: v } = (0, f.Gw)(t),
                    O = p[x - 1],
                    C = null != O ? (0, _.A3)(O.tier) : 0,
                    R = (0, _.A3)(m.tier, t),
                    G = (0, _.ig)(m.tier),
                    U = d.slice(C, R),
                    B = U.length > 0,
                    F = Z < m.tier,
                    z = w(d.length, t),
                    H = b && !F && z === m.tier && R !== U.length,
                    V = H || U.length > 0,
                    W = R - C,
                    Y = n(872732),
                    K = G - U.length,
                    X = H ? Math.min(5 - ((U.length + 0) % 5), K) : 0,
                    q = [];
                for (let e = 0; e < X; e++) q.push((0, r.jsx)(D, {}, 'placeholder-'.concat(e)));
                let Q = t.premiumTier < m.tier && j >= I.oCV[m.tier],
                    J = S.intl.string(S.t.dtFw5e),
                    $ = () => M(Math.max(1, I.oCV[m.tier] - j), m.tier),
                    ee = !1;
                Q &&
                    (k
                        ? (($ = () => {
                              let e = E.Cp[m.tier];
                              null != e && (0, h.H6)(t.id, e);
                          }),
                          (J = S.intl.string(S.t.g7lkra)),
                          t.premiumTier + 1 !== m.tier && ((ee = !0), (i = S.intl.string(S.t.mTMkY2))))
                        : ((ee = !0), (i = S.intl.string(S.t.hwPEJS))));
                let et = z === x + 1 && z > Z,
                    en = H || et || x > Z;
                return (
                    et
                        ? (l = (0, r.jsx)(g.Z, {
                              guild: t,
                              size: o.zx.Sizes.SMALL,
                              color: o.zx.Colors.GREEN,
                              buttonText: S.intl.string(S.t.Vbkh2t),
                              targetBoostedGuildTier: Z + 1,
                              analyticsLocation: {
                                  page: I.ZY5.GUILD_SETTINGS,
                                  section: I.jXE.GUILD_SETTINGS_STICKERS,
                                  object: I.qAy.BOOST_UPSELL_NEXT_LEVEL_HEADER,
                                  objectType: (0, _.ge)(m.tier)
                              }
                          }))
                        : H && (l = (0, r.jsx)(A, { guild: t })),
                    (0, r.jsxs)(
                        y.Z,
                        {
                            subscriptionCount: L,
                            tier: m,
                            onSetRef: u,
                            isAnimatedTo: a,
                            hasBottomMargin: x !== p.length - 1,
                            withCardBody: !V,
                            headerButton: l,
                            showHeaderLockStatus: en,
                            guildId: t.id,
                            children: [
                                V &&
                                    (0, r.jsxs)('div', {
                                        className: T.grid,
                                        children: [
                                            U.map((e) =>
                                                (0, r.jsx)(
                                                    N.Z,
                                                    {
                                                        isDisabled: F,
                                                        sticker: e,
                                                        canManageSticker: v(e)
                                                    },
                                                    e.id
                                                )
                                            ),
                                            q
                                        ]
                                    }),
                                !F &&
                                    !H &&
                                    0 === U.length &&
                                    (0, r.jsx)('div', {
                                        className: s()(T.emptyTierWrapper, T.unusedTierWrapper),
                                        children: (0, r.jsx)(c.Text, {
                                            variant: 'text-md/normal',
                                            color: 'header-secondary',
                                            children: S.intl.string(S.t.lqwv0N)
                                        })
                                    }),
                                F &&
                                    !B &&
                                    (0, r.jsxs)('div', {
                                        className: T.emptyTierWrapper,
                                        children: [
                                            (0, r.jsx)('img', {
                                                alt: S.intl.string(S.t.BAhsws),
                                                className: T.emptyTierImage,
                                                src: Y
                                            }),
                                            (0, r.jsx)(c.Text, {
                                                className: T.unlockTierCtaHeading,
                                                variant: 'text-md/normal',
                                                color: 'header-secondary',
                                                children:
                                                    m.tier === I.Eu4.TIER_1
                                                        ? S.intl.formatToPlainString(S.t.psMYu7, { numAdditional: W })
                                                        : S.intl.formatToPlainString(S.t.bLykER, {
                                                              numAdditional: W,
                                                              numTotal: R
                                                          })
                                            }),
                                            (0, r.jsx)(c.ua7, {
                                                tooltipClassName: T.tooltip,
                                                text: i,
                                                shouldShow: ee,
                                                children: (e) => {
                                                    var t, n;
                                                    return (0, r.jsx)(
                                                        c.zxk,
                                                        ((t = P(
                                                            {
                                                                variant: 'active',
                                                                text: J
                                                            },
                                                            e
                                                        )),
                                                        (n = n =
                                                            {
                                                                disabled: ee,
                                                                onClick: $
                                                            }),
                                                        Object.getOwnPropertyDescriptors
                                                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                                            : (function (e, t) {
                                                                  var n = Object.keys(e);
                                                                  if (Object.getOwnPropertySymbols) {
                                                                      var r = Object.getOwnPropertySymbols(e);
                                                                      n.push.apply(n, r);
                                                                  }
                                                                  return n;
                                                              })(Object(n)).forEach(function (e) {
                                                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                                              }),
                                                        t)
                                                    );
                                                }
                                            })
                                        ]
                                    })
                            ]
                        },
                        m.tier
                    )
                );
            }
        });
    };

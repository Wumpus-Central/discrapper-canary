n.d(t, { Z: () => k }), n(539854);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(481060),
    c = n(274136),
    d = n(2052),
    u = n(906732),
    m = n(678558),
    g = n(852679),
    p = n(357156),
    h = n(713081),
    f = n(50101),
    x = n(151494),
    b = n(639777),
    j = n(626135),
    N = n(267642),
    _ = n(926491),
    v = n(909707),
    O = n(386937),
    C = n(316350),
    y = n(863562),
    I = n(981631),
    E = n(535396),
    S = n(388032),
    T = n(145635);
function P(e) {
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
let w = (e, t) => (e < (0, N.A3)(I.Eu4.NONE) ? I.Eu4.NONE : e < (0, N.A3)(I.Eu4.TIER_1) ? I.Eu4.TIER_1 : e < (0, N.A3)(I.Eu4.TIER_2) ? I.Eu4.TIER_2 : e < (0, N.A3)(I.Eu4.TIER_3) || (null != t && t.hasFeature(I.oNc.MORE_STICKERS) && e < c.D.MAX_STICKER_SLOTS) ? I.Eu4.TIER_3 : I.Eu4.NONE),
    R = (e) => {
        let { children: t, currentGuildTier: n, guildStickers: i, tier: s } = e,
            l = n < s,
            a = (0, N.ig)(s);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.X6q, {
                    color: 'header-primary',
                    variant: 'heading-md/semibold',
                    children: t
                }),
                !l &&
                    (0, r.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        children: S.NW.format(S.t.ZLoNtr, {
                            numTotal: a,
                            numAvailable: (0, N.Qi)(i, s)
                        })
                    })
            ]
        });
    },
    Z = (e) => {
        let { guildId: t } = e;
        (0, o.ZDy)(async () => {
            let { default: e } = await Promise.all([n.e('93626'), n.e('64386')]).then(n.bind(n, 136735));
            return (n) => (0, r.jsx)(e, P({ guildId: t }, n));
        });
    },
    D = () =>
        (0, r.jsx)('div', {
            className: T.placeholderCard,
            children: (0, r.jsx)('img', {
                className: T.placeholderImg,
                alt: S.NW.string(S.t.wl4ntL),
                src: n(872732)
            })
        }),
    A = (e) => {
        let { guild: t } = e,
            { location: n } = (0, d.O)(),
            { canCreateExpressions: i } = (0, p.XJ)(t);
        return (0, r.jsx)(o.zxk, {
            size: o.zxk.Sizes.SMALL,
            color: o.zxk.Colors.BRAND,
            onClick: () => {
                j.default.track(I.rMx.OPEN_MODAL, {
                    type: I.jXE.CREATE_STICKER_MODAL,
                    location: n
                }),
                    Z({ guildId: t.id });
            },
            disabled: !i,
            children: S.NW.string(S.t.O1REe3)
        });
    },
    k = (e) => {
        let { guild: t } = e,
            { isLoading: s } = (0, v.Z)(t.id),
            c = (0, a.e7)(
                [_.Z],
                () => {
                    var e;
                    return null != (e = _.Z.getStickersByGuildId(t.id)) ? e : [];
                },
                [t]
            ),
            { analyticsLocations: d } = (0, u.ZP)(),
            j = (0, x.Z)(t.id),
            Z = t.hasFeature(I.oNc.MORE_STICKERS) ? I.Eu4.TIER_3 : t.premiumTier,
            k = t.hasFeature(I.oNc.MORE_STICKERS) ? I.oCV[I.Eu4.TIER_3] : j,
            W = (0, f.Ek)(t.id, 'GuildStickersTiers'),
            L = (0, b.Z)(t.id);
        if (
            (i.useEffect(() => {
                window.dispatchEvent(new Event('resize'));
            }, [c]),
            s)
        )
            return (0, r.jsx)(o.$jN, {});
        let M = (e, n) => {
                let r = null;
                n === I.Eu4.TIER_1 ? (r = I.Qqv.TIER_1) : n === I.Eu4.TIER_2 ? (r = I.Qqv.TIER_2) : n === I.Eu4.TIER_3 && (r = I.Qqv.TIER_3),
                    (0, g.Z)({
                        analyticsLocations: d,
                        analyticsLocation: {
                            page: I.ZY5.GUILD_SETTINGS,
                            section: I.jXE.GUILD_SETTINGS_STICKERS,
                            object: I.qAy.BOOST_LEVEL_UPSELL_BUTTON,
                            objectType: r
                        },
                        guildId: t.id,
                        totalNumberOfSlotsToAssign: e
                    });
            },
            G = [
                {
                    tier: I.Eu4.NONE,
                    title: (0, r.jsx)(R, {
                        guildStickers: c,
                        currentGuildTier: Z,
                        tier: I.Eu4.NONE,
                        children: S.NW.string(S.t.tfVXhI)
                    })
                },
                {
                    tier: I.Eu4.TIER_1,
                    title: (0, r.jsx)(R, {
                        guildStickers: c,
                        currentGuildTier: Z,
                        tier: I.Eu4.TIER_1,
                        children: S.NW.string(S.t.nzXtaW)
                    })
                },
                {
                    tier: I.Eu4.TIER_2,
                    title: (0, r.jsx)(R, {
                        guildStickers: c,
                        currentGuildTier: Z,
                        tier: I.Eu4.TIER_2,
                        children: S.NW.string(S.t['h33/ub'])
                    })
                },
                {
                    tier: I.Eu4.TIER_3,
                    title: (0, r.jsx)(R, {
                        guildStickers: c,
                        currentGuildTier: Z,
                        tier: I.Eu4.TIER_3,
                        children: S.NW.string(S.t.BfF6EB)
                    })
                }
            ];
        return (0, r.jsx)(O.Z, {
            tiers: G,
            renderTier: (e) => {
                let i,
                    s,
                    { isAnimatedTo: a, onSetRef: d, tier: u, tiers: g, tierIndex: f } = e,
                    { canCreateExpressions: x, canManageGuildExpression: b } = (0, p.Gw)(t),
                    _ = g[f - 1],
                    v = null != _ ? (0, N.A3)(_.tier) : 0,
                    O = (0, N.A3)(u.tier, t),
                    R = (0, N.ig)(u.tier),
                    G = c.slice(v, O),
                    U = G.length > 0,
                    B = Z < u.tier,
                    F = w(c.length, t),
                    z = x && !B && F === u.tier && O !== G.length,
                    H = z || G.length > 0,
                    V = O - v,
                    Y = n(872732),
                    K = R - G.length,
                    X = z ? Math.min(5 - ((G.length + 0) % 5), K) : 0,
                    q = [];
                for (let e = 0; e < X; e++) q.push((0, r.jsx)(D, {}, 'placeholder-'.concat(e)));
                let J = t.premiumTier < u.tier && j >= I.oCV[u.tier],
                    Q = S.NW.string(S.t.dtFw5e),
                    $ = () => M(Math.max(1, I.oCV[u.tier] - j), u.tier),
                    ee = !1;
                W &&
                    J &&
                    (L
                        ? (($ = () => {
                              let e = E.Cp[u.tier];
                              null != e && (0, h.H6)(t.id, e);
                          }),
                          (Q = S.NW.string(S.t.g7lkra)),
                          t.premiumTier + 1 !== u.tier && ((ee = !0), (i = S.NW.string(S.t.mTMkY2))))
                        : ((ee = !0), (i = S.NW.string(S.t.hwPEJS))));
                let et = F === f + 1 && F > Z,
                    en = z || et || f > Z;
                return (
                    et
                        ? (s = (0, r.jsx)(m.Z, {
                              guild: t,
                              size: o.zxk.Sizes.SMALL,
                              color: o.zxk.Colors.GREEN,
                              buttonText: S.NW.string(S.t.Vbkh2t),
                              targetBoostedGuildTier: Z + 1,
                              analyticsLocation: {
                                  page: I.ZY5.GUILD_SETTINGS,
                                  section: I.jXE.GUILD_SETTINGS_STICKERS,
                                  object: I.qAy.BOOST_UPSELL_NEXT_LEVEL_HEADER,
                                  objectType: (0, N.ge)(u.tier)
                              }
                          }))
                        : z && (s = (0, r.jsx)(A, { guild: t })),
                    (0, r.jsxs)(
                        C.Z,
                        {
                            subscriptionCount: k,
                            tier: u,
                            onSetRef: d,
                            isAnimatedTo: a,
                            hasBottomMargin: f !== g.length - 1,
                            withCardBody: !H,
                            headerButton: s,
                            showHeaderLockStatus: en,
                            guildId: t.id,
                            children: [
                                H &&
                                    (0, r.jsxs)('div', {
                                        className: T.grid,
                                        children: [
                                            G.map((e) =>
                                                (0, r.jsx)(
                                                    y.Z,
                                                    {
                                                        isDisabled: B,
                                                        sticker: e,
                                                        canManageSticker: b(e)
                                                    },
                                                    e.id
                                                )
                                            ),
                                            q
                                        ]
                                    }),
                                !B &&
                                    !z &&
                                    0 === G.length &&
                                    (0, r.jsx)('div', {
                                        className: l()(T.emptyTierWrapper, T.unusedTierWrapper),
                                        children: (0, r.jsx)(o.Text, {
                                            variant: 'text-md/normal',
                                            color: 'header-secondary',
                                            children: S.NW.string(S.t.lqwv0N)
                                        })
                                    }),
                                B &&
                                    !U &&
                                    (0, r.jsxs)('div', {
                                        className: T.emptyTierWrapper,
                                        children: [
                                            (0, r.jsx)('img', {
                                                alt: S.NW.string(S.t.BAhsws),
                                                className: T.emptyTierImage,
                                                src: Y
                                            }),
                                            (0, r.jsx)(o.Text, {
                                                className: T.unlockTierCtaHeading,
                                                variant: 'text-md/normal',
                                                color: 'header-secondary',
                                                children:
                                                    u.tier === I.Eu4.TIER_1
                                                        ? S.NW.formatToPlainString(S.t.psMYu7, { numAdditional: V })
                                                        : S.NW.formatToPlainString(S.t.bLykER, {
                                                              numAdditional: V,
                                                              numTotal: O
                                                          })
                                            }),
                                            (0, r.jsx)(o.ua7, {
                                                tooltipClassName: T.tooltip,
                                                text: i,
                                                shouldShow: ee,
                                                children: (e) => {
                                                    var t, n;
                                                    return (0, r.jsx)(
                                                        o.zxk,
                                                        ((t = P({}, e)),
                                                        (n = n =
                                                            {
                                                                color: o.zxk.Colors.GREEN,
                                                                disabled: ee,
                                                                onClick: $,
                                                                children: Q
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
                        u.tier
                    )
                );
            }
        });
    };

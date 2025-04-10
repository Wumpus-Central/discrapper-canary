n.d(t, { Z: () => w }), n(539854);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(274136),
    d = n(2052),
    u = n(906732),
    m = n(678558),
    g = n(852679),
    p = n(357156),
    f = n(317169),
    h = n(626135),
    b = n(267642),
    x = n(926491),
    j = n(909707),
    N = n(386937),
    v = n(316350),
    _ = n(863562),
    y = n(981631),
    O = n(388032),
    C = n(145635);
let I = (e, t) => (e < (0, b.A3)(y.Eu4.NONE) ? y.Eu4.NONE : e < (0, b.A3)(y.Eu4.TIER_1) ? y.Eu4.TIER_1 : e < (0, b.A3)(y.Eu4.TIER_2) ? y.Eu4.TIER_2 : e < (0, b.A3)(y.Eu4.TIER_3) || (null != t && t.hasFeature(y.oNc.MORE_STICKERS) && e < c.D.MAX_STICKER_SLOTS) ? y.Eu4.TIER_3 : y.Eu4.NONE),
    E = (e) => {
        let { children: t, currentGuildTier: n, guildStickers: i, tier: s } = e,
            a = n < s,
            l = (0, b.ig)(s);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.X6q, {
                    color: 'header-primary',
                    variant: 'heading-md/semibold',
                    children: t
                }),
                !a &&
                    (0, r.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        children: O.NW.format(O.t.ZLoNtr, {
                            numTotal: l,
                            numAvailable: (0, b.Qi)(i, s)
                        })
                    })
            ]
        });
    },
    S = (e) => {
        let { guildId: t } = e;
        (0, o.ZDy)(async () => {
            let { default: e } = await Promise.all([n.e('93626'), n.e('64386')]).then(n.bind(n, 136735));
            return (n) =>
                (0, r.jsx)(
                    e,
                    (function (e) {
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
                    })({ guildId: t }, n)
                );
        });
    },
    T = () =>
        (0, r.jsx)('div', {
            className: C.placeholderCard,
            children: (0, r.jsx)('img', {
                className: C.placeholderImg,
                alt: O.NW.string(O.t.wl4ntL),
                src: n(872732)
            })
        }),
    P = (e) => {
        let { guild: t } = e,
            { location: n } = (0, d.O)(),
            { canCreateExpressions: i } = (0, p.XJ)(t);
        return (0, r.jsx)(o.zxk, {
            size: o.zxk.Sizes.SMALL,
            color: o.zxk.Colors.BRAND,
            onClick: () => {
                h.default.track(y.rMx.OPEN_MODAL, {
                    type: y.jXE.CREATE_STICKER_MODAL,
                    location: n
                }),
                    S({ guildId: t.id });
            },
            disabled: !i,
            children: O.NW.string(O.t.O1REe3)
        });
    },
    w = (e) => {
        let { guild: t } = e,
            { isLoading: s } = (0, j.Z)(t.id),
            c = (0, l.e7)(
                [x.Z],
                () => {
                    var e;
                    return null != (e = x.Z.getStickersByGuildId(t.id)) ? e : [];
                },
                [t]
            ),
            { analyticsLocations: d } = (0, u.ZP)(),
            h = (0, f.Z)(t.id).available,
            S = t.hasFeature(y.oNc.MORE_STICKERS) ? y.Eu4.TIER_3 : t.premiumTier,
            w = t.hasFeature(y.oNc.MORE_STICKERS) ? y.oCV[y.Eu4.TIER_3] : h;
        if (
            (i.useEffect(() => {
                window.dispatchEvent(new Event('resize'));
            }, [c]),
            s)
        )
            return (0, r.jsx)(o.$jN, {});
        let R = (e, n) => {
                let r = null;
                n === y.Eu4.TIER_1 ? (r = y.Qqv.TIER_1) : n === y.Eu4.TIER_2 ? (r = y.Qqv.TIER_2) : n === y.Eu4.TIER_3 && (r = y.Qqv.TIER_3),
                    (0, g.Z)({
                        analyticsLocations: d,
                        analyticsLocation: {
                            page: y.ZY5.GUILD_SETTINGS,
                            section: y.jXE.GUILD_SETTINGS_STICKERS,
                            object: y.qAy.BOOST_LEVEL_UPSELL_BUTTON,
                            objectType: r
                        },
                        guildId: t.id,
                        totalNumberOfSlotsToAssign: e
                    });
            },
            Z = [
                {
                    tier: y.Eu4.NONE,
                    title: (0, r.jsx)(E, {
                        guildStickers: c,
                        currentGuildTier: S,
                        tier: y.Eu4.NONE,
                        children: O.NW.string(O.t.tfVXhI)
                    })
                },
                {
                    tier: y.Eu4.TIER_1,
                    title: (0, r.jsx)(E, {
                        guildStickers: c,
                        currentGuildTier: S,
                        tier: y.Eu4.TIER_1,
                        children: O.NW.string(O.t.nzXtaW)
                    })
                },
                {
                    tier: y.Eu4.TIER_2,
                    title: (0, r.jsx)(E, {
                        guildStickers: c,
                        currentGuildTier: S,
                        tier: y.Eu4.TIER_2,
                        children: O.NW.string(O.t['h33/ub'])
                    })
                },
                {
                    tier: y.Eu4.TIER_3,
                    title: (0, r.jsx)(E, {
                        guildStickers: c,
                        currentGuildTier: S,
                        tier: y.Eu4.TIER_3,
                        children: O.NW.string(O.t.BfF6EB)
                    })
                }
            ];
        return (0, r.jsx)(N.Z, {
            tiers: Z,
            renderTier: (e) => {
                let i,
                    { isAnimatedTo: s, onSetRef: l, tier: d, tiers: u, tierIndex: g } = e,
                    { canCreateExpressions: f, canManageGuildExpression: x } = (0, p.Gw)(t),
                    j = u[g - 1],
                    N = null != j ? (0, b.A3)(j.tier) : 0,
                    E = (0, b.A3)(d.tier, t),
                    Z = (0, b.ig)(d.tier),
                    D = c.slice(N, E),
                    k = D.length > 0,
                    W = S < d.tier,
                    A = I(c.length, t),
                    L = f && !W && A === d.tier && E !== D.length,
                    M = L || D.length > 0,
                    G = E - N,
                    U = n(872732),
                    B = Z - D.length,
                    F = L ? Math.min(5 - ((D.length + 0) % 5), B) : 0,
                    z = [];
                for (let e = 0; e < F; e++) z.push((0, r.jsx)(T, {}, 'placeholder-'.concat(e)));
                let H = A === g + 1 && A > S,
                    V = L || H || g > S;
                return (
                    H
                        ? (i = (0, r.jsx)(m.Z, {
                              guild: t,
                              size: o.zxk.Sizes.SMALL,
                              color: o.zxk.Colors.GREEN,
                              buttonText: O.NW.string(O.t.Vbkh2t),
                              targetBoostedGuildTier: S + 1,
                              analyticsLocation: {
                                  page: y.ZY5.GUILD_SETTINGS,
                                  section: y.jXE.GUILD_SETTINGS_STICKERS,
                                  object: y.qAy.BOOST_UPSELL_NEXT_LEVEL_HEADER,
                                  objectType: (0, b.ge)(d.tier)
                              }
                          }))
                        : L && (i = (0, r.jsx)(P, { guild: t })),
                    (0, r.jsxs)(
                        v.Z,
                        {
                            subscriptionCount: w,
                            tier: d,
                            onSetRef: l,
                            isAnimatedTo: s,
                            hasBottomMargin: g !== u.length - 1,
                            withCardBody: !M,
                            headerButton: i,
                            showHeaderLockStatus: V,
                            guildId: t.id,
                            children: [
                                M &&
                                    (0, r.jsxs)('div', {
                                        className: C.grid,
                                        children: [
                                            D.map((e) =>
                                                (0, r.jsx)(
                                                    _.Z,
                                                    {
                                                        isDisabled: W,
                                                        sticker: e,
                                                        canManageSticker: x(e)
                                                    },
                                                    e.id
                                                )
                                            ),
                                            z
                                        ]
                                    }),
                                !W &&
                                    !L &&
                                    0 === D.length &&
                                    (0, r.jsx)('div', {
                                        className: a()(C.emptyTierWrapper, C.unusedTierWrapper),
                                        children: (0, r.jsx)(o.Text, {
                                            variant: 'text-md/normal',
                                            color: 'header-secondary',
                                            children: O.NW.string(O.t.lqwv0N)
                                        })
                                    }),
                                W &&
                                    !k &&
                                    (0, r.jsxs)('div', {
                                        className: C.emptyTierWrapper,
                                        children: [
                                            (0, r.jsx)('img', {
                                                alt: O.NW.string(O.t.BAhsws),
                                                className: C.emptyTierImage,
                                                src: U
                                            }),
                                            (0, r.jsx)(o.Text, {
                                                className: C.unlockTierCtaHeading,
                                                variant: 'text-md/normal',
                                                color: 'header-secondary',
                                                children:
                                                    d.tier === y.Eu4.TIER_1
                                                        ? O.NW.formatToPlainString(O.t.psMYu7, { numAdditional: G })
                                                        : O.NW.formatToPlainString(O.t.bLykER, {
                                                              numAdditional: G,
                                                              numTotal: E
                                                          })
                                            }),
                                            (0, r.jsx)(o.zxk, {
                                                color: o.zxk.Colors.GREEN,
                                                onClick: () => R(y.oCV[d.tier] - h, d.tier),
                                                children: O.NW.string(O.t.dtFw5e)
                                            })
                                        ]
                                    })
                            ]
                        },
                        d.tier
                    )
                );
            }
        });
    };

n.d(t, { Z: () => w }), n(388685), n(539854);
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
    h = n(317169),
    f = n(626135),
    b = n(267642),
    x = n(268350),
    j = n(926491),
    N = n(386937),
    _ = n(316350),
    v = n(863562),
    O = n(981631),
    y = n(388032),
    C = n(145635);
let I = (e, t) => (e < (0, b.A3)(O.Eu4.NONE) ? O.Eu4.NONE : e < (0, b.A3)(O.Eu4.TIER_1) ? O.Eu4.TIER_1 : e < (0, b.A3)(O.Eu4.TIER_2) ? O.Eu4.TIER_2 : e < (0, b.A3)(O.Eu4.TIER_3) || (null != t && t.hasFeature(O.oNc.MORE_STICKERS) && e < c.D.MAX_STICKER_SLOTS) ? O.Eu4.TIER_3 : O.Eu4.NONE),
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
                        children: y.NW.format(y.t.ZLoNtr, {
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
                alt: y.NW.string(y.t.wl4ntL),
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
                f.default.track(O.rMx.OPEN_MODAL, {
                    type: O.jXE.CREATE_STICKER_MODAL,
                    location: n
                }),
                    S({ guildId: t.id });
            },
            disabled: !i,
            children: y.NW.string(y.t.O1REe3)
        });
    },
    w = (e) => {
        let { guild: t } = e,
            [s, c] = i.useState(!0),
            d = (0, l.e7)(
                [j.Z],
                () => {
                    var e;
                    return null != (e = j.Z.getStickersByGuildId(t.id)) ? e : [];
                },
                [t]
            ),
            { analyticsLocations: f } = (0, u.ZP)(),
            S = (0, h.Z)(t.id).available,
            w = t.hasFeature(O.oNc.MORE_STICKERS) ? O.Eu4.TIER_3 : t.premiumTier,
            R = t.hasFeature(O.oNc.MORE_STICKERS) ? O.oCV[O.Eu4.TIER_3] : S;
        if (
            (i.useEffect(() => {
                let e = !1;
                return (
                    (async () => {
                        c(!0), await (0, x.pk)(t.id), e || c(!1);
                    })(),
                    () => {
                        e = !0;
                    }
                );
            }, [t]),
            i.useEffect(() => {
                window.dispatchEvent(new Event('resize'));
            }, [d]),
            s)
        )
            return (0, r.jsx)(o.$jN, {});
        let D = (e, n) => {
                let r = null;
                n === O.Eu4.TIER_1 ? (r = O.Qqv.TIER_1) : n === O.Eu4.TIER_2 ? (r = O.Qqv.TIER_2) : n === O.Eu4.TIER_3 && (r = O.Qqv.TIER_3),
                    (0, g.Z)({
                        analyticsLocations: f,
                        analyticsLocation: {
                            page: O.ZY5.GUILD_SETTINGS,
                            section: O.jXE.GUILD_SETTINGS_STICKERS,
                            object: O.qAy.BOOST_LEVEL_UPSELL_BUTTON,
                            objectType: r
                        },
                        guildId: t.id,
                        totalNumberOfSlotsToAssign: e
                    });
            },
            Z = [
                {
                    tier: O.Eu4.NONE,
                    title: (0, r.jsx)(E, {
                        guildStickers: d,
                        currentGuildTier: w,
                        tier: O.Eu4.NONE,
                        children: y.NW.string(y.t.tfVXhI)
                    })
                },
                {
                    tier: O.Eu4.TIER_1,
                    title: (0, r.jsx)(E, {
                        guildStickers: d,
                        currentGuildTier: w,
                        tier: O.Eu4.TIER_1,
                        children: y.NW.string(y.t.nzXtaW)
                    })
                },
                {
                    tier: O.Eu4.TIER_2,
                    title: (0, r.jsx)(E, {
                        guildStickers: d,
                        currentGuildTier: w,
                        tier: O.Eu4.TIER_2,
                        children: y.NW.string(y.t['h33/ub'])
                    })
                },
                {
                    tier: O.Eu4.TIER_3,
                    title: (0, r.jsx)(E, {
                        guildStickers: d,
                        currentGuildTier: w,
                        tier: O.Eu4.TIER_3,
                        children: y.NW.string(y.t.BfF6EB)
                    })
                }
            ];
        return (0, r.jsx)(N.Z, {
            tiers: Z,
            renderTier: (e) => {
                let i,
                    { isAnimatedTo: s, onSetRef: l, tier: c, tiers: u, tierIndex: g } = e,
                    { canCreateExpressions: h, canManageGuildExpression: f } = (0, p.Gw)(t),
                    x = u[g - 1],
                    j = null != x ? (0, b.A3)(x.tier) : 0,
                    N = (0, b.A3)(c.tier, t),
                    E = (0, b.ig)(c.tier),
                    Z = d.slice(j, N),
                    A = Z.length > 0,
                    k = w < c.tier,
                    W = I(d.length, t),
                    L = h && !k && W === c.tier && N !== Z.length,
                    M = L || Z.length > 0,
                    G = N - j,
                    U = n(872732),
                    B = E - Z.length,
                    F = L ? Math.min(5 - ((Z.length + 0) % 5), B) : 0,
                    z = [];
                for (let e = 0; e < F; e++) z.push((0, r.jsx)(T, {}, 'placeholder-'.concat(e)));
                let H = W === g + 1 && W > w,
                    V = L || H || g > w;
                return (
                    H
                        ? (i = (0, r.jsx)(m.Z, {
                              guild: t,
                              size: o.zxk.Sizes.SMALL,
                              color: o.zxk.Colors.GREEN,
                              buttonText: y.NW.string(y.t.Vbkh2t),
                              targetBoostedGuildTier: w + 1,
                              analyticsLocation: {
                                  page: O.ZY5.GUILD_SETTINGS,
                                  section: O.jXE.GUILD_SETTINGS_STICKERS,
                                  object: O.qAy.BOOST_UPSELL_NEXT_LEVEL_HEADER,
                                  objectType: (0, b.ge)(c.tier)
                              }
                          }))
                        : L && (i = (0, r.jsx)(P, { guild: t })),
                    (0, r.jsxs)(
                        _.Z,
                        {
                            subscriptionCount: R,
                            tier: c,
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
                                            Z.map((e) =>
                                                (0, r.jsx)(
                                                    v.Z,
                                                    {
                                                        isDisabled: k,
                                                        sticker: e,
                                                        canManageSticker: f(e)
                                                    },
                                                    e.id
                                                )
                                            ),
                                            z
                                        ]
                                    }),
                                !k &&
                                    !L &&
                                    0 === Z.length &&
                                    (0, r.jsx)('div', {
                                        className: a()(C.emptyTierWrapper, C.unusedTierWrapper),
                                        children: (0, r.jsx)(o.Text, {
                                            variant: 'text-md/normal',
                                            color: 'header-secondary',
                                            children: y.NW.string(y.t.lqwv0N)
                                        })
                                    }),
                                k &&
                                    !A &&
                                    (0, r.jsxs)('div', {
                                        className: C.emptyTierWrapper,
                                        children: [
                                            (0, r.jsx)('img', {
                                                alt: y.NW.string(y.t.BAhsws),
                                                className: C.emptyTierImage,
                                                src: U
                                            }),
                                            (0, r.jsx)(o.Text, {
                                                className: C.unlockTierCtaHeading,
                                                variant: 'text-md/normal',
                                                color: 'header-secondary',
                                                children:
                                                    c.tier === O.Eu4.TIER_1
                                                        ? y.NW.formatToPlainString(y.t.psMYu7, { numAdditional: G })
                                                        : y.NW.formatToPlainString(y.t.bLykER, {
                                                              numAdditional: G,
                                                              numTotal: N
                                                          })
                                            }),
                                            (0, r.jsx)(o.zxk, {
                                                color: o.zxk.Colors.GREEN,
                                                onClick: () => D(O.oCV[c.tier] - S, c.tier),
                                                children: y.NW.string(y.t.dtFw5e)
                                            })
                                        ]
                                    })
                            ]
                        },
                        c.tier
                    )
                );
            }
        });
    };

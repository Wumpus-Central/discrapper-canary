n.d(t, { Z: () => w }), n(47120), n(653041);
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
    C = n(981631),
    O = n(388032),
    y = n(145635);
let I = (e, t) => (e < (0, b.A3)(C.Eu4.NONE) ? C.Eu4.NONE : e < (0, b.A3)(C.Eu4.TIER_1) ? C.Eu4.TIER_1 : e < (0, b.A3)(C.Eu4.TIER_2) ? C.Eu4.TIER_2 : e < (0, b.A3)(C.Eu4.TIER_3) || (null != t && t.hasFeature(C.oNc.MORE_STICKERS) && e < c.D.MAX_STICKER_SLOTS) ? C.Eu4.TIER_3 : C.Eu4.NONE),
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
            className: y.placeholderCard,
            children: (0, r.jsx)('img', {
                className: y.placeholderImg,
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
                f.default.track(C.rMx.OPEN_MODAL, {
                    type: C.jXE.CREATE_STICKER_MODAL,
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
            w = t.hasFeature(C.oNc.MORE_STICKERS) ? C.Eu4.TIER_3 : t.premiumTier,
            R = t.hasFeature(C.oNc.MORE_STICKERS) ? C.oCV[C.Eu4.TIER_3] : S;
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
        let Z = (e, n) => {
                let r = null;
                n === C.Eu4.TIER_1 ? (r = C.Qqv.TIER_1) : n === C.Eu4.TIER_2 ? (r = C.Qqv.TIER_2) : n === C.Eu4.TIER_3 && (r = C.Qqv.TIER_3),
                    (0, g.Z)({
                        analyticsLocations: f,
                        analyticsLocation: {
                            page: C.ZY5.GUILD_SETTINGS,
                            section: C.jXE.GUILD_SETTINGS_STICKERS,
                            object: C.qAy.BOOST_LEVEL_UPSELL_BUTTON,
                            objectType: r
                        },
                        guildId: t.id,
                        totalNumberOfSlotsToAssign: e
                    });
            },
            D = [
                {
                    tier: C.Eu4.NONE,
                    title: (0, r.jsx)(E, {
                        guildStickers: d,
                        currentGuildTier: w,
                        tier: C.Eu4.NONE,
                        children: O.NW.string(O.t.tfVXhI)
                    })
                },
                {
                    tier: C.Eu4.TIER_1,
                    title: (0, r.jsx)(E, {
                        guildStickers: d,
                        currentGuildTier: w,
                        tier: C.Eu4.TIER_1,
                        children: O.NW.string(O.t.nzXtaW)
                    })
                },
                {
                    tier: C.Eu4.TIER_2,
                    title: (0, r.jsx)(E, {
                        guildStickers: d,
                        currentGuildTier: w,
                        tier: C.Eu4.TIER_2,
                        children: O.NW.string(O.t['h33/ub'])
                    })
                },
                {
                    tier: C.Eu4.TIER_3,
                    title: (0, r.jsx)(E, {
                        guildStickers: d,
                        currentGuildTier: w,
                        tier: C.Eu4.TIER_3,
                        children: O.NW.string(O.t.BfF6EB)
                    })
                }
            ];
        return (0, r.jsx)(N.Z, {
            tiers: D,
            renderTier: (e) => {
                let i,
                    { isAnimatedTo: s, onSetRef: l, tier: c, tiers: u, tierIndex: g } = e,
                    { canCreateExpressions: h, canManageGuildExpression: f } = (0, p.Gw)(t),
                    x = u[g - 1],
                    j = null != x ? (0, b.A3)(x.tier) : 0,
                    N = (0, b.A3)(c.tier, t),
                    E = (0, b.ig)(c.tier),
                    D = d.slice(j, N),
                    A = D.length > 0,
                    k = w < c.tier,
                    W = I(d.length, t),
                    L = h && !k && W === c.tier && N !== D.length,
                    M = L || D.length > 0,
                    G = N - j,
                    U = n(872732),
                    B = E - D.length,
                    F = L ? Math.min(5 - ((D.length + 0) % 5), B) : 0,
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
                              buttonText: O.NW.string(O.t.Vbkh2t),
                              targetBoostedGuildTier: w + 1,
                              analyticsLocation: {
                                  page: C.ZY5.GUILD_SETTINGS,
                                  section: C.jXE.GUILD_SETTINGS_STICKERS,
                                  object: C.qAy.BOOST_UPSELL_NEXT_LEVEL_HEADER,
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
                                        className: y.grid,
                                        children: [
                                            D.map((e) =>
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
                                    0 === D.length &&
                                    (0, r.jsx)('div', {
                                        className: a()(y.emptyTierWrapper, y.unusedTierWrapper),
                                        children: (0, r.jsx)(o.Text, {
                                            variant: 'text-md/normal',
                                            color: 'header-secondary',
                                            children: O.NW.string(O.t.lqwv0N)
                                        })
                                    }),
                                k &&
                                    !A &&
                                    (0, r.jsxs)('div', {
                                        className: y.emptyTierWrapper,
                                        children: [
                                            (0, r.jsx)('img', {
                                                alt: O.NW.string(O.t.BAhsws),
                                                className: y.emptyTierImage,
                                                src: U
                                            }),
                                            (0, r.jsx)(o.Text, {
                                                className: y.unlockTierCtaHeading,
                                                variant: 'text-md/normal',
                                                color: 'header-secondary',
                                                children:
                                                    c.tier === C.Eu4.TIER_1
                                                        ? O.NW.formatToPlainString(O.t.psMYu7, { numAdditional: G })
                                                        : O.NW.formatToPlainString(O.t.bLykER, {
                                                              numAdditional: G,
                                                              numTotal: N
                                                          })
                                            }),
                                            (0, r.jsx)(o.zxk, {
                                                color: o.zxk.Colors.GREEN,
                                                onClick: () => Z(C.oCV[c.tier] - S, c.tier),
                                                children: O.NW.string(O.t.dtFw5e)
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

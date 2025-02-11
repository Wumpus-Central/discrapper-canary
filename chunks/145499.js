n.d(t, { Z: () => y }), n(47120), n(653041);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(274136),
    d = n(2052),
    u = n(906732),
    m = n(678558),
    h = n(852679),
    g = n(357156),
    x = n(626135),
    p = n(267642),
    _ = n(268350),
    C = n(926491),
    f = n(386937),
    v = n(316350),
    N = n(863562),
    j = n(981631),
    I = n(388032),
    E = n(323516);
let b = (e, t) => (e < (0, p.A3)(j.Eu4.NONE) ? j.Eu4.NONE : e < (0, p.A3)(j.Eu4.TIER_1) ? j.Eu4.TIER_1 : e < (0, p.A3)(j.Eu4.TIER_2) ? j.Eu4.TIER_2 : e < (0, p.A3)(j.Eu4.TIER_3) || (null != t && t.hasFeature(j.oNc.MORE_STICKERS) && e < c.D.MAX_STICKER_SLOTS) ? j.Eu4.TIER_3 : j.Eu4.NONE),
    T = (e) => {
        let { children: t, currentGuildTier: n, guildStickers: r, tier: l } = e,
            s = n < l,
            a = (0, p.ig)(l);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.X6q, {
                    color: 'header-primary',
                    variant: 'heading-md/semibold',
                    children: t
                }),
                !s &&
                    (0, i.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        children: I.intl.format(I.t.ZLoNtr, {
                            numTotal: a,
                            numAvailable: (0, p.Qi)(r, l)
                        })
                    })
            ]
        });
    },
    S = (e) => {
        let { guildId: t } = e;
        (0, o.ZDy)(async () => {
            let { default: e } = await Promise.all([n.e('93626'), n.e('62557')]).then(n.bind(n, 136735));
            return (n) =>
                (0, i.jsx)(e, {
                    guildId: t,
                    ...n
                });
        });
    },
    R = () =>
        (0, i.jsx)('div', {
            className: E.placeholderCard,
            children: (0, i.jsx)('img', {
                className: E.placeholderImg,
                alt: I.intl.string(I.t.wl4ntL),
                src: n(872732)
            })
        }),
    Z = (e) => {
        let { guild: t } = e,
            { location: n } = (0, d.O)(),
            { canCreateExpressions: r } = (0, g.XJ)(t);
        return (0, i.jsx)(o.zxk, {
            size: o.zxk.Sizes.SMALL,
            color: o.zxk.Colors.BRAND,
            onClick: () => {
                x.default.track(j.rMx.OPEN_MODAL, {
                    type: j.jXE.CREATE_STICKER_MODAL,
                    location: n
                }),
                    S({ guildId: t.id });
            },
            disabled: !r,
            children: I.intl.string(I.t.O1REe3)
        });
    },
    y = (e) => {
        let { guild: t } = e,
            [l, c] = r.useState(!0),
            d = (0, a.e7)(
                [C.Z],
                () => {
                    var e;
                    return null !== (e = C.Z.getStickersByGuildId(t.id)) && void 0 !== e ? e : [];
                },
                [t]
            ),
            { analyticsLocations: x } = (0, u.ZP)(),
            S = t.hasFeature(j.oNc.MORE_STICKERS) ? j.Eu4.TIER_3 : t.premiumTier,
            y = t.hasFeature(j.oNc.MORE_STICKERS) ? (0, p.vn)(t.id)[j.Eu4.TIER_3] : t.premiumSubscriberCount;
        if (
            (r.useEffect(() => {
                let e = !1;
                return (
                    (async () => {
                        c(!0), await (0, _.pk)(t.id), e || c(!1);
                    })(),
                    () => {
                        e = !0;
                    }
                );
            }, [t]),
            r.useEffect(() => {
                window.dispatchEvent(new Event('resize'));
            }, [d]),
            l)
        )
            return (0, i.jsx)(o.$jN, {});
        let A = (e, n) => {
                let i = null;
                n === j.Eu4.TIER_1 ? (i = j.Qqv.TIER_1) : n === j.Eu4.TIER_2 ? (i = j.Qqv.TIER_2) : n === j.Eu4.TIER_3 && (i = j.Qqv.TIER_3),
                    (0, h.Z)({
                        analyticsLocations: x,
                        analyticsLocation: {
                            page: j.ZY5.GUILD_SETTINGS,
                            section: j.jXE.GUILD_SETTINGS_STICKERS,
                            object: j.qAy.BOOST_LEVEL_UPSELL_BUTTON,
                            objectType: i
                        },
                        guildId: t.id,
                        totalNumberOfSlotsToAssign: e
                    });
            },
            L = [
                {
                    tier: j.Eu4.NONE,
                    title: (0, i.jsx)(T, {
                        guildStickers: d,
                        currentGuildTier: S,
                        tier: j.Eu4.NONE,
                        children: I.intl.string(I.t.tfVXhI)
                    })
                },
                {
                    tier: j.Eu4.TIER_1,
                    title: (0, i.jsx)(T, {
                        guildStickers: d,
                        currentGuildTier: S,
                        tier: j.Eu4.TIER_1,
                        children: I.intl.string(I.t.nzXtaW)
                    })
                },
                {
                    tier: j.Eu4.TIER_2,
                    title: (0, i.jsx)(T, {
                        guildStickers: d,
                        currentGuildTier: S,
                        tier: j.Eu4.TIER_2,
                        children: I.intl.string(I.t['h33/ub'])
                    })
                },
                {
                    tier: j.Eu4.TIER_3,
                    title: (0, i.jsx)(T, {
                        guildStickers: d,
                        currentGuildTier: S,
                        tier: j.Eu4.TIER_3,
                        children: I.intl.string(I.t.BfF6EB)
                    })
                }
            ];
        return (0, i.jsx)(f.Z, {
            tiers: L,
            renderTier: (e) => {
                let r,
                    { isAnimatedTo: l, onSetRef: a, tier: c, tiers: u, tierIndex: h } = e,
                    { canCreateExpressions: x, canManageGuildExpression: _ } = (0, g.Gw)(t),
                    C = u[h - 1],
                    f = null != C ? (0, p.A3)(C.tier) : 0,
                    T = (0, p.A3)(c.tier, t),
                    L = (0, p.ig)(c.tier),
                    D = d.slice(f, T),
                    k = D.length > 0,
                    O = S < c.tier,
                    P = b(d.length, t),
                    w = x && !O && P === c.tier && T !== D.length,
                    M = w || D.length > 0,
                    U = T - f,
                    G = n(872732),
                    B = L - D.length,
                    F = w ? Math.min(5 - ((D.length + 0) % 5), B) : 0,
                    z = [];
                for (let e = 0; e < F; e++) z.push((0, i.jsx)(R, {}, 'placeholder-'.concat(e)));
                let H = P === h + 1 && P > S,
                    V = w || H || h > S;
                return (
                    H
                        ? (r = (0, i.jsx)(m.Z, {
                              guild: t,
                              size: o.zxk.Sizes.SMALL,
                              color: o.zxk.Colors.GREEN,
                              buttonText: I.intl.string(I.t.Vbkh2t),
                              targetBoostedGuildTier: S + 1,
                              analyticsLocation: {
                                  page: j.ZY5.GUILD_SETTINGS,
                                  section: j.jXE.GUILD_SETTINGS_STICKERS,
                                  object: j.qAy.BOOST_UPSELL_NEXT_LEVEL_HEADER,
                                  objectType: (0, p.ge)(c.tier)
                              }
                          }))
                        : w && (r = (0, i.jsx)(Z, { guild: t })),
                    (0, i.jsxs)(
                        v.Z,
                        {
                            subscriptionCount: y,
                            tier: c,
                            onSetRef: a,
                            isAnimatedTo: l,
                            hasBottomMargin: h !== u.length - 1,
                            withCardBody: !M,
                            headerButton: r,
                            showHeaderLockStatus: V,
                            guildId: t.id,
                            children: [
                                M &&
                                    (0, i.jsxs)('div', {
                                        className: E.grid,
                                        children: [
                                            D.map((e) =>
                                                (0, i.jsx)(
                                                    N.Z,
                                                    {
                                                        isDisabled: O,
                                                        sticker: e,
                                                        canManageSticker: _(e)
                                                    },
                                                    e.id
                                                )
                                            ),
                                            z
                                        ]
                                    }),
                                !O &&
                                    !w &&
                                    0 === D.length &&
                                    (0, i.jsx)('div', {
                                        className: s()(E.emptyTierWrapper, E.unusedTierWrapper),
                                        children: (0, i.jsx)(o.Text, {
                                            variant: 'text-md/normal',
                                            color: 'header-secondary',
                                            children: I.intl.string(I.t.lqwv0N)
                                        })
                                    }),
                                O &&
                                    !k &&
                                    (0, i.jsxs)('div', {
                                        className: E.emptyTierWrapper,
                                        children: [
                                            (0, i.jsx)('img', {
                                                alt: I.intl.string(I.t.BAhsws),
                                                className: E.emptyTierImage,
                                                src: G
                                            }),
                                            (0, i.jsx)(o.Text, {
                                                className: E.unlockTierCtaHeading,
                                                variant: 'text-md/normal',
                                                color: 'header-secondary',
                                                children:
                                                    c.tier === j.Eu4.TIER_1
                                                        ? I.intl.formatToPlainString(I.t.psMYu7, { numAdditional: U })
                                                        : I.intl.formatToPlainString(I.t.bLykER, {
                                                              numAdditional: U,
                                                              numTotal: T
                                                          })
                                            }),
                                            (0, i.jsx)(o.zxk, {
                                                color: o.zxk.Colors.GREEN,
                                                onClick: () => A((0, p.vn)(t.id)[c.tier] - t.premiumSubscriberCount, c.tier),
                                                children: I.intl.string(I.t.dtFw5e)
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

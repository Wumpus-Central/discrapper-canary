n(47120), n(653041);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(274136),
    d = n(2052),
    u = n(906732),
    m = n(678558),
    h = n(852679),
    g = n(357156),
    x = n(626135),
    p = n(267642),
    f = n(268350),
    C = n(926491),
    v = n(386937),
    _ = n(316350),
    I = n(863562),
    N = n(981631),
    T = n(388032),
    j = n(744488);
let b = (e, t) => (e < (0, p.A3)(N.Eu4.NONE) ? N.Eu4.NONE : e < (0, p.A3)(N.Eu4.TIER_1) ? N.Eu4.TIER_1 : e < (0, p.A3)(N.Eu4.TIER_2) ? N.Eu4.TIER_2 : e < (0, p.A3)(N.Eu4.TIER_3) || (null != t && t.hasFeature(N.oNc.MORE_STICKERS) && e < c.D.MAX_STICKER_SLOTS) ? N.Eu4.TIER_3 : N.Eu4.NONE),
    S = (e) => {
        let { children: t, currentGuildTier: n, guildStickers: r, tier: l } = e,
            a = n < l,
            s = (0, p.ig)(l);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.Heading, {
                    color: 'header-primary',
                    variant: 'heading-md/semibold',
                    children: t
                }),
                !a &&
                    (0, i.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        children: T.intl.format(T.t.ZLoNtr, {
                            numTotal: s,
                            numAvailable: (0, p.Qi)(r, l)
                        })
                    })
            ]
        });
    },
    E = (e) => {
        let { guildId: t } = e;
        (0, o.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e('93626'), n.e('64493')]).then(n.bind(n, 136735));
            return (n) =>
                (0, i.jsx)(e, {
                    guildId: t,
                    ...n
                });
        });
    },
    R = () =>
        (0, i.jsx)('div', {
            className: j.placeholderCard,
            children: (0, i.jsx)('img', {
                className: j.placeholderImg,
                alt: T.intl.string(T.t.wl4ntL),
                src: n(872732)
            })
        }),
    y = (e) => {
        let { guild: t } = e,
            { location: n } = (0, d.O)(),
            { canCreateExpressions: r } = (0, g.XJ)(t);
        return (0, i.jsx)(o.Button, {
            size: o.Button.Sizes.SMALL,
            color: o.Button.Colors.BRAND,
            onClick: () => {
                x.default.track(N.rMx.OPEN_MODAL, {
                    type: N.jXE.CREATE_STICKER_MODAL,
                    location: n
                }),
                    E({ guildId: t.id });
            },
            disabled: !r,
            children: T.intl.string(T.t.O1REe3)
        });
    };
t.Z = (e) => {
    let { guild: t } = e,
        [l, c] = r.useState(!0),
        d = (0, s.e7)(
            [C.Z],
            () => {
                var e;
                return null !== (e = C.Z.getStickersByGuildId(t.id)) && void 0 !== e ? e : [];
            },
            [t]
        ),
        { analyticsLocations: x } = (0, u.ZP)(),
        E = t.hasFeature(N.oNc.MORE_STICKERS) ? N.Eu4.TIER_3 : t.premiumTier,
        A = t.hasFeature(N.oNc.MORE_STICKERS) ? (0, p.vn)(t.id)[N.Eu4.TIER_3] : t.premiumSubscriberCount;
    if (
        (r.useEffect(() => {
            let e = !1;
            return (
                (async () => {
                    c(!0), await (0, f.pk)(t.id), !e && c(!1);
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
        return (0, i.jsx)(o.Spinner, {});
    let Z = (e, n) => {
            let i = null;
            n === N.Eu4.TIER_1 ? (i = N.Qqv.TIER_1) : n === N.Eu4.TIER_2 ? (i = N.Qqv.TIER_2) : n === N.Eu4.TIER_3 && (i = N.Qqv.TIER_3),
                (0, h.Z)({
                    analyticsLocations: x,
                    analyticsLocation: {
                        page: N.ZY5.GUILD_SETTINGS,
                        section: N.jXE.GUILD_SETTINGS_STICKERS,
                        object: N.qAy.BOOST_LEVEL_UPSELL_BUTTON,
                        objectType: i
                    },
                    guildId: t.id,
                    totalNumberOfSlotsToAssign: e
                });
        },
        L = [
            {
                tier: N.Eu4.NONE,
                title: (0, i.jsx)(S, {
                    guildStickers: d,
                    currentGuildTier: E,
                    tier: N.Eu4.NONE,
                    children: T.intl.string(T.t.tfVXhI)
                })
            },
            {
                tier: N.Eu4.TIER_1,
                title: (0, i.jsx)(S, {
                    guildStickers: d,
                    currentGuildTier: E,
                    tier: N.Eu4.TIER_1,
                    children: T.intl.string(T.t.nzXtaW)
                })
            },
            {
                tier: N.Eu4.TIER_2,
                title: (0, i.jsx)(S, {
                    guildStickers: d,
                    currentGuildTier: E,
                    tier: N.Eu4.TIER_2,
                    children: T.intl.string(T.t['h33/ub'])
                })
            },
            {
                tier: N.Eu4.TIER_3,
                title: (0, i.jsx)(S, {
                    guildStickers: d,
                    currentGuildTier: E,
                    tier: N.Eu4.TIER_3,
                    children: T.intl.string(T.t.BfF6EB)
                })
            }
        ];
    return (0, i.jsx)(v.Z, {
        tiers: L,
        renderTier: (e) => {
            let r,
                { isAnimatedTo: l, onSetRef: s, tier: c, tiers: u, tierIndex: h } = e,
                { canCreateExpressions: x, canManageGuildExpression: f } = (0, g.Gw)(t),
                C = u[h - 1],
                v = null != C ? (0, p.A3)(C.tier) : 0,
                S = (0, p.A3)(c.tier, t),
                L = (0, p.ig)(c.tier),
                D = d.slice(v, S),
                O = D.length > 0,
                P = E < c.tier,
                k = b(d.length, t),
                M = x && !P && k === c.tier && S !== D.length,
                w = M || D.length > 0,
                B = S - v,
                U = n(872732),
                G = L - D.length,
                F = M ? Math.min(5 - ((D.length + 0) % 5), G) : 0,
                H = [];
            for (let e = 0; e < F; e++) H.push((0, i.jsx)(R, {}, 'placeholder-'.concat(e)));
            let z = k === h + 1 && k > E,
                W = M || z || h > E;
            return (
                z
                    ? (r = (0, i.jsx)(m.Z, {
                          guild: t,
                          size: o.Button.Sizes.SMALL,
                          color: o.Button.Colors.GREEN,
                          buttonText: T.intl.string(T.t.Vbkh2t),
                          targetBoostedGuildTier: E + 1,
                          analyticsLocation: {
                              page: N.ZY5.GUILD_SETTINGS,
                              section: N.jXE.GUILD_SETTINGS_STICKERS,
                              object: N.qAy.BOOST_UPSELL_NEXT_LEVEL_HEADER,
                              objectType: (0, p.ge)(c.tier)
                          }
                      }))
                    : M && (r = (0, i.jsx)(y, { guild: t })),
                (0, i.jsxs)(
                    _.Z,
                    {
                        subscriptionCount: A,
                        tier: c,
                        onSetRef: s,
                        isAnimatedTo: l,
                        hasBottomMargin: h !== u.length - 1,
                        withCardBody: !w,
                        headerButton: r,
                        showHeaderLockStatus: W,
                        guildId: t.id,
                        children: [
                            w &&
                                (0, i.jsxs)('div', {
                                    className: j.grid,
                                    children: [
                                        D.map((e) =>
                                            (0, i.jsx)(
                                                I.Z,
                                                {
                                                    isDisabled: P,
                                                    sticker: e,
                                                    canManageSticker: f(e)
                                                },
                                                e.id
                                            )
                                        ),
                                        H
                                    ]
                                }),
                            !P &&
                                !M &&
                                0 === D.length &&
                                (0, i.jsx)('div', {
                                    className: a()(j.emptyTierWrapper, j.unusedTierWrapper),
                                    children: (0, i.jsx)(o.Text, {
                                        variant: 'text-md/normal',
                                        color: 'header-secondary',
                                        children: T.intl.string(T.t.lqwv0N)
                                    })
                                }),
                            P &&
                                !O &&
                                (0, i.jsxs)('div', {
                                    className: j.emptyTierWrapper,
                                    children: [
                                        (0, i.jsx)('img', {
                                            alt: T.intl.string(T.t.BAhsws),
                                            className: j.emptyTierImage,
                                            src: U
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            className: j.unlockTierCtaHeading,
                                            variant: 'text-md/normal',
                                            color: 'header-secondary',
                                            children:
                                                c.tier === N.Eu4.TIER_1
                                                    ? T.intl.formatToPlainString(T.t.psMYu7, { numAdditional: B })
                                                    : T.intl.formatToPlainString(T.t.bLykER, {
                                                          numAdditional: B,
                                                          numTotal: S
                                                      })
                                        }),
                                        (0, i.jsx)(o.Button, {
                                            color: o.Button.Colors.GREEN,
                                            onClick: () => Z((0, p.vn)(t.id)[c.tier] - t.premiumSubscriberCount, c.tier),
                                            children: T.intl.string(T.t.dtFw5e)
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

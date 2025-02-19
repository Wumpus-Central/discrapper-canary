n.d(t, { Z: () => P }), n(47120), n(653041);
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
    p = n(852679),
    g = n(357156),
    h = n(626135),
    f = n(267642),
    b = n(268350),
    x = n(926491),
    j = n(386937),
    N = n(316350),
    v = n(863562),
    _ = n(981631),
    O = n(388032),
    y = n(867022);
let C = (e, t) => (e < (0, f.A3)(_.Eu4.NONE) ? _.Eu4.NONE : e < (0, f.A3)(_.Eu4.TIER_1) ? _.Eu4.TIER_1 : e < (0, f.A3)(_.Eu4.TIER_2) ? _.Eu4.TIER_2 : e < (0, f.A3)(_.Eu4.TIER_3) || (null != t && t.hasFeature(_.oNc.MORE_STICKERS) && e < c.D.MAX_STICKER_SLOTS) ? _.Eu4.TIER_3 : _.Eu4.NONE),
    I = (e) => {
        let { children: t, currentGuildTier: n, guildStickers: i, tier: s } = e,
            a = n < s,
            l = (0, f.ig)(s);
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
                            numAvailable: (0, f.Qi)(i, s)
                        })
                    })
            ]
        });
    },
    E = (e) => {
        let { guildId: t } = e;
        (0, o.ZDy)(async () => {
            let { default: e } = await Promise.all([n.e('93626'), n.e('13027')]).then(n.bind(n, 136735));
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
    S = () =>
        (0, r.jsx)('div', {
            className: y.placeholderCard,
            children: (0, r.jsx)('img', {
                className: y.placeholderImg,
                alt: O.NW.string(O.t.wl4ntL),
                src: n(872732)
            })
        }),
    T = (e) => {
        let { guild: t } = e,
            { location: n } = (0, d.O)(),
            { canCreateExpressions: i } = (0, g.XJ)(t);
        return (0, r.jsx)(o.zxk, {
            size: o.zxk.Sizes.SMALL,
            color: o.zxk.Colors.BRAND,
            onClick: () => {
                h.default.track(_.rMx.OPEN_MODAL, {
                    type: _.jXE.CREATE_STICKER_MODAL,
                    location: n
                }),
                    E({ guildId: t.id });
            },
            disabled: !i,
            children: O.NW.string(O.t.O1REe3)
        });
    },
    P = (e) => {
        let { guild: t } = e,
            [s, c] = i.useState(!0),
            d = (0, l.e7)(
                [x.Z],
                () => {
                    var e;
                    return null !== (e = x.Z.getStickersByGuildId(t.id)) && void 0 !== e ? e : [];
                },
                [t]
            ),
            { analyticsLocations: h } = (0, u.ZP)(),
            E = t.hasFeature(_.oNc.MORE_STICKERS) ? _.Eu4.TIER_3 : t.premiumTier,
            P = t.hasFeature(_.oNc.MORE_STICKERS) ? (0, f.vn)(t.id)[_.Eu4.TIER_3] : t.premiumSubscriberCount;
        if (
            (i.useEffect(() => {
                let e = !1;
                return (
                    (async () => {
                        c(!0), await (0, b.pk)(t.id), e || c(!1);
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
        let w = (e, n) => {
                let r = null;
                n === _.Eu4.TIER_1 ? (r = _.Qqv.TIER_1) : n === _.Eu4.TIER_2 ? (r = _.Qqv.TIER_2) : n === _.Eu4.TIER_3 && (r = _.Qqv.TIER_3),
                    (0, p.Z)({
                        analyticsLocations: h,
                        analyticsLocation: {
                            page: _.ZY5.GUILD_SETTINGS,
                            section: _.jXE.GUILD_SETTINGS_STICKERS,
                            object: _.qAy.BOOST_LEVEL_UPSELL_BUTTON,
                            objectType: r
                        },
                        guildId: t.id,
                        totalNumberOfSlotsToAssign: e
                    });
            },
            R = [
                {
                    tier: _.Eu4.NONE,
                    title: (0, r.jsx)(I, {
                        guildStickers: d,
                        currentGuildTier: E,
                        tier: _.Eu4.NONE,
                        children: O.NW.string(O.t.tfVXhI)
                    })
                },
                {
                    tier: _.Eu4.TIER_1,
                    title: (0, r.jsx)(I, {
                        guildStickers: d,
                        currentGuildTier: E,
                        tier: _.Eu4.TIER_1,
                        children: O.NW.string(O.t.nzXtaW)
                    })
                },
                {
                    tier: _.Eu4.TIER_2,
                    title: (0, r.jsx)(I, {
                        guildStickers: d,
                        currentGuildTier: E,
                        tier: _.Eu4.TIER_2,
                        children: O.NW.string(O.t['h33/ub'])
                    })
                },
                {
                    tier: _.Eu4.TIER_3,
                    title: (0, r.jsx)(I, {
                        guildStickers: d,
                        currentGuildTier: E,
                        tier: _.Eu4.TIER_3,
                        children: O.NW.string(O.t.BfF6EB)
                    })
                }
            ];
        return (0, r.jsx)(j.Z, {
            tiers: R,
            renderTier: (e) => {
                let i,
                    { isAnimatedTo: s, onSetRef: l, tier: c, tiers: u, tierIndex: p } = e,
                    { canCreateExpressions: h, canManageGuildExpression: b } = (0, g.Gw)(t),
                    x = u[p - 1],
                    j = null != x ? (0, f.A3)(x.tier) : 0,
                    I = (0, f.A3)(c.tier, t),
                    R = (0, f.ig)(c.tier),
                    D = d.slice(j, I),
                    Z = D.length > 0,
                    A = E < c.tier,
                    k = C(d.length, t),
                    W = h && !A && k === c.tier && I !== D.length,
                    L = W || D.length > 0,
                    M = I - j,
                    U = n(872732),
                    G = R - D.length,
                    B = W ? Math.min(5 - ((D.length + 0) % 5), G) : 0,
                    F = [];
                for (let e = 0; e < B; e++) F.push((0, r.jsx)(S, {}, 'placeholder-'.concat(e)));
                let z = k === p + 1 && k > E,
                    H = W || z || p > E;
                return (
                    z
                        ? (i = (0, r.jsx)(m.Z, {
                              guild: t,
                              size: o.zxk.Sizes.SMALL,
                              color: o.zxk.Colors.GREEN,
                              buttonText: O.NW.string(O.t.Vbkh2t),
                              targetBoostedGuildTier: E + 1,
                              analyticsLocation: {
                                  page: _.ZY5.GUILD_SETTINGS,
                                  section: _.jXE.GUILD_SETTINGS_STICKERS,
                                  object: _.qAy.BOOST_UPSELL_NEXT_LEVEL_HEADER,
                                  objectType: (0, f.ge)(c.tier)
                              }
                          }))
                        : W && (i = (0, r.jsx)(T, { guild: t })),
                    (0, r.jsxs)(
                        N.Z,
                        {
                            subscriptionCount: P,
                            tier: c,
                            onSetRef: l,
                            isAnimatedTo: s,
                            hasBottomMargin: p !== u.length - 1,
                            withCardBody: !L,
                            headerButton: i,
                            showHeaderLockStatus: H,
                            guildId: t.id,
                            children: [
                                L &&
                                    (0, r.jsxs)('div', {
                                        className: y.grid,
                                        children: [
                                            D.map((e) =>
                                                (0, r.jsx)(
                                                    v.Z,
                                                    {
                                                        isDisabled: A,
                                                        sticker: e,
                                                        canManageSticker: b(e)
                                                    },
                                                    e.id
                                                )
                                            ),
                                            F
                                        ]
                                    }),
                                !A &&
                                    !W &&
                                    0 === D.length &&
                                    (0, r.jsx)('div', {
                                        className: a()(y.emptyTierWrapper, y.unusedTierWrapper),
                                        children: (0, r.jsx)(o.Text, {
                                            variant: 'text-md/normal',
                                            color: 'header-secondary',
                                            children: O.NW.string(O.t.lqwv0N)
                                        })
                                    }),
                                A &&
                                    !Z &&
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
                                                    c.tier === _.Eu4.TIER_1
                                                        ? O.NW.formatToPlainString(O.t.psMYu7, { numAdditional: M })
                                                        : O.NW.formatToPlainString(O.t.bLykER, {
                                                              numAdditional: M,
                                                              numTotal: I
                                                          })
                                            }),
                                            (0, r.jsx)(o.zxk, {
                                                color: o.zxk.Colors.GREEN,
                                                onClick: () => w((0, f.vn)(t.id)[c.tier] - t.premiumSubscriberCount, c.tier),
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

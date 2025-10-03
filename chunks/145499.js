n.d(t, { Z: () => D }), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(28664),
    c = n(755721),
    d = n(481060),
    u = n(274136),
    m = n(2052),
    g = n(906732),
    p = n(678558),
    f = n(852679),
    h = n(357156),
    x = n(713081),
    b = n(151494),
    j = n(639777),
    _ = n(626135),
    v = n(267642),
    C = n(926491),
    O = n(909707),
    y = n(863562),
    N = n(399829),
    E = n(428862),
    I = n(981631),
    S = n(535396),
    T = n(388032),
    P = n(486217);
let w = (e) => {
        let { children: t, currentGuildTier: n, guildStickers: i, tier: l } = e,
            s = n < l,
            a = (0, v.ig)(l);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(d.X6q, {
                    color: "header-primary",
                    variant: "heading-md/semibold",
                    children: t,
                }),
                !s &&
                    (0, r.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        children: T.intl.format(T.t.ZLoNtr, {
                            numTotal: a,
                            numAvailable: (0, v.Qi)(i, l),
                        }),
                    }),
            ],
        });
    },
    R = () =>
        (0, r.jsx)("div", {
            className: P.placeholderCard,
            children: (0, r.jsx)("img", {
                className: P.placeholderImg,
                alt: T.intl.string(T.t.wl4ntL),
                src: n(872732),
            }),
        }),
    Z = (e) => {
        let { guild: t } = e,
            { location: i } = (0, m.O)(),
            { canCreateExpressions: l } = (0, h.XJ)(t);
        return (0, r.jsx)(d.zxk, {
            variant: "primary",
            size: "sm",
            text: T.intl.string(T.t.O1REe3),
            onClick: () => {
                _.default.track(I.rMx.OPEN_MODAL, {
                    type: I.jXE.CREATE_STICKER_MODAL,
                    location: i,
                }),
                    ((e) => {
                        let { guildId: t } = e;
                        (0, d.ZDy)(async () => {
                            let { default: e } = await Promise.all([n.e("93626"), n.e("34765")]).then(
                                n.bind(n, 136735),
                            );
                            return (n) =>
                                (0, r.jsx)(
                                    e,
                                    (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols &&
                                                (r = r.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    }),
                                                )),
                                                r.forEach(function (t) {
                                                    var r;
                                                    (r = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: r,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0,
                                                              })
                                                            : (e[t] = r);
                                                });
                                        }
                                        return e;
                                    })({ guildId: t }, n),
                                );
                        });
                    })({ guildId: t.id });
            },
            disabled: !l,
        });
    },
    D = (e) => {
        let { guild: t } = e,
            { isLoading: l } = (0, O.Z)(t.id),
            m = (0, a.e7)([C.Z], () => {
                var e;
                return null != (e = C.Z.getStickersByGuildId(t.id)) ? e : [];
            }, [t]),
            { analyticsLocations: _ } = (0, g.ZP)(),
            D = (0, b.Z)(t.id),
            A = t.features.has(I.oNc.MORE_STICKERS) ? I.Eu4.TIER_3 : t.premiumTier,
            L = t.features.has(I.oNc.MORE_STICKERS) ? I.oCV[I.Eu4.TIER_3] : D,
            k = (0, j.Z)(t.id);
        if (
            (i.useEffect(() => {
                window.dispatchEvent(new Event("resize"));
            }, [m]),
            l)
        )
            return (0, r.jsx)(d.$jN, {});
        let G = [
            {
                tier: I.Eu4.NONE,
                title: (0, r.jsx)(w, {
                    guildStickers: m,
                    currentGuildTier: A,
                    tier: I.Eu4.NONE,
                    children: T.intl.string(T.t.tfVXhI),
                }),
            },
            {
                tier: I.Eu4.TIER_1,
                title: (0, r.jsx)(w, {
                    guildStickers: m,
                    currentGuildTier: A,
                    tier: I.Eu4.TIER_1,
                    children: T.intl.string(T.t.nzXtaW),
                }),
            },
            {
                tier: I.Eu4.TIER_2,
                title: (0, r.jsx)(w, {
                    guildStickers: m,
                    currentGuildTier: A,
                    tier: I.Eu4.TIER_2,
                    children: T.intl.string(T.t["h33/ub"]),
                }),
            },
            {
                tier: I.Eu4.TIER_3,
                title: (0, r.jsx)(w, {
                    guildStickers: m,
                    currentGuildTier: A,
                    tier: I.Eu4.TIER_3,
                    children: T.intl.string(T.t.BfF6EB),
                }),
            },
        ];
        return (0, r.jsx)(N.Z, {
            tiers: G,
            renderTier: (e) => {
                var i;
                let l,
                    a,
                    { isAnimatedTo: g, onSetRef: b, tier: j, tiers: C, tierIndex: O } = e,
                    { canCreateExpressions: N, canManageGuildExpression: w } = (0, h.Gw)(t),
                    G = C[O - 1],
                    M = null != G ? (0, v.A3)(G.tier) : 0,
                    U = (0, v.A3)(j.tier, t),
                    B = (0, v.ig)(j.tier),
                    F = m.slice(M, U),
                    H = F.length > 0,
                    z = A < j.tier,
                    W =
                        ((i = m.length),
                        i < (0, v.A3)(I.Eu4.NONE)
                            ? I.Eu4.NONE
                            : i < (0, v.A3)(I.Eu4.TIER_1)
                              ? I.Eu4.TIER_1
                              : i < (0, v.A3)(I.Eu4.TIER_2)
                                ? I.Eu4.TIER_2
                                : i < (0, v.A3)(I.Eu4.TIER_3) ||
                                    (null != t && t.features.has(I.oNc.MORE_STICKERS) && i < u.D.MAX_STICKER_SLOTS)
                                  ? I.Eu4.TIER_3
                                  : I.Eu4.NONE),
                    V = N && !z && W === j.tier && U !== F.length,
                    K = V || F.length > 0,
                    Y = U - M,
                    q = n(872732),
                    X = B - F.length,
                    J = V ? Math.min(5 - ((F.length + 0) % 5), X) : 0,
                    Q = [];
                for (let e = 0; e < J; e++) Q.push((0, r.jsx)(R, {}, "placeholder-".concat(e)));
                let $ = t.premiumTier < j.tier && D >= I.oCV[j.tier],
                    ee = T.intl.string(T.t.dtFw5e),
                    et = () => {
                        var e, n;
                        let r;
                        return (
                            (e = Math.max(1, I.oCV[j.tier] - D)),
                            (n = j.tier),
                            (r = null),
                            void (n === I.Eu4.TIER_1
                                ? (r = I.Qqv.TIER_1)
                                : n === I.Eu4.TIER_2
                                  ? (r = I.Qqv.TIER_2)
                                  : n === I.Eu4.TIER_3 && (r = I.Qqv.TIER_3),
                            (0, f.Z)({
                                analyticsLocations: _,
                                analyticsLocation: {
                                    page: I.ZY5.GUILD_SETTINGS,
                                    section: I.jXE.GUILD_SETTINGS_STICKERS,
                                    object: I.qAy.BOOST_LEVEL_UPSELL_BUTTON,
                                    objectType: r,
                                },
                                guildId: t.id,
                                totalNumberOfSlotsToAssign: e,
                            }))
                        );
                    },
                    en = !1;
                $ &&
                    (k
                        ? ((et = () => {
                              let e = S.Cp[j.tier];
                              null != e && (0, x.H6)(t.id, e);
                          }),
                          (ee = T.intl.string(T.t.g7lkra)),
                          t.premiumTier + 1 !== j.tier && ((en = !0), (l = T.intl.string(T.t.mTMkY2))))
                        : ((en = !0), (l = T.intl.string(T.t.hwPEJS))));
                let er = W === O + 1 && W > A,
                    ei = V || er || O > A;
                return (
                    er
                        ? (a = (0, r.jsx)(p.Z, {
                              guild: t,
                              size: c.zx.Sizes.SMALL,
                              color: c.zx.Colors.GREEN,
                              buttonText: T.intl.string(T.t.Vbkh2t),
                              targetBoostedGuildTier: A + 1,
                              analyticsLocation: {
                                  page: I.ZY5.GUILD_SETTINGS,
                                  section: I.jXE.GUILD_SETTINGS_STICKERS,
                                  object: I.qAy.BOOST_UPSELL_NEXT_LEVEL_HEADER,
                                  objectType: (0, v.ge)(j.tier),
                              },
                          }))
                        : V && (a = (0, r.jsx)(Z, { guild: t })),
                    (0, r.jsxs)(
                        E.Z,
                        {
                            subscriptionCount: L,
                            tier: j,
                            onSetRef: b,
                            isAnimatedTo: g,
                            hasBottomMargin: O !== C.length - 1,
                            withCardBody: !K,
                            headerButton: a,
                            showHeaderLockStatus: ei,
                            guildId: t.id,
                            children: [
                                K &&
                                    (0, r.jsxs)("div", {
                                        className: P.grid,
                                        children: [
                                            F.map((e) =>
                                                (0, r.jsx)(
                                                    y.Z,
                                                    {
                                                        isDisabled: z,
                                                        sticker: e,
                                                        canManageSticker: w(e),
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                            Q,
                                        ],
                                    }),
                                !z &&
                                    !V &&
                                    0 === F.length &&
                                    (0, r.jsx)("div", {
                                        className: s()(P.emptyTierWrapper, P.unusedTierWrapper),
                                        children: (0, r.jsx)(d.Text, {
                                            variant: "text-md/normal",
                                            color: "header-secondary",
                                            children: T.intl.string(T.t.lqwv0N),
                                        }),
                                    }),
                                z &&
                                    !H &&
                                    (0, r.jsxs)("div", {
                                        className: P.emptyTierWrapper,
                                        children: [
                                            (0, r.jsx)("img", {
                                                alt: T.intl.string(T.t.BAhsws),
                                                className: P.emptyTierImage,
                                                src: q,
                                            }),
                                            (0, r.jsx)(d.Text, {
                                                className: P.unlockTierCtaHeading,
                                                variant: "text-md/normal",
                                                color: "header-secondary",
                                                children:
                                                    j.tier === I.Eu4.TIER_1
                                                        ? T.intl.formatToPlainString(T.t.psMYu7, { numAdditional: Y })
                                                        : T.intl.formatToPlainString(T.t.bLykER, {
                                                              numAdditional: Y,
                                                              numTotal: U,
                                                          }),
                                            }),
                                            (0, r.jsx)(o.u, {
                                                text: l,
                                                shouldShow: en,
                                                children: (0, r.jsx)(d.zxk, {
                                                    variant: "active",
                                                    text: ee,
                                                    disabled: en,
                                                    onClick: et,
                                                }),
                                            }),
                                        ],
                                    }),
                            ],
                        },
                        j.tier,
                    )
                );
            },
        });
    };

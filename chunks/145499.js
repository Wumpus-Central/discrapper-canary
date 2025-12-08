n.d(t, { Z: () => Z }), n(539854);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(28664),
    o = n(755721),
    c = n(481060),
    d = n(274136),
    u = n(2052),
    g = n(906732),
    m = n(678558),
    p = n(852679),
    f = n(357156),
    h = n(713081),
    b = n(151494),
    x = n(639777),
    j = n(626135),
    _ = n(267642),
    v = n(155133),
    O = n(863562),
    C = n(399829),
    y = n(428862),
    N = n(981631),
    E = n(535396),
    I = n(388032),
    S = n(486217);
let T = (e) => {
        let { children: t, currentGuildTier: n, guildStickers: i, tier: l } = e,
            a = n < l,
            s = (0, _.ig)(l);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.Heading, {
                    color: "header-primary",
                    variant: "heading-md/semibold",
                    children: t,
                }),
                !a &&
                    (0, r.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        children: I.intl.format(I.t.ZLoNtm, {
                            numTotal: s,
                            numAvailable: (0, _.Qi)(i, l),
                        }),
                    }),
            ],
        });
    },
    P = () =>
        (0, r.jsx)("div", {
            className: S.placeholderCard,
            children: (0, r.jsx)("img", {
                className: S.placeholderImg,
                alt: I.intl.string(I.t.wl4ntJ),
                src: n(872732),
            }),
        }),
    w = (e) => {
        let { guild: t } = e,
            { location: i } = (0, u.O)(),
            { canCreateExpressions: l } = (0, f.XJ)(t);
        return (0, r.jsx)(c.Button, {
            variant: "primary",
            size: "sm",
            text: I.intl.string(I.t.O1REe1),
            onClick: () => {
                j.default.track(N.rMx.OPEN_MODAL, {
                    type: N.jXE.CREATE_STICKER_MODAL,
                    location: i,
                }),
                    ((e) => {
                        let { guildId: t } = e;
                        (0, c.ZDy)(async () => {
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
    Z = (e) => {
        let { guild: t } = e,
            l = (0, v.Z)(t.id),
            { analyticsLocations: u } = (0, g.ZP)(),
            j = (0, b.Z)(t.id),
            Z = t.features.has(N.GuildFeatures.MORE_STICKERS) ? N.Eu4.TIER_3 : t.premiumTier,
            R = t.features.has(N.GuildFeatures.MORE_STICKERS) ? N.oCV[N.Eu4.TIER_3] : j,
            D = (0, x.Z)(t.id);
        if (
            (i.useEffect(() => {
                window.dispatchEvent(new Event("resize"));
            }, [l]),
            "success" !== l.status)
        )
            return (0, r.jsx)(c.$jN, {});
        let A = l.stickers,
            L = [
                {
                    tier: N.Eu4.NONE,
                    title: (0, r.jsx)(T, {
                        guildStickers: A,
                        currentGuildTier: Z,
                        tier: N.Eu4.NONE,
                        children: I.intl.string(I.t.tfVXhP),
                    }),
                },
                {
                    tier: N.Eu4.TIER_1,
                    title: (0, r.jsx)(T, {
                        guildStickers: A,
                        currentGuildTier: Z,
                        tier: N.Eu4.TIER_1,
                        children: I.intl.string(I.t.nzXtaS),
                    }),
                },
                {
                    tier: N.Eu4.TIER_2,
                    title: (0, r.jsx)(T, {
                        guildStickers: A,
                        currentGuildTier: Z,
                        tier: N.Eu4.TIER_2,
                        children: I.intl.string(I.t["h33/uW"]),
                    }),
                },
                {
                    tier: N.Eu4.TIER_3,
                    title: (0, r.jsx)(T, {
                        guildStickers: A,
                        currentGuildTier: Z,
                        tier: N.Eu4.TIER_3,
                        children: I.intl.string(I.t.BfF6ED),
                    }),
                },
            ];
        return (0, r.jsx)(C.Z, {
            tiers: L,
            renderTier: (e) => {
                var i;
                let l,
                    g,
                    { isAnimatedTo: b, onSetRef: x, tier: v, tiers: C, tierIndex: T } = e,
                    { canCreateExpressions: L, canManageGuildExpression: k } = (0, f.Gw)(t),
                    G = C[T - 1],
                    M = null != G ? (0, _.A3)(G.tier) : 0,
                    U = (0, _.A3)(v.tier, t),
                    B = (0, _.ig)(v.tier),
                    F = A.slice(M, U),
                    H = F.length > 0,
                    z = Z < v.tier,
                    W =
                        ((i = A.length),
                        i < (0, _.A3)(N.Eu4.NONE)
                            ? N.Eu4.NONE
                            : i < (0, _.A3)(N.Eu4.TIER_1)
                              ? N.Eu4.TIER_1
                              : i < (0, _.A3)(N.Eu4.TIER_2)
                                ? N.Eu4.TIER_2
                                : i < (0, _.A3)(N.Eu4.TIER_3) ||
                                    (null != t &&
                                        t.features.has(N.GuildFeatures.MORE_STICKERS) &&
                                        i < d.D.MAX_STICKER_SLOTS)
                                  ? N.Eu4.TIER_3
                                  : N.Eu4.NONE),
                    V = L && !z && W === v.tier && U !== F.length,
                    K = V || F.length > 0,
                    Y = U - M,
                    q = n(872732),
                    X = B - F.length,
                    J = V ? Math.min(5 - ((F.length + 0) % 5), X) : 0,
                    Q = [];
                for (let e = 0; e < J; e++) Q.push((0, r.jsx)(P, {}, "placeholder-".concat(e)));
                let $ = t.premiumTier < v.tier && j >= N.oCV[v.tier],
                    ee = I.intl.string(I.t.dtFw5c),
                    et = () => {
                        var e, n;
                        let r;
                        return (
                            (e = Math.max(1, N.oCV[v.tier] - j)),
                            (n = v.tier),
                            (r = null),
                            void (n === N.Eu4.TIER_1
                                ? (r = N.AnalyticsObjectTypes.TIER_1)
                                : n === N.Eu4.TIER_2
                                  ? (r = N.AnalyticsObjectTypes.TIER_2)
                                  : n === N.Eu4.TIER_3 && (r = N.AnalyticsObjectTypes.TIER_3),
                            (0, p.Z)({
                                analyticsLocations: u,
                                analyticsLocation: {
                                    page: N.ZY5.GUILD_SETTINGS,
                                    section: N.jXE.GUILD_SETTINGS_STICKERS,
                                    object: N.qAy.BOOST_LEVEL_UPSELL_BUTTON,
                                    objectType: r,
                                },
                                guildId: t.id,
                                totalNumberOfSlotsToAssign: e,
                            }))
                        );
                    },
                    en = !1;
                $ &&
                    (D
                        ? ((et = () => {
                              let e = E.Cp[v.tier];
                              null != e && (0, h.H6)(t.id, e);
                          }),
                          (ee = I.intl.string(I.t.g7lkrU)),
                          t.premiumTier + 1 !== v.tier && ((en = !0), (l = I.intl.string(I.t.mTMkY2))))
                        : ((en = !0), (l = I.intl.string(I.t.hwPEJR))));
                let er = W === T + 1 && W > Z,
                    ei = V || er || T > Z;
                return (
                    er
                        ? (g = (0, r.jsx)(m.Z, {
                              guild: t,
                              size: o.zx.Sizes.SMALL,
                              color: o.zx.Colors.GREEN,
                              buttonText: I.intl.string(I.t.Vbkh2l),
                              targetBoostedGuildTier: Z + 1,
                              analyticsLocation: {
                                  page: N.ZY5.GUILD_SETTINGS,
                                  section: N.jXE.GUILD_SETTINGS_STICKERS,
                                  object: N.qAy.BOOST_UPSELL_NEXT_LEVEL_HEADER,
                                  objectType: (0, _.ge)(v.tier),
                              },
                          }))
                        : V && (g = (0, r.jsx)(w, { guild: t })),
                    (0, r.jsxs)(
                        y.Z,
                        {
                            subscriptionCount: R,
                            tier: v,
                            onSetRef: x,
                            isAnimatedTo: b,
                            hasBottomMargin: T !== C.length - 1,
                            withCardBody: !K,
                            headerButton: g,
                            showHeaderLockStatus: ei,
                            guildId: t.id,
                            children: [
                                K &&
                                    (0, r.jsxs)("div", {
                                        className: S.grid,
                                        children: [
                                            F.map((e) =>
                                                (0, r.jsx)(
                                                    O.Z,
                                                    {
                                                        isDisabled: z,
                                                        sticker: e,
                                                        canManageSticker: k(e),
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
                                        className: a()(S.emptyTierWrapper, S.unusedTierWrapper),
                                        children: (0, r.jsx)(c.Text, {
                                            variant: "text-md/normal",
                                            color: "text-default",
                                            children: I.intl.string(I.t.lqwv0J),
                                        }),
                                    }),
                                z &&
                                    !H &&
                                    (0, r.jsxs)("div", {
                                        className: S.emptyTierWrapper,
                                        children: [
                                            (0, r.jsx)("img", {
                                                alt: I.intl.string(I.t.BAhswr),
                                                className: S.emptyTierImage,
                                                src: q,
                                            }),
                                            (0, r.jsx)(c.Text, {
                                                className: S.unlockTierCtaHeading,
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                children:
                                                    v.tier === N.Eu4.TIER_1
                                                        ? I.intl.formatToPlainString(I.t.psMYux, { numAdditional: Y })
                                                        : I.intl.formatToPlainString(I.t.bLykEe, {
                                                              numAdditional: Y,
                                                              numTotal: U,
                                                          }),
                                            }),
                                            (0, r.jsx)(s.u, {
                                                text: l,
                                                shouldShow: en,
                                                children: (0, r.jsx)(c.Button, {
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
                        v.tier,
                    )
                );
            },
        });
    };

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
    f = n(678558),
    m = n(852679),
    b = n(357156),
    p = n(713081),
    h = n(151494),
    x = n(639777),
    j = n(626135),
    v = n(267642),
    O = n(155133),
    C = n(863562),
    y = n(399829),
    N = n(428862),
    E = n(981631),
    I = n(535396),
    S = n(388032),
    _ = n(468941);
let T = (e) => {
        let { children: t, currentGuildTier: n, guildStickers: i, tier: l } = e,
            a = n < l,
            s = (0, v.ig)(l);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.Heading, {
                    color: "text-strong",
                    variant: "heading-md/semibold",
                    children: t,
                }),
                !a &&
                    (0, r.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        children: S.intl.format(S.t.ZLoNtm, {
                            numTotal: s,
                            numAvailable: (0, v.Qi)(i, l),
                        }),
                    }),
            ],
        });
    },
    P = () =>
        (0, r.jsx)("div", {
            className: _.placeholderCard,
            children: (0, r.jsx)("img", {
                className: _.placeholderImg,
                alt: S.intl.string(S.t.wl4ntJ),
                src: n(872732),
            }),
        }),
    w = (e) => {
        let { guild: t } = e,
            { location: i } = (0, u.O)(),
            { canCreateExpressions: l } = (0, b.XJ)(t);
        return (0, r.jsx)(c.Button, {
            variant: "primary",
            size: "sm",
            text: S.intl.string(S.t.O1REe1),
            onClick: () => {
                j.default.track(E.rMx.OPEN_MODAL, {
                    type: E.jXE.CREATE_STICKER_MODAL,
                    location: i,
                }),
                    ((e) => {
                        let { guildId: t } = e;
                        (0, c.ZDy)(async () => {
                            let { default: e } = await Promise.all([n.e("93626"), n.e("52719")]).then(
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
            l = (0, O.Z)(t.id),
            { analyticsLocations: u } = (0, g.ZP)(),
            j = (0, h.Z)(t.id),
            Z = t.features.has(E.GuildFeatures.MORE_STICKERS) ? E.Eu4.TIER_3 : t.premiumTier,
            R = t.features.has(E.GuildFeatures.MORE_STICKERS) ? E.oCV[E.Eu4.TIER_3] : j,
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
                    tier: E.Eu4.NONE,
                    title: (0, r.jsx)(T, {
                        guildStickers: A,
                        currentGuildTier: Z,
                        tier: E.Eu4.NONE,
                        children: S.intl.string(S.t.tfVXhP),
                    }),
                },
                {
                    tier: E.Eu4.TIER_1,
                    title: (0, r.jsx)(T, {
                        guildStickers: A,
                        currentGuildTier: Z,
                        tier: E.Eu4.TIER_1,
                        children: S.intl.string(S.t.nzXtaS),
                    }),
                },
                {
                    tier: E.Eu4.TIER_2,
                    title: (0, r.jsx)(T, {
                        guildStickers: A,
                        currentGuildTier: Z,
                        tier: E.Eu4.TIER_2,
                        children: S.intl.string(S.t["h33/uW"]),
                    }),
                },
                {
                    tier: E.Eu4.TIER_3,
                    title: (0, r.jsx)(T, {
                        guildStickers: A,
                        currentGuildTier: Z,
                        tier: E.Eu4.TIER_3,
                        children: S.intl.string(S.t.BfF6ED),
                    }),
                },
            ];
        return (0, r.jsx)(y.Z, {
            tiers: L,
            renderTier: (e) => {
                var i;
                let l,
                    g,
                    { isAnimatedTo: h, onSetRef: x, tier: O, tiers: y, tierIndex: T } = e,
                    { canCreateExpressions: L, canManageGuildExpression: k } = (0, b.Gw)(t),
                    G = y[T - 1],
                    M = null != G ? (0, v.A3)(G.tier) : 0,
                    U = (0, v.A3)(O.tier, t),
                    B = (0, v.ig)(O.tier),
                    F = A.slice(M, U),
                    H = F.length > 0,
                    W = Z < O.tier,
                    z =
                        ((i = A.length),
                        i < (0, v.A3)(E.Eu4.NONE)
                            ? E.Eu4.NONE
                            : i < (0, v.A3)(E.Eu4.TIER_1)
                              ? E.Eu4.TIER_1
                              : i < (0, v.A3)(E.Eu4.TIER_2)
                                ? E.Eu4.TIER_2
                                : i < (0, v.A3)(E.Eu4.TIER_3) ||
                                    (null != t &&
                                        t.features.has(E.GuildFeatures.MORE_STICKERS) &&
                                        i < d.D.MAX_STICKER_SLOTS)
                                  ? E.Eu4.TIER_3
                                  : E.Eu4.NONE),
                    V = L && !W && z === O.tier && U !== F.length,
                    K = V || F.length > 0,
                    Y = U - M,
                    q = n(872732),
                    X = B - F.length,
                    J = V ? Math.min(5 - ((F.length + 0) % 5), X) : 0,
                    Q = [];
                for (let e = 0; e < J; e++) Q.push((0, r.jsx)(P, {}, "placeholder-".concat(e)));
                let $ = t.premiumTier < O.tier && j >= E.oCV[O.tier],
                    ee = S.intl.string(S.t.dtFw5c),
                    et = () => {
                        var e, n;
                        let r;
                        return (
                            (e = Math.max(1, E.oCV[O.tier] - j)),
                            (n = O.tier),
                            (r = null),
                            void (n === E.Eu4.TIER_1
                                ? (r = E.AnalyticsObjectTypes.TIER_1)
                                : n === E.Eu4.TIER_2
                                  ? (r = E.AnalyticsObjectTypes.TIER_2)
                                  : n === E.Eu4.TIER_3 && (r = E.AnalyticsObjectTypes.TIER_3),
                            (0, m.Z)({
                                analyticsLocations: u,
                                analyticsLocation: {
                                    page: E.ZY5.GUILD_SETTINGS,
                                    section: E.jXE.GUILD_SETTINGS_STICKERS,
                                    object: E.qAy.BOOST_LEVEL_UPSELL_BUTTON,
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
                              let e = I.Cp[O.tier];
                              null != e && (0, p.H6)(t.id, e);
                          }),
                          (ee = S.intl.string(S.t.g7lkrU)),
                          t.premiumTier + 1 !== O.tier && ((en = !0), (l = S.intl.string(S.t.mTMkY2))))
                        : ((en = !0), (l = S.intl.string(S.t.hwPEJR))));
                let er = z === T + 1 && z > Z,
                    ei = V || er || T > Z;
                return (
                    er
                        ? (g = (0, r.jsx)(f.Z, {
                              guild: t,
                              size: o.zx.Sizes.SMALL,
                              color: o.zx.Colors.GREEN,
                              buttonText: S.intl.string(S.t.Vbkh2l),
                              targetBoostedGuildTier: Z + 1,
                              analyticsLocation: {
                                  page: E.ZY5.GUILD_SETTINGS,
                                  section: E.jXE.GUILD_SETTINGS_STICKERS,
                                  object: E.qAy.BOOST_UPSELL_NEXT_LEVEL_HEADER,
                                  objectType: (0, v.ge)(O.tier),
                              },
                          }))
                        : V && (g = (0, r.jsx)(w, { guild: t })),
                    (0, r.jsxs)(
                        N.Z,
                        {
                            subscriptionCount: R,
                            tier: O,
                            onSetRef: x,
                            isAnimatedTo: h,
                            hasBottomMargin: T !== y.length - 1,
                            withCardBody: !K,
                            headerButton: g,
                            showHeaderLockStatus: ei,
                            guildId: t.id,
                            children: [
                                K &&
                                    (0, r.jsxs)("div", {
                                        className: _.grid,
                                        children: [
                                            F.map((e) =>
                                                (0, r.jsx)(
                                                    C.Z,
                                                    {
                                                        isDisabled: W,
                                                        sticker: e,
                                                        canManageSticker: k(e),
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                            Q,
                                        ],
                                    }),
                                !W &&
                                    !V &&
                                    0 === F.length &&
                                    (0, r.jsx)("div", {
                                        className: a()(_.emptyTierWrapper, _.unusedTierWrapper),
                                        children: (0, r.jsx)(c.Text, {
                                            variant: "text-md/normal",
                                            color: "text-default",
                                            children: S.intl.string(S.t.lqwv0J),
                                        }),
                                    }),
                                W &&
                                    !H &&
                                    (0, r.jsxs)("div", {
                                        className: _.emptyTierWrapper,
                                        children: [
                                            (0, r.jsx)("img", {
                                                alt: S.intl.string(S.t.BAhswr),
                                                className: _.emptyTierImage,
                                                src: q,
                                            }),
                                            (0, r.jsx)(c.Text, {
                                                className: _.unlockTierCtaHeading,
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                children:
                                                    O.tier === E.Eu4.TIER_1
                                                        ? S.intl.formatToPlainString(S.t.psMYux, { numAdditional: Y })
                                                        : S.intl.formatToPlainString(S.t.bLykEe, {
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
                        O.tier,
                    )
                );
            },
        });
    };

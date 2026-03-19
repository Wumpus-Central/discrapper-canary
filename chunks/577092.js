"use strict";
n.d(t, { A: () => G }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(990078),
    o = n(421380),
    d = n(397927),
    c = n(336934),
    u = n(212245),
    m = n(688810),
    g = n(721923),
    x = n(212637),
    h = n(931991),
    _ = n(942975),
    p = n(434564),
    A = n(363487),
    f = n(954571),
    j = n(473145),
    N = n(740816),
    E = n(285732),
    b = n(395405),
    T = n(175471),
    C = n(652215),
    I = n(568065),
    v = n(985018),
    S = n(500736);
let y = (e) => {
        let { children: t, currentGuildTier: n, guildStickers: s, tier: l } = e,
            r = n < l,
            a = (0, j.Cp)(l);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(d.Heading, { color: "text-strong", variant: "heading-md/semibold", children: t }),
                !r &&
                    (0, i.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        children: v.intl.format(v.t.ZLoNtm, { numTotal: a, numAvailable: (0, j.yA)(s, l) }),
                    }),
            ],
        });
    },
    R = () =>
        (0, i.jsx)("div", {
            className: S.Yf,
            children: (0, i.jsx)("img", { className: S.d4, alt: v.intl.string(v.t.wl4ntJ), src: n(415358) }),
        }),
    O = (e) => {
        let { guild: t } = e,
            { location: s } = (0, u.p)(),
            { canCreateExpressions: l } = (0, h.nr)(t);
        return (0, i.jsx)(d.Button, {
            variant: "primary",
            size: "sm",
            text: v.intl.string(v.t.O1REe1),
            onClick: () => {
                f.default.track(C.HAw.OPEN_MODAL, { type: C.JJy.CREATE_STICKER_MODAL, location: s }),
                    ((e) => {
                        let { guildId: t } = e;
                        (0, d.mMO)(async () => {
                            let { default: e } = await Promise.all([n.e("29143"), n.e("37176")]).then(
                                n.bind(n, 445002),
                            );
                            return (n) => (0, i.jsx)(e, { guildId: t, ...n });
                        });
                    })({ guildId: t.id });
            },
            disabled: !l,
        });
    },
    G = (e) => {
        let { guild: t } = e,
            l = (0, N.A)(t.id),
            { analyticsLocations: u } = (0, m.Ay)(),
            f = (0, p.A)(t.id),
            G = t.features.has(C.GuildFeatures.MORE_STICKERS) ? C.TVA.TIER_3 : t.premiumTier,
            L = t.features.has(C.GuildFeatures.MORE_STICKERS) ? C.M2T[C.TVA.TIER_3] : f,
            D = (0, A.A)(t.id);
        if (
            (s.useEffect(() => {
                window.dispatchEvent(new Event("resize"));
            }, [l]),
            "success" !== l.status)
        )
            return (0, i.jsx)(d.y$y, {});
        let M = l.stickers,
            k = [
                {
                    tier: C.TVA.NONE,
                    title: (0, i.jsx)(y, {
                        guildStickers: M,
                        currentGuildTier: G,
                        tier: C.TVA.NONE,
                        children: v.intl.string(v.t.tfVXhP),
                    }),
                },
                {
                    tier: C.TVA.TIER_1,
                    title: (0, i.jsx)(y, {
                        guildStickers: M,
                        currentGuildTier: G,
                        tier: C.TVA.TIER_1,
                        children: v.intl.string(v.t.nzXtaS),
                    }),
                },
                {
                    tier: C.TVA.TIER_2,
                    title: (0, i.jsx)(y, {
                        guildStickers: M,
                        currentGuildTier: G,
                        tier: C.TVA.TIER_2,
                        children: v.intl.string(v.t["h33/uW"]),
                    }),
                },
                {
                    tier: C.TVA.TIER_3,
                    title: (0, i.jsx)(y, {
                        guildStickers: M,
                        currentGuildTier: G,
                        tier: C.TVA.TIER_3,
                        children: v.intl.string(v.t.BfF6ED),
                    }),
                },
            ];
        return (0, i.jsx)(b.A, {
            tiers: k,
            renderTier: (e) => {
                var s;
                let l,
                    m,
                    { isAnimatedTo: p, onSetRef: A, tier: N, tiers: b, tierIndex: y } = e,
                    { canCreateExpressions: k, canManageGuildExpression: U } = (0, h.ie)(t),
                    P = b[y - 1],
                    w = null != P ? (0, j.aG)(P.tier) : 0,
                    B = (0, j.aG)(N.tier, t),
                    F = (0, j.Cp)(N.tier),
                    H = M.slice(w, B),
                    V = H.length > 0,
                    z = G < N.tier,
                    W =
                        ((s = M.length),
                        s < (0, j.aG)(C.TVA.NONE)
                            ? C.TVA.NONE
                            : s < (0, j.aG)(C.TVA.TIER_1)
                              ? C.TVA.TIER_1
                              : s < (0, j.aG)(C.TVA.TIER_2)
                                ? C.TVA.TIER_2
                                : s < (0, j.aG)(C.TVA.TIER_3) ||
                                    (null != t &&
                                        t.features.has(C.GuildFeatures.MORE_STICKERS) &&
                                        s < c.K.MAX_STICKER_SLOTS)
                                  ? C.TVA.TIER_3
                                  : C.TVA.NONE),
                    Y = k && !z && W === N.tier && B !== H.length,
                    K = Y || H.length > 0,
                    X = B - w,
                    J = n(415358),
                    Z = F - H.length,
                    q = Y ? Math.min(5 - ((H.length + 0) % 5), Z) : 0,
                    Q = [];
                for (let e = 0; e < q; e++) Q.push((0, i.jsx)(R, {}, `placeholder-${e}`));
                let $ = t.premiumTier < N.tier && f >= C.M2T[N.tier],
                    ee = v.intl.string(v.t.dtFw5c),
                    et = () => {
                        var e, n;
                        let i;
                        return (
                            (e = Math.max(1, C.M2T[N.tier] - f)),
                            (n = N.tier),
                            (i = null),
                            void (n === C.TVA.TIER_1
                                ? (i = C.AnalyticsObjectTypes.TIER_1)
                                : n === C.TVA.TIER_2
                                  ? (i = C.AnalyticsObjectTypes.TIER_2)
                                  : n === C.TVA.TIER_3 && (i = C.AnalyticsObjectTypes.TIER_3),
                            (0, x.A)({
                                analyticsLocations: u,
                                analyticsLocation: {
                                    page: C.liQ.GUILD_SETTINGS,
                                    section: C.JJy.GUILD_SETTINGS_STICKERS,
                                    object: C.ZSU.BOOST_LEVEL_UPSELL_BUTTON,
                                    objectType: i,
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
                              let e = I.a8[N.tier];
                              null != e && (0, _.Qh)(t.id, e);
                          }),
                          (ee = v.intl.string(v.t.g7lkrU)),
                          t.premiumTier + 1 !== N.tier && ((en = !0), (l = v.intl.string(v.t.mTMkY2))))
                        : ((en = !0), (l = v.intl.string(v.t.hwPEJR))));
                let ei = W === y + 1 && W > G,
                    es = Y || ei || y > G;
                return (
                    ei
                        ? (m = (0, i.jsx)(g.A, {
                              guild: t,
                              size: o.$n.Sizes.SMALL,
                              color: o.$n.Colors.GREEN,
                              buttonText: v.intl.string(v.t.Vbkh2l),
                              targetBoostedGuildTier: G + 1,
                              analyticsLocation: {
                                  page: C.liQ.GUILD_SETTINGS,
                                  section: C.JJy.GUILD_SETTINGS_STICKERS,
                                  object: C.ZSU.BOOST_UPSELL_NEXT_LEVEL_HEADER,
                                  objectType: (0, j.k1)(N.tier),
                              },
                          }))
                        : Y && (m = (0, i.jsx)(O, { guild: t })),
                    (0, i.jsxs)(
                        T.A,
                        {
                            subscriptionCount: L,
                            tier: N,
                            onSetRef: A,
                            isAnimatedTo: p,
                            hasBottomMargin: y !== b.length - 1,
                            withCardBody: !K,
                            headerButton: m,
                            showHeaderLockStatus: es,
                            guildId: t.id,
                            children: [
                                K &&
                                    (0, i.jsxs)("div", {
                                        className: S.Vg,
                                        children: [
                                            H.map((e) =>
                                                (0, i.jsx)(
                                                    E.A,
                                                    { isDisabled: z, sticker: e, canManageSticker: U(e) },
                                                    e.id,
                                                ),
                                            ),
                                            Q,
                                        ],
                                    }),
                                !z &&
                                    !Y &&
                                    0 === H.length &&
                                    (0, i.jsx)("div", {
                                        className: r()(S.Rm, S.MC),
                                        children: (0, i.jsx)(d.Text, {
                                            variant: "text-md/normal",
                                            color: "text-default",
                                            children: v.intl.string(v.t.lqwv0J),
                                        }),
                                    }),
                                z &&
                                    !V &&
                                    (0, i.jsxs)("div", {
                                        className: S.Rm,
                                        children: [
                                            (0, i.jsx)("img", {
                                                alt: v.intl.string(v.t.BAhswr),
                                                className: S.Tg,
                                                src: J,
                                            }),
                                            (0, i.jsx)(d.Text, {
                                                className: S.nN,
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                children:
                                                    N.tier === C.TVA.TIER_1
                                                        ? v.intl.formatToPlainString(v.t.psMYux, { numAdditional: X })
                                                        : v.intl.formatToPlainString(v.t.bLykEe, {
                                                              numAdditional: X,
                                                              numTotal: B,
                                                          }),
                                            }),
                                            (0, i.jsx)(a.m, {
                                                text: l,
                                                shouldShow: en,
                                                children: (0, i.jsx)(d.Button, {
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
                        N.tier,
                    )
                );
            },
        });
    };

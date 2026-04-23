n.d(t, { A: () => k }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(990078),
    o = n(862482),
    d = n(534514),
    c = n(834730),
    u = n(192308),
    m = n(821609),
    g = n(289873),
    h = n(336934),
    x = n(212245),
    _ = n(688810),
    p = n(721923),
    A = n(212637),
    E = n(931991),
    f = n(942975),
    j = n(434564),
    N = n(363487),
    I = n(954571),
    C = n(473145),
    b = n(740816),
    v = n(285732),
    S = n(395405),
    T = n(175471),
    y = n(652215),
    R = n(568065),
    L = n(985018),
    D = n(674112);
let O = (e) => {
        let { children: t, currentGuildTier: n, guildStickers: l, tier: s } = e,
            r = n < s,
            a = (0, C.Cp)(s);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(d.D, { color: "text-strong", variant: "heading-md/semibold", children: t }),
                !r &&
                    (0, i.jsx)(c.E, {
                        variant: "text-xs/normal",
                        children: L.intl.format(L.t.ZLoNtm, { numTotal: a, numAvailable: (0, C.yA)(l, s) }),
                    }),
            ],
        });
    },
    G = () =>
        (0, i.jsx)("div", {
            className: D.Yf,
            children: (0, i.jsx)("img", { className: D.d4, alt: L.intl.string(L.t.wl4ntJ), src: n(415358) }),
        }),
    M = (e) => {
        let { guild: t } = e,
            { location: l } = (0, x.p)(),
            { canCreateExpressions: s } = (0, E.nr)(t);
        return (0, i.jsx)(m.$, {
            variant: "primary",
            size: "sm",
            text: L.intl.string(L.t.O1REe1),
            onClick: () => {
                I.default.track(y.HAw.OPEN_MODAL, { type: y.JJy.CREATE_STICKER_MODAL, location: l }),
                    ((e) => {
                        let { guildId: t } = e;
                        (0, u.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e("29143"), n.e("40361")]).then(
                                n.bind(n, 445002),
                            );
                            return (n) => (0, i.jsx)(e, { guildId: t, ...n });
                        });
                    })({ guildId: t.id });
            },
            disabled: !s,
        });
    },
    k = (e) => {
        let { guild: t } = e,
            s = (0, b.A)(t.id),
            { analyticsLocations: d } = (0, _.Ay)(),
            u = (0, j.A)(t.id),
            x = t.features.has(y.GuildFeatures.MORE_STICKERS) ? y.TVA.TIER_3 : t.premiumTier,
            I = t.features.has(y.GuildFeatures.MORE_STICKERS) ? y.M2T[y.TVA.TIER_3] : u,
            k = (0, N.A)(t.id);
        if (
            (l.useEffect(() => {
                window.dispatchEvent(new Event("resize"));
            }, [s]),
            "success" !== s.status)
        )
            return (0, i.jsx)(g.y, {});
        let U = s.stickers,
            w = [
                {
                    tier: y.TVA.NONE,
                    title: (0, i.jsx)(O, {
                        guildStickers: U,
                        currentGuildTier: x,
                        tier: y.TVA.NONE,
                        children: L.intl.string(L.t.tfVXhP),
                    }),
                },
                {
                    tier: y.TVA.TIER_1,
                    title: (0, i.jsx)(O, {
                        guildStickers: U,
                        currentGuildTier: x,
                        tier: y.TVA.TIER_1,
                        children: L.intl.string(L.t.nzXtaS),
                    }),
                },
                {
                    tier: y.TVA.TIER_2,
                    title: (0, i.jsx)(O, {
                        guildStickers: U,
                        currentGuildTier: x,
                        tier: y.TVA.TIER_2,
                        children: L.intl.string(L.t["h33/uW"]),
                    }),
                },
                {
                    tier: y.TVA.TIER_3,
                    title: (0, i.jsx)(O, {
                        guildStickers: U,
                        currentGuildTier: x,
                        tier: y.TVA.TIER_3,
                        children: L.intl.string(L.t.BfF6ED),
                    }),
                },
            ];
        return (0, i.jsx)(S.A, {
            tiers: w,
            renderTier: (e) => {
                var l;
                let s,
                    g,
                    { isAnimatedTo: _, onSetRef: j, tier: N, tiers: b, tierIndex: S } = e,
                    { canCreateExpressions: O, canManageGuildExpression: w } = (0, E.ie)(t),
                    P = b[S - 1],
                    B = null != P ? (0, C.aG)(P.tier) : 0,
                    F = (0, C.aG)(N.tier, t),
                    H = (0, C.Cp)(N.tier),
                    V = U.slice(B, F),
                    z = V.length > 0,
                    W = x < N.tier,
                    Y =
                        ((l = U.length),
                        l < (0, C.aG)(y.TVA.NONE)
                            ? y.TVA.NONE
                            : l < (0, C.aG)(y.TVA.TIER_1)
                              ? y.TVA.TIER_1
                              : l < (0, C.aG)(y.TVA.TIER_2)
                                ? y.TVA.TIER_2
                                : l < (0, C.aG)(y.TVA.TIER_3) ||
                                    (null != t &&
                                        t.features.has(y.GuildFeatures.MORE_STICKERS) &&
                                        l < h.K.MAX_STICKER_SLOTS)
                                  ? y.TVA.TIER_3
                                  : y.TVA.NONE),
                    K = O && !W && Y === N.tier && F !== V.length,
                    X = K || V.length > 0,
                    Z = F - B,
                    J = n(415358),
                    q = H - V.length,
                    Q = K ? Math.min(5 - ((V.length + 0) % 5), q) : 0,
                    $ = [];
                for (let e = 0; e < Q; e++) $.push((0, i.jsx)(G, {}, `placeholder-${e}`));
                let ee = t.premiumTier < N.tier && u >= y.M2T[N.tier],
                    et = L.intl.string(L.t.dtFw5c),
                    en = () => {
                        var e, n;
                        let i;
                        return (
                            (e = Math.max(1, y.M2T[N.tier] - u)),
                            (n = N.tier),
                            (i = null),
                            void (n === y.TVA.TIER_1
                                ? (i = y.AnalyticsObjectTypes.TIER_1)
                                : n === y.TVA.TIER_2
                                  ? (i = y.AnalyticsObjectTypes.TIER_2)
                                  : n === y.TVA.TIER_3 && (i = y.AnalyticsObjectTypes.TIER_3),
                            (0, A.A)({
                                analyticsLocations: d,
                                analyticsLocation: {
                                    page: y.liQ.GUILD_SETTINGS,
                                    section: y.JJy.GUILD_SETTINGS_STICKERS,
                                    object: y.ZSU.BOOST_LEVEL_UPSELL_BUTTON,
                                    objectType: i,
                                },
                                guildId: t.id,
                                totalNumberOfSlotsToAssign: e,
                            }))
                        );
                    },
                    ei = !1;
                ee &&
                    (k
                        ? ((en = () => {
                              let e = R.a8[N.tier];
                              null != e && (0, f.Qh)(t.id, e);
                          }),
                          (et = L.intl.string(L.t.g7lkrU)),
                          t.premiumTier + 1 !== N.tier && ((ei = !0), (s = L.intl.string(L.t.mTMkY2))))
                        : ((ei = !0), (s = L.intl.string(L.t.hwPEJR))));
                let el = Y === S + 1 && Y > x,
                    es = K || el || S > x;
                return (
                    el
                        ? (g = (0, i.jsx)(p.A, {
                              guild: t,
                              size: o.$n.Sizes.SMALL,
                              color: o.$n.Colors.GREEN,
                              buttonText: L.intl.string(L.t.Vbkh2l),
                              targetBoostedGuildTier: x + 1,
                              analyticsLocation: {
                                  page: y.liQ.GUILD_SETTINGS,
                                  section: y.JJy.GUILD_SETTINGS_STICKERS,
                                  object: y.ZSU.BOOST_UPSELL_NEXT_LEVEL_HEADER,
                                  objectType: (0, C.k1)(N.tier),
                              },
                          }))
                        : K && (g = (0, i.jsx)(M, { guild: t })),
                    (0, i.jsxs)(
                        T.A,
                        {
                            subscriptionCount: I,
                            tier: N,
                            onSetRef: j,
                            isAnimatedTo: _,
                            hasBottomMargin: S !== b.length - 1,
                            withCardBody: !X,
                            headerButton: g,
                            showHeaderLockStatus: es,
                            guildId: t.id,
                            children: [
                                X &&
                                    (0, i.jsxs)("div", {
                                        className: D.Vg,
                                        children: [
                                            V.map((e) =>
                                                (0, i.jsx)(
                                                    v.A,
                                                    { isDisabled: W, sticker: e, canManageSticker: w(e) },
                                                    e.id,
                                                ),
                                            ),
                                            $,
                                        ],
                                    }),
                                !W &&
                                    !K &&
                                    0 === V.length &&
                                    (0, i.jsx)("div", {
                                        className: r()(D.Rm, D.MC),
                                        children: (0, i.jsx)(c.E, {
                                            variant: "text-md/normal",
                                            color: "text-default",
                                            children: L.intl.string(L.t.lqwv0J),
                                        }),
                                    }),
                                W &&
                                    !z &&
                                    (0, i.jsxs)("div", {
                                        className: D.Rm,
                                        children: [
                                            (0, i.jsx)("img", {
                                                alt: L.intl.string(L.t.BAhswr),
                                                className: D.Tg,
                                                src: J,
                                            }),
                                            (0, i.jsx)(c.E, {
                                                className: D.nN,
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                children:
                                                    N.tier === y.TVA.TIER_1
                                                        ? L.intl.formatToPlainString(L.t.psMYux, { numAdditional: Z })
                                                        : L.intl.formatToPlainString(L.t.bLykEe, {
                                                              numAdditional: Z,
                                                              numTotal: F,
                                                          }),
                                            }),
                                            (0, i.jsx)(a.m, {
                                                text: s,
                                                shouldShow: ei,
                                                children: (0, i.jsx)(m.$, {
                                                    variant: "active",
                                                    text: et,
                                                    disabled: ei,
                                                    onClick: en,
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

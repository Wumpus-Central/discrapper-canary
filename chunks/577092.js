n.d(t, {
    A: () => w,
}),
    n(321073);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(990078),
    c = n(421380),
    o = n(397927),
    d = n(336934),
    u = n(212245),
    f = n(688810),
    g = n(721923),
    b = n(212637),
    m = n(931991),
    p = n(942975),
    x = n(434564),
    h = n(363487),
    j = n(954571),
    O = n(473145),
    y = n(740816),
    v = n(285732),
    A = n(395405),
    E = n(175471),
    N = n(652215),
    _ = n(568065),
    S = n(985018),
    T = n(65146);
let I = (e) => {
        let { children: t, currentGuildTier: n, guildStickers: i, tier: l } = e,
            s = n < l,
            a = (0, O.Cp)(l);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.Heading, {
                    color: "text-strong",
                    variant: "heading-md/semibold",
                    children: t,
                }),
                !s &&
                    (0, r.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        children: S.intl.format(S.t.ZLoNtm, {
                            numTotal: a,
                            numAvailable: (0, O.yA)(i, l),
                        }),
                    }),
            ],
        });
    },
    C = () =>
        (0, r.jsx)("div", {
            className: T.Yf,
            children: (0, r.jsx)("img", {
                className: T.d4,
                alt: S.intl.string(S.t.wl4ntJ),
                src: n(415358),
            }),
        }),
    P = (e) => {
        let { guild: t } = e,
            { location: i } = (0, u.p)(),
            { canCreateExpressions: l } = (0, m.nr)(t);
        return (0, r.jsx)(o.Button, {
            variant: "primary",
            size: "sm",
            text: S.intl.string(S.t.O1REe1),
            onClick: () => {
                j.default.track(N.HAw.OPEN_MODAL, {
                    type: N.JJy.CREATE_STICKER_MODAL,
                    location: i,
                }),
                    ((e) => {
                        let { guildId: t } = e;
                        (0, o.mMO)(async () => {
                            let { default: e } = await Promise.all([n.e("29143"), n.e("27382")]).then(
                                n.bind(n, 445002),
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
                                    })(
                                        {
                                            guildId: t,
                                        },
                                        n,
                                    ),
                                );
                        });
                    })({
                        guildId: t.id,
                    });
            },
            disabled: !l,
        });
    },
    w = (e) => {
        let { guild: t } = e,
            l = (0, y.A)(t.id),
            { analyticsLocations: u } = (0, f.Ay)(),
            j = (0, x.A)(t.id),
            w = t.features.has(N.GuildFeatures.MORE_STICKERS) ? N.TVA.TIER_3 : t.premiumTier,
            R = t.features.has(N.GuildFeatures.MORE_STICKERS) ? N.M2T[N.TVA.TIER_3] : j,
            D = (0, h.A)(t.id);
        if (
            (i.useEffect(() => {
                window.dispatchEvent(new Event("resize"));
            }, [l]),
            "success" !== l.status)
        )
            return (0, r.jsx)(o.y$y, {});
        let G = l.stickers,
            L = [
                {
                    tier: N.TVA.NONE,
                    title: (0, r.jsx)(I, {
                        guildStickers: G,
                        currentGuildTier: w,
                        tier: N.TVA.NONE,
                        children: S.intl.string(S.t.tfVXhP),
                    }),
                },
                {
                    tier: N.TVA.TIER_1,
                    title: (0, r.jsx)(I, {
                        guildStickers: G,
                        currentGuildTier: w,
                        tier: N.TVA.TIER_1,
                        children: S.intl.string(S.t.nzXtaS),
                    }),
                },
                {
                    tier: N.TVA.TIER_2,
                    title: (0, r.jsx)(I, {
                        guildStickers: G,
                        currentGuildTier: w,
                        tier: N.TVA.TIER_2,
                        children: S.intl.string(S.t["h33/uW"]),
                    }),
                },
                {
                    tier: N.TVA.TIER_3,
                    title: (0, r.jsx)(I, {
                        guildStickers: G,
                        currentGuildTier: w,
                        tier: N.TVA.TIER_3,
                        children: S.intl.string(S.t.BfF6ED),
                    }),
                },
            ];
        return (0, r.jsx)(A.A, {
            tiers: L,
            renderTier: (e) => {
                var i;
                let l,
                    f,
                    { isAnimatedTo: x, onSetRef: h, tier: y, tiers: A, tierIndex: I } = e,
                    { canCreateExpressions: L, canManageGuildExpression: k } = (0, m.ie)(t),
                    M = A[I - 1],
                    U = null != M ? (0, O.aG)(M.tier) : 0,
                    F = (0, O.aG)(y.tier, t),
                    B = (0, O.Cp)(y.tier),
                    H = G.slice(U, F),
                    V = H.length > 0,
                    K = w < y.tier,
                    z =
                        ((i = G.length),
                        i < (0, O.aG)(N.TVA.NONE)
                            ? N.TVA.NONE
                            : i < (0, O.aG)(N.TVA.TIER_1)
                              ? N.TVA.TIER_1
                              : i < (0, O.aG)(N.TVA.TIER_2)
                                ? N.TVA.TIER_2
                                : i < (0, O.aG)(N.TVA.TIER_3) ||
                                    (null != t &&
                                        t.features.has(N.GuildFeatures.MORE_STICKERS) &&
                                        i < d.K.MAX_STICKER_SLOTS)
                                  ? N.TVA.TIER_3
                                  : N.TVA.NONE),
                    Y = L && !K && z === y.tier && F !== H.length,
                    W = Y || H.length > 0,
                    X = F - U,
                    J = n(415358),
                    Z = B - H.length,
                    Q = Y ? Math.min(5 - ((H.length + 0) % 5), Z) : 0,
                    q = [];
                for (let e = 0; e < Q; e++) q.push((0, r.jsx)(C, {}, "placeholder-".concat(e)));
                let $ = t.premiumTier < y.tier && j >= N.M2T[y.tier],
                    ee = S.intl.string(S.t.dtFw5c),
                    et = () => {
                        var e, n;
                        let r;
                        return (
                            (e = Math.max(1, N.M2T[y.tier] - j)),
                            (n = y.tier),
                            (r = null),
                            void (n === N.TVA.TIER_1
                                ? (r = N.AnalyticsObjectTypes.TIER_1)
                                : n === N.TVA.TIER_2
                                  ? (r = N.AnalyticsObjectTypes.TIER_2)
                                  : n === N.TVA.TIER_3 && (r = N.AnalyticsObjectTypes.TIER_3),
                            (0, b.A)({
                                analyticsLocations: u,
                                analyticsLocation: {
                                    page: N.liQ.GUILD_SETTINGS,
                                    section: N.JJy.GUILD_SETTINGS_STICKERS,
                                    object: N.ZSU.BOOST_LEVEL_UPSELL_BUTTON,
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
                              let e = _.a8[y.tier];
                              null != e && (0, p.Qh)(t.id, e);
                          }),
                          (ee = S.intl.string(S.t.g7lkrU)),
                          t.premiumTier + 1 !== y.tier && ((en = !0), (l = S.intl.string(S.t.mTMkY2))))
                        : ((en = !0), (l = S.intl.string(S.t.hwPEJR))));
                let er = z === I + 1 && z > w,
                    ei = Y || er || I > w;
                return (
                    er
                        ? (f = (0, r.jsx)(g.A, {
                              guild: t,
                              size: c.$n.Sizes.SMALL,
                              color: c.$n.Colors.GREEN,
                              buttonText: S.intl.string(S.t.Vbkh2l),
                              targetBoostedGuildTier: w + 1,
                              analyticsLocation: {
                                  page: N.liQ.GUILD_SETTINGS,
                                  section: N.JJy.GUILD_SETTINGS_STICKERS,
                                  object: N.ZSU.BOOST_UPSELL_NEXT_LEVEL_HEADER,
                                  objectType: (0, O.k1)(y.tier),
                              },
                          }))
                        : Y &&
                          (f = (0, r.jsx)(P, {
                              guild: t,
                          })),
                    (0, r.jsxs)(
                        E.A,
                        {
                            subscriptionCount: R,
                            tier: y,
                            onSetRef: h,
                            isAnimatedTo: x,
                            hasBottomMargin: I !== A.length - 1,
                            withCardBody: !W,
                            headerButton: f,
                            showHeaderLockStatus: ei,
                            guildId: t.id,
                            children: [
                                W &&
                                    (0, r.jsxs)("div", {
                                        className: T.Vg,
                                        children: [
                                            H.map((e) =>
                                                (0, r.jsx)(
                                                    v.A,
                                                    {
                                                        isDisabled: K,
                                                        sticker: e,
                                                        canManageSticker: k(e),
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                            q,
                                        ],
                                    }),
                                !K &&
                                    !Y &&
                                    0 === H.length &&
                                    (0, r.jsx)("div", {
                                        className: s()(T.Rm, T.MC),
                                        children: (0, r.jsx)(o.Text, {
                                            variant: "text-md/normal",
                                            color: "text-default",
                                            children: S.intl.string(S.t.lqwv0J),
                                        }),
                                    }),
                                K &&
                                    !V &&
                                    (0, r.jsxs)("div", {
                                        className: T.Rm,
                                        children: [
                                            (0, r.jsx)("img", {
                                                alt: S.intl.string(S.t.BAhswr),
                                                className: T.Tg,
                                                src: J,
                                            }),
                                            (0, r.jsx)(o.Text, {
                                                className: T.nN,
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                children:
                                                    y.tier === N.TVA.TIER_1
                                                        ? S.intl.formatToPlainString(S.t.psMYux, {
                                                              numAdditional: X,
                                                          })
                                                        : S.intl.formatToPlainString(S.t.bLykEe, {
                                                              numAdditional: X,
                                                              numTotal: F,
                                                          }),
                                            }),
                                            (0, r.jsx)(a.m, {
                                                text: l,
                                                shouldShow: en,
                                                children: (0, r.jsx)(o.Button, {
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
                        y.tier,
                    )
                );
            },
        });
    };

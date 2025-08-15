n.d(t, { Z: () => D }), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(755721),
    c = n(481060),
    d = n(274136),
    u = n(2052),
    m = n(906732),
    g = n(678558),
    p = n(852679),
    h = n(357156),
    f = n(713081),
    b = n(151494),
    x = n(639777),
    j = n(626135),
    v = n(267642),
    _ = n(926491),
    O = n(909707),
    y = n(863562),
    C = n(399829),
    N = n(428862),
    I = n(981631),
    E = n(535396),
    S = n(388032),
    T = n(486217);
function P(e) {
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
}
let w = (e) => {
        let { children: t, currentGuildTier: n, guildStickers: i, tier: l } = e,
            a = n < l,
            s = (0, v.ig)(l);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.X6q, {
                    color: "header-primary",
                    variant: "heading-md/semibold",
                    children: t,
                }),
                !a &&
                    (0, r.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        children: S.intl.format(S.t.ZLoNtr, {
                            numTotal: s,
                            numAvailable: (0, v.Qi)(i, l),
                        }),
                    }),
            ],
        });
    },
    R = () =>
        (0, r.jsx)("div", {
            className: T.placeholderCard,
            children: (0, r.jsx)("img", {
                className: T.placeholderImg,
                alt: S.intl.string(S.t.wl4ntL),
                src: n(872732),
            }),
        }),
    Z = (e) => {
        let { guild: t } = e,
            { location: i } = (0, u.O)(),
            { canCreateExpressions: l } = (0, h.XJ)(t);
        return (0, r.jsx)(c.zxk, {
            variant: "primary",
            size: "sm",
            text: S.intl.string(S.t.O1REe3),
            onClick: () => {
                j.default.track(I.rMx.OPEN_MODAL, {
                    type: I.jXE.CREATE_STICKER_MODAL,
                    location: i,
                }),
                    ((e) => {
                        let { guildId: t } = e;
                        (0, c.ZDy)(async () => {
                            let { default: e } = await Promise.all([n.e("93626"), n.e("34765")]).then(
                                n.bind(n, 136735),
                            );
                            return (n) => (0, r.jsx)(e, P({ guildId: t }, n));
                        });
                    })({ guildId: t.id });
            },
            disabled: !l,
        });
    },
    D = (e) => {
        let { guild: t } = e,
            { isLoading: l } = (0, O.Z)(t.id),
            u = (0, s.e7)([_.Z], () => {
                var e;
                return null != (e = _.Z.getStickersByGuildId(t.id)) ? e : [];
            }, [t]),
            { analyticsLocations: j } = (0, m.ZP)(),
            D = (0, b.Z)(t.id),
            A = t.features.has(I.oNc.MORE_STICKERS) ? I.Eu4.TIER_3 : t.premiumTier,
            k = t.features.has(I.oNc.MORE_STICKERS) ? I.oCV[I.Eu4.TIER_3] : D,
            L = (0, x.Z)(t.id);
        if (
            (i.useEffect(() => {
                window.dispatchEvent(new Event("resize"));
            }, [u]),
            l)
        )
            return (0, r.jsx)(c.$jN, {});
        let M = [
            {
                tier: I.Eu4.NONE,
                title: (0, r.jsx)(w, {
                    guildStickers: u,
                    currentGuildTier: A,
                    tier: I.Eu4.NONE,
                    children: S.intl.string(S.t.tfVXhI),
                }),
            },
            {
                tier: I.Eu4.TIER_1,
                title: (0, r.jsx)(w, {
                    guildStickers: u,
                    currentGuildTier: A,
                    tier: I.Eu4.TIER_1,
                    children: S.intl.string(S.t.nzXtaW),
                }),
            },
            {
                tier: I.Eu4.TIER_2,
                title: (0, r.jsx)(w, {
                    guildStickers: u,
                    currentGuildTier: A,
                    tier: I.Eu4.TIER_2,
                    children: S.intl.string(S.t["h33/ub"]),
                }),
            },
            {
                tier: I.Eu4.TIER_3,
                title: (0, r.jsx)(w, {
                    guildStickers: u,
                    currentGuildTier: A,
                    tier: I.Eu4.TIER_3,
                    children: S.intl.string(S.t.BfF6EB),
                }),
            },
        ];
        return (0, r.jsx)(C.Z, {
            tiers: M,
            renderTier: (e) => {
                var i;
                let l,
                    s,
                    { isAnimatedTo: m, onSetRef: b, tier: x, tiers: _, tierIndex: O } = e,
                    { canCreateExpressions: C, canManageGuildExpression: w } = (0, h.Gw)(t),
                    M = _[O - 1],
                    G = null != M ? (0, v.A3)(M.tier) : 0,
                    U = (0, v.A3)(x.tier, t),
                    B = (0, v.ig)(x.tier),
                    F = u.slice(G, U),
                    H = F.length > 0,
                    z = A < x.tier,
                    W =
                        ((i = u.length),
                        i < (0, v.A3)(I.Eu4.NONE)
                            ? I.Eu4.NONE
                            : i < (0, v.A3)(I.Eu4.TIER_1)
                              ? I.Eu4.TIER_1
                              : i < (0, v.A3)(I.Eu4.TIER_2)
                                ? I.Eu4.TIER_2
                                : i < (0, v.A3)(I.Eu4.TIER_3) ||
                                    (null != t && t.features.has(I.oNc.MORE_STICKERS) && i < d.D.MAX_STICKER_SLOTS)
                                  ? I.Eu4.TIER_3
                                  : I.Eu4.NONE),
                    V = C && !z && W === x.tier && U !== F.length,
                    Y = V || F.length > 0,
                    K = U - G,
                    q = n(872732),
                    X = B - F.length,
                    Q = V ? Math.min(5 - ((F.length + 0) % 5), X) : 0,
                    J = [];
                for (let e = 0; e < Q; e++) J.push((0, r.jsx)(R, {}, "placeholder-".concat(e)));
                let $ = t.premiumTier < x.tier && D >= I.oCV[x.tier],
                    ee = S.intl.string(S.t.dtFw5e),
                    et = () => {
                        var e, n;
                        let r;
                        return (
                            (e = Math.max(1, I.oCV[x.tier] - D)),
                            (n = x.tier),
                            (r = null),
                            void (n === I.Eu4.TIER_1
                                ? (r = I.Qqv.TIER_1)
                                : n === I.Eu4.TIER_2
                                  ? (r = I.Qqv.TIER_2)
                                  : n === I.Eu4.TIER_3 && (r = I.Qqv.TIER_3),
                            (0, p.Z)({
                                analyticsLocations: j,
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
                    (L
                        ? ((et = () => {
                              let e = E.Cp[x.tier];
                              null != e && (0, f.H6)(t.id, e);
                          }),
                          (ee = S.intl.string(S.t.g7lkra)),
                          t.premiumTier + 1 !== x.tier && ((en = !0), (l = S.intl.string(S.t.mTMkY2))))
                        : ((en = !0), (l = S.intl.string(S.t.hwPEJS))));
                let er = W === O + 1 && W > A,
                    ei = V || er || O > A;
                return (
                    er
                        ? (s = (0, r.jsx)(g.Z, {
                              guild: t,
                              size: o.zx.Sizes.SMALL,
                              color: o.zx.Colors.GREEN,
                              buttonText: S.intl.string(S.t.Vbkh2t),
                              targetBoostedGuildTier: A + 1,
                              analyticsLocation: {
                                  page: I.ZY5.GUILD_SETTINGS,
                                  section: I.jXE.GUILD_SETTINGS_STICKERS,
                                  object: I.qAy.BOOST_UPSELL_NEXT_LEVEL_HEADER,
                                  objectType: (0, v.ge)(x.tier),
                              },
                          }))
                        : V && (s = (0, r.jsx)(Z, { guild: t })),
                    (0, r.jsxs)(
                        N.Z,
                        {
                            subscriptionCount: k,
                            tier: x,
                            onSetRef: b,
                            isAnimatedTo: m,
                            hasBottomMargin: O !== _.length - 1,
                            withCardBody: !Y,
                            headerButton: s,
                            showHeaderLockStatus: ei,
                            guildId: t.id,
                            children: [
                                Y &&
                                    (0, r.jsxs)("div", {
                                        className: T.grid,
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
                                            J,
                                        ],
                                    }),
                                !z &&
                                    !V &&
                                    0 === F.length &&
                                    (0, r.jsx)("div", {
                                        className: a()(T.emptyTierWrapper, T.unusedTierWrapper),
                                        children: (0, r.jsx)(c.Text, {
                                            variant: "text-md/normal",
                                            color: "header-secondary",
                                            children: S.intl.string(S.t.lqwv0N),
                                        }),
                                    }),
                                z &&
                                    !H &&
                                    (0, r.jsxs)("div", {
                                        className: T.emptyTierWrapper,
                                        children: [
                                            (0, r.jsx)("img", {
                                                alt: S.intl.string(S.t.BAhsws),
                                                className: T.emptyTierImage,
                                                src: q,
                                            }),
                                            (0, r.jsx)(c.Text, {
                                                className: T.unlockTierCtaHeading,
                                                variant: "text-md/normal",
                                                color: "header-secondary",
                                                children:
                                                    x.tier === I.Eu4.TIER_1
                                                        ? S.intl.formatToPlainString(S.t.psMYu7, { numAdditional: K })
                                                        : S.intl.formatToPlainString(S.t.bLykER, {
                                                              numAdditional: K,
                                                              numTotal: U,
                                                          }),
                                            }),
                                            (0, r.jsx)(c.ua7, {
                                                tooltipClassName: T.tooltip,
                                                text: l,
                                                shouldShow: en,
                                                children: (e) => {
                                                    var t, n;
                                                    return (0, r.jsx)(
                                                        c.zxk,
                                                        ((t = P(
                                                            {
                                                                variant: "active",
                                                                text: ee,
                                                            },
                                                            e,
                                                        )),
                                                        (n = n =
                                                            {
                                                                disabled: en,
                                                                onClick: et,
                                                            }),
                                                        Object.getOwnPropertyDescriptors
                                                            ? Object.defineProperties(
                                                                  t,
                                                                  Object.getOwnPropertyDescriptors(n),
                                                              )
                                                            : (function (e, t) {
                                                                  var n = Object.keys(e);
                                                                  if (Object.getOwnPropertySymbols) {
                                                                      var r = Object.getOwnPropertySymbols(e);
                                                                      n.push.apply(n, r);
                                                                  }
                                                                  return n;
                                                              })(Object(n)).forEach(function (e) {
                                                                  Object.defineProperty(
                                                                      t,
                                                                      e,
                                                                      Object.getOwnPropertyDescriptor(n, e),
                                                                  );
                                                              }),
                                                        t),
                                                    );
                                                },
                                            }),
                                        ],
                                    }),
                            ],
                        },
                        x.tier,
                    )
                );
            },
        });
    };

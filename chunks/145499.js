(n.d(t, { Z: () => k }), n(539854));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(274136),
    d = n(2052),
    u = n(906732),
    m = n(678558),
    g = n(852679),
    p = n(357156),
    f = n(713081),
    h = n(151494),
    x = n(639777),
    b = n(626135),
    j = n(267642),
    _ = n(926491),
    v = n(909707),
    O = n(386937),
    C = n(316350),
    y = n(863562),
    N = n(981631),
    I = n(535396),
    E = n(388032),
    S = n(145635);
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
let P = (e, t) => (e < (0, j.A3)(N.Eu4.NONE) ? N.Eu4.NONE : e < (0, j.A3)(N.Eu4.TIER_1) ? N.Eu4.TIER_1 : e < (0, j.A3)(N.Eu4.TIER_2) ? N.Eu4.TIER_2 : e < (0, j.A3)(N.Eu4.TIER_3) || (null != t && t.features.has(N.oNc.MORE_STICKERS) && e < c.D.MAX_STICKER_SLOTS) ? N.Eu4.TIER_3 : N.Eu4.NONE),
    w = (e) => {
        let { children: t, currentGuildTier: n, guildStickers: i, tier: l } = e,
            s = n < l,
            a = (0, j.ig)(l);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.X6q, {
                    color: 'header-primary',
                    variant: 'heading-md/semibold',
                    children: t
                }),
                !s &&
                    (0, r.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        children: E.intl.format(E.t.ZLoNtr, {
                            numTotal: a,
                            numAvailable: (0, j.Qi)(i, l)
                        })
                    })
            ]
        });
    },
    R = (e) => {
        let { guildId: t } = e;
        (0, o.ZDy)(async () => {
            let { default: e } = await Promise.all([n.e('93626'), n.e('64386')]).then(n.bind(n, 136735));
            return (n) => (0, r.jsx)(e, T({ guildId: t }, n));
        });
    },
    Z = () =>
        (0, r.jsx)('div', {
            className: S.placeholderCard,
            children: (0, r.jsx)('img', {
                className: S.placeholderImg,
                alt: E.intl.string(E.t.wl4ntL),
                src: n(872732)
            })
        }),
    D = (e) => {
        let { guild: t } = e,
            { location: n } = (0, d.O)(),
            { canCreateExpressions: i } = (0, p.XJ)(t);
        return (0, r.jsx)(o.zxk, {
            size: o.zxk.Sizes.SMALL,
            color: o.zxk.Colors.BRAND,
            onClick: () => {
                (b.default.track(N.rMx.OPEN_MODAL, {
                    type: N.jXE.CREATE_STICKER_MODAL,
                    location: n
                }),
                    R({ guildId: t.id }));
            },
            disabled: !i,
            children: E.intl.string(E.t.O1REe3)
        });
    },
    k = (e) => {
        let { guild: t } = e,
            { isLoading: l } = (0, v.Z)(t.id),
            c = (0, a.e7)(
                [_.Z],
                () => {
                    var e;
                    return null != (e = _.Z.getStickersByGuildId(t.id)) ? e : [];
                },
                [t]
            ),
            { analyticsLocations: d } = (0, u.ZP)(),
            b = (0, h.Z)(t.id),
            R = t.features.has(N.oNc.MORE_STICKERS) ? N.Eu4.TIER_3 : t.premiumTier,
            k = t.features.has(N.oNc.MORE_STICKERS) ? N.oCV[N.Eu4.TIER_3] : b,
            A = (0, x.Z)(t.id);
        if (
            (i.useEffect(() => {
                window.dispatchEvent(new Event('resize'));
            }, [c]),
            l)
        )
            return (0, r.jsx)(o.$jN, {});
        let L = (e, n) => {
                let r = null;
                (n === N.Eu4.TIER_1 ? (r = N.Qqv.TIER_1) : n === N.Eu4.TIER_2 ? (r = N.Qqv.TIER_2) : n === N.Eu4.TIER_3 && (r = N.Qqv.TIER_3),
                    (0, g.Z)({
                        analyticsLocations: d,
                        analyticsLocation: {
                            page: N.ZY5.GUILD_SETTINGS,
                            section: N.jXE.GUILD_SETTINGS_STICKERS,
                            object: N.qAy.BOOST_LEVEL_UPSELL_BUTTON,
                            objectType: r
                        },
                        guildId: t.id,
                        totalNumberOfSlotsToAssign: e
                    }));
            },
            M = [
                {
                    tier: N.Eu4.NONE,
                    title: (0, r.jsx)(w, {
                        guildStickers: c,
                        currentGuildTier: R,
                        tier: N.Eu4.NONE,
                        children: E.intl.string(E.t.tfVXhI)
                    })
                },
                {
                    tier: N.Eu4.TIER_1,
                    title: (0, r.jsx)(w, {
                        guildStickers: c,
                        currentGuildTier: R,
                        tier: N.Eu4.TIER_1,
                        children: E.intl.string(E.t.nzXtaW)
                    })
                },
                {
                    tier: N.Eu4.TIER_2,
                    title: (0, r.jsx)(w, {
                        guildStickers: c,
                        currentGuildTier: R,
                        tier: N.Eu4.TIER_2,
                        children: E.intl.string(E.t['h33/ub'])
                    })
                },
                {
                    tier: N.Eu4.TIER_3,
                    title: (0, r.jsx)(w, {
                        guildStickers: c,
                        currentGuildTier: R,
                        tier: N.Eu4.TIER_3,
                        children: E.intl.string(E.t.BfF6EB)
                    })
                }
            ];
        return (0, r.jsx)(O.Z, {
            tiers: M,
            renderTier: (e) => {
                let i,
                    l,
                    { isAnimatedTo: a, onSetRef: d, tier: u, tiers: g, tierIndex: h } = e,
                    { canCreateExpressions: x, canManageGuildExpression: _ } = (0, p.Gw)(t),
                    v = g[h - 1],
                    O = null != v ? (0, j.A3)(v.tier) : 0,
                    w = (0, j.A3)(u.tier, t),
                    M = (0, j.ig)(u.tier),
                    G = c.slice(O, w),
                    U = G.length > 0,
                    B = R < u.tier,
                    F = P(c.length, t),
                    z = x && !B && F === u.tier && w !== G.length,
                    H = z || G.length > 0,
                    V = w - O,
                    W = n(872732),
                    Y = M - G.length,
                    K = z ? Math.min(5 - ((G.length + 0) % 5), Y) : 0,
                    X = [];
                for (let e = 0; e < K; e++) X.push((0, r.jsx)(Z, {}, 'placeholder-'.concat(e)));
                let q = t.premiumTier < u.tier && b >= N.oCV[u.tier],
                    Q = E.intl.string(E.t.dtFw5e),
                    J = () => L(Math.max(1, N.oCV[u.tier] - b), u.tier),
                    $ = !1;
                q &&
                    (A
                        ? ((J = () => {
                              let e = I.Cp[u.tier];
                              null != e && (0, f.H6)(t.id, e);
                          }),
                          (Q = E.intl.string(E.t.g7lkra)),
                          t.premiumTier + 1 !== u.tier && (($ = !0), (i = E.intl.string(E.t.mTMkY2))))
                        : (($ = !0), (i = E.intl.string(E.t.hwPEJS))));
                let ee = F === h + 1 && F > R,
                    et = z || ee || h > R;
                return (
                    ee
                        ? (l = (0, r.jsx)(m.Z, {
                              guild: t,
                              size: o.zxk.Sizes.SMALL,
                              color: o.zxk.Colors.GREEN,
                              buttonText: E.intl.string(E.t.Vbkh2t),
                              targetBoostedGuildTier: R + 1,
                              analyticsLocation: {
                                  page: N.ZY5.GUILD_SETTINGS,
                                  section: N.jXE.GUILD_SETTINGS_STICKERS,
                                  object: N.qAy.BOOST_UPSELL_NEXT_LEVEL_HEADER,
                                  objectType: (0, j.ge)(u.tier)
                              }
                          }))
                        : z && (l = (0, r.jsx)(D, { guild: t })),
                    (0, r.jsxs)(
                        C.Z,
                        {
                            subscriptionCount: k,
                            tier: u,
                            onSetRef: d,
                            isAnimatedTo: a,
                            hasBottomMargin: h !== g.length - 1,
                            withCardBody: !H,
                            headerButton: l,
                            showHeaderLockStatus: et,
                            guildId: t.id,
                            children: [
                                H &&
                                    (0, r.jsxs)('div', {
                                        className: S.grid,
                                        children: [
                                            G.map((e) =>
                                                (0, r.jsx)(
                                                    y.Z,
                                                    {
                                                        isDisabled: B,
                                                        sticker: e,
                                                        canManageSticker: _(e)
                                                    },
                                                    e.id
                                                )
                                            ),
                                            X
                                        ]
                                    }),
                                !B &&
                                    !z &&
                                    0 === G.length &&
                                    (0, r.jsx)('div', {
                                        className: s()(S.emptyTierWrapper, S.unusedTierWrapper),
                                        children: (0, r.jsx)(o.Text, {
                                            variant: 'text-md/normal',
                                            color: 'header-secondary',
                                            children: E.intl.string(E.t.lqwv0N)
                                        })
                                    }),
                                B &&
                                    !U &&
                                    (0, r.jsxs)('div', {
                                        className: S.emptyTierWrapper,
                                        children: [
                                            (0, r.jsx)('img', {
                                                alt: E.intl.string(E.t.BAhsws),
                                                className: S.emptyTierImage,
                                                src: W
                                            }),
                                            (0, r.jsx)(o.Text, {
                                                className: S.unlockTierCtaHeading,
                                                variant: 'text-md/normal',
                                                color: 'header-secondary',
                                                children:
                                                    u.tier === N.Eu4.TIER_1
                                                        ? E.intl.formatToPlainString(E.t.psMYu7, { numAdditional: V })
                                                        : E.intl.formatToPlainString(E.t.bLykER, {
                                                              numAdditional: V,
                                                              numTotal: w
                                                          })
                                            }),
                                            (0, r.jsx)(o.ua7, {
                                                tooltipClassName: S.tooltip,
                                                text: i,
                                                shouldShow: $,
                                                children: (e) => {
                                                    var t, n;
                                                    return (0, r.jsx)(
                                                        o.zxk,
                                                        ((t = T({}, e)),
                                                        (n = n =
                                                            {
                                                                color: o.zxk.Colors.GREEN,
                                                                disabled: $,
                                                                onClick: J,
                                                                children: Q
                                                            }),
                                                        Object.getOwnPropertyDescriptors
                                                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                                            : (function (e, t) {
                                                                  var n = Object.keys(e);
                                                                  if (Object.getOwnPropertySymbols) {
                                                                      var r = Object.getOwnPropertySymbols(e);
                                                                      n.push.apply(n, r);
                                                                  }
                                                                  return n;
                                                              })(Object(n)).forEach(function (e) {
                                                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                                              }),
                                                        t)
                                                    );
                                                }
                                            })
                                        ]
                                    })
                            ]
                        },
                        u.tier
                    )
                );
            }
        });
    };

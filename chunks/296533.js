n.d(t, {
    Z: () => y,
    r: () => I
}),
    n(539854),
    n(388685);
var r = n(200651),
    i = n(192379),
    s = n(200100),
    a = n(399606),
    l = n(481060),
    o = n(607070),
    c = n(975298),
    d = n(280942),
    u = n(209747),
    m = n(430824),
    g = n(594174),
    p = n(267642),
    h = n(74538),
    f = n(709054),
    _ = n(357956),
    b = n(275909),
    N = n(300037),
    x = n(981631),
    E = n(474936),
    j = n(388032),
    C = n(238045);
function O(e) {
    let { guildTier: t, guildBoostSlot: n, showAltText: a, isCanceled: o, premiumSubscription: c, fractionalPremiumInfo: d } = e,
        u = i.useMemo(() => {
            if (o) {
                let e = c.currentPeriodEnd;
                return c.isPausedForFractionalPremium && (e = d.endsAt.toDate()), j.NW.format(j.t.Z4ULRE, { date: e });
            }
            let e = null != n.premiumGuildSubscription ? f.default.extractTimestamp(n.premiumGuildSubscription.id) : 0;
            return j.NW.formatToPlainString(j.t.lY2Bur, { date: new Date(e) });
        }, [n, o, c, d]),
        m = i.useMemo(
            () =>
                (function (e) {
                    if (null == e || e === x.Eu4.NONE) return '';
                    let t = [
                        j.NW.formatToPlainString(j.t.dLlKX1, { numEmojiSlots: E.HO[e].limits.emoji }),
                        j.NW.formatToPlainString(j.t['+ANIfn'], { numStickerSlots: E.HO[e].limits.stickers }),
                        j.NW.formatToPlainString(j.t['4gt60d'], { numSoundboardSlots: E.HO[e].limits.soundboardSounds }),
                        j.NW.formatToPlainString(j.t.XahSjY, {
                            resolution: E.HO[e].limits.screenShareQualityResolution,
                            framerate: E.HO[e].limits.screenShareQualityFramerate
                        }),
                        j.NW.formatToPlainString(j.t.NbNs7e, { bitrate: E.HO[e].limits.bitrate / 1000 }),
                        j.NW.formatToPlainString(j.t.VVKcpq, { filesize: E.HO[e].limits.fileSize / 1024 / 1024 }),
                        j.NW.formatToPlainString(j.t.TbpCvr, { numVideoStageSeats: E.HO[e].limits.stageVideoUsers }),
                        j.NW.string(j.t.LDyX3t),
                        j.NW.string(j.t.YtGlPT)
                    ];
                    e >= x.Eu4.TIER_2 && (t.push(j.NW.string(j.t.SztbtL)), t.push(j.NW.string(j.t['3GK91t']))), e >= x.Eu4.TIER_3 && t.push(j.NW.string(j.t.XUUJd3));
                    let n = t[Math.floor(Math.random() * t.length)];
                    return j.NW.format(j.t['/dOAmZ'], { perk: n });
                })(t),
            [t]
        ),
        g = (0, l.Yzy)(
            a,
            {
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 }
            },
            'animate-always'
        );
    return o || t === x.Eu4.NONE
        ? (0, r.jsx)('div', {
              className: C.boostDescriptionInnerContainer,
              children: (0, r.jsx)(l.Text, {
                  variant: 'text-sm/medium',
                  color: 'text-muted',
                  children: u
              })
          })
        : g((e, t) =>
              (0, r.jsx)(s.animated.div, {
                  style: e,
                  className: C.boostDescriptionInnerContainer,
                  children: (0, r.jsx)(l.Text, {
                      variant: 'text-sm/medium',
                      color: 'text-muted',
                      children: t ? m : u
                  })
              })
          );
}
function S(e) {
    let { guildTier: t, guildBoostSlot: n, premiumSubscription: s, hasCancelableGuildBoostSlot: u, showAltText: m, isLastGuildBoostSlot: h } = e,
        f = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
        N = (0, a.e7)([g.default], () => g.default.getCurrentUser()),
        x = i.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n]),
        E = i.useMemo(() => null != x && x > new Date(), [x]),
        S = (0, p.tl)(n),
        v = (0, c.Z)();
    return (0, r.jsxs)('div', {
        className: C.boostContainer,
        children: [
            (0, r.jsxs)('div', {
                className: C.boostInnerContainer,
                children: [
                    (0, r.jsx)(b.Z, {
                        isCanceled: S,
                        hasCooldown: E,
                        useReducedMotion: f
                    }),
                    (0, r.jsx)('div', {
                        className: C.boostDescriptionContainer,
                        children:
                            null != x && E && !S
                                ? (0, r.jsx)(_.Z, {
                                      className: C.boostDescriptionInnerContainer,
                                      cooldown: x.getTime()
                                  })
                                : (0, r.jsx)(O, {
                                      guildTier: t,
                                      guildBoostSlot: n,
                                      showAltText: m,
                                      isCanceled: S,
                                      premiumSubscription: s,
                                      fractionalPremiumInfo: v
                                  })
                    }),
                    (0, r.jsx)(l.yRy, {
                        renderPopout: function (e) {
                            let { closePopout: t } = e;
                            return (0, r.jsx)(d.Z, {
                                onClose: t,
                                guildBoostSlot: n,
                                premiumSubscription: s,
                                hasCancelableGuildBoostSlot: u,
                                fractionalState: v.fractionalState,
                                user: N
                            });
                        },
                        position: 'right',
                        align: 'center',
                        children: (e) => {
                            var t, n;
                            return (0, r.jsx)(
                                l.P3F,
                                ((t = (function (e) {
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
                                })({}, e)),
                                (n = n =
                                    {
                                        'aria-label': j.NW.string(j.t.PdRCRk),
                                        className: C.boostSlotMenuIcon,
                                        children: (0, r.jsx)(l.Huf, {
                                            size: 'md',
                                            color: 'currentColor'
                                        })
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
            }),
            !h && (0, r.jsx)('div', { className: C.boostContainerSeparator })
        ]
    });
}
function v(e) {
    let { guildId: t, guildBoostSlotRecords: n, premiumSubscription: i, hasCancelableGuildBoostSlot: s, showAltText: l } = e,
        o = (0, a.e7)([m.Z], () => m.Z.getGuild(t), [t]);
    return (0, r.jsxs)('div', {
        className: C.appliedBoostContainer,
        children: [
            (0, r.jsx)(N.Z, {
                guildId: t,
                boostingVariant: !1
            }),
            n.map((e, t) =>
                (0, r.jsx)(
                    S,
                    {
                        guildTier: null == o ? void 0 : o.premiumTier,
                        guildBoostSlot: e,
                        premiumSubscription: i,
                        hasCancelableGuildBoostSlot: s,
                        showAltText: l,
                        isLastGuildBoostSlot: t === n.length - 1
                    },
                    e.id
                )
            )
        ]
    });
}
function T(e) {
    let { guildId: t, appliedGuildBoosts: n, premiumSubscription: i } = e,
        s = (0, a.e7)([m.Z], () => m.Z.getGuild(t), [t]),
        l = f.default.fromTimestamp(Date.now());
    if (
        (n.forEach((e) => {
            (null == l || 0 > f.default.compare(e.id, l)) && (l = e.id);
        }),
        null == l)
    )
        return null;
    let o = u.Z.createFromServer(
        {
            id: f.default.fromTimestamp(Date.now()),
            subscription_id: i.id,
            canceled: !1,
            premium_guild_subscription: {
                id: l,
                guild_id: t
            },
            cooldown_ends_at: null
        },
        i
    );
    return (0, r.jsxs)('div', {
        className: C.appliedBoostContainer,
        children: [
            (0, r.jsx)(N.Z, {
                guildId: t,
                boostingVariant: !1
            }),
            n.map((e, t) =>
                (0, r.jsx)(
                    S,
                    {
                        guildTier: null == s ? void 0 : s.premiumTier,
                        guildBoostSlot: o,
                        premiumSubscription: i,
                        hasCancelableGuildBoostSlot: !1,
                        showAltText: !1,
                        isLastGuildBoostSlot: t === n.length - 1
                    },
                    t
                )
            )
        ]
    });
}
function I(e) {
    let { appliedGuildBoosts: t, premiumSubscription: n } = e,
        s = i.useMemo(() => {
            let e = {};
            return (
                t.forEach((t) => {
                    let n = t.guildId;
                    n in e || (e[n] = []), e[n].push(t);
                }),
                e
            );
        }, [t]);
    return null == n || 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              className: C.wrapper,
              children: [
                  (0, r.jsx)('div', {
                      className: C.container,
                      children: f.default.keys(s).map((e) =>
                          (0, r.jsx)(
                              T,
                              {
                                  guildId: e,
                                  premiumSubscription: n,
                                  appliedGuildBoosts: s[e]
                              },
                              e
                          )
                      )
                  }),
                  (0, r.jsx)('div', { className: C.mainSeparator })
              ]
          });
}
function y(e) {
    let { guildBoostSlots: t, premiumSubscription: n } = e,
        [s, a] = i.useState(!1);
    i.useEffect(() => {
        let e = -1;
        return (
            null != n &&
                (e = setInterval(() => {
                    a((e) => !e);
                }, 3000)),
            () => {
                clearInterval(e);
            }
        );
    }, [n]);
    let { boostsByGuildId: l, numActiveGuildBoostSlots: o } = i.useMemo(() => {
        let e = 0,
            n = {};
        return (
            Object.keys(t).forEach((r) => {
                let i = t[r];
                if ((!(0, p.tl)(i) && e++, null != i.premiumGuildSubscription)) {
                    let e = i.premiumGuildSubscription.guildId;
                    e in n || (n[e] = []), n[e].push(i);
                }
            }),
            {
                boostsByGuildId: n,
                numActiveGuildBoostSlots: e
            }
        );
    }, [t]);
    if (null == n || 0 === Object.keys(l).length) return null;
    let c = o > h.ZP.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, r.jsxs)('div', {
        className: C.wrapper,
        children: [
            (0, r.jsx)('div', {
                className: C.container,
                children: f.default.keys(l).map((e) =>
                    (0, r.jsx)(
                        v,
                        {
                            guildId: e,
                            guildBoostSlotRecords: l[e],
                            premiumSubscription: n,
                            hasCancelableGuildBoostSlot: c,
                            showAltText: s
                        },
                        e
                    )
                )
            }),
            (0, r.jsx)('div', { className: C.mainSeparator })
        ]
    });
}

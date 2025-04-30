n.d(t, {
    Z: () => y,
    r: () => I
}),
    n(539854),
    n(388685);
var i = n(200651),
    r = n(192379),
    s = n(272573),
    l = n(399606),
    a = n(481060),
    o = n(607070),
    c = n(975298),
    d = n(280942),
    u = n(209747),
    m = n(430824),
    p = n(594174),
    g = n(267642),
    h = n(74538),
    f = n(709054),
    b = n(357956),
    _ = n(275909),
    x = n(300037),
    E = n(981631),
    j = n(474936),
    C = n(388032),
    O = n(238045);
function S(e) {
    let { guildTier: t, guildBoostSlot: n, showAltText: l, isCanceled: o, premiumSubscription: c, fractionalPremiumInfo: d } = e,
        u = r.useMemo(() => {
            if (o) {
                let e = c.currentPeriodEnd;
                return c.isPausedForFractionalPremium && (e = d.endsAt.toDate()), C.intl.format(C.t.Z4ULRE, { date: e });
            }
            let e = null != n.premiumGuildSubscription ? f.default.extractTimestamp(n.premiumGuildSubscription.id) : 0;
            return C.intl.formatToPlainString(C.t.lY2Bur, { date: new Date(e) });
        }, [n, o, c, d]),
        m = r.useMemo(
            () =>
                (function (e) {
                    if (null == e || e === E.Eu4.NONE) return '';
                    let t = [
                        C.intl.formatToPlainString(C.t.dLlKX1, { numEmojiSlots: j.HO[e].limits.emoji }),
                        C.intl.formatToPlainString(C.t['+ANIfn'], { numStickerSlots: j.HO[e].limits.stickers }),
                        C.intl.formatToPlainString(C.t['4gt60d'], { numSoundboardSlots: j.HO[e].limits.soundboardSounds }),
                        C.intl.formatToPlainString(C.t.XahSjY, {
                            resolution: j.HO[e].limits.screenShareQualityResolution,
                            framerate: j.HO[e].limits.screenShareQualityFramerate
                        }),
                        C.intl.formatToPlainString(C.t.NbNs7e, { bitrate: j.HO[e].limits.bitrate / 1000 }),
                        C.intl.formatToPlainString(C.t.VVKcpq, { filesize: j.HO[e].limits.fileSize / 1024 / 1024 }),
                        C.intl.formatToPlainString(C.t.TbpCvr, { numVideoStageSeats: j.HO[e].limits.stageVideoUsers }),
                        C.intl.string(C.t.LDyX3t),
                        C.intl.string(C.t.YtGlPT)
                    ];
                    e >= E.Eu4.TIER_2 && (t.push(C.intl.string(C.t.SztbtL)), t.push(C.intl.string(C.t['3GK91t']))), e >= E.Eu4.TIER_3 && t.push(C.intl.string(C.t.XUUJd3));
                    let n = t[Math.floor(Math.random() * t.length)];
                    return C.intl.format(C.t['/dOAmZ'], { perk: n });
                })(t),
            [t]
        ),
        p = (0, a.Yzy)(
            l,
            {
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 }
            },
            'animate-always'
        );
    return o || t === E.Eu4.NONE
        ? (0, i.jsx)('div', {
              className: O.boostDescriptionInnerContainer,
              children: (0, i.jsx)(a.Text, {
                  variant: 'text-sm/medium',
                  color: 'text-muted',
                  children: u
              })
          })
        : p((e, t) =>
              (0, i.jsx)(s.animated.div, {
                  style: e,
                  className: O.boostDescriptionInnerContainer,
                  children: (0, i.jsx)(a.Text, {
                      variant: 'text-sm/medium',
                      color: 'text-muted',
                      children: t ? m : u
                  })
              })
          );
}
function v(e) {
    let { guildTier: t, guildBoostSlot: n, premiumSubscription: s, hasCancelableGuildBoostSlot: u, showAltText: m, isLastGuildBoostSlot: h } = e,
        f = (0, l.e7)([o.Z], () => o.Z.useReducedMotion),
        x = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
        E = r.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n]),
        j = r.useMemo(() => null != E && E > new Date(), [E]),
        v = (0, g.tl)(n),
        T = (0, c.Z)();
    return (0, i.jsxs)('div', {
        className: O.boostContainer,
        children: [
            (0, i.jsxs)('div', {
                className: O.boostInnerContainer,
                children: [
                    (0, i.jsx)(_.Z, {
                        isCanceled: v,
                        hasCooldown: j,
                        useReducedMotion: f
                    }),
                    (0, i.jsx)('div', {
                        className: O.boostDescriptionContainer,
                        children:
                            null != E && j && !v
                                ? (0, i.jsx)(b.Z, {
                                      className: O.boostDescriptionInnerContainer,
                                      cooldown: E.getTime()
                                  })
                                : (0, i.jsx)(S, {
                                      guildTier: t,
                                      guildBoostSlot: n,
                                      showAltText: m,
                                      isCanceled: v,
                                      premiumSubscription: s,
                                      fractionalPremiumInfo: T
                                  })
                    }),
                    (0, i.jsx)(a.yRy, {
                        renderPopout: function (e) {
                            let { closePopout: t } = e;
                            return (0, i.jsx)(d.Z, {
                                onClose: t,
                                guildBoostSlot: n,
                                premiumSubscription: s,
                                hasCancelableGuildBoostSlot: u,
                                fractionalState: T.fractionalState,
                                user: x
                            });
                        },
                        position: 'right',
                        align: 'center',
                        children: (e) => {
                            var t, n;
                            return (0, i.jsx)(
                                a.P3F,
                                ((t = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            i = Object.keys(n);
                                        'function' == typeof Object.getOwnPropertySymbols &&
                                            (i = i.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                })
                                            )),
                                            i.forEach(function (t) {
                                                var i;
                                                (i = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: i,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = i);
                                            });
                                    }
                                    return e;
                                })({}, e)),
                                (n = n =
                                    {
                                        'aria-label': C.intl.string(C.t.PdRCRk),
                                        className: O.boostSlotMenuIcon,
                                        children: (0, i.jsx)(a.Huf, {
                                            size: 'md',
                                            color: 'currentColor'
                                        })
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var i = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, i);
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
            !h && (0, i.jsx)('div', { className: O.boostContainerSeparator })
        ]
    });
}
function T(e) {
    let { guildId: t, guildBoostSlotRecords: n, premiumSubscription: r, hasCancelableGuildBoostSlot: s, showAltText: a } = e,
        o = (0, l.e7)([m.Z], () => m.Z.getGuild(t), [t]);
    return (0, i.jsxs)('div', {
        className: O.appliedBoostContainer,
        children: [
            (0, i.jsx)(x.Z, {
                guildId: t,
                boostingVariant: !1
            }),
            n.map((e, t) =>
                (0, i.jsx)(
                    v,
                    {
                        guildTier: null == o ? void 0 : o.premiumTier,
                        guildBoostSlot: e,
                        premiumSubscription: r,
                        hasCancelableGuildBoostSlot: s,
                        showAltText: a,
                        isLastGuildBoostSlot: t === n.length - 1
                    },
                    e.id
                )
            )
        ]
    });
}
function N(e) {
    let { guildId: t, appliedGuildBoosts: n, premiumSubscription: r } = e,
        s = (0, l.e7)([m.Z], () => m.Z.getGuild(t), [t]),
        a = f.default.fromTimestamp(Date.now());
    if (
        (n.forEach((e) => {
            (null == a || 0 > f.default.compare(e.id, a)) && (a = e.id);
        }),
        null == a)
    )
        return null;
    let o = u.Z.createFromServer(
        {
            id: f.default.fromTimestamp(Date.now()),
            subscription_id: r.id,
            canceled: !1,
            premium_guild_subscription: {
                id: a,
                guild_id: t
            },
            cooldown_ends_at: null
        },
        r
    );
    return (0, i.jsxs)('div', {
        className: O.appliedBoostContainer,
        children: [
            (0, i.jsx)(x.Z, {
                guildId: t,
                boostingVariant: !1
            }),
            n.map((e, t) =>
                (0, i.jsx)(
                    v,
                    {
                        guildTier: null == s ? void 0 : s.premiumTier,
                        guildBoostSlot: o,
                        premiumSubscription: r,
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
        s = r.useMemo(() => {
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
        : (0, i.jsxs)('div', {
              className: O.wrapper,
              children: [
                  (0, i.jsx)('div', {
                      className: O.container,
                      children: f.default.keys(s).map((e) =>
                          (0, i.jsx)(
                              N,
                              {
                                  guildId: e,
                                  premiumSubscription: n,
                                  appliedGuildBoosts: s[e]
                              },
                              e
                          )
                      )
                  }),
                  (0, i.jsx)('div', { className: O.mainSeparator })
              ]
          });
}
function y(e) {
    let { guildBoostSlots: t, premiumSubscription: n } = e,
        [s, l] = r.useState(!1);
    r.useEffect(() => {
        let e = -1;
        return (
            null != n &&
                (e = setInterval(() => {
                    l((e) => !e);
                }, 3000)),
            () => {
                clearInterval(e);
            }
        );
    }, [n]);
    let { boostsByGuildId: a, numActiveGuildBoostSlots: o } = r.useMemo(() => {
        let e = 0,
            n = {};
        return (
            Object.keys(t).forEach((i) => {
                let r = t[i];
                if ((!(0, g.tl)(r) && e++, null != r.premiumGuildSubscription)) {
                    let e = r.premiumGuildSubscription.guildId;
                    e in n || (n[e] = []), n[e].push(r);
                }
            }),
            {
                boostsByGuildId: n,
                numActiveGuildBoostSlots: e
            }
        );
    }, [t]);
    if (null == n || 0 === Object.keys(a).length) return null;
    let c = o > h.ZP.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, i.jsxs)('div', {
        className: O.wrapper,
        children: [
            (0, i.jsx)('div', {
                className: O.container,
                children: f.default.keys(a).map((e) =>
                    (0, i.jsx)(
                        T,
                        {
                            guildId: e,
                            guildBoostSlotRecords: a[e],
                            premiumSubscription: n,
                            hasCancelableGuildBoostSlot: c,
                            showAltText: s
                        },
                        e
                    )
                )
            }),
            (0, i.jsx)('div', { className: O.mainSeparator })
        ]
    });
}

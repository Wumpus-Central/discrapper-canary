(n.d(t, {
    Z: () => y,
    r: () => I
}),
    n(539854),
    n(388685));
var i = n(255367),
    r = n(73800),
    s = n(66546),
    a = n(399606),
    l = n(481060),
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
    x = n(275909),
    _ = n(300037),
    j = n(981631),
    E = n(474936),
    O = n(388032),
    C = n(238045);
function v(e) {
    let { guildTier: t, guildBoostSlot: n, showAltText: a, isCanceled: o, premiumSubscription: c, fractionalPremiumInfo: d } = e,
        u = r.useMemo(() => {
            if (o) {
                let e = c.currentPeriodEnd;
                return (c.isPausedForFractionalPremium && (e = d.endsAt.toDate()), O.intl.format(O.t.Z4ULRE, { date: e }));
            }
            let e = null != n.premiumGuildSubscription ? f.default.extractTimestamp(n.premiumGuildSubscription.id) : 0;
            return O.intl.formatToPlainString(O.t.lY2Bur, { date: new Date(e) });
        }, [n, o, c, d]),
        m = r.useMemo(
            () =>
                (function (e) {
                    if (null == e || e === j.Eu4.NONE) return '';
                    let t = [
                        O.intl.formatToPlainString(O.t.dLlKX1, { numEmojiSlots: E.HO[e].limits.emoji }),
                        O.intl.formatToPlainString(O.t['+ANIfn'], { numStickerSlots: E.HO[e].limits.stickers }),
                        O.intl.formatToPlainString(O.t['4gt60d'], { numSoundboardSlots: E.HO[e].limits.soundboardSounds }),
                        O.intl.formatToPlainString(O.t.XahSjY, {
                            resolution: E.HO[e].limits.screenShareQualityResolution,
                            framerate: E.HO[e].limits.screenShareQualityFramerate
                        }),
                        O.intl.formatToPlainString(O.t.NbNs7e, { bitrate: E.HO[e].limits.bitrate / 1000 }),
                        O.intl.formatToPlainString(O.t.VVKcpq, { filesize: E.HO[e].limits.fileSize / 1024 / 1024 }),
                        O.intl.formatToPlainString(O.t.TbpCvr, { numVideoStageSeats: E.HO[e].limits.stageVideoUsers }),
                        O.intl.string(O.t.LDyX3t),
                        O.intl.string(O.t.YtGlPT)
                    ];
                    (e >= j.Eu4.TIER_2 && (t.push(O.intl.string(O.t.SztbtL)), t.push(O.intl.string(O.t['3GK91t']))), e >= j.Eu4.TIER_3 && t.push(O.intl.string(O.t.XUUJd3)));
                    let n = t[Math.floor(Math.random() * t.length)];
                    return O.intl.format(O.t['/dOAmZ'], { perk: n });
                })(t),
            [t]
        ),
        p = (0, l.Yzy)(
            a,
            {
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 }
            },
            'animate-always'
        );
    return o || t === j.Eu4.NONE
        ? (0, i.jsx)('div', {
              className: C.boostDescriptionInnerContainer,
              children: (0, i.jsx)(l.Text, {
                  variant: 'text-sm/medium',
                  color: 'text-muted',
                  children: u
              })
          })
        : p((e, t) =>
              (0, i.jsx)(s.animated.div, {
                  style: e,
                  className: C.boostDescriptionInnerContainer,
                  children: (0, i.jsx)(l.Text, {
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
        _ = (0, a.e7)([p.default], () => p.default.getCurrentUser()),
        j = r.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n]),
        E = r.useMemo(() => null != j && j > new Date(), [j]),
        S = (0, g.tl)(n),
        T = (0, c.Z)(),
        N = r.useRef(null);
    return (0, i.jsxs)('div', {
        className: C.boostContainer,
        children: [
            (0, i.jsxs)('div', {
                className: C.boostInnerContainer,
                children: [
                    (0, i.jsx)(x.Z, {
                        isCanceled: S,
                        hasCooldown: E,
                        useReducedMotion: f
                    }),
                    (0, i.jsx)('div', {
                        className: C.boostDescriptionContainer,
                        children:
                            null != j && E && !S
                                ? (0, i.jsx)(b.Z, {
                                      className: C.boostDescriptionInnerContainer,
                                      cooldown: j.getTime()
                                  })
                                : (0, i.jsx)(v, {
                                      guildTier: t,
                                      guildBoostSlot: n,
                                      showAltText: m,
                                      isCanceled: S,
                                      premiumSubscription: s,
                                      fractionalPremiumInfo: T
                                  })
                    }),
                    (0, i.jsx)(l.yRy, {
                        targetElementRef: N,
                        renderPopout: function (e) {
                            let { closePopout: t } = e;
                            return (0, i.jsx)(d.Z, {
                                onClose: t,
                                guildBoostSlot: n,
                                premiumSubscription: s,
                                hasCancelableGuildBoostSlot: u,
                                fractionalState: T.fractionalState,
                                user: _
                            });
                        },
                        position: 'right',
                        align: 'center',
                        children: (e) => {
                            var t, n;
                            return (0, i.jsx)(
                                l.P3F,
                                ((t = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            i = Object.keys(n);
                                        ('function' == typeof Object.getOwnPropertySymbols &&
                                            (i = i.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                })
                                            )),
                                            i.forEach(function (t) {
                                                var i;
                                                ((i = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: i,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = i));
                                            }));
                                    }
                                    return e;
                                })({}, e)),
                                (n = n =
                                    {
                                        innerRef: N,
                                        'aria-label': O.intl.string(O.t.PdRCRk),
                                        className: C.boostSlotMenuIcon,
                                        children: (0, i.jsx)(l.Huf, {
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
            !h && (0, i.jsx)('div', { className: C.boostContainerSeparator })
        ]
    });
}
function T(e) {
    let { guildId: t, guildBoostSlotRecords: n, premiumSubscription: r, hasCancelableGuildBoostSlot: s, showAltText: l } = e,
        o = (0, a.e7)([m.Z], () => m.Z.getGuild(t), [t]);
    return (0, i.jsxs)('div', {
        className: C.appliedBoostContainer,
        children: [
            (0, i.jsx)(_.Z, {
                guildId: t,
                boostingVariant: !1
            }),
            n.map((e, t) =>
                (0, i.jsx)(
                    S,
                    {
                        guildTier: null == o ? void 0 : o.premiumTier,
                        guildBoostSlot: e,
                        premiumSubscription: r,
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
function N(e) {
    let { guildId: t, appliedGuildBoosts: n, premiumSubscription: r } = e,
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
            subscription_id: r.id,
            canceled: !1,
            premium_guild_subscription: {
                id: l,
                guild_id: t
            },
            cooldown_ends_at: null
        },
        r
    );
    return (0, i.jsxs)('div', {
        className: C.appliedBoostContainer,
        children: [
            (0, i.jsx)(_.Z, {
                guildId: t,
                boostingVariant: !1
            }),
            n.map((e, t) =>
                (0, i.jsx)(
                    S,
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
                    (n in e || (e[n] = []), e[n].push(t));
                }),
                e
            );
        }, [t]);
    return null == n || 0 === t.length
        ? null
        : (0, i.jsxs)('div', {
              className: C.wrapper,
              children: [
                  (0, i.jsx)('div', {
                      className: C.container,
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
                  (0, i.jsx)('div', { className: C.mainSeparator })
              ]
          });
}
function y(e) {
    let { guildBoostSlots: t, premiumSubscription: n } = e,
        [s, a] = r.useState(!1);
    r.useEffect(() => {
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
    let { boostsByGuildId: l, numActiveGuildBoostSlots: o } = r.useMemo(() => {
        let e = 0,
            n = {};
        return (
            Object.keys(t).forEach((i) => {
                let r = t[i];
                if ((!(0, g.tl)(r) && e++, null != r.premiumGuildSubscription)) {
                    let e = r.premiumGuildSubscription.guildId;
                    (e in n || (n[e] = []), n[e].push(r));
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
    return (0, i.jsxs)('div', {
        className: C.wrapper,
        children: [
            (0, i.jsx)('div', {
                className: C.container,
                children: f.default.keys(l).map((e) =>
                    (0, i.jsx)(
                        T,
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
            (0, i.jsx)('div', { className: C.mainSeparator })
        ]
    });
}

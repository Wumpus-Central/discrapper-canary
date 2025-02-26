n.d(t, {
    Z: () => I,
    r: () => T
}),
    n(653041),
    n(47120);
var r = n(200651),
    i = n(192379),
    s = n(642128),
    a = n(399606),
    l = n(481060),
    o = n(607070),
    c = n(975298),
    d = n(280942),
    u = n(209747),
    m = n(430824),
    g = n(267642),
    p = n(74538),
    h = n(709054),
    f = n(357956),
    b = n(275909),
    N = n(300037),
    x = n(981631),
    _ = n(474936),
    E = n(388032),
    j = n(33868);
function C(e) {
    let { guildTier: t, guildBoostSlot: n, showAltText: a, isCanceled: o, premiumSubscription: c } = e,
        d = i.useMemo(() => {
            if (o) return E.NW.format(E.t.Z4ULRE, { date: c.currentPeriodEnd });
            let e = null != n.premiumGuildSubscription ? h.default.extractTimestamp(n.premiumGuildSubscription.id) : 0;
            return E.NW.formatToPlainString(E.t.lY2Bur, { date: new Date(e) });
        }, [n, o, c]),
        u = i.useMemo(
            () =>
                (function (e) {
                    if (null == e || e === x.Eu4.NONE) return '';
                    let t = [
                        E.NW.formatToPlainString(E.t.dLlKX1, { numEmojiSlots: _.HO[e].limits.emoji }),
                        E.NW.formatToPlainString(E.t['+ANIfn'], { numStickerSlots: _.HO[e].limits.stickers }),
                        E.NW.formatToPlainString(E.t['4gt60d'], { numSoundboardSlots: _.HO[e].limits.soundboardSounds }),
                        E.NW.formatToPlainString(E.t.XahSjY, {
                            resolution: _.HO[e].limits.screenShareQualityResolution,
                            framerate: _.HO[e].limits.screenShareQualityFramerate
                        }),
                        E.NW.formatToPlainString(E.t.NbNs7e, { bitrate: _.HO[e].limits.bitrate / 1000 }),
                        E.NW.formatToPlainString(E.t.VVKcpq, { filesize: _.HO[e].limits.fileSize / 1024 / 1024 }),
                        E.NW.formatToPlainString(E.t.TbpCvr, { numVideoStageSeats: _.HO[e].limits.stageVideoUsers }),
                        E.NW.string(E.t.LDyX3t),
                        E.NW.string(E.t.YtGlPT)
                    ];
                    e >= x.Eu4.TIER_2 && (t.push(E.NW.string(E.t.SztbtL)), t.push(E.NW.string(E.t['3GK91t']))), e >= x.Eu4.TIER_3 && t.push(E.NW.string(E.t.XUUJd3));
                    let n = t[Math.floor(Math.random() * t.length)];
                    return E.NW.format(E.t['/dOAmZ'], { perk: n });
                })(t),
            [t]
        ),
        m = (0, l.Yzy)(
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
              className: j.boostDescriptionInnerContainer,
              children: (0, r.jsx)(l.Text, {
                  variant: 'text-sm/medium',
                  color: 'text-muted',
                  children: d
              })
          })
        : m((e, t) =>
              (0, r.jsx)(s.animated.div, {
                  style: e,
                  className: j.boostDescriptionInnerContainer,
                  children: (0, r.jsx)(l.Text, {
                      variant: 'text-sm/medium',
                      color: 'text-muted',
                      children: t ? u : d
                  })
              })
          );
}
function O(e) {
    let { guildTier: t, guildBoostSlot: n, premiumSubscription: s, hasCancelableGuildBoostSlot: u, showAltText: m, isLastGuildBoostSlot: p } = e,
        h = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
        N = i.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n]),
        x = i.useMemo(() => null != N && N > new Date(), [N]),
        _ = (0, g.tl)(n),
        { fractionalState: O } = (0, c.Z)();
    return (0, r.jsxs)('div', {
        className: j.boostContainer,
        children: [
            (0, r.jsxs)('div', {
                className: j.boostInnerContainer,
                children: [
                    (0, r.jsx)(b.Z, {
                        isCanceled: _,
                        hasCooldown: x,
                        useReducedMotion: h
                    }),
                    (0, r.jsx)('div', {
                        className: j.boostDescriptionContainer,
                        children:
                            null != N && x && !_
                                ? (0, r.jsx)(f.Z, {
                                      className: j.boostDescriptionInnerContainer,
                                      cooldown: N.getTime()
                                  })
                                : (0, r.jsx)(C, {
                                      guildTier: t,
                                      guildBoostSlot: n,
                                      showAltText: m,
                                      isCanceled: _,
                                      premiumSubscription: s
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
                                fractionalState: O
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
                                        'aria-label': E.NW.string(E.t.PdRCRk),
                                        className: j.boostSlotMenuIcon,
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
            !p && (0, r.jsx)('div', { className: j.boostContainerSeparator })
        ]
    });
}
function v(e) {
    let { guildId: t, guildBoostSlotRecords: n, premiumSubscription: i, hasCancelableGuildBoostSlot: s, showAltText: l } = e,
        o = (0, a.e7)([m.Z], () => m.Z.getGuild(t), [t]);
    return (0, r.jsxs)('div', {
        className: j.appliedBoostContainer,
        children: [
            (0, r.jsx)(N.Z, {
                guildId: t,
                boostingVariant: !1
            }),
            n.map((e, t) =>
                (0, r.jsx)(
                    O,
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
function S(e) {
    let { guildId: t, appliedGuildBoosts: n, premiumSubscription: i } = e,
        s = (0, a.e7)([m.Z], () => m.Z.getGuild(t), [t]),
        l = h.default.fromTimestamp(Date.now());
    if (
        (n.forEach((e) => {
            (null == l || 0 > h.default.compare(e.id, l)) && (l = e.id);
        }),
        null == l)
    )
        return null;
    let o = u.Z.createFromServer(
        {
            id: h.default.fromTimestamp(Date.now()),
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
        className: j.appliedBoostContainer,
        children: [
            (0, r.jsx)(N.Z, {
                guildId: t,
                boostingVariant: !1
            }),
            n.map((e, t) =>
                (0, r.jsx)(
                    O,
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
function T(e) {
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
              className: j.wrapper,
              children: [
                  (0, r.jsx)('div', {
                      className: j.container,
                      children: h.default.keys(s).map((e) =>
                          (0, r.jsx)(
                              S,
                              {
                                  guildId: e,
                                  premiumSubscription: n,
                                  appliedGuildBoosts: s[e]
                              },
                              e
                          )
                      )
                  }),
                  (0, r.jsx)('div', { className: j.mainSeparator })
              ]
          });
}
function I(e) {
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
                if ((!(0, g.tl)(i) && e++, null != i.premiumGuildSubscription)) {
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
    let c = o > p.ZP.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, r.jsxs)('div', {
        className: j.wrapper,
        children: [
            (0, r.jsx)('div', {
                className: j.container,
                children: h.default.keys(l).map((e) =>
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
            (0, r.jsx)('div', { className: j.mainSeparator })
        ]
    });
}

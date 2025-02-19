n.d(t, {
    Z: () => y,
    r: () => I
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
    d = n(158153),
    u = n(280942),
    m = n(314684),
    g = n(209747),
    p = n(430824),
    h = n(267642),
    f = n(709054),
    N = n(357956),
    x = n(275909),
    b = n(300037),
    _ = n(981631),
    E = n(474936),
    j = n(388032),
    C = n(33868);
function O(e) {
    let { guildTier: t, guildBoostSlot: n, showAltText: a, isCanceled: o, premiumSubscription: c } = e,
        d = i.useMemo(() => {
            if (o) return j.NW.format(j.t.Z4ULRE, { date: c.currentPeriodEnd });
            let e = null != n.premiumGuildSubscription ? f.default.extractTimestamp(n.premiumGuildSubscription.id) : 0;
            return j.NW.formatToPlainString(j.t.lY2Bur, { date: new Date(e) });
        }, [n, o, c]),
        u = i.useMemo(
            () =>
                (function (e) {
                    if (null == e || e === _.Eu4.NONE) return '';
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
                    e >= _.Eu4.TIER_2 && (t.push(j.NW.string(j.t.SztbtL)), t.push(j.NW.string(j.t['3GK91t']))), e >= _.Eu4.TIER_3 && t.push(j.NW.string(j.t.XUUJd3));
                    let n = t[Math.floor(Math.random() * t.length)];
                    return j.NW.format(j.t['/dOAmZ'], { perk: n });
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
    return o || t === _.Eu4.NONE
        ? (0, r.jsx)('div', {
              className: C.boostDescriptionInnerContainer,
              children: (0, r.jsx)(l.Text, {
                  variant: 'text-sm/medium',
                  color: 'text-muted',
                  children: d
              })
          })
        : m((e, t) =>
              (0, r.jsx)(s.animated.div, {
                  style: e,
                  className: C.boostDescriptionInnerContainer,
                  children: (0, r.jsx)(l.Text, {
                      variant: 'text-sm/medium',
                      color: 'text-muted',
                      children: t ? u : d
                  })
              })
          );
}
function v(e) {
    let { guildTier: t, guildBoostSlot: n, premiumSubscription: s, hasCancelableGuildBoostSlot: d, showAltText: m, isLastGuildBoostSlot: g } = e,
        p = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
        f = i.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n]),
        b = i.useMemo(() => null != f && f > new Date(), [f]),
        _ = (0, h.tl)(n),
        { fractionalState: E } = (0, c.Z)();
    return (0, r.jsxs)('div', {
        className: C.boostContainer,
        children: [
            (0, r.jsxs)('div', {
                className: C.boostInnerContainer,
                children: [
                    (0, r.jsx)(x.Z, {
                        isCanceled: _,
                        hasCooldown: b,
                        useReducedMotion: p
                    }),
                    (0, r.jsx)('div', {
                        className: C.boostDescriptionContainer,
                        children:
                            null != f && b && !_
                                ? (0, r.jsx)(N.Z, {
                                      className: C.boostDescriptionInnerContainer,
                                      cooldown: f.getTime()
                                  })
                                : (0, r.jsx)(O, {
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
                            return (0, r.jsx)(u.Z, {
                                onClose: t,
                                guildBoostSlot: n,
                                premiumSubscription: s,
                                hasCancelableGuildBoostSlot: d,
                                fractionalState: E
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
            !g && (0, r.jsx)('div', { className: C.boostContainerSeparator })
        ]
    });
}
function S(e) {
    let { guildId: t, guildBoostSlotRecords: n, premiumSubscription: i, hasCancelableGuildBoostSlot: s, showAltText: l } = e,
        o = (0, a.e7)([p.Z], () => p.Z.getGuild(t), [t]);
    return (0, r.jsxs)('div', {
        className: C.appliedBoostContainer,
        children: [
            (0, r.jsx)(b.Z, {
                guildId: t,
                boostingVariant: !1
            }),
            n.map((e, t) =>
                (0, r.jsx)(
                    v,
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
        s = (0, a.e7)([p.Z], () => p.Z.getGuild(t), [t]),
        l = f.default.fromTimestamp(Date.now());
    if (
        (n.forEach((e) => {
            (null == l || 0 > f.default.compare(e.id, l)) && (l = e.id);
        }),
        null == l)
    )
        return null;
    let o = g.Z.createFromServer(
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
            (0, r.jsx)(b.Z, {
                guildId: t,
                boostingVariant: !1
            }),
            n.map((e, t) =>
                (0, r.jsx)(
                    v,
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
        [s, a] = i.useState(!1),
        l = (0, m.Vp)();
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
    let { boostsByGuildId: o, numActiveGuildBoostSlots: c } = i.useMemo(() => {
        let e = 0,
            n = {};
        return (
            Object.keys(t).forEach((r) => {
                let i = t[r];
                if ((!(0, h.tl)(i) && e++, null != i.premiumGuildSubscription)) {
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
    if (null == n || 0 === Object.keys(o).length) return null;
    let u = c > (0, d.G)(n, l);
    return (0, r.jsxs)('div', {
        className: C.wrapper,
        children: [
            (0, r.jsx)('div', {
                className: C.container,
                children: f.default.keys(o).map((e) =>
                    (0, r.jsx)(
                        S,
                        {
                            guildId: e,
                            guildBoostSlotRecords: o[e],
                            premiumSubscription: n,
                            hasCancelableGuildBoostSlot: u,
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

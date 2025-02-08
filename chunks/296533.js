n.d(t, {
    Z: () => O,
    r: () => A
}),
    n(653041),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(642128),
    l = n(399606),
    a = n(481060),
    o = n(607070),
    c = n(975298),
    d = n(158153),
    u = n(280942),
    m = n(314684),
    g = n(209747),
    h = n(430824),
    x = n(267642),
    _ = n(709054),
    p = n(357956),
    E = n(275909),
    C = n(300037),
    f = n(981631),
    T = n(474936),
    N = n(388032),
    I = n(525530);
function S(e) {
    let { guildTier: t, guildBoostSlot: n, showAltText: l, isCanceled: o, premiumSubscription: c } = e,
        d = s.useMemo(() => {
            if (o) return N.intl.format(N.t.Z4ULRE, { date: c.currentPeriodEnd });
            let e = null != n.premiumGuildSubscription ? _.default.extractTimestamp(n.premiumGuildSubscription.id) : 0;
            return N.intl.formatToPlainString(N.t.lY2Bur, { date: new Date(e) });
        }, [n, o, c]),
        u = s.useMemo(
            () =>
                (function (e) {
                    if (null == e || e === f.Eu4.NONE) return '';
                    let t = [
                        N.intl.formatToPlainString(N.t.dLlKX1, { numEmojiSlots: T.HO[e].limits.emoji }),
                        N.intl.formatToPlainString(N.t['+ANIfn'], { numStickerSlots: T.HO[e].limits.stickers }),
                        N.intl.formatToPlainString(N.t['4gt60d'], { numSoundboardSlots: T.HO[e].limits.soundboardSounds }),
                        N.intl.formatToPlainString(N.t.XahSjY, {
                            resolution: T.HO[e].limits.screenShareQualityResolution,
                            framerate: T.HO[e].limits.screenShareQualityFramerate
                        }),
                        N.intl.formatToPlainString(N.t.NbNs7e, { bitrate: T.HO[e].limits.bitrate / 1000 }),
                        N.intl.formatToPlainString(N.t.VVKcpq, { filesize: T.HO[e].limits.fileSize / 1024 / 1024 }),
                        N.intl.formatToPlainString(N.t.TbpCvr, { numVideoStageSeats: T.HO[e].limits.stageVideoUsers }),
                        N.intl.string(N.t.LDyX3t),
                        N.intl.string(N.t.YtGlPT)
                    ];
                    e >= f.Eu4.TIER_2 && (t.push(N.intl.string(N.t.SztbtL)), t.push(N.intl.string(N.t['3GK91t']))), e >= f.Eu4.TIER_3 && t.push(N.intl.string(N.t.XUUJd3));
                    let n = t[Math.floor(Math.random() * t.length)];
                    return N.intl.format(N.t['/dOAmZ'], { perk: n });
                })(t),
            [t]
        ),
        m = (0, a.Yzy)(
            l,
            {
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 }
            },
            'animate-always'
        );
    return o || t === f.Eu4.NONE
        ? (0, i.jsx)('div', {
              className: I.boostDescriptionInnerContainer,
              children: (0, i.jsx)(a.Text, {
                  variant: 'text-sm/medium',
                  color: 'text-muted',
                  children: d
              })
          })
        : m((e, t) =>
              (0, i.jsx)(r.animated.div, {
                  style: e,
                  className: I.boostDescriptionInnerContainer,
                  children: (0, i.jsx)(a.Text, {
                      variant: 'text-sm/medium',
                      color: 'text-muted',
                      children: t ? u : d
                  })
              })
          );
}
function b(e) {
    let { guildTier: t, guildBoostSlot: n, premiumSubscription: r, hasCancelableGuildBoostSlot: d, showAltText: m, isLastGuildBoostSlot: g } = e,
        h = (0, l.e7)([o.Z], () => o.Z.useReducedMotion),
        _ = s.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n]),
        C = s.useMemo(() => null != _ && _ > new Date(), [_]),
        f = (0, x.tl)(n),
        { fractionalState: T } = (0, c.Z)();
    return (0, i.jsxs)('div', {
        className: I.boostContainer,
        children: [
            (0, i.jsxs)('div', {
                className: I.boostInnerContainer,
                children: [
                    (0, i.jsx)(E.Z, {
                        isCanceled: f,
                        hasCooldown: C,
                        useReducedMotion: h
                    }),
                    (0, i.jsx)('div', {
                        className: I.boostDescriptionContainer,
                        children:
                            null != _ && C && !f
                                ? (0, i.jsx)(p.Z, {
                                      className: I.boostDescriptionInnerContainer,
                                      cooldown: _.getTime()
                                  })
                                : (0, i.jsx)(S, {
                                      guildTier: t,
                                      guildBoostSlot: n,
                                      showAltText: m,
                                      isCanceled: f,
                                      premiumSubscription: r
                                  })
                    }),
                    (0, i.jsx)(a.yRy, {
                        renderPopout: function (e) {
                            let { closePopout: t } = e;
                            return (0, i.jsx)(u.Z, {
                                onClose: t,
                                guildBoostSlot: n,
                                premiumSubscription: r,
                                hasCancelableGuildBoostSlot: d,
                                fractionalState: T
                            });
                        },
                        position: 'right',
                        align: 'center',
                        children: (e) =>
                            (0, i.jsx)(a.P3F, {
                                ...e,
                                'aria-label': N.intl.string(N.t.PdRCRk),
                                className: I.boostSlotMenuIcon,
                                children: (0, i.jsx)(a.Huf, {
                                    size: 'md',
                                    color: 'currentColor'
                                })
                            })
                    })
                ]
            }),
            !g && (0, i.jsx)('div', { className: I.boostContainerSeparator })
        ]
    });
}
function v(e) {
    let { guildId: t, guildBoostSlotRecords: n, premiumSubscription: s, hasCancelableGuildBoostSlot: r, showAltText: a } = e,
        o = (0, l.e7)([h.Z], () => h.Z.getGuild(t), [t]);
    return (0, i.jsxs)('div', {
        className: I.appliedBoostContainer,
        children: [
            (0, i.jsx)(C.Z, {
                guildId: t,
                boostingVariant: !1
            }),
            n.map((e, t) =>
                (0, i.jsx)(
                    b,
                    {
                        guildTier: null == o ? void 0 : o.premiumTier,
                        guildBoostSlot: e,
                        premiumSubscription: s,
                        hasCancelableGuildBoostSlot: r,
                        showAltText: a,
                        isLastGuildBoostSlot: t === n.length - 1
                    },
                    e.id
                )
            )
        ]
    });
}
function j(e) {
    let { guildId: t, appliedGuildBoosts: n, premiumSubscription: s } = e,
        r = (0, l.e7)([h.Z], () => h.Z.getGuild(t), [t]),
        a = _.default.fromTimestamp(Date.now());
    if (
        (n.forEach((e) => {
            (null == a || 0 > _.default.compare(e.id, a)) && (a = e.id);
        }),
        null == a)
    )
        return null;
    let o = g.Z.createFromServer(
        {
            id: _.default.fromTimestamp(Date.now()),
            subscription_id: s.id,
            canceled: !1,
            premium_guild_subscription: {
                id: a,
                guild_id: t
            },
            cooldown_ends_at: null
        },
        s
    );
    return (0, i.jsxs)('div', {
        className: I.appliedBoostContainer,
        children: [
            (0, i.jsx)(C.Z, {
                guildId: t,
                boostingVariant: !1
            }),
            n.map((e, t) =>
                (0, i.jsx)(
                    b,
                    {
                        guildTier: null == r ? void 0 : r.premiumTier,
                        guildBoostSlot: o,
                        premiumSubscription: s,
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
function A(e) {
    let { appliedGuildBoosts: t, premiumSubscription: n } = e,
        r = s.useMemo(() => {
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
              className: I.wrapper,
              children: [
                  (0, i.jsx)('div', {
                      className: I.container,
                      children: _.default.keys(r).map((e) =>
                          (0, i.jsx)(
                              j,
                              {
                                  guildId: e,
                                  premiumSubscription: n,
                                  appliedGuildBoosts: r[e]
                              },
                              e
                          )
                      )
                  }),
                  (0, i.jsx)('div', { className: I.mainSeparator })
              ]
          });
}
function O(e) {
    let { guildBoostSlots: t, premiumSubscription: n } = e,
        [r, l] = s.useState(!1),
        a = (0, m.Vp)();
    s.useEffect(() => {
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
    let { boostsByGuildId: o, numActiveGuildBoostSlots: c } = s.useMemo(() => {
        let e = 0,
            n = {};
        return (
            Object.keys(t).forEach((i) => {
                let s = t[i];
                if ((!(0, x.tl)(s) && e++, null != s.premiumGuildSubscription)) {
                    let e = s.premiumGuildSubscription.guildId;
                    e in n || (n[e] = []), n[e].push(s);
                }
            }),
            {
                boostsByGuildId: n,
                numActiveGuildBoostSlots: e
            }
        );
    }, [t]);
    if (null == n || 0 === Object.keys(o).length) return null;
    let u = c > (0, d.G)(n, a);
    return (0, i.jsxs)('div', {
        className: I.wrapper,
        children: [
            (0, i.jsx)('div', {
                className: I.container,
                children: _.default.keys(o).map((e) =>
                    (0, i.jsx)(
                        v,
                        {
                            guildId: e,
                            guildBoostSlotRecords: o[e],
                            premiumSubscription: n,
                            hasCancelableGuildBoostSlot: u,
                            showAltText: r
                        },
                        e
                    )
                )
            }),
            (0, i.jsx)('div', { className: I.mainSeparator })
        ]
    });
}

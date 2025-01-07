n.d(t, {
    Z: function () {
        return O;
    },
    r: function () {
        return j;
    }
}),
    n(653041),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(666912),
    l = n(399606),
    a = n(481060),
    o = n(607070),
    c = n(975298),
    d = n(158153),
    u = n(280942),
    m = n(314684),
    h = n(209747),
    g = n(430824),
    p = n(267642),
    x = n(709054),
    S = n(357956),
    T = n(275909),
    E = n(300037),
    C = n(981631),
    _ = n(474936),
    f = n(388032),
    I = n(525530);
function N(e) {
    let { guildTier: t, guildBoostSlot: n, showAltText: l, isCanceled: o, premiumSubscription: c } = e,
        d = s.useMemo(() => {
            if (o) return f.intl.format(f.t.Z4ULRE, { date: c.currentPeriodEnd });
            let e = null != n.premiumGuildSubscription ? x.default.extractTimestamp(n.premiumGuildSubscription.id) : 0;
            return f.intl.formatToPlainString(f.t.lY2Bur, { date: new Date(e) });
        }, [n, o, c]),
        u = s.useMemo(
            () =>
                (function (e) {
                    if (null == e || e === C.Eu4.NONE) return '';
                    let t = [
                        f.intl.formatToPlainString(f.t.dLlKX1, { numEmojiSlots: _.HO[e].limits.emoji }),
                        f.intl.formatToPlainString(f.t['+ANIfn'], { numStickerSlots: _.HO[e].limits.stickers }),
                        f.intl.formatToPlainString(f.t['4gt60d'], { numSoundboardSlots: _.HO[e].limits.soundboardSounds }),
                        f.intl.formatToPlainString(f.t.XahSjY, {
                            resolution: _.HO[e].limits.screenShareQualityResolution,
                            framerate: _.HO[e].limits.screenShareQualityFramerate
                        }),
                        f.intl.formatToPlainString(f.t.NbNs7e, { bitrate: _.HO[e].limits.bitrate / 1000 }),
                        f.intl.formatToPlainString(f.t.VVKcpq, { filesize: _.HO[e].limits.fileSize / 1024 / 1024 }),
                        f.intl.formatToPlainString(f.t.TbpCvr, { numVideoStageSeats: _.HO[e].limits.stageVideoUsers }),
                        f.intl.string(f.t.LDyX3t),
                        f.intl.string(f.t.YtGlPT)
                    ];
                    e >= C.Eu4.TIER_2 && (t.push(f.intl.string(f.t.SztbtL)), t.push(f.intl.string(f.t['3GK91t']))), e >= C.Eu4.TIER_3 && t.push(f.intl.string(f.t.XUUJd3));
                    let n = t[Math.floor(Math.random() * t.length)];
                    return f.intl.format(f.t['/dOAmZ'], { perk: n });
                })(t),
            [t]
        ),
        m = (0, a.useTransition)(
            l,
            {
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 }
            },
            'animate-always'
        );
    return o || t === C.Eu4.NONE
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
function A(e) {
    let { guildTier: t, guildBoostSlot: n, premiumSubscription: r, hasCancelableGuildBoostSlot: d, showAltText: m, isLastGuildBoostSlot: h } = e,
        g = (0, l.e7)([o.Z], () => o.Z.useReducedMotion),
        x = s.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n]),
        E = s.useMemo(() => null != x && x > new Date(), [x]),
        C = (0, p.tl)(n),
        { fractionalState: _ } = (0, c.Z)();
    return (0, i.jsxs)('div', {
        className: I.boostContainer,
        children: [
            (0, i.jsxs)('div', {
                className: I.boostInnerContainer,
                children: [
                    (0, i.jsx)(T.Z, {
                        isCanceled: C,
                        hasCooldown: E,
                        useReducedMotion: g
                    }),
                    (0, i.jsx)('div', {
                        className: I.boostDescriptionContainer,
                        children:
                            null != x && E && !C
                                ? (0, i.jsx)(S.Z, {
                                      className: I.boostDescriptionInnerContainer,
                                      cooldown: x.getTime()
                                  })
                                : (0, i.jsx)(N, {
                                      guildTier: t,
                                      guildBoostSlot: n,
                                      showAltText: m,
                                      isCanceled: C,
                                      premiumSubscription: r
                                  })
                    }),
                    (0, i.jsx)(a.Popout, {
                        renderPopout: function (e) {
                            let { closePopout: t } = e;
                            return (0, i.jsx)(u.Z, {
                                onClose: t,
                                guildBoostSlot: n,
                                premiumSubscription: r,
                                hasCancelableGuildBoostSlot: d,
                                fractionalState: _
                            });
                        },
                        position: 'right',
                        align: 'center',
                        children: (e) =>
                            (0, i.jsx)(a.Clickable, {
                                ...e,
                                'aria-label': f.intl.string(f.t.PdRCRk),
                                className: I.boostSlotMenuIcon,
                                children: (0, i.jsx)(a.MoreVerticalIcon, {
                                    size: 'md',
                                    color: 'currentColor'
                                })
                            })
                    })
                ]
            }),
            !h && (0, i.jsx)('div', { className: I.boostContainerSeparator })
        ]
    });
}
function b(e) {
    let { guildId: t, guildBoostSlotRecords: n, premiumSubscription: s, hasCancelableGuildBoostSlot: r, showAltText: a } = e,
        o = (0, l.e7)([g.Z], () => g.Z.getGuild(t), [t]);
    return (0, i.jsxs)('div', {
        className: I.appliedBoostContainer,
        children: [
            (0, i.jsx)(E.Z, {
                guildId: t,
                boostingVariant: !1
            }),
            n.map((e, t) =>
                (0, i.jsx)(
                    A,
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
function v(e) {
    let { guildId: t, appliedGuildBoosts: n, premiumSubscription: s } = e,
        r = (0, l.e7)([g.Z], () => g.Z.getGuild(t), [t]),
        a = x.default.fromTimestamp(Date.now());
    if (
        (n.forEach((e) => {
            (null == a || 0 > x.default.compare(e.id, a)) && (a = e.id);
        }),
        null == a)
    )
        return null;
    let o = h.Z.createFromServer(
        {
            id: x.default.fromTimestamp(Date.now()),
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
            (0, i.jsx)(E.Z, {
                guildId: t,
                boostingVariant: !1
            }),
            n.map((e, t) =>
                (0, i.jsx)(
                    A,
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
function j(e) {
    let { appliedGuildBoosts: t, premiumSubscription: n } = e,
        r = s.useMemo(() => {
            let e = {};
            return (
                t.forEach((t) => {
                    let n = t.guildId;
                    !(n in e) && (e[n] = []), e[n].push(t);
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
                      children: x.default.keys(r).map((e) =>
                          (0, i.jsx)(
                              v,
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
                if ((!(0, p.tl)(s) && e++, null != s.premiumGuildSubscription)) {
                    let e = s.premiumGuildSubscription.guildId;
                    !(e in n) && (n[e] = []), n[e].push(s);
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
                children: x.default.keys(o).map((e) =>
                    (0, i.jsx)(
                        b,
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

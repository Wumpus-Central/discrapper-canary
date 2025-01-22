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
    r = n(192379),
    s = n(642128),
    a = n(399606),
    l = n(481060),
    o = n(607070),
    c = n(975298),
    d = n(158153),
    u = n(280942),
    m = n(314684),
    g = n(209747),
    h = n(430824),
    p = n(267642),
    x = n(709054),
    f = n(357956),
    E = n(275909),
    _ = n(300037),
    C = n(981631),
    T = n(474936),
    S = n(388032),
    b = n(525530);
function I(e) {
    let { guildTier: t, guildBoostSlot: n, showAltText: a, isCanceled: o, premiumSubscription: c } = e,
        d = r.useMemo(() => {
            if (o) return S.intl.format(S.t.Z4ULRE, { date: c.currentPeriodEnd });
            let e = null != n.premiumGuildSubscription ? x.default.extractTimestamp(n.premiumGuildSubscription.id) : 0;
            return S.intl.formatToPlainString(S.t.lY2Bur, { date: new Date(e) });
        }, [n, o, c]),
        u = r.useMemo(
            () =>
                (function (e) {
                    if (null == e || e === C.Eu4.NONE) return '';
                    let t = [
                        S.intl.formatToPlainString(S.t.dLlKX1, { numEmojiSlots: T.HO[e].limits.emoji }),
                        S.intl.formatToPlainString(S.t['+ANIfn'], { numStickerSlots: T.HO[e].limits.stickers }),
                        S.intl.formatToPlainString(S.t['4gt60d'], { numSoundboardSlots: T.HO[e].limits.soundboardSounds }),
                        S.intl.formatToPlainString(S.t.XahSjY, {
                            resolution: T.HO[e].limits.screenShareQualityResolution,
                            framerate: T.HO[e].limits.screenShareQualityFramerate
                        }),
                        S.intl.formatToPlainString(S.t.NbNs7e, { bitrate: T.HO[e].limits.bitrate / 1000 }),
                        S.intl.formatToPlainString(S.t.VVKcpq, { filesize: T.HO[e].limits.fileSize / 1024 / 1024 }),
                        S.intl.formatToPlainString(S.t.TbpCvr, { numVideoStageSeats: T.HO[e].limits.stageVideoUsers }),
                        S.intl.string(S.t.LDyX3t),
                        S.intl.string(S.t.YtGlPT)
                    ];
                    e >= C.Eu4.TIER_2 && (t.push(S.intl.string(S.t.SztbtL)), t.push(S.intl.string(S.t['3GK91t']))), e >= C.Eu4.TIER_3 && t.push(S.intl.string(S.t.XUUJd3));
                    let n = t[Math.floor(Math.random() * t.length)];
                    return S.intl.format(S.t['/dOAmZ'], { perk: n });
                })(t),
            [t]
        ),
        m = (0, l.useTransition)(
            a,
            {
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 }
            },
            'animate-always'
        );
    return o || t === C.Eu4.NONE
        ? (0, i.jsx)('div', {
              className: b.boostDescriptionInnerContainer,
              children: (0, i.jsx)(l.Text, {
                  variant: 'text-sm/medium',
                  color: 'text-muted',
                  children: d
              })
          })
        : m((e, t) =>
              (0, i.jsx)(s.animated.div, {
                  style: e,
                  className: b.boostDescriptionInnerContainer,
                  children: (0, i.jsx)(l.Text, {
                      variant: 'text-sm/medium',
                      color: 'text-muted',
                      children: t ? u : d
                  })
              })
          );
}
function N(e) {
    let { guildTier: t, guildBoostSlot: n, premiumSubscription: s, hasCancelableGuildBoostSlot: d, showAltText: m, isLastGuildBoostSlot: g } = e,
        h = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
        x = r.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n]),
        _ = r.useMemo(() => null != x && x > new Date(), [x]),
        C = (0, p.tl)(n),
        { fractionalState: T } = (0, c.Z)();
    return (0, i.jsxs)('div', {
        className: b.boostContainer,
        children: [
            (0, i.jsxs)('div', {
                className: b.boostInnerContainer,
                children: [
                    (0, i.jsx)(E.Z, {
                        isCanceled: C,
                        hasCooldown: _,
                        useReducedMotion: h
                    }),
                    (0, i.jsx)('div', {
                        className: b.boostDescriptionContainer,
                        children:
                            null != x && _ && !C
                                ? (0, i.jsx)(f.Z, {
                                      className: b.boostDescriptionInnerContainer,
                                      cooldown: x.getTime()
                                  })
                                : (0, i.jsx)(I, {
                                      guildTier: t,
                                      guildBoostSlot: n,
                                      showAltText: m,
                                      isCanceled: C,
                                      premiumSubscription: s
                                  })
                    }),
                    (0, i.jsx)(l.Popout, {
                        renderPopout: function (e) {
                            let { closePopout: t } = e;
                            return (0, i.jsx)(u.Z, {
                                onClose: t,
                                guildBoostSlot: n,
                                premiumSubscription: s,
                                hasCancelableGuildBoostSlot: d,
                                fractionalState: T
                            });
                        },
                        position: 'right',
                        align: 'center',
                        children: (e) =>
                            (0, i.jsx)(l.Clickable, {
                                ...e,
                                'aria-label': S.intl.string(S.t.PdRCRk),
                                className: b.boostSlotMenuIcon,
                                children: (0, i.jsx)(l.MoreVerticalIcon, {
                                    size: 'md',
                                    color: 'currentColor'
                                })
                            })
                    })
                ]
            }),
            !g && (0, i.jsx)('div', { className: b.boostContainerSeparator })
        ]
    });
}
function v(e) {
    let { guildId: t, guildBoostSlotRecords: n, premiumSubscription: r, hasCancelableGuildBoostSlot: s, showAltText: l } = e,
        o = (0, a.e7)([h.Z], () => h.Z.getGuild(t), [t]);
    return (0, i.jsxs)('div', {
        className: b.appliedBoostContainer,
        children: [
            (0, i.jsx)(_.Z, {
                guildId: t,
                boostingVariant: !1
            }),
            n.map((e, t) =>
                (0, i.jsx)(
                    N,
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
function A(e) {
    let { guildId: t, appliedGuildBoosts: n, premiumSubscription: r } = e,
        s = (0, a.e7)([h.Z], () => h.Z.getGuild(t), [t]),
        l = x.default.fromTimestamp(Date.now());
    if (
        (n.forEach((e) => {
            (null == l || 0 > x.default.compare(e.id, l)) && (l = e.id);
        }),
        null == l)
    )
        return null;
    let o = g.Z.createFromServer(
        {
            id: x.default.fromTimestamp(Date.now()),
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
        className: b.appliedBoostContainer,
        children: [
            (0, i.jsx)(_.Z, {
                guildId: t,
                boostingVariant: !1
            }),
            n.map((e, t) =>
                (0, i.jsx)(
                    N,
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
function j(e) {
    let { appliedGuildBoosts: t, premiumSubscription: n } = e,
        s = r.useMemo(() => {
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
              className: b.wrapper,
              children: [
                  (0, i.jsx)('div', {
                      className: b.container,
                      children: x.default.keys(s).map((e) =>
                          (0, i.jsx)(
                              A,
                              {
                                  guildId: e,
                                  premiumSubscription: n,
                                  appliedGuildBoosts: s[e]
                              },
                              e
                          )
                      )
                  }),
                  (0, i.jsx)('div', { className: b.mainSeparator })
              ]
          });
}
function O(e) {
    let { guildBoostSlots: t, premiumSubscription: n } = e,
        [s, a] = r.useState(!1),
        l = (0, m.Vp)();
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
    let { boostsByGuildId: o, numActiveGuildBoostSlots: c } = r.useMemo(() => {
        let e = 0,
            n = {};
        return (
            Object.keys(t).forEach((i) => {
                let r = t[i];
                if ((!(0, p.tl)(r) && e++, null != r.premiumGuildSubscription)) {
                    let e = r.premiumGuildSubscription.guildId;
                    !(e in n) && (n[e] = []), n[e].push(r);
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
    return (0, i.jsxs)('div', {
        className: b.wrapper,
        children: [
            (0, i.jsx)('div', {
                className: b.container,
                children: x.default.keys(o).map((e) =>
                    (0, i.jsx)(
                        v,
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
            (0, i.jsx)('div', { className: b.mainSeparator })
        ]
    });
}

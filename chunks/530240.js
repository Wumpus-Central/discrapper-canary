n.d(t, {
    A: () => v,
    N: () => j,
}),
    n(321073),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(108531),
    s = n(417597),
    a = n(397927),
    o = n(775602),
    c = n(531260),
    d = n(39672),
    u = n(545934),
    _ = n(71393),
    p = n(473145),
    m = n(927578),
    g = n(661191),
    A = n(101135),
    f = n(708030),
    h = n(358172),
    b = n(652215),
    E = n(788868),
    x = n(985018),
    O = n(325234);

function C(e) {
    let {
            guildTier: t,
            guildBoostSlot: n,
            showAltText: s,
            isCanceled: o,
            premiumSubscription: c,
            fractionalPremiumInfo: d,
        } = e,
        u = i.useMemo(() => {
            if (o) {
                let e = c.currentPeriodEnd;
                return (
                    c.isPausedForFractionalPremium && (e = d.endsAt.toDate()),
                    x.intl.format(x.t.Z4ULRD, {
                        date: e,
                    })
                );
            }
            let e = null != n.premiumGuildSubscription ? g.default.extractTimestamp(n.premiumGuildSubscription.id) : 0;
            return x.intl.formatToPlainString(x.t.lY2Bur, {
                date: new Date(e),
            });
        }, [n, o, c, d]),
        _ = i.useMemo(
            () =>
                (function (e) {
                    if (null == e || e === b.TVA.NONE) return "";
                    let t = [
                        x.intl.formatToPlainString(x.t["dLlKX/"], {
                            numEmojiSlots: E.TG[e].limits.emoji,
                        }),
                        x.intl.formatToPlainString(x.t["+ANIfv"], {
                            numStickerSlots: E.TG[e].limits.stickers,
                        }),
                        x.intl.formatToPlainString(x.t["4gt60b"], {
                            numSoundboardSlots: E.TG[e].limits.soundboardSounds,
                        }),
                        x.intl.formatToPlainString(x.t.XahSjZ, {
                            resolution: E.TG[e].limits.screenShareQualityResolution,
                            framerate: E.TG[e].limits.screenShareQualityFramerate,
                        }),
                        x.intl.formatToPlainString(x.t.NbNs7S, {
                            bitrate: E.TG[e].limits.bitrate / 1e3,
                        }),
                        x.intl.formatToPlainString(x.t.VVKcpn, {
                            filesize: E.TG[e].limits.fileSize / 1024 / 1024,
                        }),
                        x.intl.formatToPlainString(x.t.TbpCvv, {
                            numVideoStageSeats: E.TG[e].limits.stageVideoUsers,
                        }),
                        x.intl.string(x.t.LDyX3i),
                        x.intl.string(x.t.YtGlPW),
                    ];
                    e >= b.TVA.TIER_2 && (t.push(x.intl.string(x.t.SztbtN)), t.push(x.intl.string(x.t["3GK91n"]))),
                        e >= b.TVA.TIER_3 && t.push(x.intl.string(x.t["XUUJd+"]));
                    let n = t[Math.floor(Math.random() * t.length)];
                    return x.intl.format(x.t["/dOAmQ"], {
                        perk: n,
                    });
                })(t),
            [t],
        ),
        p = (0, a.pnh)(
            s,
            {
                from: {
                    opacity: 0,
                },
                enter: {
                    opacity: 1,
                },
                leave: {
                    opacity: 0,
                },
            },
            "animate-always",
        );
    return o || t === b.TVA.NONE
        ? (0, r.jsx)("div", {
              className: O.xm,
              children: (0, r.jsx)(a.Text, {
                  variant: "text-sm/medium",
                  color: "text-muted",
                  children: u,
              }),
          })
        : p((e, t) =>
              (0, r.jsx)(l.animated.div, {
                  style: e,
                  className: O.xm,
                  children: (0, r.jsx)(a.Text, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      children: t ? _ : u,
                  }),
              }),
          );
}

function I(e) {
    let {
            guildTier: t,
            guildBoostSlot: n,
            premiumSubscription: l,
            hasCancelableGuildBoostSlot: u,
            showAltText: _,
            isLastGuildBoostSlot: m,
        } = e,
        g = (0, s.bG)([o.A], () => o.A.useReducedMotion),
        h = i.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n]),
        b = i.useMemo(() => null != h && h > new Date(), [h]),
        E = (0, p.I5)(n),
        I = (0, c.A)(),
        T = i.useRef(null);
    return (0, r.jsxs)("div", {
        className: O.PW,
        children: [
            (0, r.jsxs)("div", {
                className: O.$U,
                children: [
                    (0, r.jsx)(f.A, {
                        isCanceled: E,
                        hasCooldown: b,
                        useReducedMotion: g,
                    }),
                    (0, r.jsx)("div", {
                        className: O.vh,
                        children:
                            null != h && b && !E
                                ? (0, r.jsx)(A.A, {
                                      className: O.xm,
                                      cooldown: h.getTime(),
                                  })
                                : (0, r.jsx)(C, {
                                      guildTier: t,
                                      guildBoostSlot: n,
                                      showAltText: _,
                                      isCanceled: E,
                                      premiumSubscription: l,
                                      fractionalPremiumInfo: I,
                                  }),
                    }),
                    (0, r.jsx)(a.YNO, {
                        targetElementRef: T,
                        renderPopout: function (e) {
                            let { closePopout: t } = e;
                            return (0, r.jsx)(d.A, {
                                onClose: t,
                                guildBoostSlot: n,
                                premiumSubscription: l,
                                hasCancelableGuildBoostSlot: u,
                                fractionalState: I.fractionalState,
                            });
                        },
                        position: "right",
                        align: "center",
                        children: (e) => {
                            var t, n;
                            return (0, r.jsx)(
                                a.DUT,
                                ((t = (function (e) {
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
                                })({}, e)),
                                (n = n =
                                    {
                                        innerRef: T,
                                        "aria-label": x.intl.string(x.t.PdRCRg),
                                        className: O.oU,
                                        children: (0, r.jsx)(a.FHP, {
                                            size: "md",
                                            color: "currentColor",
                                        }),
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
                                t),
                            );
                        },
                    }),
                ],
            }),
            !m &&
                (0, r.jsx)("div", {
                    className: O.eX,
                }),
        ],
    });
}

function T(e) {
    let {
            guildId: t,
            guildBoostSlotRecords: n,
            premiumSubscription: i,
            hasCancelableGuildBoostSlot: l,
            showAltText: a,
        } = e,
        o = (0, s.bG)([_.A], () => _.A.getGuild(t), [t]);
    return (0, r.jsxs)("div", {
        className: O.ag,
        children: [
            (0, r.jsx)(h.A, {
                guildId: t,
                boostingVariant: !1,
            }),
            n.map((e, t) =>
                (0, r.jsx)(
                    I,
                    {
                        guildTier: null == o ? void 0 : o.premiumTier,
                        guildBoostSlot: e,
                        premiumSubscription: i,
                        hasCancelableGuildBoostSlot: l,
                        showAltText: a,
                        isLastGuildBoostSlot: t === n.length - 1,
                    },
                    e.id,
                ),
            ),
        ],
    });
}

function S(e) {
    let { guildId: t, appliedGuildBoosts: n, premiumSubscription: i } = e,
        l = (0, s.bG)([_.A], () => _.A.getGuild(t), [t]),
        a = g.default.fromTimestamp(Date.now());
    if (
        (n.forEach((e) => {
            (null == a || 0 > g.default.compare(e.id, a)) && (a = e.id);
        }),
        null == a)
    )
        return null;
    let o = u.A.createFromServer(
        {
            id: g.default.fromTimestamp(Date.now()),
            subscription_id: i.id,
            canceled: !1,
            premium_guild_subscription: {
                id: a,
                guild_id: t,
            },
            cooldown_ends_at: null,
        },
        i,
    );
    return (0, r.jsxs)("div", {
        className: O.ag,
        children: [
            (0, r.jsx)(h.A, {
                guildId: t,
                boostingVariant: !1,
            }),
            n.map((e, t) =>
                (0, r.jsx)(
                    I,
                    {
                        guildTier: null == l ? void 0 : l.premiumTier,
                        guildBoostSlot: o,
                        premiumSubscription: i,
                        hasCancelableGuildBoostSlot: !1,
                        showAltText: !1,
                        isLastGuildBoostSlot: t === n.length - 1,
                    },
                    t,
                ),
            ),
        ],
    });
}

function j(e) {
    let { appliedGuildBoosts: t, premiumSubscription: n } = e,
        l = i.useMemo(() => {
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
        : (0, r.jsxs)("div", {
              className: O.iE,
              children: [
                  (0, r.jsx)("div", {
                      className: O.kL,
                      children: g.default.keys(l).map((e) =>
                          (0, r.jsx)(
                              S,
                              {
                                  guildId: e,
                                  premiumSubscription: n,
                                  appliedGuildBoosts: l[e],
                              },
                              e,
                          ),
                      ),
                  }),
                  (0, r.jsx)("div", {
                      className: O.vK,
                  }),
              ],
          });
}

function v(e) {
    let { guildBoostSlots: t, premiumSubscription: n } = e,
        [l, s] = i.useState(!1);
    i.useEffect(() => {
        let e = -1;
        return (
            null != n &&
                (e = setInterval(() => {
                    s((e) => !e);
                }, 3e3)),
            () => {
                clearInterval(e);
            }
        );
    }, [n]);
    let { boostsByGuildId: a, numActiveGuildBoostSlots: o } = i.useMemo(() => {
        let e = 0,
            n = {};
        return (
            Object.keys(t).forEach((r) => {
                let i = t[r];
                if ((!(0, p.I5)(i) && e++, null != i.premiumGuildSubscription)) {
                    let e = i.premiumGuildSubscription.guildId;
                    e in n || (n[e] = []), n[e].push(i);
                }
            }),
            {
                boostsByGuildId: n,
                numActiveGuildBoostSlots: e,
            }
        );
    }, [t]);
    if (null == n || 0 === Object.keys(a).length) return null;
    let c = o > m.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, r.jsxs)("div", {
        className: O.iE,
        children: [
            (0, r.jsx)("div", {
                className: O.kL,
                children: g.default.keys(a).map((e) =>
                    (0, r.jsx)(
                        T,
                        {
                            guildId: e,
                            guildBoostSlotRecords: a[e],
                            premiumSubscription: n,
                            hasCancelableGuildBoostSlot: c,
                            showAltText: l,
                        },
                        e,
                    ),
                ),
            }),
            (0, r.jsx)("div", {
                className: O.vK,
            }),
        ],
    });
}

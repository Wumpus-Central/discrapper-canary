n.d(t, { A: () => v, N: () => j }), n(321073);
var i = n(627968),
    s = n(64700),
    a = n(522160),
    l = n(417597),
    r = n(397927),
    o = n(775602),
    c = n(531260),
    d = n(39672),
    u = n(545934),
    _ = n(71393),
    m = n(473145),
    A = n(927578),
    g = n(661191),
    h = n(101135),
    x = n(708030),
    p = n(358172),
    E = n(652215),
    C = n(788868),
    T = n(985018),
    S = n(325234);
function I(e) {
    let {
            guildTier: t,
            guildBoostSlot: n,
            showAltText: l,
            isCanceled: o,
            premiumSubscription: c,
            fractionalPremiumInfo: d,
        } = e,
        u = s.useMemo(() => {
            if (o) {
                let e = c.currentPeriodEnd;
                return (
                    c.isPausedForFractionalPremium && (e = d.endsAt.toDate()), T.intl.format(T.t.Z4ULRD, { date: e })
                );
            }
            let e = null != n.premiumGuildSubscription ? g.default.extractTimestamp(n.premiumGuildSubscription.id) : 0;
            return T.intl.formatToPlainString(T.t.lY2Bur, { date: new Date(e) });
        }, [n, o, c, d]),
        _ = s.useMemo(
            () =>
                (function (e) {
                    if (null == e || e === E.TVA.NONE) return "";
                    let t = [
                        T.intl.formatToPlainString(T.t["dLlKX/"], { numEmojiSlots: C.TG[e].limits.emoji }),
                        T.intl.formatToPlainString(T.t["+ANIfv"], { numStickerSlots: C.TG[e].limits.stickers }),
                        T.intl.formatToPlainString(T.t["4gt60b"], {
                            numSoundboardSlots: C.TG[e].limits.soundboardSounds,
                        }),
                        T.intl.formatToPlainString(T.t.XahSjZ, {
                            resolution: C.TG[e].limits.screenShareQualityResolution,
                            framerate: C.TG[e].limits.screenShareQualityFramerate,
                        }),
                        T.intl.formatToPlainString(T.t.NbNs7S, { bitrate: C.TG[e].limits.bitrate / 1e3 }),
                        T.intl.formatToPlainString(T.t.VVKcpn, { filesize: C.TG[e].limits.fileSize / 1024 / 1024 }),
                        T.intl.formatToPlainString(T.t.TbpCvv, { numVideoStageSeats: C.TG[e].limits.stageVideoUsers }),
                        T.intl.string(T.t.LDyX3i),
                        T.intl.string(T.t.YtGlPW),
                    ];
                    e >= E.TVA.TIER_2 && (t.push(T.intl.string(T.t.SztbtN)), t.push(T.intl.string(T.t["3GK91n"]))),
                        e >= E.TVA.TIER_3 && t.push(T.intl.string(T.t["XUUJd+"]));
                    let n = t[Math.floor(Math.random() * t.length)];
                    return T.intl.format(T.t["/dOAmQ"], { perk: n });
                })(t),
            [t],
        ),
        m = (0, r.pnh)(l, { from: { opacity: 0 }, enter: { opacity: 1 }, leave: { opacity: 0 } }, "animate-always");
    return o || t === E.TVA.NONE
        ? (0, i.jsx)("div", {
              className: S.xm,
              children: (0, i.jsx)(r.Text, { variant: "text-sm/medium", color: "text-muted", children: u }),
          })
        : m((e, t) =>
              (0, i.jsx)(a.animated.div, {
                  style: e,
                  className: S.xm,
                  children: (0, i.jsx)(r.Text, { variant: "text-sm/medium", color: "text-muted", children: t ? _ : u }),
              }),
          );
}
function f(e) {
    let {
            guildTier: t,
            guildBoostSlot: n,
            premiumSubscription: a,
            hasCancelableGuildBoostSlot: u,
            showAltText: _,
            isLastGuildBoostSlot: A,
        } = e,
        g = (0, l.bG)([o.A], () => o.A.useReducedMotion),
        p = s.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n]),
        E = s.useMemo(() => null != p && p > new Date(), [p]),
        C = (0, m.I5)(n),
        f = (0, c.A)(),
        N = s.useRef(null);
    return (0, i.jsxs)("div", {
        className: S.PW,
        children: [
            (0, i.jsxs)("div", {
                className: S.$U,
                children: [
                    (0, i.jsx)(x.A, { isCanceled: C, hasCooldown: E, useReducedMotion: g }),
                    (0, i.jsx)("div", {
                        className: S.vh,
                        children:
                            null != p && E && !C
                                ? (0, i.jsx)(h.A, { className: S.xm, cooldown: p.getTime() })
                                : (0, i.jsx)(I, {
                                      guildTier: t,
                                      guildBoostSlot: n,
                                      showAltText: _,
                                      isCanceled: C,
                                      premiumSubscription: a,
                                      fractionalPremiumInfo: f,
                                  }),
                    }),
                    (0, i.jsx)(r.YNO, {
                        targetElementRef: N,
                        renderPopout: function (e) {
                            let { closePopout: t } = e;
                            return (0, i.jsx)(d.A, {
                                onClose: t,
                                guildBoostSlot: n,
                                premiumSubscription: a,
                                hasCancelableGuildBoostSlot: u,
                                fractionalState: f.fractionalState,
                            });
                        },
                        position: "right",
                        align: "center",
                        children: (e) =>
                            (0, i.jsx)(r.DUT, {
                                ...e,
                                innerRef: N,
                                "aria-label": T.intl.string(T.t.PdRCRg),
                                className: S.oU,
                                children: (0, i.jsx)(r.FHP, { size: "md", color: "currentColor" }),
                            }),
                    }),
                ],
            }),
            !A && (0, i.jsx)("div", { className: S.eX }),
        ],
    });
}
function N(e) {
    let {
            guildId: t,
            guildBoostSlotRecords: n,
            premiumSubscription: s,
            hasCancelableGuildBoostSlot: a,
            showAltText: r,
        } = e,
        o = (0, l.bG)([_.A], () => _.A.getGuild(t), [t]);
    return (0, i.jsxs)("div", {
        className: S.ag,
        children: [
            (0, i.jsx)(p.A, { guildId: t, boostingVariant: !1 }),
            n.map((e, t) =>
                (0, i.jsx)(
                    f,
                    {
                        guildTier: o?.premiumTier,
                        guildBoostSlot: e,
                        premiumSubscription: s,
                        hasCancelableGuildBoostSlot: a,
                        showAltText: r,
                        isLastGuildBoostSlot: t === n.length - 1,
                    },
                    e.id,
                ),
            ),
        ],
    });
}
function b(e) {
    let { guildId: t, appliedGuildBoosts: n, premiumSubscription: s } = e,
        a = (0, l.bG)([_.A], () => _.A.getGuild(t), [t]),
        r = g.default.fromTimestamp(Date.now());
    if (
        (n.forEach((e) => {
            (null == r || 0 > g.default.compare(e.id, r)) && (r = e.id);
        }),
        null == r)
    )
        return null;
    let o = u.A.createFromServer(
        {
            id: g.default.fromTimestamp(Date.now()),
            subscription_id: s.id,
            canceled: !1,
            premium_guild_subscription: { id: r, guild_id: t },
            cooldown_ends_at: null,
        },
        s,
    );
    return (0, i.jsxs)("div", {
        className: S.ag,
        children: [
            (0, i.jsx)(p.A, { guildId: t, boostingVariant: !1 }),
            n.map((e, t) =>
                (0, i.jsx)(
                    f,
                    {
                        guildTier: a?.premiumTier,
                        guildBoostSlot: o,
                        premiumSubscription: s,
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
        a = s.useMemo(() => {
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
        : (0, i.jsxs)("div", {
              className: S.iE,
              children: [
                  (0, i.jsx)("div", {
                      className: S.kL,
                      children: g.default
                          .keys(a)
                          .map((e) =>
                              (0, i.jsx)(b, { guildId: e, premiumSubscription: n, appliedGuildBoosts: a[e] }, e),
                          ),
                  }),
                  (0, i.jsx)("div", { className: S.vK }),
              ],
          });
}
function v(e) {
    let { guildBoostSlots: t, premiumSubscription: n } = e,
        [a, l] = s.useState(!1);
    s.useEffect(() => {
        let e = -1;
        return (
            null != n &&
                (e = setInterval(() => {
                    l((e) => !e);
                }, 3e3)),
            () => {
                clearInterval(e);
            }
        );
    }, [n]);
    let { boostsByGuildId: r, numActiveGuildBoostSlots: o } = s.useMemo(() => {
        let e = 0,
            n = {};
        return (
            Object.keys(t).forEach((i) => {
                let s = t[i];
                if ((!(0, m.I5)(s) && e++, null != s.premiumGuildSubscription)) {
                    let e = s.premiumGuildSubscription.guildId;
                    e in n || (n[e] = []), n[e].push(s);
                }
            }),
            { boostsByGuildId: n, numActiveGuildBoostSlots: e }
        );
    }, [t]);
    if (null == n || 0 === Object.keys(r).length) return null;
    let c = o > A.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, i.jsxs)("div", {
        className: S.iE,
        children: [
            (0, i.jsx)("div", {
                className: S.kL,
                children: g.default
                    .keys(r)
                    .map((e) =>
                        (0, i.jsx)(
                            N,
                            {
                                guildId: e,
                                guildBoostSlotRecords: r[e],
                                premiumSubscription: n,
                                hasCancelableGuildBoostSlot: c,
                                showAltText: a,
                            },
                            e,
                        ),
                    ),
            }),
            (0, i.jsx)("div", { className: S.vK }),
        ],
    });
}

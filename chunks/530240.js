n.d(t, { A: () => v, N: () => R }), n(321073);
var i = n(627968),
    s = n(64700),
    r = n(563495),
    a = n(417597),
    l = n(397927),
    o = n(775602),
    c = n(531260),
    d = n(39672),
    u = n(545934),
    _ = n(71393),
    m = n(473145),
    A = n(927578),
    g = n(661191),
    E = n(101135),
    h = n(708030),
    p = n(358172),
    C = n(652215),
    x = n(788868),
    T = n(985018),
    I = n(325234);
function S(e) {
    let {
            guildTier: t,
            guildBoostSlot: n,
            showAltText: a,
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
                    if (null == e || e === C.TVA.NONE) return "";
                    let t = [
                        T.intl.formatToPlainString(T.t["dLlKX/"], { numEmojiSlots: x.TG[e].limits.emoji }),
                        T.intl.formatToPlainString(T.t["+ANIfv"], { numStickerSlots: x.TG[e].limits.stickers }),
                        T.intl.formatToPlainString(T.t["4gt60b"], {
                            numSoundboardSlots: x.TG[e].limits.soundboardSounds,
                        }),
                        T.intl.formatToPlainString(T.t.XahSjZ, {
                            resolution: x.TG[e].limits.screenShareQualityResolution,
                            framerate: x.TG[e].limits.screenShareQualityFramerate,
                        }),
                        T.intl.formatToPlainString(T.t.NbNs7S, { bitrate: x.TG[e].limits.bitrate / 1e3 }),
                        T.intl.formatToPlainString(T.t.VVKcpn, { filesize: x.TG[e].limits.fileSize / 1024 / 1024 }),
                        T.intl.formatToPlainString(T.t.TbpCvv, { numVideoStageSeats: x.TG[e].limits.stageVideoUsers }),
                        T.intl.string(T.t.LDyX3i),
                        T.intl.string(T.t.YtGlPW),
                    ];
                    e >= C.TVA.TIER_2 && (t.push(T.intl.string(T.t.SztbtN)), t.push(T.intl.string(T.t["3GK91n"]))),
                        e >= C.TVA.TIER_3 && t.push(T.intl.string(T.t["XUUJd+"]));
                    let n = t[Math.floor(Math.random() * t.length)];
                    return T.intl.format(T.t["/dOAmQ"], { perk: n });
                })(t),
            [t],
        ),
        m = (0, l.pnh)(a, { from: { opacity: 0 }, enter: { opacity: 1 }, leave: { opacity: 0 } }, "animate-always");
    return o || t === C.TVA.NONE
        ? (0, i.jsx)("div", {
              className: I.xm,
              children: (0, i.jsx)(l.Text, { variant: "text-sm/medium", color: "text-muted", children: u }),
          })
        : m((e, t) =>
              (0, i.jsx)(r.animated.div, {
                  style: e,
                  className: I.xm,
                  children: (0, i.jsx)(l.Text, { variant: "text-sm/medium", color: "text-muted", children: t ? _ : u }),
              }),
          );
}
function f(e) {
    let {
            guildTier: t,
            guildBoostSlot: n,
            premiumSubscription: r,
            hasCancelableGuildBoostSlot: u,
            showAltText: _,
            isLastGuildBoostSlot: A,
        } = e,
        g = (0, a.bG)([o.A], () => o.A.useReducedMotion),
        p = s.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n]),
        C = s.useMemo(() => null != p && p > new Date(), [p]),
        x = (0, m.I5)(n),
        f = (0, c.A)(),
        N = s.useRef(null);
    return (0, i.jsxs)("div", {
        className: I.PW,
        children: [
            (0, i.jsxs)("div", {
                className: I.$U,
                children: [
                    (0, i.jsx)(h.A, { isCanceled: x, hasCooldown: C, useReducedMotion: g }),
                    (0, i.jsx)("div", {
                        className: I.vh,
                        children:
                            null != p && C && !x
                                ? (0, i.jsx)(E.A, { className: I.xm, cooldown: p.getTime() })
                                : (0, i.jsx)(S, {
                                      guildTier: t,
                                      guildBoostSlot: n,
                                      showAltText: _,
                                      isCanceled: x,
                                      premiumSubscription: r,
                                      fractionalPremiumInfo: f,
                                  }),
                    }),
                    (0, i.jsx)(l.YNO, {
                        targetElementRef: N,
                        renderPopout: function (e) {
                            let { closePopout: t } = e;
                            return (0, i.jsx)(d.A, {
                                onClose: t,
                                guildBoostSlot: n,
                                premiumSubscription: r,
                                hasCancelableGuildBoostSlot: u,
                                fractionalState: f.fractionalState,
                            });
                        },
                        position: "right",
                        align: "center",
                        children: (e) =>
                            (0, i.jsx)(l.DUT, {
                                ...e,
                                innerRef: N,
                                "aria-label": T.intl.string(T.t.PdRCRg),
                                className: I.oU,
                                children: (0, i.jsx)(l.FHP, { size: "md", color: "currentColor" }),
                            }),
                    }),
                ],
            }),
            !A && (0, i.jsx)("div", { className: I.eX }),
        ],
    });
}
function N(e) {
    let {
            guildId: t,
            guildBoostSlotRecords: n,
            premiumSubscription: s,
            hasCancelableGuildBoostSlot: r,
            showAltText: l,
        } = e,
        o = (0, a.bG)([_.A], () => _.A.getGuild(t), [t]);
    return (0, i.jsxs)("div", {
        className: I.ag,
        children: [
            (0, i.jsx)(p.A, { guildId: t, boostingVariant: !1 }),
            n.map((e, t) =>
                (0, i.jsx)(
                    f,
                    {
                        guildTier: o?.premiumTier,
                        guildBoostSlot: e,
                        premiumSubscription: s,
                        hasCancelableGuildBoostSlot: r,
                        showAltText: l,
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
        r = (0, a.bG)([_.A], () => _.A.getGuild(t), [t]),
        l = g.default.fromTimestamp(Date.now());
    if (
        (n.forEach((e) => {
            (null == l || 0 > g.default.compare(e.id, l)) && (l = e.id);
        }),
        null == l)
    )
        return null;
    let o = u.A.createFromServer(
        {
            id: g.default.fromTimestamp(Date.now()),
            subscription_id: s.id,
            canceled: !1,
            premium_guild_subscription: { id: l, guild_id: t },
            cooldown_ends_at: null,
        },
        s,
    );
    return (0, i.jsxs)("div", {
        className: I.ag,
        children: [
            (0, i.jsx)(p.A, { guildId: t, boostingVariant: !1 }),
            n.map((e, t) =>
                (0, i.jsx)(
                    f,
                    {
                        guildTier: r?.premiumTier,
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
function R(e) {
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
        : (0, i.jsxs)("div", {
              className: I.iE,
              children: [
                  (0, i.jsx)("div", {
                      className: I.kL,
                      children: g.default
                          .keys(r)
                          .map((e) =>
                              (0, i.jsx)(b, { guildId: e, premiumSubscription: n, appliedGuildBoosts: r[e] }, e),
                          ),
                  }),
                  (0, i.jsx)("div", { className: I.vK }),
              ],
          });
}
function v(e) {
    let { guildBoostSlots: t, premiumSubscription: n } = e,
        [r, a] = s.useState(!1);
    s.useEffect(() => {
        let e = -1;
        return (
            null != n &&
                (e = setInterval(() => {
                    a((e) => !e);
                }, 3e3)),
            () => {
                clearInterval(e);
            }
        );
    }, [n]);
    let { boostsByGuildId: l, numActiveGuildBoostSlots: o } = s.useMemo(() => {
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
    if (null == n || 0 === Object.keys(l).length) return null;
    let c = o > A.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, i.jsxs)("div", {
        className: I.iE,
        children: [
            (0, i.jsx)("div", {
                className: I.kL,
                children: g.default
                    .keys(l)
                    .map((e) =>
                        (0, i.jsx)(
                            N,
                            {
                                guildId: e,
                                guildBoostSlotRecords: l[e],
                                premiumSubscription: n,
                                hasCancelableGuildBoostSlot: c,
                                showAltText: r,
                            },
                            e,
                        ),
                    ),
            }),
            (0, i.jsx)("div", { className: I.vK }),
        ],
    });
}

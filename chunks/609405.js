n.d(t, { A: () => L, N: () => R }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(517738),
    a = n(417597),
    r = n(866323),
    o = n(834730),
    d = n(265872),
    u = n(939249),
    c = n(530005),
    g = n(775602),
    m = n(531260),
    _ = n(39672),
    A = n(545934),
    h = n(71393),
    p = n(473145),
    x = n(927578),
    E = n(661191),
    T = n(311092),
    S = n(233413),
    f = n(400297),
    b = n(652215),
    C = n(788868),
    v = n(985018),
    N = n(930988);
function I(e) {
    let {
            guildTier: t,
            guildBoostSlot: n,
            showAltText: a,
            isCanceled: d,
            premiumSubscription: u,
            fractionalPremiumInfo: c,
        } = e,
        g = s.useMemo(() => {
            if (d) {
                let e = u.currentPeriodEnd;
                return (
                    u.isPausedForFractionalPremium && (e = c.endsAt.toDate()), v.intl.format(v.t.Z4ULRD, { date: e })
                );
            }
            let e = null != n.premiumGuildSubscription ? E.default.extractTimestamp(n.premiumGuildSubscription.id) : 0;
            return v.intl.formatToPlainString(v.t.lY2Bur, { date: new Date(e) });
        }, [n, d, u, c]),
        m = s.useMemo(
            () =>
                (function (e) {
                    if (null == e || e === b.TVA.NONE) return "";
                    let t = [
                        v.intl.formatToPlainString(v.t["dLlKX/"], { numEmojiSlots: C.TG[e].limits.emoji }),
                        v.intl.formatToPlainString(v.t["+ANIfv"], { numStickerSlots: C.TG[e].limits.stickers }),
                        v.intl.formatToPlainString(v.t["4gt60b"], {
                            numSoundboardSlots: C.TG[e].limits.soundboardSounds,
                        }),
                        v.intl.formatToPlainString(v.t.XahSjZ, {
                            resolution: C.TG[e].limits.screenShareQualityResolution,
                            framerate: C.TG[e].limits.screenShareQualityFramerate,
                        }),
                        v.intl.formatToPlainString(v.t.NbNs7S, { bitrate: C.TG[e].limits.bitrate / 1e3 }),
                        v.intl.formatToPlainString(v.t.VVKcpn, { filesize: C.TG[e].limits.fileSize / 1024 / 1024 }),
                        v.intl.formatToPlainString(v.t.TbpCvv, { numVideoStageSeats: C.TG[e].limits.stageVideoUsers }),
                        v.intl.string(v.t.LDyX3i),
                        v.intl.string(v.t.YtGlPW),
                    ];
                    e >= b.TVA.TIER_2 && (t.push(v.intl.string(v.t.SztbtN)), t.push(v.intl.string(v.t["3GK91n"]))),
                        e >= b.TVA.TIER_3 && t.push(v.intl.string(v.t["XUUJd+"]));
                    let n = t[Math.floor(Math.random() * t.length)];
                    return v.intl.format(v.t["/dOAmQ"], { perk: n });
                })(t),
            [t],
        ),
        _ = (0, r.p)(a, { from: { opacity: 0 }, enter: { opacity: 1 }, leave: { opacity: 0 } }, "animate-always");
    return d || t === b.TVA.NONE
        ? (0, i.jsx)("div", {
              className: N.xm,
              children: (0, i.jsx)(o.E, { variant: "text-sm/medium", color: "text-muted", children: g }),
          })
        : _((e, t) =>
              (0, i.jsx)(l.animated.div, {
                  style: e,
                  className: N.xm,
                  children: (0, i.jsx)(o.E, { variant: "text-sm/medium", color: "text-muted", children: t ? m : g }),
              }),
          );
}
function y(e) {
    let {
            guildTier: t,
            guildBoostSlot: n,
            premiumSubscription: l,
            hasCancelableGuildBoostSlot: r,
            showAltText: o,
            isLastGuildBoostSlot: A,
        } = e,
        h = (0, a.bG)([g.A], () => g.A.useReducedMotion),
        x = s.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n]),
        E = s.useMemo(() => null != x && x > new Date(), [x]),
        f = (0, p.I5)(n),
        b = (0, m.A)(),
        C = s.useRef(null);
    return (0, i.jsxs)("div", {
        className: N.PW,
        children: [
            (0, i.jsxs)("div", {
                className: N.$U,
                children: [
                    (0, i.jsx)(S.A, { isCanceled: f, hasCooldown: E, useReducedMotion: h }),
                    (0, i.jsx)("div", {
                        className: N.vh,
                        children:
                            null != x && E && !f
                                ? (0, i.jsx)(T.A, { className: N.xm, cooldown: x.getTime() })
                                : (0, i.jsx)(I, {
                                      guildTier: t,
                                      guildBoostSlot: n,
                                      showAltText: o,
                                      isCanceled: f,
                                      premiumSubscription: l,
                                      fractionalPremiumInfo: b,
                                  }),
                    }),
                    (0, i.jsx)(d.Y, {
                        targetElementRef: C,
                        renderPopout: function (e) {
                            let { closePopout: t } = e;
                            return (0, i.jsx)(_.A, {
                                onClose: t,
                                guildBoostSlot: n,
                                premiumSubscription: l,
                                hasCancelableGuildBoostSlot: r,
                                fractionalState: b.fractionalState,
                            });
                        },
                        position: "right",
                        align: "center",
                        children: (e) =>
                            (0, i.jsx)(u.D, {
                                ...e,
                                innerRef: C,
                                "aria-label": v.intl.string(v.t.PdRCRg),
                                className: N.oU,
                                children: (0, i.jsx)(c.F, { size: "md", color: "currentColor" }),
                            }),
                    }),
                ],
            }),
            !A && (0, i.jsx)("div", { className: N.eX }),
        ],
    });
}
function j(e) {
    let {
            guildId: t,
            guildBoostSlotRecords: n,
            premiumSubscription: s,
            hasCancelableGuildBoostSlot: l,
            showAltText: r,
        } = e,
        o = (0, a.bG)([h.A], () => h.A.getGuild(t), [t]);
    return (0, i.jsxs)("div", {
        className: N.ag,
        children: [
            (0, i.jsx)(f.A, { guildId: t, boostingVariant: !1 }),
            n.map((e, t) =>
                (0, i.jsx)(
                    y,
                    {
                        guildTier: o?.premiumTier,
                        guildBoostSlot: e,
                        premiumSubscription: s,
                        hasCancelableGuildBoostSlot: l,
                        showAltText: r,
                        isLastGuildBoostSlot: t === n.length - 1,
                    },
                    e.id,
                ),
            ),
        ],
    });
}
function O(e) {
    let { guildId: t, appliedGuildBoosts: n, premiumSubscription: s } = e,
        l = (0, a.bG)([h.A], () => h.A.getGuild(t), [t]),
        r = E.default.fromTimestamp(Date.now());
    if (
        (n.forEach((e) => {
            (null == r || 0 > E.default.compare(e.id, r)) && (r = e.id);
        }),
        null == r)
    )
        return null;
    let o = A.A.createFromServer(
        {
            id: E.default.fromTimestamp(Date.now()),
            subscription_id: s.id,
            canceled: !1,
            premium_guild_subscription: { id: r, guild_id: t },
            cooldown_ends_at: null,
        },
        s,
    );
    return (0, i.jsxs)("div", {
        className: N.ag,
        children: [
            (0, i.jsx)(f.A, { guildId: t, boostingVariant: !1 }),
            n.map((e, t) =>
                (0, i.jsx)(
                    y,
                    {
                        guildTier: l?.premiumTier,
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
        l = s.useMemo(() => {
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
              className: N.iE,
              children: [
                  (0, i.jsx)("div", {
                      className: N.kL,
                      children: E.default
                          .keys(l)
                          .map((e) =>
                              (0, i.jsx)(O, { guildId: e, premiumSubscription: n, appliedGuildBoosts: l[e] }, e),
                          ),
                  }),
                  (0, i.jsx)("div", { className: N.vK }),
              ],
          });
}
function L(e) {
    let { guildBoostSlots: t, premiumSubscription: n } = e,
        [l, a] = s.useState(!1);
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
    let { boostsByGuildId: r, numActiveGuildBoostSlots: o } = s.useMemo(() => {
        let e = 0,
            n = {};
        return (
            Object.keys(t).forEach((i) => {
                let s = t[i];
                if ((!(0, p.I5)(s) && e++, null != s.premiumGuildSubscription)) {
                    let e = s.premiumGuildSubscription.guildId;
                    e in n || (n[e] = []), n[e].push(s);
                }
            }),
            { boostsByGuildId: n, numActiveGuildBoostSlots: e }
        );
    }, [t]);
    if (null == n || 0 === Object.keys(r).length) return null;
    let d = o > x.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, i.jsxs)("div", {
        className: N.iE,
        children: [
            (0, i.jsx)("div", {
                className: N.kL,
                children: E.default
                    .keys(r)
                    .map((e) =>
                        (0, i.jsx)(
                            j,
                            {
                                guildId: e,
                                guildBoostSlotRecords: r[e],
                                premiumSubscription: n,
                                hasCancelableGuildBoostSlot: d,
                                showAltText: l,
                            },
                            e,
                        ),
                    ),
            }),
            (0, i.jsx)("div", { className: N.vK }),
        ],
    });
}

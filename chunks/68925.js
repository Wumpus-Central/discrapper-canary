n.d(t, { A: () => N }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    d = n(531260),
    c = n(509536),
    u = n(39672),
    m = n(545934),
    g = n(71393),
    _ = n(473145),
    x = n(927578),
    A = n(661191),
    h = n(827693),
    p = n(652215),
    T = n(788868),
    f = n(985018),
    S = n(279480),
    b = n(410229);
function E(e) {
    let { slot: t, guildTier: n, premiumSubscription: l, hasCancelableSlots: r, isLast: c } = e,
        m = s.useRef(null),
        g = (0, _.I5)(t),
        x = s.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        h = null != x && x > new Date(),
        E = (0, d.A)(),
        C = s.useMemo(
            () =>
                (function (e, t) {
                    if (null == e || e === p.TVA.NONE) return "";
                    let n = [
                        f.intl.formatToPlainString(f.t["dLlKX/"], { numEmojiSlots: T.TG[e].limits.emoji }),
                        f.intl.formatToPlainString(f.t["+ANIfv"], { numStickerSlots: T.TG[e].limits.stickers }),
                        f.intl.formatToPlainString(f.t["4gt60b"], {
                            numSoundboardSlots: T.TG[e].limits.soundboardSounds,
                        }),
                        f.intl.formatToPlainString(f.t.XahSjZ, {
                            resolution: T.TG[e].limits.screenShareQualityResolution,
                            framerate: T.TG[e].limits.screenShareQualityFramerate,
                        }),
                        f.intl.formatToPlainString(f.t.NbNs7S, { bitrate: T.TG[e].limits.bitrate / 1e3 }),
                        f.intl.formatToPlainString(f.t.VVKcpn, { filesize: T.TG[e].limits.fileSize / 1024 / 1024 }),
                        f.intl.formatToPlainString(f.t.TbpCvv, { numVideoStageSeats: T.TG[e].limits.stageVideoUsers }),
                        f.intl.string(f.t.LDyX3i),
                        f.intl.string(f.t.YtGlPW),
                    ];
                    e >= p.TVA.TIER_2 && (n.push(f.intl.string(f.t.SztbtN)), n.push(f.intl.string(f.t["3GK91n"]))),
                        e >= p.TVA.TIER_3 && n.push(f.intl.string(f.t["XUUJd+"]));
                    let i = 0;
                    for (let e = 0; e < t.length; e++) i = (31 * i + t.charCodeAt(e)) | 0;
                    let s = n[Math.abs(i) % n.length];
                    return f.intl.formatToPlainString(f.t["/dOAmQ"], { perk: s });
                })(n, t.id),
            [n, t.id],
        ),
        N = s.useMemo(() => {
            if ("" !== C) return C;
            let e = null != t.premiumGuildSubscription ? A.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return f.intl.formatToPlainString(f.t.lY2Bur, { date: new Date(e) });
        }, [C, t.premiumGuildSubscription]),
        v = s.useMemo(
            () => (g ? (l.isPausedForFractionalPremium ? E.endsAt.toDate() : l.currentPeriodEnd) : null),
            [g, l, E],
        );
    return (0, i.jsxs)("div", {
        className: a()(S.iq, { [S.Mt]: c }),
        children: [
            (0, i.jsxs)("div", {
                className: S.kd,
                children: [
                    (0, i.jsx)("img", { alt: "", className: S.bB, src: b.A }),
                    g && null != v
                        ? (0, i.jsx)(o.Text, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: f.intl.format(f.t.Z4ULRD, { date: v }),
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(o.Text, { variant: "text-sm/medium", color: "text-subtle", children: N }),
                                  h &&
                                      null != x &&
                                      (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)("div", { className: S.zk }),
                                              (0, i.jsx)(o.Text, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-info",
                                                  children: f.intl.formatToPlainString(f.t.YJlswH, {
                                                      date: x.toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  !h &&
                                      null != l.trialEndsAt &&
                                      (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)("div", { className: S.zk }),
                                              (0, i.jsx)(o.Text, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-warning",
                                                  children: f.intl.formatToPlainString(f.t.OdPSpk, {
                                                      date: new Date(l.trialEndsAt).toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                              ],
                          }),
                ],
            }),
            (0, i.jsx)(o.YNO, {
                targetElementRef: m,
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, i.jsx)(u.A, {
                        onClose: n,
                        guildBoostSlot: t,
                        premiumSubscription: l,
                        hasCancelableGuildBoostSlot: r,
                        fractionalState: E.fractionalState,
                    });
                },
                position: "right",
                align: "center",
                children: (e) =>
                    (0, i.jsx)(o.DUT, {
                        innerRef: m,
                        "aria-label": f.intl.string(f.t.PdRCRg),
                        className: S.Mj,
                        ...e,
                        children: (0, i.jsx)(o.jNK, { size: "xs", color: o.LU0.colors.INTERACTIVE_TEXT_DEFAULT }),
                    }),
            }),
        ],
    });
}
function C(e) {
    let { guildId: t, slots: n, premiumSubscription: s, hasCancelableSlots: l } = e,
        a = (0, r.bG)([g.A], () => g.A.getGuild(t), [t]);
    return (0, i.jsxs)("div", {
        className: S.Nr,
        children: [
            (0, i.jsx)("div", {
                className: S.MY,
                children:
                    null != a
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(h.R, { guild: a, className: S.OA }),
                                  (0, i.jsx)(o.Button, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: f.intl.string(f.t.KLOhbO),
                                      onClick: () => {
                                          (0, c.K4)({
                                              guildId: a.id,
                                              location: {
                                                  section: p.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA,
                                              },
                                          });
                                      },
                                  }),
                              ],
                          })
                        : (0, i.jsx)("div", {
                              className: S.OA,
                              children: (0, i.jsx)(o.Heading, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: f.intl.string(f.t["6Kwwuo"]),
                              }),
                          }),
            }),
            n.map((e, t) =>
                (0, i.jsx)(
                    E,
                    {
                        slot: e,
                        guildTier: a?.premiumTier,
                        premiumSubscription: s,
                        hasCancelableSlots: l,
                        isLast: t === n.length - 1,
                    },
                    e.id,
                ),
            ),
        ],
    });
}
function N(e) {
    let { guildBoostSlots: t, premiumSubscription: n, pausedAppliedGuildBoosts: l, isPaused: a } = e,
        { boostsByGuildId: r, numActiveSlots: o } = s.useMemo(() => {
            if (a && null != n)
                return {
                    boostsByGuildId: (function (e, t) {
                        let n = {};
                        for (let t of e) t.guildId in n || (n[t.guildId] = []), n[t.guildId].push(t);
                        let i = {};
                        for (let e of Object.keys(n)) {
                            let s = n[e];
                            i[e] = s.map((n) =>
                                m.A.createFromServer(
                                    {
                                        id: n.id,
                                        subscription_id: t.id,
                                        canceled: !1,
                                        premium_guild_subscription: { id: n.id, guild_id: e },
                                        cooldown_ends_at: null,
                                    },
                                    t,
                                ),
                            );
                        }
                        return i;
                    })(l, n),
                    numActiveSlots: 0,
                };
            let e = 0,
                i = {};
            for (let n of Object.keys(t)) {
                let s = t[n];
                if ((!(0, _.I5)(s) && e++, null != s.premiumGuildSubscription)) {
                    let e = s.premiumGuildSubscription.guildId;
                    e in i || (i[e] = []), i[e].push(s);
                }
            }
            return { boostsByGuildId: i, numActiveSlots: e };
        }, [t, a, l, n]);
    if (null == n || 0 === Object.keys(r).length) return null;
    let d = o > x.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, i.jsx)("div", {
        className: S.kR,
        children: A.default
            .keys(r)
            .map((e) => (0, i.jsx)(C, { guildId: e, slots: r[e], premiumSubscription: n, hasCancelableSlots: d }, e)),
    });
}

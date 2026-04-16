n.d(t, { A: () => N }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(397927),
    d = n(531260),
    c = n(509536),
    u = n(39672),
    m = n(545934),
    g = n(71393),
    _ = n(473145),
    x = n(927578),
    h = n(661191),
    A = n(779733),
    p = n(827693),
    T = n(652215),
    f = n(788868),
    S = n(985018),
    E = n(279480),
    b = n(410229);
function C(e) {
    let { slot: t, guildTier: n, premiumSubscription: l, hasCancelableSlots: a, isLast: c } = e,
        m = s.useRef(null),
        g = (0, _.I5)(t),
        x = s.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        A = null != x && x > new Date(),
        p = (0, d.A)(),
        C = s.useMemo(
            () =>
                (function (e, t) {
                    if (null == e || e === T.TVA.NONE) return "";
                    let n = [
                        S.intl.formatToPlainString(S.t["dLlKX/"], { numEmojiSlots: f.TG[e].limits.emoji }),
                        S.intl.formatToPlainString(S.t["+ANIfv"], { numStickerSlots: f.TG[e].limits.stickers }),
                        S.intl.formatToPlainString(S.t["4gt60b"], {
                            numSoundboardSlots: f.TG[e].limits.soundboardSounds,
                        }),
                        S.intl.formatToPlainString(S.t.XahSjZ, {
                            resolution: f.TG[e].limits.screenShareQualityResolution,
                            framerate: f.TG[e].limits.screenShareQualityFramerate,
                        }),
                        S.intl.formatToPlainString(S.t.NbNs7S, { bitrate: f.TG[e].limits.bitrate / 1e3 }),
                        S.intl.formatToPlainString(S.t.VVKcpn, { filesize: f.TG[e].limits.fileSize / 1024 / 1024 }),
                        S.intl.formatToPlainString(S.t.TbpCvv, { numVideoStageSeats: f.TG[e].limits.stageVideoUsers }),
                        S.intl.string(S.t.LDyX3i),
                        S.intl.string(S.t.YtGlPW),
                    ];
                    e >= T.TVA.TIER_2 && (n.push(S.intl.string(S.t.SztbtN)), n.push(S.intl.string(S.t["3GK91n"]))),
                        e >= T.TVA.TIER_3 && n.push(S.intl.string(S.t["XUUJd+"]));
                    let i = 0;
                    for (let e = 0; e < t.length; e++) i = (31 * i + t.charCodeAt(e)) | 0;
                    let s = n[Math.abs(i) % n.length];
                    return S.intl.formatToPlainString(S.t["/dOAmQ"], { perk: s });
                })(n, t.id),
            [n, t.id],
        ),
        v = s.useMemo(() => {
            if ("" !== C) return C;
            let e = null != t.premiumGuildSubscription ? h.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return S.intl.formatToPlainString(S.t.lY2Bur, { date: new Date(e) });
        }, [C, t.premiumGuildSubscription]),
        N = s.useMemo(
            () => (g ? (l.isPausedForFractionalPremium ? p.endsAt.toDate() : l.currentPeriodEnd) : null),
            [g, l, p],
        );
    return (0, i.jsxs)("div", {
        className: r()(E.iq, { [E.Mt]: c }),
        children: [
            (0, i.jsxs)("div", {
                className: E.kd,
                children: [
                    (0, i.jsx)("img", { alt: "", className: E.bB, src: b.A }),
                    g && null != N
                        ? (0, i.jsx)(o.Text, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: S.intl.format(S.t.Z4ULRD, { date: N }),
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(o.Text, { variant: "text-sm/medium", color: "text-subtle", children: v }),
                                  A &&
                                      null != x &&
                                      (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)("div", { className: E.zk }),
                                              (0, i.jsx)(o.Text, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-info",
                                                  children: S.intl.formatToPlainString(S.t.YJlswH, {
                                                      date: x.toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  !A &&
                                      null != l.trialEndsAt &&
                                      (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)("div", { className: E.zk }),
                                              (0, i.jsx)(o.Text, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-warning",
                                                  children: S.intl.formatToPlainString(S.t.OdPSpk, {
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
                        hasCancelableGuildBoostSlot: a,
                        fractionalState: p.fractionalState,
                    });
                },
                position: "right",
                align: "center",
                children: (e) =>
                    (0, i.jsx)(o.DUT, {
                        innerRef: m,
                        "aria-label": S.intl.string(S.t.PdRCRg),
                        className: E.Mj,
                        ...e,
                        children: (0, i.jsx)(o.jNK, { size: "xs", color: o.LU0.colors.INTERACTIVE_TEXT_DEFAULT }),
                    }),
            }),
        ],
    });
}
function v(e) {
    let { guildId: t, slots: n, premiumSubscription: s, hasCancelableSlots: l } = e,
        r = (0, a.bG)([g.A], () => g.A.getGuild(t), [t]);
    return (0, i.jsxs)("div", {
        className: E.Nr,
        children: [
            (0, i.jsx)("div", {
                className: E.MY,
                children:
                    null != r
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(p.R, { guild: r, className: E.OA }),
                                  (0, i.jsx)(o.Button, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: S.intl.string(S.t.KLOhbO),
                                      onClick: () => {
                                          (0, A.default)(),
                                              (0, c.K4)({
                                                  guildId: r.id,
                                                  location: {
                                                      section: T.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA,
                                                  },
                                              });
                                      },
                                  }),
                              ],
                          })
                        : (0, i.jsx)("div", {
                              className: E.OA,
                              children: (0, i.jsx)(o.Heading, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: S.intl.string(S.t["6Kwwuo"]),
                              }),
                          }),
            }),
            n.map((e, t) =>
                (0, i.jsx)(
                    C,
                    {
                        slot: e,
                        guildTier: r?.premiumTier,
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
    let { guildBoostSlots: t, premiumSubscription: n, pausedAppliedGuildBoosts: l, isPaused: r } = e,
        { boostsByGuildId: a, numActiveSlots: o } = s.useMemo(() => {
            if (r && null != n)
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
        }, [t, r, l, n]);
    if (null == n || 0 === Object.keys(a).length) return null;
    let d = o > x.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, i.jsx)("div", {
        className: E.kR,
        children: h.default
            .keys(a)
            .map((e) => (0, i.jsx)(v, { guildId: e, slots: a[e], premiumSubscription: n, hasCancelableSlots: d }, e)),
    });
}

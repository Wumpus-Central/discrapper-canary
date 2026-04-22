n.d(t, { A: () => L }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(834730),
    d = n(265872),
    u = n(939249),
    c = n(365199),
    g = n(827734),
    m = n(821609),
    _ = n(534514),
    A = n(531260),
    h = n(509536),
    p = n(39672),
    x = n(545934),
    E = n(71393),
    T = n(473145),
    S = n(927578),
    f = n(661191),
    b = n(779733),
    C = n(827693),
    v = n(652215),
    N = n(788868),
    I = n(985018),
    y = n(538888),
    j = n(410229);
function O(e) {
    let { slot: t, guildTier: n, premiumSubscription: l, hasCancelableSlots: r, isLast: m } = e,
        _ = s.useRef(null),
        h = (0, T.I5)(t),
        x = s.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        E = null != x && x > new Date(),
        S = (0, A.A)(),
        b = s.useMemo(
            () =>
                (function (e, t) {
                    if (null == e || e === v.TVA.NONE) return "";
                    let n = [
                        I.intl.formatToPlainString(I.t["dLlKX/"], { numEmojiSlots: N.TG[e].limits.emoji }),
                        I.intl.formatToPlainString(I.t["+ANIfv"], { numStickerSlots: N.TG[e].limits.stickers }),
                        I.intl.formatToPlainString(I.t["4gt60b"], {
                            numSoundboardSlots: N.TG[e].limits.soundboardSounds,
                        }),
                        I.intl.formatToPlainString(I.t.XahSjZ, {
                            resolution: N.TG[e].limits.screenShareQualityResolution,
                            framerate: N.TG[e].limits.screenShareQualityFramerate,
                        }),
                        I.intl.formatToPlainString(I.t.NbNs7S, { bitrate: N.TG[e].limits.bitrate / 1e3 }),
                        I.intl.formatToPlainString(I.t.VVKcpn, { filesize: N.TG[e].limits.fileSize / 1024 / 1024 }),
                        I.intl.formatToPlainString(I.t.TbpCvv, { numVideoStageSeats: N.TG[e].limits.stageVideoUsers }),
                        I.intl.string(I.t.LDyX3i),
                        I.intl.string(I.t.YtGlPW),
                    ];
                    e >= v.TVA.TIER_2 && (n.push(I.intl.string(I.t.SztbtN)), n.push(I.intl.string(I.t["3GK91n"]))),
                        e >= v.TVA.TIER_3 && n.push(I.intl.string(I.t["XUUJd+"]));
                    let i = 0;
                    for (let e = 0; e < t.length; e++) i = (31 * i + t.charCodeAt(e)) | 0;
                    let s = n[Math.abs(i) % n.length];
                    return I.intl.formatToPlainString(I.t["/dOAmQ"], { perk: s });
                })(n, t.id),
            [n, t.id],
        ),
        C = s.useMemo(() => {
            if ("" !== b) return b;
            let e = null != t.premiumGuildSubscription ? f.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return I.intl.formatToPlainString(I.t.lY2Bur, { date: new Date(e) });
        }, [b, t.premiumGuildSubscription]),
        O = s.useMemo(
            () => (h ? (l.isPausedForFractionalPremium ? S.endsAt.toDate() : l.currentPeriodEnd) : null),
            [h, l, S],
        );
    return (0, i.jsxs)("div", {
        className: a()(y.iq, { [y.Mt]: m }),
        children: [
            (0, i.jsxs)("div", {
                className: y.kd,
                children: [
                    (0, i.jsx)("img", { alt: "", className: y.bB, src: j.A }),
                    h && null != O
                        ? (0, i.jsx)(o.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: I.intl.format(I.t.Z4ULRD, { date: O }),
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(o.E, { variant: "text-sm/medium", color: "text-subtle", children: C }),
                                  E &&
                                      null != x &&
                                      (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)("div", { className: y.zk }),
                                              (0, i.jsx)(o.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-info",
                                                  children: I.intl.formatToPlainString(I.t.YJlswH, {
                                                      date: x.toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  !E &&
                                      null != l.trialEndsAt &&
                                      (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)("div", { className: y.zk }),
                                              (0, i.jsx)(o.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-warning",
                                                  children: I.intl.formatToPlainString(I.t.OdPSpk, {
                                                      date: new Date(l.trialEndsAt).toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                              ],
                          }),
                ],
            }),
            (0, i.jsx)(d.Y, {
                targetElementRef: _,
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, i.jsx)(p.A, {
                        onClose: n,
                        guildBoostSlot: t,
                        premiumSubscription: l,
                        hasCancelableGuildBoostSlot: r,
                        fractionalState: S.fractionalState,
                    });
                },
                position: "right",
                align: "center",
                children: (e) =>
                    (0, i.jsx)(u.D, {
                        innerRef: _,
                        "aria-label": I.intl.string(I.t.PdRCRg),
                        className: y.Mj,
                        ...e,
                        children: (0, i.jsx)(c.j, { size: "xs", color: g.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                    }),
            }),
        ],
    });
}
function R(e) {
    let { guildId: t, slots: n, premiumSubscription: s, hasCancelableSlots: l } = e,
        a = (0, r.bG)([E.A], () => E.A.getGuild(t), [t]);
    return (0, i.jsxs)("div", {
        className: y.Nr,
        children: [
            (0, i.jsx)("div", {
                className: y.MY,
                children:
                    null != a
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(C.R, { guild: a, className: y.OA }),
                                  (0, i.jsx)(m.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: I.intl.string(I.t.KLOhbO),
                                      onClick: () => {
                                          (0, b.default)(),
                                              (0, h.K4)({
                                                  guildId: a.id,
                                                  location: {
                                                      section: v.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA,
                                                  },
                                              });
                                      },
                                  }),
                              ],
                          })
                        : (0, i.jsx)("div", {
                              className: y.OA,
                              children: (0, i.jsx)(_.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: I.intl.string(I.t["6Kwwuo"]),
                              }),
                          }),
            }),
            n.map((e, t) =>
                (0, i.jsx)(
                    O,
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
function L(e) {
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
                                x.A.createFromServer(
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
                if ((!(0, T.I5)(s) && e++, null != s.premiumGuildSubscription)) {
                    let e = s.premiumGuildSubscription.guildId;
                    e in i || (i[e] = []), i[e].push(s);
                }
            }
            return { boostsByGuildId: i, numActiveSlots: e };
        }, [t, a, l, n]);
    if (null == n || 0 === Object.keys(r).length) return null;
    let d = o > S.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, i.jsx)("div", {
        className: y.kR,
        children: f.default
            .keys(r)
            .map((e) => (0, i.jsx)(R, { guildId: e, slots: r[e], premiumSubscription: n, hasCancelableSlots: d }, e)),
    });
}

n.d(t, {
    Z: () => L,
    r: () => x,
}),
    n(539854),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(205120),
    o = n(399606),
    s = n(481060),
    l = n(607070),
    c = n(975298),
    u = n(280942),
    d = n(209747),
    f = n(430824),
    p = n(267642),
    _ = n(74538),
    m = n(709054),
    h = n(357956),
    g = n(275909),
    E = n(300037),
    b = n(981631),
    y = n(474936),
    O = n(388032),
    v = n(183547);
function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function I(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = 3000;
function N(e) {
    if (null == e || e === b.Eu4.NONE) return "";
    let t = [
        O.intl.formatToPlainString(O.t["dLlKX/"], { numEmojiSlots: y.HO[e].limits.emoji }),
        O.intl.formatToPlainString(O.t["+ANIfv"], { numStickerSlots: y.HO[e].limits.stickers }),
        O.intl.formatToPlainString(O.t["4gt60b"], { numSoundboardSlots: y.HO[e].limits.soundboardSounds }),
        O.intl.formatToPlainString(O.t.XahSjZ, {
            resolution: y.HO[e].limits.screenShareQualityResolution,
            framerate: y.HO[e].limits.screenShareQualityFramerate,
        }),
        O.intl.formatToPlainString(O.t.NbNs7S, { bitrate: y.HO[e].limits.bitrate / 1000 }),
        O.intl.formatToPlainString(O.t.VVKcpn, { filesize: y.HO[e].limits.fileSize / 1024 / 1024 }),
        O.intl.formatToPlainString(O.t.TbpCvv, { numVideoStageSeats: y.HO[e].limits.stageVideoUsers }),
        O.intl.string(O.t.LDyX3i),
        O.intl.string(O.t.YtGlPW),
    ];
    e >= b.Eu4.TIER_2 && (t.push(O.intl.string(O.t.SztbtN)), t.push(O.intl.string(O.t["3GK91n"]))),
        e >= b.Eu4.TIER_3 && t.push(O.intl.string(O.t["XUUJd+"]));
    let n = t[Math.floor(Math.random() * t.length)];
    return O.intl.format(O.t["/dOAmQ"], { perk: n });
}
function P(e) {
    let {
            guildTier: t,
            guildBoostSlot: n,
            showAltText: o,
            isCanceled: l,
            premiumSubscription: c,
            fractionalPremiumInfo: u,
        } = e,
        d = i.useMemo(() => {
            if (l) {
                let e = c.currentPeriodEnd;
                return (
                    c.isPausedForFractionalPremium && (e = u.endsAt.toDate()), O.intl.format(O.t.Z4ULRD, { date: e })
                );
            }
            let e = null != n.premiumGuildSubscription ? m.default.extractTimestamp(n.premiumGuildSubscription.id) : 0;
            return O.intl.formatToPlainString(O.t.lY2Bur, { date: new Date(e) });
        }, [n, l, c, u]),
        f = i.useMemo(() => N(t), [t]),
        p = (0, s.Yzy)(
            o,
            {
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 },
            },
            "animate-always",
        );
    return l || t === b.Eu4.NONE
        ? (0, r.jsx)("div", {
              className: v.boostDescriptionInnerContainer,
              children: (0, r.jsx)(s.Text, {
                  variant: "text-sm/medium",
                  color: "text-muted",
                  children: d,
              }),
          })
        : p((e, t) =>
              (0, r.jsx)(a.animated.div, {
                  style: e,
                  className: v.boostDescriptionInnerContainer,
                  children: (0, r.jsx)(s.Text, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      children: t ? f : d,
                  }),
              }),
          );
}
function R(e) {
    let {
            guildTier: t,
            guildBoostSlot: n,
            premiumSubscription: a,
            hasCancelableGuildBoostSlot: d,
            showAltText: f,
            isLastGuildBoostSlot: _,
        } = e,
        m = (0, o.e7)([l.Z], () => l.Z.useReducedMotion),
        E = i.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n]),
        b = i.useMemo(() => null != E && E > new Date(), [E]),
        y = (0, p.tl)(n),
        S = (0, c.Z)(),
        T = i.useRef(null);
    function C(e) {
        let { closePopout: t } = e;
        return (0, r.jsx)(u.Z, {
            onClose: t,
            guildBoostSlot: n,
            premiumSubscription: a,
            hasCancelableGuildBoostSlot: d,
            fractionalState: S.fractionalState,
        });
    }
    return (0, r.jsxs)("div", {
        className: v.boostContainer,
        children: [
            (0, r.jsxs)("div", {
                className: v.boostInnerContainer,
                children: [
                    (0, r.jsx)(g.Z, {
                        isCanceled: y,
                        hasCooldown: b,
                        useReducedMotion: m,
                    }),
                    (0, r.jsx)("div", {
                        className: v.boostDescriptionContainer,
                        children:
                            null != E && b && !y
                                ? (0, r.jsx)(h.Z, {
                                      className: v.boostDescriptionInnerContainer,
                                      cooldown: E.getTime(),
                                  })
                                : (0, r.jsx)(P, {
                                      guildTier: t,
                                      guildBoostSlot: n,
                                      showAltText: f,
                                      isCanceled: y,
                                      premiumSubscription: a,
                                      fractionalPremiumInfo: S,
                                  }),
                    }),
                    (0, r.jsx)(s.yRy, {
                        targetElementRef: T,
                        renderPopout: C,
                        position: "right",
                        align: "center",
                        children: (e) =>
                            (0, r.jsx)(
                                s.P3F,
                                A(I({}, e), {
                                    innerRef: T,
                                    "aria-label": O.intl.string(O.t.PdRCRg),
                                    className: v.boostSlotMenuIcon,
                                    children: (0, r.jsx)(s.Huf, {
                                        size: "md",
                                        color: "currentColor",
                                    }),
                                }),
                            ),
                    }),
                ],
            }),
            !_ && (0, r.jsx)("div", { className: v.boostContainerSeparator }),
        ],
    });
}
function w(e) {
    let {
            guildId: t,
            guildBoostSlotRecords: n,
            premiumSubscription: i,
            hasCancelableGuildBoostSlot: a,
            showAltText: s,
        } = e,
        l = (0, o.e7)([f.Z], () => f.Z.getGuild(t), [t]);
    return (0, r.jsxs)("div", {
        className: v.appliedBoostContainer,
        children: [
            (0, r.jsx)(E.Z, {
                guildId: t,
                boostingVariant: !1,
            }),
            n.map((e, t) =>
                (0, r.jsx)(
                    R,
                    {
                        guildTier: null == l ? void 0 : l.premiumTier,
                        guildBoostSlot: e,
                        premiumSubscription: i,
                        hasCancelableGuildBoostSlot: a,
                        showAltText: s,
                        isLastGuildBoostSlot: t === n.length - 1,
                    },
                    e.id,
                ),
            ),
        ],
    });
}
function D(e) {
    let { guildId: t, appliedGuildBoosts: n, premiumSubscription: i } = e,
        a = (0, o.e7)([f.Z], () => f.Z.getGuild(t), [t]),
        s = m.default.fromTimestamp(Date.now());
    if (
        (n.forEach((e) => {
            (null == s || 0 > m.default.compare(e.id, s)) && (s = e.id);
        }),
        null == s)
    )
        return null;
    let l = d.Z.createFromServer(
        {
            id: m.default.fromTimestamp(Date.now()),
            subscription_id: i.id,
            canceled: !1,
            premium_guild_subscription: {
                id: s,
                guild_id: t,
            },
            cooldown_ends_at: null,
        },
        i,
    );
    return (0, r.jsxs)("div", {
        className: v.appliedBoostContainer,
        children: [
            (0, r.jsx)(E.Z, {
                guildId: t,
                boostingVariant: !1,
            }),
            n.map((e, t) =>
                (0, r.jsx)(
                    R,
                    {
                        guildTier: null == a ? void 0 : a.premiumTier,
                        guildBoostSlot: l,
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
function x(e) {
    let { appliedGuildBoosts: t, premiumSubscription: n } = e,
        a = i.useMemo(() => {
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
              className: v.wrapper,
              children: [
                  (0, r.jsx)("div", {
                      className: v.container,
                      children: m.default.keys(a).map((e) =>
                          (0, r.jsx)(
                              D,
                              {
                                  guildId: e,
                                  premiumSubscription: n,
                                  appliedGuildBoosts: a[e],
                              },
                              e,
                          ),
                      ),
                  }),
                  (0, r.jsx)("div", { className: v.mainSeparator }),
              ],
          });
}
function L(e) {
    let { guildBoostSlots: t, premiumSubscription: n } = e,
        [a, o] = i.useState(!1);
    i.useEffect(() => {
        let e = -1;
        return (
            null != n &&
                (e = setInterval(() => {
                    o((e) => !e);
                }, C)),
            () => {
                clearInterval(e);
            }
        );
    }, [n]);
    let { boostsByGuildId: s, numActiveGuildBoostSlots: l } = i.useMemo(() => {
        let e = 0,
            n = {};
        return (
            Object.keys(t).forEach((r) => {
                let i = t[r];
                if ((!(0, p.tl)(i) && e++, null != i.premiumGuildSubscription)) {
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
    if (null == n || 0 === Object.keys(s).length) return null;
    let c = l > _.ZP.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, r.jsxs)("div", {
        className: v.wrapper,
        children: [
            (0, r.jsx)("div", {
                className: v.container,
                children: m.default.keys(s).map((e) =>
                    (0, r.jsx)(
                        w,
                        {
                            guildId: e,
                            guildBoostSlotRecords: s[e],
                            premiumSubscription: n,
                            hasCancelableGuildBoostSlot: c,
                            showAltText: a,
                        },
                        e,
                    ),
                ),
            }),
            (0, r.jsx)("div", { className: v.mainSeparator }),
        ],
    });
}

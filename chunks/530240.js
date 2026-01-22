n.d(t, {
    A: () => L,
    N: () => x,
}),
    n(321073),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(432022),
    s = n(417597),
    o = n(397927),
    l = n(775602),
    c = n(531260),
    u = n(39672),
    d = n(545934),
    f = n(71393),
    p = n(473145),
    _ = n(927578),
    h = n(661191),
    m = n(101135),
    g = n(708030),
    E = n(358172),
    b = n(652215),
    y = n(788868),
    O = n(985018),
    A = n(325234);
function v(e, t, n) {
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
function S(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = 3000;
function N(e) {
    if (null == e || e === b.TVA.NONE) return "";
    let t = [
        O.intl.formatToPlainString(O.t["dLlKX/"], { numEmojiSlots: y.TG[e].limits.emoji }),
        O.intl.formatToPlainString(O.t["+ANIfv"], { numStickerSlots: y.TG[e].limits.stickers }),
        O.intl.formatToPlainString(O.t["4gt60b"], { numSoundboardSlots: y.TG[e].limits.soundboardSounds }),
        O.intl.formatToPlainString(O.t.XahSjZ, {
            resolution: y.TG[e].limits.screenShareQualityResolution,
            framerate: y.TG[e].limits.screenShareQualityFramerate,
        }),
        O.intl.formatToPlainString(O.t.NbNs7S, { bitrate: y.TG[e].limits.bitrate / 1000 }),
        O.intl.formatToPlainString(O.t.VVKcpn, { filesize: y.TG[e].limits.fileSize / 1024 / 1024 }),
        O.intl.formatToPlainString(O.t.TbpCvv, { numVideoStageSeats: y.TG[e].limits.stageVideoUsers }),
        O.intl.string(O.t.LDyX3i),
        O.intl.string(O.t.YtGlPW),
    ];
    e >= b.TVA.TIER_2 && (t.push(O.intl.string(O.t.SztbtN)), t.push(O.intl.string(O.t["3GK91n"]))),
        e >= b.TVA.TIER_3 && t.push(O.intl.string(O.t["XUUJd+"]));
    let n = t[Math.floor(Math.random() * t.length)];
    return O.intl.format(O.t["/dOAmQ"], { perk: n });
}
function R(e) {
    let {
            guildTier: t,
            guildBoostSlot: n,
            showAltText: s,
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
            let e = null != n.premiumGuildSubscription ? h.default.extractTimestamp(n.premiumGuildSubscription.id) : 0;
            return O.intl.formatToPlainString(O.t.lY2Bur, { date: new Date(e) });
        }, [n, l, c, u]),
        f = i.useMemo(() => N(t), [t]),
        p = (0, o.pnh)(
            s,
            {
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 },
            },
            "animate-always",
        );
    return l || t === b.TVA.NONE
        ? (0, r.jsx)("div", {
              className: A.xm,
              children: (0, r.jsx)(o.Text, {
                  variant: "text-sm/medium",
                  color: "text-muted",
                  children: d,
              }),
          })
        : p((e, t) =>
              (0, r.jsx)(a.animated.div, {
                  style: e,
                  className: A.xm,
                  children: (0, r.jsx)(o.Text, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      children: t ? f : d,
                  }),
              }),
          );
}
function w(e) {
    let {
            guildTier: t,
            guildBoostSlot: n,
            premiumSubscription: a,
            hasCancelableGuildBoostSlot: d,
            showAltText: f,
            isLastGuildBoostSlot: _,
        } = e,
        h = (0, s.bG)([l.A], () => l.A.useReducedMotion),
        E = i.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n]),
        b = i.useMemo(() => null != E && E > new Date(), [E]),
        y = (0, p.I5)(n),
        v = (0, c.A)(),
        I = i.useRef(null);
    function C(e) {
        let { closePopout: t } = e;
        return (0, r.jsx)(u.A, {
            onClose: t,
            guildBoostSlot: n,
            premiumSubscription: a,
            hasCancelableGuildBoostSlot: d,
            fractionalState: v.fractionalState,
        });
    }
    return (0, r.jsxs)("div", {
        className: A.PW,
        children: [
            (0, r.jsxs)("div", {
                className: A.$U,
                children: [
                    (0, r.jsx)(g.A, {
                        isCanceled: y,
                        hasCooldown: b,
                        useReducedMotion: h,
                    }),
                    (0, r.jsx)("div", {
                        className: A.vh,
                        children:
                            null != E && b && !y
                                ? (0, r.jsx)(m.A, {
                                      className: A.xm,
                                      cooldown: E.getTime(),
                                  })
                                : (0, r.jsx)(R, {
                                      guildTier: t,
                                      guildBoostSlot: n,
                                      showAltText: f,
                                      isCanceled: y,
                                      premiumSubscription: a,
                                      fractionalPremiumInfo: v,
                                  }),
                    }),
                    (0, r.jsx)(o.YNO, {
                        targetElementRef: I,
                        renderPopout: C,
                        position: "right",
                        align: "center",
                        children: (e) =>
                            (0, r.jsx)(
                                o.DUT,
                                T(S({}, e), {
                                    innerRef: I,
                                    "aria-label": O.intl.string(O.t.PdRCRg),
                                    className: A.oU,
                                    children: (0, r.jsx)(o.FHP, {
                                        size: "md",
                                        color: "currentColor",
                                    }),
                                }),
                            ),
                    }),
                ],
            }),
            !_ && (0, r.jsx)("div", { className: A.eX }),
        ],
    });
}
function P(e) {
    let {
            guildId: t,
            guildBoostSlotRecords: n,
            premiumSubscription: i,
            hasCancelableGuildBoostSlot: a,
            showAltText: o,
        } = e,
        l = (0, s.bG)([f.A], () => f.A.getGuild(t), [t]);
    return (0, r.jsxs)("div", {
        className: A.ag,
        children: [
            (0, r.jsx)(E.A, {
                guildId: t,
                boostingVariant: !1,
            }),
            n.map((e, t) =>
                (0, r.jsx)(
                    w,
                    {
                        guildTier: null == l ? void 0 : l.premiumTier,
                        guildBoostSlot: e,
                        premiumSubscription: i,
                        hasCancelableGuildBoostSlot: a,
                        showAltText: o,
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
        a = (0, s.bG)([f.A], () => f.A.getGuild(t), [t]),
        o = h.default.fromTimestamp(Date.now());
    if (
        (n.forEach((e) => {
            (null == o || 0 > h.default.compare(e.id, o)) && (o = e.id);
        }),
        null == o)
    )
        return null;
    let l = d.A.createFromServer(
        {
            id: h.default.fromTimestamp(Date.now()),
            subscription_id: i.id,
            canceled: !1,
            premium_guild_subscription: {
                id: o,
                guild_id: t,
            },
            cooldown_ends_at: null,
        },
        i,
    );
    return (0, r.jsxs)("div", {
        className: A.ag,
        children: [
            (0, r.jsx)(E.A, {
                guildId: t,
                boostingVariant: !1,
            }),
            n.map((e, t) =>
                (0, r.jsx)(
                    w,
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
              className: A.iE,
              children: [
                  (0, r.jsx)("div", {
                      className: A.kL,
                      children: h.default.keys(a).map((e) =>
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
                  (0, r.jsx)("div", { className: A.vK }),
              ],
          });
}
function L(e) {
    let { guildBoostSlots: t, premiumSubscription: n } = e,
        [a, s] = i.useState(!1);
    i.useEffect(() => {
        let e = -1;
        return (
            null != n &&
                (e = setInterval(() => {
                    s((e) => !e);
                }, C)),
            () => {
                clearInterval(e);
            }
        );
    }, [n]);
    let { boostsByGuildId: o, numActiveGuildBoostSlots: l } = i.useMemo(() => {
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
    if (null == n || 0 === Object.keys(o).length) return null;
    let c = l > _.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, r.jsxs)("div", {
        className: A.iE,
        children: [
            (0, r.jsx)("div", {
                className: A.kL,
                children: h.default.keys(o).map((e) =>
                    (0, r.jsx)(
                        P,
                        {
                            guildId: e,
                            guildBoostSlotRecords: o[e],
                            premiumSubscription: n,
                            hasCancelableGuildBoostSlot: c,
                            showAltText: a,
                        },
                        e,
                    ),
                ),
            }),
            (0, r.jsx)("div", { className: A.vK }),
        ],
    });
}

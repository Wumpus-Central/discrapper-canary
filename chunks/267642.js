n.d(t, {
    A3: () => N,
    FZ: () => A,
    Hl: () => ee,
    Je: () => w,
    Jh: () => k,
    KK: () => q,
    Oe: () => C,
    Qi: () => Y,
    Ro: () => I,
    _k: () => B,
    _p: () => j,
    aq: () => Z,
    cP: () => D,
    e9: () => L,
    ee: () => X,
    gZ: () => H,
    ge: () => M,
    ig: () => P,
    nL: () => K,
    nW: () => x,
    tb: () => U,
    tl: () => Q,
    vx: () => G,
    y4: () => z,
    yw: () => W,
}),
    n(583741),
    n(415506),
    n(388685),
    n(642613);
var r = n(392711),
    i = n.n(r);
n(913527);
var a = n(274136),
    o = n(179360),
    s = n(317169),
    l = n(151494),
    c = n(430824),
    u = n(594174),
    d = n(314884),
    f = n(78839),
    p = n(424218),
    _ = n(823379),
    m = n(63063),
    h = n(74538),
    g = n(960048),
    E = n(981631),
    b = n(185923),
    y = n(474936),
    O = n(282793),
    v = n(388032),
    S = n(353149);
Object.freeze({
    1: 1,
    2: 2,
    3: 3,
    4: 6,
    5: 9,
    6: 12,
    7: 15,
    8: 18,
    9: 24,
});
var I = (function (e) {
    return (
        (e[(e.EMOJI = 1)] = "EMOJI"),
        (e[(e.AUDIO = 2)] = "AUDIO"),
        (e[(e.ANIMATED = 3)] = "ANIMATED"),
        (e[(e.CUSTOMIZATION = 4)] = "CUSTOMIZATION"),
        (e[(e.UPLOAD = 5)] = "UPLOAD"),
        (e[(e.VANITY = 6)] = "VANITY"),
        (e[(e.STREAM = 7)] = "STREAM"),
        (e[(e.STICKER = 8)] = "STICKER"),
        (e[(e.CUSTOM_ROLE_ICON = 11)] = "CUSTOM_ROLE_ICON"),
        (e[(e.STAGE_VIDEO = 12)] = "STAGE_VIDEO"),
        (e[(e.SOUNDBOARD = 13)] = "SOUNDBOARD"),
        e
    );
})({});
let T = [E.Eu4.NONE, E.Eu4.TIER_1, E.Eu4.TIER_2, E.Eu4.TIER_3],
    C = T.slice().reverse(),
    A = (e) => {
        var t;
        return e === E.Eu4.NONE ? E.Eu4.TIER_1 : null == (t = V.find((t) => t.tier === e)) ? void 0 : t.nextTier;
    },
    N = (e, t) =>
        null != t && t.features.has(E.GuildFeatures.MORE_STICKERS) && e === E.Eu4.TIER_3
            ? a.D.MAX_STICKER_SLOTS
            : y.$8[e],
    P = (e) => y.pH[e],
    R = (e, t) => (null != t && t.features.has(E.GuildFeatures.MORE_SOUNDBOARD) ? y.w1 : y._k[e]),
    w = (e) => {
        if (e === E.Eu4.NONE) return y._k[e];
        let t = T[T.indexOf(e) - 1];
        return y._k[e] - y._k[t];
    },
    D = (e) => [
        {
            tier: E.Eu4.TIER_1,
            title: v.intl.string(v.t["lK+WOT"]),
            perks: [
                {
                    title: v.intl.formatToPlainString(v.t.dnLAwl, {
                        adding: y.HO[E.Eu4.TIER_1].limits.emoji - y.HO[E.Eu4.NONE].limits.emoji,
                        total: y.HO[E.Eu4.TIER_1].limits.emoji,
                    }),
                    description: v.intl.string(v.t["/Guvxs"]),
                    icon: 1,
                },
                {
                    title: v.intl.formatToPlainString(v.t["/9p2/g"], {
                        adding: P(E.Eu4.TIER_1),
                        total: N(E.Eu4.TIER_1),
                    }),
                    description: v.intl.string(v.t.JfsnDQ),
                    icon: 8,
                },
                {
                    title: v.intl.formatToPlainString(v.t.NRuk5m, {
                        soundCount: w(E.Eu4.TIER_1),
                        totalSoundCount: R(E.Eu4.TIER_1),
                    }),
                    description: v.intl.string(v.t.Oq7OVl),
                    icon: 13,
                },
                {
                    title: v.intl.formatToPlainString(v.t.zoT1ZE, {
                        bitrate: y.HO[E.Eu4.TIER_1].limits.bitrate / 1000,
                    }),
                    description: v.intl.string(v.t["8a03jk"]),
                    icon: 2,
                },
                {
                    title: v.intl.string(v.t.h0s84V),
                    description: v.intl.format(v.t["t+0cbk"], {}),
                    icon: 3,
                },
                {
                    title: v.intl.string(v.t.vjPGPp),
                    description: v.intl.string(v.t.tG4MMU),
                    icon: 4,
                },
                {
                    title: v.intl.string(v.t.cObMZD),
                    description: v.intl.string(v.t["puH/9R"]),
                    icon: 7,
                },
            ].filter(_.lm),
        },
        {
            tier: E.Eu4.TIER_2,
            title: v.intl.string(v.t["34GpBc"]),
            perks: [
                {
                    title: v.intl.formatToPlainString(v.t.dnLAwl, {
                        adding: y.HO[E.Eu4.TIER_2].limits.emoji - y.HO[E.Eu4.TIER_1].limits.emoji,
                        total: y.HO[E.Eu4.TIER_2].limits.emoji,
                    }),
                    description: v.intl.string(v.t.fRiNhw),
                    icon: 1,
                },
                {
                    title: v.intl.formatToPlainString(v.t["/9p2/g"], {
                        adding: P(E.Eu4.TIER_2),
                        total: N(E.Eu4.TIER_2),
                    }),
                    description: v.intl.string(v.t.t4TM28),
                    icon: 8,
                },
                {
                    title: v.intl.formatToPlainString(v.t.NRuk5m, {
                        soundCount: w(E.Eu4.TIER_2),
                        totalSoundCount: R(E.Eu4.TIER_2),
                    }),
                    description: v.intl.string(v.t.pEYlPZ),
                    icon: 13,
                },
                {
                    title: v.intl.formatToPlainString(v.t.zoT1ZE, {
                        bitrate: y.HO[E.Eu4.TIER_2].limits.bitrate / 1000,
                    }),
                    description: v.intl.string(v.t["nzRo/I"]),
                    icon: 2,
                },
                {
                    title: v.intl.string(v.t["+KhQKM"]),
                    description: v.intl.string(v.t.ZWf10P),
                    icon: 4,
                },
                {
                    title: v.intl.formatToPlainString(v.t.t95LnM, {
                        fileSize: (0, p.BU)(y.HO[E.Eu4.TIER_2].limits.fileSize / 1024, { useKibibytes: !0 }),
                    }),
                    description: v.intl.format(v.t.yvht65, {}),
                    icon: 5,
                },
                {
                    title: v.intl.string(v.t.bmaoNI),
                    description: v.intl.string(v.t.WZW2Bj),
                    icon: 7,
                },
                {
                    title: v.intl.string(v.t.BHtqcV),
                    description: v.intl.string(v.t.ukVcEe),
                    icon: 11,
                },
                e
                    ? {
                          title: v.intl.formatToPlainString(v.t.T8P3TH, { limit: E.eez }),
                          description: v.intl.formatToPlainString(v.t.T8P3TH, { limit: E.eez }),
                          icon: 12,
                      }
                    : null,
            ].filter(_.lm),
        },
        {
            tier: E.Eu4.TIER_3,
            title: v.intl.string(v.t.P7LdcQ),
            perks: [
                {
                    title: v.intl.formatToPlainString(v.t.dnLAwl, {
                        adding: y.HO[E.Eu4.TIER_3].limits.emoji - y.HO[E.Eu4.TIER_2].limits.emoji,
                        total: y.HO[E.Eu4.TIER_3].limits.emoji,
                    }),
                    description: v.intl.string(v.t.AfJxnV),
                    icon: 1,
                },
                {
                    title: v.intl.formatToPlainString(v.t["/9p2/g"], {
                        adding: P(E.Eu4.TIER_3),
                        total: N(E.Eu4.TIER_3),
                    }),
                    description: v.intl.string(v.t["+ZI4QZ"]),
                    icon: 8,
                },
                {
                    title: v.intl.formatToPlainString(v.t.NRuk5m, {
                        soundCount: w(E.Eu4.TIER_3),
                        totalSoundCount: R(E.Eu4.TIER_3),
                    }),
                    description: v.intl.string(v.t["8omJSY"]),
                    icon: 13,
                },
                {
                    title: v.intl.formatToPlainString(v.t.zoT1ZE, {
                        bitrate: y.HO[E.Eu4.TIER_3].limits.bitrate / 1000,
                    }),
                    description: v.intl.string(v.t["cOkbp/"]),
                    icon: 2,
                },
                {
                    title: v.intl.string(v.t.C2w2cM),
                    description: v.intl.format(v.t["3Reosx"], {
                        helpdeskArticle: m.Z.getArticleURL(E.BhN.GUILD_VANITY_URL),
                    }),
                    icon: 6,
                },
                {
                    title: v.intl.formatToPlainString(v.t.t95LnM, {
                        fileSize: (0, p.BU)(y.HO[E.Eu4.TIER_3].limits.fileSize / 1024, { useKibibytes: !0 }),
                    }),
                    description: v.intl.format(v.t.IwDqSL, {}),
                    icon: 5,
                },
                {
                    title: v.intl.string(v.t.z0GtBG),
                    description: v.intl.string(v.t.v92GNV),
                    icon: 3,
                },
                e
                    ? {
                          title: v.intl.formatToPlainString(v.t.T8P3TH, { limit: E.RcX }),
                          description: v.intl.formatToPlainString(v.t.T8P3TH, { limit: E.RcX }),
                          icon: 12,
                      }
                    : null,
            ].filter(_.lm),
        },
    ];
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { useLevels: n = !0 } = t;
    switch (e) {
        case E.Eu4.NONE:
            return n ? v.intl.string(v.t.LcKgJd) : v.intl.string(v.t.mx8j2m);
        case E.Eu4.TIER_1:
            return v.intl.string(v.t.nzXtaS);
        case E.Eu4.TIER_2:
            return v.intl.string(v.t["h33/uW"]);
        case E.Eu4.TIER_3:
            return v.intl.string(v.t.BfF6ED);
        default:
            throw Error("Not a valid tier type");
    }
}
function L(e) {
    switch (e) {
        case E.Eu4.NONE:
            return v.intl.string(v.t.LcKgJd);
        case E.Eu4.TIER_1:
            return v.intl.string(v.t.xRjU1V);
        case E.Eu4.TIER_2:
            return v.intl.string(v.t.C7e2Bo);
        case E.Eu4.TIER_3:
            return v.intl.string(v.t.avGxmk);
        default:
            throw Error("Not a valid tier type");
    }
}
let j = i().memoize((e) =>
        y.HO[E.Eu4.TIER_1].features.includes(e)
            ? E.Eu4.TIER_1
            : y.HO[E.Eu4.TIER_2].features.includes(e)
              ? E.Eu4.TIER_2
              : y.HO[E.Eu4.TIER_3].features.includes(e)
                ? E.Eu4.TIER_3
                : null,
    ),
    M = (e) =>
        e === E.Eu4.NONE
            ? E.AnalyticsObjectTypes.NONE
            : e === E.Eu4.TIER_1
              ? E.AnalyticsObjectTypes.TIER_1
              : e === E.Eu4.TIER_2
                ? E.AnalyticsObjectTypes.TIER_2
                : e === E.Eu4.TIER_3
                  ? E.AnalyticsObjectTypes.TIER_3
                  : null;
function k(e) {
    var t;
    let n = null == (t = c.Z.getGuild(e)) ? void 0 : t.premiumTier;
    return null != n ? n : E.Eu4.NONE;
}
function U(e, t) {
    return null == t || (null != e && e >= t);
}
function G(e) {
    return i()
        .values(e)
        .filter((e) => e.isAvailable());
}
function Z(e) {
    let { fractionalState: t } = e,
        n = f.Z.getPremiumTypeSubscription(),
        r = u.default.getCurrentUser();
    d.Z.hasFetched || d.Z.isFetching || (0, o.X8)();
    let i = G(d.Z.boostSlots),
        a = null == n ? void 0 : n.isPausedOrPausePending,
        s = i.length > 0;
    if (a && t === y.a$.NONE && !s) return v.intl.string(v.t.mOWsF1);
    if (null == r ? void 0 : r.isPremiumGroupMember())
        return v.intl.formatToPlainString(S.default["5xN/C1"], { premiumGroupProductName: (0, O.sO)() });
    let { numAvailableGuildBoostSlots: l, numCanceledGuildBoostSlots: c } = Object.values(d.Z.boostSlots).reduce(
        (e, t) => (Q(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e),
        {
            numAvailableGuildBoostSlots: 0,
            numCanceledGuildBoostSlots: 0,
        },
    );
    if (null == n || l > 0) return null;
    if (n.status === E.O0b.PAST_DUE) return v.intl.string(v.t.De4Vm6);
    if (n.status === E.O0b.ACCOUNT_HOLD) return v.intl.string(v.t.JakNQ8);
    if (c > 0) return v.intl.string(v.t.x25mZR);
    if (null == n.renewalMutations) return null;
    let p = h.uV(n.renewalMutations.additionalPlans);
    return h.uV(n.additionalPlans) > p ? v.intl.string(v.t.x25mZR) : v.intl.string(v.t["W/bb8f"]);
}
function F(e) {
    return e.sort((e, t) => (null != e.endsAt && null != t.endsAt ? e.endsAt.getTime() - t.endsAt.getTime() : -1));
}
function B(e, t) {
    var n;
    if ((null == (n = c.Z.getGuild(t)) ? void 0 : n.features.has(E.GuildFeatures.PREMIUM_TIER_3_OVERRIDE)) === !0)
        return 0;
    let r = k(t),
        i = E.oCV[r],
        a = e.filter((e) => null != e.endsAt);
    return i - (e.length - a.length);
}
let V = [
    {
        tier: E.Eu4.TIER_3,
        amount: E.oCV[E.Eu4.TIER_3],
        nextTier: null,
    },
    {
        tier: E.Eu4.TIER_2,
        amount: E.oCV[E.Eu4.TIER_2],
        nextTier: E.Eu4.TIER_3,
    },
    {
        tier: E.Eu4.TIER_1,
        amount: E.oCV[E.Eu4.TIER_1],
        nextTier: E.Eu4.TIER_2,
    },
];
function H(e, t) {
    let n = B(e, t);
    if (n > 0) {
        let r = F(e).filter((e) => null != e.endsAt),
            i = r.length - n;
        i < 0 &&
            g.Z.addBreadcrumb({
                category: "premium",
                message: "Negative index while checking grace period ending date.",
                data: {
                    subscriptionLength: e.length,
                    subscriptionsNeededForPremiumTier: E.oCV[k(t)],
                    endingSubscriptionLength: r.length,
                },
            });
        let a = r[Math.max(i, 0)];
        return null == a ? void 0 : a.endsAt;
    }
    return null;
}
function Y(e, t) {
    let n = P(t),
        r = T.indexOf(t);
    if (-1 === r) return 0;
    let i = T[r - 1],
        a = null != i ? N(i) : 0,
        o = N(t);
    return Math.max(0, n - e.slice(a, o).length);
}
function W(e, t, n) {
    return -1 === T.indexOf(n) ? 0 : Math.max(0, K(e) - t.length);
}
function K(e) {
    var t, n;
    let r = y.XB + (null != (n = null == (t = e.premiumFeatures) ? void 0 : t.additionalSoundSlots) ? n : 0);
    return Math.max(e.features.has(E.GuildFeatures.MORE_SOUNDBOARD) ? y.w1 : y.XB, r);
}
function z(e) {
    var t, n;
    let r = b.xD + (null != (n = null == (t = e.premiumFeatures) ? void 0 : t.additionalEmojiSlots) ? n : 0);
    return Math.max(e.features.has(E.GuildFeatures.MORE_EMOJI) ? b.IE : b.xD, r);
}
function q(e, t) {
    let n = (0, s.I)(e.id).available;
    return Math.max(0, E.oCV[t] - n);
}
function Q(e) {
    var t;
    return (null == (t = e.subscription) ? void 0 : t.status) === E.O0b.CANCELED || e.canceled;
}
function X(e) {
    var t;
    return null != (t = C.find((t) => e >= E.oCV[t])) ? t : E.Eu4.NONE;
}
function J(e) {
    var t;
    return null != (t = T.find((t) => e < E.oCV[t])) ? t : E.Eu4.TIER_3;
}
let $ = {
    [E.Eu4.NONE]: 0,
    [E.Eu4.TIER_1]: 1 / 3,
    [E.Eu4.TIER_2]: 2 / 3,
    [E.Eu4.TIER_3]: 1,
};
function ee(e) {
    let t = (0, l.I)(e.id),
        n = X(t),
        r = J(t),
        i = E.oCV[n],
        a = (t - i) / (E.oCV[r] - i),
        o = $[n],
        s = $[r];
    return {
        fillFactor: n === E.Eu4.TIER_3 ? 1 : a * (s - o) + o,
        totalAvailableBoostsCount: t,
    };
}

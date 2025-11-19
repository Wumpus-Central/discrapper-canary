n.d(t, {
    A3: () => S,
    FZ: () => T,
    Hl: () => Q,
    Je: () => N,
    Jh: () => x,
    KK: () => W,
    Oe: () => I,
    Qi: () => F,
    Ro: () => O,
    _k: () => G,
    _p: () => w,
    aq: () => j,
    cP: () => R,
    e9: () => D,
    ee: () => z,
    gZ: () => Z,
    ge: () => L,
    ig: () => A,
    nL: () => H,
    nW: () => P,
    tb: () => M,
    tl: () => K,
    vx: () => k,
    y4: () => Y,
    yw: () => V,
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
    u = n(314884),
    d = n(78839),
    f = n(424218),
    _ = n(823379),
    p = n(63063),
    h = n(74538),
    m = n(960048),
    g = n(981631),
    E = n(185923),
    b = n(474936),
    y = n(388032);
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
var O = (function (e) {
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
let v = [g.Eu4.NONE, g.Eu4.TIER_1, g.Eu4.TIER_2, g.Eu4.TIER_3],
    I = v.slice().reverse(),
    T = (e) => {
        var t;
        return e === g.Eu4.NONE ? g.Eu4.TIER_1 : null == (t = B.find((t) => t.tier === e)) ? void 0 : t.nextTier;
    },
    S = (e, t) =>
        null != t && t.features.has(g.GuildFeatures.MORE_STICKERS) && e === g.Eu4.TIER_3
            ? a.D.MAX_STICKER_SLOTS
            : b.$8[e],
    A = (e) => b.pH[e],
    C = (e, t) => (null != t && t.features.has(g.GuildFeatures.MORE_SOUNDBOARD) ? b.w1 : b._k[e]),
    N = (e) => {
        if (e === g.Eu4.NONE) return b._k[e];
        let t = v[v.indexOf(e) - 1];
        return b._k[e] - b._k[t];
    },
    R = (e) => [
        {
            tier: g.Eu4.TIER_1,
            title: y.intl.string(y.t["lK+WOT"]),
            perks: [
                {
                    title: y.intl.formatToPlainString(y.t.dnLAwl, {
                        adding: b.HO[g.Eu4.TIER_1].limits.emoji - b.HO[g.Eu4.NONE].limits.emoji,
                        total: b.HO[g.Eu4.TIER_1].limits.emoji,
                    }),
                    description: y.intl.string(y.t["/Guvxs"]),
                    icon: 1,
                },
                {
                    title: y.intl.formatToPlainString(y.t["/9p2/g"], {
                        adding: A(g.Eu4.TIER_1),
                        total: S(g.Eu4.TIER_1),
                    }),
                    description: y.intl.string(y.t.JfsnDQ),
                    icon: 8,
                },
                {
                    title: y.intl.formatToPlainString(y.t.NRuk5m, {
                        soundCount: N(g.Eu4.TIER_1),
                        totalSoundCount: C(g.Eu4.TIER_1),
                    }),
                    description: y.intl.string(y.t.Oq7OVl),
                    icon: 13,
                },
                {
                    title: y.intl.formatToPlainString(y.t.zoT1ZE, {
                        bitrate: b.HO[g.Eu4.TIER_1].limits.bitrate / 1000,
                    }),
                    description: y.intl.string(y.t["8a03jk"]),
                    icon: 2,
                },
                {
                    title: y.intl.string(y.t.h0s84V),
                    description: y.intl.format(y.t["t+0cbk"], {}),
                    icon: 3,
                },
                {
                    title: y.intl.string(y.t.vjPGPp),
                    description: y.intl.string(y.t.tG4MMU),
                    icon: 4,
                },
                {
                    title: y.intl.string(y.t.cObMZD),
                    description: y.intl.string(y.t["puH/9R"]),
                    icon: 7,
                },
            ].filter(_.lm),
        },
        {
            tier: g.Eu4.TIER_2,
            title: y.intl.string(y.t["34GpBc"]),
            perks: [
                {
                    title: y.intl.formatToPlainString(y.t.dnLAwl, {
                        adding: b.HO[g.Eu4.TIER_2].limits.emoji - b.HO[g.Eu4.TIER_1].limits.emoji,
                        total: b.HO[g.Eu4.TIER_2].limits.emoji,
                    }),
                    description: y.intl.string(y.t.fRiNhw),
                    icon: 1,
                },
                {
                    title: y.intl.formatToPlainString(y.t["/9p2/g"], {
                        adding: A(g.Eu4.TIER_2),
                        total: S(g.Eu4.TIER_2),
                    }),
                    description: y.intl.string(y.t.t4TM28),
                    icon: 8,
                },
                {
                    title: y.intl.formatToPlainString(y.t.NRuk5m, {
                        soundCount: N(g.Eu4.TIER_2),
                        totalSoundCount: C(g.Eu4.TIER_2),
                    }),
                    description: y.intl.string(y.t.pEYlPZ),
                    icon: 13,
                },
                {
                    title: y.intl.formatToPlainString(y.t.zoT1ZE, {
                        bitrate: b.HO[g.Eu4.TIER_2].limits.bitrate / 1000,
                    }),
                    description: y.intl.string(y.t["nzRo/I"]),
                    icon: 2,
                },
                {
                    title: y.intl.string(y.t["+KhQKM"]),
                    description: y.intl.string(y.t.ZWf10P),
                    icon: 4,
                },
                {
                    title: y.intl.formatToPlainString(y.t.t95LnM, {
                        fileSize: (0, f.BU)(b.HO[g.Eu4.TIER_2].limits.fileSize / 1024, { useKibibytes: !0 }),
                    }),
                    description: y.intl.format(y.t.yvht65, {}),
                    icon: 5,
                },
                {
                    title: y.intl.string(y.t.bmaoNI),
                    description: y.intl.string(y.t.WZW2Bj),
                    icon: 7,
                },
                {
                    title: y.intl.string(y.t.BHtqcV),
                    description: y.intl.string(y.t.ukVcEe),
                    icon: 11,
                },
                e
                    ? {
                          title: y.intl.formatToPlainString(y.t.T8P3TH, { limit: g.eez }),
                          description: y.intl.formatToPlainString(y.t.T8P3TH, { limit: g.eez }),
                          icon: 12,
                      }
                    : null,
            ].filter(_.lm),
        },
        {
            tier: g.Eu4.TIER_3,
            title: y.intl.string(y.t.P7LdcQ),
            perks: [
                {
                    title: y.intl.formatToPlainString(y.t.dnLAwl, {
                        adding: b.HO[g.Eu4.TIER_3].limits.emoji - b.HO[g.Eu4.TIER_2].limits.emoji,
                        total: b.HO[g.Eu4.TIER_3].limits.emoji,
                    }),
                    description: y.intl.string(y.t.AfJxnV),
                    icon: 1,
                },
                {
                    title: y.intl.formatToPlainString(y.t["/9p2/g"], {
                        adding: A(g.Eu4.TIER_3),
                        total: S(g.Eu4.TIER_3),
                    }),
                    description: y.intl.string(y.t["+ZI4QZ"]),
                    icon: 8,
                },
                {
                    title: y.intl.formatToPlainString(y.t.NRuk5m, {
                        soundCount: N(g.Eu4.TIER_3),
                        totalSoundCount: C(g.Eu4.TIER_3),
                    }),
                    description: y.intl.string(y.t["8omJSY"]),
                    icon: 13,
                },
                {
                    title: y.intl.formatToPlainString(y.t.zoT1ZE, {
                        bitrate: b.HO[g.Eu4.TIER_3].limits.bitrate / 1000,
                    }),
                    description: y.intl.string(y.t["cOkbp/"]),
                    icon: 2,
                },
                {
                    title: y.intl.string(y.t.C2w2cM),
                    description: y.intl.format(y.t["3Reosx"], {
                        helpdeskArticle: p.Z.getArticleURL(g.BhN.GUILD_VANITY_URL),
                    }),
                    icon: 6,
                },
                {
                    title: y.intl.formatToPlainString(y.t.t95LnM, {
                        fileSize: (0, f.BU)(b.HO[g.Eu4.TIER_3].limits.fileSize / 1024, { useKibibytes: !0 }),
                    }),
                    description: y.intl.format(y.t.IwDqSL, {}),
                    icon: 5,
                },
                {
                    title: y.intl.string(y.t.z0GtBG),
                    description: y.intl.string(y.t.v92GNV),
                    icon: 3,
                },
                e
                    ? {
                          title: y.intl.formatToPlainString(y.t.T8P3TH, { limit: g.RcX }),
                          description: y.intl.formatToPlainString(y.t.T8P3TH, { limit: g.RcX }),
                          icon: 12,
                      }
                    : null,
            ].filter(_.lm),
        },
    ];
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { useLevels: n = !0 } = t;
    switch (e) {
        case g.Eu4.NONE:
            return n ? y.intl.string(y.t.LcKgJd) : y.intl.string(y.t.mx8j2m);
        case g.Eu4.TIER_1:
            return y.intl.string(y.t.nzXtaS);
        case g.Eu4.TIER_2:
            return y.intl.string(y.t["h33/uW"]);
        case g.Eu4.TIER_3:
            return y.intl.string(y.t.BfF6ED);
        default:
            throw Error("Not a valid tier type");
    }
}
function D(e) {
    switch (e) {
        case g.Eu4.NONE:
            return y.intl.string(y.t.LcKgJd);
        case g.Eu4.TIER_1:
            return y.intl.string(y.t.xRjU1V);
        case g.Eu4.TIER_2:
            return y.intl.string(y.t.C7e2Bo);
        case g.Eu4.TIER_3:
            return y.intl.string(y.t.avGxmk);
        default:
            throw Error("Not a valid tier type");
    }
}
let w = i().memoize((e) =>
        b.HO[g.Eu4.TIER_1].features.includes(e)
            ? g.Eu4.TIER_1
            : b.HO[g.Eu4.TIER_2].features.includes(e)
              ? g.Eu4.TIER_2
              : b.HO[g.Eu4.TIER_3].features.includes(e)
                ? g.Eu4.TIER_3
                : null,
    ),
    L = (e) =>
        e === g.Eu4.NONE
            ? g.AnalyticsObjectTypes.NONE
            : e === g.Eu4.TIER_1
              ? g.AnalyticsObjectTypes.TIER_1
              : e === g.Eu4.TIER_2
                ? g.AnalyticsObjectTypes.TIER_2
                : e === g.Eu4.TIER_3
                  ? g.AnalyticsObjectTypes.TIER_3
                  : null;
function x(e) {
    var t;
    let n = null == (t = c.Z.getGuild(e)) ? void 0 : t.premiumTier;
    return null != n ? n : g.Eu4.NONE;
}
function M(e, t) {
    return null == t || (null != e && e >= t);
}
function k(e) {
    return i()
        .values(e)
        .filter((e) => e.isAvailable());
}
function j(e) {
    let { fractionalState: t } = e,
        n = d.Z.getPremiumTypeSubscription();
    u.Z.hasFetched || u.Z.isFetching || (0, o.X8)();
    let r = k(u.Z.boostSlots),
        i = null == n ? void 0 : n.isPausedOrPausePending,
        a = r.length > 0;
    if (i && t === b.a$.NONE && !a) return y.intl.string(y.t.mOWsF1);
    let { numAvailableGuildBoostSlots: s, numCanceledGuildBoostSlots: l } = Object.values(u.Z.boostSlots).reduce(
        (e, t) => (K(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e),
        {
            numAvailableGuildBoostSlots: 0,
            numCanceledGuildBoostSlots: 0,
        },
    );
    if (null == n || s > 0) return null;
    if (n.status === g.O0b.PAST_DUE) return y.intl.string(y.t.De4Vm6);
    if (n.status === g.O0b.ACCOUNT_HOLD) return y.intl.string(y.t.JakNQ8);
    if (l > 0) return y.intl.string(y.t.x25mZR);
    if (null == n.renewalMutations) return null;
    let c = h.uV(n.renewalMutations.additionalPlans);
    return h.uV(n.additionalPlans) > c ? y.intl.string(y.t.x25mZR) : y.intl.string(y.t["W/bb8f"]);
}
function U(e) {
    return e.sort((e, t) => (null != e.endsAt && null != t.endsAt ? e.endsAt.getTime() - t.endsAt.getTime() : -1));
}
function G(e, t) {
    var n;
    if ((null == (n = c.Z.getGuild(t)) ? void 0 : n.features.has(g.GuildFeatures.PREMIUM_TIER_3_OVERRIDE)) === !0)
        return 0;
    let r = x(t),
        i = g.oCV[r],
        a = e.filter((e) => null != e.endsAt);
    return i - (e.length - a.length);
}
let B = [
    {
        tier: g.Eu4.TIER_3,
        amount: g.oCV[g.Eu4.TIER_3],
        nextTier: null,
    },
    {
        tier: g.Eu4.TIER_2,
        amount: g.oCV[g.Eu4.TIER_2],
        nextTier: g.Eu4.TIER_3,
    },
    {
        tier: g.Eu4.TIER_1,
        amount: g.oCV[g.Eu4.TIER_1],
        nextTier: g.Eu4.TIER_2,
    },
];
function Z(e, t) {
    let n = G(e, t);
    if (n > 0) {
        let r = U(e).filter((e) => null != e.endsAt),
            i = r.length - n;
        i < 0 &&
            m.Z.addBreadcrumb({
                category: "premium",
                message: "Negative index while checking grace period ending date.",
                data: {
                    subscriptionLength: e.length,
                    subscriptionsNeededForPremiumTier: g.oCV[x(t)],
                    endingSubscriptionLength: r.length,
                },
            });
        let a = r[Math.max(i, 0)];
        return null == a ? void 0 : a.endsAt;
    }
    return null;
}
function F(e, t) {
    let n = A(t),
        r = v.indexOf(t);
    if (-1 === r) return 0;
    let i = v[r - 1],
        a = null != i ? S(i) : 0,
        o = S(t);
    return Math.max(0, n - e.slice(a, o).length);
}
function V(e, t, n) {
    return -1 === v.indexOf(n) ? 0 : Math.max(0, H(e) - t.length);
}
function H(e) {
    var t, n;
    let r = b.XB + (null != (n = null == (t = e.premiumFeatures) ? void 0 : t.additionalSoundSlots) ? n : 0);
    return Math.max(e.features.has(g.GuildFeatures.MORE_SOUNDBOARD) ? b.w1 : b.XB, r);
}
function Y(e) {
    var t, n;
    let r = E.xD + (null != (n = null == (t = e.premiumFeatures) ? void 0 : t.additionalEmojiSlots) ? n : 0);
    return Math.max(e.features.has(g.GuildFeatures.MORE_EMOJI) ? E.IE : E.xD, r);
}
function W(e, t) {
    let n = (0, s.I)(e.id).available;
    return Math.max(0, g.oCV[t] - n);
}
function K(e) {
    var t;
    return (null == (t = e.subscription) ? void 0 : t.status) === g.O0b.CANCELED || e.canceled;
}
function z(e) {
    var t;
    return null != (t = I.find((t) => e >= g.oCV[t])) ? t : g.Eu4.NONE;
}
function q(e) {
    var t;
    return null != (t = v.find((t) => e < g.oCV[t])) ? t : g.Eu4.TIER_3;
}
let X = {
    [g.Eu4.NONE]: 0,
    [g.Eu4.TIER_1]: 1 / 3,
    [g.Eu4.TIER_2]: 2 / 3,
    [g.Eu4.TIER_3]: 1,
};
function Q(e) {
    let t = (0, l.I)(e.id),
        n = z(t),
        r = q(t),
        i = g.oCV[n],
        a = (t - i) / (g.oCV[r] - i),
        o = X[n],
        s = X[r];
    return {
        fillFactor: n === g.Eu4.TIER_3 ? 1 : a * (s - o) + o,
        totalAvailableBoostsCount: t,
    };
}

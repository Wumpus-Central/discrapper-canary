n.d(t, {
    A3: () => T,
    FZ: () => S,
    Hl: () => $,
    Je: () => C,
    Jh: () => x,
    KK: () => z,
    Qi: () => H,
    Ro: () => y,
    Vx: () => B,
    _k: () => F,
    _p: () => D,
    aq: () => U,
    cP: () => R,
    e9: () => w,
    ee: () => Q,
    f2: () => k,
    gZ: () => Z,
    ge: () => L,
    ig: () => N,
    nL: () => Y,
    nW: () => P,
    tb: () => M,
    tl: () => q,
    vx: () => j,
    y4: () => K,
    yw: () => W
}),
    n(978209),
    n(411104),
    n(47120),
    n(627341),
    n(230036);
var r = n(392711),
    i = n.n(r);
n(913527);
var o = n(278074),
    a = n(274136),
    s = n(179360),
    l = n(50101),
    c = n(317169),
    u = n(430824),
    d = n(314884),
    f = n(78839),
    _ = n(424218),
    p = n(823379),
    h = n(63063),
    m = n(74538),
    g = n(981631),
    E = n(185923),
    b = n(474936),
    v = n(388032);
Object.freeze({
    1: 1,
    2: 2,
    3: 3,
    4: 6,
    5: 9,
    6: 12,
    7: 15,
    8: 18,
    9: 24
});
var y = (function (e) {
    return (e[(e.EMOJI = 1)] = 'EMOJI'), (e[(e.AUDIO = 2)] = 'AUDIO'), (e[(e.ANIMATED = 3)] = 'ANIMATED'), (e[(e.CUSTOMIZATION = 4)] = 'CUSTOMIZATION'), (e[(e.UPLOAD = 5)] = 'UPLOAD'), (e[(e.VANITY = 6)] = 'VANITY'), (e[(e.STREAM = 7)] = 'STREAM'), (e[(e.STICKER = 8)] = 'STICKER'), (e[(e.CUSTOM_ROLE_ICON = 11)] = 'CUSTOM_ROLE_ICON'), (e[(e.STAGE_VIDEO = 12)] = 'STAGE_VIDEO'), (e[(e.SOUNDBOARD = 13)] = 'SOUNDBOARD'), e;
})({});
let O = [g.Eu4.NONE, g.Eu4.TIER_1, g.Eu4.TIER_2, g.Eu4.TIER_3],
    I = O.slice().reverse(),
    S = (e) => {
        var t;
        return e === g.Eu4.NONE ? g.Eu4.TIER_1 : null === (t = V.find((t) => t.tier === e)) || void 0 === t ? void 0 : t.nextTier;
    },
    T = (e, t) => (null != t && t.hasFeature(g.oNc.MORE_STICKERS) && e === g.Eu4.TIER_3 ? a.D.MAX_STICKER_SLOTS : b.$8[e]),
    N = (e) => b.pH[e],
    A = (e, t) => (null != t && t.hasFeature(g.oNc.MORE_SOUNDBOARD) ? b.w1 : b._k[e]),
    C = (e) => {
        if (e === g.Eu4.NONE) return b._k[e];
        let t = O[O.indexOf(e) - 1];
        return b._k[e] - b._k[t];
    },
    R = (e) => [
        {
            tier: g.Eu4.TIER_1,
            title: v.NW.string(v.t['lK+WOT']),
            perks: [
                {
                    title: v.NW.formatToPlainString(v.t.dnLAws, {
                        adding: b.HO[g.Eu4.TIER_1].limits.emoji - b.HO[g.Eu4.NONE].limits.emoji,
                        total: b.HO[g.Eu4.TIER_1].limits.emoji
                    }),
                    description: v.NW.string(v.t['/Guvxs']),
                    icon: 1
                },
                {
                    title: v.NW.formatToPlainString(v.t['/9p2/v'], {
                        adding: N(g.Eu4.TIER_1),
                        total: T(g.Eu4.TIER_1)
                    }),
                    description: v.NW.string(v.t.JfsnDQ),
                    icon: 8
                },
                {
                    title: v.NW.formatToPlainString(v.t.NRuk5u, {
                        soundCount: C(g.Eu4.TIER_1),
                        totalSoundCount: A(g.Eu4.TIER_1)
                    }),
                    description: v.NW.string(v.t.Oq7OVl),
                    icon: 13
                },
                {
                    title: v.NW.formatToPlainString(v.t.zoT1ZG, { bitrate: b.HO[g.Eu4.TIER_1].limits.bitrate / 1000 }),
                    description: v.NW.string(v.t['8a03jo']),
                    icon: 2
                },
                {
                    title: v.NW.string(v.t.h0s84e),
                    description: v.NW.format(v.t['t+0cbm'], {}),
                    icon: 3
                },
                {
                    title: v.NW.string(v.t.vjPGPj),
                    description: v.NW.string(v.t.tG4MMT),
                    icon: 4
                },
                {
                    title: v.NW.string(v.t.cObMZG),
                    description: v.NW.string(v.t['puH/9f']),
                    icon: 7
                }
            ].filter(p.lm)
        },
        {
            tier: g.Eu4.TIER_2,
            title: v.NW.string(v.t['34GpBQ']),
            perks: [
                {
                    title: v.NW.formatToPlainString(v.t.dnLAws, {
                        adding: b.HO[g.Eu4.TIER_2].limits.emoji - b.HO[g.Eu4.TIER_1].limits.emoji,
                        total: b.HO[g.Eu4.TIER_2].limits.emoji
                    }),
                    description: v.NW.string(v.t.fRiNh4),
                    icon: 1
                },
                {
                    title: v.NW.formatToPlainString(v.t['/9p2/v'], {
                        adding: N(g.Eu4.TIER_2),
                        total: T(g.Eu4.TIER_2)
                    }),
                    description: v.NW.string(v.t.t4TM29),
                    icon: 8
                },
                {
                    title: v.NW.formatToPlainString(v.t.NRuk5u, {
                        soundCount: C(g.Eu4.TIER_2),
                        totalSoundCount: A(g.Eu4.TIER_2)
                    }),
                    description: v.NW.string(v.t.pEYlPT),
                    icon: 13
                },
                {
                    title: v.NW.formatToPlainString(v.t.zoT1ZG, { bitrate: b.HO[g.Eu4.TIER_2].limits.bitrate / 1000 }),
                    description: v.NW.string(v.t['nzRo/P']),
                    icon: 2
                },
                {
                    title: v.NW.string(v.t['+KhQKC']),
                    description: v.NW.string(v.t.ZWf10N),
                    icon: 4
                },
                {
                    title: v.NW.formatToPlainString(v.t.t95LnJ, { fileSize: (0, _.BU)(b.HO[g.Eu4.TIER_2].limits.fileSize / 1024, { useKibibytes: !0 }) }),
                    description: v.NW.format(v.t['yvht6+'], {}),
                    icon: 5
                },
                {
                    title: v.NW.string(v.t.bmaoND),
                    description: v.NW.string(v.t.WZW2Bg),
                    icon: 7
                },
                {
                    title: v.NW.string(v.t.BHtqcX),
                    description: v.NW.string(v.t.ukVcER),
                    icon: 11
                },
                e
                    ? {
                          title: v.NW.formatToPlainString(v.t.T8P3TE, { limit: g.eez }),
                          description: v.NW.formatToPlainString(v.t.T8P3TE, { limit: g.eez }),
                          icon: 12
                      }
                    : null
            ].filter(p.lm)
        },
        {
            tier: g.Eu4.TIER_3,
            title: v.NW.string(v.t.P7LdcX),
            perks: [
                {
                    title: v.NW.formatToPlainString(v.t.dnLAws, {
                        adding: b.HO[g.Eu4.TIER_3].limits.emoji - b.HO[g.Eu4.TIER_2].limits.emoji,
                        total: b.HO[g.Eu4.TIER_3].limits.emoji
                    }),
                    description: v.NW.string(v.t.AfJxnZ),
                    icon: 1
                },
                {
                    title: v.NW.formatToPlainString(v.t['/9p2/v'], {
                        adding: N(g.Eu4.TIER_3),
                        total: T(g.Eu4.TIER_3)
                    }),
                    description: v.NW.string(v.t['+ZI4QU']),
                    icon: 8
                },
                {
                    title: v.NW.formatToPlainString(v.t.NRuk5u, {
                        soundCount: C(g.Eu4.TIER_3),
                        totalSoundCount: A(g.Eu4.TIER_3)
                    }),
                    description: v.NW.string(v.t['8omJSU']),
                    icon: 13
                },
                {
                    title: v.NW.formatToPlainString(v.t.zoT1ZG, { bitrate: b.HO[g.Eu4.TIER_3].limits.bitrate / 1000 }),
                    description: v.NW.string(v.t.cOkbp6),
                    icon: 2
                },
                {
                    title: v.NW.string(v.t.C2w2cH),
                    description: v.NW.format(v.t['3Reos7'], { helpdeskArticle: h.Z.getArticleURL(g.BhN.GUILD_VANITY_URL) }),
                    icon: 6
                },
                {
                    title: v.NW.formatToPlainString(v.t.t95LnJ, { fileSize: (0, _.BU)(b.HO[g.Eu4.TIER_3].limits.fileSize / 1024, { useKibibytes: !0 }) }),
                    description: v.NW.format(v.t.IwDqSE, {}),
                    icon: 5
                },
                {
                    title: v.NW.string(v.t.z0GtBA),
                    description: v.NW.string(v.t.v92GNT),
                    icon: 3
                },
                e
                    ? {
                          title: v.NW.formatToPlainString(v.t.T8P3TE, { limit: g.RcX }),
                          description: v.NW.formatToPlainString(v.t.T8P3TE, { limit: g.RcX }),
                          icon: 12
                      }
                    : null
            ].filter(p.lm)
        }
    ];
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { useLevels: n = !0 } = t;
    switch (e) {
        case g.Eu4.NONE:
            return n ? v.NW.string(v.t.LcKgJS) : v.NW.string(v.t.mx8j2t);
        case g.Eu4.TIER_1:
            return v.NW.string(v.t.nzXtaW);
        case g.Eu4.TIER_2:
            return v.NW.string(v.t['h33/ub']);
        case g.Eu4.TIER_3:
            return v.NW.string(v.t.BfF6EB);
        default:
            throw Error('Not a valid tier type');
    }
}
function w(e) {
    switch (e) {
        case g.Eu4.NONE:
            return v.NW.string(v.t.LcKgJS);
        case g.Eu4.TIER_1:
            return v.NW.string(v.t.xRjU1d);
        case g.Eu4.TIER_2:
            return v.NW.string(v.t.C7e2Bg);
        case g.Eu4.TIER_3:
            return v.NW.string(v.t.avGxmp);
        default:
            throw Error('Not a valid tier type');
    }
}
let D = i().memoize((e) => (b.HO[g.Eu4.TIER_1].features.includes(e) ? g.Eu4.TIER_1 : b.HO[g.Eu4.TIER_2].features.includes(e) ? g.Eu4.TIER_2 : b.HO[g.Eu4.TIER_3].features.includes(e) ? g.Eu4.TIER_3 : null)),
    L = (e) => (e === g.Eu4.NONE ? g.Qqv.NONE : e === g.Eu4.TIER_1 ? g.Qqv.TIER_1 : e === g.Eu4.TIER_2 ? g.Qqv.TIER_2 : e === g.Eu4.TIER_3 ? g.Qqv.TIER_3 : null);
function x(e) {
    var t;
    let n = null === (t = u.Z.getGuild(e)) || void 0 === t ? void 0 : t.premiumTier;
    return null != n ? n : g.Eu4.NONE;
}
function M(e, t) {
    return null == t || (null != e && e >= t);
}
function k(e, t) {
    return M(e.premiumTier, t);
}
function j(e) {
    return i()
        .values(e)
        .filter((e) => e.isAvailable());
}
function U(e) {
    let { isBoostManagementDisabledForFractionalPremium: t } = e,
        n = f.ZP.getPremiumTypeSubscription();
    d.Z.hasFetched || (0, s.X8)();
    let r = j(d.Z.boostSlots),
        i = null == n ? void 0 : n.isPausedOrPausePending,
        a = r.length > 0,
        l = v.NW.format(v.t.kJ1AZG, { helpCenterLink: h.Z.getArticleURL(g.BhN.FRACTIONAL_PREMIUM_ABOUT) }),
        c = (0, o.EQ)({
            isPausedOrPausePending: i,
            isBoostManagementDisabledForFractionalPremium: t,
            canApplyBoosts: a
        })
            .with(
                {
                    isPausedOrPausePending: !0,
                    isBoostManagementDisabledForFractionalPremium: !0,
                    canApplyBoosts: !1
                },
                () => l
            )
            .with(
                {
                    isPausedOrPausePending: void 0,
                    isBoostManagementDisabledForFractionalPremium: !0
                },
                () => l
            )
            .with(
                {
                    isPausedOrPausePending: !1,
                    isBoostManagementDisabledForFractionalPremium: !0
                },
                () => l
            )
            .with(
                {
                    isPausedOrPausePending: !0,
                    fractionalState: b.a$.NONE
                },
                () => v.NW.string(v.t.mOWsFx)
            )
            .otherwise(() => null);
    if (null != c) return c;
    let { numAvailableGuildBoostSlots: u, numCanceledGuildBoostSlots: _ } = Object.values(d.Z.boostSlots).reduce((e, t) => (q(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e), {
        numAvailableGuildBoostSlots: 0,
        numCanceledGuildBoostSlots: 0
    });
    if (null == n || u > 0) return null;
    if (n.status === g.O0b.PAST_DUE) return v.NW.string(v.t.De4Vm5);
    if (n.status === g.O0b.ACCOUNT_HOLD) return v.NW.string(v.t.JakNQ0);
    if (_ > 0) return v.NW.string(v.t.x25mZW);
    if (null == n.renewalMutations) return null;
    let p = m.uV(n.renewalMutations.additionalPlans);
    return m.uV(n.additionalPlans) > p ? v.NW.string(v.t.x25mZW) : v.NW.string(v.t['W/bb8f']);
}
function G(e) {
    return e.sort((e, t) => (null != e.endsAt && null != t.endsAt ? e.endsAt.getTime() - t.endsAt.getTime() : -1));
}
function B(e, t) {
    return F(e, t) > 0;
}
function F(e, t) {
    var n;
    if ((null === (n = u.Z.getGuild(t)) || void 0 === n ? void 0 : n.hasFeature(g.oNc.PREMIUM_TIER_3_OVERRIDE)) === !0) return 0;
    let r = x(t),
        i = g.oCV[r],
        o = e.filter((e) => null != e.endsAt);
    return i - (e.length - o.length);
}
let V = [
    {
        tier: g.Eu4.TIER_3,
        amount: g.oCV[g.Eu4.TIER_3],
        nextTier: null
    },
    {
        tier: g.Eu4.TIER_2,
        amount: g.oCV[g.Eu4.TIER_2],
        nextTier: g.Eu4.TIER_3
    },
    {
        tier: g.Eu4.TIER_1,
        amount: g.oCV[g.Eu4.TIER_1],
        nextTier: g.Eu4.TIER_2
    }
];
function Z(e, t) {
    let n = F(e, t);
    if (n > 0) {
        let t = G(e).filter((e) => null != e.endsAt);
        return t[t.length - n].endsAt;
    }
    return null;
}
function H(e, t) {
    let n = N(t),
        r = O.indexOf(t);
    if (-1 === r) return 0;
    let i = O[r - 1],
        o = null != i ? T(i) : 0,
        a = T(t);
    return Math.max(0, n - e.slice(o, a).length);
}
function W(e, t, n) {
    return -1 === O.indexOf(n) ? 0 : Math.max(0, Y(e) - t.length);
}
function Y(e) {
    let t = (0, l.gV)(e.id, 'GuildRecord'),
        n = b.XB;
    if (t) {
        var r, i;
        n += null !== (i = null === (r = e.premiumFeatures) || void 0 === r ? void 0 : r.additionalSoundSlots) && void 0 !== i ? i : 0;
    } else n = b.HO[e.premiumTier].limits.soundboardSounds;
    return Math.max(e.hasFeature(g.oNc.MORE_SOUNDBOARD) ? b.w1 : b.XB, n);
}
function K(e) {
    let t = (0, l.gV)(e.id, 'GuildRecord'),
        n = E.xD;
    if (t) {
        var r, i;
        n += null !== (i = null === (r = e.premiumFeatures) || void 0 === r ? void 0 : r.additionalEmojiSlots) && void 0 !== i ? i : 0;
    } else n = b.HO[e.premiumTier].limits.emoji;
    return Math.max(e.hasFeature(g.oNc.MORE_EMOJI) ? E.IE : E.xD, n);
}
function z(e, t) {
    let n = (0, c.I)(e.id).available;
    return Math.max(0, g.oCV[t] - n);
}
function q(e) {
    var t;
    return (null === (t = e.subscription) || void 0 === t ? void 0 : t.status) === g.O0b.CANCELED || e.canceled;
}
function Q(e) {
    var t;
    return null !== (t = I.find((t) => e >= g.oCV[t])) && void 0 !== t ? t : g.Eu4.NONE;
}
function X(e) {
    var t;
    return null !== (t = O.find((t) => e < g.oCV[t])) && void 0 !== t ? t : g.Eu4.TIER_3;
}
let J = {
    [g.Eu4.NONE]: 0,
    [g.Eu4.TIER_1]: 1 / 3,
    [g.Eu4.TIER_2]: 2 / 3,
    [g.Eu4.TIER_3]: 1
};
function $(e) {
    let t = (0, l.gV)(e.id, 'useGuildBoostingProgressBarFillFactor') ? g.oCV[e.premiumTier] + (0, c.I)(e.id).available : e.premiumSubscriberCount,
        n = Q(t),
        r = X(t),
        i = g.oCV[n],
        o = (t - i) / (g.oCV[r] - i),
        a = J[n],
        s = J[r];
    return {
        fillFactor: n === g.Eu4.TIER_3 ? 1 : o * (s - a) + a,
        totalAvailableBoostsCount: t
    };
}

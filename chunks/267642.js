n.d(t, {
    A3: () => N,
    FZ: () => A,
    Hl: () => et,
    Je: () => P,
    Jh: () => k,
    KK: () => Q,
    Oe: () => T,
    Qi: () => W,
    Ro: () => I,
    Vx: () => F,
    _k: () => Z,
    _p: () => x,
    aq: () => B,
    cP: () => w,
    e9: () => L,
    ee: () => J,
    f2: () => U,
    gZ: () => Y,
    ge: () => M,
    ig: () => C,
    nL: () => z,
    nW: () => D,
    tb: () => j,
    tl: () => X,
    vx: () => G,
    y4: () => q,
    yw: () => K
}),
    n(583741),
    n(415506),
    n(388685),
    n(314940),
    n(642613);
var r = n(392711),
    i = n.n(r);
n(913527);
var a = n(278074),
    o = n(274136),
    s = n(179360),
    l = n(50101),
    c = n(317169),
    u = n(151494),
    d = n(430824),
    f = n(314884),
    _ = n(78839),
    p = n(424218),
    h = n(823379),
    m = n(63063),
    g = n(74538),
    E = n(960048),
    b = n(981631),
    y = n(185923),
    O = n(474936),
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
var I = (function (e) {
    return (e[(e.EMOJI = 1)] = 'EMOJI'), (e[(e.AUDIO = 2)] = 'AUDIO'), (e[(e.ANIMATED = 3)] = 'ANIMATED'), (e[(e.CUSTOMIZATION = 4)] = 'CUSTOMIZATION'), (e[(e.UPLOAD = 5)] = 'UPLOAD'), (e[(e.VANITY = 6)] = 'VANITY'), (e[(e.STREAM = 7)] = 'STREAM'), (e[(e.STICKER = 8)] = 'STICKER'), (e[(e.CUSTOM_ROLE_ICON = 11)] = 'CUSTOM_ROLE_ICON'), (e[(e.STAGE_VIDEO = 12)] = 'STAGE_VIDEO'), (e[(e.SOUNDBOARD = 13)] = 'SOUNDBOARD'), e;
})({});
let S = [b.Eu4.NONE, b.Eu4.TIER_1, b.Eu4.TIER_2, b.Eu4.TIER_3],
    T = S.slice().reverse(),
    A = (e) => {
        var t;
        return e === b.Eu4.NONE ? b.Eu4.TIER_1 : null == (t = H.find((t) => t.tier === e)) ? void 0 : t.nextTier;
    },
    N = (e, t) => (null != t && t.hasFeature(b.oNc.MORE_STICKERS) && e === b.Eu4.TIER_3 ? o.D.MAX_STICKER_SLOTS : O.$8[e]),
    C = (e) => O.pH[e],
    R = (e, t) => (null != t && t.hasFeature(b.oNc.MORE_SOUNDBOARD) ? O.w1 : O._k[e]),
    P = (e) => {
        if (e === b.Eu4.NONE) return O._k[e];
        let t = S[S.indexOf(e) - 1];
        return O._k[e] - O._k[t];
    },
    w = (e) => [
        {
            tier: b.Eu4.TIER_1,
            title: v.intl.string(v.t['lK+WOT']),
            perks: [
                {
                    title: v.intl.formatToPlainString(v.t.dnLAws, {
                        adding: O.HO[b.Eu4.TIER_1].limits.emoji - O.HO[b.Eu4.NONE].limits.emoji,
                        total: O.HO[b.Eu4.TIER_1].limits.emoji
                    }),
                    description: v.intl.string(v.t['/Guvxs']),
                    icon: 1
                },
                {
                    title: v.intl.formatToPlainString(v.t['/9p2/v'], {
                        adding: C(b.Eu4.TIER_1),
                        total: N(b.Eu4.TIER_1)
                    }),
                    description: v.intl.string(v.t.JfsnDQ),
                    icon: 8
                },
                {
                    title: v.intl.formatToPlainString(v.t.NRuk5u, {
                        soundCount: P(b.Eu4.TIER_1),
                        totalSoundCount: R(b.Eu4.TIER_1)
                    }),
                    description: v.intl.string(v.t.Oq7OVl),
                    icon: 13
                },
                {
                    title: v.intl.formatToPlainString(v.t.zoT1ZG, { bitrate: O.HO[b.Eu4.TIER_1].limits.bitrate / 1000 }),
                    description: v.intl.string(v.t['8a03jo']),
                    icon: 2
                },
                {
                    title: v.intl.string(v.t.h0s84e),
                    description: v.intl.format(v.t['t+0cbm'], {}),
                    icon: 3
                },
                {
                    title: v.intl.string(v.t.vjPGPj),
                    description: v.intl.string(v.t.tG4MMT),
                    icon: 4
                },
                {
                    title: v.intl.string(v.t.cObMZG),
                    description: v.intl.string(v.t['puH/9f']),
                    icon: 7
                }
            ].filter(h.lm)
        },
        {
            tier: b.Eu4.TIER_2,
            title: v.intl.string(v.t['34GpBQ']),
            perks: [
                {
                    title: v.intl.formatToPlainString(v.t.dnLAws, {
                        adding: O.HO[b.Eu4.TIER_2].limits.emoji - O.HO[b.Eu4.TIER_1].limits.emoji,
                        total: O.HO[b.Eu4.TIER_2].limits.emoji
                    }),
                    description: v.intl.string(v.t.fRiNh4),
                    icon: 1
                },
                {
                    title: v.intl.formatToPlainString(v.t['/9p2/v'], {
                        adding: C(b.Eu4.TIER_2),
                        total: N(b.Eu4.TIER_2)
                    }),
                    description: v.intl.string(v.t.t4TM29),
                    icon: 8
                },
                {
                    title: v.intl.formatToPlainString(v.t.NRuk5u, {
                        soundCount: P(b.Eu4.TIER_2),
                        totalSoundCount: R(b.Eu4.TIER_2)
                    }),
                    description: v.intl.string(v.t.pEYlPT),
                    icon: 13
                },
                {
                    title: v.intl.formatToPlainString(v.t.zoT1ZG, { bitrate: O.HO[b.Eu4.TIER_2].limits.bitrate / 1000 }),
                    description: v.intl.string(v.t['nzRo/P']),
                    icon: 2
                },
                {
                    title: v.intl.string(v.t['+KhQKC']),
                    description: v.intl.string(v.t.ZWf10N),
                    icon: 4
                },
                {
                    title: v.intl.formatToPlainString(v.t.t95LnJ, { fileSize: (0, p.BU)(O.HO[b.Eu4.TIER_2].limits.fileSize / 1024, { useKibibytes: !0 }) }),
                    description: v.intl.format(v.t['yvht6+'], {}),
                    icon: 5
                },
                {
                    title: v.intl.string(v.t.bmaoND),
                    description: v.intl.string(v.t.WZW2Bg),
                    icon: 7
                },
                {
                    title: v.intl.string(v.t.BHtqcX),
                    description: v.intl.string(v.t.ukVcER),
                    icon: 11
                },
                e
                    ? {
                          title: v.intl.formatToPlainString(v.t.T8P3TE, { limit: b.eez }),
                          description: v.intl.formatToPlainString(v.t.T8P3TE, { limit: b.eez }),
                          icon: 12
                      }
                    : null
            ].filter(h.lm)
        },
        {
            tier: b.Eu4.TIER_3,
            title: v.intl.string(v.t.P7LdcX),
            perks: [
                {
                    title: v.intl.formatToPlainString(v.t.dnLAws, {
                        adding: O.HO[b.Eu4.TIER_3].limits.emoji - O.HO[b.Eu4.TIER_2].limits.emoji,
                        total: O.HO[b.Eu4.TIER_3].limits.emoji
                    }),
                    description: v.intl.string(v.t.AfJxnZ),
                    icon: 1
                },
                {
                    title: v.intl.formatToPlainString(v.t['/9p2/v'], {
                        adding: C(b.Eu4.TIER_3),
                        total: N(b.Eu4.TIER_3)
                    }),
                    description: v.intl.string(v.t['+ZI4QU']),
                    icon: 8
                },
                {
                    title: v.intl.formatToPlainString(v.t.NRuk5u, {
                        soundCount: P(b.Eu4.TIER_3),
                        totalSoundCount: R(b.Eu4.TIER_3)
                    }),
                    description: v.intl.string(v.t['8omJSU']),
                    icon: 13
                },
                {
                    title: v.intl.formatToPlainString(v.t.zoT1ZG, { bitrate: O.HO[b.Eu4.TIER_3].limits.bitrate / 1000 }),
                    description: v.intl.string(v.t.cOkbp6),
                    icon: 2
                },
                {
                    title: v.intl.string(v.t.C2w2cH),
                    description: v.intl.format(v.t['3Reos7'], { helpdeskArticle: m.Z.getArticleURL(b.BhN.GUILD_VANITY_URL) }),
                    icon: 6
                },
                {
                    title: v.intl.formatToPlainString(v.t.t95LnJ, { fileSize: (0, p.BU)(O.HO[b.Eu4.TIER_3].limits.fileSize / 1024, { useKibibytes: !0 }) }),
                    description: v.intl.format(v.t.IwDqSE, {}),
                    icon: 5
                },
                {
                    title: v.intl.string(v.t.z0GtBA),
                    description: v.intl.string(v.t.v92GNT),
                    icon: 3
                },
                e
                    ? {
                          title: v.intl.formatToPlainString(v.t.T8P3TE, { limit: b.RcX }),
                          description: v.intl.formatToPlainString(v.t.T8P3TE, { limit: b.RcX }),
                          icon: 12
                      }
                    : null
            ].filter(h.lm)
        }
    ];
function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { useLevels: n = !0 } = t;
    switch (e) {
        case b.Eu4.NONE:
            return n ? v.intl.string(v.t.LcKgJS) : v.intl.string(v.t.mx8j2t);
        case b.Eu4.TIER_1:
            return v.intl.string(v.t.nzXtaW);
        case b.Eu4.TIER_2:
            return v.intl.string(v.t['h33/ub']);
        case b.Eu4.TIER_3:
            return v.intl.string(v.t.BfF6EB);
        default:
            throw Error('Not a valid tier type');
    }
}
function L(e) {
    switch (e) {
        case b.Eu4.NONE:
            return v.intl.string(v.t.LcKgJS);
        case b.Eu4.TIER_1:
            return v.intl.string(v.t.xRjU1d);
        case b.Eu4.TIER_2:
            return v.intl.string(v.t.C7e2Bg);
        case b.Eu4.TIER_3:
            return v.intl.string(v.t.avGxmp);
        default:
            throw Error('Not a valid tier type');
    }
}
let x = i().memoize((e) => (O.HO[b.Eu4.TIER_1].features.includes(e) ? b.Eu4.TIER_1 : O.HO[b.Eu4.TIER_2].features.includes(e) ? b.Eu4.TIER_2 : O.HO[b.Eu4.TIER_3].features.includes(e) ? b.Eu4.TIER_3 : null)),
    M = (e) => (e === b.Eu4.NONE ? b.Qqv.NONE : e === b.Eu4.TIER_1 ? b.Qqv.TIER_1 : e === b.Eu4.TIER_2 ? b.Qqv.TIER_2 : e === b.Eu4.TIER_3 ? b.Qqv.TIER_3 : null);
function k(e) {
    var t;
    let n = null == (t = d.Z.getGuild(e)) ? void 0 : t.premiumTier;
    return null != n ? n : b.Eu4.NONE;
}
function j(e, t) {
    return null == t || (null != e && e >= t);
}
function U(e, t) {
    return j(e.premiumTier, t);
}
function G(e) {
    return i()
        .values(e)
        .filter((e) => e.isAvailable());
}
function B(e) {
    let { isBoostManagementDisabledForFractionalPremium: t } = e,
        n = _.ZP.getPremiumTypeSubscription();
    f.Z.hasFetched || (0, s.X8)();
    let r = G(f.Z.boostSlots),
        i = null == n ? void 0 : n.isPausedOrPausePending,
        o = r.length > 0,
        l = v.intl.format(v.t.kJ1AZG, { helpCenterLink: m.Z.getArticleURL(b.BhN.FRACTIONAL_PREMIUM_ABOUT) }),
        c = (0, a.EQ)({
            isPausedOrPausePending: i,
            isBoostManagementDisabledForFractionalPremium: t,
            canApplyBoosts: o
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
                    fractionalState: O.a$.NONE
                },
                () => v.intl.string(v.t.mOWsFx)
            )
            .otherwise(() => null);
    if (null != c) return c;
    let { numAvailableGuildBoostSlots: u, numCanceledGuildBoostSlots: d } = Object.values(f.Z.boostSlots).reduce((e, t) => (X(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e), {
        numAvailableGuildBoostSlots: 0,
        numCanceledGuildBoostSlots: 0
    });
    if (null == n || u > 0) return null;
    if (n.status === b.O0b.PAST_DUE) return v.intl.string(v.t.De4Vm5);
    if (n.status === b.O0b.ACCOUNT_HOLD) return v.intl.string(v.t.JakNQ0);
    if (d > 0) return v.intl.string(v.t.x25mZW);
    if (null == n.renewalMutations) return null;
    let p = g.uV(n.renewalMutations.additionalPlans);
    return g.uV(n.additionalPlans) > p ? v.intl.string(v.t.x25mZW) : v.intl.string(v.t['W/bb8f']);
}
function V(e) {
    return e.sort((e, t) => (null != e.endsAt && null != t.endsAt ? e.endsAt.getTime() - t.endsAt.getTime() : -1));
}
function F(e, t) {
    return Z(e, t) > 0;
}
function Z(e, t) {
    var n;
    if ((null == (n = d.Z.getGuild(t)) ? void 0 : n.hasFeature(b.oNc.PREMIUM_TIER_3_OVERRIDE)) === !0) return 0;
    let r = k(t),
        i = b.oCV[r],
        a = e.filter((e) => null != e.endsAt);
    return i - (e.length - a.length);
}
let H = [
    {
        tier: b.Eu4.TIER_3,
        amount: b.oCV[b.Eu4.TIER_3],
        nextTier: null
    },
    {
        tier: b.Eu4.TIER_2,
        amount: b.oCV[b.Eu4.TIER_2],
        nextTier: b.Eu4.TIER_3
    },
    {
        tier: b.Eu4.TIER_1,
        amount: b.oCV[b.Eu4.TIER_1],
        nextTier: b.Eu4.TIER_2
    }
];
function Y(e, t) {
    let n = Z(e, t);
    if (n > 0) {
        let r = V(e).filter((e) => null != e.endsAt),
            i = r.length - n;
        i < 0 &&
            E.Z.addBreadcrumb({
                category: 'premium',
                message: 'Negative index while checking grace period ending date.',
                data: {
                    subscriptionLength: e.length,
                    subscriptionsNeededForPremiumTier: b.oCV[k(t)],
                    endingSubscriptionLength: r.length
                }
            });
        let a = r[Math.max(i, 0)];
        return null == a ? void 0 : a.endsAt;
    }
    return null;
}
function W(e, t) {
    let n = C(t),
        r = S.indexOf(t);
    if (-1 === r) return 0;
    let i = S[r - 1],
        a = null != i ? N(i) : 0,
        o = N(t);
    return Math.max(0, n - e.slice(a, o).length);
}
function K(e, t, n) {
    return -1 === S.indexOf(n) ? 0 : Math.max(0, z(e) - t.length);
}
function z(e) {
    let t = (0, l.gV)(e.id, 'GuildRecord'),
        n = O.XB;
    if (t) {
        var r, i;
        n += null != (i = null == (r = e.premiumFeatures) ? void 0 : r.additionalSoundSlots) ? i : 0;
    } else n = O.HO[e.premiumTier].limits.soundboardSounds;
    return Math.max(e.hasFeature(b.oNc.MORE_SOUNDBOARD) ? O.w1 : O.XB, n);
}
function q(e) {
    let t = (0, l.gV)(e.id, 'GuildRecord'),
        n = y.xD;
    if (t) {
        var r, i;
        n += null != (i = null == (r = e.premiumFeatures) ? void 0 : r.additionalEmojiSlots) ? i : 0;
    } else n = O.HO[e.premiumTier].limits.emoji;
    return Math.max(e.hasFeature(b.oNc.MORE_EMOJI) ? y.IE : y.xD, n);
}
function Q(e, t) {
    let n = (0, c.I)(e.id).available;
    return Math.max(0, b.oCV[t] - n);
}
function X(e) {
    var t;
    return (null == (t = e.subscription) ? void 0 : t.status) === b.O0b.CANCELED || e.canceled;
}
function J(e) {
    var t;
    return null != (t = T.find((t) => e >= b.oCV[t])) ? t : b.Eu4.NONE;
}
function $(e) {
    var t;
    return null != (t = S.find((t) => e < b.oCV[t])) ? t : b.Eu4.TIER_3;
}
let ee = {
    [b.Eu4.NONE]: 0,
    [b.Eu4.TIER_1]: 1 / 3,
    [b.Eu4.TIER_2]: 2 / 3,
    [b.Eu4.TIER_3]: 1
};
function et(e) {
    let t = (0, u.I)(e.id),
        n = J(t),
        r = $(t),
        i = b.oCV[n],
        a = (t - i) / (b.oCV[r] - i),
        o = ee[n],
        s = ee[r];
    return {
        fillFactor: n === b.Eu4.TIER_3 ? 1 : a * (s - o) + o,
        totalAvailableBoostsCount: t
    };
}

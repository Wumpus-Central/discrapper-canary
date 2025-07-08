(n.d(t, {
    A3: () => A,
    FZ: () => S,
    Hl: () => $,
    Je: () => R,
    Jh: () => k,
    KK: () => z,
    Oe: () => T,
    Qi: () => H,
    Ro: () => v,
    _k: () => V,
    _p: () => L,
    aq: () => G,
    cP: () => P,
    e9: () => D,
    ee: () => X,
    f2: () => j,
    gZ: () => Z,
    ge: () => x,
    ig: () => N,
    nL: () => W,
    nW: () => w,
    tb: () => M,
    tl: () => q,
    vx: () => U,
    y4: () => K,
    yw: () => Y
}),
    n(583741),
    n(415506),
    n(388685),
    n(314940),
    n(642613));
var r = n(392711),
    i = n.n(r);
n(913527);
var a = n(278074),
    o = n(274136),
    s = n(179360),
    l = n(317169),
    c = n(151494),
    u = n(430824),
    d = n(314884),
    f = n(78839),
    _ = n(424218),
    p = n(823379),
    h = n(63063),
    m = n(74538),
    g = n(960048),
    E = n(981631),
    b = n(185923),
    y = n(474936),
    O = n(388032);
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
var v = (function (e) {
    return ((e[(e.EMOJI = 1)] = 'EMOJI'), (e[(e.AUDIO = 2)] = 'AUDIO'), (e[(e.ANIMATED = 3)] = 'ANIMATED'), (e[(e.CUSTOMIZATION = 4)] = 'CUSTOMIZATION'), (e[(e.UPLOAD = 5)] = 'UPLOAD'), (e[(e.VANITY = 6)] = 'VANITY'), (e[(e.STREAM = 7)] = 'STREAM'), (e[(e.STICKER = 8)] = 'STICKER'), (e[(e.CUSTOM_ROLE_ICON = 11)] = 'CUSTOM_ROLE_ICON'), (e[(e.STAGE_VIDEO = 12)] = 'STAGE_VIDEO'), (e[(e.SOUNDBOARD = 13)] = 'SOUNDBOARD'), e);
})({});
let I = [E.Eu4.NONE, E.Eu4.TIER_1, E.Eu4.TIER_2, E.Eu4.TIER_3],
    T = I.slice().reverse(),
    S = (e) => {
        var t;
        return e === E.Eu4.NONE ? E.Eu4.TIER_1 : null == (t = F.find((t) => t.tier === e)) ? void 0 : t.nextTier;
    },
    A = (e, t) => (null != t && t.features.has(E.oNc.MORE_STICKERS) && e === E.Eu4.TIER_3 ? o.D.MAX_STICKER_SLOTS : y.$8[e]),
    N = (e) => y.pH[e],
    C = (e, t) => (null != t && t.features.has(E.oNc.MORE_SOUNDBOARD) ? y.w1 : y._k[e]),
    R = (e) => {
        if (e === E.Eu4.NONE) return y._k[e];
        let t = I[I.indexOf(e) - 1];
        return y._k[e] - y._k[t];
    },
    P = (e) => [
        {
            tier: E.Eu4.TIER_1,
            title: O.intl.string(O.t['lK+WOT']),
            perks: [
                {
                    title: O.intl.formatToPlainString(O.t.dnLAws, {
                        adding: y.HO[E.Eu4.TIER_1].limits.emoji - y.HO[E.Eu4.NONE].limits.emoji,
                        total: y.HO[E.Eu4.TIER_1].limits.emoji
                    }),
                    description: O.intl.string(O.t['/Guvxs']),
                    icon: 1
                },
                {
                    title: O.intl.formatToPlainString(O.t['/9p2/v'], {
                        adding: N(E.Eu4.TIER_1),
                        total: A(E.Eu4.TIER_1)
                    }),
                    description: O.intl.string(O.t.JfsnDQ),
                    icon: 8
                },
                {
                    title: O.intl.formatToPlainString(O.t.NRuk5u, {
                        soundCount: R(E.Eu4.TIER_1),
                        totalSoundCount: C(E.Eu4.TIER_1)
                    }),
                    description: O.intl.string(O.t.Oq7OVl),
                    icon: 13
                },
                {
                    title: O.intl.formatToPlainString(O.t.zoT1ZG, { bitrate: y.HO[E.Eu4.TIER_1].limits.bitrate / 1000 }),
                    description: O.intl.string(O.t['8a03jo']),
                    icon: 2
                },
                {
                    title: O.intl.string(O.t.h0s84e),
                    description: O.intl.format(O.t['t+0cbm'], {}),
                    icon: 3
                },
                {
                    title: O.intl.string(O.t.vjPGPj),
                    description: O.intl.string(O.t.tG4MMT),
                    icon: 4
                },
                {
                    title: O.intl.string(O.t.cObMZG),
                    description: O.intl.string(O.t['puH/9f']),
                    icon: 7
                }
            ].filter(p.lm)
        },
        {
            tier: E.Eu4.TIER_2,
            title: O.intl.string(O.t['34GpBQ']),
            perks: [
                {
                    title: O.intl.formatToPlainString(O.t.dnLAws, {
                        adding: y.HO[E.Eu4.TIER_2].limits.emoji - y.HO[E.Eu4.TIER_1].limits.emoji,
                        total: y.HO[E.Eu4.TIER_2].limits.emoji
                    }),
                    description: O.intl.string(O.t.fRiNh4),
                    icon: 1
                },
                {
                    title: O.intl.formatToPlainString(O.t['/9p2/v'], {
                        adding: N(E.Eu4.TIER_2),
                        total: A(E.Eu4.TIER_2)
                    }),
                    description: O.intl.string(O.t.t4TM29),
                    icon: 8
                },
                {
                    title: O.intl.formatToPlainString(O.t.NRuk5u, {
                        soundCount: R(E.Eu4.TIER_2),
                        totalSoundCount: C(E.Eu4.TIER_2)
                    }),
                    description: O.intl.string(O.t.pEYlPT),
                    icon: 13
                },
                {
                    title: O.intl.formatToPlainString(O.t.zoT1ZG, { bitrate: y.HO[E.Eu4.TIER_2].limits.bitrate / 1000 }),
                    description: O.intl.string(O.t['nzRo/P']),
                    icon: 2
                },
                {
                    title: O.intl.string(O.t['+KhQKC']),
                    description: O.intl.string(O.t.ZWf10N),
                    icon: 4
                },
                {
                    title: O.intl.formatToPlainString(O.t.t95LnJ, { fileSize: (0, _.BU)(y.HO[E.Eu4.TIER_2].limits.fileSize / 1024, { useKibibytes: !0 }) }),
                    description: O.intl.format(O.t['yvht6+'], {}),
                    icon: 5
                },
                {
                    title: O.intl.string(O.t.bmaoND),
                    description: O.intl.string(O.t.WZW2Bg),
                    icon: 7
                },
                {
                    title: O.intl.string(O.t.BHtqcX),
                    description: O.intl.string(O.t.ukVcER),
                    icon: 11
                },
                e
                    ? {
                          title: O.intl.formatToPlainString(O.t.T8P3TE, { limit: E.eez }),
                          description: O.intl.formatToPlainString(O.t.T8P3TE, { limit: E.eez }),
                          icon: 12
                      }
                    : null
            ].filter(p.lm)
        },
        {
            tier: E.Eu4.TIER_3,
            title: O.intl.string(O.t.P7LdcX),
            perks: [
                {
                    title: O.intl.formatToPlainString(O.t.dnLAws, {
                        adding: y.HO[E.Eu4.TIER_3].limits.emoji - y.HO[E.Eu4.TIER_2].limits.emoji,
                        total: y.HO[E.Eu4.TIER_3].limits.emoji
                    }),
                    description: O.intl.string(O.t.AfJxnZ),
                    icon: 1
                },
                {
                    title: O.intl.formatToPlainString(O.t['/9p2/v'], {
                        adding: N(E.Eu4.TIER_3),
                        total: A(E.Eu4.TIER_3)
                    }),
                    description: O.intl.string(O.t['+ZI4QU']),
                    icon: 8
                },
                {
                    title: O.intl.formatToPlainString(O.t.NRuk5u, {
                        soundCount: R(E.Eu4.TIER_3),
                        totalSoundCount: C(E.Eu4.TIER_3)
                    }),
                    description: O.intl.string(O.t['8omJSU']),
                    icon: 13
                },
                {
                    title: O.intl.formatToPlainString(O.t.zoT1ZG, { bitrate: y.HO[E.Eu4.TIER_3].limits.bitrate / 1000 }),
                    description: O.intl.string(O.t.cOkbp6),
                    icon: 2
                },
                {
                    title: O.intl.string(O.t.C2w2cH),
                    description: O.intl.format(O.t['3Reos7'], { helpdeskArticle: h.Z.getArticleURL(E.BhN.GUILD_VANITY_URL) }),
                    icon: 6
                },
                {
                    title: O.intl.formatToPlainString(O.t.t95LnJ, { fileSize: (0, _.BU)(y.HO[E.Eu4.TIER_3].limits.fileSize / 1024, { useKibibytes: !0 }) }),
                    description: O.intl.format(O.t.IwDqSE, {}),
                    icon: 5
                },
                {
                    title: O.intl.string(O.t.z0GtBA),
                    description: O.intl.string(O.t.v92GNT),
                    icon: 3
                },
                e
                    ? {
                          title: O.intl.formatToPlainString(O.t.T8P3TE, { limit: E.RcX }),
                          description: O.intl.formatToPlainString(O.t.T8P3TE, { limit: E.RcX }),
                          icon: 12
                      }
                    : null
            ].filter(p.lm)
        }
    ];
function w(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { useLevels: n = !0 } = t;
    switch (e) {
        case E.Eu4.NONE:
            return n ? O.intl.string(O.t.LcKgJS) : O.intl.string(O.t.mx8j2t);
        case E.Eu4.TIER_1:
            return O.intl.string(O.t.nzXtaW);
        case E.Eu4.TIER_2:
            return O.intl.string(O.t['h33/ub']);
        case E.Eu4.TIER_3:
            return O.intl.string(O.t.BfF6EB);
        default:
            throw Error('Not a valid tier type');
    }
}
function D(e) {
    switch (e) {
        case E.Eu4.NONE:
            return O.intl.string(O.t.LcKgJS);
        case E.Eu4.TIER_1:
            return O.intl.string(O.t.xRjU1d);
        case E.Eu4.TIER_2:
            return O.intl.string(O.t.C7e2Bg);
        case E.Eu4.TIER_3:
            return O.intl.string(O.t.avGxmp);
        default:
            throw Error('Not a valid tier type');
    }
}
let L = i().memoize((e) => (y.HO[E.Eu4.TIER_1].features.includes(e) ? E.Eu4.TIER_1 : y.HO[E.Eu4.TIER_2].features.includes(e) ? E.Eu4.TIER_2 : y.HO[E.Eu4.TIER_3].features.includes(e) ? E.Eu4.TIER_3 : null)),
    x = (e) => (e === E.Eu4.NONE ? E.Qqv.NONE : e === E.Eu4.TIER_1 ? E.Qqv.TIER_1 : e === E.Eu4.TIER_2 ? E.Qqv.TIER_2 : e === E.Eu4.TIER_3 ? E.Qqv.TIER_3 : null);
function k(e) {
    var t;
    let n = null == (t = u.Z.getGuild(e)) ? void 0 : t.premiumTier;
    return null != n ? n : E.Eu4.NONE;
}
function M(e, t) {
    return null == t || (null != e && e >= t);
}
function j(e, t) {
    return M(e.premiumTier, t);
}
function U(e) {
    return i()
        .values(e)
        .filter((e) => e.isAvailable());
}
function G(e) {
    let { isBoostManagementDisabledForFractionalPremium: t } = e,
        n = f.Z.getPremiumTypeSubscription();
    d.Z.hasFetched || d.Z.isFetching || (0, s.X8)();
    let r = U(d.Z.boostSlots),
        i = null == n ? void 0 : n.isPausedOrPausePending,
        o = r.length > 0,
        l = O.intl.format(O.t.kJ1AZG, { helpCenterLink: h.Z.getArticleURL(E.BhN.FRACTIONAL_PREMIUM_ABOUT) }),
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
                    fractionalState: y.a$.NONE
                },
                () => O.intl.string(O.t.mOWsFx)
            )
            .otherwise(() => null);
    if (null != c) return c;
    let { numAvailableGuildBoostSlots: u, numCanceledGuildBoostSlots: _ } = Object.values(d.Z.boostSlots).reduce((e, t) => (q(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e), {
        numAvailableGuildBoostSlots: 0,
        numCanceledGuildBoostSlots: 0
    });
    if (null == n || u > 0) return null;
    if (n.status === E.O0b.PAST_DUE) return O.intl.string(O.t.De4Vm5);
    if (n.status === E.O0b.ACCOUNT_HOLD) return O.intl.string(O.t.JakNQ0);
    if (_ > 0) return O.intl.string(O.t.x25mZW);
    if (null == n.renewalMutations) return null;
    let p = m.uV(n.renewalMutations.additionalPlans);
    return m.uV(n.additionalPlans) > p ? O.intl.string(O.t.x25mZW) : O.intl.string(O.t['W/bb8f']);
}
function B(e) {
    return e.sort((e, t) => (null != e.endsAt && null != t.endsAt ? e.endsAt.getTime() - t.endsAt.getTime() : -1));
}
function V(e, t) {
    var n;
    if ((null == (n = u.Z.getGuild(t)) ? void 0 : n.features.has(E.oNc.PREMIUM_TIER_3_OVERRIDE)) === !0) return 0;
    let r = k(t),
        i = E.oCV[r],
        a = e.filter((e) => null != e.endsAt);
    return i - (e.length - a.length);
}
let F = [
    {
        tier: E.Eu4.TIER_3,
        amount: E.oCV[E.Eu4.TIER_3],
        nextTier: null
    },
    {
        tier: E.Eu4.TIER_2,
        amount: E.oCV[E.Eu4.TIER_2],
        nextTier: E.Eu4.TIER_3
    },
    {
        tier: E.Eu4.TIER_1,
        amount: E.oCV[E.Eu4.TIER_1],
        nextTier: E.Eu4.TIER_2
    }
];
function Z(e, t) {
    let n = V(e, t);
    if (n > 0) {
        let r = B(e).filter((e) => null != e.endsAt),
            i = r.length - n;
        i < 0 &&
            g.Z.addBreadcrumb({
                category: 'premium',
                message: 'Negative index while checking grace period ending date.',
                data: {
                    subscriptionLength: e.length,
                    subscriptionsNeededForPremiumTier: E.oCV[k(t)],
                    endingSubscriptionLength: r.length
                }
            });
        let a = r[Math.max(i, 0)];
        return null == a ? void 0 : a.endsAt;
    }
    return null;
}
function H(e, t) {
    let n = N(t),
        r = I.indexOf(t);
    if (-1 === r) return 0;
    let i = I[r - 1],
        a = null != i ? A(i) : 0,
        o = A(t);
    return Math.max(0, n - e.slice(a, o).length);
}
function Y(e, t, n) {
    return -1 === I.indexOf(n) ? 0 : Math.max(0, W(e) - t.length);
}
function W(e) {
    var t, n;
    let r = y.XB + (null != (n = null == (t = e.premiumFeatures) ? void 0 : t.additionalSoundSlots) ? n : 0);
    return Math.max(e.features.has(E.oNc.MORE_SOUNDBOARD) ? y.w1 : y.XB, r);
}
function K(e) {
    var t, n;
    let r = b.xD + (null != (n = null == (t = e.premiumFeatures) ? void 0 : t.additionalEmojiSlots) ? n : 0);
    return Math.max(e.features.has(E.oNc.MORE_EMOJI) ? b.IE : b.xD, r);
}
function z(e, t) {
    let n = (0, l.I)(e.id).available;
    return Math.max(0, E.oCV[t] - n);
}
function q(e) {
    var t;
    return (null == (t = e.subscription) ? void 0 : t.status) === E.O0b.CANCELED || e.canceled;
}
function X(e) {
    var t;
    return null != (t = T.find((t) => e >= E.oCV[t])) ? t : E.Eu4.NONE;
}
function Q(e) {
    var t;
    return null != (t = I.find((t) => e < E.oCV[t])) ? t : E.Eu4.TIER_3;
}
let J = {
    [E.Eu4.NONE]: 0,
    [E.Eu4.TIER_1]: 1 / 3,
    [E.Eu4.TIER_2]: 2 / 3,
    [E.Eu4.TIER_3]: 1
};
function $(e) {
    let t = (0, c.I)(e.id),
        n = X(t),
        r = Q(t),
        i = E.oCV[n],
        a = (t - i) / (E.oCV[r] - i),
        o = J[n],
        s = J[r];
    return {
        fillFactor: n === E.Eu4.TIER_3 ? 1 : a * (s - o) + o,
        totalAvailableBoostsCount: t
    };
}

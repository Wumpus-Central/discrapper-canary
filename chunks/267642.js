n.d(t, {
    A3: () => A,
    FZ: () => T,
    Hl: () => ee,
    Je: () => R,
    Jh: () => M,
    KK: () => q,
    Oe: () => S,
    Qi: () => Y,
    Ro: () => O,
    Vx: () => F,
    _k: () => V,
    _p: () => L,
    aq: () => G,
    cP: () => P,
    e9: () => D,
    ee: () => X,
    f2: () => j,
    gZ: () => H,
    ge: () => x,
    ig: () => N,
    nL: () => K,
    nW: () => w,
    tb: () => k,
    tl: () => Q,
    vx: () => U,
    y4: () => z,
    yw: () => W
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
    E = n(981631),
    b = n(185923),
    y = n(474936),
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
var O = (function (e) {
    return (e[(e.EMOJI = 1)] = 'EMOJI'), (e[(e.AUDIO = 2)] = 'AUDIO'), (e[(e.ANIMATED = 3)] = 'ANIMATED'), (e[(e.CUSTOMIZATION = 4)] = 'CUSTOMIZATION'), (e[(e.UPLOAD = 5)] = 'UPLOAD'), (e[(e.VANITY = 6)] = 'VANITY'), (e[(e.STREAM = 7)] = 'STREAM'), (e[(e.STICKER = 8)] = 'STICKER'), (e[(e.CUSTOM_ROLE_ICON = 11)] = 'CUSTOM_ROLE_ICON'), (e[(e.STAGE_VIDEO = 12)] = 'STAGE_VIDEO'), (e[(e.SOUNDBOARD = 13)] = 'SOUNDBOARD'), e;
})({});
let I = [E.Eu4.NONE, E.Eu4.TIER_1, E.Eu4.TIER_2, E.Eu4.TIER_3],
    S = I.slice().reverse(),
    T = (e) => {
        var t;
        return e === E.Eu4.NONE ? E.Eu4.TIER_1 : null == (t = Z.find((t) => t.tier === e)) ? void 0 : t.nextTier;
    },
    A = (e, t) => (null != t && t.hasFeature(E.oNc.MORE_STICKERS) && e === E.Eu4.TIER_3 ? o.D.MAX_STICKER_SLOTS : y.$8[e]),
    N = (e) => y.pH[e],
    C = (e, t) => (null != t && t.hasFeature(E.oNc.MORE_SOUNDBOARD) ? y.w1 : y._k[e]),
    R = (e) => {
        if (e === E.Eu4.NONE) return y._k[e];
        let t = I[I.indexOf(e) - 1];
        return y._k[e] - y._k[t];
    },
    P = (e) => [
        {
            tier: E.Eu4.TIER_1,
            title: v.intl.string(v.t['lK+WOT']),
            perks: [
                {
                    title: v.intl.formatToPlainString(v.t.dnLAws, {
                        adding: y.HO[E.Eu4.TIER_1].limits.emoji - y.HO[E.Eu4.NONE].limits.emoji,
                        total: y.HO[E.Eu4.TIER_1].limits.emoji
                    }),
                    description: v.intl.string(v.t['/Guvxs']),
                    icon: 1
                },
                {
                    title: v.intl.formatToPlainString(v.t['/9p2/v'], {
                        adding: N(E.Eu4.TIER_1),
                        total: A(E.Eu4.TIER_1)
                    }),
                    description: v.intl.string(v.t.JfsnDQ),
                    icon: 8
                },
                {
                    title: v.intl.formatToPlainString(v.t.NRuk5u, {
                        soundCount: R(E.Eu4.TIER_1),
                        totalSoundCount: C(E.Eu4.TIER_1)
                    }),
                    description: v.intl.string(v.t.Oq7OVl),
                    icon: 13
                },
                {
                    title: v.intl.formatToPlainString(v.t.zoT1ZG, { bitrate: y.HO[E.Eu4.TIER_1].limits.bitrate / 1000 }),
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
            tier: E.Eu4.TIER_2,
            title: v.intl.string(v.t['34GpBQ']),
            perks: [
                {
                    title: v.intl.formatToPlainString(v.t.dnLAws, {
                        adding: y.HO[E.Eu4.TIER_2].limits.emoji - y.HO[E.Eu4.TIER_1].limits.emoji,
                        total: y.HO[E.Eu4.TIER_2].limits.emoji
                    }),
                    description: v.intl.string(v.t.fRiNh4),
                    icon: 1
                },
                {
                    title: v.intl.formatToPlainString(v.t['/9p2/v'], {
                        adding: N(E.Eu4.TIER_2),
                        total: A(E.Eu4.TIER_2)
                    }),
                    description: v.intl.string(v.t.t4TM29),
                    icon: 8
                },
                {
                    title: v.intl.formatToPlainString(v.t.NRuk5u, {
                        soundCount: R(E.Eu4.TIER_2),
                        totalSoundCount: C(E.Eu4.TIER_2)
                    }),
                    description: v.intl.string(v.t.pEYlPT),
                    icon: 13
                },
                {
                    title: v.intl.formatToPlainString(v.t.zoT1ZG, { bitrate: y.HO[E.Eu4.TIER_2].limits.bitrate / 1000 }),
                    description: v.intl.string(v.t['nzRo/P']),
                    icon: 2
                },
                {
                    title: v.intl.string(v.t['+KhQKC']),
                    description: v.intl.string(v.t.ZWf10N),
                    icon: 4
                },
                {
                    title: v.intl.formatToPlainString(v.t.t95LnJ, { fileSize: (0, p.BU)(y.HO[E.Eu4.TIER_2].limits.fileSize / 1024, { useKibibytes: !0 }) }),
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
                          title: v.intl.formatToPlainString(v.t.T8P3TE, { limit: E.eez }),
                          description: v.intl.formatToPlainString(v.t.T8P3TE, { limit: E.eez }),
                          icon: 12
                      }
                    : null
            ].filter(h.lm)
        },
        {
            tier: E.Eu4.TIER_3,
            title: v.intl.string(v.t.P7LdcX),
            perks: [
                {
                    title: v.intl.formatToPlainString(v.t.dnLAws, {
                        adding: y.HO[E.Eu4.TIER_3].limits.emoji - y.HO[E.Eu4.TIER_2].limits.emoji,
                        total: y.HO[E.Eu4.TIER_3].limits.emoji
                    }),
                    description: v.intl.string(v.t.AfJxnZ),
                    icon: 1
                },
                {
                    title: v.intl.formatToPlainString(v.t['/9p2/v'], {
                        adding: N(E.Eu4.TIER_3),
                        total: A(E.Eu4.TIER_3)
                    }),
                    description: v.intl.string(v.t['+ZI4QU']),
                    icon: 8
                },
                {
                    title: v.intl.formatToPlainString(v.t.NRuk5u, {
                        soundCount: R(E.Eu4.TIER_3),
                        totalSoundCount: C(E.Eu4.TIER_3)
                    }),
                    description: v.intl.string(v.t['8omJSU']),
                    icon: 13
                },
                {
                    title: v.intl.formatToPlainString(v.t.zoT1ZG, { bitrate: y.HO[E.Eu4.TIER_3].limits.bitrate / 1000 }),
                    description: v.intl.string(v.t.cOkbp6),
                    icon: 2
                },
                {
                    title: v.intl.string(v.t.C2w2cH),
                    description: v.intl.format(v.t['3Reos7'], { helpdeskArticle: m.Z.getArticleURL(E.BhN.GUILD_VANITY_URL) }),
                    icon: 6
                },
                {
                    title: v.intl.formatToPlainString(v.t.t95LnJ, { fileSize: (0, p.BU)(y.HO[E.Eu4.TIER_3].limits.fileSize / 1024, { useKibibytes: !0 }) }),
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
                          title: v.intl.formatToPlainString(v.t.T8P3TE, { limit: E.RcX }),
                          description: v.intl.formatToPlainString(v.t.T8P3TE, { limit: E.RcX }),
                          icon: 12
                      }
                    : null
            ].filter(h.lm)
        }
    ];
function w(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { useLevels: n = !0 } = t;
    switch (e) {
        case E.Eu4.NONE:
            return n ? v.intl.string(v.t.LcKgJS) : v.intl.string(v.t.mx8j2t);
        case E.Eu4.TIER_1:
            return v.intl.string(v.t.nzXtaW);
        case E.Eu4.TIER_2:
            return v.intl.string(v.t['h33/ub']);
        case E.Eu4.TIER_3:
            return v.intl.string(v.t.BfF6EB);
        default:
            throw Error('Not a valid tier type');
    }
}
function D(e) {
    switch (e) {
        case E.Eu4.NONE:
            return v.intl.string(v.t.LcKgJS);
        case E.Eu4.TIER_1:
            return v.intl.string(v.t.xRjU1d);
        case E.Eu4.TIER_2:
            return v.intl.string(v.t.C7e2Bg);
        case E.Eu4.TIER_3:
            return v.intl.string(v.t.avGxmp);
        default:
            throw Error('Not a valid tier type');
    }
}
let L = i().memoize((e) => (y.HO[E.Eu4.TIER_1].features.includes(e) ? E.Eu4.TIER_1 : y.HO[E.Eu4.TIER_2].features.includes(e) ? E.Eu4.TIER_2 : y.HO[E.Eu4.TIER_3].features.includes(e) ? E.Eu4.TIER_3 : null)),
    x = (e) => (e === E.Eu4.NONE ? E.Qqv.NONE : e === E.Eu4.TIER_1 ? E.Qqv.TIER_1 : e === E.Eu4.TIER_2 ? E.Qqv.TIER_2 : e === E.Eu4.TIER_3 ? E.Qqv.TIER_3 : null);
function M(e) {
    var t;
    let n = null == (t = d.Z.getGuild(e)) ? void 0 : t.premiumTier;
    return null != n ? n : E.Eu4.NONE;
}
function k(e, t) {
    return null == t || (null != e && e >= t);
}
function j(e, t) {
    return k(e.premiumTier, t);
}
function U(e) {
    return i()
        .values(e)
        .filter((e) => e.isAvailable());
}
function G(e) {
    let { isBoostManagementDisabledForFractionalPremium: t } = e,
        n = _.ZP.getPremiumTypeSubscription();
    f.Z.hasFetched || (0, s.X8)();
    let r = U(f.Z.boostSlots),
        i = null == n ? void 0 : n.isPausedOrPausePending,
        o = r.length > 0,
        l = v.intl.format(v.t.kJ1AZG, { helpCenterLink: m.Z.getArticleURL(E.BhN.FRACTIONAL_PREMIUM_ABOUT) }),
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
                () => v.intl.string(v.t.mOWsFx)
            )
            .otherwise(() => null);
    if (null != c) return c;
    let { numAvailableGuildBoostSlots: u, numCanceledGuildBoostSlots: d } = Object.values(f.Z.boostSlots).reduce((e, t) => (Q(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e), {
        numAvailableGuildBoostSlots: 0,
        numCanceledGuildBoostSlots: 0
    });
    if (null == n || u > 0) return null;
    if (n.status === E.O0b.PAST_DUE) return v.intl.string(v.t.De4Vm5);
    if (n.status === E.O0b.ACCOUNT_HOLD) return v.intl.string(v.t.JakNQ0);
    if (d > 0) return v.intl.string(v.t.x25mZW);
    if (null == n.renewalMutations) return null;
    let p = g.uV(n.renewalMutations.additionalPlans);
    return g.uV(n.additionalPlans) > p ? v.intl.string(v.t.x25mZW) : v.intl.string(v.t['W/bb8f']);
}
function B(e) {
    return e.sort((e, t) => (null != e.endsAt && null != t.endsAt ? e.endsAt.getTime() - t.endsAt.getTime() : -1));
}
function F(e, t) {
    return V(e, t) > 0;
}
function V(e, t) {
    var n;
    if ((null == (n = d.Z.getGuild(t)) ? void 0 : n.hasFeature(E.oNc.PREMIUM_TIER_3_OVERRIDE)) === !0) return 0;
    let r = M(t),
        i = E.oCV[r],
        a = e.filter((e) => null != e.endsAt);
    return i - (e.length - a.length);
}
let Z = [
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
function H(e, t) {
    let n = V(e, t);
    if (n > 0) {
        let t = B(e).filter((e) => null != e.endsAt);
        return t[t.length - n].endsAt;
    }
    return null;
}
function Y(e, t) {
    let n = N(t),
        r = I.indexOf(t);
    if (-1 === r) return 0;
    let i = I[r - 1],
        a = null != i ? A(i) : 0,
        o = A(t);
    return Math.max(0, n - e.slice(a, o).length);
}
function W(e, t, n) {
    return -1 === I.indexOf(n) ? 0 : Math.max(0, K(e) - t.length);
}
function K(e) {
    let t = (0, l.gV)(e.id, 'GuildRecord'),
        n = y.XB;
    if (t) {
        var r, i;
        n += null != (i = null == (r = e.premiumFeatures) ? void 0 : r.additionalSoundSlots) ? i : 0;
    } else n = y.HO[e.premiumTier].limits.soundboardSounds;
    return Math.max(e.hasFeature(E.oNc.MORE_SOUNDBOARD) ? y.w1 : y.XB, n);
}
function z(e) {
    let t = (0, l.gV)(e.id, 'GuildRecord'),
        n = b.xD;
    if (t) {
        var r, i;
        n += null != (i = null == (r = e.premiumFeatures) ? void 0 : r.additionalEmojiSlots) ? i : 0;
    } else n = y.HO[e.premiumTier].limits.emoji;
    return Math.max(e.hasFeature(E.oNc.MORE_EMOJI) ? b.IE : b.xD, n);
}
function q(e, t) {
    let n = (0, c.I)(e.id).available;
    return Math.max(0, E.oCV[t] - n);
}
function Q(e) {
    var t;
    return (null == (t = e.subscription) ? void 0 : t.status) === E.O0b.CANCELED || e.canceled;
}
function X(e) {
    var t;
    return null != (t = S.find((t) => e >= E.oCV[t])) ? t : E.Eu4.NONE;
}
function J(e) {
    var t;
    return null != (t = I.find((t) => e < E.oCV[t])) ? t : E.Eu4.TIER_3;
}
let $ = {
    [E.Eu4.NONE]: 0,
    [E.Eu4.TIER_1]: 1 / 3,
    [E.Eu4.TIER_2]: 2 / 3,
    [E.Eu4.TIER_3]: 1
};
function ee(e) {
    let t = (0, u.I)(e.id),
        n = X(t),
        r = J(t),
        i = E.oCV[n],
        a = (t - i) / (E.oCV[r] - i),
        o = $[n],
        s = $[r];
    return {
        fillFactor: n === E.Eu4.TIER_3 ? 1 : a * (s - o) + o,
        totalAvailableBoostsCount: t
    };
}

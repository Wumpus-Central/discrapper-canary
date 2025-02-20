n.d(t, {
    A3: () => y,
    FZ: () => b,
    Je: () => I,
    KK: () => V,
    Qi: () => Z,
    Ro: () => E,
    U2: () => S,
    Vx: () => k,
    _k: () => j,
    _p: () => C,
    aq: () => L,
    cP: () => T,
    e9: () => A,
    f2: () => D,
    gZ: () => B,
    ge: () => R,
    ig: () => O,
    nW: () => N,
    rF: () => P,
    tb: () => w,
    tl: () => H,
    vn: () => U,
    vx: () => x,
    yw: () => F
}),
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
    l = n(314884),
    c = n(78839),
    u = n(424218),
    d = n(823379),
    f = n(63063),
    p = n(74538),
    _ = n(981631),
    h = n(474936),
    m = n(388032);
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
let g = 96;
var E = (function (e) {
    return (e[(e.EMOJI = 1)] = 'EMOJI'), (e[(e.AUDIO = 2)] = 'AUDIO'), (e[(e.ANIMATED = 3)] = 'ANIMATED'), (e[(e.CUSTOMIZATION = 4)] = 'CUSTOMIZATION'), (e[(e.UPLOAD = 5)] = 'UPLOAD'), (e[(e.VANITY = 6)] = 'VANITY'), (e[(e.STREAM = 7)] = 'STREAM'), (e[(e.STICKER = 8)] = 'STICKER'), (e[(e.CUSTOM_ROLE_ICON = 11)] = 'CUSTOM_ROLE_ICON'), (e[(e.STAGE_VIDEO = 12)] = 'STAGE_VIDEO'), (e[(e.SOUNDBOARD = 13)] = 'SOUNDBOARD'), e;
})({});
let v = [_.Eu4.NONE, _.Eu4.TIER_1, _.Eu4.TIER_2, _.Eu4.TIER_3],
    b = (e, t) => {
        var n;
        return e === _.Eu4.NONE ? _.Eu4.TIER_1 : null === (n = G(t).find((t) => t.tier === e)) || void 0 === n ? void 0 : n.nextTier;
    },
    y = (e, t) => (null != t && t.hasFeature(_.oNc.MORE_STICKERS) && e === _.Eu4.TIER_3 ? a.D.MAX_STICKER_SLOTS : h.$8[e]),
    O = (e) => h.pH[e],
    S = (e, t) => (null != t && t.hasFeature(_.oNc.MORE_SOUNDBOARD) ? g : h._k[e]),
    I = (e) => {
        if (e === _.Eu4.NONE) return h._k[e];
        let t = v[v.indexOf(e) - 1];
        return h._k[e] - h._k[t];
    },
    T = (e) => [
        {
            tier: _.Eu4.TIER_1,
            title: m.NW.string(m.t['lK+WOT']),
            perks: [
                {
                    title: m.NW.formatToPlainString(m.t.dnLAws, {
                        adding: h.HO[_.Eu4.TIER_1].limits.emoji - h.HO[_.Eu4.NONE].limits.emoji,
                        total: h.HO[_.Eu4.TIER_1].limits.emoji
                    }),
                    description: m.NW.string(m.t['/Guvxs']),
                    icon: 1
                },
                {
                    title: m.NW.formatToPlainString(m.t['/9p2/v'], {
                        adding: O(_.Eu4.TIER_1),
                        total: y(_.Eu4.TIER_1)
                    }),
                    description: m.NW.string(m.t.JfsnDQ),
                    icon: 8
                },
                {
                    title: m.NW.formatToPlainString(m.t.NRuk5u, {
                        soundCount: I(_.Eu4.TIER_1),
                        totalSoundCount: S(_.Eu4.TIER_1)
                    }),
                    description: m.NW.string(m.t.Oq7OVl),
                    icon: 13
                },
                {
                    title: m.NW.formatToPlainString(m.t.zoT1ZG, { bitrate: h.HO[_.Eu4.TIER_1].limits.bitrate / 1000 }),
                    description: m.NW.string(m.t['8a03jo']),
                    icon: 2
                },
                {
                    title: m.NW.string(m.t.h0s84e),
                    description: m.NW.format(m.t['t+0cbm'], {}),
                    icon: 3
                },
                {
                    title: m.NW.string(m.t.vjPGPj),
                    description: m.NW.string(m.t.tG4MMT),
                    icon: 4
                },
                {
                    title: m.NW.string(m.t.cObMZG),
                    description: m.NW.string(m.t['puH/9f']),
                    icon: 7
                }
            ].filter(d.lm)
        },
        {
            tier: _.Eu4.TIER_2,
            title: m.NW.string(m.t['34GpBQ']),
            perks: [
                {
                    title: m.NW.formatToPlainString(m.t.dnLAws, {
                        adding: h.HO[_.Eu4.TIER_2].limits.emoji - h.HO[_.Eu4.TIER_1].limits.emoji,
                        total: h.HO[_.Eu4.TIER_2].limits.emoji
                    }),
                    description: m.NW.string(m.t.fRiNh4),
                    icon: 1
                },
                {
                    title: m.NW.formatToPlainString(m.t['/9p2/v'], {
                        adding: O(_.Eu4.TIER_2),
                        total: y(_.Eu4.TIER_2)
                    }),
                    description: m.NW.string(m.t.t4TM29),
                    icon: 8
                },
                {
                    title: m.NW.formatToPlainString(m.t.NRuk5u, {
                        soundCount: I(_.Eu4.TIER_2),
                        totalSoundCount: S(_.Eu4.TIER_2)
                    }),
                    description: m.NW.string(m.t.pEYlPT),
                    icon: 13
                },
                {
                    title: m.NW.formatToPlainString(m.t.zoT1ZG, { bitrate: h.HO[_.Eu4.TIER_2].limits.bitrate / 1000 }),
                    description: m.NW.string(m.t['nzRo/P']),
                    icon: 2
                },
                {
                    title: m.NW.string(m.t['+KhQKC']),
                    description: m.NW.string(m.t.ZWf10N),
                    icon: 4
                },
                {
                    title: m.NW.formatToPlainString(m.t.t95LnJ, { fileSize: (0, u.BU)(h.HO[_.Eu4.TIER_2].limits.fileSize / 1024, { useKibibytes: !0 }) }),
                    description: m.NW.format(m.t['yvht6+'], {}),
                    icon: 5
                },
                {
                    title: m.NW.string(m.t.bmaoND),
                    description: m.NW.string(m.t.WZW2Bg),
                    icon: 7
                },
                {
                    title: m.NW.string(m.t.BHtqcX),
                    description: m.NW.string(m.t.ukVcER),
                    icon: 11
                },
                e
                    ? {
                          title: m.NW.formatToPlainString(m.t.T8P3TE, { limit: _.eez }),
                          description: m.NW.formatToPlainString(m.t.T8P3TE, { limit: _.eez }),
                          icon: 12
                      }
                    : null
            ].filter(d.lm)
        },
        {
            tier: _.Eu4.TIER_3,
            title: m.NW.string(m.t.P7LdcX),
            perks: [
                {
                    title: m.NW.formatToPlainString(m.t.dnLAws, {
                        adding: h.HO[_.Eu4.TIER_3].limits.emoji - h.HO[_.Eu4.TIER_2].limits.emoji,
                        total: h.HO[_.Eu4.TIER_3].limits.emoji
                    }),
                    description: m.NW.string(m.t.AfJxnZ),
                    icon: 1
                },
                {
                    title: m.NW.formatToPlainString(m.t['/9p2/v'], {
                        adding: O(_.Eu4.TIER_3),
                        total: y(_.Eu4.TIER_3)
                    }),
                    description: m.NW.string(m.t['+ZI4QU']),
                    icon: 8
                },
                {
                    title: m.NW.formatToPlainString(m.t.NRuk5u, {
                        soundCount: I(_.Eu4.TIER_3),
                        totalSoundCount: S(_.Eu4.TIER_3)
                    }),
                    description: m.NW.string(m.t['8omJSU']),
                    icon: 13
                },
                {
                    title: m.NW.formatToPlainString(m.t.zoT1ZG, { bitrate: h.HO[_.Eu4.TIER_3].limits.bitrate / 1000 }),
                    description: m.NW.string(m.t.cOkbp6),
                    icon: 2
                },
                {
                    title: m.NW.string(m.t.C2w2cH),
                    description: m.NW.format(m.t['3Reos7'], { helpdeskArticle: f.Z.getArticleURL(_.BhN.GUILD_VANITY_URL) }),
                    icon: 6
                },
                {
                    title: m.NW.formatToPlainString(m.t.t95LnJ, { fileSize: (0, u.BU)(h.HO[_.Eu4.TIER_3].limits.fileSize / 1024, { useKibibytes: !0 }) }),
                    description: m.NW.format(m.t.IwDqSE, {}),
                    icon: 5
                },
                {
                    title: m.NW.string(m.t.z0GtBA),
                    description: m.NW.string(m.t.v92GNT),
                    icon: 3
                },
                e
                    ? {
                          title: m.NW.formatToPlainString(m.t.T8P3TE, { limit: _.RcX }),
                          description: m.NW.formatToPlainString(m.t.T8P3TE, { limit: _.RcX }),
                          icon: 12
                      }
                    : null
            ].filter(d.lm)
        }
    ];
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { useLevels: n = !0 } = t;
    switch (e) {
        case _.Eu4.NONE:
            return n ? m.NW.string(m.t.LcKgJS) : m.NW.string(m.t.mx8j2t);
        case _.Eu4.TIER_1:
            return m.NW.string(m.t.nzXtaW);
        case _.Eu4.TIER_2:
            return m.NW.string(m.t['h33/ub']);
        case _.Eu4.TIER_3:
            return m.NW.string(m.t.BfF6EB);
        default:
            throw Error('Not a valid tier type');
    }
}
function A(e) {
    switch (e) {
        case _.Eu4.NONE:
            return m.NW.string(m.t.LcKgJS);
        case _.Eu4.TIER_1:
            return m.NW.string(m.t.xRjU1d);
        case _.Eu4.TIER_2:
            return m.NW.string(m.t.C7e2Bg);
        case _.Eu4.TIER_3:
            return m.NW.string(m.t.avGxmp);
        default:
            throw Error('Not a valid tier type');
    }
}
let C = i().memoize((e) => (h.HO[_.Eu4.TIER_1].features.includes(e) ? _.Eu4.TIER_1 : h.HO[_.Eu4.TIER_2].features.includes(e) ? _.Eu4.TIER_2 : h.HO[_.Eu4.TIER_3].features.includes(e) ? _.Eu4.TIER_3 : null)),
    R = (e) => (e === _.Eu4.NONE ? _.Qqv.NONE : e === _.Eu4.TIER_1 ? _.Qqv.TIER_1 : e === _.Eu4.TIER_2 ? _.Qqv.TIER_2 : e === _.Eu4.TIER_3 ? _.Qqv.TIER_3 : null);
function P(e, t) {
    for (let n of G(t)) if (e >= n.amount) return n.tier;
    return _.Eu4.NONE;
}
function w(e, t) {
    return null == t || (null != e && e >= t);
}
function D(e, t) {
    return w(e.premiumTier, t);
}
function x(e) {
    return i()
        .values(e)
        .filter((e) => e.isAvailable());
}
function L(e) {
    let { fractionalState: t } = e,
        n = c.ZP.getPremiumTypeSubscription();
    l.Z.hasFetched || (0, s.X8)();
    let r = x(l.Z.boostSlots),
        i = null == n ? void 0 : n.isPausedOrPausePending,
        a = r.length > 0,
        u = m.NW.format(m.t.kJ1AZG, { helpCenterLink: f.Z.getArticleURL(_.BhN.FRACTIONAL_PREMIUM_ABOUT) }),
        d = (0, o.EQ)({
            isPausedOrPausePending: i,
            fractionalState: t,
            canApplyBoosts: a
        })
            .with(
                {
                    isPausedOrPausePending: !0,
                    fractionalState: h.a$.FP_SUB_PAUSED,
                    canApplyBoosts: !1
                },
                () => u
            )
            .with(
                {
                    isPausedOrPausePending: void 0,
                    fractionalState: h.a$.FP_ONLY
                },
                () => u
            )
            .with(
                {
                    isPausedOrPausePending: !1,
                    fractionalState: h.a$.FP_ONLY
                },
                () => u
            )
            .with(
                {
                    isPausedOrPausePending: !0,
                    fractionalState: h.a$.NONE
                },
                () => m.NW.string(m.t.mOWsFx)
            )
            .otherwise(() => null);
    if (null != d) return d;
    let { numAvailableGuildBoostSlots: g, numCanceledGuildBoostSlots: E } = Object.values(l.Z.boostSlots).reduce((e, t) => (H(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e), {
        numAvailableGuildBoostSlots: 0,
        numCanceledGuildBoostSlots: 0
    });
    if (null == n || g > 0) return null;
    if (n.status === _.O0b.PAST_DUE) return m.NW.string(m.t.De4Vm5);
    if (n.status === _.O0b.ACCOUNT_HOLD) return m.NW.string(m.t.JakNQ0);
    if (E > 0) return m.NW.string(m.t.x25mZW);
    if (null == n.renewalMutations) return null;
    let v = p.uV(n.renewalMutations.additionalPlans);
    return p.uV(n.additionalPlans) > v ? m.NW.string(m.t.x25mZW) : m.NW.string(m.t['W/bb8f']);
}
function M(e) {
    return e.sort((e, t) => (null != e.endsAt && null != t.endsAt ? e.endsAt.getTime() - t.endsAt.getTime() : -1));
}
function k(e, t) {
    return j(e, t) > 0;
}
function j(e, t) {
    let n = P(e.length, t),
        r = U(t)[n],
        i = e.filter((e) => null != e.endsAt);
    return r - (e.length - i.length);
}
function U(e) {
    return _.oCV;
}
function G(e) {
    let t = U(e);
    return [
        {
            tier: _.Eu4.TIER_3,
            amount: t[_.Eu4.TIER_3],
            nextTier: null
        },
        {
            tier: _.Eu4.TIER_2,
            amount: t[_.Eu4.TIER_2],
            nextTier: _.Eu4.TIER_3
        },
        {
            tier: _.Eu4.TIER_1,
            amount: t[_.Eu4.TIER_1],
            nextTier: _.Eu4.TIER_2
        }
    ];
}
function B(e, t) {
    let n = j(e, t);
    if (n > 0) {
        let t = M(e).filter((e) => null != e.endsAt);
        return t[t.length - n].endsAt;
    }
    return null;
}
function Z(e, t) {
    let n = O(t),
        r = v.indexOf(t);
    if (-1 === r) return 0;
    let i = v[r - 1],
        o = null != i ? y(i) : 0,
        a = y(t);
    return Math.max(0, n - e.slice(o, a).length);
}
function F(e, t, n) {
    return -1 === v.indexOf(n) ? 0 : Math.max(0, S(n, e) - t.length);
}
function V(e, t) {
    let n = e.premiumSubscriberCount;
    return Math.max(0, U(e.id)[t] - n);
}
function H(e) {
    var t;
    return (null === (t = e.subscription) || void 0 === t ? void 0 : t.status) === _.O0b.CANCELED || e.canceled;
}

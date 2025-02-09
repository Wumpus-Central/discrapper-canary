n.d(t, {
    A3: () => I,
    FZ: () => y,
    Je: () => S,
    KK: () => j,
    Qi: () => F,
    Ro: () => E,
    U2: () => b,
    Vx: () => k,
    _k: () => U,
    _p: () => R,
    aq: () => P,
    cP: () => A,
    e9: () => C,
    f2: () => x,
    gZ: () => Z,
    ge: () => O,
    ig: () => T,
    nW: () => N,
    rF: () => D,
    tb: () => L,
    tl: () => H,
    vn: () => G,
    vx: () => w,
    yw: () => V
}),
    n(411104),
    n(47120),
    n(627341),
    n(724458);
var i = n(392711),
    r = n.n(i);
n(913527);
var a = n(278074),
    s = n(274136),
    o = n(179360),
    l = n(314884),
    u = n(78839),
    c = n(424218),
    d = n(823379),
    f = n(63063),
    _ = n(74538),
    p = n(981631),
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
let v = [p.Eu4.NONE, p.Eu4.TIER_1, p.Eu4.TIER_2, p.Eu4.TIER_3],
    y = (e, t) => {
        var n;
        return e === p.Eu4.NONE ? p.Eu4.TIER_1 : null === (n = B(t).find((t) => t.tier === e)) || void 0 === n ? void 0 : n.nextTier;
    },
    I = (e, t) => (null != t && t.hasFeature(p.oNc.MORE_STICKERS) && e === p.Eu4.TIER_3 ? s.D.MAX_STICKER_SLOTS : h.$8[e]),
    T = (e) => h.pH[e],
    b = (e, t) => (null != t && t.hasFeature(p.oNc.MORE_SOUNDBOARD) ? g : h._k[e]),
    S = (e) => {
        if (e === p.Eu4.NONE) return h._k[e];
        let t = v[v.indexOf(e) - 1];
        return h._k[e] - h._k[t];
    },
    A = (e) => [
        {
            tier: p.Eu4.TIER_1,
            title: m.intl.string(m.t['lK+WOT']),
            perks: [
                {
                    title: m.intl.formatToPlainString(m.t.dnLAws, {
                        adding: h.HO[p.Eu4.TIER_1].limits.emoji - h.HO[p.Eu4.NONE].limits.emoji,
                        total: h.HO[p.Eu4.TIER_1].limits.emoji
                    }),
                    description: m.intl.string(m.t['/Guvxs']),
                    icon: 1
                },
                {
                    title: m.intl.formatToPlainString(m.t['/9p2/v'], {
                        adding: T(p.Eu4.TIER_1),
                        total: I(p.Eu4.TIER_1)
                    }),
                    description: m.intl.string(m.t.JfsnDQ),
                    icon: 8
                },
                {
                    title: m.intl.formatToPlainString(m.t.NRuk5u, {
                        soundCount: S(p.Eu4.TIER_1),
                        totalSoundCount: b(p.Eu4.TIER_1)
                    }),
                    description: m.intl.string(m.t.Oq7OVl),
                    icon: 13
                },
                {
                    title: m.intl.formatToPlainString(m.t.zoT1ZG, { bitrate: h.HO[p.Eu4.TIER_1].limits.bitrate / 1000 }),
                    description: m.intl.string(m.t['8a03jo']),
                    icon: 2
                },
                {
                    title: m.intl.string(m.t.h0s84e),
                    description: m.intl.format(m.t['t+0cbm'], {}),
                    icon: 3
                },
                {
                    title: m.intl.string(m.t.vjPGPj),
                    description: m.intl.string(m.t.tG4MMT),
                    icon: 4
                },
                {
                    title: m.intl.string(m.t.cObMZG),
                    description: m.intl.string(m.t['puH/9f']),
                    icon: 7
                }
            ].filter(d.lm)
        },
        {
            tier: p.Eu4.TIER_2,
            title: m.intl.string(m.t['34GpBQ']),
            perks: [
                {
                    title: m.intl.formatToPlainString(m.t.dnLAws, {
                        adding: h.HO[p.Eu4.TIER_2].limits.emoji - h.HO[p.Eu4.TIER_1].limits.emoji,
                        total: h.HO[p.Eu4.TIER_2].limits.emoji
                    }),
                    description: m.intl.string(m.t.fRiNh4),
                    icon: 1
                },
                {
                    title: m.intl.formatToPlainString(m.t['/9p2/v'], {
                        adding: T(p.Eu4.TIER_2),
                        total: I(p.Eu4.TIER_2)
                    }),
                    description: m.intl.string(m.t.t4TM29),
                    icon: 8
                },
                {
                    title: m.intl.formatToPlainString(m.t.NRuk5u, {
                        soundCount: S(p.Eu4.TIER_2),
                        totalSoundCount: b(p.Eu4.TIER_2)
                    }),
                    description: m.intl.string(m.t.pEYlPT),
                    icon: 13
                },
                {
                    title: m.intl.formatToPlainString(m.t.zoT1ZG, { bitrate: h.HO[p.Eu4.TIER_2].limits.bitrate / 1000 }),
                    description: m.intl.string(m.t['nzRo/P']),
                    icon: 2
                },
                {
                    title: m.intl.string(m.t['+KhQKC']),
                    description: m.intl.string(m.t.ZWf10N),
                    icon: 4
                },
                {
                    title: m.intl.formatToPlainString(m.t.t95LnJ, { fileSize: (0, c.BU)(h.HO[p.Eu4.TIER_2].limits.fileSize / 1024, { useKibibytes: !0 }) }),
                    description: m.intl.format(m.t['yvht6+'], {}),
                    icon: 5
                },
                {
                    title: m.intl.string(m.t.bmaoND),
                    description: m.intl.string(m.t.WZW2Bg),
                    icon: 7
                },
                {
                    title: m.intl.string(m.t.BHtqcX),
                    description: m.intl.string(m.t.ukVcER),
                    icon: 11
                },
                e
                    ? {
                          title: m.intl.formatToPlainString(m.t.T8P3TE, { limit: p.eez }),
                          description: m.intl.formatToPlainString(m.t.T8P3TE, { limit: p.eez }),
                          icon: 12
                      }
                    : null
            ].filter(d.lm)
        },
        {
            tier: p.Eu4.TIER_3,
            title: m.intl.string(m.t.P7LdcX),
            perks: [
                {
                    title: m.intl.formatToPlainString(m.t.dnLAws, {
                        adding: h.HO[p.Eu4.TIER_3].limits.emoji - h.HO[p.Eu4.TIER_2].limits.emoji,
                        total: h.HO[p.Eu4.TIER_3].limits.emoji
                    }),
                    description: m.intl.string(m.t.AfJxnZ),
                    icon: 1
                },
                {
                    title: m.intl.formatToPlainString(m.t['/9p2/v'], {
                        adding: T(p.Eu4.TIER_3),
                        total: I(p.Eu4.TIER_3)
                    }),
                    description: m.intl.string(m.t['+ZI4QU']),
                    icon: 8
                },
                {
                    title: m.intl.formatToPlainString(m.t.NRuk5u, {
                        soundCount: S(p.Eu4.TIER_3),
                        totalSoundCount: b(p.Eu4.TIER_3)
                    }),
                    description: m.intl.string(m.t['8omJSU']),
                    icon: 13
                },
                {
                    title: m.intl.formatToPlainString(m.t.zoT1ZG, { bitrate: h.HO[p.Eu4.TIER_3].limits.bitrate / 1000 }),
                    description: m.intl.string(m.t.cOkbp6),
                    icon: 2
                },
                {
                    title: m.intl.string(m.t.C2w2cH),
                    description: m.intl.format(m.t['3Reos7'], { helpdeskArticle: f.Z.getArticleURL(p.BhN.GUILD_VANITY_URL) }),
                    icon: 6
                },
                {
                    title: m.intl.formatToPlainString(m.t.t95LnJ, { fileSize: (0, c.BU)(h.HO[p.Eu4.TIER_3].limits.fileSize / 1024, { useKibibytes: !0 }) }),
                    description: m.intl.format(m.t.IwDqSE, {}),
                    icon: 5
                },
                {
                    title: m.intl.string(m.t.z0GtBA),
                    description: m.intl.string(m.t.v92GNT),
                    icon: 3
                },
                e
                    ? {
                          title: m.intl.formatToPlainString(m.t.T8P3TE, { limit: p.RcX }),
                          description: m.intl.formatToPlainString(m.t.T8P3TE, { limit: p.RcX }),
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
        case p.Eu4.NONE:
            return n ? m.intl.string(m.t.LcKgJS) : m.intl.string(m.t.mx8j2t);
        case p.Eu4.TIER_1:
            return m.intl.string(m.t.nzXtaW);
        case p.Eu4.TIER_2:
            return m.intl.string(m.t['h33/ub']);
        case p.Eu4.TIER_3:
            return m.intl.string(m.t.BfF6EB);
        default:
            throw Error('Not a valid tier type');
    }
}
function C(e) {
    switch (e) {
        case p.Eu4.NONE:
            return m.intl.string(m.t.LcKgJS);
        case p.Eu4.TIER_1:
            return m.intl.string(m.t.xRjU1d);
        case p.Eu4.TIER_2:
            return m.intl.string(m.t.C7e2Bg);
        case p.Eu4.TIER_3:
            return m.intl.string(m.t.avGxmp);
        default:
            throw Error('Not a valid tier type');
    }
}
let R = r().memoize((e) => (h.HO[p.Eu4.TIER_1].features.includes(e) ? p.Eu4.TIER_1 : h.HO[p.Eu4.TIER_2].features.includes(e) ? p.Eu4.TIER_2 : h.HO[p.Eu4.TIER_3].features.includes(e) ? p.Eu4.TIER_3 : null)),
    O = (e) => (e === p.Eu4.NONE ? p.Qqv.NONE : e === p.Eu4.TIER_1 ? p.Qqv.TIER_1 : e === p.Eu4.TIER_2 ? p.Qqv.TIER_2 : e === p.Eu4.TIER_3 ? p.Qqv.TIER_3 : null);
function D(e, t) {
    for (let n of B(t)) if (e >= n.amount) return n.tier;
    return p.Eu4.NONE;
}
function L(e, t) {
    return null == t || (null != e && e >= t);
}
function x(e, t) {
    return L(e.premiumTier, t);
}
function w(e) {
    return r()
        .values(e)
        .filter((e) => e.isAvailable());
}
function P(e) {
    let { fractionalState: t } = e,
        n = u.ZP.getPremiumTypeSubscription();
    l.Z.hasFetched || (0, o.X8)();
    let i = w(l.Z.boostSlots),
        r = null == n ? void 0 : n.isPausedOrPausePending,
        s = i.length > 0,
        c = m.intl.format(m.t.kJ1AZG, { helpCenterLink: f.Z.getArticleURL(p.BhN.FRACTIONAL_PREMIUM_ABOUT) }),
        d = (0, a.EQ)({
            isPausedOrPausePending: r,
            fractionalState: t,
            canApplyBoosts: s
        })
            .with(
                {
                    isPausedOrPausePending: !0,
                    fractionalState: h.a$.FP_SUB_PAUSED,
                    canApplyBoosts: !1
                },
                () => c
            )
            .with(
                {
                    isPausedOrPausePending: void 0,
                    fractionalState: h.a$.FP_ONLY
                },
                () => c
            )
            .with(
                {
                    isPausedOrPausePending: !1,
                    fractionalState: h.a$.FP_ONLY
                },
                () => c
            )
            .with(
                {
                    isPausedOrPausePending: !0,
                    fractionalState: h.a$.NONE
                },
                () => m.intl.string(m.t.mOWsFx)
            )
            .otherwise(() => null);
    if (null != d) return d;
    let { numAvailableGuildBoostSlots: g, numCanceledGuildBoostSlots: E } = Object.values(l.Z.boostSlots).reduce((e, t) => (H(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e), {
        numAvailableGuildBoostSlots: 0,
        numCanceledGuildBoostSlots: 0
    });
    if (null == n || g > 0) return null;
    if (n.status === p.O0b.PAST_DUE) return m.intl.string(m.t.De4Vm5);
    if (n.status === p.O0b.ACCOUNT_HOLD) return m.intl.string(m.t.JakNQ0);
    if (E > 0) return m.intl.string(m.t.x25mZW);
    if (null == n.renewalMutations) return null;
    let v = _.uV(n.renewalMutations.additionalPlans);
    return _.uV(n.additionalPlans) > v ? m.intl.string(m.t.x25mZW) : m.intl.string(m.t['W/bb8f']);
}
function M(e) {
    return e.sort((e, t) => (null != e.endsAt && null != t.endsAt ? e.endsAt.getTime() - t.endsAt.getTime() : -1));
}
function k(e, t) {
    return U(e, t) > 0;
}
function U(e, t) {
    let n = D(e.length, t),
        i = G(t)[n],
        r = e.filter((e) => null != e.endsAt);
    return i - (e.length - r.length);
}
function G(e) {
    return p.oCV;
}
function B(e) {
    let t = G(e);
    return [
        {
            tier: p.Eu4.TIER_3,
            amount: t[p.Eu4.TIER_3],
            nextTier: null
        },
        {
            tier: p.Eu4.TIER_2,
            amount: t[p.Eu4.TIER_2],
            nextTier: p.Eu4.TIER_3
        },
        {
            tier: p.Eu4.TIER_1,
            amount: t[p.Eu4.TIER_1],
            nextTier: p.Eu4.TIER_2
        }
    ];
}
function Z(e, t) {
    let n = U(e, t);
    if (n > 0) {
        let t = M(e).filter((e) => null != e.endsAt);
        return t[t.length - n].endsAt;
    }
    return null;
}
function F(e, t) {
    let n = T(t),
        i = v.indexOf(t);
    if (-1 === i) return 0;
    let r = v[i - 1],
        a = null != r ? I(r) : 0,
        s = I(t);
    return Math.max(0, n - e.slice(a, s).length);
}
function V(e, t, n) {
    return -1 === v.indexOf(n) ? 0 : Math.max(0, b(n, e) - t.length);
}
function j(e, t) {
    let n = e.premiumSubscriberCount;
    return Math.max(0, G(e.id)[t] - n);
}
function H(e) {
    var t;
    return (null === (t = e.subscription) || void 0 === t ? void 0 : t.status) === p.O0b.CANCELED || e.canceled;
}

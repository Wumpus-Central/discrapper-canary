n.d(t, {
    A3: () => O,
    FZ: () => y,
    Je: () => T,
    KK: () => Y,
    Qi: () => F,
    Ro: () => v,
    Vx: () => j,
    _k: () => U,
    _p: () => R,
    aq: () => M,
    cP: () => N,
    e9: () => C,
    f2: () => L,
    gZ: () => V,
    ge: () => P,
    ig: () => S,
    nL: () => H,
    nW: () => A,
    rF: () => D,
    tb: () => w,
    tl: () => K,
    vn: () => G,
    vx: () => x,
    y4: () => W,
    yw: () => Z
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
    l = n(50101),
    c = n(314884),
    u = n(78839),
    d = n(424218),
    f = n(823379),
    _ = n(63063),
    p = n(74538),
    h = n(981631),
    g = n(185923),
    m = n(474936),
    E = n(388032);
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
    return (e[(e.EMOJI = 1)] = 'EMOJI'), (e[(e.AUDIO = 2)] = 'AUDIO'), (e[(e.ANIMATED = 3)] = 'ANIMATED'), (e[(e.CUSTOMIZATION = 4)] = 'CUSTOMIZATION'), (e[(e.UPLOAD = 5)] = 'UPLOAD'), (e[(e.VANITY = 6)] = 'VANITY'), (e[(e.STREAM = 7)] = 'STREAM'), (e[(e.STICKER = 8)] = 'STICKER'), (e[(e.CUSTOM_ROLE_ICON = 11)] = 'CUSTOM_ROLE_ICON'), (e[(e.STAGE_VIDEO = 12)] = 'STAGE_VIDEO'), (e[(e.SOUNDBOARD = 13)] = 'SOUNDBOARD'), e;
})({});
let b = [h.Eu4.NONE, h.Eu4.TIER_1, h.Eu4.TIER_2, h.Eu4.TIER_3],
    y = (e, t) => {
        var n;
        return e === h.Eu4.NONE ? h.Eu4.TIER_1 : null === (n = B(t).find((t) => t.tier === e)) || void 0 === n ? void 0 : n.nextTier;
    },
    O = (e, t) => (null != t && t.hasFeature(h.oNc.MORE_STICKERS) && e === h.Eu4.TIER_3 ? a.D.MAX_STICKER_SLOTS : m.$8[e]),
    S = (e) => m.pH[e],
    I = (e, t) => (null != t && t.hasFeature(h.oNc.MORE_SOUNDBOARD) ? m.w1 : m._k[e]),
    T = (e) => {
        if (e === h.Eu4.NONE) return m._k[e];
        let t = b[b.indexOf(e) - 1];
        return m._k[e] - m._k[t];
    },
    N = (e) => [
        {
            tier: h.Eu4.TIER_1,
            title: E.NW.string(E.t['lK+WOT']),
            perks: [
                {
                    title: E.NW.formatToPlainString(E.t.dnLAws, {
                        adding: m.HO[h.Eu4.TIER_1].limits.emoji - m.HO[h.Eu4.NONE].limits.emoji,
                        total: m.HO[h.Eu4.TIER_1].limits.emoji
                    }),
                    description: E.NW.string(E.t['/Guvxs']),
                    icon: 1
                },
                {
                    title: E.NW.formatToPlainString(E.t['/9p2/v'], {
                        adding: S(h.Eu4.TIER_1),
                        total: O(h.Eu4.TIER_1)
                    }),
                    description: E.NW.string(E.t.JfsnDQ),
                    icon: 8
                },
                {
                    title: E.NW.formatToPlainString(E.t.NRuk5u, {
                        soundCount: T(h.Eu4.TIER_1),
                        totalSoundCount: I(h.Eu4.TIER_1)
                    }),
                    description: E.NW.string(E.t.Oq7OVl),
                    icon: 13
                },
                {
                    title: E.NW.formatToPlainString(E.t.zoT1ZG, { bitrate: m.HO[h.Eu4.TIER_1].limits.bitrate / 1000 }),
                    description: E.NW.string(E.t['8a03jo']),
                    icon: 2
                },
                {
                    title: E.NW.string(E.t.h0s84e),
                    description: E.NW.format(E.t['t+0cbm'], {}),
                    icon: 3
                },
                {
                    title: E.NW.string(E.t.vjPGPj),
                    description: E.NW.string(E.t.tG4MMT),
                    icon: 4
                },
                {
                    title: E.NW.string(E.t.cObMZG),
                    description: E.NW.string(E.t['puH/9f']),
                    icon: 7
                }
            ].filter(f.lm)
        },
        {
            tier: h.Eu4.TIER_2,
            title: E.NW.string(E.t['34GpBQ']),
            perks: [
                {
                    title: E.NW.formatToPlainString(E.t.dnLAws, {
                        adding: m.HO[h.Eu4.TIER_2].limits.emoji - m.HO[h.Eu4.TIER_1].limits.emoji,
                        total: m.HO[h.Eu4.TIER_2].limits.emoji
                    }),
                    description: E.NW.string(E.t.fRiNh4),
                    icon: 1
                },
                {
                    title: E.NW.formatToPlainString(E.t['/9p2/v'], {
                        adding: S(h.Eu4.TIER_2),
                        total: O(h.Eu4.TIER_2)
                    }),
                    description: E.NW.string(E.t.t4TM29),
                    icon: 8
                },
                {
                    title: E.NW.formatToPlainString(E.t.NRuk5u, {
                        soundCount: T(h.Eu4.TIER_2),
                        totalSoundCount: I(h.Eu4.TIER_2)
                    }),
                    description: E.NW.string(E.t.pEYlPT),
                    icon: 13
                },
                {
                    title: E.NW.formatToPlainString(E.t.zoT1ZG, { bitrate: m.HO[h.Eu4.TIER_2].limits.bitrate / 1000 }),
                    description: E.NW.string(E.t['nzRo/P']),
                    icon: 2
                },
                {
                    title: E.NW.string(E.t['+KhQKC']),
                    description: E.NW.string(E.t.ZWf10N),
                    icon: 4
                },
                {
                    title: E.NW.formatToPlainString(E.t.t95LnJ, { fileSize: (0, d.BU)(m.HO[h.Eu4.TIER_2].limits.fileSize / 1024, { useKibibytes: !0 }) }),
                    description: E.NW.format(E.t['yvht6+'], {}),
                    icon: 5
                },
                {
                    title: E.NW.string(E.t.bmaoND),
                    description: E.NW.string(E.t.WZW2Bg),
                    icon: 7
                },
                {
                    title: E.NW.string(E.t.BHtqcX),
                    description: E.NW.string(E.t.ukVcER),
                    icon: 11
                },
                e
                    ? {
                          title: E.NW.formatToPlainString(E.t.T8P3TE, { limit: h.eez }),
                          description: E.NW.formatToPlainString(E.t.T8P3TE, { limit: h.eez }),
                          icon: 12
                      }
                    : null
            ].filter(f.lm)
        },
        {
            tier: h.Eu4.TIER_3,
            title: E.NW.string(E.t.P7LdcX),
            perks: [
                {
                    title: E.NW.formatToPlainString(E.t.dnLAws, {
                        adding: m.HO[h.Eu4.TIER_3].limits.emoji - m.HO[h.Eu4.TIER_2].limits.emoji,
                        total: m.HO[h.Eu4.TIER_3].limits.emoji
                    }),
                    description: E.NW.string(E.t.AfJxnZ),
                    icon: 1
                },
                {
                    title: E.NW.formatToPlainString(E.t['/9p2/v'], {
                        adding: S(h.Eu4.TIER_3),
                        total: O(h.Eu4.TIER_3)
                    }),
                    description: E.NW.string(E.t['+ZI4QU']),
                    icon: 8
                },
                {
                    title: E.NW.formatToPlainString(E.t.NRuk5u, {
                        soundCount: T(h.Eu4.TIER_3),
                        totalSoundCount: I(h.Eu4.TIER_3)
                    }),
                    description: E.NW.string(E.t['8omJSU']),
                    icon: 13
                },
                {
                    title: E.NW.formatToPlainString(E.t.zoT1ZG, { bitrate: m.HO[h.Eu4.TIER_3].limits.bitrate / 1000 }),
                    description: E.NW.string(E.t.cOkbp6),
                    icon: 2
                },
                {
                    title: E.NW.string(E.t.C2w2cH),
                    description: E.NW.format(E.t['3Reos7'], { helpdeskArticle: _.Z.getArticleURL(h.BhN.GUILD_VANITY_URL) }),
                    icon: 6
                },
                {
                    title: E.NW.formatToPlainString(E.t.t95LnJ, { fileSize: (0, d.BU)(m.HO[h.Eu4.TIER_3].limits.fileSize / 1024, { useKibibytes: !0 }) }),
                    description: E.NW.format(E.t.IwDqSE, {}),
                    icon: 5
                },
                {
                    title: E.NW.string(E.t.z0GtBA),
                    description: E.NW.string(E.t.v92GNT),
                    icon: 3
                },
                e
                    ? {
                          title: E.NW.formatToPlainString(E.t.T8P3TE, { limit: h.RcX }),
                          description: E.NW.formatToPlainString(E.t.T8P3TE, { limit: h.RcX }),
                          icon: 12
                      }
                    : null
            ].filter(f.lm)
        }
    ];
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { useLevels: n = !0 } = t;
    switch (e) {
        case h.Eu4.NONE:
            return n ? E.NW.string(E.t.LcKgJS) : E.NW.string(E.t.mx8j2t);
        case h.Eu4.TIER_1:
            return E.NW.string(E.t.nzXtaW);
        case h.Eu4.TIER_2:
            return E.NW.string(E.t['h33/ub']);
        case h.Eu4.TIER_3:
            return E.NW.string(E.t.BfF6EB);
        default:
            throw Error('Not a valid tier type');
    }
}
function C(e) {
    switch (e) {
        case h.Eu4.NONE:
            return E.NW.string(E.t.LcKgJS);
        case h.Eu4.TIER_1:
            return E.NW.string(E.t.xRjU1d);
        case h.Eu4.TIER_2:
            return E.NW.string(E.t.C7e2Bg);
        case h.Eu4.TIER_3:
            return E.NW.string(E.t.avGxmp);
        default:
            throw Error('Not a valid tier type');
    }
}
let R = i().memoize((e) => (m.HO[h.Eu4.TIER_1].features.includes(e) ? h.Eu4.TIER_1 : m.HO[h.Eu4.TIER_2].features.includes(e) ? h.Eu4.TIER_2 : m.HO[h.Eu4.TIER_3].features.includes(e) ? h.Eu4.TIER_3 : null)),
    P = (e) => (e === h.Eu4.NONE ? h.Qqv.NONE : e === h.Eu4.TIER_1 ? h.Qqv.TIER_1 : e === h.Eu4.TIER_2 ? h.Qqv.TIER_2 : e === h.Eu4.TIER_3 ? h.Qqv.TIER_3 : null);
function D(e, t) {
    for (let n of B(t)) if (e >= n.amount) return n.tier;
    return h.Eu4.NONE;
}
function w(e, t) {
    return null == t || (null != e && e >= t);
}
function L(e, t) {
    return w(e.premiumTier, t);
}
function x(e) {
    return i()
        .values(e)
        .filter((e) => e.isAvailable());
}
function M(e) {
    let { fractionalState: t } = e,
        n = u.ZP.getPremiumTypeSubscription();
    c.Z.hasFetched || (0, s.X8)();
    let r = x(c.Z.boostSlots),
        i = null == n ? void 0 : n.isPausedOrPausePending,
        a = r.length > 0,
        l = E.NW.format(E.t.kJ1AZG, { helpCenterLink: _.Z.getArticleURL(h.BhN.FRACTIONAL_PREMIUM_ABOUT) }),
        d = (0, o.EQ)({
            isPausedOrPausePending: i,
            fractionalState: t,
            canApplyBoosts: a
        })
            .with(
                {
                    isPausedOrPausePending: !0,
                    fractionalState: m.a$.FP_SUB_PAUSED,
                    canApplyBoosts: !1
                },
                () => l
            )
            .with(
                {
                    isPausedOrPausePending: void 0,
                    fractionalState: m.a$.FP_ONLY
                },
                () => l
            )
            .with(
                {
                    isPausedOrPausePending: !1,
                    fractionalState: m.a$.FP_ONLY
                },
                () => l
            )
            .with(
                {
                    isPausedOrPausePending: !0,
                    fractionalState: m.a$.NONE
                },
                () => E.NW.string(E.t.mOWsFx)
            )
            .otherwise(() => null);
    if (null != d) return d;
    let { numAvailableGuildBoostSlots: f, numCanceledGuildBoostSlots: g } = Object.values(c.Z.boostSlots).reduce((e, t) => (K(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e), {
        numAvailableGuildBoostSlots: 0,
        numCanceledGuildBoostSlots: 0
    });
    if (null == n || f > 0) return null;
    if (n.status === h.O0b.PAST_DUE) return E.NW.string(E.t.De4Vm5);
    if (n.status === h.O0b.ACCOUNT_HOLD) return E.NW.string(E.t.JakNQ0);
    if (g > 0) return E.NW.string(E.t.x25mZW);
    if (null == n.renewalMutations) return null;
    let v = p.uV(n.renewalMutations.additionalPlans);
    return p.uV(n.additionalPlans) > v ? E.NW.string(E.t.x25mZW) : E.NW.string(E.t['W/bb8f']);
}
function k(e) {
    return e.sort((e, t) => (null != e.endsAt && null != t.endsAt ? e.endsAt.getTime() - t.endsAt.getTime() : -1));
}
function j(e, t) {
    return U(e, t) > 0;
}
function U(e, t) {
    let n = D(e.length, t),
        r = G(t)[n],
        i = e.filter((e) => null != e.endsAt);
    return r - (e.length - i.length);
}
function G(e) {
    return h.oCV;
}
function B(e) {
    let t = G(e);
    return [
        {
            tier: h.Eu4.TIER_3,
            amount: t[h.Eu4.TIER_3],
            nextTier: null
        },
        {
            tier: h.Eu4.TIER_2,
            amount: t[h.Eu4.TIER_2],
            nextTier: h.Eu4.TIER_3
        },
        {
            tier: h.Eu4.TIER_1,
            amount: t[h.Eu4.TIER_1],
            nextTier: h.Eu4.TIER_2
        }
    ];
}
function V(e, t) {
    let n = U(e, t);
    if (n > 0) {
        let t = k(e).filter((e) => null != e.endsAt);
        return t[t.length - n].endsAt;
    }
    return null;
}
function F(e, t) {
    let n = S(t),
        r = b.indexOf(t);
    if (-1 === r) return 0;
    let i = b[r - 1],
        o = null != i ? O(i) : 0,
        a = O(t);
    return Math.max(0, n - e.slice(o, a).length);
}
function Z(e, t, n) {
    return -1 === b.indexOf(n) ? 0 : Math.max(0, H(e) - t.length);
}
function H(e) {
    let t = (0, l.gV)(e, 'GuildRecord'),
        n = m.XB;
    if (t) {
        var r, i;
        n += null !== (i = null === (r = e.premiumFeatures) || void 0 === r ? void 0 : r.additionalSoundSlots) && void 0 !== i ? i : 0;
    } else n = m.HO[e.premiumTier].limits.soundboardSounds;
    return Math.max(e.hasFeature(h.oNc.MORE_SOUNDBOARD) ? m.w1 : m.XB, n);
}
function W(e) {
    let t = (0, l.gV)(e, 'GuildRecord'),
        n = g.xD;
    if (t) {
        var r, i;
        n += null !== (i = null === (r = e.premiumFeatures) || void 0 === r ? void 0 : r.additionalEmojiSlots) && void 0 !== i ? i : 0;
    } else n = m.HO[e.premiumTier].limits.emoji;
    return Math.max(e.hasFeature(h.oNc.MORE_EMOJI) ? g.IE : g.xD, n);
}
function Y(e, t) {
    let n = e.premiumSubscriberCount;
    return Math.max(0, G(e.id)[t] - n);
}
function K(e) {
    var t;
    return (null === (t = e.subscription) || void 0 === t ? void 0 : t.status) === h.O0b.CANCELED || e.canceled;
}

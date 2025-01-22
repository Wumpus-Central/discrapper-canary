r.d(n, {
    A3: function () {
        return R;
    },
    FZ: function () {
        return N;
    },
    Je: function () {
        return L;
    },
    KK: function () {
        return X;
    },
    Qi: function () {
        return q;
    },
    Ro: function () {
        return i;
    },
    U2: function () {
        return D;
    },
    Vx: function () {
        return H;
    },
    _k: function () {
        return Y;
    },
    _p: function () {
        return M;
    },
    aq: function () {
        return V;
    },
    cP: function () {
        return x;
    },
    e9: function () {
        return P;
    },
    f2: function () {
        return Z;
    },
    gZ: function () {
        return z;
    },
    ge: function () {
        return k;
    },
    ig: function () {
        return O;
    },
    nW: function () {
        return w;
    },
    rF: function () {
        return U;
    },
    tb: function () {
        return G;
    },
    tl: function () {
        return J;
    },
    vn: function () {
        return W;
    },
    vx: function () {
        return F;
    },
    yw: function () {
        return Q;
    }
});
var i,
    a = r(411104);
var o = r(47120);
var s = r(627341);
var l = r(724458);
var u = r(392711),
    c = r.n(u),
    d = r(913527);
var f = r(278074),
    p = r(274136),
    h = r(179360),
    _ = r(314884),
    m = r(78839),
    g = r(424218),
    E = r(823379),
    v = r(63063),
    y = r(74538),
    b = r(981631),
    I = r(474936),
    T = r(388032);
let S = Object.freeze({
        1: 1,
        2: 2,
        3: 3,
        4: 6,
        5: 9,
        6: 12,
        7: 15,
        8: 18,
        9: 24
    }),
    A = 96;
!(function (e) {
    (e[(e.EMOJI = 1)] = 'EMOJI'), (e[(e.AUDIO = 2)] = 'AUDIO'), (e[(e.ANIMATED = 3)] = 'ANIMATED'), (e[(e.CUSTOMIZATION = 4)] = 'CUSTOMIZATION'), (e[(e.UPLOAD = 5)] = 'UPLOAD'), (e[(e.VANITY = 6)] = 'VANITY'), (e[(e.STREAM = 7)] = 'STREAM'), (e[(e.STICKER = 8)] = 'STICKER'), (e[(e.CUSTOM_ROLE_ICON = 11)] = 'CUSTOM_ROLE_ICON'), (e[(e.STAGE_VIDEO = 12)] = 'STAGE_VIDEO'), (e[(e.SOUNDBOARD = 13)] = 'SOUNDBOARD');
})(i || (i = {}));
let C = [b.Eu4.NONE, b.Eu4.TIER_1, b.Eu4.TIER_2, b.Eu4.TIER_3],
    N = (e, n) => {
        var r;
        return e === b.Eu4.NONE ? b.Eu4.TIER_1 : null === (r = K(n).find((n) => n.tier === e)) || void 0 === r ? void 0 : r.nextTier;
    },
    R = (e, n) => (null != n && n.hasFeature(b.oNc.MORE_STICKERS) && e === b.Eu4.TIER_3 ? p.D.MAX_STICKER_SLOTS : I.$8[e]),
    O = (e) => I.pH[e],
    D = (e, n) => (null != n && n.hasFeature(b.oNc.MORE_SOUNDBOARD) ? A : I._k[e]),
    L = (e) => {
        if (e === b.Eu4.NONE) return I._k[e];
        let n = C[C.indexOf(e) - 1];
        return I._k[e] - I._k[n];
    },
    x = (e) => [
        {
            tier: b.Eu4.TIER_1,
            title: T.intl.string(T.t['lK+WOT']),
            perks: [
                {
                    title: T.intl.formatToPlainString(T.t.dnLAws, {
                        adding: I.HO[b.Eu4.TIER_1].limits.emoji - I.HO[b.Eu4.NONE].limits.emoji,
                        total: I.HO[b.Eu4.TIER_1].limits.emoji
                    }),
                    description: T.intl.string(T.t['/Guvxs']),
                    icon: 1
                },
                {
                    title: T.intl.formatToPlainString(T.t['/9p2/v'], {
                        adding: O(b.Eu4.TIER_1),
                        total: R(b.Eu4.TIER_1)
                    }),
                    description: T.intl.string(T.t.JfsnDQ),
                    icon: 8
                },
                {
                    title: T.intl.formatToPlainString(T.t.NRuk5u, {
                        soundCount: L(b.Eu4.TIER_1),
                        totalSoundCount: D(b.Eu4.TIER_1)
                    }),
                    description: T.intl.string(T.t.Oq7OVl),
                    icon: 13
                },
                {
                    title: T.intl.formatToPlainString(T.t.zoT1ZG, { bitrate: I.HO[b.Eu4.TIER_1].limits.bitrate / 1000 }),
                    description: T.intl.string(T.t['8a03jo']),
                    icon: 2
                },
                {
                    title: T.intl.string(T.t.h0s84e),
                    description: T.intl.format(T.t['t+0cbm'], {}),
                    icon: 3
                },
                {
                    title: T.intl.string(T.t.vjPGPj),
                    description: T.intl.string(T.t.tG4MMT),
                    icon: 4
                },
                {
                    title: T.intl.string(T.t.cObMZG),
                    description: T.intl.string(T.t['puH/9f']),
                    icon: 7
                }
            ].filter(E.lm)
        },
        {
            tier: b.Eu4.TIER_2,
            title: T.intl.string(T.t['34GpBQ']),
            perks: [
                {
                    title: T.intl.formatToPlainString(T.t.dnLAws, {
                        adding: I.HO[b.Eu4.TIER_2].limits.emoji - I.HO[b.Eu4.TIER_1].limits.emoji,
                        total: I.HO[b.Eu4.TIER_2].limits.emoji
                    }),
                    description: T.intl.string(T.t.fRiNh4),
                    icon: 1
                },
                {
                    title: T.intl.formatToPlainString(T.t['/9p2/v'], {
                        adding: O(b.Eu4.TIER_2),
                        total: R(b.Eu4.TIER_2)
                    }),
                    description: T.intl.string(T.t.t4TM29),
                    icon: 8
                },
                {
                    title: T.intl.formatToPlainString(T.t.NRuk5u, {
                        soundCount: L(b.Eu4.TIER_2),
                        totalSoundCount: D(b.Eu4.TIER_2)
                    }),
                    description: T.intl.string(T.t.pEYlPT),
                    icon: 13
                },
                {
                    title: T.intl.formatToPlainString(T.t.zoT1ZG, { bitrate: I.HO[b.Eu4.TIER_2].limits.bitrate / 1000 }),
                    description: T.intl.string(T.t['nzRo/P']),
                    icon: 2
                },
                {
                    title: T.intl.string(T.t['+KhQKC']),
                    description: T.intl.string(T.t.ZWf10N),
                    icon: 4
                },
                {
                    title: T.intl.formatToPlainString(T.t.t95LnJ, { fileSize: (0, g.BU)(I.HO[b.Eu4.TIER_2].limits.fileSize / 1024, { useKibibytes: !0 }) }),
                    description: T.intl.format(T.t['yvht6+'], {}),
                    icon: 5
                },
                {
                    title: T.intl.string(T.t.bmaoND),
                    description: T.intl.string(T.t.WZW2Bg),
                    icon: 7
                },
                {
                    title: T.intl.string(T.t.BHtqcX),
                    description: T.intl.string(T.t.ukVcER),
                    icon: 11
                },
                e
                    ? {
                          title: T.intl.formatToPlainString(T.t.T8P3TE, { limit: b.eez }),
                          description: T.intl.formatToPlainString(T.t.T8P3TE, { limit: b.eez }),
                          icon: 12
                      }
                    : null
            ].filter(E.lm)
        },
        {
            tier: b.Eu4.TIER_3,
            title: T.intl.string(T.t.P7LdcX),
            perks: [
                {
                    title: T.intl.formatToPlainString(T.t.dnLAws, {
                        adding: I.HO[b.Eu4.TIER_3].limits.emoji - I.HO[b.Eu4.TIER_2].limits.emoji,
                        total: I.HO[b.Eu4.TIER_3].limits.emoji
                    }),
                    description: T.intl.string(T.t.AfJxnZ),
                    icon: 1
                },
                {
                    title: T.intl.formatToPlainString(T.t['/9p2/v'], {
                        adding: O(b.Eu4.TIER_3),
                        total: R(b.Eu4.TIER_3)
                    }),
                    description: T.intl.string(T.t['+ZI4QU']),
                    icon: 8
                },
                {
                    title: T.intl.formatToPlainString(T.t.NRuk5u, {
                        soundCount: L(b.Eu4.TIER_3),
                        totalSoundCount: D(b.Eu4.TIER_3)
                    }),
                    description: T.intl.string(T.t['8omJSU']),
                    icon: 13
                },
                {
                    title: T.intl.formatToPlainString(T.t.zoT1ZG, { bitrate: I.HO[b.Eu4.TIER_3].limits.bitrate / 1000 }),
                    description: T.intl.string(T.t.cOkbp6),
                    icon: 2
                },
                {
                    title: T.intl.string(T.t.C2w2cH),
                    description: T.intl.format(T.t['3Reos7'], { helpdeskArticle: v.Z.getArticleURL(b.BhN.GUILD_VANITY_URL) }),
                    icon: 6
                },
                {
                    title: T.intl.formatToPlainString(T.t.t95LnJ, { fileSize: (0, g.BU)(I.HO[b.Eu4.TIER_3].limits.fileSize / 1024, { useKibibytes: !0 }) }),
                    description: T.intl.format(T.t.IwDqSE, {}),
                    icon: 5
                },
                {
                    title: T.intl.string(T.t.z0GtBA),
                    description: T.intl.string(T.t.v92GNT),
                    icon: 3
                },
                e
                    ? {
                          title: T.intl.formatToPlainString(T.t.T8P3TE, { limit: b.RcX }),
                          description: T.intl.formatToPlainString(T.t.T8P3TE, { limit: b.RcX }),
                          icon: 12
                      }
                    : null
            ].filter(E.lm)
        }
    ];
function w(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { useLevels: r = !0 } = n;
    switch (e) {
        case b.Eu4.NONE:
            return r ? T.intl.string(T.t.LcKgJS) : T.intl.string(T.t.mx8j2t);
        case b.Eu4.TIER_1:
            return T.intl.string(T.t.nzXtaW);
        case b.Eu4.TIER_2:
            return T.intl.string(T.t['h33/ub']);
        case b.Eu4.TIER_3:
            return T.intl.string(T.t.BfF6EB);
        default:
            throw Error('Not a valid tier type');
    }
}
function P(e) {
    switch (e) {
        case b.Eu4.NONE:
            return T.intl.string(T.t.LcKgJS);
        case b.Eu4.TIER_1:
            return T.intl.string(T.t.xRjU1d);
        case b.Eu4.TIER_2:
            return T.intl.string(T.t.C7e2Bg);
        case b.Eu4.TIER_3:
            return T.intl.string(T.t.avGxmp);
        default:
            throw Error('Not a valid tier type');
    }
}
let M = c().memoize((e) => (I.HO[b.Eu4.TIER_1].features.includes(e) ? b.Eu4.TIER_1 : I.HO[b.Eu4.TIER_2].features.includes(e) ? b.Eu4.TIER_2 : I.HO[b.Eu4.TIER_3].features.includes(e) ? b.Eu4.TIER_3 : null)),
    k = (e) => {
        if (e === b.Eu4.NONE) return b.Qqv.NONE;
        if (e === b.Eu4.TIER_1) return b.Qqv.TIER_1;
        if (e === b.Eu4.TIER_2) return b.Qqv.TIER_2;
        else if (e === b.Eu4.TIER_3) return b.Qqv.TIER_3;
        return null;
    };
function U(e, n) {
    for (let r of K(n)) if (e >= r.amount) return r.tier;
    return b.Eu4.NONE;
}
function B(e, n) {
    for (let r of K(n)) if (e >= r.amount) return r.nextTier;
    return BoostedGuildTiers.TIER_1;
}
function G(e, n) {
    return null == n || (null != e && e >= n);
}
function Z(e, n) {
    return G(e.premiumTier, n);
}
function F(e) {
    return c()
        .values(e)
        .filter((e) => e.isAvailable());
}
function V(e) {
    let { fractionalState: n } = e,
        r = m.ZP.getPremiumTypeSubscription();
    !_.Z.hasFetched && (0, h.X8)();
    let i = F(_.Z.boostSlots),
        a = null == r ? void 0 : r.isPausedOrPausePending,
        o = i.length > 0,
        s = T.intl.format(T.t.kJ1AZG, { helpCenterLink: v.Z.getArticleURL(b.BhN.FRACTIONAL_PREMIUM_ABOUT) }),
        l = (0, f.EQ)({
            isPausedOrPausePending: a,
            fractionalState: n,
            canApplyBoosts: o
        })
            .with(
                {
                    isPausedOrPausePending: !0,
                    fractionalState: I.a$.FP_SUB_PAUSED,
                    canApplyBoosts: !1
                },
                () => s
            )
            .with(
                {
                    isPausedOrPausePending: void 0,
                    fractionalState: I.a$.FP_ONLY
                },
                () => s
            )
            .with(
                {
                    isPausedOrPausePending: !1,
                    fractionalState: I.a$.FP_ONLY
                },
                () => s
            )
            .with(
                {
                    isPausedOrPausePending: !0,
                    fractionalState: I.a$.NONE
                },
                () => T.intl.string(T.t.mOWsFx)
            )
            .otherwise(() => null);
    if (null != l) return l;
    let { numAvailableGuildBoostSlots: u, numCanceledGuildBoostSlots: c } = Object.values(_.Z.boostSlots).reduce((e, n) => (J(n) && e.numCanceledGuildBoostSlots++, n.isAvailable() && e.numAvailableGuildBoostSlots++, e), {
        numAvailableGuildBoostSlots: 0,
        numCanceledGuildBoostSlots: 0
    });
    if (null == r || u > 0) return null;
    if (r.status === b.O0b.PAST_DUE) return T.intl.string(T.t.De4Vm5);
    if (r.status === b.O0b.ACCOUNT_HOLD) return T.intl.string(T.t.JakNQ0);
    if (c > 0) return T.intl.string(T.t.x25mZW);
    if (null == r.renewalMutations) return null;
    let d = y.uV(r.renewalMutations.additionalPlans);
    return y.uV(r.additionalPlans) > d ? T.intl.string(T.t.x25mZW) : T.intl.string(T.t['W/bb8f']);
}
function j(e) {
    return e.sort((e, n) => (null != e.endsAt && null != n.endsAt ? e.endsAt.getTime() - n.endsAt.getTime() : -1));
}
function H(e, n) {
    return Y(e, n) > 0;
}
function Y(e, n) {
    let r = U(e.length, n),
        i = W(n)[r],
        a = e.filter((e) => null != e.endsAt);
    return i - (e.length - a.length);
}
function W(e) {
    return b.oCV;
}
function K(e) {
    let n = W(e);
    return [
        {
            tier: b.Eu4.TIER_3,
            amount: n[b.Eu4.TIER_3],
            nextTier: null
        },
        {
            tier: b.Eu4.TIER_2,
            amount: n[b.Eu4.TIER_2],
            nextTier: b.Eu4.TIER_3
        },
        {
            tier: b.Eu4.TIER_1,
            amount: n[b.Eu4.TIER_1],
            nextTier: b.Eu4.TIER_2
        }
    ];
}
function z(e, n) {
    let r = Y(e, n);
    if (r > 0) {
        let n = j(e).filter((e) => null != e.endsAt);
        return n[n.length - r].endsAt;
    }
    return null;
}
function q(e, n) {
    let r = O(n),
        i = C.indexOf(n);
    if (-1 === i) return 0;
    let a = C[i - 1],
        o = null != a ? R(a) : 0,
        s = R(n);
    return Math.max(0, r - e.slice(o, s).length);
}
function Q(e, n, r) {
    return -1 === C.indexOf(r) ? 0 : Math.max(0, D(r, e) - n.length);
}
function X(e, n) {
    let r = e.premiumSubscriberCount;
    return Math.max(0, W(e.id)[n] - r);
}
function J(e) {
    var n;
    return (null === (n = e.subscription) || void 0 === n ? void 0 : n.status) === b.O0b.CANCELED || e.canceled;
}

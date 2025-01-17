r.d(n, {
    A3: function () {
        return R;
    },
    FZ: function () {
        return C;
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
var s = r(47120);
var o = r(627341);
var l = r(724458);
var u = r(392711),
    c = r.n(u),
    d = r(913527);
var f = r(278074),
    _ = r(274136),
    h = r(179360),
    p = r(314884),
    m = r(78839),
    g = r(424218),
    E = r(823379),
    v = r(63063),
    I = r(74538),
    T = r(981631),
    b = r(474936),
    y = r(388032);
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
let N = [T.Eu4.NONE, T.Eu4.TIER_1, T.Eu4.TIER_2, T.Eu4.TIER_3],
    C = (e, n) => {
        var r;
        return e === T.Eu4.NONE ? T.Eu4.TIER_1 : null === (r = K(n).find((n) => n.tier === e)) || void 0 === r ? void 0 : r.nextTier;
    },
    R = (e, n) => (null != n && n.hasFeature(T.oNc.MORE_STICKERS) && e === T.Eu4.TIER_3 ? _.D.MAX_STICKER_SLOTS : b.$8[e]),
    O = (e) => b.pH[e],
    D = (e, n) => (null != n && n.hasFeature(T.oNc.MORE_SOUNDBOARD) ? A : b._k[e]),
    L = (e) => {
        if (e === T.Eu4.NONE) return b._k[e];
        let n = N[N.indexOf(e) - 1];
        return b._k[e] - b._k[n];
    },
    x = (e) => [
        {
            tier: T.Eu4.TIER_1,
            title: y.intl.string(y.t['lK+WOT']),
            perks: [
                {
                    title: y.intl.formatToPlainString(y.t.dnLAws, {
                        adding: b.HO[T.Eu4.TIER_1].limits.emoji - b.HO[T.Eu4.NONE].limits.emoji,
                        total: b.HO[T.Eu4.TIER_1].limits.emoji
                    }),
                    description: y.intl.string(y.t['/Guvxs']),
                    icon: 1
                },
                {
                    title: y.intl.formatToPlainString(y.t['/9p2/v'], {
                        adding: O(T.Eu4.TIER_1),
                        total: R(T.Eu4.TIER_1)
                    }),
                    description: y.intl.string(y.t.JfsnDQ),
                    icon: 8
                },
                {
                    title: y.intl.formatToPlainString(y.t.NRuk5u, {
                        soundCount: L(T.Eu4.TIER_1),
                        totalSoundCount: D(T.Eu4.TIER_1)
                    }),
                    description: y.intl.string(y.t.Oq7OVl),
                    icon: 13
                },
                {
                    title: y.intl.formatToPlainString(y.t.zoT1ZG, { bitrate: b.HO[T.Eu4.TIER_1].limits.bitrate / 1000 }),
                    description: y.intl.string(y.t['8a03jo']),
                    icon: 2
                },
                {
                    title: y.intl.string(y.t.h0s84e),
                    description: y.intl.format(y.t['t+0cbm'], {}),
                    icon: 3
                },
                {
                    title: y.intl.string(y.t.vjPGPj),
                    description: y.intl.string(y.t.tG4MMT),
                    icon: 4
                },
                {
                    title: y.intl.string(y.t.cObMZG),
                    description: y.intl.string(y.t['puH/9f']),
                    icon: 7
                }
            ].filter(E.lm)
        },
        {
            tier: T.Eu4.TIER_2,
            title: y.intl.string(y.t['34GpBQ']),
            perks: [
                {
                    title: y.intl.formatToPlainString(y.t.dnLAws, {
                        adding: b.HO[T.Eu4.TIER_2].limits.emoji - b.HO[T.Eu4.TIER_1].limits.emoji,
                        total: b.HO[T.Eu4.TIER_2].limits.emoji
                    }),
                    description: y.intl.string(y.t.fRiNh4),
                    icon: 1
                },
                {
                    title: y.intl.formatToPlainString(y.t['/9p2/v'], {
                        adding: O(T.Eu4.TIER_2),
                        total: R(T.Eu4.TIER_2)
                    }),
                    description: y.intl.string(y.t.t4TM29),
                    icon: 8
                },
                {
                    title: y.intl.formatToPlainString(y.t.NRuk5u, {
                        soundCount: L(T.Eu4.TIER_2),
                        totalSoundCount: D(T.Eu4.TIER_2)
                    }),
                    description: y.intl.string(y.t.pEYlPT),
                    icon: 13
                },
                {
                    title: y.intl.formatToPlainString(y.t.zoT1ZG, { bitrate: b.HO[T.Eu4.TIER_2].limits.bitrate / 1000 }),
                    description: y.intl.string(y.t['nzRo/P']),
                    icon: 2
                },
                {
                    title: y.intl.string(y.t['+KhQKC']),
                    description: y.intl.string(y.t.ZWf10N),
                    icon: 4
                },
                {
                    title: y.intl.formatToPlainString(y.t.t95LnJ, { fileSize: (0, g.BU)(b.HO[T.Eu4.TIER_2].limits.fileSize / 1024, { useKibibytes: !0 }) }),
                    description: y.intl.format(y.t['yvht6+'], {}),
                    icon: 5
                },
                {
                    title: y.intl.string(y.t.bmaoND),
                    description: y.intl.string(y.t.WZW2Bg),
                    icon: 7
                },
                {
                    title: y.intl.string(y.t.BHtqcX),
                    description: y.intl.string(y.t.ukVcER),
                    icon: 11
                },
                e
                    ? {
                          title: y.intl.formatToPlainString(y.t.T8P3TE, { limit: T.eez }),
                          description: y.intl.formatToPlainString(y.t.T8P3TE, { limit: T.eez }),
                          icon: 12
                      }
                    : null
            ].filter(E.lm)
        },
        {
            tier: T.Eu4.TIER_3,
            title: y.intl.string(y.t.P7LdcX),
            perks: [
                {
                    title: y.intl.formatToPlainString(y.t.dnLAws, {
                        adding: b.HO[T.Eu4.TIER_3].limits.emoji - b.HO[T.Eu4.TIER_2].limits.emoji,
                        total: b.HO[T.Eu4.TIER_3].limits.emoji
                    }),
                    description: y.intl.string(y.t.AfJxnZ),
                    icon: 1
                },
                {
                    title: y.intl.formatToPlainString(y.t['/9p2/v'], {
                        adding: O(T.Eu4.TIER_3),
                        total: R(T.Eu4.TIER_3)
                    }),
                    description: y.intl.string(y.t['+ZI4QU']),
                    icon: 8
                },
                {
                    title: y.intl.formatToPlainString(y.t.NRuk5u, {
                        soundCount: L(T.Eu4.TIER_3),
                        totalSoundCount: D(T.Eu4.TIER_3)
                    }),
                    description: y.intl.string(y.t['8omJSU']),
                    icon: 13
                },
                {
                    title: y.intl.formatToPlainString(y.t.zoT1ZG, { bitrate: b.HO[T.Eu4.TIER_3].limits.bitrate / 1000 }),
                    description: y.intl.string(y.t.cOkbp6),
                    icon: 2
                },
                {
                    title: y.intl.string(y.t.C2w2cH),
                    description: y.intl.format(y.t['3Reos7'], { helpdeskArticle: v.Z.getArticleURL(T.BhN.GUILD_VANITY_URL) }),
                    icon: 6
                },
                {
                    title: y.intl.formatToPlainString(y.t.t95LnJ, { fileSize: (0, g.BU)(b.HO[T.Eu4.TIER_3].limits.fileSize / 1024, { useKibibytes: !0 }) }),
                    description: y.intl.format(y.t.IwDqSE, {}),
                    icon: 5
                },
                {
                    title: y.intl.string(y.t.z0GtBA),
                    description: y.intl.string(y.t.v92GNT),
                    icon: 3
                },
                e
                    ? {
                          title: y.intl.formatToPlainString(y.t.T8P3TE, { limit: T.RcX }),
                          description: y.intl.formatToPlainString(y.t.T8P3TE, { limit: T.RcX }),
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
        case T.Eu4.NONE:
            return r ? y.intl.string(y.t.LcKgJS) : y.intl.string(y.t.mx8j2t);
        case T.Eu4.TIER_1:
            return y.intl.string(y.t.nzXtaW);
        case T.Eu4.TIER_2:
            return y.intl.string(y.t['h33/ub']);
        case T.Eu4.TIER_3:
            return y.intl.string(y.t.BfF6EB);
        default:
            throw Error('Not a valid tier type');
    }
}
function P(e) {
    switch (e) {
        case T.Eu4.NONE:
            return y.intl.string(y.t.LcKgJS);
        case T.Eu4.TIER_1:
            return y.intl.string(y.t.xRjU1d);
        case T.Eu4.TIER_2:
            return y.intl.string(y.t.C7e2Bg);
        case T.Eu4.TIER_3:
            return y.intl.string(y.t.avGxmp);
        default:
            throw Error('Not a valid tier type');
    }
}
let M = c().memoize((e) => (b.HO[T.Eu4.TIER_1].features.includes(e) ? T.Eu4.TIER_1 : b.HO[T.Eu4.TIER_2].features.includes(e) ? T.Eu4.TIER_2 : b.HO[T.Eu4.TIER_3].features.includes(e) ? T.Eu4.TIER_3 : null)),
    k = (e) => {
        if (e === T.Eu4.NONE) return T.Qqv.NONE;
        if (e === T.Eu4.TIER_1) return T.Qqv.TIER_1;
        if (e === T.Eu4.TIER_2) return T.Qqv.TIER_2;
        else if (e === T.Eu4.TIER_3) return T.Qqv.TIER_3;
        return null;
    };
function U(e, n) {
    for (let r of K(n)) if (e >= r.amount) return r.tier;
    return T.Eu4.NONE;
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
    !p.Z.hasFetched && (0, h.X8)();
    let i = F(p.Z.boostSlots),
        a = null == r ? void 0 : r.isPausedOrPausePending,
        s = i.length > 0,
        o = y.intl.format(y.t.kJ1AZG, { helpCenterLink: v.Z.getArticleURL(T.BhN.FRACTIONAL_PREMIUM_ABOUT) }),
        l = (0, f.EQ)({
            isPausedOrPausePending: a,
            fractionalState: n,
            canApplyBoosts: s
        })
            .with(
                {
                    isPausedOrPausePending: !0,
                    fractionalState: b.a$.FP_SUB_PAUSED,
                    canApplyBoosts: !1
                },
                () => o
            )
            .with(
                {
                    isPausedOrPausePending: void 0,
                    fractionalState: b.a$.FP_ONLY
                },
                () => o
            )
            .with(
                {
                    isPausedOrPausePending: !1,
                    fractionalState: b.a$.FP_ONLY
                },
                () => o
            )
            .with(
                {
                    isPausedOrPausePending: !0,
                    fractionalState: b.a$.NONE
                },
                () => y.intl.string(y.t.mOWsFx)
            )
            .otherwise(() => null);
    if (null != l) return l;
    let { numAvailableGuildBoostSlots: u, numCanceledGuildBoostSlots: c } = Object.values(p.Z.boostSlots).reduce((e, n) => (J(n) && e.numCanceledGuildBoostSlots++, n.isAvailable() && e.numAvailableGuildBoostSlots++, e), {
        numAvailableGuildBoostSlots: 0,
        numCanceledGuildBoostSlots: 0
    });
    if (null == r || u > 0) return null;
    if (r.status === T.O0b.PAST_DUE) return y.intl.string(y.t.De4Vm5);
    if (r.status === T.O0b.ACCOUNT_HOLD) return y.intl.string(y.t.JakNQ0);
    if (c > 0) return y.intl.string(y.t.x25mZW);
    if (null == r.renewalMutations) return null;
    let d = I.uV(r.renewalMutations.additionalPlans);
    return I.uV(r.additionalPlans) > d ? y.intl.string(y.t.x25mZW) : y.intl.string(y.t['W/bb8f']);
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
    return T.oCV;
}
function K(e) {
    let n = W(e);
    return [
        {
            tier: T.Eu4.TIER_3,
            amount: n[T.Eu4.TIER_3],
            nextTier: null
        },
        {
            tier: T.Eu4.TIER_2,
            amount: n[T.Eu4.TIER_2],
            nextTier: T.Eu4.TIER_3
        },
        {
            tier: T.Eu4.TIER_1,
            amount: n[T.Eu4.TIER_1],
            nextTier: T.Eu4.TIER_2
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
        i = N.indexOf(n);
    if (-1 === i) return 0;
    let a = N[i - 1],
        s = null != a ? R(a) : 0,
        o = R(n);
    return Math.max(0, r - e.slice(s, o).length);
}
function Q(e, n, r) {
    return -1 === N.indexOf(r) ? 0 : Math.max(0, D(r, e) - n.length);
}
function X(e, n) {
    let r = e.premiumSubscriberCount;
    return Math.max(0, W(e.id)[n] - r);
}
function J(e) {
    var n;
    return (null === (n = e.subscription) || void 0 === n ? void 0 : n.status) === T.O0b.CANCELED || e.canceled;
}

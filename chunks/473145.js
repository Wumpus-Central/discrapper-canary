n.d(t, {
    $U: () => W,
    Cp: () => I,
    D$: () => x,
    I5: () => F,
    Nc: () => L,
    Os: () => V,
    P7: () => P,
    Qu: () => N,
    Ry: () => T,
    TP: () => y,
    Ys: () => R,
    aG: () => S,
    ax: () => v,
    fA: () => U,
    fi: () => A,
    gb: () => C,
    k1: () => w,
    kN: () => B,
    sN: () => G,
    tO: () => k,
    yA: () => M,
    yS: () => D,
}),
    n(264879),
    n(65821),
    n(896048),
    n(638769);
var r = n(735438),
    i = n.n(r);
n(989349);
var a = n(336934),
    s = n(923408),
    o = n(864310),
    l = n(434564),
    c = n(71393),
    u = n(287809),
    d = n(178368),
    f = n(166403);
n(255438), n(403362), n(975571);
var p = n(927578);
n(728458);
var _ = n(652215),
    h = n(307731),
    m = n(788868),
    g = n(88001),
    E = n(985018),
    b = n(519412);
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
var y = (function (e) {
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
let O = [_.TVA.NONE, _.TVA.TIER_1, _.TVA.TIER_2, _.TVA.TIER_3],
    A = O.slice().reverse(),
    v = (e) => {
        var t;
        return e === _.TVA.NONE ? _.TVA.TIER_1 : null == (t = j.find((t) => t.tier === e)) ? void 0 : t.nextTier;
    },
    S = (e, t) =>
        null != t && t.features.has(_.GuildFeatures.MORE_STICKERS) && e === _.TVA.TIER_3
            ? a.K.MAX_STICKER_SLOTS
            : m.d8[e],
    I = (e) => m.nk[e],
    T = (e) => {
        if (e === _.TVA.NONE) return m.y7[e];
        let t = O[O.indexOf(e) - 1];
        return m.y7[e] - m.y7[t];
    };

function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { useLevels: n = !0 } = t;
    switch (e) {
        case _.TVA.NONE:
            return n ? E.intl.string(E.t.LcKgJd) : E.intl.string(E.t.mx8j2m);
        case _.TVA.TIER_1:
            return E.intl.string(E.t.nzXtaS);
        case _.TVA.TIER_2:
            return E.intl.string(E.t["h33/uW"]);
        case _.TVA.TIER_3:
            return E.intl.string(E.t.BfF6ED);
        default:
            throw Error("Not a valid tier type");
    }
}

function N(e) {
    switch (e) {
        case _.TVA.NONE:
            return E.intl.string(E.t.LcKgJd);
        case _.TVA.TIER_1:
            return E.intl.string(E.t.xRjU1V);
        case _.TVA.TIER_2:
            return E.intl.string(E.t.C7e2Bo);
        case _.TVA.TIER_3:
            return E.intl.string(E.t.avGxmk);
        default:
            throw Error("Not a valid tier type");
    }
}
let R = i().memoize((e) =>
        m.TG[_.TVA.TIER_1].features.includes(e)
            ? _.TVA.TIER_1
            : m.TG[_.TVA.TIER_2].features.includes(e)
              ? _.TVA.TIER_2
              : m.TG[_.TVA.TIER_3].features.includes(e)
                ? _.TVA.TIER_3
                : null,
    ),
    w = (e) =>
        e === _.TVA.NONE
            ? _.AnalyticsObjectTypes.NONE
            : e === _.TVA.TIER_1
              ? _.AnalyticsObjectTypes.TIER_1
              : e === _.TVA.TIER_2
                ? _.AnalyticsObjectTypes.TIER_2
                : e === _.TVA.TIER_3
                  ? _.AnalyticsObjectTypes.TIER_3
                  : null;

function P(e) {
    var t;
    let n = null == (t = c.A.getGuild(e)) ? void 0 : t.premiumTier;
    return null != n ? n : _.TVA.NONE;
}

function D(e, t) {
    return null == t || (null != e && e >= t);
}

function x(e) {
    return i()
        .values(e)
        .filter((e) => e.isAvailable());
}

function L(e) {
    let { fractionalState: t } = e,
        n = f.A.getPremiumTypeSubscription(),
        r = u.default.getCurrentUser();
    d.A.hasFetched || d.A.isFetching || (0, s.CD)();
    let i = x(d.A.boostSlots),
        a = null == n ? void 0 : n.isPausedOrPausePending,
        o = i.length > 0;
    if (a && t === m.xc.NONE && !o) return E.intl.string(E.t.mOWsF1);
    if (null == r ? void 0 : r.isPremiumGroupMember())
        return E.intl.formatToPlainString(b.default["5xN/C1"], {
            premiumGroupProductName: (0, g.DP)(),
        });
    let { numAvailableGuildBoostSlots: l, numCanceledGuildBoostSlots: c } = Object.values(d.A.boostSlots).reduce(
        (e, t) => (F(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e),
        {
            numAvailableGuildBoostSlots: 0,
            numCanceledGuildBoostSlots: 0,
        },
    );
    if (null == n || l > 0) return null;
    if (n.status === _.Dmq.PAST_DUE) return E.intl.string(E.t.De4Vm6);
    if (n.status === _.Dmq.ACCOUNT_HOLD) return E.intl.string(E.t.JakNQ8);
    if (c > 0) return E.intl.string(E.t.x25mZR);
    if (null == n.renewalMutations) return null;
    let h = p.bx(n.renewalMutations.additionalPlans);
    return p.bx(n.additionalPlans) > h ? E.intl.string(E.t.x25mZR) : E.intl.string(E.t["W/bb8f"]);
}
let j = [
    {
        tier: _.TVA.TIER_3,
        amount: _.M2T[_.TVA.TIER_3],
        nextTier: null,
    },
    {
        tier: _.TVA.TIER_2,
        amount: _.M2T[_.TVA.TIER_2],
        nextTier: _.TVA.TIER_3,
    },
    {
        tier: _.TVA.TIER_1,
        amount: _.M2T[_.TVA.TIER_1],
        nextTier: _.TVA.TIER_2,
    },
];

function M(e, t) {
    let n = I(t),
        r = O.indexOf(t);
    if (-1 === r) return 0;
    let i = O[r - 1],
        a = null != i ? S(i) : 0,
        s = S(t);
    return Math.max(0, n - e.slice(a, s).length);
}

function k(e, t, n) {
    return -1 === O.indexOf(n) ? 0 : Math.max(0, U(e) - t.length);
}

function U(e) {
    var t, n;
    let r = m.OW + (null != (t = null == (n = e.premiumFeatures) ? void 0 : n.additionalSoundSlots) ? t : 0);
    return Math.max(e.features.has(_.GuildFeatures.MORE_SOUNDBOARD) ? m.xs : m.OW, r);
}

function G(e) {
    var t, n;
    let r = h.Xn + (null != (t = null == (n = e.premiumFeatures) ? void 0 : n.additionalEmojiSlots) ? t : 0);
    return Math.max(e.features.has(_.GuildFeatures.MORE_EMOJI) ? h.EQ : h.Xn, r);
}

function V(e, t) {
    let n = (0, o.Z)(e.id).available;
    return Math.max(0, _.M2T[t] - n);
}

function F(e) {
    var t;
    return (null == (t = e.subscription) ? void 0 : t.status) === _.Dmq.CANCELED || e.canceled;
}

function B(e) {
    var t;
    return null != (t = A.find((t) => e >= _.M2T[t])) ? t : _.TVA.NONE;
}

function H(e) {
    var t;
    return null != (t = O.find((t) => e < _.M2T[t])) ? t : _.TVA.TIER_3;
}
let Y = {
    [_.TVA.NONE]: 0,
    [_.TVA.TIER_1]: 1 / 3,
    [_.TVA.TIER_2]: 2 / 3,
    [_.TVA.TIER_3]: 1,
};

function W(e) {
    let t = (0, l.G)(e.id),
        n = B(t),
        r = H(t),
        i = _.M2T[n],
        a = (t - i) / (_.M2T[r] - i),
        s = Y[n],
        o = Y[r];
    return {
        fillFactor: n === _.TVA.TIER_3 ? 1 : a * (o - s) + s,
        totalAvailableBoostsCount: t,
    };
}

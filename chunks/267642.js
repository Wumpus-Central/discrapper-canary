n.d(t, {
    A3: () => I,
    FZ: () => S,
    Hl: () => Y,
    Je: () => C,
    Jh: () => w,
    KK: () => Z,
    Oe: () => v,
    Qi: () => M,
    Ro: () => y,
    _p: () => P,
    aq: () => L,
    e9: () => N,
    ee: () => B,
    ge: () => R,
    ig: () => T,
    nL: () => U,
    nW: () => A,
    tb: () => D,
    tl: () => F,
    vx: () => x,
    y4: () => G,
    yw: () => k,
}),
    n(583741),
    n(415506),
    n(388685),
    n(642613);
var r = n(392711),
    i = n.n(r);
n(913527);
var a = n(274136),
    o = n(179360),
    s = n(317169),
    l = n(151494),
    c = n(430824),
    u = n(594174),
    d = n(314884),
    f = n(78839);
n(424218), n(823379), n(63063);
var p = n(74538);
n(960048);
var _ = n(981631),
    m = n(185923),
    h = n(474936),
    g = n(282793),
    E = n(388032),
    b = n(353149);
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
let O = [_.Eu4.NONE, _.Eu4.TIER_1, _.Eu4.TIER_2, _.Eu4.TIER_3],
    v = O.slice().reverse(),
    S = (e) => {
        var t;
        return e === _.Eu4.NONE ? _.Eu4.TIER_1 : null == (t = j.find((t) => t.tier === e)) ? void 0 : t.nextTier;
    },
    I = (e, t) =>
        null != t && t.features.has(_.GuildFeatures.MORE_STICKERS) && e === _.Eu4.TIER_3
            ? a.D.MAX_STICKER_SLOTS
            : h.$8[e],
    T = (e) => h.pH[e],
    C = (e) => {
        if (e === _.Eu4.NONE) return h._k[e];
        let t = O[O.indexOf(e) - 1];
        return h._k[e] - h._k[t];
    };
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { useLevels: n = !0 } = t;
    switch (e) {
        case _.Eu4.NONE:
            return n ? E.intl.string(E.t.LcKgJd) : E.intl.string(E.t.mx8j2m);
        case _.Eu4.TIER_1:
            return E.intl.string(E.t.nzXtaS);
        case _.Eu4.TIER_2:
            return E.intl.string(E.t["h33/uW"]);
        case _.Eu4.TIER_3:
            return E.intl.string(E.t.BfF6ED);
        default:
            throw Error("Not a valid tier type");
    }
}
function N(e) {
    switch (e) {
        case _.Eu4.NONE:
            return E.intl.string(E.t.LcKgJd);
        case _.Eu4.TIER_1:
            return E.intl.string(E.t.xRjU1V);
        case _.Eu4.TIER_2:
            return E.intl.string(E.t.C7e2Bo);
        case _.Eu4.TIER_3:
            return E.intl.string(E.t.avGxmk);
        default:
            throw Error("Not a valid tier type");
    }
}
let P = i().memoize((e) =>
        h.HO[_.Eu4.TIER_1].features.includes(e)
            ? _.Eu4.TIER_1
            : h.HO[_.Eu4.TIER_2].features.includes(e)
              ? _.Eu4.TIER_2
              : h.HO[_.Eu4.TIER_3].features.includes(e)
                ? _.Eu4.TIER_3
                : null,
    ),
    R = (e) =>
        e === _.Eu4.NONE
            ? _.AnalyticsObjectTypes.NONE
            : e === _.Eu4.TIER_1
              ? _.AnalyticsObjectTypes.TIER_1
              : e === _.Eu4.TIER_2
                ? _.AnalyticsObjectTypes.TIER_2
                : e === _.Eu4.TIER_3
                  ? _.AnalyticsObjectTypes.TIER_3
                  : null;
function w(e) {
    var t;
    let n = null == (t = c.Z.getGuild(e)) ? void 0 : t.premiumTier;
    return null != n ? n : _.Eu4.NONE;
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
        n = f.Z.getPremiumTypeSubscription(),
        r = u.default.getCurrentUser();
    d.Z.hasFetched || d.Z.isFetching || (0, o.X8)();
    let i = x(d.Z.boostSlots),
        a = null == n ? void 0 : n.isPausedOrPausePending,
        s = i.length > 0;
    if (a && t === h.a$.NONE && !s) return E.intl.string(E.t.mOWsF1);
    if (null == r ? void 0 : r.isPremiumGroupMember())
        return E.intl.formatToPlainString(b.default["5xN/C1"], { premiumGroupProductName: (0, g.sO)() });
    let { numAvailableGuildBoostSlots: l, numCanceledGuildBoostSlots: c } = Object.values(d.Z.boostSlots).reduce(
        (e, t) => (F(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e),
        {
            numAvailableGuildBoostSlots: 0,
            numCanceledGuildBoostSlots: 0,
        },
    );
    if (null == n || l > 0) return null;
    if (n.status === _.O0b.PAST_DUE) return E.intl.string(E.t.De4Vm6);
    if (n.status === _.O0b.ACCOUNT_HOLD) return E.intl.string(E.t.JakNQ8);
    if (c > 0) return E.intl.string(E.t.x25mZR);
    if (null == n.renewalMutations) return null;
    let m = p.uV(n.renewalMutations.additionalPlans);
    return p.uV(n.additionalPlans) > m ? E.intl.string(E.t.x25mZR) : E.intl.string(E.t["W/bb8f"]);
}
let j = [
    {
        tier: _.Eu4.TIER_3,
        amount: _.oCV[_.Eu4.TIER_3],
        nextTier: null,
    },
    {
        tier: _.Eu4.TIER_2,
        amount: _.oCV[_.Eu4.TIER_2],
        nextTier: _.Eu4.TIER_3,
    },
    {
        tier: _.Eu4.TIER_1,
        amount: _.oCV[_.Eu4.TIER_1],
        nextTier: _.Eu4.TIER_2,
    },
];
function M(e, t) {
    let n = T(t),
        r = O.indexOf(t);
    if (-1 === r) return 0;
    let i = O[r - 1],
        a = null != i ? I(i) : 0,
        o = I(t);
    return Math.max(0, n - e.slice(a, o).length);
}
function k(e, t, n) {
    return -1 === O.indexOf(n) ? 0 : Math.max(0, U(e) - t.length);
}
function U(e) {
    var t, n;
    let r = h.XB + (null != (n = null == (t = e.premiumFeatures) ? void 0 : t.additionalSoundSlots) ? n : 0);
    return Math.max(e.features.has(_.GuildFeatures.MORE_SOUNDBOARD) ? h.w1 : h.XB, r);
}
function G(e) {
    var t, n;
    let r = m.xD + (null != (n = null == (t = e.premiumFeatures) ? void 0 : t.additionalEmojiSlots) ? n : 0);
    return Math.max(e.features.has(_.GuildFeatures.MORE_EMOJI) ? m.IE : m.xD, r);
}
function Z(e, t) {
    let n = (0, s.I)(e.id).available;
    return Math.max(0, _.oCV[t] - n);
}
function F(e) {
    var t;
    return (null == (t = e.subscription) ? void 0 : t.status) === _.O0b.CANCELED || e.canceled;
}
function B(e) {
    var t;
    return null != (t = v.find((t) => e >= _.oCV[t])) ? t : _.Eu4.NONE;
}
function V(e) {
    var t;
    return null != (t = O.find((t) => e < _.oCV[t])) ? t : _.Eu4.TIER_3;
}
let H = {
    [_.Eu4.NONE]: 0,
    [_.Eu4.TIER_1]: 1 / 3,
    [_.Eu4.TIER_2]: 2 / 3,
    [_.Eu4.TIER_3]: 1,
};
function Y(e) {
    let t = (0, l.I)(e.id),
        n = B(t),
        r = V(t),
        i = _.oCV[n],
        a = (t - i) / (_.oCV[r] - i),
        o = H[n],
        s = H[r];
    return {
        fillFactor: n === _.Eu4.TIER_3 ? 1 : a * (s - o) + o,
        totalAvailableBoostsCount: t,
    };
}

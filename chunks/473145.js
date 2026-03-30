"use strict";
n.d(t, {
    Cp: () => y,
    D$: () => L,
    I5: () => F,
    Nc: () => w,
    Os: () => G,
    P7: () => b,
    Qu: () => C,
    Ry: () => v,
    TP: () => g,
    Ys: () => R,
    aG: () => S,
    ax: () => T,
    fA: () => k,
    fi: () => I,
    gb: () => N,
    k1: () => O,
    kN: () => V,
    sN: () => U,
    tO: () => x,
    yA: () => P,
    yS: () => D,
});
var r = n(735438),
    i = n.n(r);
n(989349);
var s = n(336934),
    a = n(923408),
    o = n(864310);
n(434564);
var l = n(71393),
    u = n(287809),
    c = n(178368),
    d = n(166403);
n(255438), n(403362), n(975571);
var _ = n(927578);
n(728458);
var f = n(652215);
n(307731);
var p = n(788868),
    h = n(88001),
    m = n(985018),
    E = n(519412);
Object.freeze({ 1: 1, 2: 2, 3: 3, 4: 6, 5: 9, 6: 12, 7: 15, 8: 18, 9: 24 });
var g = (function (e) {
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
let A = [f.TVA.NONE, f.TVA.TIER_1, f.TVA.TIER_2, f.TVA.TIER_3],
    I = A.slice().reverse(),
    T = (e) => (e === f.TVA.NONE ? f.TVA.TIER_1 : M.find((t) => t.tier === e)?.nextTier),
    S = (e, t) =>
        null != t && t.features.has(f.GuildFeatures.MORE_STICKERS) && e === f.TVA.TIER_3
            ? s.K.MAX_STICKER_SLOTS
            : p.d8[e],
    y = (e) => p.nk[e],
    v = (e) => {
        if (e === f.TVA.NONE) return p.y7[e];
        let t = A[A.indexOf(e) - 1];
        return p.y7[e] - p.y7[t];
    };
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { useLevels: n = !0 } = t;
    switch (e) {
        case f.TVA.NONE:
            return n ? m.intl.string(m.t.LcKgJd) : m.intl.string(m.t.mx8j2m);
        case f.TVA.TIER_1:
            return m.intl.string(m.t.nzXtaS);
        case f.TVA.TIER_2:
            return m.intl.string(m.t["h33/uW"]);
        case f.TVA.TIER_3:
            return m.intl.string(m.t.BfF6ED);
        default:
            throw Error("Not a valid tier type");
    }
}
function C(e) {
    switch (e) {
        case f.TVA.NONE:
            return m.intl.string(m.t.LcKgJd);
        case f.TVA.TIER_1:
            return m.intl.string(m.t.xRjU1V);
        case f.TVA.TIER_2:
            return m.intl.string(m.t.C7e2Bo);
        case f.TVA.TIER_3:
            return m.intl.string(m.t.avGxmk);
        default:
            throw Error("Not a valid tier type");
    }
}
let R = i().memoize((e) =>
        p.TG[f.TVA.TIER_1].features.includes(e)
            ? f.TVA.TIER_1
            : p.TG[f.TVA.TIER_2].features.includes(e)
              ? f.TVA.TIER_2
              : p.TG[f.TVA.TIER_3].features.includes(e)
                ? f.TVA.TIER_3
                : null,
    ),
    O = (e) =>
        e === f.TVA.NONE
            ? f.AnalyticsObjectTypes.NONE
            : e === f.TVA.TIER_1
              ? f.AnalyticsObjectTypes.TIER_1
              : e === f.TVA.TIER_2
                ? f.AnalyticsObjectTypes.TIER_2
                : e === f.TVA.TIER_3
                  ? f.AnalyticsObjectTypes.TIER_3
                  : null;
function b(e) {
    return l.A.getGuild(e)?.premiumTier ?? f.TVA.NONE;
}
function D(e, t) {
    return null == t || (null != e && e >= t);
}
function L(e) {
    return i()
        .values(e)
        .filter((e) => e.isAvailable());
}
function w(e) {
    let { fractionalState: t } = e,
        n = d.A.getPremiumTypeSubscription(),
        r = u.default.getCurrentUser();
    c.A.hasFetched || c.A.isFetching || (0, a.CD)();
    let i = L(c.A.boostSlots),
        s = n?.isPausedOrPausePending,
        o = i.length > 0;
    if (s && t === p.xc.NONE && !o) return m.intl.string(m.t.mOWsF1);
    if (r?.isPremiumGroupMember())
        return m.intl.formatToPlainString(E.default["5xN/C1"], { premiumGroupProductName: (0, h.DP)() });
    let { numAvailableGuildBoostSlots: l, numCanceledGuildBoostSlots: g } = Object.values(c.A.boostSlots).reduce(
        (e, t) => (F(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e),
        { numAvailableGuildBoostSlots: 0, numCanceledGuildBoostSlots: 0 },
    );
    if (null == n || l > 0) return null;
    if (n.status === f.Dmq.PAST_DUE) return m.intl.string(m.t.De4Vm6);
    if (n.status === f.Dmq.ACCOUNT_HOLD) return m.intl.string(m.t.JakNQ8);
    if (g > 0) return m.intl.string(m.t.x25mZR);
    if (null == n.renewalMutations) return null;
    let A = _.bx(n.renewalMutations.additionalPlans);
    return _.bx(n.additionalPlans) > A ? m.intl.string(m.t.x25mZR) : m.intl.string(m.t["W/bb8f"]);
}
let M = [
    { tier: f.TVA.TIER_3, amount: f.M2T[f.TVA.TIER_3], nextTier: null },
    { tier: f.TVA.TIER_2, amount: f.M2T[f.TVA.TIER_2], nextTier: f.TVA.TIER_3 },
    { tier: f.TVA.TIER_1, amount: f.M2T[f.TVA.TIER_1], nextTier: f.TVA.TIER_2 },
];
function P(e, t) {
    let n = y(t),
        r = A.indexOf(t);
    if (-1 === r) return 0;
    let i = A[r - 1],
        s = null != i ? S(i) : 0,
        a = S(t);
    return Math.max(0, n - e.slice(s, a).length);
}
function x(e, t, n) {
    return -1 === A.indexOf(n) ? 0 : Math.max(0, k(e) - t.length);
}
function k(e) {
    let t = p.OW + (e.premiumFeatures?.additionalSoundSlots ?? 0);
    return Math.max(e.features.has(f.GuildFeatures.MORE_SOUNDBOARD) ? p.xs : p.OW, t);
}
function U(e) {
    let t = 50 + (e.premiumFeatures?.additionalEmojiSlots ?? 0);
    return Math.max(e.features.has(f.GuildFeatures.MORE_EMOJI) ? 200 : 50, t);
}
function G(e, t) {
    let n = (0, o.Z)(e.id).available;
    return Math.max(0, f.M2T[t] - n);
}
function F(e) {
    return e.subscription?.status === f.Dmq.CANCELED || e.canceled;
}
function V(e) {
    return I.find((t) => e >= f.M2T[t]) ?? f.TVA.NONE;
}
f.TVA.NONE, f.TVA.TIER_1, f.TVA.TIER_2, f.TVA.TIER_3;

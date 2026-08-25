"use strict";
n.d(t, {
    Cp: () => R,
    D$: () => P,
    I5: () => H,
    Nc: () => U,
    Os: () => B,
    P7: () => b,
    Qu: () => y,
    Ry: () => O,
    TP: () => m,
    Ys: () => D,
    aG: () => C,
    ax: () => N,
    fA: () => F,
    fi: () => S,
    gb: () => L,
    k1: () => v,
    kN: () => j,
    os: () => w,
    sN: () => V,
    tO: () => k,
    yA: () => x,
    yS: () => M,
});
var i,
    r = n(435558),
    a = n.n(r);
n(536637);
var s = n(336934),
    l = n(820739),
    o = n(864310);
n(434564);
var d = n(71393),
    c = n(287809),
    u = n(178368),
    _ = n(166403);
n(255438), n(403362), n(975571);
var E = n(158045);
n(38405);
var A = n(652215),
    h = n(307731),
    I = n(202541),
    f = n(88001),
    p = n(375708),
    T = n(109447);
Object.freeze({ 1: 1, 2: 2, 3: 3, 4: 6, 5: 9, 6: 12, 7: 15, 8: 18, 9: 24 });
var m =
    (((i = {})[(i.EMOJI = 1)] = "EMOJI"),
    (i[(i.AUDIO = 2)] = "AUDIO"),
    (i[(i.ANIMATED = 3)] = "ANIMATED"),
    (i[(i.CUSTOMIZATION = 4)] = "CUSTOMIZATION"),
    (i[(i.UPLOAD = 5)] = "UPLOAD"),
    (i[(i.VANITY = 6)] = "VANITY"),
    (i[(i.STREAM = 7)] = "STREAM"),
    (i[(i.STICKER = 8)] = "STICKER"),
    (i[(i.CUSTOM_ROLE_ICON = 11)] = "CUSTOM_ROLE_ICON"),
    (i[(i.STAGE_VIDEO = 12)] = "STAGE_VIDEO"),
    (i[(i.SOUNDBOARD = 13)] = "SOUNDBOARD"),
    i);
let g = [A.TVA.NONE, A.TVA.TIER_1, A.TVA.TIER_2, A.TVA.TIER_3],
    S = g.slice().reverse();
function N(e) {
    return e === A.TVA.NONE ? A.TVA.TIER_1 : G.find((t) => t.tier === e)?.nextTier;
}
function C(e, t) {
    return null != t && t.features.has(A.GuildFeatures.MORE_STICKERS) && e === A.TVA.TIER_3
        ? s.K.MAX_STICKER_SLOTS
        : I.d8[e];
}
function R(e) {
    return I.nk[e];
}
function O(e) {
    if (e === A.TVA.NONE) return I.y7[e];
    let t = g[g.indexOf(e) - 1];
    return I.y7[e] - I.y7[t];
}
function L(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { useLevels: n = !0 } = t;
    switch (e) {
        case A.TVA.NONE:
            return n ? p.intl.string(p.t.LcKgJd) : p.intl.string(p.t.mx8j2m);
        case A.TVA.TIER_1:
            return p.intl.string(p.t.nzXtaS);
        case A.TVA.TIER_2:
            return p.intl.string(p.t["h33/uW"]);
        case A.TVA.TIER_3:
            return p.intl.string(p.t.BfF6ED);
        default:
            throw Error("Not a valid tier type");
    }
}
function y(e) {
    switch (e) {
        case A.TVA.NONE:
            return p.intl.string(p.t.LcKgJd);
        case A.TVA.TIER_1:
            return p.intl.string(p.t.xRjU1V);
        case A.TVA.TIER_2:
            return p.intl.string(p.t.C7e2Bo);
        case A.TVA.TIER_3:
            return p.intl.string(p.t.avGxmk);
        default:
            throw Error("Not a valid tier type");
    }
}
let D = a().memoize((e) =>
    I.TG[A.TVA.TIER_1].features.includes(e)
        ? A.TVA.TIER_1
        : I.TG[A.TVA.TIER_2].features.includes(e)
          ? A.TVA.TIER_2
          : I.TG[A.TVA.TIER_3].features.includes(e)
            ? A.TVA.TIER_3
            : null,
);
function v(e) {
    switch (e) {
        case A.TVA.NONE:
            return A.AnalyticsObjectTypes.NONE;
        case A.TVA.TIER_1:
            return A.AnalyticsObjectTypes.TIER_1;
        case A.TVA.TIER_2:
            return A.AnalyticsObjectTypes.TIER_2;
        case A.TVA.TIER_3:
            return A.AnalyticsObjectTypes.TIER_3;
        default:
            return null;
    }
}
function b(e) {
    return d.A.getGuild(e)?.premiumTier ?? A.TVA.NONE;
}
function M(e, t) {
    return null == t || (null != e && e >= t);
}
function P(e) {
    return a()
        .values(e)
        .filter((e) => e.isAvailable());
}
function U(e) {
    let { fractionalState: t } = e,
        n = _.A.getPremiumTypeSubscription(),
        i = c.default.getCurrentUser();
    u.A.hasFetched || u.A.isFetching || (0, l.CD)();
    let r = P(u.A.boostSlots),
        a = n?.isPausedOrPausePending,
        s = r.length > 0;
    if (a && t === I.xc.NONE && !s) return p.intl.string(p.t.mOWsF1);
    if (i?.isPremiumGroupMember())
        return p.intl.formatToPlainString(T.default["5xN/C1"], { premiumGroupProductName: (0, f.DP)() });
    let { numAvailableGuildBoostSlots: o, numCanceledGuildBoostSlots: d } = Object.values(u.A.boostSlots).reduce(
        (e, t) => (H(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e),
        { numAvailableGuildBoostSlots: 0, numCanceledGuildBoostSlots: 0 },
    );
    if (null == n || o > 0) return null;
    if (n.status === A.Dmq.PAST_DUE) return p.intl.string(p.t.De4Vm6);
    if (n.status === A.Dmq.ACCOUNT_HOLD) return p.intl.string(p.t.JakNQ8);
    if (d > 0) return p.intl.string(p.t.x25mZR);
    if (null == n.renewalMutations) return null;
    let h = E.bx(n.renewalMutations.additionalPlans);
    return E.bx(n.additionalPlans) > h ? p.intl.string(p.t.x25mZR) : p.intl.string(p.t["W/bb8f"]);
}
function w(e) {
    return !e.ended && (null == e.endsAt || e.endsAt.getTime() > Date.now());
}
let G = [
    { tier: A.TVA.TIER_3, amount: A.M2T[A.TVA.TIER_3], nextTier: null },
    { tier: A.TVA.TIER_2, amount: A.M2T[A.TVA.TIER_2], nextTier: A.TVA.TIER_3 },
    { tier: A.TVA.TIER_1, amount: A.M2T[A.TVA.TIER_1], nextTier: A.TVA.TIER_2 },
];
function x(e, t) {
    let n = R(t),
        i = g.indexOf(t);
    if (-1 === i) return 0;
    let r = g[i - 1],
        a = null != r ? C(r) : 0,
        s = C(t);
    return Math.max(0, n - e.slice(a, s).length);
}
function k(e, t, n) {
    return -1 === g.indexOf(n) ? 0 : Math.max(0, F(e) - t.length);
}
function F(e) {
    let t = I.OW + (e.premiumFeatures?.additionalSoundSlots ?? 0);
    return Math.max(e.features.has(A.GuildFeatures.MORE_SOUNDBOARD) ? I.xs : I.OW, t);
}
function V(e) {
    let t = h.DEFAULT_EMOJI_SLOTS + (e.premiumFeatures?.additionalEmojiSlots ?? 0);
    return Math.max(e.features.has(A.GuildFeatures.MORE_EMOJI) ? h.EMOJI_MAX_SLOTS_MORE : h.DEFAULT_EMOJI_SLOTS, t);
}
function B(e, t) {
    let n = (0, o.Z)(e.id).available;
    return Math.max(0, A.M2T[t] - n);
}
function H(e) {
    return e.subscription?.status === A.Dmq.CANCELED || e.canceled;
}
function j(e) {
    return S.find((t) => e >= A.M2T[t]) ?? A.TVA.NONE;
}
A.TVA.NONE, A.TVA.TIER_1, A.TVA.TIER_2, A.TVA.TIER_3;

n.d(t, {
    Cp: () => N,
    D$: () => P,
    I5: () => V,
    Nc: () => M,
    Os: () => B,
    P7: () => v,
    Qu: () => R,
    Ry: () => C,
    Ys: () => y,
    aG: () => S,
    ax: () => g,
    fA: () => k,
    fi: () => m,
    gb: () => O,
    k1: () => D,
    kN: () => H,
    os: () => U,
    sN: () => F,
    tO: () => x,
    yA: () => G,
    yS: () => b,
});
var i = n(435558),
    r = n.n(i);
n(536637);
var a = n(336934),
    s = n(820739),
    l = n(864310);
n(434564);
var o = n(71393),
    d = n(287809),
    c = n(178368),
    u = n(166403);
(n(255438), n(403362), n(975571));
var _ = n(158045);
n(38405);
var E = n(652215),
    A = n(307731),
    h = n(202541),
    f = n(88001),
    I = n(105292),
    p = n(148155);
Object.freeze({ 1: 1, 2: 2, 3: 3, 4: 6, 5: 9, 6: 12, 7: 15, 8: 18, 9: 24 });
let T = [E.TVA.NONE, E.TVA.TIER_1, E.TVA.TIER_2, E.TVA.TIER_3],
    m = T.slice().reverse();
function g(e) {
    return e === E.TVA.NONE ? E.TVA.TIER_1 : w.find((t) => t.tier === e)?.nextTier;
}
function S(e, t) {
    return null != t && t.features.has(E.GuildFeatures.MORE_STICKERS) && e === E.TVA.TIER_3
        ? a.K.MAX_STICKER_SLOTS
        : h.d8[e];
}
function N(e) {
    return h.nk[e];
}
function C(e) {
    if (e === E.TVA.NONE) return h.y7[e];
    let t = T[T.indexOf(e) - 1];
    return h.y7[e] - h.y7[t];
}
function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { useLevels: n = !0 } = t;
    switch (e) {
        case E.TVA.NONE:
            return n ? I.intl.string(I.t.LcKgJd) : I.intl.string(I.t.mx8j2m);
        case E.TVA.TIER_1:
            return I.intl.string(I.t.nzXtaS);
        case E.TVA.TIER_2:
            return I.intl.string(I.t["h33/uW"]);
        case E.TVA.TIER_3:
            return I.intl.string(I.t.BfF6ED);
        default:
            throw Error("Not a valid tier type");
    }
}
function R(e) {
    switch (e) {
        case E.TVA.NONE:
            return I.intl.string(I.t.LcKgJd);
        case E.TVA.TIER_1:
            return I.intl.string(I.t.xRjU1V);
        case E.TVA.TIER_2:
            return I.intl.string(I.t.C7e2Bo);
        case E.TVA.TIER_3:
            return I.intl.string(I.t.avGxmk);
        default:
            throw Error("Not a valid tier type");
    }
}
function L(e, t) {
    return h.TG[e].features.includes(t);
}
let y = r().memoize((e) =>
    L(E.TVA.TIER_1, e) ? E.TVA.TIER_1 : L(E.TVA.TIER_2, e) ? E.TVA.TIER_2 : L(E.TVA.TIER_3, e) ? E.TVA.TIER_3 : null,
);
function D(e) {
    switch (e) {
        case E.TVA.NONE:
            return E.AnalyticsObjectTypes.NONE;
        case E.TVA.TIER_1:
            return E.AnalyticsObjectTypes.TIER_1;
        case E.TVA.TIER_2:
            return E.AnalyticsObjectTypes.TIER_2;
        case E.TVA.TIER_3:
            return E.AnalyticsObjectTypes.TIER_3;
        default:
            return null;
    }
}
function v(e) {
    return o.A.getGuild(e)?.premiumTier ?? E.TVA.NONE;
}
function b(e, t) {
    return null == t || (null != e && e >= t);
}
function P(e) {
    return r()
        .values(e)
        .filter((e) => e.isAvailable());
}
function M(e) {
    let { fractionalState: t } = e,
        n = u.A.getPremiumTypeSubscription(),
        i = d.default.getCurrentUser();
    c.A.hasFetched || c.A.isFetching || (0, s.CD)();
    let r = P(c.A.boostSlots),
        a = n?.isPausedOrPausePending,
        l = r.length > 0;
    if (a && t === h.xc.NONE && !l) return I.intl.string(I.t.mOWsF1);
    if (i?.isPremiumGroupMember())
        return I.intl.formatToPlainString(p.default["5xN/C1"], { premiumGroupProductName: (0, f.DP)() });
    let { numAvailableGuildBoostSlots: o, numCanceledGuildBoostSlots: A } = Object.values(c.A.boostSlots).reduce(
        (e, t) => (V(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e),
        { numAvailableGuildBoostSlots: 0, numCanceledGuildBoostSlots: 0 },
    );
    if (null == n || o > 0) return null;
    if (n.status === E.Dmq.PAST_DUE) return I.intl.string(I.t.De4Vm6);
    if (n.status === E.Dmq.ACCOUNT_HOLD) return I.intl.string(I.t.JakNQ8);
    if (A > 0) return I.intl.string(I.t.x25mZR);
    if (null == n.renewalMutations) return null;
    let T = _.bx(n.renewalMutations.additionalPlans);
    return _.bx(n.additionalPlans) > T ? I.intl.string(I.t.x25mZR) : I.intl.string(I.t["W/bb8f"]);
}
function U(e) {
    return !e.ended && (null == e.endsAt || e.endsAt.getTime() > Date.now());
}
let w = [
    { tier: E.TVA.TIER_3, amount: E.M2T[E.TVA.TIER_3], nextTier: null },
    { tier: E.TVA.TIER_2, amount: E.M2T[E.TVA.TIER_2], nextTier: E.TVA.TIER_3 },
    { tier: E.TVA.TIER_1, amount: E.M2T[E.TVA.TIER_1], nextTier: E.TVA.TIER_2 },
];
function G(e, t) {
    let n = N(t),
        i = T.indexOf(t);
    if (-1 === i) return 0;
    let r = T[i - 1],
        a = null != r ? S(r) : 0,
        s = S(t);
    return Math.max(0, n - e.slice(a, s).length);
}
function x(e, t, n) {
    return -1 === T.indexOf(n) ? 0 : Math.max(0, k(e) - t.length);
}
function k(e) {
    let t = h.OW + (e.premiumFeatures?.additionalSoundSlots ?? 0);
    return Math.max(e.features.has(E.GuildFeatures.MORE_SOUNDBOARD) ? h.xs : h.OW, t);
}
function F(e) {
    let t = A.DEFAULT_EMOJI_SLOTS + (e.premiumFeatures?.additionalEmojiSlots ?? 0);
    return Math.max(e.features.has(E.GuildFeatures.MORE_EMOJI) ? A.EMOJI_MAX_SLOTS_MORE : A.DEFAULT_EMOJI_SLOTS, t);
}
function B(e, t) {
    let n = (0, l.Z)(e.id).available;
    return Math.max(0, E.M2T[t] - n);
}
function V(e) {
    return e.subscription?.status === E.Dmq.CANCELED || e.canceled;
}
function H(e) {
    return m.find((t) => e >= E.M2T[t]) ?? E.TVA.NONE;
}
(E.TVA.NONE, E.TVA.TIER_1, E.TVA.TIER_2, E.TVA.TIER_3);

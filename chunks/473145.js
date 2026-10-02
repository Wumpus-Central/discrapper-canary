n.d(t, {
    Cp: () => N,
    D$: () => b,
    I5: () => B,
    Nc: () => M,
    Os: () => F,
    P7: () => D,
    Qu: () => R,
    Ry: () => C,
    Ys: () => L,
    aG: () => S,
    ax: () => g,
    fA: () => x,
    fi: () => m,
    gb: () => O,
    k1: () => y,
    kN: () => V,
    os: () => P,
    sN: () => k,
    tO: () => G,
    yA: () => w,
    yS: () => v,
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
    I = n(88001),
    f = n(375708),
    p = n(148155);
Object.freeze({ 1: 1, 2: 2, 3: 3, 4: 6, 5: 9, 6: 12, 7: 15, 8: 18, 9: 24 });
let T = [E.TVA.NONE, E.TVA.TIER_1, E.TVA.TIER_2, E.TVA.TIER_3],
    m = T.slice().reverse();
function g(e) {
    return e === E.TVA.NONE ? E.TVA.TIER_1 : U.find((t) => t.tier === e)?.nextTier;
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
            return n ? f.intl.string(f.t.LcKgJd) : f.intl.string(f.t.mx8j2m);
        case E.TVA.TIER_1:
            return f.intl.string(f.t.nzXtaS);
        case E.TVA.TIER_2:
            return f.intl.string(f.t["h33/uW"]);
        case E.TVA.TIER_3:
            return f.intl.string(f.t.BfF6ED);
        default:
            throw Error("Not a valid tier type");
    }
}
function R(e) {
    switch (e) {
        case E.TVA.NONE:
            return f.intl.string(f.t.LcKgJd);
        case E.TVA.TIER_1:
            return f.intl.string(f.t.xRjU1V);
        case E.TVA.TIER_2:
            return f.intl.string(f.t.C7e2Bo);
        case E.TVA.TIER_3:
            return f.intl.string(f.t.avGxmk);
        default:
            throw Error("Not a valid tier type");
    }
}
let L = r().memoize((e) =>
    h.TG[E.TVA.TIER_1].features.includes(e)
        ? E.TVA.TIER_1
        : h.TG[E.TVA.TIER_2].features.includes(e)
          ? E.TVA.TIER_2
          : h.TG[E.TVA.TIER_3].features.includes(e)
            ? E.TVA.TIER_3
            : null,
);
function y(e) {
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
function D(e) {
    return o.A.getGuild(e)?.premiumTier ?? E.TVA.NONE;
}
function v(e, t) {
    return null == t || (null != e && e >= t);
}
function b(e) {
    return r()
        .values(e)
        .filter((e) => e.isAvailable());
}
function M(e) {
    let { fractionalState: t } = e,
        n = u.A.getPremiumTypeSubscription(),
        i = d.default.getCurrentUser();
    c.A.hasFetched || c.A.isFetching || (0, s.CD)();
    let r = b(c.A.boostSlots),
        a = n?.isPausedOrPausePending,
        l = r.length > 0;
    if (a && t === h.xc.NONE && !l) return f.intl.string(f.t.mOWsF1);
    if (i?.isPremiumGroupMember())
        return f.intl.formatToPlainString(p.default["5xN/C1"], { premiumGroupProductName: (0, I.DP)() });
    let { numAvailableGuildBoostSlots: o, numCanceledGuildBoostSlots: A } = Object.values(c.A.boostSlots).reduce(
        (e, t) => (B(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e),
        { numAvailableGuildBoostSlots: 0, numCanceledGuildBoostSlots: 0 },
    );
    if (null == n || o > 0) return null;
    if (n.status === E.Dmq.PAST_DUE) return f.intl.string(f.t.De4Vm6);
    if (n.status === E.Dmq.ACCOUNT_HOLD) return f.intl.string(f.t.JakNQ8);
    if (A > 0) return f.intl.string(f.t.x25mZR);
    if (null == n.renewalMutations) return null;
    let T = _.bx(n.renewalMutations.additionalPlans);
    return _.bx(n.additionalPlans) > T ? f.intl.string(f.t.x25mZR) : f.intl.string(f.t["W/bb8f"]);
}
function P(e) {
    return !e.ended && (null == e.endsAt || e.endsAt.getTime() > Date.now());
}
let U = [
    { tier: E.TVA.TIER_3, amount: E.M2T[E.TVA.TIER_3], nextTier: null },
    { tier: E.TVA.TIER_2, amount: E.M2T[E.TVA.TIER_2], nextTier: E.TVA.TIER_3 },
    { tier: E.TVA.TIER_1, amount: E.M2T[E.TVA.TIER_1], nextTier: E.TVA.TIER_2 },
];
function w(e, t) {
    let n = N(t),
        i = T.indexOf(t);
    if (-1 === i) return 0;
    let r = T[i - 1],
        a = null != r ? S(r) : 0,
        s = S(t);
    return Math.max(0, n - e.slice(a, s).length);
}
function G(e, t, n) {
    return -1 === T.indexOf(n) ? 0 : Math.max(0, x(e) - t.length);
}
function x(e) {
    let t = h.OW + (e.premiumFeatures?.additionalSoundSlots ?? 0);
    return Math.max(e.features.has(E.GuildFeatures.MORE_SOUNDBOARD) ? h.xs : h.OW, t);
}
function k(e) {
    let t = A.DEFAULT_EMOJI_SLOTS + (e.premiumFeatures?.additionalEmojiSlots ?? 0);
    return Math.max(e.features.has(E.GuildFeatures.MORE_EMOJI) ? A.EMOJI_MAX_SLOTS_MORE : A.DEFAULT_EMOJI_SLOTS, t);
}
function F(e, t) {
    let n = (0, l.Z)(e.id).available;
    return Math.max(0, E.M2T[t] - n);
}
function B(e) {
    return e.subscription?.status === E.Dmq.CANCELED || e.canceled;
}
function V(e) {
    return m.find((t) => e >= E.M2T[t]) ?? E.TVA.NONE;
}
(E.TVA.NONE, E.TVA.TIER_1, E.TVA.TIER_2, E.TVA.TIER_3);

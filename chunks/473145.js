"use strict";
n.d(t, {
    Cp: () => O,
    D$: () => M,
    I5: () => B,
    Nc: () => P,
    Os: () => F,
    P7: () => L,
    Qu: () => C,
    Ry: () => R,
    TP: () => I,
    Ys: () => b,
    aG: () => N,
    ax: () => y,
    fA: () => G,
    fi: () => S,
    gb: () => v,
    k1: () => D,
    kN: () => H,
    sN: () => V,
    tO: () => x,
    yA: () => k,
    yS: () => w,
});
var r,
    i = n(735438),
    s = n.n(i);
n(989349);
var a = n(336934),
    o = n(923408),
    l = n(864310);
n(434564);
var u = n(71393),
    d = n(287809),
    c = n(178368),
    _ = n(166403);
n(255438), n(403362), n(975571);
var f = n(927578);
n(728458);
var E = n(652215),
    h = n(307731),
    p = n(788868),
    m = n(88001),
    g = n(985018),
    A = n(466919);
Object.freeze({ 1: 1, 2: 2, 3: 3, 4: 6, 5: 9, 6: 12, 7: 15, 8: 18, 9: 24 });
var I =
    (((r = {})[(r.EMOJI = 1)] = "EMOJI"),
    (r[(r.AUDIO = 2)] = "AUDIO"),
    (r[(r.ANIMATED = 3)] = "ANIMATED"),
    (r[(r.CUSTOMIZATION = 4)] = "CUSTOMIZATION"),
    (r[(r.UPLOAD = 5)] = "UPLOAD"),
    (r[(r.VANITY = 6)] = "VANITY"),
    (r[(r.STREAM = 7)] = "STREAM"),
    (r[(r.STICKER = 8)] = "STICKER"),
    (r[(r.CUSTOM_ROLE_ICON = 11)] = "CUSTOM_ROLE_ICON"),
    (r[(r.STAGE_VIDEO = 12)] = "STAGE_VIDEO"),
    (r[(r.SOUNDBOARD = 13)] = "SOUNDBOARD"),
    r);
let T = [E.TVA.NONE, E.TVA.TIER_1, E.TVA.TIER_2, E.TVA.TIER_3],
    S = T.slice().reverse(),
    y = (e) => (e === E.TVA.NONE ? E.TVA.TIER_1 : U.find((t) => t.tier === e)?.nextTier),
    N = (e, t) =>
        null != t && t.features.has(E.GuildFeatures.MORE_STICKERS) && e === E.TVA.TIER_3
            ? a.K.MAX_STICKER_SLOTS
            : p.d8[e],
    O = (e) => p.nk[e],
    R = (e) => {
        if (e === E.TVA.NONE) return p.y7[e];
        let t = T[T.indexOf(e) - 1];
        return p.y7[e] - p.y7[t];
    };
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { useLevels: n = !0 } = t;
    switch (e) {
        case E.TVA.NONE:
            return n ? g.intl.string(g.t.LcKgJd) : g.intl.string(g.t.mx8j2m);
        case E.TVA.TIER_1:
            return g.intl.string(g.t.nzXtaS);
        case E.TVA.TIER_2:
            return g.intl.string(g.t["h33/uW"]);
        case E.TVA.TIER_3:
            return g.intl.string(g.t.BfF6ED);
        default:
            throw Error("Not a valid tier type");
    }
}
function C(e) {
    switch (e) {
        case E.TVA.NONE:
            return g.intl.string(g.t.LcKgJd);
        case E.TVA.TIER_1:
            return g.intl.string(g.t.xRjU1V);
        case E.TVA.TIER_2:
            return g.intl.string(g.t.C7e2Bo);
        case E.TVA.TIER_3:
            return g.intl.string(g.t.avGxmk);
        default:
            throw Error("Not a valid tier type");
    }
}
let b = s().memoize((e) =>
        p.TG[E.TVA.TIER_1].features.includes(e)
            ? E.TVA.TIER_1
            : p.TG[E.TVA.TIER_2].features.includes(e)
              ? E.TVA.TIER_2
              : p.TG[E.TVA.TIER_3].features.includes(e)
                ? E.TVA.TIER_3
                : null,
    ),
    D = (e) =>
        e === E.TVA.NONE
            ? E.AnalyticsObjectTypes.NONE
            : e === E.TVA.TIER_1
              ? E.AnalyticsObjectTypes.TIER_1
              : e === E.TVA.TIER_2
                ? E.AnalyticsObjectTypes.TIER_2
                : e === E.TVA.TIER_3
                  ? E.AnalyticsObjectTypes.TIER_3
                  : null;
function L(e) {
    return u.A.getGuild(e)?.premiumTier ?? E.TVA.NONE;
}
function w(e, t) {
    return null == t || (null != e && e >= t);
}
function M(e) {
    return s()
        .values(e)
        .filter((e) => e.isAvailable());
}
function P(e) {
    let { fractionalState: t } = e,
        n = _.A.getPremiumTypeSubscription(),
        r = d.default.getCurrentUser();
    c.A.hasFetched || c.A.isFetching || (0, o.CD)();
    let i = M(c.A.boostSlots),
        s = n?.isPausedOrPausePending,
        a = i.length > 0;
    if (s && t === p.xc.NONE && !a) return g.intl.string(g.t.mOWsF1);
    if (r?.isPremiumGroupMember())
        return g.intl.formatToPlainString(A.default["5xN/C1"], { premiumGroupProductName: (0, m.DP)() });
    let { numAvailableGuildBoostSlots: l, numCanceledGuildBoostSlots: u } = Object.values(c.A.boostSlots).reduce(
        (e, t) => (B(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e),
        { numAvailableGuildBoostSlots: 0, numCanceledGuildBoostSlots: 0 },
    );
    if (null == n || l > 0) return null;
    if (n.status === E.Dmq.PAST_DUE) return g.intl.string(g.t.De4Vm6);
    if (n.status === E.Dmq.ACCOUNT_HOLD) return g.intl.string(g.t.JakNQ8);
    if (u > 0) return g.intl.string(g.t.x25mZR);
    if (null == n.renewalMutations) return null;
    let h = f.bx(n.renewalMutations.additionalPlans);
    return f.bx(n.additionalPlans) > h ? g.intl.string(g.t.x25mZR) : g.intl.string(g.t["W/bb8f"]);
}
let U = [
    { tier: E.TVA.TIER_3, amount: E.M2T[E.TVA.TIER_3], nextTier: null },
    { tier: E.TVA.TIER_2, amount: E.M2T[E.TVA.TIER_2], nextTier: E.TVA.TIER_3 },
    { tier: E.TVA.TIER_1, amount: E.M2T[E.TVA.TIER_1], nextTier: E.TVA.TIER_2 },
];
function k(e, t) {
    let n = O(t),
        r = T.indexOf(t);
    if (-1 === r) return 0;
    let i = T[r - 1],
        s = null != i ? N(i) : 0,
        a = N(t);
    return Math.max(0, n - e.slice(s, a).length);
}
function x(e, t, n) {
    return -1 === T.indexOf(n) ? 0 : Math.max(0, G(e) - t.length);
}
function G(e) {
    let t = p.OW + (e.premiumFeatures?.additionalSoundSlots ?? 0);
    return Math.max(e.features.has(E.GuildFeatures.MORE_SOUNDBOARD) ? p.xs : p.OW, t);
}
function V(e) {
    let t = h.DEFAULT_EMOJI_SLOTS + (e.premiumFeatures?.additionalEmojiSlots ?? 0);
    return Math.max(e.features.has(E.GuildFeatures.MORE_EMOJI) ? h.EMOJI_MAX_SLOTS_MORE : h.DEFAULT_EMOJI_SLOTS, t);
}
function F(e, t) {
    let n = (0, l.Z)(e.id).available;
    return Math.max(0, E.M2T[t] - n);
}
function B(e) {
    return e.subscription?.status === E.Dmq.CANCELED || e.canceled;
}
function H(e) {
    return S.find((t) => e >= E.M2T[t]) ?? E.TVA.NONE;
}
E.TVA.NONE, E.TVA.TIER_1, E.TVA.TIER_2, E.TVA.TIER_3;

"use strict";
n.d(t, {
    Cp: () => v,
    D$: () => M,
    I5: () => B,
    Nc: () => P,
    Os: () => V,
    P7: () => L,
    Qu: () => R,
    Ry: () => C,
    TP: () => I,
    Ys: () => b,
    aG: () => N,
    ax: () => y,
    fA: () => G,
    fi: () => S,
    gb: () => O,
    k1: () => D,
    kN: () => H,
    sN: () => F,
    tO: () => U,
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
    c = n(287809),
    d = n(178368),
    _ = n(166403);
n(255438), n(403362), n(975571);
var f = n(927578);
n(728458);
var p = n(652215),
    h = n(307731),
    E = n(788868),
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
let T = [p.TVA.NONE, p.TVA.TIER_1, p.TVA.TIER_2, p.TVA.TIER_3],
    S = T.slice().reverse(),
    y = (e) => (e === p.TVA.NONE ? p.TVA.TIER_1 : x.find((t) => t.tier === e)?.nextTier),
    N = (e, t) =>
        null != t && t.features.has(p.GuildFeatures.MORE_STICKERS) && e === p.TVA.TIER_3
            ? a.K.MAX_STICKER_SLOTS
            : E.d8[e],
    v = (e) => E.nk[e],
    C = (e) => {
        if (e === p.TVA.NONE) return E.y7[e];
        let t = T[T.indexOf(e) - 1];
        return E.y7[e] - E.y7[t];
    };
function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { useLevels: n = !0 } = t;
    switch (e) {
        case p.TVA.NONE:
            return n ? g.intl.string(g.t.LcKgJd) : g.intl.string(g.t.mx8j2m);
        case p.TVA.TIER_1:
            return g.intl.string(g.t.nzXtaS);
        case p.TVA.TIER_2:
            return g.intl.string(g.t["h33/uW"]);
        case p.TVA.TIER_3:
            return g.intl.string(g.t.BfF6ED);
        default:
            throw Error("Not a valid tier type");
    }
}
function R(e) {
    switch (e) {
        case p.TVA.NONE:
            return g.intl.string(g.t.LcKgJd);
        case p.TVA.TIER_1:
            return g.intl.string(g.t.xRjU1V);
        case p.TVA.TIER_2:
            return g.intl.string(g.t.C7e2Bo);
        case p.TVA.TIER_3:
            return g.intl.string(g.t.avGxmk);
        default:
            throw Error("Not a valid tier type");
    }
}
let b = s().memoize((e) =>
        E.TG[p.TVA.TIER_1].features.includes(e)
            ? p.TVA.TIER_1
            : E.TG[p.TVA.TIER_2].features.includes(e)
              ? p.TVA.TIER_2
              : E.TG[p.TVA.TIER_3].features.includes(e)
                ? p.TVA.TIER_3
                : null,
    ),
    D = (e) =>
        e === p.TVA.NONE
            ? p.AnalyticsObjectTypes.NONE
            : e === p.TVA.TIER_1
              ? p.AnalyticsObjectTypes.TIER_1
              : e === p.TVA.TIER_2
                ? p.AnalyticsObjectTypes.TIER_2
                : e === p.TVA.TIER_3
                  ? p.AnalyticsObjectTypes.TIER_3
                  : null;
function L(e) {
    return u.A.getGuild(e)?.premiumTier ?? p.TVA.NONE;
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
        r = c.default.getCurrentUser();
    d.A.hasFetched || d.A.isFetching || (0, o.CD)();
    let i = M(d.A.boostSlots),
        s = n?.isPausedOrPausePending,
        a = i.length > 0;
    if (s && t === E.xc.NONE && !a) return g.intl.string(g.t.mOWsF1);
    if (r?.isPremiumGroupMember())
        return g.intl.formatToPlainString(A.default["5xN/C1"], { premiumGroupProductName: (0, m.DP)() });
    let { numAvailableGuildBoostSlots: l, numCanceledGuildBoostSlots: u } = Object.values(d.A.boostSlots).reduce(
        (e, t) => (B(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e),
        { numAvailableGuildBoostSlots: 0, numCanceledGuildBoostSlots: 0 },
    );
    if (null == n || l > 0) return null;
    if (n.status === p.Dmq.PAST_DUE) return g.intl.string(g.t.De4Vm6);
    if (n.status === p.Dmq.ACCOUNT_HOLD) return g.intl.string(g.t.JakNQ8);
    if (u > 0) return g.intl.string(g.t.x25mZR);
    if (null == n.renewalMutations) return null;
    let h = f.bx(n.renewalMutations.additionalPlans);
    return f.bx(n.additionalPlans) > h ? g.intl.string(g.t.x25mZR) : g.intl.string(g.t["W/bb8f"]);
}
let x = [
    { tier: p.TVA.TIER_3, amount: p.M2T[p.TVA.TIER_3], nextTier: null },
    { tier: p.TVA.TIER_2, amount: p.M2T[p.TVA.TIER_2], nextTier: p.TVA.TIER_3 },
    { tier: p.TVA.TIER_1, amount: p.M2T[p.TVA.TIER_1], nextTier: p.TVA.TIER_2 },
];
function k(e, t) {
    let n = v(t),
        r = T.indexOf(t);
    if (-1 === r) return 0;
    let i = T[r - 1],
        s = null != i ? N(i) : 0,
        a = N(t);
    return Math.max(0, n - e.slice(s, a).length);
}
function U(e, t, n) {
    return -1 === T.indexOf(n) ? 0 : Math.max(0, G(e) - t.length);
}
function G(e) {
    let t = E.OW + (e.premiumFeatures?.additionalSoundSlots ?? 0);
    return Math.max(e.features.has(p.GuildFeatures.MORE_SOUNDBOARD) ? E.xs : E.OW, t);
}
function F(e) {
    let t = h.DEFAULT_EMOJI_SLOTS + (e.premiumFeatures?.additionalEmojiSlots ?? 0);
    return Math.max(e.features.has(p.GuildFeatures.MORE_EMOJI) ? h.EMOJI_MAX_SLOTS_MORE : h.DEFAULT_EMOJI_SLOTS, t);
}
function V(e, t) {
    let n = (0, l.Z)(e.id).available;
    return Math.max(0, p.M2T[t] - n);
}
function B(e) {
    return e.subscription?.status === p.Dmq.CANCELED || e.canceled;
}
function H(e) {
    return S.find((t) => e >= p.M2T[t]) ?? p.TVA.NONE;
}
p.TVA.NONE, p.TVA.TIER_1, p.TVA.TIER_2, p.TVA.TIER_3;

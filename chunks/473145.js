"use strict";
n.d(t, {
    Cp: () => C,
    D$: () => M,
    I5: () => H,
    Nc: () => P,
    Os: () => B,
    P7: () => L,
    Qu: () => R,
    Ry: () => v,
    TP: () => I,
    Ys: () => b,
    aG: () => y,
    ax: () => N,
    fA: () => F,
    fi: () => S,
    gb: () => O,
    k1: () => D,
    kN: () => j,
    os: () => x,
    sN: () => V,
    tO: () => G,
    yA: () => k,
    yS: () => w,
});
var i,
    r = n(735438),
    s = n.n(r);
n(989349);
var a = n(336934),
    o = n(820739),
    l = n(864310);
n(434564);
var u = n(71393),
    c = n(287809),
    d = n(178368),
    _ = n(166403);
n(255438), n(403362), n(975571);
var f = n(927578);
n(38405);
var h = n(652215),
    p = n(307731),
    E = n(788868),
    m = n(88001),
    g = n(375708),
    A = n(466919);
Object.freeze({ 1: 1, 2: 2, 3: 3, 4: 6, 5: 9, 6: 12, 7: 15, 8: 18, 9: 24 });
var I =
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
let T = [h.TVA.NONE, h.TVA.TIER_1, h.TVA.TIER_2, h.TVA.TIER_3],
    S = T.slice().reverse(),
    N = (e) => (e === h.TVA.NONE ? h.TVA.TIER_1 : U.find((t) => t.tier === e)?.nextTier),
    y = (e, t) =>
        null != t && t.features.has(h.GuildFeatures.MORE_STICKERS) && e === h.TVA.TIER_3
            ? a.K.MAX_STICKER_SLOTS
            : E.d8[e],
    C = (e) => E.nk[e],
    v = (e) => {
        if (e === h.TVA.NONE) return E.y7[e];
        let t = T[T.indexOf(e) - 1];
        return E.y7[e] - E.y7[t];
    };
function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { useLevels: n = !0 } = t;
    switch (e) {
        case h.TVA.NONE:
            return n ? g.intl.string(g.t.LcKgJd) : g.intl.string(g.t.mx8j2m);
        case h.TVA.TIER_1:
            return g.intl.string(g.t.nzXtaS);
        case h.TVA.TIER_2:
            return g.intl.string(g.t["h33/uW"]);
        case h.TVA.TIER_3:
            return g.intl.string(g.t.BfF6ED);
        default:
            throw Error("Not a valid tier type");
    }
}
function R(e) {
    switch (e) {
        case h.TVA.NONE:
            return g.intl.string(g.t.LcKgJd);
        case h.TVA.TIER_1:
            return g.intl.string(g.t.xRjU1V);
        case h.TVA.TIER_2:
            return g.intl.string(g.t.C7e2Bo);
        case h.TVA.TIER_3:
            return g.intl.string(g.t.avGxmk);
        default:
            throw Error("Not a valid tier type");
    }
}
let b = s().memoize((e) =>
        E.TG[h.TVA.TIER_1].features.includes(e)
            ? h.TVA.TIER_1
            : E.TG[h.TVA.TIER_2].features.includes(e)
              ? h.TVA.TIER_2
              : E.TG[h.TVA.TIER_3].features.includes(e)
                ? h.TVA.TIER_3
                : null,
    ),
    D = (e) =>
        e === h.TVA.NONE
            ? h.AnalyticsObjectTypes.NONE
            : e === h.TVA.TIER_1
              ? h.AnalyticsObjectTypes.TIER_1
              : e === h.TVA.TIER_2
                ? h.AnalyticsObjectTypes.TIER_2
                : e === h.TVA.TIER_3
                  ? h.AnalyticsObjectTypes.TIER_3
                  : null;
function L(e) {
    return u.A.getGuild(e)?.premiumTier ?? h.TVA.NONE;
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
        i = c.default.getCurrentUser();
    d.A.hasFetched || d.A.isFetching || (0, o.CD)();
    let r = M(d.A.boostSlots),
        s = n?.isPausedOrPausePending,
        a = r.length > 0;
    if (s && t === E.xc.NONE && !a) return g.intl.string(g.t.mOWsF1);
    if (i?.isPremiumGroupMember())
        return g.intl.formatToPlainString(A.default["5xN/C1"], { premiumGroupProductName: (0, m.DP)() });
    let { numAvailableGuildBoostSlots: l, numCanceledGuildBoostSlots: u } = Object.values(d.A.boostSlots).reduce(
        (e, t) => (H(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e),
        { numAvailableGuildBoostSlots: 0, numCanceledGuildBoostSlots: 0 },
    );
    if (null == n || l > 0) return null;
    if (n.status === h.Dmq.PAST_DUE) return g.intl.string(g.t.De4Vm6);
    if (n.status === h.Dmq.ACCOUNT_HOLD) return g.intl.string(g.t.JakNQ8);
    if (u > 0) return g.intl.string(g.t.x25mZR);
    if (null == n.renewalMutations) return null;
    let p = f.bx(n.renewalMutations.additionalPlans);
    return f.bx(n.additionalPlans) > p ? g.intl.string(g.t.x25mZR) : g.intl.string(g.t["W/bb8f"]);
}
function x(e) {
    return !e.ended && (null == e.endsAt || e.endsAt.getTime() > Date.now());
}
let U = [
    { tier: h.TVA.TIER_3, amount: h.M2T[h.TVA.TIER_3], nextTier: null },
    { tier: h.TVA.TIER_2, amount: h.M2T[h.TVA.TIER_2], nextTier: h.TVA.TIER_3 },
    { tier: h.TVA.TIER_1, amount: h.M2T[h.TVA.TIER_1], nextTier: h.TVA.TIER_2 },
];
function k(e, t) {
    let n = C(t),
        i = T.indexOf(t);
    if (-1 === i) return 0;
    let r = T[i - 1],
        s = null != r ? y(r) : 0,
        a = y(t);
    return Math.max(0, n - e.slice(s, a).length);
}
function G(e, t, n) {
    return -1 === T.indexOf(n) ? 0 : Math.max(0, F(e) - t.length);
}
function F(e) {
    let t = E.OW + (e.premiumFeatures?.additionalSoundSlots ?? 0);
    return Math.max(e.features.has(h.GuildFeatures.MORE_SOUNDBOARD) ? E.xs : E.OW, t);
}
function V(e) {
    let t = p.DEFAULT_EMOJI_SLOTS + (e.premiumFeatures?.additionalEmojiSlots ?? 0);
    return Math.max(e.features.has(h.GuildFeatures.MORE_EMOJI) ? p.EMOJI_MAX_SLOTS_MORE : p.DEFAULT_EMOJI_SLOTS, t);
}
function B(e, t) {
    let n = (0, l.Z)(e.id).available;
    return Math.max(0, h.M2T[t] - n);
}
function H(e) {
    return e.subscription?.status === h.Dmq.CANCELED || e.canceled;
}
function j(e) {
    return S.find((t) => e >= h.M2T[t]) ?? h.TVA.NONE;
}
h.TVA.NONE, h.TVA.TIER_1, h.TVA.TIER_2, h.TVA.TIER_3;

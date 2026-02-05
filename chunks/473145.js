"use strict";
n.d(t, {
    $U: () => Y,
    Cp: () => v,
    D$: () => w,
    I5: () => F,
    Nc: () => x,
    Os: () => V,
    P7: () => D,
    Qu: () => N,
    Ry: () => C,
    TP: () => A,
    Ys: () => R,
    aG: () => S,
    ax: () => y,
    fA: () => U,
    fi: () => T,
    gb: () => b,
    k1: () => O,
    kN: () => B,
    sN: () => G,
    tO: () => k,
    yA: () => M,
    yS: () => L,
});
var r = n(735438),
    i = n.n(r);
n(989349);
var a = n(336934),
    s = n(923408),
    o = n(864310),
    l = n(434564),
    u = n(71393),
    c = n(287809),
    d = n(178368),
    _ = n(166403);
n(255438), n(403362), n(975571);
var f = n(927578);
n(728458);
var p = n(652215);
n(307731);
var h = n(788868),
    m = n(88001),
    g = n(985018),
    E = n(519412);
Object.freeze({ 1: 1, 2: 2, 3: 3, 4: 6, 5: 9, 6: 12, 7: 15, 8: 18, 9: 24 });
var A = (function (e) {
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
let I = [p.TVA.NONE, p.TVA.TIER_1, p.TVA.TIER_2, p.TVA.TIER_3],
    T = I.slice().reverse(),
    y = (e) => (e === p.TVA.NONE ? p.TVA.TIER_1 : P.find((t) => t.tier === e)?.nextTier),
    S = (e, t) =>
        null != t && t.features.has(p.GuildFeatures.MORE_STICKERS) && e === p.TVA.TIER_3
            ? a.K.MAX_STICKER_SLOTS
            : h.d8[e],
    v = (e) => h.nk[e],
    C = (e) => {
        if (e === p.TVA.NONE) return h.y7[e];
        let t = I[I.indexOf(e) - 1];
        return h.y7[e] - h.y7[t];
    };
function b(e) {
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
function N(e) {
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
let R = i().memoize((e) =>
        h.TG[p.TVA.TIER_1].features.includes(e)
            ? p.TVA.TIER_1
            : h.TG[p.TVA.TIER_2].features.includes(e)
              ? p.TVA.TIER_2
              : h.TG[p.TVA.TIER_3].features.includes(e)
                ? p.TVA.TIER_3
                : null,
    ),
    O = (e) =>
        e === p.TVA.NONE
            ? p.AnalyticsObjectTypes.NONE
            : e === p.TVA.TIER_1
              ? p.AnalyticsObjectTypes.TIER_1
              : e === p.TVA.TIER_2
                ? p.AnalyticsObjectTypes.TIER_2
                : e === p.TVA.TIER_3
                  ? p.AnalyticsObjectTypes.TIER_3
                  : null;
function D(e) {
    return u.A.getGuild(e)?.premiumTier ?? p.TVA.NONE;
}
function L(e, t) {
    return null == t || (null != e && e >= t);
}
function w(e) {
    return i()
        .values(e)
        .filter((e) => e.isAvailable());
}
function x(e) {
    let { fractionalState: t } = e,
        n = _.A.getPremiumTypeSubscription(),
        r = c.default.getCurrentUser();
    d.A.hasFetched || d.A.isFetching || (0, s.CD)();
    let i = w(d.A.boostSlots),
        a = n?.isPausedOrPausePending,
        o = i.length > 0;
    if (a && t === h.xc.NONE && !o) return g.intl.string(g.t.mOWsF1);
    if (r?.isPremiumGroupMember())
        return g.intl.formatToPlainString(E.default["5xN/C1"], { premiumGroupProductName: (0, m.DP)() });
    let { numAvailableGuildBoostSlots: l, numCanceledGuildBoostSlots: u } = Object.values(d.A.boostSlots).reduce(
        (e, t) => (F(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e),
        { numAvailableGuildBoostSlots: 0, numCanceledGuildBoostSlots: 0 },
    );
    if (null == n || l > 0) return null;
    if (n.status === p.Dmq.PAST_DUE) return g.intl.string(g.t.De4Vm6);
    if (n.status === p.Dmq.ACCOUNT_HOLD) return g.intl.string(g.t.JakNQ8);
    if (u > 0) return g.intl.string(g.t.x25mZR);
    if (null == n.renewalMutations) return null;
    let A = f.bx(n.renewalMutations.additionalPlans);
    return f.bx(n.additionalPlans) > A ? g.intl.string(g.t.x25mZR) : g.intl.string(g.t["W/bb8f"]);
}
let P = [
    { tier: p.TVA.TIER_3, amount: p.M2T[p.TVA.TIER_3], nextTier: null },
    { tier: p.TVA.TIER_2, amount: p.M2T[p.TVA.TIER_2], nextTier: p.TVA.TIER_3 },
    { tier: p.TVA.TIER_1, amount: p.M2T[p.TVA.TIER_1], nextTier: p.TVA.TIER_2 },
];
function M(e, t) {
    let n = v(t),
        r = I.indexOf(t);
    if (-1 === r) return 0;
    let i = I[r - 1],
        a = null != i ? S(i) : 0,
        s = S(t);
    return Math.max(0, n - e.slice(a, s).length);
}
function k(e, t, n) {
    return -1 === I.indexOf(n) ? 0 : Math.max(0, U(e) - t.length);
}
function U(e) {
    let t = h.OW + (e.premiumFeatures?.additionalSoundSlots ?? 0);
    return Math.max(e.features.has(p.GuildFeatures.MORE_SOUNDBOARD) ? h.xs : h.OW, t);
}
function G(e) {
    let t = 50 + (e.premiumFeatures?.additionalEmojiSlots ?? 0);
    return Math.max(e.features.has(p.GuildFeatures.MORE_EMOJI) ? 200 : 50, t);
}
function V(e, t) {
    let n = (0, o.Z)(e.id).available;
    return Math.max(0, p.M2T[t] - n);
}
function F(e) {
    return e.subscription?.status === p.Dmq.CANCELED || e.canceled;
}
function B(e) {
    return T.find((t) => e >= p.M2T[t]) ?? p.TVA.NONE;
}
function j(e) {
    return I.find((t) => e < p.M2T[t]) ?? p.TVA.TIER_3;
}
let H = { [p.TVA.NONE]: 0, [p.TVA.TIER_1]: 1 / 3, [p.TVA.TIER_2]: 2 / 3, [p.TVA.TIER_3]: 1 };
function Y(e) {
    let t = (0, l.G)(e.id),
        n = B(t),
        r = j(t),
        i = p.M2T[n],
        a = (t - i) / (p.M2T[r] - i),
        s = H[n],
        o = H[r];
    return { fillFactor: n === p.TVA.TIER_3 ? 1 : a * (o - s) + s, totalAvailableBoostsCount: t };
}

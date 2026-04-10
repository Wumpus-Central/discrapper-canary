"use strict";
n.d(t, {
    Cp: () => v,
    D$: () => w,
    I5: () => V,
    Nc: () => M,
    Os: () => F,
    P7: () => D,
    Qu: () => R,
    Ry: () => N,
    TP: () => A,
    Ys: () => O,
    aG: () => y,
    ax: () => S,
    fA: () => U,
    fi: () => T,
    gb: () => C,
    k1: () => b,
    kN: () => B,
    sN: () => G,
    tO: () => k,
    yA: () => P,
    yS: () => L,
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
var f = n(652215),
    p = n(307731),
    h = n(788868),
    m = n(88001),
    E = n(985018),
    g = n(519412);
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
let I = [f.TVA.NONE, f.TVA.TIER_1, f.TVA.TIER_2, f.TVA.TIER_3],
    T = I.slice().reverse(),
    S = (e) => (e === f.TVA.NONE ? f.TVA.TIER_1 : x.find((t) => t.tier === e)?.nextTier),
    y = (e, t) =>
        null != t && t.features.has(f.GuildFeatures.MORE_STICKERS) && e === f.TVA.TIER_3
            ? s.K.MAX_STICKER_SLOTS
            : h.d8[e],
    v = (e) => h.nk[e],
    N = (e) => {
        if (e === f.TVA.NONE) return h.y7[e];
        let t = I[I.indexOf(e) - 1];
        return h.y7[e] - h.y7[t];
    };
function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { useLevels: n = !0 } = t;
    switch (e) {
        case f.TVA.NONE:
            return n ? E.intl.string(E.t.LcKgJd) : E.intl.string(E.t.mx8j2m);
        case f.TVA.TIER_1:
            return E.intl.string(E.t.nzXtaS);
        case f.TVA.TIER_2:
            return E.intl.string(E.t["h33/uW"]);
        case f.TVA.TIER_3:
            return E.intl.string(E.t.BfF6ED);
        default:
            throw Error("Not a valid tier type");
    }
}
function R(e) {
    switch (e) {
        case f.TVA.NONE:
            return E.intl.string(E.t.LcKgJd);
        case f.TVA.TIER_1:
            return E.intl.string(E.t.xRjU1V);
        case f.TVA.TIER_2:
            return E.intl.string(E.t.C7e2Bo);
        case f.TVA.TIER_3:
            return E.intl.string(E.t.avGxmk);
        default:
            throw Error("Not a valid tier type");
    }
}
let O = i().memoize((e) =>
        h.TG[f.TVA.TIER_1].features.includes(e)
            ? f.TVA.TIER_1
            : h.TG[f.TVA.TIER_2].features.includes(e)
              ? f.TVA.TIER_2
              : h.TG[f.TVA.TIER_3].features.includes(e)
                ? f.TVA.TIER_3
                : null,
    ),
    b = (e) =>
        e === f.TVA.NONE
            ? f.AnalyticsObjectTypes.NONE
            : e === f.TVA.TIER_1
              ? f.AnalyticsObjectTypes.TIER_1
              : e === f.TVA.TIER_2
                ? f.AnalyticsObjectTypes.TIER_2
                : e === f.TVA.TIER_3
                  ? f.AnalyticsObjectTypes.TIER_3
                  : null;
function D(e) {
    return l.A.getGuild(e)?.premiumTier ?? f.TVA.NONE;
}
function L(e, t) {
    return null == t || (null != e && e >= t);
}
function w(e) {
    return i()
        .values(e)
        .filter((e) => e.isAvailable());
}
function M(e) {
    let { fractionalState: t } = e,
        n = d.A.getPremiumTypeSubscription(),
        r = u.default.getCurrentUser();
    c.A.hasFetched || c.A.isFetching || (0, a.CD)();
    let i = w(c.A.boostSlots),
        s = n?.isPausedOrPausePending,
        o = i.length > 0;
    if (s && t === h.xc.NONE && !o) return E.intl.string(E.t.mOWsF1);
    if (r?.isPremiumGroupMember())
        return E.intl.formatToPlainString(g.default["5xN/C1"], { premiumGroupProductName: (0, m.DP)() });
    let { numAvailableGuildBoostSlots: l, numCanceledGuildBoostSlots: p } = Object.values(c.A.boostSlots).reduce(
        (e, t) => (V(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e),
        { numAvailableGuildBoostSlots: 0, numCanceledGuildBoostSlots: 0 },
    );
    if (null == n || l > 0) return null;
    if (n.status === f.Dmq.PAST_DUE) return E.intl.string(E.t.De4Vm6);
    if (n.status === f.Dmq.ACCOUNT_HOLD) return E.intl.string(E.t.JakNQ8);
    if (p > 0) return E.intl.string(E.t.x25mZR);
    if (null == n.renewalMutations) return null;
    let A = _.bx(n.renewalMutations.additionalPlans);
    return _.bx(n.additionalPlans) > A ? E.intl.string(E.t.x25mZR) : E.intl.string(E.t["W/bb8f"]);
}
let x = [
    { tier: f.TVA.TIER_3, amount: f.M2T[f.TVA.TIER_3], nextTier: null },
    { tier: f.TVA.TIER_2, amount: f.M2T[f.TVA.TIER_2], nextTier: f.TVA.TIER_3 },
    { tier: f.TVA.TIER_1, amount: f.M2T[f.TVA.TIER_1], nextTier: f.TVA.TIER_2 },
];
function P(e, t) {
    let n = v(t),
        r = I.indexOf(t);
    if (-1 === r) return 0;
    let i = I[r - 1],
        s = null != i ? y(i) : 0,
        a = y(t);
    return Math.max(0, n - e.slice(s, a).length);
}
function k(e, t, n) {
    return -1 === I.indexOf(n) ? 0 : Math.max(0, U(e) - t.length);
}
function U(e) {
    let t = h.OW + (e.premiumFeatures?.additionalSoundSlots ?? 0);
    return Math.max(e.features.has(f.GuildFeatures.MORE_SOUNDBOARD) ? h.xs : h.OW, t);
}
function G(e) {
    let t = p.DEFAULT_EMOJI_SLOTS + (e.premiumFeatures?.additionalEmojiSlots ?? 0);
    return Math.max(e.features.has(f.GuildFeatures.MORE_EMOJI) ? p.EMOJI_MAX_SLOTS_MORE : p.DEFAULT_EMOJI_SLOTS, t);
}
function F(e, t) {
    let n = (0, o.Z)(e.id).available;
    return Math.max(0, f.M2T[t] - n);
}
function V(e) {
    return e.subscription?.status === f.Dmq.CANCELED || e.canceled;
}
function B(e) {
    return T.find((t) => e >= f.M2T[t]) ?? f.TVA.NONE;
}
f.TVA.NONE, f.TVA.TIER_1, f.TVA.TIER_2, f.TVA.TIER_3;

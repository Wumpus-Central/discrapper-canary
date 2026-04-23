n.d(t, {
    Cp: () => L,
    D$: () => y,
    I5: () => k,
    Nc: () => G,
    Os: () => H,
    P7: () => P,
    Qu: () => g,
    Ry: () => D,
    TP: () => R,
    Ys: () => b,
    aG: () => m,
    ax: () => p,
    fA: () => F,
    fi: () => C,
    gb: () => h,
    k1: () => U,
    kN: () => x,
    sN: () => V,
    tO: () => w,
    yA: () => B,
    yS: () => M,
});
var i,
    r = n(735438),
    a = n.n(r);
n(989349);
var s = n(336934),
    _ = n(820739),
    l = n(864310);
n(434564);
var o = n(71393),
    E = n(287809),
    d = n(178368),
    c = n(166403);
n(255438), n(403362), n(975571);
var u = n(927578);
n(38405);
var I = n(652215),
    A = n(307731),
    T = n(788868),
    S = n(88001),
    N = n(985018),
    O = n(466919);
Object.freeze({ 1: 1, 2: 2, 3: 3, 4: 6, 5: 9, 6: 12, 7: 15, 8: 18, 9: 24 });
var R =
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
let f = [I.TVA.NONE, I.TVA.TIER_1, I.TVA.TIER_2, I.TVA.TIER_3],
    C = f.slice().reverse(),
    p = (e) => (e === I.TVA.NONE ? I.TVA.TIER_1 : v.find((t) => t.tier === e)?.nextTier),
    m = (e, t) =>
        null != t && t.features.has(I.GuildFeatures.MORE_STICKERS) && e === I.TVA.TIER_3
            ? s.K.MAX_STICKER_SLOTS
            : T.d8[e],
    L = (e) => T.nk[e],
    D = (e) => {
        if (e === I.TVA.NONE) return T.y7[e];
        let t = f[f.indexOf(e) - 1];
        return T.y7[e] - T.y7[t];
    };
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { useLevels: n = !0 } = t;
    switch (e) {
        case I.TVA.NONE:
            return n ? N.intl.string(N.t.LcKgJd) : N.intl.string(N.t.mx8j2m);
        case I.TVA.TIER_1:
            return N.intl.string(N.t.nzXtaS);
        case I.TVA.TIER_2:
            return N.intl.string(N.t["h33/uW"]);
        case I.TVA.TIER_3:
            return N.intl.string(N.t.BfF6ED);
        default:
            throw Error("Not a valid tier type");
    }
}
function g(e) {
    switch (e) {
        case I.TVA.NONE:
            return N.intl.string(N.t.LcKgJd);
        case I.TVA.TIER_1:
            return N.intl.string(N.t.xRjU1V);
        case I.TVA.TIER_2:
            return N.intl.string(N.t.C7e2Bo);
        case I.TVA.TIER_3:
            return N.intl.string(N.t.avGxmk);
        default:
            throw Error("Not a valid tier type");
    }
}
let b = a().memoize((e) =>
        T.TG[I.TVA.TIER_1].features.includes(e)
            ? I.TVA.TIER_1
            : T.TG[I.TVA.TIER_2].features.includes(e)
              ? I.TVA.TIER_2
              : T.TG[I.TVA.TIER_3].features.includes(e)
                ? I.TVA.TIER_3
                : null,
    ),
    U = (e) =>
        e === I.TVA.NONE
            ? I.AnalyticsObjectTypes.NONE
            : e === I.TVA.TIER_1
              ? I.AnalyticsObjectTypes.TIER_1
              : e === I.TVA.TIER_2
                ? I.AnalyticsObjectTypes.TIER_2
                : e === I.TVA.TIER_3
                  ? I.AnalyticsObjectTypes.TIER_3
                  : null;
function P(e) {
    return o.A.getGuild(e)?.premiumTier ?? I.TVA.NONE;
}
function M(e, t) {
    return null == t || (null != e && e >= t);
}
function y(e) {
    return a()
        .values(e)
        .filter((e) => e.isAvailable());
}
function G(e) {
    let { fractionalState: t } = e,
        n = c.A.getPremiumTypeSubscription(),
        i = E.default.getCurrentUser();
    d.A.hasFetched || d.A.isFetching || (0, _.CD)();
    let r = y(d.A.boostSlots),
        a = n?.isPausedOrPausePending,
        s = r.length > 0;
    if (a && t === T.xc.NONE && !s) return N.intl.string(N.t.mOWsF1);
    if (i?.isPremiumGroupMember())
        return N.intl.formatToPlainString(O.default["5xN/C1"], { premiumGroupProductName: (0, S.DP)() });
    let { numAvailableGuildBoostSlots: l, numCanceledGuildBoostSlots: o } = Object.values(d.A.boostSlots).reduce(
        (e, t) => (k(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e),
        { numAvailableGuildBoostSlots: 0, numCanceledGuildBoostSlots: 0 },
    );
    if (null == n || l > 0) return null;
    if (n.status === I.Dmq.PAST_DUE) return N.intl.string(N.t.De4Vm6);
    if (n.status === I.Dmq.ACCOUNT_HOLD) return N.intl.string(N.t.JakNQ8);
    if (o > 0) return N.intl.string(N.t.x25mZR);
    if (null == n.renewalMutations) return null;
    let A = u.bx(n.renewalMutations.additionalPlans);
    return u.bx(n.additionalPlans) > A ? N.intl.string(N.t.x25mZR) : N.intl.string(N.t["W/bb8f"]);
}
let v = [
    { tier: I.TVA.TIER_3, amount: I.M2T[I.TVA.TIER_3], nextTier: null },
    { tier: I.TVA.TIER_2, amount: I.M2T[I.TVA.TIER_2], nextTier: I.TVA.TIER_3 },
    { tier: I.TVA.TIER_1, amount: I.M2T[I.TVA.TIER_1], nextTier: I.TVA.TIER_2 },
];
function B(e, t) {
    let n = L(t),
        i = f.indexOf(t);
    if (-1 === i) return 0;
    let r = f[i - 1],
        a = null != r ? m(r) : 0,
        s = m(t);
    return Math.max(0, n - e.slice(a, s).length);
}
function w(e, t, n) {
    return -1 === f.indexOf(n) ? 0 : Math.max(0, F(e) - t.length);
}
function F(e) {
    let t = T.OW + (e.premiumFeatures?.additionalSoundSlots ?? 0);
    return Math.max(e.features.has(I.GuildFeatures.MORE_SOUNDBOARD) ? T.xs : T.OW, t);
}
function V(e) {
    let t = A.DEFAULT_EMOJI_SLOTS + (e.premiumFeatures?.additionalEmojiSlots ?? 0);
    return Math.max(e.features.has(I.GuildFeatures.MORE_EMOJI) ? A.EMOJI_MAX_SLOTS_MORE : A.DEFAULT_EMOJI_SLOTS, t);
}
function H(e, t) {
    let n = (0, l.Z)(e.id).available;
    return Math.max(0, I.M2T[t] - n);
}
function k(e) {
    return e.subscription?.status === I.Dmq.CANCELED || e.canceled;
}
function x(e) {
    return C.find((t) => e >= I.M2T[t]) ?? I.TVA.NONE;
}
I.TVA.NONE, I.TVA.TIER_1, I.TVA.TIER_2, I.TVA.TIER_3;

n.d(t, {
    Cp: () => R,
    D$: () => v,
    I5: () => k,
    Nc: () => y,
    Os: () => F,
    P7: () => P,
    Qu: () => D,
    Ry: () => g,
    TP: () => f,
    Ys: () => b,
    aG: () => C,
    ax: () => O,
    fA: () => V,
    fi: () => m,
    gb: () => L,
    k1: () => M,
    kN: () => H,
    sN: () => B,
    tO: () => x,
    yA: () => w,
    yS: () => U,
});
var i,
    a = n(735438),
    r = n.n(a);
n(989349);
var s = n(336934),
    l = n(820739),
    o = n(864310);
n(434564);
var d = n(71393),
    c = n(287809),
    _ = n(178368),
    E = n(166403);
n(255438), n(403362), n(975571);
var u = n(927578);
n(38405);
var A = n(652215),
    I = n(307731),
    T = n(788868),
    h = n(88001),
    S = n(985018),
    N = n(466919);
Object.freeze({ 1: 1, 2: 2, 3: 3, 4: 6, 5: 9, 6: 12, 7: 15, 8: 18, 9: 24 });
var f =
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
let p = [A.TVA.NONE, A.TVA.TIER_1, A.TVA.TIER_2, A.TVA.TIER_3],
    m = p.slice().reverse(),
    O = (e) => (e === A.TVA.NONE ? A.TVA.TIER_1 : G.find((t) => t.tier === e)?.nextTier),
    C = (e, t) =>
        null != t && t.features.has(A.GuildFeatures.MORE_STICKERS) && e === A.TVA.TIER_3
            ? s.K.MAX_STICKER_SLOTS
            : T.d8[e],
    R = (e) => T.nk[e],
    g = (e) => {
        if (e === A.TVA.NONE) return T.y7[e];
        let t = p[p.indexOf(e) - 1];
        return T.y7[e] - T.y7[t];
    };
function L(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { useLevels: n = !0 } = t;
    switch (e) {
        case A.TVA.NONE:
            return n ? S.intl.string(S.t.LcKgJd) : S.intl.string(S.t.mx8j2m);
        case A.TVA.TIER_1:
            return S.intl.string(S.t.nzXtaS);
        case A.TVA.TIER_2:
            return S.intl.string(S.t["h33/uW"]);
        case A.TVA.TIER_3:
            return S.intl.string(S.t.BfF6ED);
        default:
            throw Error("Not a valid tier type");
    }
}
function D(e) {
    switch (e) {
        case A.TVA.NONE:
            return S.intl.string(S.t.LcKgJd);
        case A.TVA.TIER_1:
            return S.intl.string(S.t.xRjU1V);
        case A.TVA.TIER_2:
            return S.intl.string(S.t.C7e2Bo);
        case A.TVA.TIER_3:
            return S.intl.string(S.t.avGxmk);
        default:
            throw Error("Not a valid tier type");
    }
}
let b = r().memoize((e) =>
        T.TG[A.TVA.TIER_1].features.includes(e)
            ? A.TVA.TIER_1
            : T.TG[A.TVA.TIER_2].features.includes(e)
              ? A.TVA.TIER_2
              : T.TG[A.TVA.TIER_3].features.includes(e)
                ? A.TVA.TIER_3
                : null,
    ),
    M = (e) =>
        e === A.TVA.NONE
            ? A.AnalyticsObjectTypes.NONE
            : e === A.TVA.TIER_1
              ? A.AnalyticsObjectTypes.TIER_1
              : e === A.TVA.TIER_2
                ? A.AnalyticsObjectTypes.TIER_2
                : e === A.TVA.TIER_3
                  ? A.AnalyticsObjectTypes.TIER_3
                  : null;
function P(e) {
    return d.A.getGuild(e)?.premiumTier ?? A.TVA.NONE;
}
function U(e, t) {
    return null == t || (null != e && e >= t);
}
function v(e) {
    return r()
        .values(e)
        .filter((e) => e.isAvailable());
}
function y(e) {
    let { fractionalState: t } = e,
        n = E.A.getPremiumTypeSubscription(),
        i = c.default.getCurrentUser();
    _.A.hasFetched || _.A.isFetching || (0, l.CD)();
    let a = v(_.A.boostSlots),
        r = n?.isPausedOrPausePending,
        s = a.length > 0;
    if (r && t === T.xc.NONE && !s) return S.intl.string(S.t.mOWsF1);
    if (i?.isPremiumGroupMember())
        return S.intl.formatToPlainString(N.default["5xN/C1"], { premiumGroupProductName: (0, h.DP)() });
    let { numAvailableGuildBoostSlots: o, numCanceledGuildBoostSlots: d } = Object.values(_.A.boostSlots).reduce(
        (e, t) => (k(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e),
        { numAvailableGuildBoostSlots: 0, numCanceledGuildBoostSlots: 0 },
    );
    if (null == n || o > 0) return null;
    if (n.status === A.Dmq.PAST_DUE) return S.intl.string(S.t.De4Vm6);
    if (n.status === A.Dmq.ACCOUNT_HOLD) return S.intl.string(S.t.JakNQ8);
    if (d > 0) return S.intl.string(S.t.x25mZR);
    if (null == n.renewalMutations) return null;
    let I = u.bx(n.renewalMutations.additionalPlans);
    return u.bx(n.additionalPlans) > I ? S.intl.string(S.t.x25mZR) : S.intl.string(S.t["W/bb8f"]);
}
let G = [
    { tier: A.TVA.TIER_3, amount: A.M2T[A.TVA.TIER_3], nextTier: null },
    { tier: A.TVA.TIER_2, amount: A.M2T[A.TVA.TIER_2], nextTier: A.TVA.TIER_3 },
    { tier: A.TVA.TIER_1, amount: A.M2T[A.TVA.TIER_1], nextTier: A.TVA.TIER_2 },
];
function w(e, t) {
    let n = R(t),
        i = p.indexOf(t);
    if (-1 === i) return 0;
    let a = p[i - 1],
        r = null != a ? C(a) : 0,
        s = C(t);
    return Math.max(0, n - e.slice(r, s).length);
}
function x(e, t, n) {
    return -1 === p.indexOf(n) ? 0 : Math.max(0, V(e) - t.length);
}
function V(e) {
    let t = T.OW + (e.premiumFeatures?.additionalSoundSlots ?? 0);
    return Math.max(e.features.has(A.GuildFeatures.MORE_SOUNDBOARD) ? T.xs : T.OW, t);
}
function B(e) {
    let t = I.DEFAULT_EMOJI_SLOTS + (e.premiumFeatures?.additionalEmojiSlots ?? 0);
    return Math.max(e.features.has(A.GuildFeatures.MORE_EMOJI) ? I.EMOJI_MAX_SLOTS_MORE : I.DEFAULT_EMOJI_SLOTS, t);
}
function F(e, t) {
    let n = (0, o.Z)(e.id).available;
    return Math.max(0, A.M2T[t] - n);
}
function k(e) {
    return e.subscription?.status === A.Dmq.CANCELED || e.canceled;
}
function H(e) {
    return m.find((t) => e >= A.M2T[t]) ?? A.TVA.NONE;
}
A.TVA.NONE, A.TVA.TIER_1, A.TVA.TIER_2, A.TVA.TIER_3;

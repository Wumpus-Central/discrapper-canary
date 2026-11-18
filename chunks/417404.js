n.d(t, {
    k5: () => S,
    $5: () => T,
    nj: () => g,
    $s: () => V,
    mq: () => x,
    mH: () => k,
    f: () => D,
    b: () => U,
    wo: () => w,
    sn: () => M,
    cg: () => F,
    _Z: () => b,
    tU: () => R,
    K9: () => N,
    HG: () => L,
    KK: () => O,
    r7: () => y,
    ks: () => C,
    Y7: () => P,
    JX: () => v,
    kr: () => B,
});
var i,
    r,
    a = n(536637),
    s = n.n(a),
    l = (((i = {})[(i.ALL = 1)] = "ALL"), (i[(i.TIERED = 2)] = "TIERED"), i),
    o =
        (((r = {})[(r.NORMAL = 1)] = "NORMAL"),
        (r[(r.PREMIUM_EXTENSION = 2)] = "PREMIUM_EXTENSION"),
        (r[(r.PREMIUM_PERMANENT = 3)] = "PREMIUM_PERMANENT"),
        r),
    d = n(440703),
    c = n(506988),
    u = n(646917),
    _ = n(5377),
    E = n(927813),
    A = n(448645),
    f = n(792996),
    h = n(651892),
    I = n(710969),
    p = n(576761);
let m = new Set([o.PREMIUM_EXTENSION, o.PREMIUM_PERMANENT]);
function g(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === d.l.COLLECTIBLE);
    return t?.type === d.l.COLLECTIBLE ? t : null;
}
function T(e) {
    let t = g(e);
    return null != t && "expiresAtPremium" in t && null != t.expiresAtPremium ? (0, I.ZG)(t.expiresAtPremium) : null;
}
function S(e) {
    let t = g(e);
    if (null == t || !("expiresAt" in t) || null == t.expiresAt) return null;
    let n = new Date(e.expiresAt),
        i = new Date(t.expiresAt),
        r = s()(i).diff(n, "days"),
        a = Math.floor(r / 30) + +(r % 30 >= 25);
    if (a >= 12) {
        let e = Math.floor(a / 12);
        return f.intl.formatToPlainString(f.t.PClsrw, { years: e });
    }
    {
        if (a > 0) return f.intl.formatToPlainString(f.t.kridzK, { months: a });
        let e = s()(i).diff(n, "days");
        if (!(e >= 7)) return f.intl.formatToPlainString(f.t["k2UNz+"], { days: e });
        {
            let t = Math.ceil(e / 7);
            return f.intl.formatToPlainString(f.t.EmoBD2, { weeks: t });
        }
    }
}
function N(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === d.l.FRACTIONAL_PREMIUM);
}
function C(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === d.l.VIRTUAL_CURRENCY);
}
function O(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === d.l.VIRTUAL_CURRENCY),
        n = t?.premiumOrbQuantity;
    return null != n && n > 0;
}
function R(e) {
    return null != g(e);
}
function L(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === d.l.IN_GAME);
}
function y(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === d.l.REWARD_CODE);
}
function D(e) {
    return e.rewardsConfig.rewards.find((e) => e.type === d.l.IN_GAME) ?? null;
}
function b(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === d.l.VIRTUAL_CURRENCY);
    return t?.orbQuantity;
}
function v(e) {
    let t = g(e)?.expirationMode;
    return null != t && m.has(t);
}
function P(e) {
    return v(e) && g(e)?.expirationMode === o.PREMIUM_PERMANENT;
}
function M(e) {
    let t = e.userStatus?.claimedTier ?? 0;
    return "rewardsConfig" in e.config ? e.config.rewardsConfig.rewards[t] : e.config.rewards[t];
}
function U(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === d.l.VIRTUAL_CURRENCY);
    if (t?.type !== d.l.VIRTUAL_CURRENCY) return null;
    let { premiumOrbQuantity: n, orbQuantity: i } = t;
    return null == n || 0 === i ? null : Math.round((n / i) * 100) / 100;
}
function w(e, t) {
    let n = e.rewardsConfig.rewards.find((e) => e.type === d.l.VIRTUAL_CURRENCY);
    if (null == n) return null;
    if (null == t) return n.orbQuantity;
    let i = (0, u.m)(t);
    return O(e) && (0, p.B9)(i) ? (n.premiumOrbQuantity ?? n.orbQuantity) : n.orbQuantity;
}
function G(e, t, n) {
    if (N(e)) {
        let t = e.rewardsConfig.rewards
                .filter((e) => e.type === d.l.FRACTIONAL_PREMIUM)
                .flatMap((e) => Array(e.quantity).fill(e.skuId)),
            n = (0, A.iv)(t),
            i = { days: f.t.fYmirx, hours: f.t["C3RO+g"], minutes: f.t.r77oHc },
            r = (0, _.Tf)(0, n * E.A.Millis.HOUR);
        return f.intl.formatToPlainString(f.t["4SqnVD"], { time: (0, _.uN)(r, i) });
    }
    if (C(e)) {
        let n;
        return ((n = w(e, t) ?? b(e) ?? 0), f.intl.formatToPlainString(f.t["nLXlh+"], { orbAmount: n }));
    }
    let i = (0, h.xv)(e);
    return n ? i.messages.nameWithArticle : i.messages.name;
}
function x(e, t) {
    return G(e, t, !1);
}
function k(e, t) {
    return G(e, t, !0);
}
function F(e) {
    let { quest: t, idx: n } = e;
    if (null == n) return null;
    let i = t.config.rewardsConfig.rewards[n];
    return i.type === d.l.REWARD_CODE ? i : null;
}
function B(e) {
    let {
            quest: { config: t },
        } = e,
        n = t.rewardsConfig;
    return (
        n.assignmentMethod === l.TIERED && n.rewards.length > 0 && n.rewards.every((e) => e.type === d.l.REWARD_CODE)
    );
}
function V(e) {
    let t = e.rewardsConfig.platforms;
    return t.length > 0 ? t[0] : c.pY.CROSS_PLATFORM;
}

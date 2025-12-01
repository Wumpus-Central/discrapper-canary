n.d(t, {
    B3: () => C,
    Bg: () => m,
    FX: () => p,
    K: () => y,
    Kr: () => _,
    LM: () => O,
    Xv: () => g,
    _p: () => S,
    f$: () => v,
    hF: () => I,
    o9: () => N,
    oo: () => P,
    t2: () => w,
    vQ: () => E,
    w8: () => A,
    wj: () => b,
    xN: () => h,
    xn: () => f,
    zG: () => R,
}),
    n(388685);
var r = n(991998),
    i = n(551910),
    a = n(34738),
    o = n(887003);
n(597688);
var s = n(49436),
    l = n(509212),
    c = n(502288),
    u = n(388032);
let d = new Set([a.n.PREMIUM_EXTENSION, a.n.PREMIUM_PERMANENT]);
function f(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === o.w.COLLECTIBLE);
    return (null == t ? void 0 : t.type) === o.w.COLLECTIBLE ? t : null;
}
function p(e) {
    let t = f(e);
    return null != t && "expiresAtPremium" in t && null != t.expiresAtPremium ? (0, l.E8)(t.expiresAtPremium) : null;
}
function _(e) {
    let t = f(e);
    if (null == t || !("expiresAt" in t) || null == t.expiresAt) return null;
    let n = new Date(e.expiresAt),
        i = new Date(t.expiresAt),
        a = (0, r.Z)(i, n),
        o = Math.floor(a / 30) + +(a % 30 >= 25);
    if (o >= 12) {
        let e = Math.floor(o / 12);
        return u.intl.formatToPlainString(u.t.PClsrw, { years: e });
    }
    {
        if (o > 0) return u.intl.formatToPlainString(u.t.kridzK, { months: o });
        let e = (0, r.Z)(i, n);
        if (!(e >= 7)) return u.intl.formatToPlainString(u.t["k2UNz+"], { days: e });
        {
            let t = Math.ceil(e / 7);
            return u.intl.formatToPlainString(u.t.EmoBD2, { weeks: t });
        }
    }
}
function m(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === o.w.FRACTIONAL_PREMIUM);
}
function h(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === o.w.VIRTUAL_CURRENCY);
}
function g(e) {
    return null != f(e);
}
function E(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === o.w.IN_GAME);
}
function b(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === o.w.REWARD_CODE);
}
function y(e) {
    var t;
    return null != (t = e.rewardsConfig.rewards.find((e) => e.type === o.w.IN_GAME)) ? t : null;
}
function O(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === o.w.VIRTUAL_CURRENCY);
    return null == t ? void 0 : t.orbQuantity;
}
function v(e) {
    var t;
    let n = null == (t = f(e)) ? void 0 : t.expirationMode;
    return null != n && d.has(n);
}
function S(e) {
    var t;
    return v(e) && (null == (t = f(e)) ? void 0 : t.expirationMode) === a.n.PREMIUM_PERMANENT;
}
function I(e) {
    var t, n;
    let r = null != (n = null == (t = e.userStatus) ? void 0 : t.claimedTier) ? n : 0;
    return "rewardsConfig" in e.config ? e.config.rewardsConfig.rewards[r] : e.config.rewards[r];
}
function T(e, t) {
    if (m(e)) return (0, c.o8)(e);
    let n = (0, l.M1)(e);
    return t ? n.messages.nameWithArticle : n.messages.name;
}
function A(e) {
    return T(e, !1);
}
function C(e) {
    return T(e, !0);
}
function N(e) {
    let { quest: t, idx: n } = e;
    if (null == n) return null;
    let r = t.config.rewardsConfig.rewards[n];
    return r.type === o.w.REWARD_CODE ? r : null;
}
function P(e) {
    let {
            quest: { config: t },
        } = e,
        n = t.rewardsConfig;
    return (
        n.assignmentMethod === i.j.TIERED && n.rewards.length > 0 && n.rewards.every((e) => e.type === o.w.REWARD_CODE)
    );
}
function R(e) {
    let t = e.rewardsConfig.platforms;
    return t.length > 0 ? t[0] : s.y$.CROSS_PLATFORM;
}
let w = (e) => {
    switch (e) {
        case s.y$.XBOX:
            return u.intl.string(u.t.G84UWZ);
        case s.y$.PLAYSTATION:
            return u.intl.string(u.t["6IeKx2"]);
        case s.y$.SWITCH:
            return u.intl.string(u.t["1pp0su"]);
        case s.y$.PC:
            return u.intl.string(u.t["YK+wUg"]);
        case s.y$.CROSS_PLATFORM:
            return u.intl.string(u.t.UWVbzV);
    }
};

n.d(t, {
    U5: () => O,
    cC: () => A,
    Qv: () => C,
    Jy: () => S,
    Rd: () => R,
    z9: () => T,
    oB: () => m,
    n2: () => N,
    Tn: () => L,
    iB: () => h,
    YY: () => I,
    sD: () => g,
    Aq: () => f,
    VX: () => p,
});
var i,
    r = n(508425),
    a = n(559949),
    s =
        (((i = {})[(i.CUSTOM_INTRO_CARD = 1)] = "CUSTOM_INTRO_CARD"),
        (i[(i.REWARDED_QUEST_SERIES = 2)] = "REWARDED_QUEST_SERIES"),
        i),
    l = n(76573),
    o = n(350972),
    d = n(948325),
    c = n(927813),
    u = n(474090),
    _ = n(211824);
let E = 3 * c.A.Millis.DAY;
function A(e, t) {
    return null != t && (0, u.CC)(t, _.PC[e]) ? _.zv : _.Fg;
}
function f() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
    return e >= _.DD;
}
function h() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
    return e >= _.zv;
}
function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
    return n >= A(e, t);
}
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
    return t >= e - E && t < e;
}
function m(e) {
    return null != e && _.xG.has(e);
}
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
    return I(e, null, t);
}
function T(e) {
    return e === o.aS.HEXAGON;
}
function S(e) {
    return e?.fontId === _.vl;
}
function N(e) {
    let { fontId: t, effectId: n, colors: i } = e;
    return t === _.vl && n === r.z.SOLID && 0 === i.length;
}
function C(e) {
    let { currentDisplayNameStyles: t, previousDisplayNameStyles: n, canUsePremiumProfileCustomization: i } = e;
    if (!i || null == t) return null;
    let s = { ...t, fontId: n?.fontId ?? a.x.DEFAULT };
    return s.fontId === a.x.DEFAULT && s.effectId === r.z.SOLID && 0 === s.colors.length ? null : s;
}
function O(e) {
    let { perk: t, premiumType: n, isCampaignEnabled: i, now: r = Date.now() } = e;
    return !i || h(r) ? _.S9.HIDDEN : I(t, n, r) ? _.S9.LOCKED : _.S9.SELECTABLE;
}
function R(e, t) {
    let n = (0, d.kQ)(e?.perks, _.Sp[t]);
    return null != n && n.includes(l.g$.SOURCE_HEXAGON_CAMPAIGN);
}
function L(e) {
    return null != e && e.id === _.U1 && e.features.includes(s.CUSTOM_INTRO_CARD);
}

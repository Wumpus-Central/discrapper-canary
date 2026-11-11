n.d(t, {
    U5: () => g,
    cC: () => _,
    Qv: () => T,
    Jy: () => p,
    Rd: () => S,
    z9: () => I,
    oB: () => f,
    n2: () => m,
    Tn: () => N,
    YY: () => A,
    sD: () => h,
    Aq: () => E,
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
    c = n(474090),
    u = n(211824);
function _(e, t) {
    return null != t && (0, c.CC)(t, u.PC[e]) ? u.zv : u.Fg;
}
function E() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
    return e >= u.DD;
}
function A(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
    return n >= _(e, t);
}
function f(e) {
    return null != e && u.xG.has(e);
}
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
    return A(e, null, t);
}
function I(e) {
    return e === o.aS.HEXAGON;
}
function p(e) {
    return e?.fontId === u.vl;
}
function m(e) {
    let { fontId: t, effectId: n, colors: i } = e;
    return t === u.vl && n === r.z.SOLID && 0 === i.length;
}
function T(e) {
    let { currentDisplayNameStyles: t, previousDisplayNameStyles: n, canUsePremiumProfileCustomization: i } = e;
    if (!i || null == t) return null;
    let s = { ...t, fontId: n?.fontId ?? a.x.DEFAULT };
    return s.fontId === a.x.DEFAULT && s.effectId === r.z.SOLID && 0 === s.colors.length ? null : s;
}
function g(e) {
    let { perk: t, premiumType: n, isCampaignEnabled: i, now: r = Date.now() } = e;
    return !i ||
        (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
            return e >= u.zv;
        })(r)
        ? u.S9.HIDDEN
        : A(t, n, r)
          ? u.S9.LOCKED
          : u.S9.SELECTABLE;
}
function S(e, t) {
    let n = (0, d.kQ)(e?.perks, u.Sp[t]);
    return null != n && n.includes(l.g$.SOURCE_HEXAGON_CAMPAIGN);
}
function N(e) {
    return null != e && e.id === u.U1 && e.features.includes(s.CUSTOM_INTRO_CARD);
}

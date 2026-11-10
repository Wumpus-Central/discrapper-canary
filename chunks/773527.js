n.d(t, {
    U5: () => h,
    cC: () => d,
    Jy: () => A,
    Rd: () => I,
    z9: () => E,
    oB: () => u,
    n2: () => f,
    YY: () => c,
    sD: () => _,
});
var i = n(508425);
n(559949);
var r = n(76573),
    a = n(350972),
    s = n(948325),
    l = n(474090),
    o = n(211824);
function d(e, t) {
    return null != t && (0, l.CC)(t, o.PC[e]) ? o.zv : o.Fg;
}
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
    return n >= d(e, t);
}
function u(e) {
    return null != e && o.xG.has(e);
}
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
    return c(e, null, t);
}
function E(e) {
    return e === a.aS.HEXAGON;
}
function A(e) {
    return e?.fontId === o.vl;
}
function f(e) {
    let { fontId: t, effectId: n, colors: r } = e;
    return t === o.vl && n === i.z.SOLID && 0 === r.length;
}
function h(e) {
    let { perk: t, premiumType: n, isCampaignEnabled: i, now: r = Date.now() } = e;
    return !i ||
        (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
            return e >= o.zv;
        })(r)
        ? o.S9.HIDDEN
        : c(t, n, r)
          ? o.S9.LOCKED
          : o.S9.SELECTABLE;
}
function I(e, t) {
    let n = (0, s.kQ)(e?.perks, o.Sp[t]);
    return null != n && n.includes(r.g$.SOURCE_HEXAGON_CAMPAIGN);
}

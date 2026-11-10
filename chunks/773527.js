(n.d(t, { U5: () => A, cC: () => o, Jy: () => E, Rd: () => f, z9: () => _, oB: () => c, YY: () => d, sD: () => u }),
    n(508425),
    n(559949));
var i = n(76573),
    r = n(350972),
    a = n(948325),
    s = n(474090),
    l = n(211824);
function o(e, t) {
    return null != t && (0, s.CC)(t, l.PC[e]) ? l.zv : l.Fg;
}
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
    return n >= o(e, t);
}
function c(e) {
    return null != e && l.xG.has(e);
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
    return d(e, null, t);
}
function _(e) {
    return e === r.aS.HEXAGON;
}
function E(e) {
    return e?.fontId === l.vl;
}
function A(e) {
    let { perk: t, premiumType: n, isCampaignEnabled: i, now: r = Date.now() } = e;
    return !i ||
        (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
            return e >= l.zv;
        })(r)
        ? l.S9.HIDDEN
        : d(t, n, r)
          ? l.S9.LOCKED
          : l.S9.SELECTABLE;
}
function f(e, t) {
    let n = (0, a.kQ)(e?.perks, l.Sp[t]);
    return null != n && n.includes(i.g$.SOURCE_HEXAGON_CAMPAIGN);
}

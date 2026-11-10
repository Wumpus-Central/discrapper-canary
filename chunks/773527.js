(n.d(t, { U5: () => E, Jy: () => _, Rd: () => A, z9: () => u, oB: () => d, YY: () => o, sD: () => c }),
    n(508425),
    n(559949));
var i = n(76573),
    r = n(350972),
    a = n(948325),
    s = n(474090),
    l = n(211824);
function o(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
    return n >= (null != t && (0, s.CC)(t, l.PC[e]) ? l.zv : l.Fg);
}
function d(e) {
    return null != e && l.xG.has(e);
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
    return o(e, null, t);
}
function u(e) {
    return e === r.aS.HEXAGON;
}
function _(e) {
    return e?.fontId === l.vl;
}
function E(e) {
    let { perk: t, premiumType: n, isCampaignEnabled: i, now: r = Date.now() } = e;
    return !i ||
        (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
            return e >= l.zv;
        })(r)
        ? l.S9.HIDDEN
        : o(t, n, r)
          ? l.S9.LOCKED
          : l.S9.SELECTABLE;
}
function A(e, t) {
    let n = (0, a.kQ)(e?.perks, l.Sp[t]);
    return null != n && n.includes(i.g$.SOURCE_HEXAGON_CAMPAIGN);
}

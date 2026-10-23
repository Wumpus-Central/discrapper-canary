(n.d(t, { Rd: () => c, U5: () => d, YY: () => l, j5: () => u, oB: () => o }), n(508425));
var i = n(441574),
    r = n(349871),
    a = n(474090),
    s = n(652329);
function l(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
    return n >= (null != t && (0, a.CC)(t, s.PC[e]) ? s.zv : s.Fg);
}
function o(e) {
    return null != e && s.xG.has(e);
}
function d(e) {
    let { perk: t, premiumType: n, isCampaignEnabled: i, now: r = Date.now() } = e;
    return !i ||
        (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
            return e >= s.zv;
        })(r)
        ? s.S9.HIDDEN
        : l(t, n, r)
          ? s.S9.LOCKED
          : s.S9.SELECTABLE;
}
function c(e, t) {
    let n = (0, r.kQ)(e?.perks, s.Sp[t]);
    return null != n && n.includes(i.g$.SOURCE_HEXAGON_CAMPAIGN);
}
function u(e, t) {
    let n = (0, r.kQ)(e?.perks, s.Sp[t]);
    return null != n && n.length > 0 && n.every((e) => e === i.g$.SOURCE_HEXAGON_CAMPAIGN);
}

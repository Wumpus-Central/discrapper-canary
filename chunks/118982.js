l.d(t, { dI: () => m, k3: () => u, x0: () => x });
var n = l(811996),
    a = l(773669),
    r = l(832163);
l(652215);
var s = l(924919),
    i = l(105292);
let o = {
        [n.U.DESKTOP]: "PC",
        [n.U.XBOX]: "Xbox",
        [n.U.PLAYSTATION]: "PlayStation",
        [n.U.SWITCH]: "Switch",
        [n.U.APPLE_ARCADE]: "Apple Arcade",
        [n.U.NETFLIX]: "Netflix",
        [n.U.AMAZON_KIDS_PLUS]: "Amazon Kids+",
    },
    c = [n.U.PLAYSTATION];
function d(e) {
    let t = (function (e) {
        if (null == e) return c;
        let t = r.A.getConfigForApplicationId(e);
        return null == t ? c : t.excludedPlatforms;
    })(e);
    return 0 === t.length
        ? ""
        : i.intl.formatToPlainString(s.default["5h8p5P"], {
              platforms: new Intl.ListFormat(a.default.locale).format(t.map((e) => o[e])),
              count: t.length,
          });
}
function u(e) {
    return i.intl.format(s.default.Q0dHYO, { platforms_info: d(e?.id) });
}
function m(e) {
    let t = e.name;
    return i.intl.format(s.default.fO4b1C, { applicationName: t, platforms_info: d(e.id) });
}
function x(e, t) {
    let { hasAlreadyLinked: l } = t,
        n = e.name,
        a = l ? s.default.yqAKVO : s.default.vyAtfo;
    return i.intl.format(a, { applicationName: n, platforms_info: d(e.id) });
}

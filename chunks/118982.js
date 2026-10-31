l.d(t, { dI: () => m, k3: () => u, x0: () => x });
var a = l(811996),
    n = l(773669),
    r = l(832163);
l(652215);
var s = l(961270),
    i = l(105292);
let o = {
        [a.U.DESKTOP]: "PC",
        [a.U.XBOX]: "Xbox",
        [a.U.PLAYSTATION]: "PlayStation",
        [a.U.SWITCH]: "Switch",
        [a.U.APPLE_ARCADE]: "Apple Arcade",
        [a.U.NETFLIX]: "Netflix",
        [a.U.AMAZON_KIDS_PLUS]: "Amazon Kids+",
    },
    c = [a.U.PLAYSTATION];
function d(e) {
    let t = (function (e) {
        if (null == e) return c;
        let t = r.A.getConfigForApplicationId(e);
        return null == t ? c : t.excludedPlatforms;
    })(e);
    return 0 === t.length
        ? ""
        : i.intl.formatToPlainString(s.default["5h8p5P"], {
              platforms: new Intl.ListFormat(n.default.locale).format(t.map((e) => o[e])),
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
        a = e.name,
        n = l ? s.default.yqAKVO : s.default.vyAtfo;
    return i.intl.format(n, { applicationName: a, platforms_info: d(e.id) });
}

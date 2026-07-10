l.d(t, { dI: () => m, k3: () => c, x0: () => x });
var n = l(811996),
    r = l(773669),
    i = l(832163);
l(652215);
var a = l(430825),
    s = l(375708);
let u = {
        [n.U.DESKTOP]: "PC",
        [n.U.XBOX]: "Xbox",
        [n.U.PLAYSTATION]: "PlayStation",
        [n.U.SWITCH]: "Switch",
        [n.U.APPLE_ARCADE]: "Apple Arcade",
        [n.U.NETFLIX]: "Netflix",
        [n.U.AMAZON_KIDS_PLUS]: "Amazon Kids+",
    },
    o = [n.U.PLAYSTATION];
function d(e) {
    let t = (function (e) {
        if (null == e) return o;
        let t = i.A.getConfigForApplicationId(e);
        return null == t ? o : t.excludedPlatforms;
    })(e);
    return 0 === t.length
        ? ""
        : s.intl.formatToPlainString(a.default["5h8p5P"], {
              platforms: new Intl.ListFormat(r.default.locale).format(t.map((e) => u[e])),
              count: t.length,
          });
}
function c(e) {
    return s.intl.format(a.default.Q0dHYO, { platforms_info: d(e?.id) });
}
function m(e) {
    let t = e.name;
    return s.intl.format(a.default.fO4b1C, { applicationName: t, platforms_info: d(e.id) });
}
function x(e, t) {
    let { hasAlreadyLinked: l } = t,
        n = e.name,
        r = l ? a.default.yqAKVO : a.default.vyAtfo;
    return s.intl.format(r, { applicationName: n, platforms_info: d(e.id) });
}

l.d(t, { dI: () => m, k3: () => d, x0: () => x });
var n = l(811996),
    r = l(773669),
    a = l(832163);
l(652215);
var i = l(206285),
    s = l(375708);
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
function u(e) {
    let t = (function (e) {
        if (null == e) return c;
        let t = a.A.getConfigForApplicationId(e);
        return null == t ? c : t.excludedPlatforms;
    })(e);
    return 0 === t.length
        ? ""
        : s.intl.formatToPlainString(i.default["5h8p5P"], {
              platforms: new Intl.ListFormat(r.default.locale).format(t.map((e) => o[e])),
              count: t.length,
          });
}
function d(e) {
    return s.intl.format(i.default.Q0dHYO, { platforms_info: u(e?.id) });
}
function m(e) {
    let t = e.name;
    return s.intl.format(i.default.fO4b1C, { applicationName: t, platforms_info: u(e.id) });
}
function x(e, t) {
    let { hasAlreadyLinked: l } = t,
        n = e.name,
        r = l ? i.default.yqAKVO : i.default.vyAtfo;
    return s.intl.format(r, { applicationName: n, platforms_info: u(e.id) });
}

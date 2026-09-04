n.d(t, { dI: () => m, k3: () => d, x0: () => x });
var l = n(811996),
    r = n(773669),
    a = n(832163);
n(652215);
var i = n(206285),
    s = n(375708);
let o = {
        [l.U.DESKTOP]: "PC",
        [l.U.XBOX]: "Xbox",
        [l.U.PLAYSTATION]: "PlayStation",
        [l.U.SWITCH]: "Switch",
        [l.U.APPLE_ARCADE]: "Apple Arcade",
        [l.U.NETFLIX]: "Netflix",
        [l.U.AMAZON_KIDS_PLUS]: "Amazon Kids+",
    },
    u = [l.U.PLAYSTATION];
function c(e) {
    let t = (function (e) {
        if (null == e) return u;
        let t = a.A.getConfigForApplicationId(e);
        return null == t ? u : t.excludedPlatforms;
    })(e);
    return 0 === t.length
        ? ""
        : s.intl.formatToPlainString(i.default["5h8p5P"], {
              platforms: new Intl.ListFormat(r.default.locale).format(t.map((e) => o[e])),
              count: t.length,
          });
}
function d(e) {
    return s.intl.format(i.default.Q0dHYO, { platforms_info: c(e?.id) });
}
function m(e) {
    let t = e.name;
    return s.intl.format(i.default.fO4b1C, { applicationName: t, platforms_info: c(e.id) });
}
function x(e, t) {
    let { hasAlreadyLinked: n } = t,
        l = e.name,
        r = n ? i.default.yqAKVO : i.default.vyAtfo;
    return s.intl.format(r, { applicationName: l, platforms_info: c(e.id) });
}

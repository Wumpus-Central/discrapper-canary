n.d(t, { dI: () => m, k3: () => u, x0: () => x });
var l = n(811996),
    a = n(773669),
    r = n(832163);
n(652215);
var s = n(621547),
    i = n(660183);
let o = {
        [l.U.DESKTOP]: "PC",
        [l.U.XBOX]: "Xbox",
        [l.U.PLAYSTATION]: "PlayStation",
        [l.U.SWITCH]: "Switch",
        [l.U.APPLE_ARCADE]: "Apple Arcade",
        [l.U.NETFLIX]: "Netflix",
        [l.U.AMAZON_KIDS_PLUS]: "Amazon Kids+",
    },
    c = [l.U.PLAYSTATION];
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
    let { hasAlreadyLinked: n } = t,
        l = e.name,
        a = n ? s.default.yqAKVO : s.default.vyAtfo;
    return i.intl.format(a, { applicationName: l, platforms_info: d(e.id) });
}

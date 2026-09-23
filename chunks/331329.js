i.d(n, { k3: () => A, x0: () => p, dI: () => s });
var a,
    e =
        (((a = {}).DESKTOP = "desktop"),
        (a.XBOX = "xbox"),
        (a.PLAYSTATION = "playstation"),
        (a.SWITCH = "switch"),
        (a.APPLE_ARCADE = "apple arcade"),
        (a.NETFLIX = "netflix"),
        (a.AMAZON_KIDS_PLUS = "amazon kids+"),
        a),
    l = i(773669),
    o = i(832163);
i(652215);
var r = i(206285),
    f = i(375708);
let d = {
        [e.DESKTOP]: "PC",
        [e.XBOX]: "Xbox",
        [e.PLAYSTATION]: "PlayStation",
        [e.SWITCH]: "Switch",
        [e.APPLE_ARCADE]: "Apple Arcade",
        [e.NETFLIX]: "Netflix",
        [e.AMAZON_KIDS_PLUS]: "Amazon Kids+",
    },
    u = [e.PLAYSTATION];
function c(t) {
    let n = (function (t) {
        if (null == t) return u;
        let n = o.A.getConfigForApplicationId(t);
        return null == n ? u : n.excludedPlatforms;
    })(t);
    return 0 === n.length
        ? ""
        : f.intl.formatToPlainString(r.default["5h8p5P"], {
              platforms: new Intl.ListFormat(l.default.locale).format(n.map((t) => d[t])),
              count: n.length,
          });
}
function A(t) {
    return f.intl.format(r.default.Q0dHYO, { platforms_info: c(t?.id) });
}
function s(t) {
    let n = t.name;
    return f.intl.format(r.default.fO4b1C, { applicationName: n, platforms_info: c(t.id) });
}
function p(t, n) {
    let { hasAlreadyLinked: i } = n,
        a = t.name,
        e = i ? r.default.yqAKVO : r.default.vyAtfo;
    return f.intl.format(e, { applicationName: a, platforms_info: c(t.id) });
}

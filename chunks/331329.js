a.d(n, { _z: () => m, x0: () => c, dI: () => s, k3: () => p });
var l,
    e =
        (((l = {}).DESKTOP = "desktop"),
        (l.XBOX = "xbox"),
        (l.PLAYSTATION = "playstation"),
        (l.SWITCH = "switch"),
        (l.APPLE_ARCADE = "apple arcade"),
        (l.NETFLIX = "netflix"),
        (l.AMAZON_KIDS_PLUS = "amazon kids+"),
        l),
    o = a(773669),
    i = a(832163);
a(652215);
var r = a(430825),
    f = a(375708);
let u = {
        [e.DESKTOP]: "PC",
        [e.XBOX]: "Xbox",
        [e.PLAYSTATION]: "PlayStation",
        [e.SWITCH]: "Switch",
        [e.APPLE_ARCADE]: "Apple Arcade",
        [e.NETFLIX]: "Netflix",
        [e.AMAZON_KIDS_PLUS]: "Amazon Kids+",
    },
    d = [e.PLAYSTATION];
function A(t) {
    let n = (function (t) {
        if (null == t) return d;
        let n = i.A.getConfigForApplicationId(t);
        return null == n ? d : n.excludedPlatforms;
    })(t);
    return 0 === n.length
        ? ""
        : f.intl.formatToPlainString(r.default["5h8p5P"], {
              platforms: new Intl.ListFormat(o.default.locale).format(n.map((t) => u[t])),
              count: n.length,
          });
}
function p(t) {
    return f.intl.format(r.default.Q0dHYO, { platforms_info: A(t?.id) });
}
function m(t, n) {
    let { shouldAppendDisclaimer: a } = n,
        l = t?.name ?? "game's";
    return a
        ? f.intl.format(r.default["3ah/a2"], { applicationName: l, platforms_info: p(t) })
        : f.intl.format(f.t.CVITgq, { applicationName: l });
}
function s(t) {
    let n = t.name;
    return f.intl.format(r.default.fO4b1C, { applicationName: n, platforms_info: A(t.id) });
}
function c(t, n) {
    let { hasAlreadyLinked: a } = n,
        l = t.name,
        e = a ? r.default.yqAKVO : r.default.vyAtfo;
    return f.intl.format(e, { applicationName: l, platforms_info: A(t.id) });
}

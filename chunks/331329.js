"use strict";
n.d(t, { _z: () => h, x0: () => p, dI: () => f, k3: () => _ });
var i,
    r =
        (((i = {}).DESKTOP = "desktop"),
        (i.XBOX = "xbox"),
        (i.PLAYSTATION = "playstation"),
        (i.SWITCH = "switch"),
        (i.APPLE_ARCADE = "apple arcade"),
        (i.NETFLIX = "netflix"),
        (i.AMAZON_KIDS_PLUS = "amazon kids+"),
        i),
    s = n(773669),
    a = n(832163);
n(652215);
var o = n(580350),
    l = n(375708);
let u = {
        [r.DESKTOP]: "PC",
        [r.XBOX]: "Xbox",
        [r.PLAYSTATION]: "PlayStation",
        [r.SWITCH]: "Switch",
        [r.APPLE_ARCADE]: "Apple Arcade",
        [r.NETFLIX]: "Netflix",
        [r.AMAZON_KIDS_PLUS]: "Amazon Kids+",
    },
    c = [r.PLAYSTATION];
function d(e) {
    let t = (function (e) {
        if (null == e) return c;
        let t = a.A.getConfigForApplicationId(e);
        return null == t ? c : t.excludedPlatforms;
    })(e);
    return 0 === t.length
        ? ""
        : l.intl.formatToPlainString(o.default["5h8p5P"], {
              platforms: new Intl.ListFormat(s.default.locale).format(t.map((e) => u[e])),
              count: t.length,
          });
}
function _(e) {
    return l.intl.format(o.default.Q0dHYO, { platforms_info: d(e?.id) });
}
function h(e, t) {
    let { shouldAppendDisclaimer: n } = t,
        i = e?.name ?? "game's";
    return n
        ? l.intl.format(o.default["3ah/a2"], { applicationName: i, platforms_info: _(e) })
        : l.intl.format(l.t.CVITgq, { applicationName: i });
}
function f(e) {
    let t = e.name;
    return l.intl.format(o.default.fO4b1C, { applicationName: t, platforms_info: d(e.id) });
}
function p(e, t) {
    let { hasAlreadyLinked: n } = t,
        i = e.name,
        r = n ? o.default.yqAKVO : o.default.vyAtfo;
    return l.intl.format(r, { applicationName: i, platforms_info: d(e.id) });
}

"use strict";
n.d(t, { _z: () => _, dI: () => h, k3: () => d, x0: () => f });
var i = n(811996),
    r = n(773669),
    s = n(832163);
n(652215);
var a = n(430825),
    o = n(375708);
let l = {
        [i.U.DESKTOP]: "PC",
        [i.U.XBOX]: "Xbox",
        [i.U.PLAYSTATION]: "PlayStation",
        [i.U.SWITCH]: "Switch",
        [i.U.APPLE_ARCADE]: "Apple Arcade",
        [i.U.NETFLIX]: "Netflix",
        [i.U.AMAZON_KIDS_PLUS]: "Amazon Kids+",
    },
    u = [i.U.PLAYSTATION];
function c(e) {
    let t = (function (e) {
        if (null == e) return u;
        let t = s.A.getConfigForApplicationId(e);
        return null == t ? u : t.excludedPlatforms;
    })(e);
    return 0 === t.length
        ? ""
        : o.intl.formatToPlainString(a.default["5h8p5P"], {
              platforms: new Intl.ListFormat(r.default.locale).format(t.map((e) => l[e])),
              count: t.length,
          });
}
function d(e) {
    return o.intl.format(a.default.Q0dHYO, { platforms_info: c(e?.id) });
}
function _(e, t) {
    let { shouldAppendDisclaimer: n } = t,
        i = e?.name ?? "game's";
    return n
        ? o.intl.format(a.default["3ah/a2"], { applicationName: i, platforms_info: d(e) })
        : o.intl.format(o.t.CVITgq, { applicationName: i });
}
function h(e) {
    let t = e.name;
    return o.intl.format(a.default.fO4b1C, { applicationName: t, platforms_info: c(e.id) });
}
function f(e, t) {
    let { hasAlreadyLinked: n } = t,
        i = e.name,
        r = n ? a.default.yqAKVO : a.default.vyAtfo;
    return o.intl.format(r, { applicationName: i, platforms_info: c(e.id) });
}

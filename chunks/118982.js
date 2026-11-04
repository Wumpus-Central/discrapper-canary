var e = i(811996),
    l = i(773669),
    a = i(832163);
i(652215);
var o = i(25082),
    r = i(792996);
let f = {
        [e.U.DESKTOP]: "PC",
        [e.U.XBOX]: "Xbox",
        [e.U.PLAYSTATION]: "PlayStation",
        [e.U.SWITCH]: "Switch",
        [e.U.APPLE_ARCADE]: "Apple Arcade",
        [e.U.NETFLIX]: "Netflix",
        [e.U.AMAZON_KIDS_PLUS]: "Amazon Kids+",
    },
    u = [e.U.PLAYSTATION];
function d(t) {
    let n = (function (t) {
        if (null == t) return u;
        let n = a.A.getConfigForApplicationId(t);
        return null == n ? u : n.excludedPlatforms;
    })(t);
    return 0 === n.length
        ? ""
        : r.intl.formatToPlainString(o.default["5h8p5P"], {
              platforms: new Intl.ListFormat(l.default.locale).format(n.map((t) => f[t])),
              count: n.length,
          });
}
i.d(
    n,
    {},
    {
        dI: function (t) {
            let n = t.name;
            return r.intl.format(o.default.fO4b1C, { applicationName: n, platforms_info: d(t.id) });
        },
        k3: function (t) {
            return r.intl.format(o.default.Q0dHYO, { platforms_info: d(t?.id) });
        },
        x0: function (t, n) {
            let { hasAlreadyLinked: i } = n,
                e = t.name,
                l = i ? o.default.yqAKVO : o.default.vyAtfo;
            return r.intl.format(l, { applicationName: e, platforms_info: d(t.id) });
        },
    },
);

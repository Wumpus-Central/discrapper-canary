i.d(n, { _z: () => m, x0: () => c, dI: () => p, k3: () => s });
var o,
    r = (((o = {}).DESKTOP = "desktop"), (o.XBOX = "xbox"), (o.PLAYSTATION = "playstation"), o),
    a = i(375708),
    l = i(832163);
i(652215);
var f = i(430825);
let e = { [r.DESKTOP]: "PC", [r.XBOX]: "Xbox", [r.PLAYSTATION]: "PlayStation" },
    u = [r.PLAYSTATION];
function d(t) {
    var n;
    let i,
        o = (function (t) {
            if (null == t) return u;
            let n = l.A.getConfigForApplicationId(t);
            return null == n ? u : n.excludedPlatforms;
        })(t);
    return 0 === o.length
        ? ""
        : a.intl.formatToPlainString(f.default["5h8p5P"], {
              platforms:
                  ((n = o.map((t) => e[t])),
                  0 === (i = void 0 ?? n.length)
                      ? ""
                      : 1 === i
                        ? a.intl.formatToPlainString(a.t["8s9z8P"], { first: n[0] })
                        : 2 === i
                          ? a.intl.formatToPlainString(a.t["i0K/dw"], { first: n[0], second: n[1] })
                          : 3 === i
                            ? a.intl.formatToPlainString(a.t["/KSOKY"], { first: n[0], second: n[1], third: n[2] })
                            : a.intl.formatToPlainString(a.t.xpU76u, {
                                  first: n[0],
                                  second: n[1],
                                  third: n[2],
                                  count: i - 3,
                              })),
              count: o.length,
          });
}
function s(t) {
    return a.intl.format(f.default.Q0dHYO, { platforms_info: d(t?.id) });
}
function m(t, n) {
    let { shouldAppendDisclaimer: i } = n,
        o = t?.name ?? "game's";
    return i
        ? a.intl.format(f.default["3ah/a2"], { applicationName: o, platforms_info: s(t) })
        : a.intl.format(a.t.CVITgq, { applicationName: o });
}
function p(t) {
    let n = t.name;
    return a.intl.format(f.default.fO4b1C, { applicationName: n, platforms_info: d(t.id) });
}
function c(t, n) {
    let { hasAlreadyLinked: i } = n,
        o = t.name,
        r = i ? f.default.yqAKVO : f.default.vyAtfo;
    return a.intl.format(r, { applicationName: o, platforms_info: d(t.id) });
}

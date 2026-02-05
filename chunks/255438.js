"use strict";
n.d(t, { XF: () => i, Xq: () => l, up: () => u });
var r = n(985018);
let i = 1024,
    a = 1024,
    s = 1024,
    o = { useKibibytes: !1, showDecimalForGB: !0, useSpace: !0 };
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
        n = t.useKibibytes ? a : 1e3,
        i = t.useKibibytes ? s : 1e3,
        l = Math.ceil(e / n);
    if (l < i)
        return t.useSpace
            ? r.intl.formatToPlainString(r.t.cS889N, { size: l })
            : r.intl.formatToPlainString(r.t.pIn7Af, { size: l });
    let u = l / i;
    return (
        (u = t.showDecimalForGB ? Math.round(10 * u) / 10 : Math.round(u)),
        t.useSpace
            ? r.intl.formatToPlainString(r.t.yhEXX7, { size: u })
            : r.intl.formatToPlainString(r.t.TbMX9D, { size: u })
    );
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
        n = t.useKibibytes ? i : 1e3,
        s = t.useKibibytes ? a : 1e3,
        u = e / n;
    return u / s >= 1
        ? l(u, t)
        : t.useSpace
          ? r.intl.formatToPlainString(r.t.bTzRR6, { size: Math.ceil(u) })
          : r.intl.formatToPlainString(r.t.kEk9pr, { size: Math.ceil(u) });
}

"use strict";
n.d(t, { XF: () => i, Xq: () => a, up: () => o });
var r = n(985018);
let i = 1024,
    s = { useKibibytes: !1, showDecimalForGB: !0, useSpace: !0 };
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        n = t.useKibibytes ? 1024 : 1e3,
        i = t.useKibibytes ? 1024 : 1e3,
        a = Math.ceil(e / n);
    if (a < i)
        return t.useSpace
            ? r.intl.formatToPlainString(r.t.cS889N, { size: a })
            : r.intl.formatToPlainString(r.t.pIn7Af, { size: a });
    let o = a / i;
    return (
        (o = t.showDecimalForGB ? Math.round(10 * o) / 10 : Math.round(o)),
        t.useSpace
            ? r.intl.formatToPlainString(r.t.yhEXX7, { size: o })
            : r.intl.formatToPlainString(r.t.TbMX9D, { size: o })
    );
}
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        n = t.useKibibytes ? i : 1e3,
        o = t.useKibibytes ? 1024 : 1e3,
        l = e / n;
    return l / o >= 1
        ? a(l, t)
        : t.useSpace
          ? r.intl.formatToPlainString(r.t.bTzRR6, { size: Math.ceil(l) })
          : r.intl.formatToPlainString(r.t.kEk9pr, { size: Math.ceil(l) });
}

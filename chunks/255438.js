"use strict";
n.d(t, { XF: () => r, Xq: () => s, up: () => l });
var i = n(375708);
let r = 1024,
    a = { useKibibytes: !1, showDecimalForGB: !0, useSpace: !0 };
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        n = t.useKibibytes ? 1024 : 1e3,
        r = t.useKibibytes ? 1024 : 1e3,
        s = Math.ceil(e / n);
    if (s < r)
        return t.useSpace
            ? i.intl.formatToPlainString(i.t.cS889N, { size: s })
            : i.intl.formatToPlainString(i.t.pIn7Af, { size: s });
    let l = s / r;
    return (
        (l = t.showDecimalForGB ? Math.round(10 * l) / 10 : Math.round(l)),
        t.useSpace
            ? i.intl.formatToPlainString(i.t.yhEXX7, { size: l })
            : i.intl.formatToPlainString(i.t.TbMX9D, { size: l })
    );
}
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        n = t.useKibibytes ? r : 1e3,
        l = t.useKibibytes ? 1024 : 1e3,
        o = e / n;
    return o / l >= 1
        ? s(o, t)
        : t.useSpace
          ? i.intl.formatToPlainString(i.t.bTzRR6, { size: Math.ceil(o) })
          : i.intl.formatToPlainString(i.t.kEk9pr, { size: Math.ceil(o) });
}

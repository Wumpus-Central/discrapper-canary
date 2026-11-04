var i = n(792996);
let r = { useKibibytes: !1, showDecimalForGB: !0, useSpace: !0 };
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r,
        n = t.useKibibytes ? 1024 : 1e3,
        a = t.useKibibytes ? 1024 : 1e3,
        s = Math.ceil(e / n);
    if (s < a)
        return t.useSpace
            ? i.intl.formatToPlainString(i.t.cS889N, { size: s })
            : i.intl.formatToPlainString(i.t.pIn7Af, { size: s });
    let l = s / a;
    return (
        (l = t.showDecimalForGB ? Math.round(10 * l) / 10 : Math.round(l)),
        t.useSpace
            ? i.intl.formatToPlainString(i.t.yhEXX7, { size: l })
            : i.intl.formatToPlainString(i.t.TbMX9D, { size: l })
    );
}
n.d(
    t,
    {},
    {
        Xq: a,
        up: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r,
                n = t.useKibibytes ? 1024 : 1e3,
                s = t.useKibibytes ? 1024 : 1e3,
                l = e / n;
            return l / s >= 1
                ? a(l, t)
                : t.useSpace
                  ? i.intl.formatToPlainString(i.t.bTzRR6, { size: Math.ceil(l) })
                  : i.intl.formatToPlainString(i.t.kEk9pr, { size: Math.ceil(l) });
        },
    },
);

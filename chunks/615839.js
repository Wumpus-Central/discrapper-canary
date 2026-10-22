a.d(n, { C7: () => u, MB: () => i, Us: () => s, nY: () => l });
var e = a(248675),
    r = a(105292);
function i(t) {
    let n = Math.max(1, Math.round(t / 1e3));
    if (n < 60) return r.intl.formatToPlainString(e.default["Cn+5go"], { count: n });
    let a = Math.round(n / 60);
    return a < 60
        ? r.intl.formatToPlainString(e.default.lUCXD2, { count: a })
        : r.intl.formatToPlainString(e.default.Y1OsON, { hours: Math.floor(a / 60), minutes: a % 60 });
}
function l(t) {
    let n = Math.max(1, Math.round(t / 1e3));
    if (n < 60) return r.intl.formatToPlainString(e.default.yUXWd9, { count: n });
    let a = Math.round(n / 60);
    return a < 60
        ? r.intl.formatToPlainString(e.default.v7Gf5b, { count: a })
        : r.intl.formatToPlainString(e.default.kyqrd4, { hours: Math.floor(a / 60), minutes: a % 60 });
}
function o(t) {
    let n = Number.isFinite(t) ? Math.max(0, Math.floor(t / 1e3)) : 0;
    return { hours: Math.floor(n / 3600), minutes: Math.floor(n / 60) % 60, seconds: n % 60 };
}
function u(t) {
    let { hours: n, minutes: a, seconds: i } = o(t);
    return n > 0
        ? r.intl.formatToPlainString(e.default["rIbuN/"], { hours: n, minutes: a, seconds: i })
        : a > 0
          ? r.intl.formatToPlainString(e.default["/D79R7"], { minutes: a, seconds: i })
          : r.intl.formatToPlainString(e.default.KrqS00, { seconds: i });
}
function s(t) {
    let { hours: n, minutes: a } = o(t);
    return n > 0
        ? r.intl.formatToPlainString(e.default.HEBIhT, { hours: n, minutes: a })
        : a > 0
          ? r.intl.formatToPlainString(e.default.vvpiqt, { minutes: a })
          : r.intl.string(e.default.dCg2BH);
}

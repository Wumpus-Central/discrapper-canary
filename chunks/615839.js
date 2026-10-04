n.d(t, { C7: () => u, MB: () => i, Us: () => d, nY: () => r });
var l = n(248675),
    a = n(375708);
function i(e) {
    let t = Math.max(1, Math.round(e / 1e3));
    if (t < 60) return a.intl.formatToPlainString(l.default["Cn+5go"], { count: t });
    let n = Math.round(t / 60);
    return n < 60
        ? a.intl.formatToPlainString(l.default.lUCXD2, { count: n })
        : a.intl.formatToPlainString(l.default.Y1OsON, { hours: Math.floor(n / 60), minutes: n % 60 });
}
function r(e) {
    let t = Math.max(1, Math.round(e / 1e3));
    if (t < 60) return a.intl.formatToPlainString(l.default.yUXWd9, { count: t });
    let n = Math.round(t / 60);
    return n < 60
        ? a.intl.formatToPlainString(l.default.v7Gf5b, { count: n })
        : a.intl.formatToPlainString(l.default.kyqrd4, { hours: Math.floor(n / 60), minutes: n % 60 });
}
function s(e) {
    let t = Number.isFinite(e) ? Math.max(0, Math.floor(e / 1e3)) : 0;
    return { hours: Math.floor(t / 3600), minutes: Math.floor(t / 60) % 60, seconds: t % 60 };
}
function u(e) {
    let { hours: t, minutes: n, seconds: i } = s(e);
    return t > 0
        ? a.intl.formatToPlainString(l.default["rIbuN/"], { hours: t, minutes: n, seconds: i })
        : n > 0
          ? a.intl.formatToPlainString(l.default["/D79R7"], { minutes: n, seconds: i })
          : a.intl.formatToPlainString(l.default.KrqS00, { seconds: i });
}
function d(e) {
    let { hours: t, minutes: n } = s(e);
    return t > 0
        ? a.intl.formatToPlainString(l.default.HEBIhT, { hours: t, minutes: n })
        : n > 0
          ? a.intl.formatToPlainString(l.default.vvpiqt, { minutes: n })
          : a.intl.string(l.default.dCg2BH);
}

n.d(t, { C7: () => s, MB: () => a, Us: () => o, nY: () => u });
var e = n(809526),
    i = n(105292);
function a(l) {
    let t = Math.max(1, Math.round(l / 1e3));
    if (t < 60) return i.intl.formatToPlainString(e.default["Cn+5go"], { count: t });
    let n = Math.round(t / 60);
    return n < 60
        ? i.intl.formatToPlainString(e.default.lUCXD2, { count: n })
        : i.intl.formatToPlainString(e.default.Y1OsON, { hours: Math.floor(n / 60), minutes: n % 60 });
}
function u(l) {
    let t = Math.max(1, Math.round(l / 1e3));
    if (t < 60) return i.intl.formatToPlainString(e.default.yUXWd9, { count: t });
    let n = Math.round(t / 60);
    return n < 60
        ? i.intl.formatToPlainString(e.default.v7Gf5b, { count: n })
        : i.intl.formatToPlainString(e.default.kyqrd4, { hours: Math.floor(n / 60), minutes: n % 60 });
}
function r(l) {
    let t = Number.isFinite(l) ? Math.max(0, Math.floor(l / 1e3)) : 0;
    return { hours: Math.floor(t / 3600), minutes: Math.floor(t / 60) % 60, seconds: t % 60 };
}
function s(l) {
    let { hours: t, minutes: n, seconds: a } = r(l);
    return t > 0
        ? i.intl.formatToPlainString(e.default["rIbuN/"], { hours: t, minutes: n, seconds: a })
        : n > 0
          ? i.intl.formatToPlainString(e.default["/D79R7"], { minutes: n, seconds: a })
          : i.intl.formatToPlainString(e.default.KrqS00, { seconds: a });
}
function o(l) {
    let { hours: t, minutes: n } = r(l);
    return t > 0
        ? i.intl.formatToPlainString(e.default.HEBIhT, { hours: t, minutes: n })
        : n > 0
          ? i.intl.formatToPlainString(e.default.vvpiqt, { minutes: n })
          : i.intl.string(e.default.dCg2BH);
}

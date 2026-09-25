n.d(t, { C7: () => u, MB: () => i, Us: () => o, nY: () => r });
var l = n(50617),
    a = n(375708);
function i(e) {
    let t = Math.max(1, Math.round(e / 1e3));
    if (t < 60) return a.intl.formatToPlainString(l.default.RsOwXc, { count: t });
    let n = Math.round(t / 60);
    return n < 60
        ? a.intl.formatToPlainString(l.default["z+U4YX"], { count: n })
        : a.intl.formatToPlainString(l.default["7Q/vz0"], { hours: Math.floor(n / 60), minutes: n % 60 });
}
function r(e) {
    let t = Math.max(1, Math.round(e / 1e3));
    if (t < 60) return a.intl.formatToPlainString(l.default["49T8W0"], { count: t });
    let n = Math.round(t / 60);
    return n < 60
        ? a.intl.formatToPlainString(l.default.NkZO2t, { count: n })
        : a.intl.formatToPlainString(l.default["2qYUUZ"], { hours: Math.floor(n / 60), minutes: n % 60 });
}
function s(e) {
    let t = Number.isFinite(e) ? Math.max(0, Math.floor(e / 1e3)) : 0;
    return { hours: Math.floor(t / 3600), minutes: Math.floor(t / 60) % 60, seconds: t % 60 };
}
function u(e) {
    let { hours: t, minutes: n, seconds: i } = s(e);
    return t > 0
        ? a.intl.formatToPlainString(l.default.ru1bG9, { hours: t, minutes: n, seconds: i })
        : n > 0
          ? a.intl.formatToPlainString(l.default["9/TJIF"], { minutes: n, seconds: i })
          : a.intl.formatToPlainString(l.default.FqRCg2, { seconds: i });
}
function o(e) {
    let { hours: t, minutes: n } = s(e);
    return t > 0
        ? a.intl.formatToPlainString(l.default.RmLsRf, { hours: t, minutes: n })
        : n > 0
          ? a.intl.formatToPlainString(l.default["/J6kmO"], { minutes: n })
          : a.intl.string(l.default.gTzQ7A);
}

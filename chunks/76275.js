n.d(t, { C7: () => d, K: () => u, MB: () => i, Us: () => c, nY: () => r });
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
function s(e, t) {
    let n = Math.max(1, Math.round(e / 1e3));
    if (n < 60) return a.intl.formatToPlainString(t.seconds, { count: n });
    let l = Math.round(n / 60);
    return l < 60
        ? a.intl.formatToPlainString(t.minutes, { count: l })
        : a.intl.formatToPlainString(t.hours, { hours: Math.floor(l / 60), minutes: l % 60 });
}
function r(e) {
    return s(e, { seconds: l.default["49T8W0"], minutes: l.default.NkZO2t, hours: l.default["2qYUUZ"] });
}
function u(e) {
    return s(e, { seconds: l.default.EAdD4b, minutes: l.default.h1N2Xd, hours: l.default.nP2LB6 });
}
function o(e) {
    let t = Number.isFinite(e) ? Math.max(0, Math.floor(e / 1e3)) : 0;
    return { hours: Math.floor(t / 3600), minutes: Math.floor(t / 60) % 60, seconds: t % 60 };
}
function d(e) {
    let { hours: t, minutes: n, seconds: i } = o(e);
    return t > 0
        ? a.intl.formatToPlainString(l.default.ru1bG9, { hours: t, minutes: n, seconds: i })
        : n > 0
          ? a.intl.formatToPlainString(l.default["9/TJIF"], { minutes: n, seconds: i })
          : a.intl.formatToPlainString(l.default.FqRCg2, { seconds: i });
}
function c(e) {
    let { hours: t, minutes: n } = o(e);
    return t > 0
        ? a.intl.formatToPlainString(l.default.RmLsRf, { hours: t, minutes: n })
        : n > 0
          ? a.intl.formatToPlainString(l.default["/J6kmO"], { minutes: n })
          : a.intl.string(l.default.gTzQ7A);
}

n.d(t, { M: () => s, n: () => i });
var l = n(50617),
    a = n(375708);
function s(e) {
    let t = Math.max(1, Math.round(e / 1e3));
    if (t < 60) return a.intl.formatToPlainString(l.default.RsOwXc, { count: t });
    let n = Math.round(t / 60);
    return n < 60
        ? a.intl.formatToPlainString(l.default["z+U4YX"], { count: n })
        : a.intl.formatToPlainString(l.default["7Q/vz0"], { hours: Math.floor(n / 60), minutes: n % 60 });
}
function i(e) {
    let t = Math.max(1, Math.round(e / 1e3));
    if (t < 60) return a.intl.formatToPlainString(l.default["49T8W0"], { count: t });
    let n = Math.round(t / 60);
    return n < 60
        ? a.intl.formatToPlainString(l.default.NkZO2t, { count: n })
        : a.intl.formatToPlainString(l.default["2qYUUZ"], { hours: Math.floor(n / 60), minutes: n % 60 });
}

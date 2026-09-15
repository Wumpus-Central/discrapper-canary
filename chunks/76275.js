l.d(t, { M: () => s, n: () => i });
var n = l(759967),
    a = l(375708);
function s(e) {
    let t = Math.max(1, Math.round(e / 1e3));
    if (t < 60) return a.intl.formatToPlainString(n.default.RsOwXc, { count: t });
    let l = Math.round(t / 60);
    return l < 60
        ? a.intl.formatToPlainString(n.default["z+U4YX"], { count: l })
        : a.intl.formatToPlainString(n.default["7Q/vz0"], { hours: Math.floor(l / 60), minutes: l % 60 });
}
function i(e) {
    let t = Math.max(1, Math.round(e / 1e3));
    if (t < 60) return a.intl.formatToPlainString(n.default["49T8W0"], { count: t });
    let l = Math.round(t / 60);
    return l < 60
        ? a.intl.formatToPlainString(n.default.NkZO2t, { count: l })
        : a.intl.formatToPlainString(n.default["2qYUUZ"], { hours: Math.floor(l / 60), minutes: l % 60 });
}

s.d(e, {
    ph: () => r,
    yW: () => i
});
var n = s(899517);
function i() {
    return Date.now() / 1000;
}
let r = (function () {
    let { performance: t } = n.n;
    if (!t || !t.now) return i;
    let e = Date.now() - t.now(),
        s = void 0 == t.timeOrigin ? e : t.timeOrigin;
    return () => (s + t.now()) / 1000;
})();
(() => {
    let { performance: t } = n.n;
    if (!t || !t.now) return;
    let e = t.now(),
        s = Date.now(),
        i = t.timeOrigin ? Math.abs(t.timeOrigin + e - s) : 3600000,
        r = t.timing && t.timing.navigationStart,
        o = 'number' == typeof r ? Math.abs(r + e - s) : 3600000;
    if ((i < 3600000 || o < 3600000) && i <= o) return t.timeOrigin;
})();

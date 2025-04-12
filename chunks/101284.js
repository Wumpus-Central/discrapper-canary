s.d(e, {
    ph: () => r,
    yW: () => n
});
var i = s(899517);
function n() {
    return Date.now() / 1000;
}
let r = (function () {
    let { performance: t } = i.n;
    if (!t || !t.now) return n;
    let e = Date.now() - t.now(),
        s = void 0 == t.timeOrigin ? e : t.timeOrigin;
    return () => (s + t.now()) / 1000;
})();
(() => {
    let { performance: t } = i.n;
    if (!t || !t.now) return;
    let e = t.now(),
        s = Date.now(),
        n = t.timeOrigin ? Math.abs(t.timeOrigin + e - s) : 3600000,
        r = t.timing && t.timing.navigationStart,
        o = 'number' == typeof r ? Math.abs(r + e - s) : 3600000;
    if ((n < 3600000 || o < 3600000) && n <= o) return t.timeOrigin;
})();

let r;
n.d(t, {
    ph: () => s,
    yW: () => a,
});
var i = n(899517);
let o = 1000;
function a() {
    return Date.now() / o;
}
let s = (function () {
    let { performance: e } = i.n;
    if (!e || !e.now) return a;
    let t = Date.now() - e.now(),
        n = void 0 == e.timeOrigin ? t : e.timeOrigin;
    return () => (n + e.now()) / o;
})();
(() => {
    let { performance: e } = i.n;
    if (!e || !e.now) {
        r = "none";
        return;
    }
    let t = 3600000,
        n = e.now(),
        o = Date.now(),
        a = e.timeOrigin ? Math.abs(e.timeOrigin + n - o) : t,
        s = a < t,
        l = e.timing && e.timing.navigationStart,
        c = "number" == typeof l ? Math.abs(l + n - o) : t,
        u = c < t;
    if (s || u)
        if (a <= c) return (r = "timeOrigin"), e.timeOrigin;
        else return (r = "navigationStart");
    return (r = "dateNow");
})();

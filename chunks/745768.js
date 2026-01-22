let r;
n.d(t, {
    lu: () => s,
    zf: () => o,
});
var i = n(588522);
let a = 1000;
function s() {
    return Date.now() / a;
}
let o = (function () {
    let { performance: e } = i.O;
    if (!e || !e.now) return s;
    let t = Date.now() - e.now(),
        n = void 0 == e.timeOrigin ? t : e.timeOrigin;
    return () => (n + e.now()) / a;
})();
(() => {
    let { performance: e } = i.O;
    if (!e || !e.now) {
        r = "none";
        return;
    }
    let t = 3600000,
        n = e.now(),
        a = Date.now(),
        s = e.timeOrigin ? Math.abs(e.timeOrigin + n - a) : t,
        o = s < t,
        l = e.timing && e.timing.navigationStart,
        c = "number" == typeof l ? Math.abs(l + n - a) : t,
        u = c < t;
    if (o || u)
        if (s <= c) return (r = "timeOrigin"), e.timeOrigin;
        else return (r = "navigationStart");
    return (r = "dateNow");
})();

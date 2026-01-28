let r;
n.d(t, {
    lu: () => o,
    zf: () => s,
});
var i = n(588522);
let a = 1e3;

function o() {
    return Date.now() / a;
}
let s = (function () {
    let { performance: e } = i.O;
    if (!e || !e.now) return o;
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
    let t = 36e5,
        n = e.now(),
        a = Date.now(),
        o = e.timeOrigin ? Math.abs(e.timeOrigin + n - a) : t,
        s = o < t,
        l = e.timing && e.timing.navigationStart,
        c = "number" == typeof l ? Math.abs(l + n - a) : t,
        u = c < t;
    if (s || u)
        if (o <= c) return (r = "timeOrigin"), e.timeOrigin;
        else return (r = "navigationStart");
    return (r = "dateNow");
})();

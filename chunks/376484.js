"use strict";
n.d(t, { A: () => h, F: () => f });
var r = n(64700),
    i = n(735438),
    s = n.n(i),
    a = n(311907),
    o = n(451988),
    l = n(773669),
    u = n(927813),
    c = n(133636);
let d = u.A.Millis.SECOND,
    _ = 5 * u.A.Millis.SECOND;
function f(e, t) {
    return Intl.NumberFormat(t).format(e);
}
function p(e, t, n) {
    return e + (t - e) * n;
}
function h(e) {
    let [t] = (0, r.useState)(() => new o.Ep()),
        [n, i] = (0, r.useState)(0),
        u = (0, a.bG)([c.A], () => c.A.getCounter(e)),
        h = (0, a.bG)([c.A], () => c.A.getNextCountersFetchTime()),
        m = (0, a.bG)([c.A], () => c.A.getCountersFetchTime()),
        E = (0, a.bG)([l.default], () => l.default.locale),
        g = Math.floor(p(u.previousCount, u.currentCount, n));
    return (
        (0, r.useEffect)(() => {
            i(0);
        }, [u]),
        (0, r.useEffect)(() => {
            let e = () => {
                if (n < 1 && h > m) {
                    let e = h - m;
                    i(Math.min((e - Math.max(0, h - Date.now())) / e, 1));
                }
            };
            return t.start(s().random(d, _), e), () => t.stop();
        }, [n, m, h, t]),
        f(g, E)
    );
}

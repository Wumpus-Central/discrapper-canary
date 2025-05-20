n.d(t, {
    Sv: () => o,
    mb: () => r,
    v0: () => i
}),
    n(258558);
try {
    null == Date.now && (Date.now = () => new Date().valueOf());
} catch (e) {}
let r = (() => {
        try {
            var e;
            return null != (e = n.g.performance.timing.navigationStart) ? e : n.g.performance.now();
        } catch (e) {}
        return Date.now();
    })(),
    i = (() => {
        try {
            var e;
            return null != (e = n.g.performance.timeOrigin) ? e : r;
        } catch (e) {}
        return Date.now();
    })();
if (null == n.g.performance.timing)
    try {
        n.g.performance.timing = { navigationStart: r };
    } catch (e) {}
if (null == n.g.performance.timeOrigin)
    try {
        n.g.performance.timeOrigin = i;
    } catch (e) {}
let o = n.g.performance;

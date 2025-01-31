n.d(t, {
    Sv: () => a,
    mb: () => i,
    v0: () => r
}),
    n(258558);
try {
    null == Date.now && (Date.now = () => new Date().valueOf());
} catch (e) {}
let i = (() => {
        try {
            var e;
            return null !== (e = n.g.performance.timing.navigationStart) && void 0 !== e ? e : n.g.performance.now();
        } catch (e) {}
        return Date.now();
    })(),
    r = (() => {
        try {
            var e;
            return null !== (e = n.g.performance.timeOrigin) && void 0 !== e ? e : i;
        } catch (e) {}
        return Date.now();
    })();
if (null == n.g.performance.timing)
    try {
        n.g.performance.timing = { navigationStart: i };
    } catch (e) {}
if (null == n.g.performance.timeOrigin)
    try {
        n.g.performance.timeOrigin = r;
    } catch (e) {}
let a = n.g.performance;

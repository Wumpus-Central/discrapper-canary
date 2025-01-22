r.d(n, {
    Sv: function () {
        return o;
    },
    mb: function () {
        return i;
    },
    v0: function () {
        return a;
    }
}),
    r(258558);
try {
    null == Date.now && (Date.now = () => new Date().valueOf());
} catch (e) {}
let i = (() => {
        try {
            var e;
            return null !== (e = r.g.performance.timing.navigationStart) && void 0 !== e ? e : r.g.performance.now();
        } catch (e) {}
        return Date.now();
    })(),
    a = (() => {
        try {
            var e;
            return null !== (e = r.g.performance.timeOrigin) && void 0 !== e ? e : i;
        } catch (e) {}
        return Date.now();
    })();
if (null == r.g.performance.timing)
    try {
        r.g.performance.timing = { navigationStart: i };
    } catch (e) {}
if (null == r.g.performance.timeOrigin)
    try {
        r.g.performance.timeOrigin = a;
    } catch (e) {}
let o = r.g.performance;

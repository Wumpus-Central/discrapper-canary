n.d(t, { FO: () => a, fL: () => r, u5: () => i }), n(724214);
try {
    null == Date.now && (Date.now = () => new Date().valueOf());
} catch (e) {}
let r = (() => {
        try {
            return n.g.performance.timing.navigationStart ?? n.g.performance.now();
        } catch (e) {}
        return Date.now();
    })(),
    i = (() => {
        try {
            return n.g.performance.timeOrigin ?? r;
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
let a = n.g.performance;

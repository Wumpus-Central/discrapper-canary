function i(e, t) {
    if (r('noDeprecation')) return e;
    var n = !1;
    return function () {
        if (!n) {
            if (r('throwDeprecation')) throw Error(t);
            r('traceDeprecation') ? console.trace(t) : console.warn(t), (n = !0);
        }
        return e.apply(this, arguments);
    };
}
function r(e) {
    try {
        if (!n.g.localStorage) return !1;
    } catch (e) {
        return !1;
    }
    var t = n.g.localStorage[e];
    return null != t && 'true' === String(t).toLowerCase();
}
e.exports = i;

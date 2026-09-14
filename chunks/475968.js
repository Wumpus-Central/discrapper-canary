a.d(t, { d: () => o });
var l = a(927813),
    r = a(61567),
    s = a(375708);
let n = l.A.Seconds.WEEK,
    i = l.A.Seconds.DAY;
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
        a = Math.ceil(Math.max(e + n - t / 1e3, 0) / i);
    return s.intl.formatToPlainString(r.default.C07UJ2, { days: a });
}

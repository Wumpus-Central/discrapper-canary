n.d(t, { OW: () => x, _V: () => f, oO: () => C });
var a = n(499979),
    l = n(381849),
    r = n(985018),
    i = n(532063),
    s = n(367485),
    o = n(607374),
    d = n(862446),
    c = n(818952),
    u = n(443670),
    m = n(583623),
    _ = n(620324),
    p = n(379043),
    h = n(979143);
let A = [a.pJ.HOURS, a.pJ.MINUTES];
function C(e) {
    let { unit: t, time: n } = (0, a.$l)(e, A),
        i = (0, l.i)();
    if (null == n) return r.intl.formatToPlainString(i.minutes, { minutes: 0 });
    let s = Math.round(n);
    return t === a.pJ.HOURS
        ? r.intl.formatToPlainString(i.hours, { hours: s })
        : r.intl.formatToPlainString(i.minutes, { minutes: s });
}
function x(e) {
    switch (e) {
        case 0:
            return p.A;
        case 1:
            return u.A;
        case 2:
            return s.A;
        case 3:
            return c.A;
        case 4:
            return _.A;
        case 5:
            return h.A;
        case 6:
            return m.A;
        case 7:
            return i.A;
        case 8:
            return d.A;
        default:
            return o.A;
    }
}
function f(e) {
    return Math.min(Math.max(Math.round(e / 10), 1), 9);
}

n.d(t, { OW: () => x, _V: () => N, oO: () => E });
var l = n(499979),
    a = n(381849),
    r = n(985018),
    s = n(532063),
    i = n(367485),
    o = n(607374),
    d = n(862446),
    c = n(818952),
    u = n(443670),
    m = n(583623),
    p = n(620324),
    A = n(379043),
    h = n(979143);
let C = [l.pJ.HOURS, l.pJ.MINUTES];
function E(e) {
    let { unit: t, time: n } = (0, l.$l)(e, C),
        s = (0, a.i)();
    if (null == n) return r.intl.formatToPlainString(s.minutes, { minutes: 0 });
    let i = Math.round(n);
    return t === l.pJ.HOURS
        ? r.intl.formatToPlainString(s.hours, { hours: i })
        : r.intl.formatToPlainString(s.minutes, { minutes: i });
}
function x(e) {
    switch (e) {
        case 0:
            return A.A;
        case 1:
            return u.A;
        case 2:
            return i.A;
        case 3:
            return c.A;
        case 4:
            return p.A;
        case 5:
            return h.A;
        case 6:
            return m.A;
        case 7:
            return s.A;
        case 8:
            return d.A;
        default:
            return o.A;
    }
}
function N(e) {
    return Math.min(Math.max(Math.round(e / 10), 1), 9);
}

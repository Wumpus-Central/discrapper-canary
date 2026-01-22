n.d(t, {
    OW: () => y,
    Xq: () => E,
    _V: () => A,
    oO: () => b,
    od: () => O,
});
var r = n(64700),
    i = n(499979),
    a = n(381849),
    s = n(985018),
    o = n(532063),
    l = n(367485),
    c = n(607374),
    u = n(862446),
    d = n(818952),
    f = n(443670),
    p = n(583623),
    _ = n(620324),
    h = n(379043),
    m = n(979143);
let g = [i.pJ.HOURS, i.pJ.MINUTES];
function E(e) {
    let { unit: t, time: n } = (0, i.$l)(e, g),
        r = (0, a.i)();
    if (null == n) return s.intl.formatToPlainString(r.minutes, { minutes: 0 });
    let o = Math.round(n);
    return t === i.pJ.HOURS
        ? s.intl.formatToPlainString(r.hours, { hours: o })
        : s.intl.formatToPlainString(r.minutes, { minutes: o });
}
function b(e) {
    let { unit: t, time: n } = (0, i.$l)(e, g);
    return {
        duration: Math.round(null != n ? n : 0),
        unit: t,
    };
}
function y(e) {
    switch (e) {
        case 0:
            return h.A;
        case 1:
            return f.A;
        case 2:
            return l.A;
        case 3:
            return d.A;
        case 4:
            return _.A;
        case 5:
            return m.A;
        case 6:
            return p.A;
        case 7:
            return o.A;
        case 8:
            return u.A;
        default:
            return c.A;
    }
}
function O(e, t) {
    return {
        monthName: (0, r.useMemo)(() => {
            let n = new Date();
            return n.setDate(1), n.setMonth(e - 1), n.toLocaleString(t, { month: "long" });
        }, [e, t]),
    };
}
function A(e) {
    return Math.min(Math.max(Math.round(e / 10), 1), 9);
}

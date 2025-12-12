n.d(t, {
    Bi: () => b,
    CE: () => O,
    QB: () => v,
    UN: () => y,
    nJ: () => E,
});
var r = n(473749),
    i = n(379649),
    a = n(925928),
    o = n(388032),
    s = n(946215),
    l = n(534675),
    c = n(584121),
    u = n(860029),
    d = n(787183),
    f = n(305714),
    p = n(235887),
    _ = n(729146),
    m = n(907359),
    h = n(281684);
let g = [i.J6.HOURS, i.J6.MINUTES];
function E(e) {
    let { unit: t, time: n } = (0, i.CI)(e, g),
        r = (0, a.d0)();
    if (null == n) return o.intl.formatToPlainString(r.minutes, { minutes: 0 });
    let s = Math.round(n);
    return t === i.J6.HOURS
        ? o.intl.formatToPlainString(r.hours, { hours: s })
        : o.intl.formatToPlainString(r.minutes, { minutes: s });
}
function b(e) {
    let { unit: t, time: n } = (0, i.CI)(e, g);
    return {
        duration: Math.round(null != n ? n : 0),
        unit: t,
    };
}
function y(e) {
    switch (e) {
        case 0:
            return m.Z;
        case 1:
            return f.Z;
        case 2:
            return l.Z;
        case 3:
            return d.Z;
        case 4:
            return _.Z;
        case 5:
            return h.Z;
        case 6:
            return p.Z;
        case 7:
            return s.Z;
        case 8:
            return u.Z;
        default:
            return c.Z;
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
function v(e) {
    return Math.min(Math.max(Math.round(e / 10), 1), 9);
}

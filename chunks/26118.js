n.d(t, {
    Bi: () => b,
    CE: () => O,
    QB: () => v,
    UN: () => y,
    nJ: () => E,
});
var r = n(473749),
    i = n(379649),
    o = n(925928),
    a = n(388032),
    s = n(415191),
    l = n(103746),
    c = n(811272),
    u = n(484570),
    d = n(754283),
    f = n(291824),
    p = n(678976),
    _ = n(38803),
    m = n(466577),
    h = n(446599);
let g = [i.J6.HOURS, i.J6.MINUTES];
function E(e) {
    let { unit: t, time: n } = (0, i.CI)(e, g),
        r = (0, o.d0)();
    if (null == n) return a.intl.formatToPlainString(r.minutes, { minutes: 0 });
    let s = Math.round(n);
    return t === i.J6.HOURS
        ? a.intl.formatToPlainString(r.hours, { hours: s })
        : a.intl.formatToPlainString(r.minutes, { minutes: s });
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

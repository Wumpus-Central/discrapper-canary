n.r(t),
    n.d(t, {
        Chrono: () => r.k,
        GB: () => c,
        Meridiem: () => a.GG,
        ParsingComponents: () => i.L,
        ParsingResult: () => i.G5,
        ReferenceWithTimezone: () => i.X2,
        Weekday: () => a.OG,
        casual: () => s,
        configuration: () => o,
        parse: () => u,
        parseDate: () => d,
        strict: () => l,
    });
var r = n(201129),
    i = n(86465),
    a = n(894186);
let o = new (n(193902).Z)(),
    s = new r.k(o.createCasualConfiguration(!1)),
    l = new r.k(o.createConfiguration(!0, !1)),
    c = new r.k(o.createCasualConfiguration(!0));
function u(e, t, n) {
    return s.parse(e, t, n);
}
function d(e, t, n) {
    return s.parseDate(e, t, n);
}

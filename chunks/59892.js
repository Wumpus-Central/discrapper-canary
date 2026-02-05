"use strict";
n.r(t),
    n.d(t, {
        Chrono: () => r.u,
        GB: () => u,
        Meridiem: () => a.FF,
        ParsingComponents: () => i.BP,
        ParsingResult: () => i.s4,
        ReferenceWithTimezone: () => i.b5,
        Weekday: () => a.Bw,
        casual: () => o,
        configuration: () => s,
        parse: () => c,
        parseDate: () => d,
        strict: () => l,
    });
var r = n(880683),
    i = n(374372),
    a = n(322811);
let s = new (n(579926).A)(),
    o = new r.u(s.createCasualConfiguration(!1)),
    l = new r.u(s.createConfiguration(!0, !1)),
    u = new r.u(s.createCasualConfiguration(!0));
function c(e, t, n) {
    return o.parse(e, t, n);
}
function d(e, t, n) {
    return o.parseDate(e, t, n);
}

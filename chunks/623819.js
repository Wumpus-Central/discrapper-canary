"use strict";
n.r(t),
    n.d(t, {
        Chrono: () => a.u,
        Meridiem: () => o.FF,
        ParsingComponents: () => s.BP,
        ParsingResult: () => s.s4,
        ReferenceWithTimezone: () => s.b5,
        Weekday: () => o.Bw,
        casual: () => g,
        createCasualConfiguration: () => T,
        createConfiguration: () => y,
        hant: () => m,
        parse: () => A,
        parseDate: () => I,
        strict: () => E,
    });
var r = n(321287),
    i = n(125659),
    a = n(880683),
    s = n(374372),
    o = n(322811),
    l = n(318340),
    u = n(899562),
    c = n(973617),
    d = n(736360),
    _ = n(408669),
    f = n(932640),
    p = n(590413),
    h = n(824033);
let m = new a.u(T()),
    g = new a.u(T()),
    E = new a.u(y());
function A(e, t, n) {
    return g.parse(e, t, n);
}
function I(e, t, n) {
    return g.parseDate(e, t, n);
}
function T() {
    let e = y();
    return e.parsers.unshift(new l.A()), e;
}
function y() {
    let e = (0, i.i)({
        parsers: [new u.A(), new d.A(), new f.A(), new _.A(), new c.A()],
        refiners: [new p.A(), new h.A()],
    });
    return (e.refiners = e.refiners.filter((e) => !(e instanceof r.A))), e;
}

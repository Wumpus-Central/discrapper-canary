"use strict";
n.r(t),
    n.d(t, {
        Chrono: () => i.u,
        Meridiem: () => s.FF,
        ParsingComponents: () => a.BP,
        ParsingResult: () => a.s4,
        ReferenceWithTimezone: () => a.b5,
        Weekday: () => s.Bw,
        casual: () => A,
        createCasualConfiguration: () => S,
        createConfiguration: () => v,
        parse: () => T,
        parseDate: () => y,
        strict: () => I,
    });
var r = n(125659),
    i = n(880683),
    a = n(374372),
    s = n(322811),
    o = n(774188),
    l = n(368324),
    u = n(43536),
    c = n(632515),
    d = n(396540),
    _ = n(533412),
    f = n(581438),
    p = n(86574),
    h = n(620695),
    m = n(60655),
    g = n(993059),
    E = n(475500);
let A = new i.u(S()),
    I = new i.u(v(!0));
function T(e, t, n) {
    return A.parse(e, t, n);
}
function y(e, t, n) {
    return A.parseDate(e, t, n);
}
function S(e = !0) {
    let t = v(!1, e);
    return t.parsers.unshift(new h.A()), t.parsers.unshift(new p.A()), t.parsers.unshift(new g.A()), t;
}
function v(e = !0, t = !0) {
    return (0, r.i)(
        {
            parsers: [new l.A(), new o.A(t), new u.A(), new d.A(), new m.A(), new c.A(), new E.A()],
            refiners: [new _.A(), new f.A()],
        },
        e,
    );
}

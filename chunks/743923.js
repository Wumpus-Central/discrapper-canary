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
    o = n(532740),
    l = n(917741),
    u = n(774188),
    c = n(768474),
    d = n(336002),
    _ = n(55824),
    f = n(734189),
    p = n(894518),
    h = n(166565),
    m = n(680212),
    g = n(728442),
    E = n(936401);
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
    return t.parsers.unshift(new o.A()), t.parsers.unshift(new l.A()), t.parsers.unshift(new E.A()), t;
}
function v(e = !0, t = !0) {
    return (0, r.i)(
        {
            parsers: [new u.A(t), new h.A(), new c.A(), new p.A(), new m.A(), new g.A(), new f.A()],
            refiners: [new d.A(), new _.A()],
        },
        e,
    );
}

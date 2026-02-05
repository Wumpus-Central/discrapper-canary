"use strict";
n.r(t),
    n.d(t, {
        Chrono: () => i.u,
        Meridiem: () => s.FF,
        ParsingComponents: () => a.BP,
        ParsingResult: () => a.s4,
        ReferenceWithTimezone: () => a.b5,
        Weekday: () => s.Bw,
        casual: () => v,
        createCasualConfiguration: () => R,
        createConfiguration: () => O,
        parse: () => b,
        parseDate: () => N,
        strict: () => C,
    });
var r = n(125659),
    i = n(880683),
    a = n(374372),
    s = n(322811),
    o = n(714196),
    l = n(973902),
    u = n(248188),
    c = n(471589),
    d = n(774188),
    _ = n(924482),
    f = n(359269),
    p = n(921932),
    h = n(273050),
    m = n(843959),
    g = n(389378),
    E = n(703333),
    A = n(196417),
    I = n(101272),
    T = n(970418),
    y = n(57724),
    S = n(241087);
let v = new i.u(R()),
    C = new i.u(O(!0));
function b(e, t, n) {
    return v.parse(e, t, n);
}
function N(e, t, n) {
    return v.parseDate(e, t, n);
}
function R(e = !0) {
    let t = O(!1, e);
    return (
        t.parsers.unshift(new u.A()),
        t.parsers.unshift(new c.A()),
        t.parsers.unshift(new A.A()),
        t.parsers.unshift(new h.A()),
        t.parsers.unshift(new T.A()),
        t.parsers.unshift(new I.A()),
        t
    );
}
function O(e = !0, t = !0) {
    return (0, r.i)(
        {
            parsers: [
                new d.A(t),
                new _.A(),
                new p.A(),
                new h.A(),
                new f.A(),
                new E.A(),
                new m.A(),
                new g.A(e),
                new y.A(e),
                new S.A(e),
            ],
            refiners: [new l.A(), new o.A()],
        },
        e,
    );
}

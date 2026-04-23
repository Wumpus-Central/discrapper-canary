r.r(t),
    r.d(t, {
        Chrono: () => a.u,
        Meridiem: () => o.FF,
        ParsingComponents: () => i.BP,
        ParsingResult: () => i.s4,
        ReferenceWithTimezone: () => i.b5,
        Weekday: () => o.Bw,
        casual: () => y,
        createCasualConfiguration: () => D,
        createConfiguration: () => P,
        hant: () => p,
        parse: () => w,
        parseDate: () => A,
        strict: () => x,
    });
var n = r(321287),
    s = r(125659),
    a = r(880683),
    i = r(374372),
    o = r(322811),
    l = r(318340),
    u = r(899562),
    d = r(973617),
    m = r(736360),
    c = r(408669),
    g = r(932640),
    h = r(590413),
    f = r(824033);
let p = new a.u(D()),
    y = new a.u(D()),
    x = new a.u(P());
function w(e, t, r) {
    return y.parse(e, t, r);
}
function A(e, t, r) {
    return y.parseDate(e, t, r);
}
function D() {
    let e = P();
    return e.parsers.unshift(new l.A()), e;
}
function P() {
    let e = (0, s.i)({
        parsers: [new u.A(), new m.A(), new g.A(), new c.A(), new d.A()],
        refiners: [new h.A(), new f.A()],
    });
    return (e.refiners = e.refiners.filter((e) => !(e instanceof n.A))), e;
}

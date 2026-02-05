"use strict";
n.r(t),
    n.d(t, {
        GB: () => C,
        casual: () => S,
        createCasualConfiguration: () => R,
        createConfiguration: () => O,
        parse: () => b,
        parseDate: () => N,
        strict: () => v,
    });
var r = n(191824),
    i = n(998275),
    a = n(642714),
    s = n(288888),
    o = n(210231),
    l = n(650073),
    u = n(887572),
    c = n(202262),
    d = n(940717),
    _ = n(699176),
    f = n(662042),
    p = n(125659),
    h = n(127858),
    m = n(759275),
    g = n(732871),
    E = n(23836),
    A = n(880683),
    I = n(774188),
    T = n(789374),
    y = n(740789);
let S = new A.u(R(!1)),
    v = new A.u(O(!0, !1)),
    C = new A.u(O(!1, !0));
function b(e, t, n) {
    return S.parse(e, t, n);
}
function N(e, t, n) {
    return S.parseDate(e, t, n);
}
function R(e = !1) {
    let t = O(!1, e);
    return (
        t.parsers.unshift(new h.A()),
        t.parsers.unshift(new m.A()),
        t.parsers.unshift(new s.A()),
        t.parsers.unshift(new E.A()),
        t.parsers.unshift(new T.A()),
        t
    );
}
function O(e = !0, t = !1) {
    return (0, p.i)(
        {
            parsers: [
                new I.A(t),
                new r.A(),
                new i.A(),
                new a.A(),
                new g.A(),
                new o.A(),
                new l.A(),
                new u.A(e),
                new c.A(e),
                new d.A(e),
            ],
            refiners: [new y.A(), new f.A(), new _.A()],
        },
        e,
    );
}

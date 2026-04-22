r.d(t, { i: () => d });
var n = r(394639),
    s = r(321287),
    a = r(83707),
    i = r(130412),
    o = r(904167),
    l = r(368324),
    u = r(483655);
function d(e, t = !1) {
    return (
        e.parsers.unshift(new l.A()),
        e.refiners.unshift(new u.A()),
        e.refiners.unshift(new s.A()),
        e.refiners.unshift(new a.A()),
        e.refiners.push(new n.A()),
        e.refiners.push(new a.A()),
        e.refiners.push(new i.A()),
        e.refiners.push(new o.A(t)),
        e
    );
}

n.d(t, {
    i: () => u,
});
var r = n(394639),
    i = n(321287),
    a = n(83707),
    s = n(908031),
    o = n(904167),
    l = n(368324),
    c = n(483655);

function u(e, t = !1) {
    return (
        e.parsers.unshift(new l.A()),
        e.refiners.unshift(new c.A()),
        e.refiners.unshift(new i.A()),
        e.refiners.unshift(new a.A()),
        e.refiners.push(new r.A()),
        e.refiners.push(new a.A()),
        e.refiners.push(new s.A()),
        e.refiners.push(new o.A(t)),
        e
    );
}

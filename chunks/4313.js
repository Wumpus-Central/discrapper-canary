n.d(t, { Z: () => f });
var i = n(175922),
    r = n(759202),
    a = n(316138),
    s = n(882159),
    o = n(977489),
    l = n(285363),
    u = n(538018),
    c = n(894417);
function d(e) {
    var t = e.getBoundingClientRect(),
        n = (0, c.NM)(t.width) / e.offsetWidth || 1,
        i = (0, c.NM)(t.height) / e.offsetHeight || 1;
    return 1 !== n || 1 !== i;
}
function f(e, t, n) {
    void 0 === n && (n = !1);
    var c = (0, s.Re)(t),
        f = (0, s.Re)(t) && d(t),
        _ = (0, l.Z)(t),
        p = (0, i.Z)(e, f, n),
        h = {
            scrollLeft: 0,
            scrollTop: 0
        },
        m = {
            x: 0,
            y: 0
        };
    return (
        (c || (!c && !n)) && (('body' !== (0, a.Z)(t) || (0, u.Z)(_)) && (h = (0, r.Z)(t)), (0, s.Re)(t) ? ((m = (0, i.Z)(t, !0)), (m.x += t.clientLeft), (m.y += t.clientTop)) : _ && (m.x = (0, o.Z)(_))),
        {
            x: p.left + h.scrollLeft - m.x,
            y: p.top + h.scrollTop - m.y,
            width: p.width,
            height: p.height
        }
    );
}

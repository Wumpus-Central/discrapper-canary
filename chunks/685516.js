n.d(t, { Z: () => y });
var i = n(740078),
    r = n(365100),
    a = n(558376),
    s = n(620720),
    o = n(343713),
    l = n(285363),
    u = n(874900),
    c = n(882159),
    d = n(175922),
    f = n(660027),
    _ = n(67966),
    p = n(316138),
    h = n(6138),
    m = n(894417);
function g(e, t) {
    var n = (0, d.Z)(e, !1, 'fixed' === t);
    return (n.top = n.top + e.clientTop), (n.left = n.left + e.clientLeft), (n.bottom = n.top + e.clientHeight), (n.right = n.left + e.clientWidth), (n.width = e.clientWidth), (n.height = e.clientHeight), (n.x = n.left), (n.y = n.top), n;
}
function E(e, t, n) {
    return t === i.Pj ? (0, h.Z)((0, r.Z)(e, n)) : (0, c.kK)(t) ? g(t, n) : (0, h.Z)((0, a.Z)((0, l.Z)(e)));
}
function v(e) {
    var t = (0, s.Z)((0, f.Z)(e)),
        n = ['absolute', 'fixed'].indexOf((0, u.Z)(e).position) >= 0 && (0, c.Re)(e) ? (0, o.Z)(e) : e;
    return (0, c.kK)(n)
        ? t.filter(function (e) {
              return (0, c.kK)(e) && (0, _.Z)(e, n) && 'body' !== (0, p.Z)(e);
          })
        : [];
}
function y(e, t, n, i) {
    var r = [].concat('clippingParents' === t ? v(e) : [].concat(t), [n]),
        a = r[0],
        s = r.reduce(
            function (t, n) {
                var r = E(e, n, i);
                return (t.top = (0, m.Fp)(r.top, t.top)), (t.right = (0, m.VV)(r.right, t.right)), (t.bottom = (0, m.VV)(r.bottom, t.bottom)), (t.left = (0, m.Fp)(r.left, t.left)), t;
            },
            E(e, a, i)
        );
    return (s.width = s.right - s.left), (s.height = s.bottom - s.top), (s.x = s.left), (s.y = s.top), s;
}

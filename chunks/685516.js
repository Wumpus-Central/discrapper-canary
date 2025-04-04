n.d(t, { Z: () => y });
var r = n(740078),
    i = n(365100),
    o = n(558376),
    a = n(620720),
    s = n(343713),
    l = n(285363),
    c = n(874900),
    u = n(882159),
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
    return t === r.Pj ? (0, h.Z)((0, i.Z)(e, n)) : (0, u.kK)(t) ? g(t, n) : (0, h.Z)((0, o.Z)((0, l.Z)(e)));
}
function b(e) {
    var t = (0, a.Z)((0, f.Z)(e)),
        n = ['absolute', 'fixed'].indexOf((0, c.Z)(e).position) >= 0 && (0, u.Re)(e) ? (0, s.Z)(e) : e;
    return (0, u.kK)(n)
        ? t.filter(function (e) {
              return (0, u.kK)(e) && (0, _.Z)(e, n) && 'body' !== (0, p.Z)(e);
          })
        : [];
}
function y(e, t, n, r) {
    var i = [].concat('clippingParents' === t ? b(e) : [].concat(t), [n]),
        o = i[0],
        a = i.reduce(
            function (t, n) {
                var i = E(e, n, r);
                return (t.top = (0, m.Fp)(i.top, t.top)), (t.right = (0, m.VV)(i.right, t.right)), (t.bottom = (0, m.VV)(i.bottom, t.bottom)), (t.left = (0, m.Fp)(i.left, t.left)), t;
            },
            E(e, o, r)
        );
    return (a.width = a.right - a.left), (a.height = a.bottom - a.top), (a.x = a.left), (a.y = a.top), a;
}

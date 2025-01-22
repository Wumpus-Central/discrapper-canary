r.d(n, {
    Z: function () {
        return b;
    }
});
var i = r(740078),
    a = r(365100),
    o = r(558376),
    s = r(620720),
    l = r(343713),
    u = r(285363),
    c = r(874900),
    d = r(882159),
    f = r(175922),
    p = r(660027),
    h = r(67966),
    _ = r(316138),
    m = r(6138),
    g = r(894417);
function E(e, n) {
    var r = (0, f.Z)(e, !1, 'fixed' === n);
    return (r.top = r.top + e.clientTop), (r.left = r.left + e.clientLeft), (r.bottom = r.top + e.clientHeight), (r.right = r.left + e.clientWidth), (r.width = e.clientWidth), (r.height = e.clientHeight), (r.x = r.left), (r.y = r.top), r;
}
function v(e, n, r) {
    return n === i.Pj ? (0, m.Z)((0, a.Z)(e, r)) : (0, d.kK)(n) ? E(n, r) : (0, m.Z)((0, o.Z)((0, u.Z)(e)));
}
function y(e) {
    var n = (0, s.Z)((0, p.Z)(e)),
        r = ['absolute', 'fixed'].indexOf((0, c.Z)(e).position) >= 0 && (0, d.Re)(e) ? (0, l.Z)(e) : e;
    return (0, d.kK)(r)
        ? n.filter(function (e) {
              return (0, d.kK)(e) && (0, h.Z)(e, r) && 'body' !== (0, _.Z)(e);
          })
        : [];
}
function b(e, n, r, i) {
    var a = [].concat('clippingParents' === n ? y(e) : [].concat(n), [r]),
        o = a[0],
        s = a.reduce(
            function (n, r) {
                var a = v(e, r, i);
                return (n.top = (0, g.Fp)(a.top, n.top)), (n.right = (0, g.VV)(a.right, n.right)), (n.bottom = (0, g.VV)(a.bottom, n.bottom)), (n.left = (0, g.Fp)(a.left, n.left)), n;
            },
            v(e, o, i)
        );
    return (s.width = s.right - s.left), (s.height = s.bottom - s.top), (s.x = s.left), (s.y = s.top), s;
}

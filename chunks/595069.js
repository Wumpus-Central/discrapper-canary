var i = n(668530),
    r = n(821819),
    a = n(96403),
    s = n(342545),
    o = n(625014).trim,
    l = n(219479),
    u = i.parseInt,
    c = i.Symbol,
    d = c && c.iterator,
    f = /^[+-]?0x/i,
    _ = a(f.exec),
    p =
        8 !== u(l + '08') ||
        22 !== u(l + '0x16') ||
        (d &&
            !r(function () {
                u(Object(d));
            }));
e.exports = p
    ? function (e, t) {
          var n = o(s(e));
          return u(n, t >>> 0 || (_(f, n) ? 16 : 10));
      }
    : u;

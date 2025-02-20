var r = n(668530),
    i = n(821819),
    o = n(96403),
    a = n(342545),
    s = n(625014).trim,
    l = n(219479),
    c = r.parseInt,
    u = r.Symbol,
    d = u && u.iterator,
    f = /^[+-]?0x/i,
    p = o(f.exec),
    _ =
        8 !== c(l + '08') ||
        22 !== c(l + '0x16') ||
        (d &&
            !i(function () {
                c(Object(d));
            }));
e.exports = _
    ? function (e, t) {
          var n = s(a(e));
          return c(n, t >>> 0 || (p(f, n) ? 16 : 10));
      }
    : c;

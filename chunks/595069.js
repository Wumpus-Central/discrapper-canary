var i = r(668530),
    a = r(821819),
    o = r(96403),
    s = r(342545),
    l = r(625014).trim,
    u = r(219479),
    c = i.parseInt,
    d = i.Symbol,
    f = d && d.iterator,
    p = /^[+-]?0x/i,
    h = o(p.exec),
    _ =
        8 !== c(u + '08') ||
        22 !== c(u + '0x16') ||
        (f &&
            !a(function () {
                c(Object(f));
            }));
e.exports = _
    ? function (e, n) {
          var r = l(s(e));
          return c(r, n >>> 0 || (h(p, r) ? 16 : 10));
      }
    : c;

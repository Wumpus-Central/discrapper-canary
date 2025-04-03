var r = n(668530),
    o = n(821819),
    a = n(96403),
    i = n(342545),
    s = n(625014).trim,
    c = n(219479),
    l = r.parseInt,
    u = r.Symbol,
    d = u && u.iterator,
    p = /^[+-]?0x/i,
    h = a(p.exec);
e.exports =
    8 !== l(c + '08') ||
    22 !== l(c + '0x16') ||
    (d &&
        !o(function () {
            l(Object(d));
        }))
        ? function (e, t) {
              var n = s(i(e));
              return l(n, t >>> 0 || (h(p, n) ? 16 : 10));
          }
        : l;

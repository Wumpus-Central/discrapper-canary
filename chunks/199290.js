var r = n(424353),
    o = n(779688),
    a = n(764908),
    i = n(565130),
    s = n(127098).trim,
    c = n(906898),
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

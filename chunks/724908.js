"use strict";
var r = n(421236),
    a = n(958498),
    o = n(918078),
    i = n(794779),
    s = n(242291),
    l = Math.min,
    c = [].lastIndexOf,
    u = !!c && 1 / [1].lastIndexOf(1, -0) < 0,
    d = s("lastIndexOf");
e.exports =
    u || !d
        ? function (e) {
              if (u) return r(c, this, arguments) || 0;
              var t = a(this),
                  n = i(t);
              if (0 === n) return -1;
              var s = n - 1;
              for (arguments.length > 1 && (s = l(s, o(arguments[1]))), s < 0 && (s = n + s); s >= 0; s--)
                  if (s in t && t[s] === e) return s || 0;
              return -1;
          }
        : c;

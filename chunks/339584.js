var i = r(156741),
    a = r(729605),
    o = r(338752),
    s = r(474883),
    l = r(54659),
    u = Math.min,
    c = [].lastIndexOf,
    d = !!c && 1 / [1].lastIndexOf(1, -0) < 0,
    f = l('lastIndexOf'),
    p = d || !f;
e.exports = p
    ? function (e) {
          if (d) return i(c, this, arguments) || 0;
          var n = a(this),
              r = s(n),
              l = r - 1;
          for (arguments.length > 1 && (l = u(l, o(arguments[1]))), l < 0 && (l = r + l); l >= 0; l--) if (l in n && n[l] === e) return l || 0;
          return -1;
      }
    : c;

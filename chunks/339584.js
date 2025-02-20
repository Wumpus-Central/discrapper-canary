var r = n(156741),
    i = n(729605),
    o = n(338752),
    a = n(474883),
    s = n(54659),
    l = Math.min,
    c = [].lastIndexOf,
    u = !!c && 1 / [1].lastIndexOf(1, -0) < 0,
    d = s('lastIndexOf'),
    f = u || !d;
e.exports = f
    ? function (e) {
          if (u) return r(c, this, arguments) || 0;
          var t = i(this),
              n = a(t),
              s = n - 1;
          for (arguments.length > 1 && (s = l(s, o(arguments[1]))), s < 0 && (s = n + s); s >= 0; s--) if (s in t && t[s] === e) return s || 0;
          return -1;
      }
    : c;

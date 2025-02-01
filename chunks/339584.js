var i = n(156741),
    r = n(729605),
    a = n(338752),
    s = n(474883),
    o = n(54659),
    l = Math.min,
    u = [].lastIndexOf,
    c = !!u && 1 / [1].lastIndexOf(1, -0) < 0,
    d = o('lastIndexOf'),
    f = c || !d;
e.exports = f
    ? function (e) {
          if (c) return i(u, this, arguments) || 0;
          var t = r(this),
              n = s(t),
              o = n - 1;
          for (arguments.length > 1 && (o = l(o, a(arguments[1]))), o < 0 && (o = n + o); o >= 0; o--) if (o in t && t[o] === e) return o || 0;
          return -1;
      }
    : u;

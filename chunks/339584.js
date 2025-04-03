var r = n(156741),
    o = n(729605),
    a = n(338752),
    i = n(474883),
    s = n(54659),
    c = Math.min,
    l = [].lastIndexOf,
    u = !!l && 1 / [1].lastIndexOf(1, -0) < 0,
    d = s('lastIndexOf');
e.exports =
    u || !d
        ? function (e) {
              if (u) return r(l, this, arguments) || 0;
              var t = o(this),
                  n = i(t),
                  s = n - 1;
              for (arguments.length > 1 && (s = c(s, a(arguments[1]))), s < 0 && (s = n + s); s >= 0; s--) if (s in t && t[s] === e) return s || 0;
              return -1;
          }
        : l;

var r = n(498996),
    o = n(658971),
    a = n(505072),
    i = n(174344),
    s = n(271537),
    c = Math.min,
    l = [].lastIndexOf,
    u = !!l && 1 / [1].lastIndexOf(1, -0) < 0,
    d = s('lastIndexOf');
e.exports =
    u || !d
        ? function (e) {
              if (u) return r(l, this, arguments) || 0;
              var t = o(this),
                  n = i(t);
              if (0 === n) return -1;
              var s = n - 1;
              for (arguments.length > 1 && (s = c(s, a(arguments[1]))), s < 0 && (s = n + s); s >= 0; s--) if (s in t && t[s] === e) return s || 0;
              return -1;
          }
        : l;

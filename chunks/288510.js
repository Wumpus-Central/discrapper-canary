var e = n(764908),
    o = n(779688),
    i = n(565413).start,
    u = RangeError,
    s = isFinite,
    c = Math.abs,
    f = Date.prototype,
    a = f.toISOString,
    p = e(f.getTime),
    l = e(f.getUTCDate),
    v = e(f.getUTCFullYear),
    y = e(f.getUTCHours),
    h = e(f.getUTCMilliseconds),
    x = e(f.getUTCMinutes),
    d = e(f.getUTCMonth),
    g = e(f.getUTCSeconds);
t.exports =
    o(function () {
        return '0385-07-25T07:06:39.999Z' !== a.call(new Date(-50000000000000 - 1));
    }) ||
    !o(function () {
        a.call(new Date(NaN));
    })
        ? function () {
              if (!s(p(this))) throw new u('Invalid time value');
              var t = v(this),
                  r = h(this),
                  n = t < 0 ? '-' : t > 9999 ? '+' : '';
              return n + i(c(t), n ? 6 : 4, 0) + '-' + i(d(this) + 1, 2, 0) + '-' + i(l(this), 2, 0) + 'T' + i(y(this), 2, 0) + ':' + i(x(this), 2, 0) + ':' + i(g(this), 2, 0) + '.' + i(r, 3, 0) + 'Z';
          }
        : a;

var n = e(675879),
    o = e(486816),
    s = e(424784).start,
    i = RangeError,
    u = isFinite,
    c = Math.abs,
    a = Date.prototype,
    f = a.toISOString,
    p = n(a.getTime),
    l = n(a.getUTCDate),
    v = n(a.getUTCFullYear),
    y = n(a.getUTCHours),
    h = n(a.getUTCMilliseconds),
    x = n(a.getUTCMinutes),
    d = n(a.getUTCMonth),
    g = n(a.getUTCSeconds);
t.exports =
    o(function () {
        return "0385-07-25T07:06:39.999Z" !== f.call(new Date(-5e13 - 1));
    }) ||
    !o(function () {
        f.call(new Date(NaN));
    })
        ? function () {
              if (!u(p(this))) throw new i("Invalid time value");
              var t = v(this),
                  r = h(this),
                  e = t < 0 ? "-" : t > 9999 ? "+" : "";
              return (
                  e +
                  s(c(t), e ? 6 : 4, 0) +
                  "-" +
                  s(d(this) + 1, 2, 0) +
                  "-" +
                  s(l(this), 2, 0) +
                  "T" +
                  s(y(this), 2, 0) +
                  ":" +
                  s(x(this), 2, 0) +
                  ":" +
                  s(g(this), 2, 0) +
                  "." +
                  s(r, 3, 0) +
                  "Z"
              );
          }
        : f;

var t = "function" == typeof Float32Array;
function r(e, t, r) {
    return (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e;
}
function n(e, t, r) {
    return 3 * (1 - 3 * r + 3 * t) * e * e + 2 * (3 * r - 6 * t) * e + 3 * t;
}
e.exports = function (e, o, i, a) {
    if (!(0 <= e && e <= 1 && 0 <= i && i <= 1)) throw Error("bezier x values must be in [0, 1] range");
    var s = t ? new Float32Array(11) : Array(11);
    if (e !== o || i !== a) for (var l = 0; l < 11; ++l) s[l] = r(0.1 * l, e, i);
    return function (t) {
        return e === o && i === a
            ? t
            : 0 === t
              ? 0
              : 1 === t
                ? 1
                : r(
                      (function (t) {
                          for (var o = 0, a = 1; 10 !== a && s[a] <= t; ++a) o += 0.1;
                          var l = o + ((t - s[--a]) / (s[a + 1] - s[a])) * 0.1,
                              u = n(l, e, i);
                          if (u >= 0.001) {
                              for (var c = l, f = 0; f < 4; ++f) {
                                  var p = n(c, e, i);
                                  if (0 === p) break;
                                  var d = r(c, e, i) - t;
                                  c -= d / p;
                              }
                              return c;
                          }
                          return 0 === u
                              ? l
                              : (function (e, t, n, o, i) {
                                    var a,
                                        s,
                                        l = 0;
                                    do (a = r((s = t + (n - t) / 2), o, i) - e) > 0 ? (n = s) : (t = s);
                                    while (Math.abs(a) > 1e-7 && ++l < 10);
                                    return s;
                                })(t, o, o + 0.1, e, i);
                      })(t),
                      o,
                      a,
                  );
    };
};

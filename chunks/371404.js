var t = "function" == typeof Float32Array;
function n(e, t, n) {
    return (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;
}
function r(e, t, n) {
    return 3 * (1 - 3 * n + 3 * t) * e * e + 2 * (3 * n - 6 * t) * e + 3 * t;
}
e.exports = function (e, i, a, o) {
    if (!(0 <= e && e <= 1 && 0 <= a && a <= 1)) throw Error("bezier x values must be in [0, 1] range");
    var s = t ? new Float32Array(11) : Array(11);
    if (e !== i || a !== o) for (var l = 0; l < 11; ++l) s[l] = n(0.1 * l, e, a);
    return function (t) {
        return e === i && a === o
            ? t
            : 0 === t
              ? 0
              : 1 === t
                ? 1
                : n(
                      (function (t) {
                          for (var i = 0, o = 1; 10 !== o && s[o] <= t; ++o) i += 0.1;
                          var l = i + ((t - s[--o]) / (s[o + 1] - s[o])) * 0.1,
                              u = r(l, e, a);
                          if (u >= 0.001) {
                              for (var c = l, d = 0; d < 4; ++d) {
                                  var f = r(c, e, a);
                                  if (0 === f) break;
                                  var p = n(c, e, a) - t;
                                  c -= p / f;
                              }
                              return c;
                          }
                          return 0 === u
                              ? l
                              : (function (e, t, r, i, a) {
                                    var o,
                                        s,
                                        l = 0;
                                    do (o = n((s = t + (r - t) / 2), i, a) - e) > 0 ? (r = s) : (t = s);
                                    while (Math.abs(o) > 1e-7 && ++l < 10);
                                    return s;
                                })(t, i, i + 0.1, e, a);
                      })(t),
                      i,
                      o,
                  );
    };
};

var r = n(161581),
    i = n(197187),
    o = n(354848),
    a = n(177448),
    s = n(626544),
    l = n(50754),
    c = n(202934),
    u = r.Function,
    d =
        /MSIE .\./.test(s) ||
        (a &&
            (function () {
                var e = r.Bun.version.split('.');
                return e.length < 3 || ('0' === e[0] && (e[1] < 3 || ('3' === e[1] && '0' === e[2])));
            })());
e.exports = function (e, t) {
    var n = t ? 2 : 1;
    return d
        ? function (r, a) {
              var s = c(arguments.length, 1) > n,
                  d = o(r) ? r : u(r),
                  f = s ? l(arguments, n) : [],
                  _ = s
                      ? function () {
                            i(d, this, f);
                        }
                      : d;
              return t ? e(_, a) : e(_);
          }
        : e;
};

r(301563);
var e = r(173850),
    i = r(859209),
    o = r(213265),
    u = r(936940),
    a = r(641236),
    c = r(251069),
    s = a('species'),
    f = RegExp.prototype;
n.exports = function (n, t, r, l) {
    var h = a(n),
        v = !u(function () {
            var t = {};
            return (
                (t[h] = function () {
                    return 7;
                }),
                7 !== ''[n](t)
            );
        }),
        p =
            v &&
            !u(function () {
                var t = !1,
                    r = /a/;
                return (
                    'split' === n &&
                        (((r = {}).constructor = {}),
                        (r.constructor[s] = function () {
                            return r;
                        }),
                        (r.flags = ''),
                        (r[h] = /./[h])),
                    (r.exec = function () {
                        return (t = !0), null;
                    }),
                    r[h](''),
                    !t
                );
            });
    if (!v || !p || r) {
        var d = e(/./[h]),
            x = t(h, ''[n], function (n, t, r, i, u) {
                var a = e(n),
                    c = t.exec;
                return c === o || c === f.exec
                    ? v && !u
                        ? {
                              done: !0,
                              value: d(t, r, i)
                          }
                        : {
                              done: !0,
                              value: a(r, t, i)
                          }
                    : { done: !1 };
            });
        i(String.prototype, n, x[0]), i(f, h, x[1]);
    }
    l && c(f[h], 'sham', !0);
};

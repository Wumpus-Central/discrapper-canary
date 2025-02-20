r(301563);
var n = r(173850),
    i = r(859209),
    o = r(213265),
    a = r(936940),
    c = r(641236),
    u = r(251069),
    s = c('species'),
    l = RegExp.prototype;
t.exports = function (t, e, r, f) {
    var p = c(t),
        v = !a(function () {
            var e = {};
            return (
                (e[p] = function () {
                    return 7;
                }),
                7 !== ''[t](e)
            );
        }),
        g =
            v &&
            !a(function () {
                var e = !1,
                    r = /a/;
                return (
                    'split' === t &&
                        (((r = {}).constructor = {}),
                        (r.constructor[s] = function () {
                            return r;
                        }),
                        (r.flags = ''),
                        (r[p] = /./[p])),
                    (r.exec = function () {
                        return (e = !0), null;
                    }),
                    r[p](''),
                    !e
                );
            });
    if (!v || !g || r) {
        var x = n(/./[p]),
            d = e(p, ''[t], function (t, e, r, i, a) {
                var c = n(t),
                    u = e.exec;
                return u === o || u === l.exec
                    ? v && !a
                        ? {
                              done: !0,
                              value: x(e, r, i)
                          }
                        : {
                              done: !0,
                              value: c(r, e, i)
                          }
                    : { done: !1 };
            });
        i(String.prototype, t, d[0]), i(l, p, d[1]);
    }
    f && u(l[p], 'sham', !0);
};

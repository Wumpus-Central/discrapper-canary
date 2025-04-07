r(35282);
var n = r(580983),
    i = r(556585),
    o = r(16721),
    a = r(621523),
    c = r(751736),
    u = r(436207),
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
        var d = /./[p],
            x = e(p, ''[t], function (t, e, r, i, a) {
                var c = e.exec;
                return c === o || c === l.exec
                    ? v && !a
                        ? {
                              done: !0,
                              value: n(d, e, r, i)
                          }
                        : {
                              done: !0,
                              value: n(t, r, e, i)
                          }
                    : { done: !1 };
            });
        i(String.prototype, t, x[0]), i(l, p, x[1]);
    }
    f && u(l[p], 'sham', !0);
};

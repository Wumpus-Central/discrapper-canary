n(35282);
var r = n(580983),
    i = n(556585),
    o = n(16721),
    a = n(621523),
    s = n(751736),
    l = n(436207),
    c = s('species'),
    u = RegExp.prototype;
e.exports = function (e, t, n, d) {
    var f = s(e),
        _ = !a(function () {
            var t = {};
            return (
                (t[f] = function () {
                    return 7;
                }),
                7 !== ''[e](t)
            );
        }),
        p =
            _ &&
            !a(function () {
                var t = !1,
                    n = /a/;
                return (
                    'split' === e &&
                        (((n = {}).constructor = {}),
                        (n.constructor[c] = function () {
                            return n;
                        }),
                        (n.flags = ''),
                        (n[f] = /./[f])),
                    (n.exec = function () {
                        return (t = !0), null;
                    }),
                    n[f](''),
                    !t
                );
            });
    if (!_ || !p || n) {
        var h = /./[f],
            m = t(f, ''[e], function (e, t, n, i, a) {
                var s = t.exec;
                return s === o || s === u.exec
                    ? _ && !a
                        ? {
                              done: !0,
                              value: r(h, t, n, i)
                          }
                        : {
                              done: !0,
                              value: r(e, n, t, i)
                          }
                    : { done: !1 };
            });
        i(String.prototype, e, m[0]), i(u, f, m[1]);
    }
    d && l(u[f], 'sham', !0);
};

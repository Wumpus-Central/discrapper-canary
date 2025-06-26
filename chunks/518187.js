r(35282);
var n = r(580983),
    i = r(556585),
    s = r(16721),
    a = r(621523),
    o = r(751736),
    u = r(436207),
    h = o('species'),
    c = RegExp.prototype;
t.exports = function (t, e, r, f) {
    var l = o(t),
        p = !a(function () {
            var e = {};
            return (
                (e[l] = function () {
                    return 7;
                }),
                7 !== ''[t](e)
            );
        }),
        v =
            p &&
            !a(function () {
                var e = !1,
                    r = /a/;
                return (
                    'split' === t &&
                        (((r = {}).constructor = {}),
                        (r.constructor[h] = function () {
                            return r;
                        }),
                        (r.flags = ''),
                        (r[l] = /./[l])),
                    (r.exec = function () {
                        return (e = !0), null;
                    }),
                    r[l](''),
                    !e
                );
            });
    if (!p || !v || r) {
        var g = /./[l],
            d = e(l, ''[t], function (t, e, r, i, a) {
                var o = e.exec;
                return o === s || o === c.exec
                    ? p && !a
                        ? {
                              done: !0,
                              value: n(g, e, r, i)
                          }
                        : {
                              done: !0,
                              value: n(t, r, e, i)
                          }
                    : { done: !1 };
            });
        i(String.prototype, t, d[0]), i(c, l, d[1]);
    }
    f && u(c[l], 'sham', !0);
};

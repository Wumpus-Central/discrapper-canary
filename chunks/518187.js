n(35282);
var r = n(580983),
    i = n(556585),
    a = n(16721),
    o = n(621523),
    s = n(751736),
    l = n(436207),
    c = s("species"),
    u = RegExp.prototype;
e.exports = function (e, t, n, d) {
    var f = s(e),
        p = !o(function () {
            var t = {};
            return (
                (t[f] = function () {
                    return 7;
                }),
                7 !== ""[e](t)
            );
        }),
        _ =
            p &&
            !o(function () {
                var t = !1,
                    n = /a/;
                return (
                    "split" === e &&
                        (((n = {}).constructor = {}),
                        (n.constructor[c] = function () {
                            return n;
                        }),
                        (n.flags = ""),
                        (n[f] = /./[f])),
                    (n.exec = function () {
                        return (t = !0), null;
                    }),
                    n[f](""),
                    !t
                );
            });
    if (!p || !_ || n) {
        var m = /./[f],
            h = t(f, ""[e], function (e, t, n, i, o) {
                var s = t.exec;
                return s === a || s === u.exec
                    ? p && !o
                        ? {
                              done: !0,
                              value: r(m, t, n, i),
                          }
                        : {
                              done: !0,
                              value: r(e, n, t, i),
                          }
                    : { done: !1 };
            });
        i(String.prototype, e, h[0]), i(u, f, h[1]);
    }
    d && l(u[f], "sham", !0);
};

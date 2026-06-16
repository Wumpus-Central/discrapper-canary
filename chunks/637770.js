"use strict";
var r = n(834647),
    a = n(664886),
    o = n(999843),
    i = n(794938),
    s = n(564904),
    l = n(554987);
r(
    { target: "Promise", stat: !0, forced: n(655246) },
    {
        all: function (e) {
            var t = this,
                n = i.f(t),
                r = n.resolve,
                c = n.reject,
                u = s(function () {
                    var n = o(t.resolve),
                        i = [],
                        s = 0,
                        u = 1;
                    l(e, function (e) {
                        var o = s++,
                            l = !1;
                        u++,
                            a(n, t, e).then(function (e) {
                                !l && ((l = !0), (i[o] = e), --u || r(i));
                            }, c);
                    }),
                        --u || r(i);
                });
            return u.error && c(u.value), n.promise;
        },
    },
);

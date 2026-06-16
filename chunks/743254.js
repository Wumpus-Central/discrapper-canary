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
        allSettled: function (e) {
            var t = this,
                n = i.f(t),
                r = n.resolve,
                c = n.reject,
                u = s(function () {
                    var n = o(t.resolve),
                        i = [],
                        s = 0,
                        c = 1;
                    l(e, function (e) {
                        var o = s++,
                            l = !1;
                        c++,
                            a(n, t, e).then(
                                function (e) {
                                    !l && ((l = !0), (i[o] = { status: "fulfilled", value: e }), --c || r(i));
                                },
                                function (e) {
                                    !l && ((l = !0), (i[o] = { status: "rejected", reason: e }), --c || r(i));
                                },
                            );
                    }),
                        --c || r(i);
                });
            return u.error && c(u.value), n.promise;
        },
    },
);

"use strict";
var r = n(834647),
    a = n(280173),
    o = n(554987),
    i = n(463843).set;
r(
    { target: "Map", proto: !0, real: !0, arity: 1, forced: !0 },
    {
        merge: function (e) {
            for (var t = a(this), n = arguments.length, r = 0; r < n; )
                o(
                    arguments[r++],
                    function (e, n) {
                        i(t, e, n);
                    },
                    { AS_ENTRIES: !0 },
                );
            return t;
        },
    },
);

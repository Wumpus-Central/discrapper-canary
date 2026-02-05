"use strict";
var r = n(557939),
    i = n(250594),
    a = n(503199),
    s = n(120394),
    o = n(633228);
r(
    { target: "Array", proto: !0 },
    {
        at: function (e) {
            var t = i(this),
                n = a(t),
                r = s(e),
                o = r >= 0 ? r : n + r;
            return o < 0 || o >= n ? void 0 : t[o];
        },
    },
),
    o("at");

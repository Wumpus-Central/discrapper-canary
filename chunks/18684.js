"use strict";
var r = n(834647),
    a = n(280173),
    o = n(381568);
r(
    { target: "Map", proto: !0, real: !0, forced: !0 },
    {
        keyOf: function (e) {
            var t = o(
                a(this),
                function (t, n) {
                    if (t === e) return { key: n };
                },
                !0,
            );
            return t && t.key;
        },
    },
);

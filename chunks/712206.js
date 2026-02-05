"use strict";
var r = n(834647),
    a = n(559242),
    o = n(529030),
    i = n(794779),
    s = n(918078),
    l = n(107532);
r(
    { target: "Array", proto: !0 },
    {
        flat: function () {
            var e = arguments.length ? arguments[0] : void 0,
                t = o(this),
                n = i(t),
                r = l(t, 0);
            return (r.length = a(r, t, t, n, 0, void 0 === e ? 1 : s(e))), r;
        },
    },
);

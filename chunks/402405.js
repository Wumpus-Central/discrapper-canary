"use strict";
var r = n(834647),
    a = n(683570),
    o = n(780940),
    i = n(145595),
    s = n(976467).CONSTRUCTOR,
    l = n(961549),
    c = a("Promise"),
    u = o && !s;
r(
    { target: "Promise", stat: !0, forced: o || s },
    {
        resolve: function (e) {
            return l(u && this === c ? i : this, e);
        },
    },
);

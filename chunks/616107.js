"use strict";
var r = n(834647),
    a = n(675879),
    o = n(453669),
    i = a([].reverse),
    s = [1, 2];
r(
    { target: "Array", proto: !0, forced: String(s) === String(s.reverse()) },
    {
        reverse: function () {
            return o(this) && (this.length = this.length), i(this);
        },
    },
);

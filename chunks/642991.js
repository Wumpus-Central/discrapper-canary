"use strict";
var n = e(610475),
    o = e(433979),
    s = e(587822),
    i = e(500968);
t.exports = function (t) {
    var r = n(this),
        e = i(t);
    return (
        !(o(r) > e.size) &&
        !1 !==
            s(
                r,
                function (t) {
                    if (!e.includes(t)) return !1;
                },
                !0,
            )
    );
};

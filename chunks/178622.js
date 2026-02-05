"use strict";
r.d(t, { A: () => a });
var n = r(292299),
    o = r(841677);
let a = function (e) {
    return (0, n.A)(function (t, r) {
        var n = -1,
            a = r.length,
            i = a > 1 ? r[a - 1] : void 0,
            l = a > 2 ? r[2] : void 0;
        for (
            i = e.length > 3 && "function" == typeof i ? (a--, i) : void 0,
                l && (0, o.A)(r[0], r[1], l) && ((i = a < 3 ? void 0 : i), (a = 1)),
                t = Object(t);
            ++n < a;
        ) {
            var s = r[n];
            s && e(t, s, n, i);
        }
        return t;
    });
};

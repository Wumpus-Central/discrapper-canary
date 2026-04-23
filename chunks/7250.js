"use strict";
n.d(t, { j: () => s });
var i = n(317097);
function s(e) {
    let { backgroundColor: t, colors: n } = e,
        [s, r] = n,
        l = "string" == typeof t ? (0, i.LX)(t) : t,
        a = "string" == typeof s ? (0, i.LX)(s) : s,
        o = "string" == typeof r ? (0, i.LX)(r) : r;
    return (0, i.bJ)(l, a) > (0, i.bJ)(l, o) ? s : r;
}

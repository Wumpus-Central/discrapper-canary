"use strict";
n.r(t), n.d(t, { default: () => a });
var r = n(29583),
    i = n(618027);
function a(e, t) {
    (0, i.A)(2, arguments);
    var n = (0, r.default)(e).getTime(),
        a = (0, r.default)(t.start).getTime(),
        s = (0, r.default)(t.end).getTime();
    if (!(a <= s)) throw RangeError("Invalid interval");
    return n >= a && n <= s;
}

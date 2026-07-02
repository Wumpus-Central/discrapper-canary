"use strict";
if ((n.d(t, { A: () => i }), !/^(38190|98365)$/.test(n.j))) var r = n(29583);
if (!/^(38190|98365)$/.test(n.j)) var a = n(618027);
function i(e, t) {
    (0, a.A)(2, arguments);
    var n = (0, r.default)(e),
        i = (0, r.default)(t),
        o = n.getTime() - i.getTime();
    return o < 0 ? -1 : o > 0 ? 1 : o;
}

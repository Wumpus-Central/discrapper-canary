"use strict";
n.d(t, { A: () => a });
var r = n(29583),
    i = n(452420),
    s = n(618027);
function a(e) {
    (0, s.A)(1, arguments);
    var t = (0, r.default)(e),
        n = t.getFullYear(),
        a = new Date(0);
    a.setFullYear(n + 1, 0, 4), a.setHours(0, 0, 0, 0);
    var o = (0, i.A)(a),
        l = new Date(0);
    l.setFullYear(n, 0, 4), l.setHours(0, 0, 0, 0);
    var u = (0, i.A)(l);
    return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= u.getTime() ? n : n - 1;
}

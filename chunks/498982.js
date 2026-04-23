"use strict";
n.d(t, { A: () => i });
var r = n(10813),
    a = n(964246),
    o = n(143794);
function i(e, t) {
    if (null == e) return {};
    var n,
        i,
        s = (0, o.A)(e, t);
    if (r) {
        var l = r(e);
        for (i = 0; i < l.length; i++)
            (n = l[i]), -1 === a(t).call(t, n) && {}.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
    }
    return s;
}

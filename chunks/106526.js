"use strict";
r.d(t, { A: () => n });
var a = r(299146);
function n(e, t) {
    if (null == e) return {};
    var r,
        n,
        s = (0, a.A)(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (n = 0; n < o.length; n++)
            (r = o[n]), -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
    }
    return s;
}

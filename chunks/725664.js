"use strict";
function n(t, r) {
    if (null == t) return {};
    var e = {};
    for (var n in t)
        if ({}.hasOwnProperty.call(t, n)) {
            if (-1 !== r.indexOf(n)) continue;
            e[n] = t[n];
        }
    return e;
}
e.d(r, { A: () => n });

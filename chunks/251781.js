"use strict";
r.d(t, { A: () => n });
let n = function (e, t) {
    for (var r = -1, n = null == e ? 0 : e.length, o = 0, a = []; ++r < n; ) {
        var i = e[r];
        t(i, r, e) && (a[o++] = i);
    }
    return a;
};

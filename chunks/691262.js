"use strict";
t.extend = function (e) {
    var t,
        n,
        o,
        i,
        a = Array.prototype.slice.call(arguments, 1);
    for (t = 0, n = a.length; t < n; t += 1) if ((o = a[t])) for (i in o) r.call(o, i) && (e[i] = o[i]);
    return e;
};
var r = Object.prototype.hasOwnProperty;
t.hop = r;

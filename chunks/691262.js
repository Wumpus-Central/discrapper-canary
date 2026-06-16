"use strict";
t.extend = function (e) {
    var t,
        i,
        r,
        s,
        a = Array.prototype.slice.call(arguments, 1);
    for (t = 0, i = a.length; t < i; t += 1) if ((r = a[t])) for (s in r) n.call(r, s) && (e[s] = r[s]);
    return e;
};
var n = Object.prototype.hasOwnProperty;
t.hop = n;

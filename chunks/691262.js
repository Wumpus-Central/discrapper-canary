"use strict";
t.extend = function (e) {
    var t,
        r,
        i,
        s,
        a = Array.prototype.slice.call(arguments, 1);
    for (t = 0, r = a.length; t < r; t += 1) if ((i = a[t])) for (s in i) n.call(i, s) && (e[s] = i[s]);
    return e;
};
var n = Object.prototype.hasOwnProperty;
t.hop = n;

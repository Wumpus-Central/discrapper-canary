"use strict";
t.extend = function (e) {
    var t,
        n,
        i,
        o,
        a = Array.prototype.slice.call(arguments, 1);
    for (t = 0, n = a.length; t < n; t += 1) if ((i = a[t])) for (o in i) r.call(i, o) && (e[o] = i[o]);
    return e;
};
var r = Object.prototype.hasOwnProperty;
t.hop = r;

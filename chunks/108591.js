"use strict";
var r = n(503199);
e.exports = function (e, t) {
    for (var n = r(e), i = new t(n), s = 0; s < n; s++) i[s] = e[n - s - 1];
    return i;
};

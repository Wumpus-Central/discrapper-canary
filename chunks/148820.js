"use strict";
var n = r(46990),
    o = r(741623);
e.exports = function (e) {
    if ("number" != typeof e && "bigint" != typeof e) throw new o("argument must be a Number or a BigInt");
    var t = e < 0 ? -n(-e) : n(e);
    return 0 === t ? 0 : t;
};

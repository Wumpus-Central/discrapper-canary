"use strict";
var n = r(746500),
    o = r(557982),
    i = r(148820),
    a = r(862400);
e.exports = function (e) {
    var t = o(e);
    if (!a(t) || 0 === t) return 0;
    var r = n(i(t), 0x100000000);
    return 0 === r ? 0 : r;
};

"use strict";
var r = n(746500),
    i = n(557982),
    s = n(148820),
    a = n(862400);
e.exports = function (e) {
    var t = i(e);
    if (!a(t) || 0 === t) return 0;
    var n = r(s(t), 0x100000000);
    return 0 === n ? 0 : n;
};

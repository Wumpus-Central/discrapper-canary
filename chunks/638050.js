"use strict";
var r = n(715804),
    a = n(982380),
    o = String.prototype;
e.exports = function (e) {
    var t = e.repeat;
    return "string" == typeof e || e === o || (r(o, e) && t === o.repeat) ? a : t;
};

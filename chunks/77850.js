"use strict";
var r = n(715804),
    a = n(728484),
    o = Array.prototype;
e.exports = function (e) {
    var t = e.flat;
    return e === o || (r(o, e) && t === o.flat) ? a : t;
};

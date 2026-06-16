"use strict";
var r = n(715804),
    a = n(978387),
    o = Function.prototype;
e.exports = function (e) {
    var t = e.bind;
    return e === o || (r(o, e) && t === o.bind) ? a : t;
};

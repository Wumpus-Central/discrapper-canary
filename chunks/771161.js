"use strict";
var i = n(120394),
    r = RangeError;
e.exports = function (e) {
    var t = i(e);
    if (t < 0) throw new r("The argument can't be less than 0");
    return t;
};

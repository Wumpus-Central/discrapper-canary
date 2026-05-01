"use strict";
var i = n(771161),
    r = RangeError;
e.exports = function (e, t) {
    var n = i(e);
    if (n % t) throw new r("Wrong offset");
    return n;
};

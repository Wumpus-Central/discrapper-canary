"use strict";
var r = TypeError;
t.exports = function (t) {
    if (t > 0x1fffffffffffff) throw r("Maximum allowed index exceeded");
    return t;
};

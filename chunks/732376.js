"use strict";
var t = TypeError,
    n = 0x1fffffffffffff;
e.exports = function (e) {
    if (e > n) throw t("Maximum allowed index exceeded");
    return e;
};

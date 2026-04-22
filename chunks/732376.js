"use strict";
var t = TypeError;
e.exports = function (e) {
    if (e > 0x1fffffffffffff) throw t("Maximum allowed index exceeded");
    return e;
};

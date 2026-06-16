"use strict";
var r = n(663172),
    a = TypeError;
e.exports = function (e) {
    if (
        "object" == typeof e &&
        "size" in e &&
        "has" in e &&
        "get" in e &&
        "set" in e &&
        "delete" in e &&
        "entries" in e
    )
        return e;
    throw new a(r(e) + " is not a map");
};

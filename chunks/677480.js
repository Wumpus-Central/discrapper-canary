"use strict";
var n = r(439619)("%Array%"),
    i = !n.isArray && r(906046)("Object.prototype.toString");
e.exports =
    n.isArray ||
    function (e) {
        return "[object Array]" === i(e);
    };

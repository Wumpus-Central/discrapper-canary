"use strict";
var r = n(439619)("%Array%"),
    i = !r.isArray && n(906046)("Object.prototype.toString");
e.exports =
    r.isArray ||
    function (e) {
        return "[object Array]" === i(e);
    };

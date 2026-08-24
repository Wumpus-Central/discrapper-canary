"use strict";
var t = TypeError;
e.exports = function (e) {
    if (!e || "function" != typeof e.next) throw new t("iterator must be an object with a `next` method");
    if (arguments.length > 1) {
        var r,
            n = arguments[1];
        if ("function" != typeof n) throw new t("`callback`, if provided, must be a function");
    }
    for (var i = n || []; (r = e.next()) && !r.done; ) n ? n(r.value) : i.push(r.value);
    if (!n) return i;
};

"use strict";
var n = e(248438),
    o = String,
    s = TypeError;
t.exports = function (t) {
    if (n(t)) return t;
    throw new s("Can't set " + o(t) + " as a prototype");
};

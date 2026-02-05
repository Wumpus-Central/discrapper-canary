"use strict";
r.d(t, { A: () => o });
var n = Function.prototype.toString;
let o = function (e) {
    if (null != e) {
        try {
            return n.call(e);
        } catch (e) {}
        try {
            return e + "";
        } catch (e) {}
    }
    return "";
};

"use strict";
r.d(t, { A: () => a });
var n = r(944899),
    o = Object.prototype.hasOwnProperty;
let a = function (e) {
    var t = this.__data__;
    if (n.A) {
        var r = t[e];
        return "__lodash_hash_undefined__" === r ? void 0 : r;
    }
    return o.call(t, e) ? t[e] : void 0;
};

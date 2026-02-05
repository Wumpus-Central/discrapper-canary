"use strict";
r.d(t, { A: () => a });
var n = r(666467),
    o = Array.prototype.splice;
let a = function (e) {
    var t = this.__data__,
        r = (0, n.A)(t, e);
    return !(r < 0) && (r == t.length - 1 ? t.pop() : o.call(t, r, 1), --this.size, !0);
};

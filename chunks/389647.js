"use strict";
r.d(t, { A: () => n });
let n = function (e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= !!t), t;
};

"use strict";
r.d(t, { A: () => i });
var n = r(839948),
    o = r(499896),
    a = r(403396);
let i = function (e, t) {
    var r = this.__data__;
    if (r instanceof n.A) {
        var i = r.__data__;
        if (!o.A || i.length < 199) return i.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new a.A(i);
    }
    return r.set(e, t), (this.size = r.size), this;
};

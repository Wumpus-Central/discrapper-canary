r.d(t, { Z: () => a });
var n = r(790215),
    o = Array.prototype.splice;
let a = function (e) {
    var t = this.__data__,
        r = (0, n.Z)(t, e);
    return !(r < 0) && (r == t.length - 1 ? t.pop() : o.call(t, r, 1), --this.size, !0);
};

n.d(t, { Z: () => a });
var i = n(790215),
    r = Array.prototype.splice;
let a = function (e) {
    var t = this.__data__,
        n = (0, i.Z)(t, e);
    return !(n < 0) && (n == t.length - 1 ? t.pop() : r.call(t, n, 1), --this.size, !0);
};

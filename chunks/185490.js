var i = r(790215),
    a = Array.prototype.splice;
function o(e) {
    var n = this.__data__,
        r = (0, i.Z)(n, e);
    return !(r < 0) && (r == n.length - 1 ? n.pop() : a.call(n, r, 1), --this.size, !0);
}
n.Z = o;

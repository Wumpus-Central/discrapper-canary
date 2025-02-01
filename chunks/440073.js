var r = a(815869),
    n = Array.prototype.splice;
t.exports = function (t) {
    var e = this.__data__,
        a = r(e, t);
    return !(a < 0) && (a == e.length - 1 ? e.pop() : n.call(e, a, 1), --this.size, !0);
};

var i = n(559969),
    r = Array.prototype.splice;
function a(e) {
    var t = this.__data__,
        n = i(t, e);
    return !(n < 0) && (n == t.length - 1 ? t.pop() : r.call(t, n, 1), --this.size, !0);
}
e.exports = a;

var r = n(559969),
    i = Array.prototype.splice;
function o(e) {
    var t = this.__data__,
        n = r(t, e);
    return !(n < 0) && (n == t.length - 1 ? t.pop() : i.call(t, n, 1), --this.size, !0);
}
e.exports = o;

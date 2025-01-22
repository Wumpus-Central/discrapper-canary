var i = r(559969),
    a = Array.prototype.splice;
function o(e) {
    var n = this.__data__,
        r = i(n, e);
    return !(r < 0) && (r == n.length - 1 ? n.pop() : a.call(n, r, 1), --this.size, !0);
}
e.exports = o;

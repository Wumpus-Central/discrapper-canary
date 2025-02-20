var r = n(559969);
function i(e, t) {
    var n = this.__data__,
        i = r(n, e);
    return i < 0 ? (++this.size, n.push([e, t])) : (n[i][1] = t), this;
}
e.exports = i;

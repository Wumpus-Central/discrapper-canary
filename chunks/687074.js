var r = a(815869);
t.exports = function (t, e) {
    var a = this.__data__,
        n = r(a, t);
    return n < 0 ? (++this.size, a.push([t, e])) : (a[n][1] = e), this;
};

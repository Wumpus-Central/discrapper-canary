var r = a(900624),
    n = a(117973),
    _ = a(302767);
t.exports = function (t, e) {
    var a = this.__data__;
    if (a instanceof r) {
        var o = a.__data__;
        if (!n || o.length < 199) return o.push([t, e]), (this.size = ++a.size), this;
        a = this.__data__ = new _(o);
    }
    return a.set(t, e), (this.size = a.size), this;
};

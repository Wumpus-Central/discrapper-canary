var r = a(900624),
    n = a(117973),
    o = a(302767);
t.exports = function (t, e) {
    var a = this.__data__;
    if (a instanceof r) {
        var _ = a.__data__;
        if (!n || _.length < 199) return _.push([t, e]), (this.size = ++a.size), this;
        a = this.__data__ = new o(_);
    }
    return a.set(t, e), (this.size = a.size), this;
};

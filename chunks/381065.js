var r = n(710170),
    i = n(481062),
    a = n(660326),
    o = 200;
e.exports = function (e, t) {
    var n = this.__data__;
    if (n instanceof r) {
        var s = n.__data__;
        if (!i || s.length < o - 1) return s.push([e, t]), (this.size = ++n.size), this;
        n = this.__data__ = new a(s);
    }
    return n.set(e, t), (this.size = n.size), this;
};

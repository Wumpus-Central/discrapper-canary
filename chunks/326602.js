var r = n(634622),
    i = n(585022),
    s = n(581006);
e.exports = function (e, t) {
    var n = this.__data__;
    if (n instanceof r) {
        var a = n.__data__;
        if (!i || a.length < 199) return a.push([e, t]), (this.size = ++n.size), this;
        n = this.__data__ = new s(a);
    }
    return n.set(e, t), (this.size = n.size), this;
};

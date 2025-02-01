var i = n(710170),
    r = n(481062),
    a = n(660326),
    s = 200;
function o(e, t) {
    var n = this.__data__;
    if (n instanceof i) {
        var o = n.__data__;
        if (!r || o.length < s - 1) return o.push([e, t]), (this.size = ++n.size), this;
        n = this.__data__ = new a(o);
    }
    return n.set(e, t), (this.size = n.size), this;
}
e.exports = o;

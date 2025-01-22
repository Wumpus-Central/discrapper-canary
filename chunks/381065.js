var i = r(710170),
    a = r(481062),
    o = r(660326),
    s = 200;
function l(e, n) {
    var r = this.__data__;
    if (r instanceof i) {
        var l = r.__data__;
        if (!a || l.length < s - 1) return l.push([e, n]), (this.size = ++r.size), this;
        r = this.__data__ = new o(l);
    }
    return r.set(e, n), (this.size = r.size), this;
}
e.exports = l;

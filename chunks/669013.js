var o = r(465758);
function n(t, e) {
    if (void 0 == t.length) throw Error(t.length + '/' + e);
    for (var r = 0; r < t.length && 0 == t[r]; ) r++;
    this.num = Array(t.length - r + e);
    for (var o = 0; o < t.length - r; o++) this.num[o] = t[o + r];
}
(n.prototype = {
    get: function (t) {
        return this.num[t];
    },
    getLength: function () {
        return this.num.length;
    },
    multiply: function (t) {
        for (var e = Array(this.getLength() + t.getLength() - 1), r = 0; r < this.getLength(); r++) for (var i = 0; i < t.getLength(); i++) e[r + i] ^= o.gexp(o.glog(this.get(r)) + o.glog(t.get(i)));
        return new n(e, 0);
    },
    mod: function (t) {
        if (this.getLength() - t.getLength() < 0) return this;
        for (var e = o.glog(this.get(0)) - o.glog(t.get(0)), r = Array(this.getLength()), i = 0; i < this.getLength(); i++) r[i] = this.get(i);
        for (var i = 0; i < t.getLength(); i++) r[i] ^= o.gexp(o.glog(t.get(i)) + e);
        return new n(r, 0).mod(t);
    }
}),
    (t.exports = n);

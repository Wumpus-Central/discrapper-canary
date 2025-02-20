var r = a(961499);
t.exports = function (t, e) {
    var a = r(this, t),
        n = a.size;
    return a.set(t, e), (this.size += +(a.size != n)), this;
};

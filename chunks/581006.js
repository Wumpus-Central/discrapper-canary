var r = n(538485),
    i = n(481157),
    a = n(75820),
    s = n(273083),
    o = n(797576);

function l(e) {
    var t = -1,
        n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
    }
}
(l.prototype.clear = r),
    (l.prototype.delete = i),
    (l.prototype.get = a),
    (l.prototype.has = s),
    (l.prototype.set = o),
    (e.exports = l);

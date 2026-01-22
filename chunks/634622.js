var r = n(273701),
    i = n(713813),
    a = n(426844),
    s = n(721752),
    o = n(347864);

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

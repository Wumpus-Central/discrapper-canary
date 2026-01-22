var r = n(527092),
    i = n(547970),
    a = n(706653),
    s = n(477105),
    o = n(805369);

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

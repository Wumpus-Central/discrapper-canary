var i = n(527092),
    r = n(547970),
    s = n(706653),
    a = n(477105),
    o = n(805369);
function l(e) {
    var t = -1,
        n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
        var i = e[t];
        this.set(i[0], i[1]);
    }
}
(l.prototype.clear = i),
    (l.prototype.delete = r),
    (l.prototype.get = s),
    (l.prototype.has = a),
    (l.prototype.set = o),
    (e.exports = l);

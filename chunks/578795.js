var r = n(356458),
    i = n(987308),
    a = n(630207),
    s = n(178307),
    o = n(304539);
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

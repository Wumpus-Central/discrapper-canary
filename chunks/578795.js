var i = n(356458),
    r = n(987308),
    s = n(630207),
    a = n(178307),
    o = n(304539);
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

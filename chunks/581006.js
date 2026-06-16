var i = n(538485),
    r = n(481157),
    s = n(75820),
    a = n(495464),
    o = n(797576);
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

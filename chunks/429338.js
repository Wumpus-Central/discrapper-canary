var i = r(829132);
function a(e) {
    (this.data = e), (this.left = null), (this.right = null);
}
function o(e) {
    (this._root = null), (this._comparator = e), (this.size = 0);
}
(a.prototype.get_child = function (e) {
    return e ? this.right : this.left;
}),
    (a.prototype.set_child = function (e, n) {
        e ? (this.right = n) : (this.left = n);
    }),
    (o.prototype = new i()),
    (o.prototype.insert = function (e) {
        if (null === this._root) return (this._root = new a(e)), this.size++, !0;
        for (var n = 0, r = null, i = this._root; ; ) {
            if (null === i) return (i = new a(e)), r.set_child(n, i), (ret = !0), this.size++, !0;
            if (0 === this._comparator(i.data, e)) return !1;
            (n = 0 > this._comparator(i.data, e)), (r = i), (i = i.get_child(n));
        }
    }),
    (o.prototype.remove = function (e) {
        if (null === this._root) return !1;
        var n = new a(void 0),
            r = n;
        r.right = this._root;
        for (var i = null, o = null, s = 1; null !== r.get_child(s); ) {
            (i = r), (r = r.get_child(s));
            var l = this._comparator(e, r.data);
            (s = l > 0), 0 === l && (o = r);
        }
        return null !== o && ((o.data = r.data), i.set_child(i.right === r, r.get_child(null === r.left)), (this._root = n.right), this.size--, !0);
    }),
    (e.exports = o);

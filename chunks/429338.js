var i = n(829132);
function r(e) {
    (this.data = e), (this.left = null), (this.right = null);
}
function a(e) {
    (this._root = null), (this._comparator = e), (this.size = 0);
}
(r.prototype.get_child = function (e) {
    return e ? this.right : this.left;
}),
    (r.prototype.set_child = function (e, t) {
        e ? (this.right = t) : (this.left = t);
    }),
    (a.prototype = new i()),
    (a.prototype.insert = function (e) {
        if (null === this._root) return (this._root = new r(e)), this.size++, !0;
        for (var t = 0, n = null, i = this._root; ; ) {
            if (null === i) return (i = new r(e)), n.set_child(t, i), (ret = !0), this.size++, !0;
            if (0 === this._comparator(i.data, e)) return !1;
            (t = 0 > this._comparator(i.data, e)), (n = i), (i = i.get_child(t));
        }
    }),
    (a.prototype.remove = function (e) {
        if (null === this._root) return !1;
        var t = new r(void 0),
            n = t;
        n.right = this._root;
        for (var i = null, a = null, s = 1; null !== n.get_child(s); ) {
            (i = n), (n = n.get_child(s));
            var o = this._comparator(e, n.data);
            (s = o > 0), 0 === o && (a = n);
        }
        return null !== a && ((a.data = n.data), i.set_child(i.right === n, n.get_child(null === n.left)), (this._root = t.right), this.size--, !0);
    }),
    (e.exports = a);

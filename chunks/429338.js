var r = n(829132);
function i(e) {
    (this.data = e), (this.left = null), (this.right = null);
}
function a(e) {
    (this._root = null), (this._comparator = e), (this.size = 0);
}
(i.prototype.get_child = function (e) {
    return e ? this.right : this.left;
}),
    (i.prototype.set_child = function (e, t) {
        e ? (this.right = t) : (this.left = t);
    }),
    (a.prototype = new r()),
    (a.prototype.insert = function (e) {
        if (null === this._root) return (this._root = new i(e)), this.size++, !0;
        for (var t = 0, n = null, r = this._root; ; ) {
            if (null === r) return (r = new i(e)), n.set_child(t, r), (ret = !0), this.size++, !0;
            if (0 === this._comparator(r.data, e)) return !1;
            (t = 0 > this._comparator(r.data, e)), (n = r), (r = r.get_child(t));
        }
    }),
    (a.prototype.remove = function (e) {
        if (null === this._root) return !1;
        var t = new i(void 0),
            n = t;
        n.right = this._root;
        for (var r = null, a = null, o = 1; null !== n.get_child(o); ) {
            (r = n), (n = n.get_child(o));
            var s = this._comparator(e, n.data);
            (o = s > 0), 0 === s && (a = n);
        }
        return null !== a && ((a.data = n.data), r.set_child(r.right === n, n.get_child(null === n.left)), (this._root = t.right), this.size--, !0);
    }),
    (e.exports = a);

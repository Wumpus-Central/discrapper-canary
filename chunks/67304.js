var n = r(744784);
function i(e) {
    (this.data = e), (this.left = null), (this.right = null);
}
function o(e) {
    (this._root = null), (this._comparator = e), (this.size = 0);
}
(i.prototype.get_child = function (e) {
    return e ? this.right : this.left;
}),
    (i.prototype.set_child = function (e, t) {
        e ? (this.right = t) : (this.left = t);
    }),
    (o.prototype = new n()),
    (o.prototype.insert = function (e) {
        if (null === this._root) return (this._root = new i(e)), this.size++, !0;
        for (var t = 0, r = null, n = this._root; ; ) {
            if (null === n) return (n = new i(e)), r.set_child(t, n), (ret = !0), this.size++, !0;
            if (0 === this._comparator(n.data, e)) return !1;
            (t = 0 > this._comparator(n.data, e)), (r = n), (n = n.get_child(t));
        }
    }),
    (o.prototype.remove = function (e) {
        if (null === this._root) return !1;
        var t = new i(void 0),
            r = t;
        r.right = this._root;
        for (var n = null, o = null, a = 1; null !== r.get_child(a); ) {
            (n = r), (r = r.get_child(a));
            var s = this._comparator(e, r.data);
            (a = s > 0), 0 === s && (o = r);
        }
        return (
            null !== o &&
            ((o.data = r.data),
            n.set_child(n.right === r, r.get_child(null === r.left)),
            (this._root = t.right),
            this.size--,
            !0)
        );
    }),
    (e.exports = o);

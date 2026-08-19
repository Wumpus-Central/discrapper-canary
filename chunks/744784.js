function t() {}
function r(e) {
    (this._tree = e), (this._ancestors = []), (this._cursor = null);
}
(t.prototype.clear = function () {
    (this._root = null), (this.size = 0);
}),
    (t.prototype.find = function (e) {
        for (var t = this._root; null !== t; ) {
            var r = this._comparator(e, t.data);
            if (0 === r) return t.data;
            t = t.get_child(r > 0);
        }
        return null;
    }),
    (t.prototype.findIter = function (e) {
        for (var t = this._root, r = this.iterator(); null !== t; ) {
            var n = this._comparator(e, t.data);
            if (0 === n) return (r._cursor = t), r;
            r._ancestors.push(t), (t = t.get_child(n > 0));
        }
        return null;
    }),
    (t.prototype.lowerBound = function (e) {
        for (var t = this._root, r = this.iterator(), n = this._comparator; null !== t; ) {
            var o = n(e, t.data);
            if (0 === o) return (r._cursor = t), r;
            r._ancestors.push(t), (t = t.get_child(o > 0));
        }
        for (var i = r._ancestors.length - 1; i >= 0; --i)
            if (0 > n(e, (t = r._ancestors[i]).data)) return (r._cursor = t), (r._ancestors.length = i), r;
        return (r._ancestors.length = 0), r;
    }),
    (t.prototype.upperBound = function (e) {
        for (var t = this.lowerBound(e), r = this._comparator; null !== t.data() && 0 === r(t.data(), e); ) t.next();
        return t;
    }),
    (t.prototype.min = function () {
        var e = this._root;
        if (null === e) return null;
        for (; null !== e.left; ) e = e.left;
        return e.data;
    }),
    (t.prototype.max = function () {
        var e = this._root;
        if (null === e) return null;
        for (; null !== e.right; ) e = e.right;
        return e.data;
    }),
    (t.prototype.iterator = function () {
        return new r(this);
    }),
    (t.prototype.each = function (e) {
        for (var t, r = this.iterator(); null !== (t = r.next()); ) e(t);
    }),
    (t.prototype.reach = function (e) {
        for (var t, r = this.iterator(); null !== (t = r.prev()); ) e(t);
    }),
    (r.prototype.data = function () {
        return null !== this._cursor ? this._cursor.data : null;
    }),
    (r.prototype.next = function () {
        if (null === this._cursor) {
            var e,
                t = this._tree._root;
            null !== t && this._minNode(t);
        } else if (null === this._cursor.right)
            do
                if (((e = this._cursor), this._ancestors.length)) this._cursor = this._ancestors.pop();
                else {
                    this._cursor = null;
                    break;
                }
            while (this._cursor.right === e);
        else this._ancestors.push(this._cursor), this._minNode(this._cursor.right);
        return null !== this._cursor ? this._cursor.data : null;
    }),
    (r.prototype.prev = function () {
        if (null === this._cursor) {
            var e,
                t = this._tree._root;
            null !== t && this._maxNode(t);
        } else if (null === this._cursor.left)
            do
                if (((e = this._cursor), this._ancestors.length)) this._cursor = this._ancestors.pop();
                else {
                    this._cursor = null;
                    break;
                }
            while (this._cursor.left === e);
        else this._ancestors.push(this._cursor), this._maxNode(this._cursor.left);
        return null !== this._cursor ? this._cursor.data : null;
    }),
    (r.prototype._minNode = function (e) {
        for (; null !== e.left; ) this._ancestors.push(e), (e = e.left);
        this._cursor = e;
    }),
    (r.prototype._maxNode = function (e) {
        for (; null !== e.right; ) this._ancestors.push(e), (e = e.right);
        this._cursor = e;
    }),
    (e.exports = t);
